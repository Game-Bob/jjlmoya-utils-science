import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = 'Dyson Sphere Energy Capture Simulator';
const description = 'Compare stellar megastructure designs by captured power, safe radius, material demand, and Kardashev scale coverage.';

const howTo = [
  { name: 'Select a star', text: 'Choose the stellar class that sets luminosity, mass, and thermal distance.' },
  { name: 'Select a structure', text: 'Compare swarm, ring, shell, and statite cloud collector assumptions.' },
  { name: 'Tune coverage', text: 'Change coverage and operating temperature to inspect power and mass tradeoffs.' },
  { name: 'Match the scale', text: 'Use the Kardashev target to see required collector coverage.' },
];

const faq = [
  { question: 'Why is a swarm useful?', answer: 'A swarm can be built from many independent collectors and avoids the instability of a rigid shell.' },
  { question: 'How is radius estimated?', answer: 'The model balances stellar luminosity with collector operating temperature.' },
  { question: 'What is the Kardashev value?', answer: 'It is a logarithmic rating derived from total captured power in watts.' },
  { question: 'Can this be used for engineering?', answer: 'No. It is a teaching model for order-of-magnitude comparison.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson collector visualization',
    starType: 'Star type',
    structureType: 'Structure',
    coverage: 'Collector coverage',
    operatingTemp: 'Operating temperature',
    kardashevTarget: 'Kardashev target',
    kardashevRating: 'Current rating',
    capturedPower: 'Captured power',
    optimalRadius: 'Optimal radius',
    targetCoverage: 'Target coverage',
    materialMass: 'Material mass',
    captureMeter: 'Target capture progress',
    statusReady: 'Adjust the system to estimate collector demand.',
    statusUnderbuilt: 'Coverage is below the selected target.',
    statusBalanced: 'Coverage is close to the selected target.',
    statusExtreme: 'This configuration overshoots the target.',
    orbitalPeriod: 'Orbital period',
    collectorArea: 'Collector area',
    mercuryMasses: '{value} Mercury masses',
    kilograms: '{value} kg',
    daysUnit: '{value} days',
    starMDwarf: 'M dwarf',
    starSun: 'Sun-like G star',
    starA: 'A-type star',
    starRedGiant: 'Red giant',
    starBlueGiant: 'Blue giant',
    structureSwarm: 'Dyson swarm',
    structureRing: 'Equatorial ring',
    structureShell: 'Rigid shell',
    structureStatite: 'Statite mirror cloud',
  },
  seo: [
    { type: 'title', text: 'Dyson Sphere Energy Capture Simulator', level: 2 },
    { type: 'paragraph', html: 'Use this simulator to compare collector architectures around different stars.' },
    { type: 'paragraph', html: 'The model reports captured power, orbital radius, material mass, and Kardashev target coverage.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
