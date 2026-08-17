import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-doppia-fenditura-decoerenza';
const title = 'Simulatore dell\'Esperimento della Doppia Fenditura e Decoerenza';
const description = 'Attiva e disattiva i rivelatori di percorso per vedere l\'interferenza quantistica dissolversi in due bande di particelle in un simulatore visivo a doppia fenditura.';

const howTo = [
  {
    name: 'Inizia con il rivelatore spento',
    text: 'Lascia il rivelatore di percorso disattivato e osserva lo schermo formare frange di interferenza chiare e scure dalle ampiezze di probabilità coerenti.',
  },
  {
    name: 'Aumenta l\'intensità del rivelatore',
    text: 'Alza il controllo del rivelatore per introdurre informazioni sul percorso. Più il rivelatore diventa forte, più la coerenza diminuisce e le frange scompaiono.',
  },
  {
    name: 'Modifica la geometria delle fenditure',
    text: 'Regola la separazione e la larghezza delle fenditure per vedere come la geometria cambia la spaziatura delle frange, la larghezza dell\'inviluppo e la distribuzione finale sullo schermo.',
  },
  {
    name: 'Leggi le metriche in tempo reale',
    text: 'Usa la visibilità delle frange, l\'informazione sul percorso e la coerenza per collegare il pattern visivo con la storia della misura quantistica.',
  },
];

const faq = [
  {
    question: 'Perché il pattern cambia quando i rivelatori vengono accesi?',
    answer: 'Un rivelatore che può rivelare quale fenditura ha usato la particella distrugge la relazione di fase tra le due alternative. Senza quella coerenza, i due percorsi di probabilità non interferiscono più e lo schermo si avvicina a due ampie bande di particelle.',
  },
  {
    question: 'Questo simulatore significa che la coscienza collassa la funzione d\'onda?',
    answer: 'No. Il simulatore si concentra sull\'informazione fisica del percorso e sulla decoerenza. Un rivelatore, l\'ambiente o qualsiasi interazione che renda il percorso distinguibile può sopprimere l\'interferenza senza richiedere un osservatore cosciente.',
  },
  {
    question: 'Cos\'è la visibilità delle frange?',
    answer: 'La visibilità delle frange confronta le regioni chiare e scure sullo schermo. Un\'alta visibilità significa un forte contrasto di interferenza. Una bassa visibilità significa che gli spazi scuri si sono riempiti e il pattern si comporta più come due flussi di particelle indipendenti.',
  },
  {
    question: 'È un risolutore completo di meccanica quantistica?',
    answer: 'No. È un modello didattico che combina un inviluppo di interferenza a doppia fenditura con un controllo di decoerenza. È progettato per spiegare visivamente l\'effetto di misura, non per sostituire una simulazione dell\'equazione di Schrödinger per un apparato reale.',
  },
  {
    question: 'Perché la separazione delle fenditure influisce sulla spaziatura delle frange?',
    answer: 'Una separazione maggiore crea una differenza di fase più rapida attraverso lo schermo, quindi le bande chiare e scure si avvicinano. Una separazione minore distribuisce le frange più distantemente.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Apparato a doppia fenditura',
    controls: 'Controlli della doppia fenditura',
    results: 'Risultati della doppia fenditura',
    kicker: 'Controllo di misura',
    detectorToggle: 'Attiva rivelatore di percorso',
    detectorStrength: 'Intensità del rivelatore',
    slitSeparation: 'Separazione delle fenditure',
    slitWidth: 'Larghezza della fenditura',
    unobserved: 'Non osservato',
    observed: 'Osservato',
    waveMode: 'Interferenza',
    particleMode: 'Bande di particelle',
    fringeVisibility: 'Visibilità delle frange',
    whichPath: 'Informazione di percorso',
    coherence: 'Coerenza',
    readoutNote: 'L\'interferenza sopravvive quando entrambi i percorsi rimangono indistinguibili. La misura rende disponibile l\'informazione di percorso e lo schermo perde le sue frange scure.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore dell\'esperimento della doppia fenditura con decoerenza e tracciamento del percorso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore a doppia fenditura trasforma il classico esperimento quantistico in un modello visivo interattivo. Con il rilevatore disattivato, lo schermo mostra una figura di interferenza: frange chiare e scure prodotte dal fatto che le due alternative di percorso rimangono coerenti.',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento è progettato per chi cerca una spiegazione chiara di come la misurazione modifichi il risultato. Evita l\'espressione vaga secondo cui "l\'osservatore cambia la realtà" e si concentra sull\'idea fisica: l\'interferenza richiede alternative indistinguibili.',
    },
    {
      type: 'title',
      text: 'Cosa dimostra l\'esperimento della doppia fenditura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nella configurazione non osservata, un singolo oggetto quantistico è descritto da ampiezze di probabilità associate a entrambe le fenditure. Tali ampiezze si sommano mantenendo la fase, generando frange chiare per interferenza costruttiva e scure per interferenza distruttiva.',
    },
    {
      type: 'paragraph',
      html: 'Se un rilevatore registra la fenditura attraversata, le due opzioni smettono di essere indistinguibili e lo schermo mostra una distribuzione classica a due bande.',
    },
    {
      type: 'title',
      text: 'Come leggere il simulatore',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Controllo o metrica', 'Cosa modifica', 'Cosa osservare'],
      rows: [
        ['Intensità del rilevatore', 'Quantità di informazione sul percorso disponibile', 'Valori più alti riducono la visibilità delle frange e accentuano il motivo corpuscolare.'],
        ['Separazione tra le fenditure', 'Distanza tra le due aperture', 'Una separazione maggiore ravvicina le frange di interferenza sullo schermo.'],
        ['Larghezza delle fenditure', 'Dimensione di ciascuna apertura', 'Fenditure più larghe restringono l\'involucro di diffrazione.'],
        ['Visibilità delle frange', 'Contrasto tra regioni chiare e scure', 'Un valore elevato indica che l\'interferenza coerente è ben visibile.'],
        ['Coerenza', 'Relazione di fase residua tra i percorsi', 'La coerenza crolla man mano che il percorso diventa distinguibile.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoerenza senza misticismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La decoerenza è la perdita di coerenza di fase sfruttabile quando un sistema quantistico si correla con un rilevatore o con l\'ambiente.',
    },
    {
      type: 'paragraph',
      html: 'La fisica fondamentale non riguarda la consapevolezza di un osservatore umano, ma il fatto che l\'apparato mantenga o distrugga l\'indistinguibilità delle alternative.',
    },
    {
      type: 'title',
      text: 'Limiti di questo modello didattico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il simulatore combina un modello ottico a doppia fenditura con una funzione di decoerenza basata sull\'intensità del rilevatore. È ideale per la didattica e l\'intuizione concettuale.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usalo per comprendere i concetti:</strong> interferenza, informazione sul percorso, coerenza e misurazione.',
        '<strong>Non usarlo per la progettazione di laboratorio:</strong> gli esperimenti reali richiedono calcoli precisi di lunghezza d\'onda e propagazione.',
        '<strong>Concentrati sulla tendenza:</strong> all\'aumentare della distinguibilità, il contrasto di interferenza diminuisce.',
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