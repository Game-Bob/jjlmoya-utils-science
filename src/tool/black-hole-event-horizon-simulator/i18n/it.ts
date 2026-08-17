import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-orizzonte-eventi';
const title = 'Simulatore dell\'Orizzonte degli Eventi di un Buco Nero';
const description = 'Esplora l\'orizzonte degli eventi di un buco nero con calcoli interattivi: massa, distanza orbitale, dilatazione temporale, sfera dei fotoni, velocità di fuga e raggio di Schwarzschild.';

const howTo = [
  {
    name: 'Scegli la massa del buco nero',
    text: 'Muovi il cursore della massa da un buco nero stellare a uno supermassiccio e osserva il raggio di Schwarzschild scalare in tempo reale.',
  },
  {
    name: 'Avvicina la sonda all\'orizzonte',
    text: 'Imposta la distanza in raggi di Schwarzschild per confrontare un\'orbita esterna sicura, la regione della sfera dei fotoni e il bordo dell\'orizzonte degli eventi.',
  },
  {
    name: 'Ispeziona gli effetti relativistici',
    text: 'Leggi la velocità di fuga, la dilatazione gravitazionale del tempo, il redshift e il periodo orbitale per capire perché l\'intuizione ordinaria viene meno vicino all\'orizzonte.',
  },
  {
    name: 'Confronta i raggi caratteristici',
    text: 'Usa gli anelli guida dell\'orizzonte degli eventi, della sfera dei fotoni e dell\'ISCO per comprendere i diversi confini attorno a un buco nero senza rotazione.',
  },
];

