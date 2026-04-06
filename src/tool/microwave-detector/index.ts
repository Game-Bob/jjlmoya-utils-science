import type { ScienceToolEntry, ToolDefinition } from '../../types';
import MicrowaveDetectorComponent from './component.astro';
import MicrowaveDetectorSEO from './seo.astro';
import MicrowaveDetectorBibliography from './bibliography.astro';

export const microwaveDetector: ScienceToolEntry = {
  slug: 'detector-microondas',
  icons: {
    bg: 'mdi:microwave',
    fg: 'mdi:wifi-strength-alert-outline',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const MICROWAVE_DETECTOR_TOOL: ToolDefinition = {
  entry: microwaveDetector,
  Component: MicrowaveDetectorComponent,
  SEOComponent: MicrowaveDetectorSEO,
  BibliographyComponent: MicrowaveDetectorBibliography,
};
