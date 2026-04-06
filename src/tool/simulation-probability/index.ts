import type { ScienceToolEntry, ToolDefinition } from '../../types';
import SimulationProbabilityComponent from './component.astro';
import SimulationProbabilitySEO from './seo.astro';
import SimulationProbabilityBibliography from './bibliography.astro';

export const simulationProbability: ScienceToolEntry = {
  slug: 'calculadora-probabilidad-simulacion',
  icons: {
    bg: 'mdi:matrix',
    fg: 'mdi:monitor-cellphone',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const SIMULATION_PROBABILITY_TOOL: ToolDefinition = {
  entry: simulationProbability,
  Component: SimulationProbabilityComponent,
  SEOComponent: SimulationProbabilitySEO,
  BibliographyComponent: SimulationProbabilityBibliography,
};
