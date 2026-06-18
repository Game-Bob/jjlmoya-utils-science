import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-energie-sphere-dyson';
const title = 'Simulateur de Capture d Energie d une Sphere de Dyson';
const description = 'Estimez des conceptions d essaim, d anneau, de coque et de nuage de statites de Dyson pour differentes etoiles. Calculez la puissance capturee, le rayon orbital, la masse de materiau et la couverture necessaire pour atteindre une echelle Kardashev cible.';

const howTo = [
  {
    name: 'Choisissez un type d etoile',
    text: 'Commencez avec une naine M, une etoile semblable au Soleil, une etoile de type A, une geante rouge ou une geante bleue. Le simulateur utilise des valeurs representatives de luminosite et de masse pour estimer le rayon du collecteur et la periode orbitale.',
  },
  {
    name: 'Selectionnez l architecture de la megastructure',
    text: 'Comparez un essaim de Dyson, un anneau equatorial, une coque rigide ou un nuage de miroirs statites. Chaque conception a une efficacite de capture, une densite de materiau et des hypotheses de stabilite differentes.',
  },
  {
    name: 'Reglez la couverture et la temperature de fonctionnement',
    text: 'Augmentez la couverture pour capturer plus de puissance stellaire, puis ajustez la temperature de fonctionnement pour rapprocher ou eloigner les collecteurs de l etoile.',
  },
  {
    name: 'Choisissez une cible Kardashev',
    text: 'Utilisez le curseur de cible pour voir quelle partie de l etoile doit etre couverte pour atteindre un objectif de puissance a l echelle d une civilisation.',
  },
];

