import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-energia-sfera-dyson';
const title = 'Simulatore di Cattura Energetica della Sfera di Dyson';
const description = 'Stima progetti di sciame, anello, guscio e nube di statiti di Dyson per stelle diverse. Calcola la potenza catturata, il raggio orbitale, la massa del materiale e la copertura necessaria per raggiungere una scala Kardashev target.';

const howTo = [
  {
    name: 'Scegli un tipo di stella',
    text: 'Inizia con una nana M, una stella simile al Sole, una stella di tipo A, una gigante rossa o una gigante blu. Il simulatore usa valori rappresentativi di luminosita e massa per stimare il raggio del collettore e il periodo orbitale.',
  },
  {
    name: 'Seleziona l architettura della megastruttura',
    text: 'Confronta uno sciame di Dyson, un anello equatoriale, un guscio rigido o una nuvola di specchi statiti. Ogni progetto ha diversa efficienza di cattura, densita di materiale e ipotesi di stabilita.',
  },
  {
    name: 'Imposta copertura e temperatura operativa',
    text: 'Aumenta la copertura per catturare piu potenza stellare, poi regola la temperatura operativa per avvicinare o allontanare i collettori dalla stella.',
  },
  {
    name: 'Seleziona un obiettivo Kardashev',
    text: 'Usa il cursore dell obiettivo per vedere quanta parte della stella deve essere coperta per raggiungere un obiettivo di potenza a scala di civilta.',
  },
];

