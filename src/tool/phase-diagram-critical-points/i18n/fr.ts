import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'diagramme-de-phases-point-critique-visualiseur';
const title = 'Diagramme de Phases et Visualiseur du Point Critique';
const description = 'Explorez les régions solide, liquide, gazeuse et supercritique sur un diagramme de phases pression-température interactif avec des marqueurs de point triple et de point critique.';

const howTo = [
  {
    name: 'Choisir une substance',
    text: 'Passez de l\'eau au dioxyde de carbone puis à l\'azote pour voir comment les points triples et critiques réels reconfigurent la carte des phases.',
  },
  {
    name: 'Modifier la température et la pression',
    text: 'Utilisez les curseurs pour placer l\'échantillon sur le plan pression-température. Le diagramme met à jour la région de phase active et le marqueur d\'échantillon en direct.',
  },
  {
    name: 'Observer le halo critique',
    text: 'Déplacez-vous vers l\'extrémité de la limite vapeur-liquide pour voir la chaleur latente s\'estomper et la distinction liquide-gaz se fondre en un fluide supercritique.',
  },
  {
    name: 'Lire le panneau pédagogique',
    text: 'Utilisez l\'étiquette de phase, l\'indicateur de chaleur latente et les affichages de points pour relier le diagramme visuel au vocabulaire thermodynamique.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce qu\'un diagramme de phases ?',
    answer: 'Un diagramme de phases indique quel état de la matière est stable pour différentes combinaisons de température et de pression. Les lignes de démarcation marquent les conditions où deux phases peuvent coexister en équilibre.',
  },
  {
    question: 'Que se passe-t-il au point critique ?',
    answer: 'Au point critique, la limite vapeur-liquide prend fin. Au-dessus de la température et de la pression critiques, le matériau devient un fluide supercritique et il n\'y a plus de distinction nette entre liquide et gaz.',
  },
  {
    question: 'Pourquoi l\'eau a-t-elle une ligne de fusion différente ?',
    answer: 'L\'eau est inhabituelle car la glace est moins dense que l\'eau liquide près du point de fusion. L\'augmentation de la pression favorise la phase liquide plus dense, donc la limite solide-liquide a une pente négative, contrairement à celle de nombreuses autres substances.',
  },
  {
    question: 'Les courbes tracées sont-elles exactes en laboratoire ?',
    answer: 'Non. L\'outil utilise des courbes simplifiées ancrées sur des valeurs publiées de point triple et de point critique. Il est conçu pour l\'apprentissage conceptuel, pas pour le génie des procédés ou les calculs de sécurité.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Commandes du diagramme de phases',
    substance: 'Substance',
    units: 'Unités',
    scientificUnits: 'Scientifiques (K, MPa)',
    metricUnits: 'Métriques (°C, kPa)',
    imperialUnits: 'Impériales (°F, psi)',
    temperature: 'Température',
    pressure: 'Pression',
    diagram: 'Diagramme de phases pression-température',
    sample: 'État de l\'échantillon',
    phase: 'Phase stable',
    triplePoint: 'Point triple',
    criticalPoint: 'Point critique',
    vaporCurve: 'Limite vapeur-liquide',
    meltingLine: 'Limite solide-liquide',
    latentHeat: 'Contraste de chaleur latente',
    criticalProximity: 'Proximité critique',
    coordinates: 'Coordonnées',
    solid: 'Solide',
    liquid: 'Liquide',
    gas: 'Gaz',
    supercritical: 'Supercritique',
    low: 'faible',
    high: 'élevé',
    reset: 'Réinitialiser',
    interpretation: 'Interprétation',
    note: 'Les lignes de démarcation marquent la coexistence ; les régions marquent la phase la plus stable pour les conditions sélectionnées.',
  },
  seo: [
    {
      type: 'title',
      text: 'Visualiseur interactif de diagramme de phase pour points triples et points critiques',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce visualiseur de diagramme de phase transforme un graphique pression-température abstrait en une carte interactive. Choisissez une substance, faites varier la température et la pression, et observez si l\'échantillon adopte un état solide, liquide, gazeux ou fluide supercritique.',
    },
    {
      type: 'paragraph',
      html: 'L\'outil est conçu pour les étudiants et enseignants recherchant une explication claire des diagrammes de phase. Il met l\'accent sur le point triple, la courbe d\'ébullition, la ligne de fusion et le point critique.',
    },
    {
      type: 'title',
      text: 'Comment lire le diagramme pression-température',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un diagramme de phase présente la température sur l\'axe horizontal et la pression sur l\'axe vertical. Chaque zone indique la phase stable sous ces conditions.',
    },
    {
      type: 'table',
      headers: ['Élément du diagramme', 'Signification', 'Ce qu\'il faut observer'],
      rows: [
        ['Point triple', 'Coexistence des phases solide, liquide et gazeuse', 'Le point de jonction à basse température où les limites se rejoignent.'],
        ['Courbe liquide-vapeur', 'Équilibre d\'ébullition ou de condensation', 'La ligne courbe reliant le point triple au point critique.'],
        ['Ligne solide-liquide', 'Équilibre de fusion ou de congélation', 'La ligne verticale séparant les domaines solide et liquide.'],
        ['Point critique', 'Fin de la limite liquide-vapeur', 'Le point ultime où la chaleur latente s\'annule.'],
        ['Domaine supercritique', 'Absence de distinction nette entre liquide et gaz', 'La région à haute pression et haute température au-delà du point critique.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi le point critique est essentiel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sous le point critique, l\'ébullition est une transition de phase avec absorption de chaleur latente. Au-delà du point critique, la masse volumique varie continûment.',
    },
    {
      type: 'paragraph',
      html: 'Les fluides supercritiques sont largement utilisés dans l\'industrie, par exemple pour la décaféination du café par le CO2 supercritique.',
    },
    {
      type: 'title',
      text: 'Simplifications du modèle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les vrais diagrammes de phase comportent souvent des polymorphes solides complexes. Ce modèle pédagogique utilise des courbes lissées pour faciliter la compréhension.',
    },
    {
      type: 'list',
      items: [
        '<strong>Utilisez-le pour l\'intuition :</strong> il explique pourquoi les autocuiseurs, la glace sèche et les fluides supercritiques se comportent ainsi.',
        '<strong>Ne l\'utilisez pas pour l\'ingénierie :</strong> les calculs industriels exigent des équations d\'état expérimentales très précises.',
        '<strong>Observez la tendance :</strong> à mesure qu\'on s\'approche du point critique, la différence entre liquide et gaz s\'estompe.',
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