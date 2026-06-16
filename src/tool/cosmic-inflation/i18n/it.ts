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
    question: 'Cos e l inflazione cosmica?',
    answer: 'Un periodo di rapida espansione esponenziale dello spazio nell universo primordiale.',
  },
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
      type: 'title',
      text: 'COSMOLOGIA: Comprendere la teoria dell inflazione cosmica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L inflazione cosmica e un caposaldo della cosmologia moderna. Descrive un breve periodo di espansione esponenziale estremamente rapido avvenuto circa 10^-36 secondi dopo il Big Bang.',
    },
    {
      type: 'title',
      text: 'Il problema dell orizzonte spiegato',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il problema dell orizzonte deriva dalla temperatura uniforme della radiazione cosmica di fondo. Senza l inflazione, le regioni distanti non avrebbero avuto il tempo di interagire.',
    },
    {
      type: 'title',
      text: 'Il problema della piattezza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il problema della piattezza riguarda la curvatura dello spazio. L inflazione ha stirato lo spazio rendendolo piatto.',
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
