export { scienceCategory, scienceCategory as templateCategory } from './category';
export { default as ScienceCategorySEO } from './category/seo.astro';
export { COLONY_COUNTER_TOOL } from './tool/colony-counter/index';
export { ASTEROID_IMPACT_TOOL } from './tool/asteroid-impact/index';
export { MICROWAVE_DETECTOR_TOOL } from './tool/microwave-detector/index';
export { SIMULATION_PROBABILITY_TOOL } from './tool/simulation-probability/index';
export { CELLULAR_RENEWAL_TOOL } from './tool/cellular-renewal/index';

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

