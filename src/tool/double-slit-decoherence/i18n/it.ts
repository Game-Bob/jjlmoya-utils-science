import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-doppia-fenditura-decoerenza';
const title = 'Simulatore dell Esperimento della Doppia Fenditura e Decoerenza';
const description = 'Attiva e disattiva i rivelatori di percorso per vedere l interferenza quantistica dissolversi in due bande di particelle in un simulatore visivo a doppia fenditura.';

const howTo = [
  {
    name: 'Inizia con il rivelatore spento',
    text: 'Lascia il rivelatore di percorso disattivato e osserva lo schermo formare frange di interferenza chiare e scure dalle ampiezze di probabilita coerenti.',
  },
  {
    name: 'Aumenta l intensita del rivelatore',
    text: 'Alza il controllo del rivelatore per introdurre informazioni sul percorso. Piu il rivelatore diventa forte, piu la coerenza diminuisce e le frange si cancellano.',
  },
  {
    name: 'Modifica la geometria delle fenditure',
    text: 'Regola la separazione e la larghezza delle fenditure per vedere come la geometria cambia la spaziatura delle frange, la larghezza dell inviluppo e la distribuzione finale sullo schermo.',
  },
  {
    name: 'Leggi le metriche in tempo reale',
    text: 'Usa la visibilita delle frange, l informazione sul percorso e la coerenza per collegare il pattern visivo con la storia della misura quantistica.',
  },
];

