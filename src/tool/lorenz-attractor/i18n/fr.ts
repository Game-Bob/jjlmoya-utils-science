const slug = 'attracteur-de-lorenz';
const title = 'Simulateur de Chaos de l Attracteur de Lorenz: L Effet Papillon en 3D';
const description = 'Explorez la theorie du chaos avec cette simulation interactive 3D de l attracteur de Lorenz. Visualisez l effet papillon.';

const howTo = [
  {
    "name": "Faire pivoter le canevas",
    "text": "Cliquez et faites glisser sur la fenetre 3D pour faire pivoter l attracteur."
  },
  {
    "name": "Ajuster les curseurs",
    "text": "Modifiez les parametres Sigma, Rho et Beta pour observer la transition vers le chaos."
  },
  {
    "name": "Observer la divergence",
    "text": "Observez comment l ecart entre les deux trajectoires augmente de maniere exponentielle."
  },
  {
    "name": "Pause et reinitialisation",
    "text": "Utilisez les commandes pour mettre en pause la simulation ou la reinitialiser."
  }
];

const faq = [
  {
    "question": "Qu est-ce que l attracteur de Lorenz?",
    "answer": "L attracteur de Lorenz est un ensemble de solutions chaotiques du systeme de Lorenz."
  },
  {
    "question": "Qu est-ce que l effet papillon?",
    "answer": "La sensibilite aux conditions initiales, ou une infime variation produit des effets divergents."
  },
  {
    "question": "Que representent les parametres?",
    "answer": "Sigma est le nombre de Prandtl, Rho le nombre de Rayleigh, et Beta un ratio geometrique."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Copie",
  "noHistory": "Aucun historique",
  "load": "Charger",
  "delete": "Supprimer",
  "title": "Attracteur de Lorenz",
  "subTitle": "Chaos Deterministe",
  "parameterControls": "Parametres du Systeme",
  "simulationSpeed": "Vitesse (dt)",
  "initialPerturbation": "Perturbation Initiale (dx)",
  "trajectories": "Trajectoires",
  "distance": "Distance de Divergence",
  "exponentialGrowth": "Divergence Exponentielle",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Coordonnees",
  "divergenceExplanation": "Le graphique de divergence montre la distance euclidienne entre les deux trajectoires au fil du temps."
},
  seo: [
  {
    "type": "title",
    "text": "Chaos Deterministe: Comprendre les Equations de Lorenz",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Le systeme de Lorenz est une formulation historique dans l etude des systemes dynamiques non lineaires."
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