const faq = [
  {
    question: 'Cos\'è l\'orizzonte degli eventi di un buco nero?',
    answer: 'L\'orizzonte degli eventi è il confine dove la velocità di fuga raggiunge la velocità della luce. Una volta che un oggetto lo attraversa, nessun segnale che si muova alla velocità della luce o inferiore può tornare all\'universo esterno.',
  },
  {
    question: 'Cosa significa il raggio di Schwarzschild?',
    answer: 'Il raggio di Schwarzschild è il raggio dell\'orizzonte degli eventi per un buco nero senza rotazione né carica elettrica. Cresce linearmente con la massa, quindi raddoppiare la massa raddoppia il raggio dell\'orizzonte.',
  },
  {
    question: 'Cos\'è la sfera dei fotoni?',
    answer: 'La sfera dei fotoni è una regione a 1,5 raggi di Schwarzschild dove la luce può orbitare attorno al buco nero in un percorso instabile. Piccole perturbazioni fanno sì che i fotoni fuggano verso l\'esterno o cadano verso l\'interno.',
  },
  {
    question: 'Cos\'è l\'ISCO?',
    answer: 'ISCO significa "Innermost Stable Circular Orbit" (orbita circolare stabile più interna). Per un buco nero senza rotazione si trova a 3 raggi di Schwarzschild, o 6 raggi gravitazionali, e segna l\'ultima orbita circolare stabile per particelle dotate di massa.',
  },
  {
    question: 'Perché la dilatazione temporale aumenta vicino all\'orizzonte?',
    answer: 'Nella geometria di Schwarzschild, gli orologi situati più in profondità nel campo gravitazionale segnano il tempo più lentamente rispetto a quelli di osservatori lontani. Il fattore visualizzato si avvicina a zero man mano che la sonda si avvicina all\'orizzonte degli eventi.',
  },
  {
    question: 'Questo simulatore può modellare un buco nero in rotazione?',
    answer: 'No. Utilizza la soluzione di Schwarzschild, che assume l\'assenza di rotazione e carica elettrica. I buchi neri astrofisici reali spesso ruotano, e la rotazione modifica la dimensione dell\'orizzonte, la posizione dell\'ISCO e il comportamento del disco d\'accrescimento.',
  },
  {
    question: 'Perché i buchi neri supermassicci sono meno "violenti" all\'orizzonte?',
    answer: 'Il gradiente di marea all\'orizzonte diminuisce all\'aumentare della massa del buco nero. Un piccolo buco nero stellare può stirare gli oggetti violentemente vicino all\'orizzonte, mentre un buco nero supermassiccio può avere un gradiente locale molto più dolce a quel confine.',
  },
  {
    question: 'La visualizzazione mostra un\'immagine reale di un buco nero?',
    answer: 'È un diagramma educativo, non un\'osservazione con ray tracing. Gli anelli e il disco sono scalati ai raggi di Schwarzschild semplificati affinché le zone fisiche siano facili da confrontare.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Mappa di campo dell\'orizzonte degli eventi',
    visualCaption: 'La sonda si muove attraverso la geometria di Schwarzschild scalata. Gli anelli guida luminosi marcano l\'orizzonte, la sfera dei fotoni e l\'orbita circolare stabile più interna.',
    controlsTitle: 'Controlli del buco nero',
    eventHorizon: 'Orizzonte degli eventi',
    photonSphere: 'Sfera dei fotoni',
    isco: 'ISCO',
    rsLabel: 'Raggio di Schwarzschild',
    diameterLabel: 'Diametro',
    timeLabel: 'Dilatazione temporale',
    redshiftLabel: 'Redshift',
    statusSafe: 'Fuori dalla regione di orbita stabile',
    statusPhoton: 'All\'interno della zona della sfera dei fotoni',
    statusInside: 'Al limite dell\'orizzonte',
    diameter: 'Diametro dell\'orizzonte',
    lightCrossing: 'Tempo di attraversamento della luce',
    timeDilation: 'Ritmo dell\'orologio vs osservatore lontano',
    redshift: 'Redshift gravitazionale',
    mass: 'Massa del buco nero',
    distance: 'Distanza della sonda',
    speed: 'Velocità orbitale della sonda',
    escapeVelocity: 'Velocità di fuga',
    orbitalPeriod: 'Periodo orbitale della sonda',
    tidalGradient: 'Gradiente di marea',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'masse solari',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 masse solari',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulatore dell\'orizzonte degli eventi di un buco nero per raggio di Schwarzschild, sfera di fotoni e dilatazione temporale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo simulatore dell\'orizzonte degli eventi trasforma i concetti chiave dei buchi neri di Schwarzschild in un modello visivo interattivo.',
    },
    {
      type: 'paragraph',
      html: 'Il simulatore è stato progettato per studenti di astronomia, docenti di fisica e appassionati.',
    },
    {
      type: 'title',
      text: 'Come si calcola il raggio dell\'orizzonte degli eventi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per un buco nero non rotante e privo di carica, il raggio è il <strong>raggio di Schwarzschild</strong>: <strong>Rs = 2GM / c^2</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Poiché il raggio varia linearmente con la massa, 10 masse solari corrispondono a un raggio di circa 29,5 km.',
    },
    {
      type: 'table',
      headers: ['Regione', 'Raggio in raggi di Schwarzschild', 'Significato'],
      rows: [
        ['Orizzonte degli eventi', '1.0 Rs', 'Il limite di non ritorno dove la velocità di fuga eguaglia c.'],
        ['Sfera di fotoni', '1.5 Rs', 'L\'orbita circolare instabile per la luce.'],
        ['ISCO', '3.0 Rs', 'L\'ultima orbita circolare stabile per le particelle dotate di massa.'],
        ['Campo debole', '6 Rs e oltre', 'Gravità ancora forte ma orbite circolari stabili.'],
      ],
    },
    {
      type: 'title',
      text: 'Velocità di fuga e confine causale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La velocità di fuga è la velocità minima necessaria per allontanarsi all\'infinito senza propulsione.',
    },
    {
      type: 'paragraph',
      html: 'L\'indicatore della velocità di fuga offre un\'intuizione utile ma non costituisce una descrizione relativistica completa.',
    },
    {
      type: 'title',
      text: 'Dilatazione temporale e redshift gravitazionale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un orologio fermo vicino a un buco nero scorre più lentamente rispetto a un osservatore distante. Il fattore semplificato è <strong>sqrt(1 - Rs / r)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Il redshift gravitazionale segue la stessa geometria. La luce perde energia risalendo il pozzo gravitazionale.',
    },
    {
      type: 'title',
      text: 'Spiegazione della sfera di fotoni e dell\'ISCO',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La sfera di fotoni a 1.5 Rs è il punto in cui la luce può percorrere un\'orbita circolare instabile.',
    },
    {
      type: 'paragraph',
      html: 'L\'ISCO a 3 Rs rappresenta l\'ultima orbita circolare stabile per la materia.',
    },
    {
      type: 'title',
      text: 'Buchi neri stellari vs supermassicci',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una lezione sorprendente è che i buchi neri supermassicci generano forze di marea meno violente all\'orizzonte.',
    },
    {
      type: 'paragraph',
      html: 'Il simulatore include una lettura del gradiente di marea espressa in gravità terrestri per metro.',
    },
    {
      type: 'title',
      text: 'Limitazioni di questo simulatore',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Nessuna rotazione:</strong> utilizza la geometria di Schwarzschild.',
        '<strong>Fisica di accrescimento semplificata:</strong> disco visivo indicativo.',
        '<strong>Nessun ray tracing:</strong> diagramma educativo.',
        '<strong>Orologio stazionario:</strong> non in caduta libera.',
      ],
    },
    {
      type: 'title',
      text: 'Domande frequenti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Utilizza questo strumento per stimare i parametri di un buco nero.',
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