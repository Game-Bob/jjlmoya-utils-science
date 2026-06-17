import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatrice-frattale-mandelbrot';
const title = 'Calcolatrice Frattale di Mandelbrot e Esploratore di Autosimilarita';
const description = 'Esplora l insieme di Mandelbrot, ingrandisci i confini frattali autosimilari e confronta la profondita di iterazione, il contrasto cromatico e le coordinate del piano complesso.';

const howTo = [
  {
    name: 'Scegli una regione dell insieme di Mandelbrot',
    text: 'Inizia dall insieme completo o salta direttamente a una regione ad alto dettaglio come la valle del cavalluccio marino o un minibrot a spirale.',
  },
  {
    name: 'Ingrandisci cliccando sull immagine',
    text: 'Clicca un punto qualsiasi sulla tela per ri-centrare il piano complesso e ingrandire il frattale attorno a quella coordinata.',
  },
  {
    name: 'Regola la profondita di iterazione e il contrasto cromatico',
    text: 'Aumenta il budget di iterazioni per rivelare una struttura di confine piu fine, poi regola contrasto e tavolozza per rendere le bande di tempo di fuga piu facili da leggere.',
  },
];

const faq = [
  {
    question: 'Cosa mostra la calcolatrice dell insieme di Mandelbrot?',
    answer: 'Mostra quali numeri complessi c mantengono limitata la ricorrenza z(n+1) = z(n)^2 + c partendo da z = 0. I punti che non sfuggono mai entro il budget di iterazione selezionato vengono colorati come membri dell insieme, mentre i punti esterni vengono colorati in base alla velocita con cui la loro orbita fuoriesce.',
  },
  {
    question: 'Perche il bordo di Mandelbrot contiene cosi tanti dettagli?',
    answer: 'Il bordo separa le orbite stabili da quelle in fuga, e minuscole variazioni di coordinate vicino a quel bordo possono cambiare completamente il comportamento a lungo termine. Questa sensibilita crea bulbi annidati, spirali, filamenti e copie in miniatura che appaiono a molti livelli di ingrandimento.',
  },
  {
    question: 'L insieme di Mandelbrot e veramente autosimilare?',
    answer: 'Non e perfettamente autosimilare nello stesso senso stretto di un triangolo di Sierpinski, ma e riccamente quasi-autosimilare. Piccole copie dell intero insieme appaiono in tutto il piano, spesso distorte e collegate da elaborate strutture ramificate.',
  },
  {
    question: 'Cosa controlla il numero di iterazioni?',
    answer: 'Il numero di iterazioni controlla per quanto tempo la calcolatrice testa ogni punto prima di decidere che probabilmente appartiene all insieme. Valori piu alti rivelano filamenti piu profondi e minibrot piu nitidi, ma richiedono piu calcolo per pixel.',
  },
  {
    question: 'Perche i colori cambiano all esterno della regione nera?',
    answer: 'I colori esterni si basano sul tempo di fuga: i punti che fuggono rapidamente ricevono colori diversi dai punti che restano vicini all insieme per molte iterazioni. La colorazione uniforme riduce le bande nette e facilita l ispezione della geometria delle orbite vicine.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calcolatrice Frattale di Mandelbrot',
    canvasLabel: 'Tela interattiva dell insieme di Mandelbrot',
    presetsLabel: 'Preimpostazioni delle regioni di Mandelbrot',
    presetFull: 'Insieme Completo',
    presetSeahorse: 'Valle del Cavalluccio Marino',
    presetSpiral: 'Minibrot a Spirale',
    centerPoint: 'Centro',
    magnification: 'Ingrandimento',
    visibleWindow: 'Finestra visibile',
    renderBudget: 'Iterazioni',
    iterationsLabel: 'Profondita di iterazione',
    contrastLabel: 'Contrasto di fuga',
    colorLabel: 'Campo colore',
    paletteEmber: 'Bande di brace',
    paletteLagoon: 'Plasma laguna',
    paletteInk: 'Spettro d inchiostro',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatrice dell Insieme di Mandelbrot per Frattali, Tempo di Fuga e Autosimilarita',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questa calcolatrice frattale di Mandelbrot renderizza il classico insieme del piano complesso definito dall iterazione <strong>z(n+1) = z(n)^2 + c</strong>. E progettata per l esplorazione piuttosto che per la visione passiva: ogni clic ri-centra il piano, ogni ingrandimento espone un intorno matematico piu piccolo, e il cursore di iterazione permette di decidere quanto a fondo la calcolatrice deve testare il bordo prima di colorare un punto come stabile o in fuga.',
    },
    {
      type: 'title',
      text: 'Come leggere l immagine di Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La forma centrale scura segna i punti le cui orbite rimangono limitate entro il budget di iterazione corrente. L esterno colorato e una mappa del tempo di fuga. Un punto colorato vicino all insieme puo sopravvivere centinaia di iterazioni prima che la sua magnitudine superi il raggio di fuga, mentre un punto lontano fugge quasi immediatamente. La geometria scientificamente piu interessante non si trova solitamente all interno della forma piena, ma lungo il bordo dove i comportamenti limitati e illimitati si intrecciano.',
    },
    {
      type: 'table',
      headers: ['Controllo', 'Cosa modifica', 'Quando aumentarlo'],
      rows: [
        ['<strong>Profondita di iterazione</strong>', 'Quanti passi di ricorrenza vengono testati per ogni pixel.', 'Usa valori piu alti dopo aver ingrandito filamenti sottili o copie in miniatura.'],
        ['<strong>Contrasto di fuga</strong>', 'Quanto fortemente i valori di fuga uniformi vengono separati in bande visibili.', 'Alzalo quando l immagine appare piatta; abbassalo quando i colori sono troppo marcati.'],
        ['<strong>Tavolozza</strong>', 'La mappatura dei colori applicata ai punti esterni.', 'Cambia tavolozza per rivelare strutture che potrebbero essere nascoste da un campo colore.'],
      ],
    },
    {
      type: 'title',
      text: 'Autosimilarita e Minibrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uno dei motivi per cui l insieme di Mandelbrot e cosi famoso e la sua quasi-autosimilarita. Mentre si ingrandiscono antenne, spirali e valli, si incontrano ripetutamente piccole isole simili a Mandelbrot spesso chiamate minibrot. Queste copie non sono meramente decorative. La loro disposizione riflette la dinamica delle mappe quadratiche, inclusi bulbi periodici, pattern di biforcazione e regioni dove le orbite rimangono intrappolate per lunghi periodi prima di fuggire.',
    },
    {
      type: 'title',
      text: 'Perche iterazioni piu elevate contano nello zoom profondo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nella vista dell insieme completo, un limite di iterazione modesto fornisce un immagine riconoscibile. A ingrandimenti piu profondi, tuttavia, molti punti di confine impiegano molto piu tempo per rivelare se fuggono. Se il limite di iterazione e troppo basso, le strutture fini possono apparire falsamente solide o fangose. Aumentare il conteggio delle iterazioni migliora la classificazione del bordo e consente alla calcolatrice di risolvere viticci stretti, bracci a spirale e bulbi satelliti con maggiore sicurezza.',
    },
    {
      type: 'title',
      text: 'Significato matematico delle coordinate complesse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La lettura delle coordinate mostra il centro corrente dell area visibile come numero complesso c = a + bi. L asse orizzontale e la parte reale e l asse verticale e la parte immaginaria. Cliccare sulla tela sceglie una nuova coordinata complessa, poi ingrandisce la finestra visibile attorno ad essa. Questo rende lo strumento utile per imparare come le regioni visive del frattale corrispondono a posizioni precise nel piano complesso.',
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