const faq = [
  {
    question: 'Quelle est la difference entre une sphere de Dyson et un essaim de Dyson?',
    answer: 'Une sphere de Dyson rigide est une coque continue autour d une etoile, tandis qu un essaim de Dyson est une grande collection de collecteurs orbitaux independants. La plupart des discussions d ingenierie favorisent les essaims car une coque solide serait structurellement instable et extremement intensive en materiaux.',
  },
  {
    question: 'Comment le simulateur choisit-il le rayon optimal?',
    answer: 'Il estime la distance a laquelle les collecteurs rayonnant des deux cotes atteignent la temperature de fonctionnement selectionnee sous la luminosite stellaire choisie. Les collecteurs plus chauds peuvent orbiter plus pres, tandis que les collecteurs plus froids necessitent des rayons plus grands.',
  },
  {
    question: 'Que signifie la notation Kardashev ici?',
    answer: 'La valeur Kardashev est calculee a partir de la puissance capturee en utilisant la forme logarithmique commune K = (log10(P) - 6) / 10, ou P est la puissance en watts. Une valeur proche de K1 represente une utilisation d energie a l echelle planetaire, tandis que K2 s approche de la production stellaire complete.',
  },
  {
    question: 'La masse de materiau est-elle realiste?',
    answer: 'C est une estimation educative de premier ordre basee sur la surface du collecteur, la densite surfacique et un facteur de stabilite. Les conceptions reelles necessiteraient du maintien en station, du transport d energie, des pertes minieres, de la redondance, du rejet de chaleur et une infrastructure de fabrication.',
  },
  {
    question: 'Pourquoi les etoiles brillantes necessitent-elles des systemes de collecteurs aussi grands?',
    answer: 'Les etoiles de haute luminosite repoussent le rayon thermique secure vers l exterieur. Cela augmente la surface necessaire pour une fraction de couverture donnee, donc la demande de materiau peut augmenter plus rapidement que la puissance capturee ne le laisse intuitivement penser.',
  },
  {
    question: 'Une civilisation peut-elle atteindre le type II de Kardashev avec une couverture partielle?',
    answer: 'Oui, si l etoile hote est assez brillante et les collecteurs efficaces. Autour d une etoile semblable au Soleil, atteindre pres du type II necessite de capturer une grande fraction de la luminosite solaire, mais autour d etoiles plus lumineuses, le meme objectif de puissance peut necessiter une fraction de couverture plus faible.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisation du collecteur Dyson',
    starType: 'Type d etoile',
    structureType: 'Structure',
    coverage: 'Couverture du collecteur',
    operatingTemp: 'Temperature de fonctionnement',
    kardashevTarget: 'Cible Kardashev',
    kardashevRating: 'Notation actuelle',
    capturedPower: 'Puissance capturee',
    optimalRadius: 'Rayon optimal',
    targetCoverage: 'Couverture cible',
    materialMass: 'Masse de materiau',
    captureMeter: 'Progres vers la cible',
    statusReady: 'Ajustez le systeme pour estimer la demande du collecteur.',
    statusUnderbuilt: 'La couverture est inferieure a la cible de Kardashev choisie. Ajoutez des collecteurs ou choisissez une etoile plus brillante.',
    statusBalanced: 'La couverture et la puissance stellaire sont proches de l objectif civilisationnel choisi.',
    statusExtreme: 'Cette configuration depasse la cible. Elle capture une puissance enorme, mais la demande en materiaux augmente vite.',
    orbitalPeriod: 'Periode orbitale',
    collectorArea: 'Surface du collecteur',
    mercuryMasses: '{value} masses de Mercure',
    kilograms: '{value} kg',
    daysUnit: '{value} jours',
    starMDwarf: 'Naine M',
    starSun: 'Etoile de type G comme le Soleil',
    starA: 'Etoile de type A',
    starRedGiant: 'Geante rouge',
    starBlueGiant: 'Geante bleue',
    structureSwarm: 'Essaim de Dyson',
    structureRing: 'Anneau equatorial',
    structureShell: 'Coque rigide',
    structureStatite: 'Nuage de miroirs statites',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur de Capture d Energie d une Sphere de Dyson',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une sphere de Dyson n est pas seulement une image de science-fiction d une etoile a l interieur d une coque. C est une famille de concepts possibles de megastructure pour intercepter la luminosite stellaire: des essaims de satellites, des anneaux equatoriaux, des nuages minces de miroirs et la fameuse mais problematique coque rigide. Ce simulateur transforme ces idees en nombres afin que vous puissiez comparer comment le type d etoile, la temperature du collecteur, la couverture et la conception de la structure modifient le budget energetique.',
    },
    {
      type: 'paragraph',
      html: 'Le calculateur estime la puissance capturee, le rayon thermique orbital, la surface du collecteur, la periode orbitale, la masse de materiau et la couverture necessaire pour un objectif d echelle Kardashev choisi. Il est concu pour les etudiants, les constructeurs de mondes, les communicateurs scientifiques et tous ceux qui cherchent a comprendre pourquoi les civilisations de type II sont difficiles: le defi n est pas seulement la puissance, mais aussi la surface, la chaleur, l exploitation miniere, la stabilite et la logistique orbitale.',
    },
    {
      type: 'title',
      text: 'Comment le rayon de Dyson est estime',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le rayon optimal est calcule a partir de la luminosite stellaire et de la temperature de fonctionnement du collecteur. Un collecteur proche d une etoile brillante recoit un flux intense et doit fonctionner chaud ou rejeter d enormes quantites de chaleur. S eloigner reduit le stress thermique, mais la surface du collecteur requise croit avec le carre de la distance. Ce compromis explique pourquoi la meme fraction de couverture peut etre modeste autour d une naine M faible et enorme autour d une geante bleue.',
    },
    {
      type: 'title',
      text: 'Essaim de Dyson, Anneau, Coque et Nuage de Statites Comparaisons',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Essaim de Dyson:</strong> de nombreux collecteurs orbitaux independants. C est l architecture a grande echelle la plus plausible car elle peut etre construite progressivement et ne necessite pas de coque stellaire rigide.',
        '<strong>Anneau equatorial:</strong> une bande de collecteurs plus etroite avec une efficacite de couverture plus faible. Il est plus facile a imaginer comme premiere megastructure, mais ne peut pas capturer la production stellaire complete sans devenir un essaim plus large.',
        '<strong>Coque rigide:</strong> visuellement iconique mais mecaniquement defavorable. Une coque autour d une etoile a de graves problemes de stabilite et de materiau, donc le simulateur lui attribue une masse elevee et une stabilite faible.',
        '<strong>Nuage de miroirs statites:</strong> reflecteurs ultralegers maintenus partiellement par la pression de radiation. Il reduit la demande de materiau mais a une tolerance thermique plus faible et des exigences de controle exigeantes.',
      ],
    },
    {
      type: 'title',
      text: 'Couverture necessaire pour l echelle Kardashev',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L echelle Kardashev exprime la consommation energetique d une civilisation de maniere logarithmique. Dans cet outil, les watts captures sont convertis en une notation K en utilisant K = (log10(P) - 6) / 10. Un essaim de Dyson partiel autour du Soleil peut depasser la consommation energetique humaine actuelle de plusieurs ordres de grandeur bien avant d atteindre le statut complet de type II. Le resultat de couverture cible montre la fraction de luminosite stellaire qui doit etre interceptee pour l objectif selectionne.',
    },
    {
      type: 'table',
      headers: ['Choix de conception', 'Avantage principal', 'Principal goulot d etranglement'],
      rows: [
        ['Essaim de Dyson', 'Constructible par etapes avec orbites independantes', 'Controle du trafic et transport d energie'],
        ['Anneau equatorial', 'Surface initiale plus faible et geometrie plus simple', 'Couverture limitee'],
        ['Coque rigide', 'Interception maximale dans un diagramme simple', 'Instabilite structurelle et masse enorme'],
        ['Nuage de statites', 'Tres faible densite surfacique', 'Maintien en station precis et limites thermiques'],
      ],
    },
    {
      type: 'title',
      text: 'Masse de materiau et verification de l exploitation miniere',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L estimation du materiau multiplie la surface du collecteur par une densite surfacique supposee et un facteur de stabilite de conception. Elle rapporte intentionnellement la masse en masses de Mercure lorsque le nombre devient astronomique, car de nombreuses discussions sur les essaims de Dyson imaginent demanteler de petites planetes ou des asteroides pour obtenir des matieres premieres. Meme les collecteurs minces deviennent massifs lorsqu ils sont repartis sur des echelles d unites astronomiques.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez le resultat comme un guide d ordre de grandeur plutot que comme un plan. La veritable ingenierie des megastructures necessiterait des modeles de dommages par radiation, des cycles thermiques, l evitement de collisions, le controle d attitude, le transport d energie, le rendement de fabrication et l evolution orbitale a long terme. La valeur du simulateur est de rendre visibles les premieres contraintes immediatement.',
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
