import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulatore-selezione-naturale-deriva-genetica';
const title = 'Simulatore di selezione naturale e deriva genetica';
const description =
  'Guarda in tempo reale come pressione selettiva, mutazione, deriva e riproduzione cambiano le frequenze alleliche.';

const howTo = [
  {
    name: 'Imposta la popolazione',
    text: 'Scegli una popolazione piccola o grande per vedere come il campione influenza la stabilita evolutiva.',
  },
  {
    name: 'Regola selezione e deriva',
    text: 'Aumenta la pressione selettiva o la deriva per osservare traiettorie evolutive diverse.',
  },
  {
    name: 'Segui le generazioni',
    text: 'Avvia la simulazione e confronta tratto dominante, fitness e diversita nel tempo.',
  },
  {
    name: 'Interpreta i risultati',
    text: 'Usa le metriche per capire quando vince l adattamento e quando domina il caso.',
  },
];

const faq = [
  {
    question: 'Qual e la differenza tra selezione naturale e deriva genetica?',
    answer:
      'La selezione naturale non e casuale: i tratti vantaggiosi diventano piu comuni. La deriva genetica e una variazione casuale delle frequenze alleliche, molto forte nelle popolazioni piccole.',
  },
  {
    question: 'Perche le popolazioni piccole cambiano piu velocemente?',
    answer:
      'Con pochi individui il campionamento casuale ha un effetto piu grande sulla generazione successiva.',
  },
  {
    question: 'La deriva puo superare la selezione?',
    answer:
      'Si. Un tratto vantaggioso puo sparire per caso se la deriva e abbastanza forte.',
  },
  {
    question: 'Cosa significa fitness in questo simulatore?',
    answer:
      'Fitness e un punteggio semplificato di quanto bene la popolazione e adattata all ambiente scelto.',
  },
  {
    question: 'Perche la dimensione della popolazione e cosi importante?',
    answer: 'Determina quanto il caso influenza le frequenze alleliche.',
  },
  {
    question: 'Quando usare questo simulatore?',
    answer:
      'Quando vuoi capire l intuizione dell evoluzione, soprattutto selezione contro deriva.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Dimensione della popolazione',
    generations: 'Generazioni',
    mutationRate: 'Tasso di mutazione',
    selectionPressure: 'Pressione selettiva',
    driftIntensity: 'Intensita della deriva',
    alleleCount: 'Alleli iniziali',
    innovationRate: 'Tasso di innovazione',
    run: 'Avvia simulazione',
    dominantTrait: 'Tratto dominante',
    fitness: 'Fitness finale',
    diversity: 'Diversita genetica',
    evolutionConsole: 'Console evolutiva',
    populationLabel: 'Popolazione',
    aliveLabel: 'vivi',
    alleleCountsLabel: 'Conteggio alleli',
    alleleDefault: 'Alele 1',
    populationValueLabel: 'Popolazione',
  },
  seo: [
    {
      type: 'title',
      text: 'Selezione naturale vs deriva genetica: capire l evoluzione con una popolazione viva',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Se vuoi capire selezione naturale vs deriva genetica, questo simulatore ti da il livello visivo che manca spesso.',
    },
    {
      type: 'title',
      text: 'Cosa significano i controlli',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'La selezione naturale aumenta la frequenza dei tratti vantaggiosi. La deriva genetica cambia le frequenze alleliche in modo casuale.',
    },
    {
      type: 'paragraph',
      html:
        'Le due forze agiscono insieme. Nelle popolazioni grandi la selezione domina spesso; in quelle piccole il caso puo cancellare tratti utili.',
    },
    {
      type: 'title',
      text: 'Come leggere i risultati',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Le metriche live mostrano l allele dominante, la diversita genetica, il fitness finale e se la popolazione cresce o crolla.',
    },
    {
      type: 'title',
      text: 'Perche la dimensione della popolazione cambia la storia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pressione selettiva:</strong> quanto l ambiente premia un tratto.',
        '<strong>Intensita della deriva:</strong> quanto rumore casuale agisce a ogni generazione.',
        '<strong>Tasso di mutazione:</strong> quanto spesso entra nuova variabilita.',
        '<strong>Numero di alleli:</strong> quanti alleli espliciti ci sono all inizio.',
        '<strong>Diversita genetica:</strong> perche la variazione e il materiale grezzo dell evoluzione.',
      ],
    },
    {
      type: 'paragraph',
      html:
        'Il simulatore ti aiuta a capire l evoluzione in modo pratico, senza fermarti alle definizioni astratte.',
    },
    {
      type: 'title',
      text: 'Esempi rapidi',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Obiettivo', 'Cosa cambiare', 'Cosa dovresti vedere'],
      rows: [
        [
          'Mostrare la vittoria della selezione',
          'Aumenta la pressione selettiva e riduci la deriva',
          'Un allele deve dominare nel tempo',
        ],
        [
          'Mostrare il caso che prende il controllo',
          'Riduci la popolazione e aumenta la deriva',
          'Le frequenze oscillano in modo imprevedibile',
        ],
        [
          'Mostrare nuove mutazioni',
          'Aumenta mutazione e innovazione',
          'Appaiono nuovi alleli piu spesso',
        ],
      ],
    },
    {
      type: 'paragraph',
      html:
        'La combinazione di visuale live, ranking esplicito degli alleli e metriche in tempo reale rende il simulatore utile per insegnare e spiegare i compromessi evolutivi.',
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
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
