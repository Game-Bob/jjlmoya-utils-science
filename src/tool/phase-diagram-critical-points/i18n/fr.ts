import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'diagramme-de-phases-point-critique-visualiseur';
const title = 'Diagramme de Phases et Visualiseur du Point Critique';
const description = 'Explorez les regions solide, liquide, gazeuse et supercritique sur un diagramme de phases pression-temperature interactif avec des marqueurs de point triple et de point critique.';

const howTo = [
  {
    name: 'Choisir une substance',
    text: 'Passez de l\'eau au dioxyde de carbone puis a l\'azote pour voir comment les points triples et critiques reels reconfigurent la carte des phases.',
  },
  {
    name: 'Modifier la temperature et la pression',
    text: 'Utilisez les curseurs pour placer l\'echantillon sur le plan pression-temperature. Le diagramme met a jour la region de phase active et le marqueur d\'echantillon en direct.',
  },
  {
    name: 'Observer le halo critique',
    text: 'Deplacez-vous vers l\'extremite de la limite vapeur-liquide pour voir la chaleur latente s\'estomper et la distinction liquide-gaz se fondre en un fluide supercritique.',
  },
  {
    name: 'Lire le panneau pedagogique',
    text: 'Utilisez l\'etiquette de phase, l\'indicateur de chaleur latente et les affichages de points pour relier le diagramme visuel au vocabulaire thermodynamique.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce qu\'un diagramme de phases?',
    answer: 'Un diagramme de phases indique quel etat de la matiere est stable pour differentes combinaisons de temperature et de pression. Les lignes de demarcation marquent les conditions ou deux phases peuvent coexister en equilibre.',
  },
  {
    question: 'Que se passe-t-il au point critique?',
    answer: 'Au point critique, la limite vapeur-liquide prend fin. Au-dessus de la temperature et de la pression critiques, le materiau devient un fluide supercritique et il n\'y a plus de distinction nette entre liquide et gaz.',
  },
  {
    question: 'Pourquoi l\'eau a-t-elle une ligne de fusion differente?',
    answer: 'L\'eau est inhabituelle car la glace est moins dense que l\'eau liquide pres du point de fusion. L\'augmentation de la pression peut favoriser la phase liquide plus dense, donc la limite solide-liquide a une pente differente de celle de nombreuses substances.',
  },
  {
    question: 'Les courbes tracees sont-elles exactes en laboratoire?',
    answer: 'Non. L\'outil utilise des courbes simplifiees ancrees sur des valeurs publiees de point triple et de point critique. Il est concu pour l\'apprentissage conceptuel, pas pour le genie des procedes ou les calculs de securite.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Commandes du diagramme de phases',
    substance: 'Substance',
    units: 'Unites',
    scientificUnits: 'Scientifiques (K, MPa)',
    metricUnits: 'Metriques (Celsius, kPa)',
    imperialUnits: 'Imperial (Fahrenheit, psi)',
    temperature: 'Temperature',
    pressure: 'Pression',
    diagram: 'Diagramme de phases pression-temperature',
    sample: 'Etat de l\'echantillon',
    phase: 'Phase stable',
    triplePoint: 'Point triple',
    criticalPoint: 'Point critique',
    vaporCurve: 'Limite vapeur-liquide',
    meltingLine: 'Limite solide-liquide',
    latentHeat: 'Contraste de chaleur latente',
    criticalProximity: 'Proximite critique',
    coordinates: 'Coordonnees',
    solid: 'Solide',
    liquid: 'Liquide',
    gas: 'Gaz',
    supercritical: 'Supercritique',
    low: 'faible',
    high: 'eleve',
    reset: 'Reinitialiser',
    interpretation: 'Interpretation',
    note: 'Les lignes de demarcation marquent la coexistence; les regions marquent la phase la plus stable pour les conditions selectionnees.',
  },
  seo: [
    {
      type: 'title',
      text: 'Visualiseur interactif de diagramme de phases pour points triples, courbes d\'ebullition et points critiques',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce visualiseur de diagramme de phases transforme un graphique abstrait pression-temperature en une carte interactive. Choisissez une substance, deplacez la temperature et la pression, et voyez si l\'echantillon est predit pour se comporter comme un solide, un liquide, un gaz ou un fluide supercritique. L\'objectif est de rendre les limites de phases spatiales: franchir une ligne change l\'etat stable, tandis que s\'approcher du point critique change ce que signifie une limite de phase.',
    },
    {
      type: 'paragraph',
      html: 'L\'outil est concu pour les etudiants, les enseignants, les redacteurs scientifiques et toute personne recherchant une explication claire des diagrammes de phases. Il met l\'accent sur les caracteristiques les plus importantes en thermodynamique introductive: le point triple ou trois phases coexistent, la courbe vapeur-liquide, la limite solide-liquide et le point d\'extremite critique ou la distinction liquide-gaz disparait.',
    },
    {
      type: 'title',
      text: 'Comment lire le diagramme pression-temperature',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un diagramme de phases place la temperature sur un axe et la pression sur l\'autre. Chaque region montre la phase stable dans ces conditions. Les lignes entre les regions sont des courbes de coexistence: le long de ces lignes, deux phases peuvent rester en equilibre plutot qu\'une phase ne remplace completement l\'autre.',
    },
    {
      type: 'table',
      headers: ['Caracteristique du diagramme', 'Signification', 'Quoi observer dans l\'outil'],
      rows: [
        ['Point triple', 'Solide, liquide et gaz coexistent', 'La jonction a basse temperature ou les limites se rencontrent.'],
        ['Courbe vapeur-liquide', 'Equilibre d\'ebullition ou de condensation', 'La ligne courbe du point triple au point critique.'],
        ['Limite solide-liquide', 'Equilibre de fusion ou de solidification', 'La ligne raide separant les regions solide et liquide.'],
        ['Point critique', 'Fin de la limite vapeur-liquide', 'Le point d\'extremite surligne ou la chaleur latente s\'estompe.'],
        ['Region supercritique', 'Pas de distinction nette liquide-gaz', 'La zone a haute temperature et haute pression au-dela du point critique.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi le point critique est important',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En dessous du point critique, l\'ebullition est une transition de phase: le liquide et la vapeur peuvent coexister, et l\'energie peut etre absorbee sous forme de chaleur latente tandis que la temperature reste liee a la condition limite. Au point critique, cette limite prend fin. Au-dessus, la densite change continument et la substance est decrite comme un fluide supercritique plutot qu\'un liquide ou un gaz normal.',
    },
    {
      type: 'paragraph',
      html: 'Cela est important en chimie, en sciences planetaires, en extraction industrielle, en refrigeration et en physique des hautes pressions. Le dioxyde de carbone, par exemple, devient supercritique dans des conditions relativement accessibles par rapport a l\'eau, ce qui explique pourquoi le CO2 supercritique est utilise dans l\'extraction et le traitement des materiaux. L\'eau necessite des temperatures et des pressions beaucoup plus elevees, ce qui rend son point critique important pour les systemes energetiques et la geophysique.',
    },
    {
      type: 'title',
      text: 'Ce que ce visualiseur simplifie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les diagrammes de phases reels peuvent inclure des polymorphes, des etats metastables, des melanges non ideaux, de multiples phases solides et des equations d\'etat ajustees experimentalement. Cet outil pedagogique maintient le modele intentionnellement compact. Il ancre chaque substance a des valeurs de reference reconnaissables et trace des courbes didactiques lisses afin que les idees principales soient faciles a inspecter sans necessite de table de thermodynamique.',
    },
    {
      type: 'list',
      items: [
        '<strong>Utilisez-le pour l\'intuition:</strong> il aide a expliquer pourquoi les autocuiseurs, la glace seche, l\'ebullition et les fluides supercritiques se comportent differemment.',
        '<strong>Ne l\'utilisez pas pour des limites techniques:</strong> les courbes simplifiees ne remplacent pas des donnees de proprietes certifiees.',
        '<strong>Concentrez-vous sur la topologie:</strong> le resultat d\'apprentissage le plus important est la facon dont les regions de phase se connectent et ou les limites se terminent.',
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
      description,
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
