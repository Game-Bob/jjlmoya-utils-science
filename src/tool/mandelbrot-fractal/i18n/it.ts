import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulatore-frattale-mandelbrot';
const title = 'Simulatore di Frattale di Mandelbrot ed Esploratore di Autosimilarità';
const description = 'Esplora l\'insieme di Mandelbrot, ingrandisci i confini frattali autosimilari e confronta la profondità di iterazione, il contrasto cromatico e le coordinate del piano complesso.';

const howTo = [
  {
    name: 'Scegli una regione dell\'insieme di Mandelbrot',
    text: 'Inizia dall\'insieme completo o salta direttamente a una regione ad alto dettaglio, come la valle del cavalluccio marino o un minibrot a spirale.',
  },
  {
    name: 'Ingrandisci cliccando sull\'immagine',
    text: 'Clicca un punto qualsiasi sulla tela per ri-centrare il piano complesso e ingrandire il frattale attorno a quella coordinata.',
  },
  {
    name: 'Regola la profondità di iterazione e il contrasto cromatico',
    text: 'Aumenta il budget di iterazioni per rivelare una struttura di confine più fine, poi regola contrasto e tavolozza per rendere le bande di tempo di fuga più facili da leggere.',
  },
];

const faq = [
  {
    question: 'Cosa mostra il simulatore dell\'insieme di Mandelbrot?',
    answer: 'Mostra quali numeri complessi c mantengono limitata la ricorrenza z(n+1) = z(n)^2 + c partendo da z = 0. I punti che non sfuggono mai entro il budget di iterazione selezionato vengono colorati come membri dell\'insieme, mentre i punti esterni vengono colorati in base alla velocità con cui la loro orbita fuoriesce.',
  },
  {
    question: 'Perché il bordo di Mandelbrot contiene così tanti dettagli?',
    answer: 'Il bordo separa le orbite stabili da quelle in fuga, e minuscole variazioni di coordinate vicino a quel bordo possono cambiare completamente il comportamento a lungo termine. Questa sensibilità crea bulbi annidati, spirali, filamenti e copie in miniatura che appaiono a molti livelli di ingrandimento.',
  },
  {
    question: 'L\'insieme di Mandelbrot è veramente autosimilare?',
    answer: 'Non è perfettamente autosimilare nello stesso senso stretto di un triangolo di Sierpinski, ma è riccamente quasi-autosimilare. Piccole copie dell\'intero insieme appaiono in tutto il piano complesso, spesso distorte e collegate da elaborate strutture ramificate.',
  },
  {
    question: 'Cosa controlla il numero di iterazioni?',
    answer: 'Il numero di iterazioni controlla per quanto tempo il simulatore testa ogni punto prima di decidere che probabilmente appartiene all\'insieme. Valori più alti rivelano filamenti più profondi e minibrot più nitidi, ma richiedono più calcolo per pixel.',
  },
  {
    question: 'Perché i colori cambiano all\'esterno della regione nera?',
    answer: 'I colori esterni si basano sul tempo di fuga: i punti che fuggono rapidamente ricevono colori diversi dai punti che restano vicini all\'insieme per molte iterazioni. La colorazione uniforme riduce le bande nette e facilita l\'ispezione della geometria delle orbite vicine.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulatore Frattale di Mandelbrot',
    canvasLabel: 'Tela interattiva dell\'insieme di Mandelbrot',
    presetsLabel: 'Preimpostazioni delle regioni di Mandelbrot',
    presetFull: 'Insieme Completo',
    presetSeahorse: 'Valle del Cavalluccio Marino',
    presetSpiral: 'Minibrot a Spirale',
    centerPoint: 'Centro',
    magnification: 'Ingrandimento',
    visibleWindow: 'Finestra visibile',
    renderBudget: 'Iterazioni',
    iterationsLabel: 'Profondità di iterazione',
    contrastLabel: 'Contrasto di fuga',
    colorLabel: 'Campo colore',
    paletteEmber: 'Bande di brace',
    paletteLagoon: 'Plasma laguna',
    paletteInk: 'Spettro d\'inchiostro',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore dell\'Insieme di Mandelbrot per Frattali, Tempo di Fuga e Autosimilarità',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo calcolatore di frattali di Mandelbrot genera il classico insieme del piano complesso definito dall\'iterazione <strong>z(n+1) = z(n)^2 + c</strong>. È progettato per l\'esplorazione: ogni clic ricalibra il centro, ogni zoom rivela un intorno matematico più piccolo.',
    },
    {
      type: 'paragraph',
      html: 'Regola il numero di iterazioni per distinguere meglio il bordo e scegli una tavolozza per leggere la velocità di fuga. Le forme che emergono non sono fotografie: dipendono dalla regola iterativa, dalla precisione numerica e dall\'area del piano complesso visualizzata.',
    },
    {
      type: 'title',
      text: 'Come interpretare l\'immagine di Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La forma centrale scura identifica i punti le cui orbite rimangono limitate entro il budget di iterazioni. L\'esterno colorato è una mappa del tempo di fuga.',
    },
    {
      type: 'table',
      headers: ['Controllo', 'Cosa modifica', 'Quando aumentarlo'],
      rows: [
        ['<strong>Profondità di iterazione</strong>', 'Quanti passaggi di ricorsione vengono testati per ogni pixel.', 'Aumentare dopo aver ingrandito filamenti sottili o coppie in miniatura.'],
        ['<strong>Contrasto di fuga</strong>', 'Quanto nettamente i valori di fuga sfumati vengono suddivisi in bande.', 'Aumentare se l\'immagine appare piatta.'],
        ['<strong>Tavolozza</strong>', 'La mappatura dei colori applicata ai punti esterni.', 'Cambiare tavolozza per evidenziare dettagli nascosti.'],
      ],
    },
    {
      type: 'title',
      text: 'Autosimilarità e Minibrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una delle caratteristiche più affascinanti dell\'insieme di Mandelbrot è la quasi-autosimilarità. Ingrandendo le strutture a spirale si incontrano continuamente repliche in miniatura dell\'insieme principale, chiamate minibrot.',
    },
    {
      type: 'title',
      text: 'Perché le iterazioni elevate contano ad alti ingrandimenti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ad alti livelli di ingrandimento, molti punti di confine impiegano centinaia di iterazioni per rivelare se fuggono o meno. Un limite di iterazioni troppo basso sfoca la geometria.',
    },
    {
      type: 'title',
      text: 'Significato matematico delle coordinate complesse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La lettura delle coordinate mostra il centro della vista come un numero complesso c = a + bi. L\'asse orizzontale rappresenta la parte reale e quello verticale la parte immaginaria.',
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
