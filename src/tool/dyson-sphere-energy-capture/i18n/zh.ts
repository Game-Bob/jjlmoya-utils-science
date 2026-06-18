import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = 'Dyson Sphere Energy Capture Simulator';
const description = 'Compare Dyson collectors around different stars with estimates for power, radius, mass, and Kardashev coverage.';

const howTo = [
  { name: 'Choose a star', text: 'Select a representative star to set luminosity and mass.' },
  { name: 'Choose a collector', text: 'Compare swarm, ring, shell, and statite cloud designs.' },
  { name: 'Adjust controls', text: 'Set coverage, operating temperature, and target Kardashev rating.' },
  { name: 'Review output', text: 'Read captured power, radius, mass, area, and target coverage.' },
];

const faq = [
  { question: 'What is a Dyson sphere?', answer: 'It is a family of concepts for collecting a large fraction of stellar luminosity.' },
  { question: 'Why include several structures?', answer: 'Different structures have different efficiency, mass, and stability assumptions.' },
  { question: 'What does target coverage show?', answer: 'It estimates the percentage of stellar output required for a selected Kardashev rating.' },
  { question: 'Is this a precise design tool?', answer: 'No. It is an educational calculator for first-order physical intuition.' },
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
    { type: 'paragraph', html: 'This tool estimates power and material requirements for several Dyson megastructure concepts.' },
    { type: 'paragraph', html: 'It is useful for learning how stellar luminosity, temperature limits, and coverage affect large-scale energy capture.' },
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
