import type { ScienceToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import ColonyCounterComponent from './component.astro';
import ColonyCounterSEO from './seo.astro';
import ColonyCounterBibliography from './bibliography.astro';

export interface ColonyCounterUI {
  [key: string]: string;
}

export type ColonyCounterLocaleContent = ToolLocaleContent<ColonyCounterUI>;

export const colonyCounter: ScienceToolEntry<ColonyCounterUI> = {
  id: 'colony-counter',
  icons: { bg: 'mdi:microscope', fg: 'mdi:circle-multiple' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const COLONY_COUNTER_TOOL: ToolDefinition = {
  entry: colonyCounter,
  Component: ColonyCounterComponent,
  SEOComponent: ColonyCounterSEO,
  BibliographyComponent: ColonyCounterBibliography,
};
