import type { ScienceCategoryEntry } from '../types';
import { colonyCounter } from '../tool/colony-counter/entry';
import { asteroidImpact } from '../tool/asteroid-impact/entry';
import { microwaveDetector } from '../tool/microwave-detector/entry';
import { simulationProbability } from '../tool/simulation-probability/entry';
import { cellularRenewal } from '../tool/cellular-renewal/entry';
import { cosmicInflation } from '../tool/cosmic-inflation/entry';
import { temperatureTimeline } from '../tool/temperature-timeline/entry';
import { lorenzAttractor } from '../tool/lorenz-attractor/entry';
import { stellarHabitabilityZone } from '../tool/stellar-habitability-zone/entry';
import { radioactiveDecay } from '../tool/radioactive-decay/entry';
import { naturalSelectionDrift } from '../tool/natural-selection-drift/entry';
import { entropySecondLaw } from '../tool/entropy-second-law/entry';
import { doubleSlitDecoherence } from '../tool/double-slit-decoherence/entry';
import { phaseDiagramCriticalPoints } from '../tool/phase-diagram-critical-points/entry';
import { twinParadoxVisualizer } from '../tool/twin-paradox-visualizer/entry';
import { mandelbrotFractal } from '../tool/mandelbrot-fractal/entry';
import { planetAtmosphereSurvival } from '../tool/planet-atmosphere-survival/entry';
import { threeBodyProblem } from '../tool/three-body-problem/entry';
import { rocheLimitSatelliteDisruption } from '../tool/roche-limit-satellite-disruption/entry';
import { dysonSphereEnergyCapture } from '../tool/dyson-sphere-energy-capture/entry';
import { globalAlbedoSnowballSimulator } from '../tool/global-albedo-snowball-simulator/entry';
import { conwayLifeRuleLab } from '../tool/conway-life-rule-lab/entry';
import { crystalLatticeStructureFinder } from '../tool/crystal-lattice-structure-finder/entry';
import { fermiParadoxFilterLab } from '../tool/fermi-paradox-filter-lab/entry';
import { epidemicSirSimulator } from '../tool/epidemic-sir-simulator/entry';
import { blackHoleEventHorizonSimulator } from '../tool/black-hole-event-horizon-simulator/entry';
import { exoplanetBiosignatureDetector } from '../tool/exoplanet-biosignature-detector/entry';

export const scienceCategory: ScienceCategoryEntry = {
  icon: 'mdi:flask',
  tools: [colonyCounter, asteroidImpact, microwaveDetector, simulationProbability, cellularRenewal, cosmicInflation, temperatureTimeline, lorenzAttractor, stellarHabitabilityZone, radioactiveDecay, naturalSelectionDrift, entropySecondLaw, doubleSlitDecoherence, phaseDiagramCriticalPoints, twinParadoxVisualizer, mandelbrotFractal, planetAtmosphereSurvival, threeBodyProblem, rocheLimitSatelliteDisruption, dysonSphereEnergyCapture, globalAlbedoSnowballSimulator, conwayLifeRuleLab, crystalLatticeStructureFinder, fermiParadoxFilterLab, epidemicSirSimulator, blackHoleEventHorizonSimulator, exoplanetBiosignatureDetector],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

