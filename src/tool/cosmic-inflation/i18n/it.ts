import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatore-inflazione-cosmica';
const description = 'Calcola l espansione esponenziale dell universo primordiale durante l epoca dell inflazione cosmica.';
const title = 'Calcolatore di Inflazione Cosmica: Espansione dell Universo Primordial';

const howTo = [
  {
    name: 'Seleziona valori',
    text: 'Trascina i cursori per vedere i risultati.',
  },
  {
    name: 'Confronta i fattori di scala',
    text: 'Guarda di quanti ordini di grandezza lo spazio si e espanso.',
  },
  {
    name: 'Analizza la distorsione dinamica',
    text: 'La tela mostra l espansione dello spazio.',
  },
];

const faq = [
  {
    "question": "Che cos e l inflazione cosmica e perche e avvenuta?",
    "answer": "L inflazione cosmica e una teoria che ipotizza un espansione ultra-rapida ed esponenziale dello spazio nelle primissime frazioni di secondo dell universo, precisamente circa 10^-36 secondi dopo il Big Bang. E avvenuta perche un campo scalare teorico, chiamato inflaton, si trovava in uno stato di alta densita energetica di falso vuoto, generando una pressione negativa e una forza di gravita repulsiva che ha stirato il tessuto dello spazio-tempo."
  },
  {
    "question": "Cosa significa il numero di e-folds?",
    "answer": "Il numero di e-folds misura la durata della fase di espansione esponenziale. Un e-fold rappresenta il tempo in cui la dimensione dell universo viene moltiplicata per il numero di Eulero (circa 2.718). Se l universo subisce N e-folds, il suo fattore di scala aumenta di un fattore di e^N. I modelli cosmologici standard richiedono almeno 50-60 e-folds per risolvere adeguatamente i problemi di piattezza e dell orizzonte."
  },
  {
    "question": "In che modo l inflazione risolve il problema dell orizzonte?",
    "answer": "Il problema dell orizzonte si chiede perche regioni dell universo estremamente distanti abbiano temperature di radiazione cosmica di fondo quasi identiche, anche se la velocita della luce non avrebbe permesso loro di interagire per raggiungere l equilibrio. L inflazione risolve questo problema dimostrando che, prima dell espansione esponenziale, l intero universo osservabile era una minuscola regione termicamente omogenea causalmente connessa, che e stata istantaneamente stirata oltre l orizzonte visivo."
  },
  {
    "question": "Cos e il problema della piattezza e come viene risolto?",
    "answer": "La densita di energia dell universo attuale e estremamente vicina alla densita critica, il che significa che lo spazio e piatto con un margine di errore minimo. Senza inflazione, qualsiasi deviazione iniziale dalla piattezza sarebbe cresciuta in modo esponenziale nel tempo, richiedendo una calibrazione fine impossibile al momento del Big Bang. L inflazione stira la curvatura spaziale in modo cosi violento che qualsiasi curvatura iniziale viene diluita, in modo simile a come la superficie di una sfera gigante appare piatta a livello locale."
  },
  {
    "question": "Cos e il processo di riscaldamento o reheating?",
    "answer": "Il riscaldamento e la transizione termica che segna la fine dell inflazione. Durante l inflazione, l universo si raffredda a temperature prossime allo zero assoluto a causa dell espansione esponenziale del volume. Quando il campo dell inflaton decade al minimo del suo potenziale, la sua energia rimanente si riversa nello spazio sotto forma di particelle del Modello Standard attraverso interazioni quantistiche, riempiendo il cosmo di un plasma caldo e denso che avvia la fase tradizionale del Big Bang."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calcolatore di Inflazione Cosmica',
    efoldsLabel: 'Numero di e-folds (N)',
    energyLabel: 'Scala di Energia Iniziale (GeV)',
    scaleFactorResult: 'Crescita del Fattore di Scala',
    reheatingTempResult: 'Temperatura di Riscaldamento Stimata',
    chartTitle: 'Distorsione del Tessuto Spazio-Temporale',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Caotica',
    presetExtreme: 'Limiti Estremi',
    efoldsTooltip: 'I modelli tipici prevedono tra 50 e 60 e-folds.',
    energyTooltip: 'La scala GUT e di circa 10^16 GeV.',
    scaleFactorTooltip: 'Rappresenta il fattore di espansione totale.',
    reheatingTooltip: 'La temperatura al termine dell inflazione.',
    analogyInsuff: 'Inflazione modera. Questa espansione e insufficiente.',
    analogyProton: 'L universo si e espanso dalle dimensioni di un protone a quelle di una galassia in una frazione di secondo.',
    analogyObservable: 'L universo si e espanso da una scala subatomica a una dimensione superiore a quella dell universo osservabile in 10^-32 secondi.',
  },
  seo: [
  {
    "type": "title",
    "text": "COSMOLOGIA: La teoria dell inflazione cosmica e l espansione dello spazio-tempo",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "L inflazione cosmica rappresenta il pilastro fondamentale che unisce la fisica delle particelle con l astrofisica osservativa. Proposta nei primi anni '80 da fisici come Alan Guth e Andrei Linde, questa teoria ipotizza che l universo primordiale abbia subito una fase di espansione esponenziale guidata dalla densita energetica di un campo scalare noto come inflaton. Questa espansione ha aumentato il volume dell universo di un fattore di almeno 10^26 in una frazione infinitesima di secondo, risolvendo profondi paradossi del modello classico del Big Bang e fornendo il quadro teorico per la formazione della struttura cosmica."
  },
  {
    "type": "title",
    "text": "Confronto dei modelli e dei parametri di inflazione",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Diversi potenziali per il campo dell inflaton producono tassi di espansione e temperature di riscaldamento distinti. Di seguito sono riportate le caratteristiche dei principali modelli simulati in questo calcolatore:"
  },
  {
    "type": "table",
    "headers": [
      "Modello di Inflazione",
      "Intervallo e-folds (N)",
      "Scala di Energia (GeV)",
      "Risultato Fisico e Dinamico"
    ],
    "rows": [
      [
        "<strong>Standard Guth</strong>",
        "50 - 60",
        "10^16",
        "Risolve piattezza e orizzonte; l inflazione termina tramite nucleazione di bolle in una transizione di fase lenta."
      ],
      [
        "<strong>Inflazione Caotica (Linde)</strong>",
        "60 o piu",
        "10^16",
        "L inflaton scende dolcemente lungo un semplice potenziale parabolico; evita i problemi di transizione di fase improvvisa."
      ],
      [
        "<strong>Limiti Estremi</strong>",
        "90 o piu",
        "10^19 (Planck)",
        "Energie vicine al limite della gravita quantistica; stiramento massiccio dello spazio-tempo primordiale."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Risoluzione dei problemi del Big Bang classico",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Prima dello sviluppo dell inflazione, la cosmologia classica del Big Bang soffriva di gravi incongruenze teoriche. Il problema dell orizzonte, derivante dall omogeneita del fondo cosmico a microonde, e il problema della piattezza, associato alla densita critica dello spazio, suggerivano la necessita di condizioni iniziali estremamente improbabili. L inflazione risolve naturalmente entrambe le difficolta stirando una micro-regione termicamente omogenea e appiattendo in modo dinamico la geometria spaziale locale. Inoltre, diluisce la concentrazione di monopoli magnetici che avrebbero dovuto formarsi in abbondanza nell universo primordiale."
  },
  {
    "type": "title",
    "text": "Prove astronomiche osservative del modello inflazionario",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La teoria dell inflazione cosmica non e solo un elegante costruzione matematica; dispone di solide prove indirette confermate da satelliti spaziali come COBE, WMAP e Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Omogeneita del CMB:</strong> La radiazione cosmica di fondo mostra una temperatura uniforme con variazioni di una sola parte su 100,000 in punti opposti del cielo visibile.",
      "<strong>Geometria Piatta:</strong> Le misurazioni della curvatura dell universo confermano che e spazialmente piatto con un margine di errore inferiore all 1%, coerente con un massiccio stiramento inflazionario.",
      "<strong>Assenza di Monopoli:</strong> Spiega in modo logico l assenza totale di monopoli magnetici stabili di grande massa nel nostro universo osservabile.",
      "<strong>Spettro di Fluttuazioni:</strong> Le anisotropie osservate nel fondo cosmico mostrano un indice spettrale leggermente inferiore a 1, esattamente come previsto dai modelli di inflaton a lento rotolamento."
    ]
  },
  {
    "type": "title",
    "text": "Fluttuazioni quantistiche e il seme delle galassie",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "L aspetto piu straordinario dell inflazione cosmica e la sua capacita di agire come un microscopio cosmico. Le fluttuazioni quantistiche microscopiche del campo dell inflaton si sono stirate a scale astronomiche durante il periodo di espansione esponenziale. Al termine dell inflazione, queste fluttuazioni si sono congelate sotto forma di variazioni di densita della materia (perturbazioni primordiali). Queste differenze di densita hanno servito da semi gravitazionali che, nel corso di miliardi di anni, hanno attratto la materia per dare origine alle prime stelle, galassie, ammassi di galassie e alla grande rete cosmica che osserviamo oggi."
  }
],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
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
