import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-horizon-evenements';
const title = 'Simulateur de l\'horizon des événements d\'un trou noir';
const description = 'Explorez l\'horizon des événements d\'un trou noir avec des calculs interactifs: masse, distance orbitale, dilatation du temps, sphère de photons, vitesse de libération et rayon de Schwarzschild.';

const howTo = [
  {
    name: 'Choisissez la masse du trou noir',
    text: 'Déplacez le curseur de masse d\'un trou noir stellaire à un trou noir supermassif et observez le rayon de Schwarzschild évoluer en temps réel.',
  },
  {
    name: 'Approchez la sonde de l\'horizon',
    text: 'Ajustez la distance en rayons de Schwarzschild pour comparer une orbite extérieure sécurisée, la région de la sphère de photons et le bord de l\'horizon.',
  },
  {
    name: 'Inspectez les effets relativistes',
    text: 'Consultez la vitesse de libération, la dilatation gravitationnelle du temps, le décalage vers le rouge et la période orbitale pour comprendre pourquoi l\'intuition classique s\'effondre près de l\'horizon.',
  },
  {
    name: 'Comparez les rayons caractéristiques',
    text: 'Utilisez les anneaux guides de l\'horizon, de la sphère de photons et de l\'ISCO pour visualiser les différentes frontières autour d\'un trou noir sans rotation.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que l\'horizon des événements d\'un trou noir ?',
    answer: 'L\'horizon des événements est la limite où la vitesse de libération atteint la vitesse de la lumière. Une fois qu\'un objet le franchit, aucun signal se déplaçant à la vitesse de la lumière ou en dessous ne peut revenir vers l\'univers extérieur.',
  },
  {
    question: 'Que signifie le rayon de Schwarzschild ?',
    answer: 'Le rayon de Schwarzschild est le rayon de l\'horizon des événements pour un trou noir sans rotation ni charge électrique. Il croît linéairement avec la masse: doubler la masse double le rayon de l\'horizon.',
  },
  {
    question: 'Qu\'est-ce que la sphère de photons ?',
    answer: 'La sphère de photons est une région située à 1,5 rayon de Schwarzschild où la lumière peut orbiter autour du trou noir sur une trajectoire instable. De petites perturbations font que les photons s\'échappent vers l\'extérieur ou tombent vers l\'intérieur.',
  },
  {
    question: 'Qu\'est-ce que l\'ISCO ?',
    answer: 'ISCO signifie "Innermost Stable Circular Orbit" (orbite circulaire stable la plus interne). Pour un trou noir sans rotation, elle se situe à 3 rayons de Schwarzschild, ou 6 rayons gravitationnels, et marque la dernière orbite circulaire stable pour les particules massives.',
  },
  {
    question: 'Pourquoi la dilatation du temps augmente-t-elle près de l\'horizon ?',
    answer: 'Dans la géométrie de Schwarzschild, les horloges situées plus profondément dans le champ gravitationnel marquent le temps plus lentement par rapport à des observateurs éloignés. Le facteur affiché tend vers zéro à mesure que la sonde s\'approche de l\'horizon.',
  },
  {
    question: 'Ce simulateur peut-il modéliser un trou noir en rotation ?',
    answer: 'Non. Il utilise la solution de Schwarzschild, qui suppose l\'absence de rotation et de charge électrique. Les trous noirs astrophysiques réels tournent souvent, et cette rotation modifie la taille de l\'horizon, la position de l\'ISCO et le comportement du disque d\'accrétion.',
  },
  {
    question: 'Pourquoi les trous noirs supermassifs sont-ils moins "violents" à l\'horizon ?',
    answer: 'Le gradient de marée à l\'horizon diminue à mesure que la masse du trou noir augmente. Un petit trou noir stellaire peut étirer violemment les objets près de l\'horizon, tandis qu\'un trou noir supermassif peut présenter un gradient local beaucoup plus doux à cette limite.',
  },
  {
    question: 'La visualisation montre-t-elle une image réelle d\'un trou noir ?',
    answer: 'Il s\'agit d\'un diagramme pédagogique et non d\'une observation par lancer de rayons. Les anneaux et le disque sont mis à l\'échelle des rayons de Schwarzschild simplifiés pour faciliter la comparaison des zones physiques.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Carte du champ de l\'horizon',
    visualCaption: 'La sonde se déplace dans la géométrie de Schwarzschild mise à l\'échelle. Les anneaux guides brillants marquent l\'horizon, la sphère de photons et l\'orbite circulaire stable la plus interne.',
    controlsTitle: 'Contrôles du trou noir',
    eventHorizon: 'Horizon des événements',
    photonSphere: 'Sphère de photons',
    isco: 'ISCO',
    rsLabel: 'Rayon de Schwarzschild',
    diameterLabel: 'Diamètre',
    timeLabel: 'Dilatation du temps',
    redshiftLabel: 'Décalage vers le rouge',
    statusSafe: 'Hors de la région d\'orbite stable',
    statusPhoton: 'Dans la zone de la sphère de photons',
    statusInside: 'À la limite de l\'horizon',
    diameter: 'Diamètre de l\'horizon',
    lightCrossing: 'Temps de traversée de la lumière',
    timeDilation: 'Rythme de l\'horloge vs observateur lointain',
    redshift: 'Décalage vers le rouge gravitationnel',
    mass: 'Masse du trou noir',
    distance: 'Distance de la sonde',
    speed: 'Vitesse orbitale de la sonde',
    escapeVelocity: 'Vitesse de libération',
    orbitalPeriod: 'Période orbitale de la sonde',
    tidalGradient: 'Gradient de marée',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'masses solaires',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 masses solaires',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur d\'horizon des événements pour rayon de Schwarzschild, sphère de photons et dilatation temporelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur d\'horizon des événements transforme les idées clés des trous noirs de Schwarzschild en un modèle visuel interactif.',
    },
    {
      type: 'paragraph',
      html: 'Le simulateur est conçu pour les étudiants en astronomie, les enseignants et les passionnés de physique.',
    },
    {
      type: 'title',
      text: 'Comment le rayon de l\'horizon des événements est calculé',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour un trou noir non rotatif sans charge, le rayon est le <strong>rayon de Schwarzschild</strong>: <strong>Rs = 2GM / c^2</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Puisque le rayon varie proportionnellement à la masse, 10 masses solaires donnent un rayon d\'environ 29,5 km.',
    },
    {
      type: 'table',
      headers: ['Région', 'Rayon en rayons de Schwarzschild', 'Signification'],
      rows: [
        ['Horizon des événements', '1.0 Rs', 'La limite sans retour où la vitesse de libération égale c.'],
        ['Sphère de photons', '1.5 Rs', 'L\'orbite circulaire instable pour la lumière.'],
        ['ISCO', '3.0 Rs', 'La dernière orbite circulaire stable pour les particules massives.'],
        ['Champ faible', '6 Rs et plus', 'Gravité encore forte mais orbites circulaires aisées.'],
      ],
    },
    {
      type: 'title',
      text: 'Vitesse de libération et frontière causale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La vitesse de libération est la vitesse minimale requise pour s\'échapper à l\'infini sans propulsion.',
    },
    {
      type: 'paragraph',
      html: 'L\'indicateur de vitesse de libération est une intuition utile mais incomplète relativistement.',
    },
    {
      type: 'title',
      text: 'Dilatation temporelle et décalage vers le rouge gravitationnel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une horloge fixe près d\'un trou noir bat plus lentement qu\'à l\'infini. Le facteur simplifié est <strong>sqrt(1 - Rs / r)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Le décalage vers le rouge gravitationnel suit la même géométrie. La lumière perd de l\'énergie en s\'échappant.',
    },
    {
      type: 'title',
      text: 'Sphère de photons et ISCO expliquées',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La sphère de photons à 1.5 Rs est l\'endroit où la lumière peut effectuer une orbite circulaire instable.',
    },
    {
      type: 'paragraph',
      html: 'L\'ISCO à 3 Rs représente la dernière orbite stable pour la matière.',
    },
    {
      type: 'title',
      text: 'Trous noirs stellaires vs supermassifs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une leçon surprenante est que les trous noirs supermassifs sont moins violents au niveau des forces de marée à l\'horizon.',
    },
    {
      type: 'paragraph',
      html: 'Le simulateur inclut un gradient de marée exprimé en gravités terrestres par mètre.',
    },
    {
      type: 'title',
      text: 'Limites de ce simulateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        ['<strong>Pas de rotation:</strong> utilise la géométrie de Schwarzschild.'],
        ['<strong>Pas de physique d\'accrétion avancée:</strong> disque simplifié.'],
        ['<strong>Pas de ray-tracing:</strong> schéma éducatif.'],
        ['<strong>Pas de repère en chute libre:</strong> horloge stationnaire.'],
      ],
    },
    {
      type: 'title',
      text: 'Foire aux questions',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Utilisez cet outil pour estimer les paramètres d\'un trou noir.',
    },
    {
      type: 'paragraph',
      html: 'Modifiez la masse du trou noir et comparez le rayon de Schwarzschild, la sphère des photons et la distance de l\'observateur. Dans ce modèle simplifié, le rayon de Schwarzschild représente la limite où la vitesse de libération atteint celle de la lumière. La sphère des photons se trouve à l\'extérieur et correspond à une orbite idéale, instable sous l\'effet de petites perturbations. Observez aussi comment la dilatation du temps change lorsque l\'observateur se rapproche de l\'horizon. La simulation se limite volontairement à un trou noir de Schwarzschild non rotatif et sans charge électrique: elle ne modélise ni disque d\'accrétion, ni champ magnétique, ni dynamique complexe de la matière. Les forces de marée dépendent de la masse et de la position, tandis que les observations astronomiques exigent des données et des modèles supplémentaires. Utilisez donc les curseurs pour comparer des ordres de grandeur et comprendre les hypothèses, pas pour prévoir un voyage réel. Pour une analyse astrophysique, il faudrait décrire précisément l\'environnement, les trajectoires, le rayonnement et les effets relativistes associés. Le rayon augmente avec la masse, mais l\'expérience locale de la gravité dépend aussi de la distance. Comparez un seul paramètre à la fois et notez les hypothèses du modèle avant d\'interpréter le résultat. Cette visualisation explique des concepts de relativité générale sans représenter un système astronomique complet ni fournir un scénario de mission.',
    },
    { type: 'paragraph', html: 'Cette section explique plus précisément la géométrie utilisée par la simulation. Le rayon de Schwarzschild augmente avec la masse et représente, dans la solution idéale de Schwarzschild, une limite de coordonnées associée à l\'horizon des événements. La sphère des photons est située plus loin et correspond à des trajectoires lumineuses circulaires instables: une petite perturbation suffit à modifier fortement leur destin. La dilatation du temps affichée dépend du choix de l\'observateur et ne doit pas être confondue avec une horloge locale située au même endroit. En modifiant la masse puis la distance séparément, vous pouvez comparer les échelles sans mélanger leurs effets. Le modèle ne décrit pas la rotation, la charge électrique, la matière autour du trou noir, l\'accrétion, les champs magnétiques, le rayonnement ou les forces de marée d\'un objet concret. Il sert à construire une intuition sur la relativité générale et à distinguer une définition mathématique d\'une observation astrophysique. Pour interpréter une source réelle, il faudrait ajouter les données de masse, de rotation, d\'environnement et de trajectoire, puis confronter le résultat à une méthode publiée. Cette page ne fournit ni prédiction opérationnelle ni conseil pour approcher un objet compact. Comparez les variables une par une et notez les hypothèses avant de tirer une conclusion.' },
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
