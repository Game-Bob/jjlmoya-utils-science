export interface FermiInputs {
  starFormationRate: number;
  habitableFraction: number;
  lifeFraction: number;
  intelligenceFraction: number;
  technologyFraction: number;
  signalLifetime: number;
  filterSeverity: number;
  horizonYears: number;
}

export interface FermiPoint {
  year: number;
  detectable: number;
  births: number;
  losses: number;
}

export interface FermiResult {
  drakeRate: number;
  peakCivilizations: number;
  finalCivilizations: number;
  totalBirths: number;
  totalLosses: number;
  silenceScore: number;
  verdict: string;
  detail: string;
  series: FermiPoint[];
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function simulateFermiFilters(inputs: FermiInputs): FermiResult {
  const horizonYears = clamp(inputs.horizonYears, 1000, 1000000);
  const signalLifetime = clamp(inputs.signalLifetime, 100, 1000000);
  const filterSeverity = clamp(inputs.filterSeverity, 0, 0.98);
  const steps = 80;
  const stepYears = horizonYears / steps;

  const drakeRate =
    inputs.starFormationRate *
    inputs.habitableFraction *
    inputs.lifeFraction *
    inputs.intelligenceFraction *
    inputs.technologyFraction;

  const annualExtinctionRisk = -Math.log(clamp(1 - filterSeverity, 0.001, 1)) / signalLifetime;
  const survivalPerStep = Math.exp(-annualExtinctionRisk * stepYears);

  let active = 0;
  let totalBirths = 0;
  let totalLosses = 0;
  let peakCivilizations = 0;
  const series: FermiPoint[] = [];

  for (let step = 0; step <= steps; step += 1) {
    const year = Math.round(step * stepYears);
    const galacticMaturity = 1 - Math.exp(-year / (horizonYears * 0.28));
    const births = drakeRate * stepYears * galacticMaturity;
    const losses = active * (1 - survivalPerStep);
    active = Math.max(0, active + births - losses);
    totalBirths += births;
    totalLosses += losses;
    peakCivilizations = Math.max(peakCivilizations, active);

    series.push({
      year,
      detectable: active,
      births,
      losses,
    });
  }

  const finalCivilizations = active;
  const expectedNeighbors = finalCivilizations * Math.min(1, signalLifetime / Math.max(1, horizonYears));
  const silenceScore = clamp(100 / (1 + expectedNeighbors), 0, 100);

  let verdict = 'Sparse galaxy';
  let detail = 'Your assumptions create only a thin scattering of detectable societies, so radio silence is not surprising.';

  if (finalCivilizations > 10000) {
    verdict = 'Loud galaxy';
    detail = 'The model produces many overlapping technological societies. If the sky still looks silent, something outside these parameters must be hiding them.';
  } else if (finalCivilizations > 1000) {
    verdict = 'Crowded but quiet';
    detail = 'Civilizations should often coexist, but limited signal lifetimes and detection geometry can still make the galaxy feel empty.';
  } else if (finalCivilizations < 1) {
    verdict = 'Great Filter dominant';
    detail = 'The filters are severe enough that detectable societies rarely share the same epoch.';
  }

  return {
    drakeRate,
    peakCivilizations,
    finalCivilizations,
    totalBirths,
    totalLosses,
    silenceScore,
    verdict,
    detail,
    series,
  };
}
