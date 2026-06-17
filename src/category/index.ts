import type { ScienceCategoryEntry } from '../types';
import { colonyCounter } from '../tool/colony-counter/index';
import { asteroidImpact } from '../tool/asteroid-impact/index';
import { microwaveDetector } from '../tool/microwave-detector/index';
import { simulationProbability } from '../tool/simulation-probability/index';
import { cellularRenewal } from '../tool/cellular-renewal/index';
import { cosmicInflation } from '../tool/cosmic-inflation/index';
import { temperatureTimeline } from '../tool/temperature-timeline/index';
import { lorenzAttractor } from '../tool/lorenz-attractor/index';
import { stellarHabitabilityZone } from '../tool/stellar-habitability-zone/index';
import { radioactiveDecay } from '../tool/radioactive-decay/index';
import { naturalSelectionDrift } from '../tool/natural-selection-drift/index';
import { entropySecondLaw } from '../tool/entropy-second-law/index';
import { phaseDiagramCriticalPoints } from '../tool/phase-diagram-critical-points/index';
import { twinParadoxVisualizer } from '../tool/twin-paradox-visualizer/index';

export const scienceCategory: ScienceCategoryEntry = {
  icon: 'mdi:flask',
  tools: [colonyCounter, asteroidImpact, microwaveDetector, simulationProbability, cellularRenewal, cosmicInflation, temperatureTimeline, lorenzAttractor, stellarHabitabilityZone, radioactiveDecay, naturalSelectionDrift, entropySecondLaw, phaseDiagramCriticalPoints, twinParadoxVisualizer],
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

