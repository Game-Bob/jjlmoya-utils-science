export { scienceCategory, scienceCategory as templateCategory } from './category';
export const ScienceCategorySEO = () => import('./category/seo.astro').then((m) => m.default);
export { COLONY_COUNTER_TOOL } from './tool/colony-counter/index';
export { ASTEROID_IMPACT_TOOL } from './tool/asteroid-impact/index';
export { MICROWAVE_DETECTOR_TOOL } from './tool/microwave-detector/index';
export { SIMULATION_PROBABILITY_TOOL } from './tool/simulation-probability/index';
export { CELLULAR_RENEWAL_TOOL } from './tool/cellular-renewal/index';
export { COSMIC_INFLATION_TOOL } from './tool/cosmic-inflation/index';
export { TEMPERATURE_TIMELINE_TOOL } from './tool/temperature-timeline/index';
export { LORENZ_ATTRACTOR_TOOL } from './tool/lorenz-attractor/index';
export { STELLAR_HABITABILITY_ZONE_TOOL } from './tool/stellar-habitability-zone/index';
export { RADIOACTIVE_DECAY_TOOL } from './tool/radioactive-decay/index';
export { NATURAL_SELECTION_DRIFT_TOOL } from './tool/natural-selection-drift/index';
export { ENTROPY_SECOND_LAW_TOOL } from './tool/entropy-second-law/index';
export { PHASE_DIAGRAM_CRITICAL_POINTS_TOOL } from './tool/phase-diagram-critical-points/index';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  ScienceToolEntry,
  ScienceCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
