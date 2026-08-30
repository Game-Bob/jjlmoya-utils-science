import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-energie-sphere-dyson';
const title = 'Simulateur de Captage d\'Énergie d\'une Sphère de Dyson';
const description = 'Évaluez des concepts de mégastructures comme les essaims de Dyson, anneaux équatoriaux, coques rigides et nuages de miroirs statites. Calculez la puissance interceptée, le rayon orbital thermique, la masse de matériau et la couverture requise selon l\'échelle de Kardashev.';

const howTo = [
  {
    name: 'Choisissez un type d\'étoile',
    text: 'Sélectionnez une naine M, une étoile de type G comme le Soleil, une étoile A, une géante rouge ou une géante bleue. Le simulateur adapte la luminosité et la masse stellaires pour évaluer le rayon du collecteur et la période orbitale.',
  },
  {
    name: 'Sélectionnez la structure globale',
    text: 'Comparez un essaim de Dyson, un anneau équatorial, une coque rigide ou une nuée de miroirs statites. Chaque architecture possède son propre rendement de captage, sa densité massique et ses contraintes de stabilité.',
  },
  {
    name: 'Ajustez la couverture et la température',
    text: 'Modulez la fraction de couverture pour capter davantage d\'énergie et ajustez la température de fonctionnement pour rapprocher ou éloigner les collecteurs de l\'étoile.',
  },
  {
    name: 'Définissez une cible Kardashev',
    text: 'Utilisez le curseur d\'objectif pour connaître la fraction du rayonnement stellaire nécessaire afin d\'atteindre le palier énergétique civilisaturel souhaité.',
  },
];

