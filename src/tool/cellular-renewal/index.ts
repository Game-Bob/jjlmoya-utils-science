import type { ScienceToolEntry, ToolDefinition } from '../../types';
import CellularRenewalComponent from './component.astro';
import CellularRenewalSEO from './seo.astro';
import CellularRenewalBibliography from './bibliography.astro';

export const cellularRenewal: ScienceToolEntry = {
  slug: 'calculadora-renovacion-celular',
  icons: {
    bg: 'mdi:atom',
    fg: 'mdi:dna',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const CELLULAR_RENEWAL_TOOL: ToolDefinition = {
  entry: cellularRenewal,
  Component: CellularRenewalComponent,
  SEOComponent: CellularRenewalSEO,
  BibliographyComponent: CellularRenewalBibliography,
};
