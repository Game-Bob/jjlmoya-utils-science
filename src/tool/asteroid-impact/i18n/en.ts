import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'asteroid-impact-simulator',
  title: 'Asteroid Impact Simulator: Apocalypse Calculator',
  description: 'Simulate asteroid impacts with real physics. Calculate energy, crater, thermal radiation and shockwave. Would you survive Chicxulub?',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
  ui: {
    copied: 'Copied',
    noHistory: 'No history',
    load: 'Load',
    delete: 'Delete',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      content: 'When the Sky Falls: The Physics of Cosmic Apocalypse',
    },
    {
      type: 'paragraph',
      content: 'Asteroids are not just space rocks. They are cosmic bullets traveling at 20 km/s, capable of releasing more energy than all nuclear weapons on the planet combined.',
    },
  ],
  faq: [
    {
      question: 'How is impact energy calculated?',
      answer: 'Primary energy is kinetic: (1/2) * mass * velocity². We use realistic densities and typical atmospheric entry velocities (11 to 72 km/s). Energy is measured in Megatons of TNT.',
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
      name: 'Choose projectile size',
      text: 'Enter the asteroid diameter, from 10 meters to 10 kilometers.',
    },
  ],
  schemas: [],
};
