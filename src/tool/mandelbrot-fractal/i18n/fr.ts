import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculateur-fractale-mandelbrot';
const title = 'Calculateur de Fractale de Mandelbrot et Explorateur d Autosimilarite';
const description = 'Explorez l ensemble de Mandelbrot, zoomez sur les frontieres fractales autosimilaires et comparez la profondeur d iteration, le contraste des couleurs et les coordonnees du plan complexe.';

const howTo = [
  {
    name: 'Choisissez une region de l ensemble de Mandelbrot',
    text: 'Partez de l ensemble complet ou sautez directement vers une region tres detaillee telle que la vallee de l hippocampe ou un minibrot en spirale.',
  },
  {
    name: 'Zoomez en cliquant sur l image',
    text: 'Cliquez sur n importe quel point du canevas pour recentrer le plan complexe et agrandir la fractale autour de cette coordonnee.',
  },
  {
    name: 'Reglez la profondeur d iteration et le contraste des couleurs',
    text: 'Augmentez le budget d iterations pour reveler une structure de frontiere plus fine, puis ajustez le contraste et la palette pour rendre les bandes de temps d evasion plus lisibles.',
  },
];

const faq = [
  {
    question: 'Que montre le calculateur de l ensemble de Mandelbrot?',
    answer: 'Il montre quels nombres complexes c maintiennent la recurrence z(n+1) = z(n)^2 + c bornee en partant de z = 0. Les points qui ne s echappent jamais dans le budget d iterations selectionne sont colores comme membres de l ensemble, tandis que les points exterieurs sont colores selon la vitesse a laquelle leur orbite s echappe.',
  },
  {
    question: 'Pourquoi la frontiere de Mandelbrot contient-elle autant de details?',
    answer: 'La frontiere separe les orbites stables de celles qui s echappent, et de minuscules changements de coordonnees pres de cette frontiere peuvent completement modifier le comportement a long terme. Cette sensibilite cree des bulbes imbriques, des spirales, des filaments et des copies miniatures qui apparaissent a de nombreux niveaux d agrandissement.',
  },
  {
    question: 'L ensemble de Mandelbrot est-il vraiment autosimilaire?',
    answer: 'Il n est pas parfaitement autosimilaire au sens strict comme un triangle de Sierpinski, mais il est richement quasi-autosimilaire. De petites copies de l ensemble complet apparaissent dans tout le plan, souvent deformees et reliees par des structures ramifiees elaborees.',
  },
  {
    question: 'Que controle le nombre d iterations?',
    answer: 'Le nombre d iterations controle la duree pendant laquelle le calculateur teste chaque point avant de decider qu il appartient probablement a l ensemble. Des valeurs plus elevees revelent des filaments plus profonds et des minibrots plus nets, mais necessitent plus de calcul par pixel.',
  },
  {
    question: 'Pourquoi les couleurs changent-elles en dehors de la region noire?',
    answer: 'Les couleurs exterieures sont basees sur le temps d evasion: les points qui s echappent rapidement recoivent des couleurs differentes de ceux qui restent pres de l ensemble pendant de nombreuses iterations. Un coloriage lisse reduit les bandes marquees et facilite l inspection de la geometrie des orbites voisines.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculateur de Fractale de Mandelbrot',
    canvasLabel: 'Canevas interactif de l ensemble de Mandelbrot',
    presetsLabel: 'Parametres de region de Mandelbrot',
    presetFull: 'Ensemble Complet',
    presetSeahorse: 'Vallee de l Hippocampe',
    presetSpiral: 'Minibrot Spirale',
    centerPoint: 'Centre',
    magnification: 'Grossissement',
    visibleWindow: 'Fenetre visible',
    renderBudget: 'Iterations',
    iterationsLabel: 'Profondeur d iteration',
    contrastLabel: 'Contraste d evasion',
    colorLabel: 'Champ de couleur',
    paletteEmber: 'Bandes de braise',
    paletteLagoon: 'Plasma lagunaire',
    paletteInk: 'Spectre d encre',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculateur de l Ensemble de Mandelbrot pour Fractales, Temps d Evasion et Autosimilarite',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur de fractale de Mandelbrot rend le classique ensemble du plan complexe defini par l iteration <strong>z(n+1) = z(n)^2 + c</strong>. Il est concu pour l exploration plutot que pour la visualisation passive: chaque clic recentre le plan, chaque zoom expose un voisinage mathematique plus petit, et le curseur d iterations vous permet de decider a quelle profondeur le calculateur doit tester la frontiere avant de colorer un point comme stable ou en fuite.',
    },
    {
      type: 'title',
      text: 'Comment lire l image de Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La forme centrale sombre marque les points dont les orbites restent bornees dans le budget d iterations actuel. L exterieur colore est une carte du temps d evasion. Un point colore pres de l ensemble peut survivre des centaines d iterations avant que sa magnitude ne depasse le rayon d evasion, tandis qu un point eloigne s echappe presque immediatement. La geometrie la plus interessante scientifiquement ne se trouve generalement pas a l interieur de la forme remplie, mais le long de la frontiere ou les comportements bornes et non bornes s entrelacent.',
    },
    {
      type: 'table',
      headers: ['Controle', 'Ce qu il modifie', 'Quand l augmenter'],
      rows: [
        ['<strong>Profondeur d iteration</strong>', 'Combien d etapes de recurrence sont testees pour chaque pixel.', 'Utilisez des valeurs plus elevees apres un zoom dans des filaments minces ou des copies miniatures.'],
        ['<strong>Contraste d evasion</strong>', 'A quel point les valeurs d evasion lisses sont separees en bandes visibles.', 'Augmentez-le quand l image parait plate; baissez-le quand les couleurs sont trop agressives.'],
        ['<strong>Palette</strong>', 'Le mappage de couleur applique aux points exterieurs.', 'Changez de palette pour reveler des structures qui pourraient etre cachees par un champ de couleur.'],
      ],
    },
    {
      type: 'title',
      text: 'Autosimilarite et Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une des raisons pour lesquelles l ensemble de Mandelbrot est si celebre est sa quasi-autosimilarite. En zoomant sur les antennes, les spirales et les vallees, vous rencontrez a plusieurs reprises de petites iles ressemblant a Mandelbrot, souvent appelees minibrots. Ces copies ne sont pas simplement decoratives. Leur agencement reflete la dynamique des applications quadratiques, y compris les bulbes periodiques, les motifs de bifurcation et les regions ou les orbites restent piegees pendant de longues periodes avant de s echapper.',
    },
    {
      type: 'title',
      text: 'Pourquoi des iterations plus elevees sont importantes en zoom profond',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dans la vue de l ensemble complet, une limite d iteration modeste donne une image reconnaissable. A un agrandissement plus profond, cependant, de nombreux points de frontiere mettent beaucoup plus de temps a reveler s ils s echappent. Si la limite d iteration est trop basse, les structures fines peuvent paraitre faussement solides ou boueuses. L augmentation du nombre d iterations ameliore la classification de la frontiere et permet au calculateur de resoudre les vrilles etroites, les bras spiraux et les bulbes satellites avec plus de confiance.',
    },
    {
      type: 'title',
      text: 'Signification mathematique des coordonnees complexes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L affichage des coordonnees montre le centre actuel de la fenetre d affichage sous forme d un nombre complexe c = a + bi. L axe horizontal est la partie reelle et l axe vertical est la partie imaginaire. Un clic sur le canevas choisit une nouvelle coordonnee complexe, puis agrandit la fenetre visible autour d elle. Cela rend l outil utile pour apprendre comment les regions visuelles de la fractale correspondent a des emplacements precis dans le plan complexe.',
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
