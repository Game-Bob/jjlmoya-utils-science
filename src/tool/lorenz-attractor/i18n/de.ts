const slug = 'lorenz-attraktor';
const title = 'Lorenz Attraktor Chaos Simulator Der Schmetterlingseffekt in 3D';
const description = 'Erforschen Sie die Chaostheorie mit dieser interaktiven 3D-Lorenz-Attraktor-Simulation. Visualisieren Sie den Schmetterlingseffekt.';

const howTo = [
  {
    "name": "Leinwand drehen",
    "text": "Klicken und ziehen Sie im 3D-Viewport, um den Attraktor zu drehen."
  },
  {
    "name": "Schieberegler anpassen",
    "text": "Aendern Sie die Parameter Sigma, Rho und Beta, um das Chaos zu beobachten."
  },
  {
    "name": "Divergenz beobachten",
    "text": "Beobachten Sie, wie der Abstand zwischen den beiden Trajektorien exponentiell waechst."
  },
  {
    "name": "Pause und Reset",
    "text": "Verwenden Sie die Steuerelemente, um die Simulation anzuhalten oder zurueckzusetzen."
  }
];

const faq = [
  {
    "question": "Was ist der Lorenz-Attraktor?",
    "answer": "Der Lorenz-Attraktor ist eine Reihe chaotischer Loesungen des Lorenz-Systems."
  },
  {
    "question": "Was ist der Schmetterlingseffekt?",
    "answer": "Die empfindliche Abhaengigkeit von den Anfangsbedingungen in chaotischen Systemen."
  },
  {
    "question": "Was bedeuten die Parameter?",
    "answer": "Sigma ist die Prandtl-Zahl, Rho die Rayleigh-Zahl und Beta das geometrische Aspektverhaeltnis."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopiert",
  "noHistory": "Kein Verlauf",
  "load": "Laden",
  "delete": "Loeschen",
  "title": "Lorenz-Attraktor",
  "subTitle": "Deterministisches Chaos",
  "parameterControls": "Systemparameter",
  "simulationSpeed": "Geschwindigkeit (dt)",
  "initialPerturbation": "Anfaengliche Stoerung (dx)",
  "trajectories": "Trajektorien",
  "distance": "Divergenzabstand",
  "exponentialGrowth": "Exponentielle Divergenz",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinaten",
  "divergenceExplanation": "Das Divergenzdiagramm zeigt den euklidischen Abstand zwischen den beiden Trajektorien im Laufe der Zeit."
},
  seo: [
  {
    "type": "title",
    "text": "Deterministisches Chaos: Die Lorenz-Gleichungen verstehen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Das Lorenz-System ist ein Meilenstein in der Geschichte der Mathematik und der nichtlinearen Dynamik."
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
