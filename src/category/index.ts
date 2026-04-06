import type { ScienceCategoryEntry } from '../types';
import { colonyCounter } from '../tool/colony-counter/index';
import { asteroidImpact } from '../tool/asteroid-impact/index';
import { microwaveDetector } from '../tool/microwave-detector/index';
import { simulationProbability } from '../tool/simulation-probability/index';
import { cellularRenewal } from '../tool/cellular-renewal/index';

export const scienceCategory: ScienceCategoryEntry = {
  icon: 'mdi:flask',
  tools: [colonyCounter, asteroidImpact, microwaveDetector, simulationProbability, cellularRenewal],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

