import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'chronologie-temperature-planete';
const description = 'Explorez l histoire de la temperature moyenne de la Terre a travers les eres geologiques.';
const title = 'Chronologie de la Temperature Moyenne de la Planete';

const howTo = [
  {
    name: 'Selectionner une ere',
    text: 'Cliquez sur une encoche de la regle.',
  },
  {
    name: 'Verifier la temperature',
    text: 'Lisez la temperature moyenne globale.',
  },
  {
    name: 'Observer la planete',
    text: 'Regardez le canevas reagir a l etat thermique.',
  },
];

const faq = [
  {
    question: 'La Terre etait-elle plus chaude dans le passe qu aujourd hui?',
    answer: 'Oui, durant des eres comme le Mesozoique, les temperatures etaient de 10 a 15 degres plus chaudes.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Chronologie de la Temperature de la Terre',
    sub: 'Explorez les eres climatiques geologiques de la Terre',
    ageLabel: 'Age:',
    tempLabel: 'Temperature Moyenne:',
    selectPrompt: 'Selectionnez une periode geologique.',
    epoch_archean_name: 'Eon Archeen',
    epoch_archean_age: '4,0 a 2,5 milliards d\'annees',
    epoch_archean_desc: 'Terre extremement chaude avec atmosphere de methane.',
    epoch_proterozoic_name: 'Eon Proterozoique',
    epoch_proterozoic_age: '2,5 milliards a 541 millions d\'annees',
    epoch_proterozoic_desc: 'La hausse de l\'oxygene provoque la glaciation huronienne.',
    epoch_paleozoic_name: 'Ere Paleozoique',
    epoch_paleozoic_age: '541 a 252 millions d\'annees',
    epoch_paleozoic_desc: 'Explosion de la vie marine et migration terrestre.',
    epoch_mesozoic_name: 'Ere Mesozoique',
    epoch_mesozoic_age: '252 a 66 millions d\'annees',
    epoch_mesozoic_desc: 'L\'age des dinosaures sous des conditions de serre.',
    epoch_cenozoic_name: 'Ere Cenozoique',
    epoch_cenozoic_age: '66 millions d\'annees a aujourd\'hui',
    epoch_cenozoic_desc: 'Refroidissement progressif menant aux glaciations.',
    epoch_anthropocene_name: 'Epoque de l\'Anthropocene',
    epoch_anthropocene_age: 'Present et futur',
    epoch_anthropocene_desc: 'Rechauffement rapide du aux emissions de gaz a effet de serre.',
  },
  seo: [
    {
      type: 'title',
      text: 'CLIMATOLOGIE: L histoire de la temperature geologique de la Terre',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le climat de la Terre a constamment change au cours de ses 4,5 milliards d annees d histoire, oscillant entre des etats de glaciation et d effet de serre. Ces changements sont determines par le cycle du carbone.',
    },
    {
      type: 'title',
      text: 'Les eres de serre: climats du Mesozoique et du Paleozoique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Durant l ere mesozoique, l epoque des dinosaures, la Terre a connu des conditions de serre extremes. Les temperatures mondiales moyennes ont atteint 22 degres.',
    },
    {
      type: 'title',
      text: 'Les etats de glaciation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A l inverse, la Terre est entree plusieurs fois dans des etats de glaciation. Durant l eon proterozoique, l alteration chimique a reduit le CO2, provoquant une glaciation globale.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
      applicationCategory: 'ScientificApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