const faq = [
  {
    question: 'Perche il pattern cambia quando i rivelatori vengono accesi?',
    answer: 'Un rivelatore che puo rivelare quale fenditura ha usato la particella distrugge la relazione di fase tra le due alternative. Senza quella coerenza, i due percorsi di probabilita non interferiscono piu e lo schermo si avvicina a due ampie bande di particelle.',
  },
  {
    question: 'Questo simulatore significa che la coscienza collassa la funzione d onda?',
    answer: 'No. Il simulatore si concentra sull informazione fisica del percorso e sulla decoerenza. Un rivelatore, l ambiente o qualsiasi interazione che renda il percorso distinguibile puo sopprimere l interferenza senza richiedere un osservatore cosciente.',
  },
  {
    question: 'Cos e la visibilita delle frange?',
    answer: 'La visibilita delle frange confronta le regioni chiare e scure sullo schermo. Un alta visibilita significa un forte contrasto di interferenza. Una bassa visibilita significa che gli spazi scuri si sono riempiti e il pattern si comporta piu come due flussi di particelle indipendenti.',
  },
  {
    question: 'E un risolutore completo di meccanica quantistica?',
    answer: 'No. E un modello didattico che combina un inviluppo di interferenza a doppia fenditura con un controllo di decoerenza. E progettato per spiegare visivamente l effetto di misura, non per sostituire una simulazione dell equazione di Schrodinger per un apparato reale.',
  },
  {
    question: 'Perche la separazione delle fenditure influisce sulla spaziatura delle frange?',
    answer: 'Una separazione maggiore crea una differenza di fase piu rapida attraverso lo schermo, quindi le bande chiare e scure si avvicinano. Una separazione minore distribuisce le frange piu distanti.',
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
    detectorStrength: 'Intensita del rivelatore',
    slitSeparation: 'Separazione delle fenditure',
    slitWidth: 'Larghezza della fenditura',
    unobserved: 'Non osservato',
    observed: 'Osservato',
    waveMode: 'Interferenza',
    particleMode: 'Bande di particelle',
    fringeVisibility: 'Visibilita delle frange',
    whichPath: 'Informazione di percorso',
    coherence: 'Coerenza',
    readoutNote: 'L interferenza sopravvive quando entrambi i percorsi rimangono indistinguibili. La misura rende disponibile l informazione di percorso e lo schermo perde le sue frange scure.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore dell esperimento della doppia fenditura con decoerenza e rivelazione di percorso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore a doppia fenditura trasforma il classico esperimento quantistico in un modello visivo interattivo. Con il rivelatore spento, lo schermo mostra un pattern di interferenza: bande chiare e scure prodotte perche i due percorsi possibili rimangono coerenti. Quando si aggiunge un rivelatore di percorso, il pattern si trasforma gradualmente in due ampie bande di particelle perche le alternative di percorso diventano distinguibili.',
    },
    {
      type: 'paragraph',
      html: 'Lo strumento e progettato per studenti che cercano una spiegazione chiara del perche l osservazione cambi il risultato della doppia fenditura. Evita la vaga frase "l osservatore cambia la realta" e si concentra sull idea fisicamente utile: l interferenza richiede alternative indistinguibili, mentre la misura e l entanglement ambientale rimuovono la relazione di fase necessaria per le frange.',
    },
    {
      type: 'title',
      text: 'Cosa dimostra l esperimento della doppia fenditura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nella configurazione non osservata, un singolo oggetto quantistico e descritto da ampiezze di probabilita associate a entrambe le fenditure. Quelle ampiezze si sommano con fase. In alcune posizioni sullo schermo si rinforzano a vicenda, producendo bande chiare; in altre posizioni si cancellano, producendo bande scure. Quella struttura alternata e la firma dell interferenza.',
    },
    {
      type: 'paragraph',
      html: 'Se un rivelatore registra quale fenditura e stata usata, le alternative cessano di essere indistinguibili. Lo schermo non riceve piu una somma coerente di ampiezze. Riceve una miscela di due risultati condizionati dal percorso, quindi gli spazi scuri di interferenza si riempiono e il risultato assomiglia a particelle che passano attraverso l una o l altra fenditura.',
    },
    {
      type: 'title',
      text: 'Come leggere il simulatore',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Controllo o metrica', 'Cosa cambia', 'Cosa cercare'],
      rows: [
        ['Intensita del rivelatore', 'Quanta informazione di percorso e disponibile', 'Valori piu alti riducono la visibilita delle frange e aumentano il pattern a due bande.'],
        ['Separazione delle fenditure', 'La distanza tra le due aperture', 'Una separazione maggiore rende le bande di interferenza piu ravvicinate sullo schermo.'],
        ['Larghezza della fenditura', 'La dimensione di ciascuna apertura', 'Fenditure piu larghe restringono l inviluppo di diffrazione e rimodellano la luminosita complessiva.'],
        ['Visibilita delle frange', 'Contrasto tra regioni chiare e scure dello schermo', 'Un numero alto significa che l interferenza coerente e ancora visibile.'],
        ['Coerenza', 'Quanta relazione di fase rimane tra i percorsi', 'La coerenza diminuisce man mano che il rivelatore rende i percorsi distinguibili.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoerenza senza misticismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La decoerenza e la perdita di coerenza di fase utilizzabile quando un sistema quantistico si correla con un rivelatore o con l ambiente. In un esperimento a doppia fenditura, quella correlazione puo trasportare informazioni sul percorso. Una volta che il percorso e registrato in linea di principio, anche se nessuno legge la registrazione, il pattern di interferenza viene soppresso.',
    },
    {
      type: 'paragraph',
      html: 'Questa distinzione e importante perche molte spiegazioni esagerano il ruolo dell osservazione umana. La fisica importante non e la vista o la coscienza; e se l apparato sperimentale preserva o distrugge l indistinguibilita delle alternative che altrimenti interferirebbero.',
    },
    {
      type: 'title',
      text: 'Limiti di questo modello didattico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il simulatore utilizza un pattern compatto di doppia fenditura in stile ottico e lo combina con un modello di intensita del rivelatore per la decoerenza. E eccellente per l intuizione, le dimostrazioni in classe e la revisione concettuale, ma non e una soluzione numerica di un apparato quantistico completo con spazi di Hilbert del rivelatore, sorgenti di rumore o calibrazione da laboratorio.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usalo per capire i concetti:</strong> interferenza, informazione di percorso, coerenza e misura.',
        '<strong>Non usarlo per la progettazione sperimentale:</strong> i veri esperimenti a doppia fenditura richiedono calcoli precisi di lunghezza d onda, apertura, rivelatore e propagazione.',
        '<strong>Concentrati sul trend:</strong> all aumentare della distinguibilita, il contrasto di interferenza diminuisce.',
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
