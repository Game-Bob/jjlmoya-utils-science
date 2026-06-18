import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = 'Dyson Sphere Energy Capture Simulator';
const description = 'Different stars and megastructure layouts can be compared by captured power, collector radius, material mass, and Kardashev scale coverage.';

const howTo = [
  { name: 'Choose the star', text: 'Select an M dwarf, Sun-like star, A star, red giant, or blue giant to set luminosity and mass.' },
  { name: 'Choose the structure', text: 'Compare swarm, ring, rigid shell, and statite cloud assumptions.' },
  { name: 'Set coverage', text: 'Move coverage and temperature controls to see how capture power and safe orbital radius change.' },
  { name: 'Read the target', text: 'Use the Kardashev target to estimate how much stellar output must be intercepted.' },
];

const faq = [
  { question: 'What is a Dyson swarm?', answer: 'It is a collection of many independent collectors orbiting a star, usually more plausible than a rigid shell.' },
  { question: 'Why does radius change?', answer: 'The radius follows the collector operating temperature and stellar luminosity. Hotter collectors can orbit closer.' },
  { question: 'What does Kardashev rating mean?', answer: 'It converts captured watts into a logarithmic civilization energy scale.' },
  { question: 'Is the mass exact?', answer: 'No. It is an educational estimate from area, areal density, and stability assumptions.' },
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
    { type: 'paragraph', html: 'This simulator compares Dyson swarm, ring, shell, and statite cloud concepts using first-order stellar energy calculations.' },
    { type: 'paragraph', html: 'It estimates captured watts, thermal orbital radius, collector area, orbital period, material mass, and Kardashev target coverage.' },
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
