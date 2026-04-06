import type { ScienceToolEntry, ToolDefinition } from '../../types';
import AsteroidImpactComponent from './component.astro';
import AsteroidImpactSEO from './seo.astro';
import AsteroidImpactBibliography from './bibliography.astro';

export const asteroidImpact: ScienceToolEntry = {
  slug: 'simulador-impacto-asteroide',
  icons: {
    bg: 'mdi:meteor',
    fg: 'mdi:earth',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const ASTEROID_IMPACT_TOOL: ToolDefinition = {
  entry: asteroidImpact,
  Component: AsteroidImpactComponent,
  SEOComponent: AsteroidImpactSEO,
  BibliographyComponent: AsteroidImpactBibliography,
};