const faq = [
  {
    question: 'Qual e la differenza tra una sfera di Dyson e uno sciame di Dyson?',
    answer: 'Una sfera di Dyson rigida e un guscio continuo attorno a una stella, mentre uno sciame di Dyson e una grande collezione di collettori orbitali indipendenti. La maggior parte delle discussioni ingegneristiche favorisce gli sciami perche un guscio solido sarebbe strutturalmente instabile ed estremamente intensivo in materiali.',
  },
  {
    question: 'Come sceglie il simulatore il raggio ottimale?',
    answer: 'Stima la distanza alla quale i collettori che irradiano da entrambi i lati raggiungono la temperatura operativa selezionata sotto la luminosita stellare scelta. I collettori piu caldi possono orbitare piu vicino, mentre quelli piu freddi richiedono raggi maggiori.',
  },
  {
    question: 'Cosa significa qui la valutazione Kardashev?',
    answer: 'Il valore Kardashev viene calcolato dalla potenza catturata usando la forma logaritmica comune K = (log10(P) - 6) / 10, dove P e la potenza in watt. Un valore vicino a K1 rappresenta un uso energetico su scala planetaria, mentre K2 si avvicina alla produzione stellare completa.',
  },
  {
    question: 'La massa del materiale e realistica?',
    answer: 'E una stima educativa di primo ordine basata sull area del collettore, sulla densita areale e su un fattore di stabilita. I progetti reali necessiterebbero di mantenimento in posizione, trasmissione di potenza, perdite minerarie, ridondanza, dissipazione del calore e infrastrutture di fabbricazione.',
  },
  {
    question: 'Perche le stelle luminose richiedono sistemi di collettori cosi grandi?',
    answer: 'Le stelle ad alta luminosita spingono il raggio termico sicuro verso l esterno. Questo aumenta la superficie necessaria per una data frazione di copertura, quindi la domanda di materiale puo crescere piu velocemente di quanto la potenza catturata sembri intuitivamente.',
  },
  {
    question: 'Una civilta puo raggiungere il Tipo II di Kardashev con copertura parziale?',
    answer: 'Si, se la stella ospite e abbastanza luminosa e i collettori sono efficienti. Intorno a una stella simile al Sole, raggiungere vicino al Tipo II richiede di catturare una grande frazione della luminosita solare, ma intorno a stelle piu luminose, lo stesso obiettivo di potenza puo richiedere una frazione di copertura inferiore.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualizzazione del collettore Dyson',
    starType: 'Tipo di stella',
    structureType: 'Struttura',
    coverage: 'Copertura del collettore',
    operatingTemp: 'Temperatura operativa',
    kardashevTarget: 'Obiettivo Kardashev',
    kardashevRating: 'Valutazione attuale',
    capturedPower: 'Potenza catturata',
    optimalRadius: 'Raggio ottimale',
    targetCoverage: 'Copertura obiettivo',
    materialMass: 'Massa del materiale',
    captureMeter: 'Progresso verso l obiettivo',
    statusReady: 'Regola il sistema per stimare la domanda del collettore.',
    orbitalPeriod: 'Periodo orbitale',
    collectorArea: 'Area del collettore',
    starMDwarf: 'Nana M',
    starSun: 'Stella di tipo G come il Sole',
    starA: 'Stella di tipo A',
    starRedGiant: 'Gigante rossa',
    starBlueGiant: 'Gigante blu',
    structureSwarm: 'Sciame di Dyson',
    structureRing: 'Anello equatoriale',
    structureShell: 'Guscio rigido',
    structureStatite: 'Nuvola di specchi statiti',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore di Cattura Energetica della Sfera di Dyson',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una sfera di Dyson non e solo un immagine di fantascienza di una stella all interno di un guscio. E una famiglia di possibili concetti di megastruttura per intercettare la luminosita stellare: sciami di satelliti, anelli equatoriali, nuvole sottili di specchi e il famoso ma problematico guscio rigido. Questo simulatore trasforma quelle idee in numeri in modo da poter confrontare come il tipo di stella, la temperatura del collettore, la copertura e il progetto strutturale cambiano il bilancio energetico.',
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore stima la potenza catturata, il raggio termico orbitale, l area del collettore, il periodo orbitale, la massa del materiale e la copertura necessaria per un obiettivo di scala Kardashev scelto. E costruito per studenti, costruttori di mondi, comunicatori scientifici e chiunque cerchi di capire perche le civilta di Tipo II sono difficili: la sfida non e solo la potenza, ma l area, il calore, l estrazione mineraria, la stabilita e la logistica orbitale.',
    },
    {
      type: 'title',
      text: 'Come viene stimato il raggio di Dyson',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il raggio ottimale viene calcolato dalla luminosita stellare e dalla temperatura operativa del collettore. Un collettore vicino a una stella luminosa riceve un flusso intenso e deve funzionare caldo o respingere enormi quantita di calore. Allontanarsi riduce lo stress termico, ma l area del collettore richiesta cresce con il quadrato della distanza. Questo compromesso spiega perche la stessa frazione di copertura puo essere modesta intorno a una debole nana M ed enorme intorno a una gigante blu.',
    },
    {
      type: 'title',
      text: 'Confronto tra Sciame di Dyson, Anello, Guscio e Nuvola di Statiti',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sciame di Dyson:</strong> molti collettori orbitali indipendenti. E l architettura su larga scala piu plausibile perche puo essere costruita gradualmente e non richiede un guscio stellare rigido.',
        '<strong>Anello equatoriale:</strong> una fascia di collettori piu stretta con minore efficienza di copertura. E piu facile da immaginare come prima megastruttura, ma non puo catturare l intera produzione stellare senza diventare uno sciame piu ampio.',
        '<strong>Guscio rigido:</strong> iconicamente visivo ma meccanicamente sfavorevole. Un guscio attorno a una stella ha gravi problemi di stabilita e materiale, quindi il simulatore gli assegna massa elevata e bassa stabilita.',
        '<strong>Nuvola di specchi statiti:</strong> riflettori ultraleggeri tenuti parzialmente dalla pressione di radiazione. Riduce la domanda di materiale ma ha una tolleranza termica inferiore e requisiti di controllo impegnativi.',
      ],
    },
    {
      type: 'title',
      text: 'Copertura necessaria per la scala Kardashev',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La scala Kardashev esprime il consumo energetico della civilta in modo logaritmico. In questo strumento, i watt catturati vengono convertiti in una valutazione K usando K = (log10(P) - 6) / 10. Uno sciame di Dyson parziale intorno al Sole puo superare l attuale consumo energetico umano di molti ordini di grandezza molto prima di raggiungere lo stato completo di Tipo II. Il risultato della copertura obiettivo mostra la frazione di luminosita stellare che deve essere intercettata per l obiettivo selezionato.',
    },
    {
      type: 'table',
      headers: ['Scelta progettuale', 'Vantaggio principale', 'Principale collo di bottiglia'],
      rows: [
        ['Sciame di Dyson', 'Costruibile per fasi con orbite indipendenti', 'Controllo del traffico e trasmissione di potenza'],
        ['Anello equatoriale', 'Area iniziale inferiore e geometria piu semplice', 'Copertura limitata'],
        ['Guscio rigido', 'Intercettazione massima in un diagramma semplice', 'Instabilita strutturale e massa enorme'],
        ['Nuvola di statiti', 'Densita areale molto bassa', 'Preciso mantenimento in posizione e limiti termici'],
      ],
    },
    {
      type: 'title',
      text: 'Massa del materiale e verifica realistica dell estrazione mineraria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La stima del materiale moltiplica l area del collettore per una densita areale ipotizzata e un fattore di stabilita progettuale. Riporta intenzionalmente la massa in masse di Mercurio quando il numero diventa astronomico, perche molte discussioni sugli sciami di Dyson immaginano di smantellare piccoli pianeti o asteroidi per ottenere materia prima. Anche i collettori sottili diventano massicci quando distribuiti su scale di unita astronomiche.',
    },
    {
      type: 'paragraph',
      html: 'Usa il risultato come guida di ordine di grandezza piuttosto che come progetto. La vera ingegneria delle megastrutture richiederebbe modelli di danno da radiazione, cicli termici, evitamento di collisioni, controllo di assetto, trasmissione di potenza, rendimento di fabbricazione ed evoluzione orbitale a lungo termine. Il valore del simulatore e che rende visibili immediatamente i primi vincoli.',
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
