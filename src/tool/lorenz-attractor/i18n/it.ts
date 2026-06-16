const slug = 'attrattore-di-lorenz';
const title = 'Simulatore di Caos dell Attrattore di Lorenz: L Effetto Farfalla in 3D';
const description = 'Esplora la teoria del caos con questa simulazione interattiva 3D dell attrattore di Lorenz. Visualizza l effetto farfalla.';

const howTo = [
  {
    "name": "Ruota la tela",
    "text": "Clicca e trascina sulla finestra 3D per ruotare l attrattore."
  },
  {
    "name": "Regola i cursori",
    "text": "Modifica i parametri Sigma, Rho e Beta per osservare il comportamento caotico."
  },
  {
    "name": "Osserva la divergenza",
    "text": "Osserva come la distanza tra le due traiettorie cresce in modo esponenziale."
  },
  {
    "name": "Pausa e ripristino",
    "text": "Usa i controlli per mettere in pausa la simulazione o ripristinare i valori predefiniti."
  }
];

const faq = [
  {
    "question": "Cos e l attrattore di Lorenz?",
    "answer": "L attrattore di Lorenz e un insieme di soluzioni caotiche del sistema di Lorenz."
  },
  {
    "question": "Cos e l effetto farfalla?",
    "answer": "La dipendenza sensibile dalle condizioni iniziali in un sistema deterministico non lineare."
  },
  {
    "question": "Cosa rappresentano i parametri?",
    "answer": "Sigma e il numero di Prandtl, Rho il numero di Rayleigh e Beta un parametro geometrico."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Copiato",
  "noHistory": "Nessuna cronologia",
  "load": "Carica",
  "delete": "Elimina",
  "title": "Attrattore di Lorenz",
  "subTitle": "Caos Deterministico",
  "parameterControls": "Parametri del Sistema",
  "simulationSpeed": "Velocita (dt)",
  "initialPerturbation": "Perturbazione Iniziale (dx)",
  "trajectories": "Traiettorie",
  "distance": "Distanza di Divergenza",
  "exponentialGrowth": "Divergenza Esponenziale",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Coordinate",
  "divergenceExplanation": "Il grafico di divergenza mostra la distanza euclidea tra le due traiettorie nel tempo."
},
  seo: [
  {
    "type": "title",
    "text": "Caos Deterministico: Comprendere le Equazioni di Lorenz",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Il sistema di Lorenz e una formulazione fondamentale nello studio della dinamica non lineare."
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
