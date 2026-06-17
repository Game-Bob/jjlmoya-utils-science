import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'visualisateur-paradoxe-jumeaux';
const title = 'Visualisateur du Paradoxe des Jumeaux: Dilatation du Temps en Relativite Restreinte';
const description = 'Visualisez comment la relativite restreinte fait qu un jumeau voyageant rapidement revient plus jeune que le jumeau reste sur Terre.';

const howTo = [
  {
    name: 'Regler la vitesse du vaisseau spatial',
    text: 'Utilisez le curseur de vitesse pour choisir une fraction de la vitesse de la lumiere et observez l augmentation du facteur de Lorentz.',
  },
  {
    name: 'Choisir la duree de mission dans le referentiel terrestre',
    text: 'Ajustez le nombre d annees qui s ecoulent pour le jumeau restant sur Terre pendant le voyage complet aller et retour.',
  },
  {
    name: 'Comparer les horloges et les lignes d univers',
    text: 'Lisez l ecart d age, le temps ecoule dans le vaisseau, la distance dans le referentiel terrestre et la ligne d univers incurvee qui marque le changement de referentiel inertiel du jumeau voyageur.',
  },
];

const faq = [
  {
    question: 'Qu est-ce que le paradoxe des jumeaux en relativite restreinte?',
    answer: 'Le paradoxe des jumeaux est une experience de pensee dans laquelle un jumeau voyage dans l espace a vitesse relativiste et revient sur Terre plus jeune que le jumeau reste a la maison. Il semble paradoxal car chaque jumeau peut initialement decrire l autre comme en mouvement, mais le jumeau voyageur change de referentiel inertiel lors du demi-tour, de sorte que les deux chemins a travers l espace-temps ne sont pas symetriques.',
  },
  {
    question: 'Pourquoi le jumeau voyageur vieillit-il moins?',
    answer: 'En relativite restreinte, le temps propre ecoule depend du chemin a travers l espace-temps. Une horloge se deplacant a vitesse v par rapport a un observateur inertiel tic plus lentement d un facteur gamma de Lorentz. Le voyageur accumule moins de temps propre le long des trajets aller et retour que le jumeau sedentaire accumule sur Terre.',
  },
  {
    question: 'Est-ce que l acceleration cause la difference d age?',
    answer: 'L acceleration est importante car elle permet au voyageur d inverser sa direction et de retrouver la Terre, mais l ecart d age est calcule a partir du chemin complet dans l espace-temps, pas seulement de l acceleration. Meme si le demi-tour etait tres bref, le chemin du voyageur contiendrait toujours moins de temps propre que le chemin terrestre.',
  },
  {
    question: 'Que signifie le facteur de Lorentz gamma?',
    answer: 'Le facteur de Lorentz gamma est egal a 1 divise par la racine carree de 1 moins v au carre sur c au carre. Il indique a quel point les intervalles de temps, les longueurs et les energies different entre referentiels inertiels. Aux vitesses quotidiennes gamma vaut presque 1, mais pres de la vitesse de la lumiere il augmente fortement.',
  },
  {
    question: 'Cet effet peut-il etre mesure dans la vie reelle?',
    answer: 'Oui. La dilatation du temps a ete mesuree avec des particules rapides, des horloges atomiques embarquees sur des avions, des systemes de synchronisation satellitaires et des accelerateurs de particules. Le paradoxe des jumeaux utilise une histoire de voyage extreme, mais l effet d horloge sous-jacent est une partie regulierement verifiee de la physique moderne.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Visualisation spatio-temporelle du paradoxe des jumeaux',
    controlsTitle: 'Controles du paradoxe des jumeaux',
    worldlineLabel: 'Diagramme de ligne d univers pour le jumeau terrestre et le jumeau voyageur',
    earthTwin: 'Age du jumeau terrestre',
    travelingTwin: 'Age du voyageur',
    presetCruise: 'Croisiere',
    presetRelativistic: 'Relativiste',
    presetExtreme: 'Extreme',
    velocityLabel: 'Vitesse du vaisseau',
    earthYearsLabel: 'Temps ecoule sur Terre',
    ageGapLabel: 'Ecart d age a la reunion',
    gammaLabel: 'Facteur de Lorentz',
    shipTimeLabel: 'Temps propre du voyageur',
    distanceLabel: 'Distance jusqu au demi-tour',
    yearsUnit: 'ans',
    yearsShortUnit: 'ans',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculateur du Paradoxe des Jumeaux pour la Relativite Restreinte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le visualisateur du paradoxe des jumeaux transforme l une des idees les plus celebres de la relativite restreinte en un diagramme spatio-temporel interactif. Reglez la vitesse d un vaisseau spatial comme fraction de la vitesse de la lumiere, choisissez combien d annees s ecoulent sur Terre, et le calculateur calcule le facteur de Lorentz, le temps propre du voyageur, l ecart d age a la reunion et la distance aller jusqu au point de demi-tour. La disposition visuelle separe l horloge terrestre de l horloge du vaisseau afin que l asymetrie soit visible au lieu d etre cachee dans des formules.',
    },
    {
      type: 'title',
      text: 'Comment le calcul fonctionne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La quantite centrale est le facteur de Lorentz: gamma = 1 / sqrt(1 - v^2 / c^2). Pour un simple voyage aller-retour a vitesse de croisiere constante, le temps vecu par le voyageur est la duree de mission dans le referentiel terrestre divisee par gamma. La difference entre ces deux durees est l ecart d age lors de la reunion des jumeaux. L outil montre egalement la distance de demi-tour dans le referentiel terrestre, qui est la moitie du temps terrestre total multipliee par la vitesse du vaisseau en annees-lumiere par an.',
    },
    {
      type: 'table',
      headers: ['Vitesse', 'Facteur de Lorentz', 'Rythme de l Horloge du Voyageur', 'Signification Physique'],
      rows: [
        ['0.50c', '1.155', '86.6% du rythme terrestre', 'Un effet relativiste notable mais modere.'],
        ['0.86c', '1.960', '51.0% du rythme terrestre', 'Le voyageur vieillit environ deux fois moins vite durant la croisiere.'],
        ['0.98c', '5.025', '19.9% du rythme terrestre', 'La dilatation extreme du temps domine le resultat de la mission.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi la situation n est pas symetrique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A premiere vue, chaque jumeau peut dire que l autre bouge, ce qui rend le resultat apparemment contradictoire. La resolution est que le jumeau terrestre reste approximativement dans un referentiel inertiel, tandis que le jumeau voyageur part, inverse sa direction et revient. Ce changement de referentiel inertiel donne au voyageur un chemin different a travers l espace-temps. La ligne d univers dessinee par cet outil se plie au moment du demi-tour, tandis que la ligne d univers du jumeau terrestre reste droite.',
    },
    {
      type: 'title',
      text: 'Lecture du diagramme de ligne d univers',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une ligne d univers est une carte d un objet a travers l espace-temps plutot qu a travers l espace seul. Dans ce visualisateur, la ligne verticale de la Terre represente le jumeau qui reste a la maison. Le chemin rouge incline represente le voyageur quittant la Terre et y revenant. L augmentation de la vitesse incline le chemin du voyageur de maniere plus dramatique et reduit la quantite de temps propre accumule sur l horloge du vaisseau spatial.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ecart d age:</strong> a quel point le voyageur est plus jeune a la reunion.',
        '<strong>Facteur de Lorentz:</strong> le multiplicateur qui relie le temps du referentiel terrestre au temps propre du voyageur.',
        '<strong>Temps propre du voyageur:</strong> le temps reel ecoule mesure par une horloge a bord du vaisseau spatial.',
        '<strong>Distance jusqu au demi-tour:</strong> la distance aller dans le referentiel terrestre avant que le voyageur n inverse sa route.',
      ],
    },
    {
      type: 'title',
      text: 'Preuves pratiques de la dilatation du temps',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le paradoxe des jumeaux est une experience de pensee claire, mais la dilatation du temps n est pas speculative. Les muons crees dans la haute atmosphere survivent assez longtemps pour atteindre le sol car leurs horloges en mouvement sont dilatees du point de vue terrestre. Les experiences d horloges atomiques a bord d avions et la navigation satellitaire de precision necessitent egalement des corrections relativistes. Les memes mathematiques derriere ce visualisateur font partie de l infrastructure de chronometrage utilisee par les systemes GPS modernes.',
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
