import { asteroidImpact } from './entry';
export * from './entry';
export const ASTEROID_IMPACT_TOOL: ToolDefinition = {
  entry: asteroidImpact,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
