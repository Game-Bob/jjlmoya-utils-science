import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-double-fente-decoherence';
const title = 'Simulateur d Experience des Fentes de Young et Decoherence';
const description = 'Activez et desactivez les detecteurs de chemin pour voir l interference quantique se transformer en deux bandes de particules dans un simulateur visuel a double fente.';

const howTo = [
  {
    name: 'Commencez avec le detecteur desactive',
    text: 'Laissez le detecteur de chemin desactive et observez l ecran former des franges d interference claires et sombres a partir d amplitudes de probabilite coherentes.',
  },
  {
    name: 'Augmentez la force du detecteur',
    text: 'Montez le controle du detecteur pour introduire une information de chemin. Plus le detecteur devient fort, plus la coherence diminue et les franges s estompent.',
  },
  {
    name: 'Modifiez la geometrie des fentes',
    text: 'Ajustez l ecartement et la largeur des fentes pour voir comment la geometrie modifie l espacement des franges, la largeur de l enveloppe et la distribution finale sur l ecran.',
  },
  {
    name: 'Lisez les metriques en direct',
    text: 'Utilisez la visibilite des franges, l information de chemin et la coherence pour relier le motif visuel a l histoire de la mesure quantique.',
  },
];

const faq = [
  {
    question: 'Pourquoi le motif change-t-il quand les detecteurs sont allumes?',
    answer: 'Un detecteur qui peut reveler quelle fente la particule a utilisee detruit la relation de phase entre les deux alternatives. Sans cette coherence, les deux chemins de probabilite n interferent plus et l ecran se rapproche de deux larges bandes de particules.',
  },
  {
    question: 'Ce simulateur signifie-t-il que la conscience effondre la fonction d onde?',
    answer: 'Non. Le simulateur se concentre sur l information physique de chemin et la decoherence. Un detecteur, l environnement ou toute interaction qui rend le chemin distinguable peut supprimer l interference sans necessiter d observateur conscient.',
  },
  {
    question: 'Qu est-ce que la visibilite des franges?',
    answer: 'La visibilite des franges compare les regions claires et sombres sur l ecran. Une visibilite elevee signifie un fort contraste d interference. Une visibilite basse signifie que les espaces sombres se sont remplis et que le motif se comporte davantage comme deux flux de particules independants.',
  },
  {
    question: 'Est-ce un solveur complet de mecanique quantique?',
    answer: 'Non. C est un modele educatif qui melange une enveloppe d interference a double fente avec un controle de decoherence. Il est concu pour expliquer visuellement l effet de mesure, et non pour remplacer une simulation de l equation de Schrodinger pour un appareil reel.',
  },
  {
    question: 'Pourquoi l ecartement des fentes affecte-t-il l espacement des franges?',
    answer: 'Un ecartement plus grand cree une difference de phase plus rapide a travers l ecran, donc les bandes claires et sombres se rapprochent. Un ecartement plus petit ecarte davantage les franges.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Appareil a double fente',
    controls: 'Controles de la double fente',
    results: 'Resultats de la double fente',
    kicker: 'Controle de mesure',
    detectorToggle: 'Activer le detecteur de chemin',
    detectorStrength: 'Force du detecteur',
    slitSeparation: 'Ecartement des fentes',
    slitWidth: 'Largeur de fente',
    unobserved: 'Non observe',
    observed: 'Observe',
    waveMode: 'Interference',
    particleMode: 'Bandes de particules',
    fringeVisibility: 'Visibilite des franges',
    whichPath: 'Info de chemin',
    coherence: 'Coherence',
    readoutNote: 'L interference subsiste quand les deux chemins restent indiscernables. La mesure rend l information de chemin disponible et l ecran perd ses franges sombres.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur d experience des fentes de Young avec decoherence et detection de chemin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur a double fente transforme l experience quantique classique en un modele visuel interactif. Avec le detecteur desactive, l ecran affiche un motif d interference: des bandes claires et sombres produites parce que les deux chemins possibles restent coherents. Quand un detecteur de chemin est ajoute, le motif se transforme progressivement en deux larges bandes de particules car les alternatives de chemin deviennent distinguables.',
    },
    {
      type: 'paragraph',
      html: 'L outil est concu pour les apprenants qui cherchent une explication claire de pourquoi l observation modifie le resultat des fentes de Young. Il evite la phrase vague "l observateur change la realite" et se concentre sur l idee physiquement utile: l interference necessite des alternatives indiscernables, tandis que la mesure et l intrication avec l environnement suppriment la relation de phase necessaire aux franges.',
    },
    {
      type: 'title',
      text: 'Ce que demontre l experience des fentes de Young',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dans la configuration non observee, un objet quantique unique est decrit par des amplitudes de probabilite associees aux deux fentes. Ces amplitudes s additionnent avec phase. A certaines positions sur l ecran elles se renforcent mutuellement, produisant des bandes claires; a d autres positions elles s annulent, produisant des bandes sombres. Cette structure alternante est la signature de l interference.',
    },
    {
      type: 'paragraph',
      html: 'Si un detecteur enregistre quelle fente a ete utilisee, les alternatives cessent d etre indiscernables. L ecran ne recoit plus une somme coherente d amplitudes. Il recoit un melange de deux resultats conditionnes par le chemin, donc les espaces sombres d interference se remplissent et le resultat ressemble a des particules passant par une fente ou l autre.',
    },
    {
      type: 'title',
      text: 'Comment lire le simulateur',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Controle ou metrique', 'Ce qu il modifie', 'Ce qu il faut observer'],
      rows: [
        ['Force du detecteur', 'Combien d information de chemin est disponible', 'Des valeurs plus elevees reduisent la visibilite des franges et renforcent le motif a deux bandes.'],
        ['Ecartement des fentes', 'La distance entre les deux ouvertures', 'Un ecartement plus large resserre les bandes d interference sur l ecran.'],
        ['Largeur de fente', 'La taille de chaque ouverture', 'Des fentes plus larges retrecissent l enveloppe de diffraction et remodellent la luminosite globale.'],
        ['Visibilite des franges', 'Contraste entre les regions claires et sombres', 'Un nombre eleve signifie que l interference coherente est encore visible.'],
        ['Coherence', 'Combien de relation de phase subsiste entre les chemins', 'La coherence diminue a mesure que le detecteur rend les chemins distinguables.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoherence sans mysticisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La decoherence est la perte de coherence de phase exploitable quand un systeme quantique se correle avec un detecteur ou l environnement. Dans une experience a double fente, cette correlation peut transporter une information de chemin. Une fois que le chemin est enregistre en principe, meme si personne ne lit l enregistrement, le motif d interference est supprime.',
    },
    {
      type: 'paragraph',
      html: 'Cette distinction importe car de nombreuses explications exagerent le role de l observation humaine. La physique importante n est pas la vue ou la conscience; c est de savoir si le montage experimental preserve ou detruit l indiscernabilite des alternatives qui autrement interfereraient.',
    },
    {
      type: 'title',
      text: 'Limites de ce modele educatif',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le simulateur utilise un motif compact de double fente de style optique et le combine avec un modele de force de detecteur pour la decoherence. Il est excellent pour l intuition, les demonstrations en classe et la revision conceptuelle, mais il ne constitue pas une solution numerique d un appareil quantique complet avec espaces de Hilbert du detecteur, sources de bruit ou etalonnage de laboratoire.',
    },
    {
      type: 'list',
      items: [
        '<strong>Utilisez-le pour comprendre les concepts:</strong> interference, information de chemin, coherence et mesure.',
        '<strong>Ne l utilisez pas pour la conception experimentale:</strong> les veritables experiences a double fente necessitent des calculs precis de longueur d onde, d ouverture, de detecteur et de propagation.',
        '<strong>Concentrez-vous sur la tendance:</strong> plus la distinguabilite augmente, plus le contraste d interference diminue.',
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
