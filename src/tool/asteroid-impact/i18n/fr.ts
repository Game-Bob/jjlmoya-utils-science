import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'simulateur-impact-asteroide',
  title: 'Simulateur d\'Impact d\'Astéroïde: Calculatrice d\'Apocalypse',
  description: 'Simulez les impacts d\'astéroïdes avec une physique réelle. Calculez l\'énergie, le cratère, la radiation thermique et l\'onde de choc.',
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Bibliographie',
  ui: {
    copied: 'Copié',
    noHistory: 'Pas d\'historique',
    load: 'Charger',
    delete: 'Supprimer',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      content: 'Quand le Ciel Tombe: La Physique de l\'Apocalypse Cosmique',
    },
    {
      type: 'paragraph',
      content: 'Les astéroïdes ne sont pas seulement des roches spatiales. Ce sont des balles cosmiques voyageant à 20 km/s, capables de libérer plus d\'énergie que toutes les armes nucléaires de la planète combinées.',
    },
  ],
  faq: [
    {
      question: 'Comment l\'énergie d\'impact est-elle calculée?',
      answer: 'L\'énergie principale est cinétique: (1/2) * masse * vitesse². Nous utilisons des densités réalistes et des vitesses typiques d\'entrée atmosphérique.',
    },
  ],
  bibliography: [
    {
      name: 'Collins, G. S., et al. (2005). Earth Impact Effects Program.',
      url: 'https://impact.ese.ic.ac.uk/ImpactEarth/',
    },
  ],
  howTo: [
    {
      name: 'Choisir la taille du projectile',
      text: 'Entrez le diamètre de l\'astéroïde, de 10 mètres à 10 kilomètres.',
    },
  ],
  schemas: [],
};
