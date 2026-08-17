import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'laboratorio-regole-gioco-vita-conway';
const title = 'Laboratorio di regole del Gioco della Vita di Conway';
const description = 'Gioca, modifica e confronta automi cellulari in stile Conway con regole B/S, semi di pattern, metriche live e una griglia responsive.';

const howTo = [
  {
    name: 'Seminare il campo',
    text: 'Scegli un pattern come un aliante, un pulsar o il cannone di Gosper, posizionalo sulla griglia o genera una popolazione casuale.',
  },
  {
    name: 'Avviare la simulazione',
    text: 'Usa i controlli di avvio, pausa, passo e tempo per osservare l\'evoluzione di nascite, morti, densità e stabilità nel tempo.',
  },
  {
    name: 'Cambiare la regola',
    text: 'Cambia i preset o digita una regola B/S come B3/S23, B36/S23 o B3678/S34678 per confrontare diversi automi.',
  },
];

const faq = [
  {
    question: 'Cosa è la notazione B/S nel Gioco della Vita?',
    answer: 'La notazione B/S elenca i conteggi di vicini che creano una nuova cellula viva e i conteggi che permettono a una cellula viva esistente di sopravvivere. Il Gioco della Vita di Conway è B3/S23: le cellule morte nascono con esattamente tre vicini, e le cellule vive sopravvivono con due o tre vicini.',
  },
  {
    question: 'Perché questo strumento si chiama laboratorio di regole invece di solo simulatore?',
    answer: 'La regola classica di Conway è inclusa, ma il simulatore è costruito per confrontare famiglie di automi cellulari di tipo Life. Modificare i conteggi di nascita e sopravvivenza cambia il comportamento a lungo termine, producendo replicatori, onde, isole congelate, crescita caotica o estinzione.',
  },
  {
    question: 'Cosa significa stabilità nel simulatore?',
    answer: 'La stabilità stima quanto la colonia è cambiata durante l\'ultima generazione. Alta stabilità significa poche cellule nate o morte rispetto alla popolazione; bassa stabilità significa che il campo è turbolento o si riorganizza rapidamente.',
  },
  {
    question: 'Il campo ha dei bordi?',
    answer: 'La simulazione usa un avvolgimento toroidale: il bordo sinistro si collega al bordo destro e la parte superiore si collega alla parte inferiore. Questo mantiene i pattern in movimento naturale senza scomparire ai bordi.',
  },
  {
    question: 'Posso disegnare il mio pattern iniziale?',
    answer: 'Sì. Metti in pausa la simulazione e fai clic o tocca le celle del campo per attivarle o disattivarle. Puoi combinare celle disegnate a mano con i pattern integrati e poi eseguire il risultato con qualsiasi preset di regola.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Griglia di automi cellulari tipo Life',
    play: 'Avvia',
    pause: 'Pausa',
    step: 'Passo',
    clear: 'Tela vuota',
    randomize: 'Casuale',
    ruleLabel: 'Notazione regola',
    ruleHelp: 'Nascita / sopravvivenza',
    speedLabel: 'Tempo',
    densityLabel: 'Densità iniziale',
    patternLabel: 'Pattern',
    placePattern: 'Posiziona pattern',
    generation: 'Generazione',
    population: 'Popolazione',
    density: 'Densità',
    stability: 'Stabilità',
    births: 'Nascite',
    deaths: 'Morti',
    achievementsLabel: 'Registro laboratorio',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Oscillazione di periodo 2 rilevata',
    achievementImmortal: 'Immortale',
    achievementImmortalDescription: 'Generazione 500 raggiunta con stabilità totale',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Un seme casuale rado ha superato 1.000 cellule vive',
    presetClassic: 'Conway classico',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Giorno e notte',
    patternGlider: 'Aliante',
    patternGosper: 'Cannone di Gosper',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Segnale colonia',
    statusFrozen: 'stabile',
    statusGrowing: 'in espansione',
    statusFading: 'in calo',
    statusChaotic: 'volatile',
    invalidRule: 'Usa la notazione B/S come B3/S23.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore del Gioco della Vita di Conway con regole modificabili',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo laboratorio di regole per il Gioco della Vita di Conway consente di eseguire l\'automa cellulare classico e di modificarne e confrontarne le regole.',
    },
    {
      type: 'title',
      text: 'Come le regole B/S modificano il gioco',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gli automi cellulari di tipo Life sono scritti in <strong>notazione B/S</strong>. La regola originale di Conway, <strong>B3/S23</strong>, è famosa perché si trova in una stretta fascia tra estinzione e crescita incontrollata.',
    },
    {
      type: 'table',
      headers: ['Regola', 'Comportamento da osservare', 'Esperimento consigliato'],
      rows: [
        ['<strong>B3/S23</strong>', 'Alianti classici, oscillatori e cannoni.', 'Posiziona il cannone di Gosper e osserva la popolazione.'],
        ['<strong>B36/S23</strong>', 'HighLife supporta l\'autoreplicazione.', 'Confronta lo stesso seme con B3/S23.'],
        ['<strong>B2/S</strong>', 'Le cellule non sopravvivono mai.', 'Inizia con un piccolo seme.'],
        ['<strong>B3678/S34678</strong>', 'Day & Night supporta strutture inverse.', 'Testa con un\'elevata densità iniziale.'],
      ],
    },
    {
      type: 'title',
      text: 'Perché i pattern sono importanti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I pattern costituiscono il vocabolario del Gioco della Vita. Gli alianti mostrano il movimento e i pulsar l\'oscillazione.',
    },
    {
      type: 'title',
      text: 'Lettura delle metriche in tempo reale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Popolazione e densità indicano quante cellule sono vive, mentre nascite e morti mostrano il livello di attività attuale.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
