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
    { type: 'title', text: "Chaos Deterministe: Comprendre les Equations de Lorenz", level: 2 },
    { type: 'paragraph', html: "Le systeme de Lorenz est une formulation historique en dynamique non lineaire et en theorie du chaos. Initialement derive en 1963 par le meteorologue et mathematicien <strong>Edward Lorenz</strong>, le modele est ne d'une representation simplifiee de la convection atmospherique. Lorenz a simplifie les equations complexes de la dynamique des fluides en trois equations differentielles ordinaires couplees. Sa decouverte que ces equations simples et deterministes pouvaient produire un comportement complexe, non periodique et chaotique a transforme notre comprehension des systemes physiques." },
    { type: 'paragraph', html: "Le systeme est defini par trois equations differentielles couplees qui suivent une coordonnee dans l'espace des phases tridimensionnel au fil du temps:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Decrit le taux de mouvement convectif. Le parametre &sigma; (nombre de Prandtl) represente le rapport entre la viscosite du fluide et sa conductivite thermique.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Represente la difference de temperature entre les courants convectifs ascendants et descendants. &rho; (nombre de Rayleigh) represente l'intensite du chauffage convectif.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Suit la distorsion du profil de temperature vertical. &beta; est le rapport d'aspect geometrique de la cellule convective.",
      ],
    },
    { type: 'title', text: "L'Effet Papillon: Sensibilite aux Conditions Initiales", level: 3 },
    { type: 'paragraph', html: "La caracteristique principale des systemes chaotiques est leur <strong>sensibilite aux conditions initiales</strong>, popularisee sous le nom d'<strong>Effet Papillon</strong>. Dans un systeme non chaotique, une petite difference initiale conduit a une difference finale proportionnellement petite. Dans un systeme chaotique, la distance entre deux trajectoires demarrant arbitrairement proches croit exponentiellement." },
    { type: 'paragraph', html: "Ce simulateur illustre cela en executant deux trajectoires (T1 en cyan et T2 en rose) avec une infime separation initiale (reglage de la perturbation). Au depart, elles suivent pratiquement le meme chemin, formant une ligne violette. Apres un court delai, les termes non lineaires amplifient la difference, et les chemins divergent completement." },
    {
      type: 'table',
      headers: ["Parametre","Valeur Standard","Signification Physique","Comportement au Changement"],
      rows: [
        ["&sigma; (Sigma)","10.0","Nombre de Prandtl","Determine la friction interne du fluide. Des valeurs elevees accelerent la reaction des changements de vitesse par rapport aux gradients de temperature."],
        ["&rho; (Rho)","28.0","Nombre de Rayleigh","Principal moteur du chaos. En dessous de &rho; = 1, l'origine est le seul point stable. A &rho; = 28, le systeme est entierement chaotique."],
        ["&beta; (Beta)","8/3 (2.667)","Rapport d'Aspect Geometrique","Controle le rapport largeur/hauteur des cellules de convection. Modifie l'echelle et la vitesse de rotation des orbites."],
      ],
    },
    { type: 'title', text: "Espace des Phases, Attracteurs Etranges et Fractales", level: 3 },
    { type: 'paragraph', html: "En physique classique, les trajectoires se stabilisent en points fixes (puits) ou repetent le meme chemin indefiniment (cycles limites). Le systeme de Lorenz ne fait ni l'un ni l'autre: la trajectoire tourne infiniment en trois dimensions sans jamais se croiser. Cette structure infinie et non repetitive est confinee dans un volume fini de l'espace des phases, formant un <strong>attracteur etrange</strong>." },
    { type: 'paragraph', html: "La geometrie de cet attracteur est fractale, avec une dimension de Hausdorff d'environ 2.06, soit plus qu'une surface bidimensionnelle mais moins qu'un volume tridimensionnel solide." },
    { type: 'title', text: "Applications de la Theorie du Chaos dans les Sciences", level: 3 },
    { type: 'paragraph', html: "Les enseignements de l'attracteur de Lorenz vont bien au-dela de la meteorologie. La theorie du chaos a influence de nombreux domaines modernes:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologie:</strong> A etabli les limites fondamentales de la predictibilite meteorologique, donnant naissance aux methodes de prevision par ensemble.",
      "<strong>Cryptographie:</strong> La nature deterministe mais imprevisible des orbites chaotiques est utilisee pour generer des cles pseudo-aleatoires securisees.",
      "<strong>Cardiologie:</strong> Utilisee pour modeliser les rythmes cardiaques, les coeurs sains presentant des caracteristiques chaotiques.",
      "<strong>Ingenierie:</strong> Aide a concevoir des structures stables en analysant et evitant la resonance chaotique dans les ponts suspendus.",
      ],
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
