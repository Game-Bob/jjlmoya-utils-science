const slug = 'lorenzattraktor';
const title = 'Lorenz attraktor Kaossimulator Fjarilseffekten i 3D';
const description = 'Utforska kaosteori med denna interaktiva 3D Lorenz-attraktor-simulering. Visualisera fjarilseffekten.';

const howTo = [
  {
    "name": "Rotera vyn",
    "text": "Klicka och dra i 3D-visningen for att rotera attraktorn."
  },
  {
    "name": "Justera reglagen",
    "text": "Andra parametrarna Sigma, Rho and Beta for att se kaotiska skiften."
  },
  {
    "name": "Observera avvikelsen",
    "text": "Se hur avstandet mellan de tva banorna vaxer exponentiellt."
  },
  {
    "name": "Pausa och aterstall",
    "text": "Anvand knapparna for att pausa simuleringen eller aterstalla standardvarden."
  }
];

const faq = [
  {
    "question": "Vad ar Lorenz-attraktorn?",
    "answer": "Lorenz-attraktorn ar en uppsattning kaotiska losningar till Lorenz-systemet."
  },
  {
    "question": "Vad ar Fjarilseffekten?",
    "answer": "Det kansliga beroendet av startforhallanden i icke-lineara system."
  },
  {
    "question": "Vad betyder parametrarna?",
    "answer": "Sigma representerar Prandtl-talet, Rho Rayleigh-talet, och Beta ett geometriskt forhallande."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopierat",
  "noHistory": "Ingen historik",
  "load": "Ladda",
  "delete": "Ta bort",
  "title": "Lorenz-attraktor",
  "subTitle": "Deterministiskt Kaos",
  "parameterControls": "Systemparametrar",
  "simulationSpeed": "Hastighet (dt)",
  "initialPerturbation": "Initial Storning (dx)",
  "trajectories": "Banor",
  "distance": "Divergensavstand",
  "exponentialGrowth": "Exponentiell Divergens",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinater",
  "divergenceExplanation": "Divergensgrafen visar det euklidiska avstandet mellan de tva banorna over tid."
},
  seo: [
  {
    "type": "title",
    "text": "Deterministiskt Kaos: Att forsta Lorenz-ekvationerna",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Lorenz-systemet ar en milstolpe inom icke-linjar dynamik och kaosteori."
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
