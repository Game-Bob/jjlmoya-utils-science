import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulatore-selezione-naturale-deriva-genetica';
const title = 'Simulatore di selezione naturale e deriva genetica';
const description =
  'Guarda in tempo reale come pressione selettiva, mutazione, deriva e riproduzione cambiano le frequenze alleliche.';

const howTo = [
  {
    name: 'Imposta la popolazione',
    text: 'Scegli una popolazione piccola o grande per vedere come il campione influenza la stabilità evolutiva.',
  },
  {
    name: 'Regola selezione e deriva',
    text: 'Aumenta la pressione selettiva o la deriva per osservare traiettorie evolutive diverse.',
  },
  {
    name: 'Segui le generazioni',
    text: 'Avvia la simulazione e confronta il tratto dominante, la fitness e la diversità nel tempo.',
  },
  {
    name: 'Interpreta i risultati',
    text: 'Usa le metriche per capire quando vince l\'adattamento e quando domina il caso.',
  },
];

const faq = [
  {
    question: 'Qual è la differenza tra selezione naturale e deriva genetica?',
    answer:
      'La selezione naturale non è casuale: i tratti vantaggiosi diventano più comuni perché aumentano la fitness. La deriva genetica è una variazione casuale delle frequenze alleliche, un fenomeno molto più marcato nelle popolazioni piccole.',
  },
  {
    question: 'Perché le popolazioni piccole cambiano più velocemente?',
    answer:
      'Con pochi individui, il campionamento casuale ha un impatto molto più grande sulla composizione genetica della generazione successiva.',
  },
  {
    question: 'La deriva può superare la selezione?',
    answer:
      'Sì. Un tratto vantaggioso può sparire per caso se la deriva genetica è sufficientemente forte, annullando il vantaggio selettivo.',
  },
  {
    question: 'Cosa significa "fitness" in questo simulatore?',
    answer:
      'La fitness è un punteggio semplificato che indica quanto bene la popolazione è adattata all\'ambiente scelto nel simulatore.',
  },
  {
    question: 'Perché la dimensione della popolazione è importante?',
    answer:
      'Determina quanto le fluttuazioni casuali influenzano le frequenze alleliche.',
  },
  {
    question: 'Quando dovrei usare questo simulatore?',
    answer:
      'Quando vuoi capire l\'intuizione dietro l\'evoluzione, specialmente la differenza tra selezione e deriva.',
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
    driftIntensity: 'Intensità della deriva',
    alleleCount: 'Alleli iniziali',
    innovationRate: 'Tasso di innovazione',
    run: 'Avvia simulazione',
    dominantTrait: 'Tratto dominante',
    fitness: 'Fitness finale',
    diversity: 'Diversità genetica',
    evolutionConsole: 'Console evolutiva',
    populationLabel: 'Popolazione',
    aliveLabel: 'vivi',
    alleleCountsLabel: 'Conteggio alleli',
    alleleDefault: 'Allele 1',
    populationValueLabel: 'Popolazione',
  },
  seo: [
    {
      type: 'title',
      text: 'Selezione naturale vs deriva genetica: capire l\'evoluzione con una popolazione viva',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se vuoi capire la differenza tra selezione naturale e deriva genetica, questo simulatore ti offre la prospettiva visiva che spesso manca nei libri di testo.',
    },
    {
      type: 'title',
      text: 'Cosa significano i controlli e perché sono importanti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La selezione naturale aumenta la frequenza dei tratti vantaggiosi. La deriva genetica modifica le frequenze alleliche in modo puramente stocastico.',
    },
    {
      type: 'paragraph',
      html: 'Le due forze agiscono costantemente insieme: nelle popolazioni ampie la selezione domina, mentre in quelle ridotte il caso può cancellare tratti anche molto utili.',
    },
    {
      type: 'title',
      text: 'Come leggere i risultati della simulazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le metriche in tempo reale mostrano il tratto dominante, la diversità genetica, la fitness finale e lo stato della popolazione.',
    },
    {
      type: 'title',
      text: 'Perché la dimensione della popolazione cambia l\'evoluzione',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pressione selettiva:</strong> Quanto l\'ambiente favorisce un tratto.',
        '<strong>Intensità della deriva:</strong> Il rumore casuale del campionamento.',
        '<strong>Tasso di mutazione:</strong> La frequenza di comparsa di nuove varianti.',
        '<strong>Numero di alleli:</strong> La diversità iniziale nel sistema.',
        '<strong>Diversità genetica:</strong> La materia prima per l\'adattamento.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Un utile strumento pratico per comprendere selezione, deriva e mutazioni nei sistemi biologici.',
    },
    {
      type: 'title',
      text: 'Esempi rapidi da provare',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Obiettivo', 'Modifica', 'Risultato atteso'],
      rows: [
        [
          'Mostrare la selezione',
          'Aumenta pressione selettiva e riduci deriva',
          'Un allele domina gradualmente',
        ],
        [
          'Mostrare la deriva',
          'Riduci popolazione e aumenta deriva',
          'Fluttuazioni casuali degli alleli',
        ],
        [
          'Mostrare le mutazioni',
          'Aumenta il tasso di mutazione',
          'Nuovi alleli compaiono regolarmente',
        ],
      ],
    },
    {
      type: 'paragraph',
      html: 'La combinazione di immagini in tempo reale e metriche semplifica la comprensione dei meccanismi evolutivi.',
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