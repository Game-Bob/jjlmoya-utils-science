const slug = 'lorenzattractor';
const title = 'Lorenz attractor Chaos Simulator Het Vlindereffect in 3D';
const description = 'Verken chaostheorie met deze interactieve 3D Lorenz-attractor simulatie. Visualiseer het vlindereffect.';

const howTo = [
  {
    "name": "Draai het canvas",
    "text": "Klik en sleep in de 3D-viewport om de attractor te roteren."
  },
  {
    "name": "Pas de sliders aan",
    "text": "Wijzig de Sigma, Rho en Beta parameters om de chaos te beinvloeden."
  },
  {
    "name": "Observeer de divergentie",
    "text": "Zie hoe de afstand tussen de twee banen exponentieel groeit."
  },
  {
    "name": "Pauzeer en reset",
    "text": "Gebruik de knoppen om de simulatie te pauzeren of te resetten."
  }
];

const faq = [
  {
    "question": "Wat is de Lorenz-attractor?",
    "answer": "De Lorenz-attractor is een verzameling chaotische oplossingen van het Lorenz-systeem."
  },
  {
    "question": "Wat is het Vlindereffect?",
    "answer": "De gevoelige afhankelijkheid van beginvoorwaarden in niet-lineaire systemen."
  },
  {
    "question": "Wat betekenen de parameters?",
    "answer": "Sigma is het Prandtl-getal, Rho het Rayleigh-getal en Beta de geometrische verhouding."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopieert",
  "noHistory": "Geen geschiedenis",
  "load": "Laden",
  "delete": "Verwijderen",
  "title": "Lorenz-attractor",
  "subTitle": "Deterministische Chaos",
  "parameterControls": "Systeemparameters",
  "simulationSpeed": "Snelheid (dt)",
  "initialPerturbation": "Initiele Verstoring (dx)",
  "trajectories": "Banen",
  "distance": "Divergentie-afstand",
  "exponentialGrowth": "Exponentiele Divergentie",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Coordinaten",
  "divergenceExplanation": "De divergentiegrafiek toont de Euclidische afstand tussen de twee banen over de tijd."
},
  seo: [
  {
    "type": "title",
    "text": "Deterministische Chaos: De Lorenz-vergelijkingen Begrijpen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Het Lorenz-systeem is een klassieke formulering in niet-lineaire dynamica."
  }
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
