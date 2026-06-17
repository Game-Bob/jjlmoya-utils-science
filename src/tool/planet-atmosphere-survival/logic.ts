export type AtmosphereHazard = 'pressure' | 'temperature' | 'oxygen' | 'toxicity' | 'wind';

export interface PlanetAtmospherePreset {
  id: string;
  name: string;
  pressureKpa: number;
  temperatureC: number;
  oxygenFraction: number;
  co2Fraction: number;
  toxicIndex: number;
  windMps: number;
  note: string;
}

export interface SurvivalInput {
  pressureKpa: number;
  temperatureC: number;
  oxygenFraction: number;
  co2Fraction: number;
  toxicIndex: number;
  windMps: number;
}

export interface HazardScore {
  hazard: AtmosphereHazard;
  score: number;
  timeToSevereSeconds: number;
}

export interface SurvivalTimelinePoint {
  second: number;
  pressure: number;
  temperature: number;
  oxygen: number;
  toxicity: number;
  wind: number;
  total: number;
}

export interface SurvivalResult {
  survivalSeconds: number;
  limitingHazard: AtmosphereHazard;
  hazards: HazardScore[];
  timeline: SurvivalTimelinePoint[];
  verdict: string;
}

export const ATMOSPHERE_PRESETS: PlanetAtmospherePreset[] = [
  {
    id: 'mars',
    name: 'Mars',
    pressureKpa: 0.64,
    temperatureC: -63,
    oxygenFraction: 0.0013,
    co2Fraction: 0.953,
    toxicIndex: 0.28,
    windMps: 18,
    note: 'Near vacuum, extreme cold, and almost no breathable oxygen.',
  },
  {
    id: 'venus',
    name: 'Venus surface',
    pressureKpa: 9200,
    temperatureC: 464,
    oxygenFraction: 0,
    co2Fraction: 0.965,
    toxicIndex: 0.95,
    windMps: 1,
    note: 'Crushing pressure and oven-like heat dominate immediately.',
  },
  {
    id: 'titan',
    name: 'Titan',
    pressureKpa: 146.7,
    temperatureC: -179,
    oxygenFraction: 0,
    co2Fraction: 0,
    toxicIndex: 0.18,
    windMps: 2,
    note: 'Dense nitrogen air but lethal cold and no oxygen.',
  },
  {
    id: 'jupiter',
    name: 'Jupiter cloud deck',
    pressureKpa: 250,
    temperatureC: -110,
    oxygenFraction: 0,
    co2Fraction: 0,
    toxicIndex: 0.72,
    windMps: 120,
    note: 'Hydrogen-rich atmosphere, severe cold, and violent winds.',
  },
  {
    id: 'earth-everest',
    name: 'Earth, Everest summit',
    pressureKpa: 33.7,
    temperatureC: -25,
    oxygenFraction: 0.209,
    co2Fraction: 0.0004,
    toxicIndex: 0,
    windMps: 12,
    note: 'Survivable for trained climbers, but hypoxia and cold are serious.',
  },
];

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function interpolateRisk(time: number, severeTime: number): number {
  if (severeTime <= 0) return 1;
  return clamp01(Math.pow(time / severeTime, 1.25));
}

export function scoreAtmosphere(input: SurvivalInput): HazardScore[] {
  const oxygenPartialKpa = input.pressureKpa * input.oxygenFraction;
  const pressureScore = input.pressureKpa < 6.3
    ? 1
    : input.pressureKpa > 250
      ? clamp01((input.pressureKpa - 250) / 700)
      : input.pressureKpa < 55
        ? clamp01((55 - input.pressureKpa) / 48.7)
        : 0;
  const pressureTime = input.pressureKpa < 6.3 ? 12 : input.pressureKpa > 250 ? 45 / Math.max(0.15, pressureScore) : 1200 / Math.max(0.15, pressureScore);

  const coldScore = input.temperatureC < 0 ? clamp01(Math.abs(input.temperatureC) / 95) : 0;
  const heatScore = input.temperatureC > 40 ? clamp01((input.temperatureC - 40) / 140) : 0;
  const temperatureScore = Math.max(coldScore, heatScore);
  const temperatureTime = heatScore > coldScore ? 35 / Math.max(0.12, heatScore) : 900 / Math.max(0.12, coldScore);

  const oxygenScore = oxygenPartialKpa < 16 ? clamp01((16 - oxygenPartialKpa) / 16) : oxygenPartialKpa > 50 ? clamp01((oxygenPartialKpa - 50) / 110) : 0;
  const oxygenTime = oxygenPartialKpa < 6 ? 18 : oxygenPartialKpa < 16 ? 240 / Math.max(0.15, oxygenScore) : 1200 / Math.max(0.15, oxygenScore);

  const co2Score = input.co2Fraction > 0.08 ? clamp01((input.co2Fraction - 0.08) / 0.18) : 0;
  const toxicityScore = clamp01(Math.max(co2Score, input.toxicIndex));
  const toxicityTime = 180 / Math.max(0.12, toxicityScore);

  const windScore = clamp01((input.windMps - 20) / 80);
  const windTime = 300 / Math.max(0.12, windScore);

  return [
    { hazard: 'pressure', score: pressureScore, timeToSevereSeconds: pressureTime },
    { hazard: 'temperature', score: temperatureScore, timeToSevereSeconds: temperatureTime },
    { hazard: 'oxygen', score: oxygenScore, timeToSevereSeconds: oxygenTime },
    { hazard: 'toxicity', score: toxicityScore, timeToSevereSeconds: toxicityTime },
    { hazard: 'wind', score: windScore, timeToSevereSeconds: windTime },
  ];
}

export function estimateSurvival(input: SurvivalInput): SurvivalResult {
  const hazards = scoreAtmosphere(input);
  const activeHazards = hazards.filter((hazard) => hazard.score > 0.01);
  const limiting = activeHazards.reduce((fastest, hazard) => hazard.timeToSevereSeconds < fastest.timeToSevereSeconds ? hazard : fastest, activeHazards[0] ?? hazards[0]);
  const totalStress = hazards.reduce((sum, hazard) => sum + hazard.score, 0);
  const survivalSeconds = activeHazards.length === 0 ? 86400 : Math.max(8, Math.min(86400, limiting.timeToSevereSeconds / Math.max(0.85, totalStress * 0.55)));
  const timelineEnd = Math.min(Math.max(survivalSeconds * 1.2, 60), 3600);
  const timeline = Array.from({ length: 25 }, (_, index) => {
    const second = (timelineEnd / 24) * index;
    const point = {
      second,
      pressure: interpolateRisk(second, hazards[0].timeToSevereSeconds),
      temperature: interpolateRisk(second, hazards[1].timeToSevereSeconds),
      oxygen: interpolateRisk(second, hazards[2].timeToSevereSeconds),
      toxicity: interpolateRisk(second, hazards[3].timeToSevereSeconds),
      wind: interpolateRisk(second, hazards[4].timeToSevereSeconds),
      total: 0,
    };
    point.total = clamp01(Math.max(point.pressure, point.temperature, point.oxygen, point.toxicity, point.wind) * 0.72 + totalStress * 0.08);
    return point;
  });

  return {
    survivalSeconds,
    limitingHazard: limiting.hazard,
    hazards,
    timeline,
    verdict: survivalSeconds < 60 ? 'seconds' : survivalSeconds < 1800 ? 'minutes' : survivalSeconds < 21600 ? 'hours' : 'extended',
  };
}