const faq = [
  {
    question: 'Quelle est la différence fondamentale entre une sphère de Dyson et un essaim ?',
    answer: 'Une sphère de Dyson rigide forme une enveloppe continue et solide autour de l\'étoile, alors qu\'un essaim constitue un vaste ensemble de collecteurs orbitaux indépendants. Les analyses d\'ingénierie privilégient l\'essaim car une coque solide subirait des tensions mécaniques intolérables et nécessiterait une masse de matière irréaliste.',
  },
  {
    question: 'Comment est calculé le rayon orbital optimal ?',
    answer: 'Le simulateur détermine la distance exacte où des collecteurs rayonnant par leurs deux faces atteignent l\'équilibre thermique choisi sous l\'intensité lumineuse de l\'étoile. Des collecteurs tolérant une température élevée peuvent ainsi orbiter plus près.',
  },
  {
    question: 'Que mesure l\'indice Kardashev dans cet outil ?',
    answer: 'L\'indice Kardashev s\'obtient logarithmiquement à partir de la puissance captée en watts via la formule K = (log10(P) - 6) / 10. Une valeur proche de K1 correspond à la puissance reçue par une planète comme la Terre, tandis que K2 équivaut à la totalité de la production stellaire.',
  },
  {
    question: 'La masse de matériau calculée est-elle physiquement réaliste ?',
    answer: 'Il s\'agit d\'une première estimation d\'ordre de grandeur basée sur la surface des collecteurs, leur masse surfacique et un coefficient de structure. Une mégastructure réelle exigerait des propulseurs de maintien, des systèmes de transmission d\'énergie et des dispositifs de refroidissement massifs.',
  },
  {
    question: 'Pourquoi les étoiles très lumineuses demandent-elles des surfaces colossales ?',
    answer: 'La forte luminosité repousse le rayon thermique de sécurité loin de l\'étoile. Comme la surface de la sphère orbitale grandit avec le carré de la distance, la quantité de matériaux nécessaire pour maintenir une même fraction de couverture augmente de manière spectaculaire.',
  },
  {
    question: 'Est-il possible d\'atteindre le Type II de Kardashev avec une couverture partielle ?',
    answer: 'Absolument, à condition que l\'étoile centrale soit extrêmement lumineuse. Autour du Soleil, le Type II exige d\'intercepter la quasi-totalité du flux, mais autour d\'une géante bleue, un faible pourcentage du rayonnement suffit amplement.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisation du collecteur Dyson',
    starType: 'Type d\'étoile',
    structureType: 'Structure',
    coverage: 'Couverture du collecteur',
    operatingTemp: 'Température de fonctionnement',
    kardashevTarget: 'Cible Kardashev',
    kardashevRating: 'Notation actuelle',
    capturedPower: 'Puissance capturée',
    optimalRadius: 'Rayon optimal',
    targetCoverage: 'Couverture cible',
    materialMass: 'Masse de matériau',
    captureMeter: 'Progrès vers la cible',
    statusReady: 'Ajustez le système pour estimer la demande du collecteur.',
    statusUnderbuilt: 'La couverture est inférieure à la cible de Kardashev choisie. Ajoutez des collecteurs ou choisissez une étoile plus brillante.',
    statusBalanced: 'La couverture et la puissance stellaire sont proches de l\'objectif civilisationnel choisi.',
    statusExtreme: 'Cette configuration dépasse la cible. Elle capture une puissance énorme, mais la demande en matériaux augmente vite.',
    orbitalPeriod: 'Période orbitale',
    collectorArea: 'Surface du collecteur',
    mercuryMasses: '{value} masses de Mercure',
    kilograms: '{value} kg',
    daysUnit: '{value} jours',
    starMDwarf: 'Naine M',
    starSun: 'Étoile de type G comme le Soleil',
    starA: 'Étoile de type A',
    starRedGiant: 'Géante rouge',
    starBlueGiant: 'Géante bleue',
    structureSwarm: 'Essaim de Dyson',
    structureRing: 'Anneau équatorial',
    structureShell: 'Coque rigide',
    structureStatite: 'Nuage de miroirs statites',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur de Captage d\'Énergie d\'une Sphère de Dyson',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une sphère de Dyson dépasse l\'imagerie classique de la science-fiction dépeignant une coque fermée. C\'est toute une gamme de mégastructures conçues pour intercepter le rayonnement stellaire: essaims de satellites en orbite, anneaux équatoriaux ou voile statite maintenue par la pression de radiation.',
    },
    {
      type: 'paragraph',
      html: 'Cet outil calcule la puissance thermique interceptée, la distance orbitale optimale, la surface totale nécessaire, la période de révolution ainsi que la masse globale de matériaux convertie en équivalent-masses de Mercure.',
    },
    {
      type: 'title',
      text: 'Évaluation du rayon orbital de fonctionnement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le rayon idéal dépend directement de la puissance d\'émission de l\'étoile et de la température maximale tolérée par les récepteurs. Une orbite proche impose une dissipation thermique considérable, tandis qu\'une orbite lointaine exige des surfaces géométriques bien plus étendues.',
    },
    {
      type: 'title',
      text: 'Comparaison des architectures de captage',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Essaim de Dyson:</strong> Une flotte de collecteurs indépendants. Il s\'agit de la solution la plus réaliste car elle autorise un déploiement progressif.',
        '<strong>Anneau équatorial:</strong> Une ceinture étroite de récepteurs. Plus simple à concevoir mais limitée en termes d\'interception globale.',
        '<strong>Coque rigide:</strong> Enveloppe continue offrant le captage maximal mais confrontée à une instabilité gravitationnelle et des contraintes mécaniques extrêmes.',
        '<strong>Nuage statite:</strong> Réflecteurs ultralégers en équilibre sous la pression de radiation stellaire.',
      ],
    },
    {
      type: 'title',
      text: 'Couverture requise et Échelle de Kardashev',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'échelle de Kardashev mesure le niveau technologique d\'une civilisation à travers son bilan énergétique. Un essaim partiel captant 1% du rayonnement solaire dépasserait déjà la consommation humaine actuelle de plusieurs ordres de grandeur.',
    },
    {
      type: 'table',
      headers: ['Concept', 'Atout majeur', 'Contrainte critique'],
      rows: [
        ['Essaim de Dyson', 'Construction modulaire et évolutive', 'Gestion du trafic orbital et guidage des faisceaux'],
        ['Anneau équatorial', 'Surface de départ plus restreinte', 'Captage limité aux latitudes équatoriales'],
        ['Coque rigide', 'Rendement théorique maximal', 'Instabilité de position et résistance des matériaux'],
        ['Nuage statite', 'Masse surfacique extrêmement faible', 'Sensibilité thermique et contrôle d\'attitude'],
      ],
    },
    {
      type: 'title',
      text: 'Masse de matériaux et approvisionnement spatial',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le calcul exprime la quantité de matière nécessaire en équivalent de masses de Mercure. Les théories d\'ingénierie stellaire envisagent en effet le démantèlement de petites planètes ou d\'astéroïdes pour fournir le métal et le silicium des miroirs.',
    },
    {
      type: 'paragraph',
      html: 'Considérez ces valeurs comme un outil d\'exploration des contraintes physiques fondamentales gouvernant la capture d\'énergie à l\'échelle stellaire.',
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