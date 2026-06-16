import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-pianeta';
const description = 'Esplora la storia della temperatura media della Terra attraverso le ere geologiche.';
const title = 'Cronologia della Temperatura Media del Pianeta';

const howTo = [
  {
    name: 'Seleziona un era',
    text: 'Fai clic su una tacca sul righello di scala.',
  },
  {
    name: 'Controlla la temperatura',
    text: 'Leggi la temperatura media globale.',
  },
  {
    name: 'Osserva il pianeta',
    text: 'Guarda la tela reagire allo stato termico.',
  },
];

const faq = [
  {
    question: 'La Terra era piu calda in passato rispetto ad oggi?',
    answer: 'Si, in ere come il Mesozoico le temperature medie erano superiori di 10-15 gradi.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia della Temperatura Terrestre',
    sub: 'Esplora le ere climatiche geologiche della Terra',
    ageLabel: 'Eta:',
    tempLabel: 'Temperatura Media:',
    selectPrompt: 'Seleziona un periodo geologico.',
    epoch_archean_name: 'Eone Archeano',
    epoch_archean_age: 'Da 4.0 a 2.5 miliardi di anni fa',
    epoch_archean_desc: 'Terra caldissima con atmosfera ricca di metano.',
    epoch_proterozoic_name: 'Eone Proterozoico',
    epoch_proterozoic_age: 'Da 2.5 miliardi a 541 milioni di anni fa',
    epoch_proterozoic_desc: 'L\'aumento di ossigeno causa la glaciazione uroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: 'Da 541 a 252 milioni di anni fa',
    epoch_paleozoic_desc: 'Esplosione della vita marina e migrazione sulla terra.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: 'Da 252 a 66 milioni di anni fa',
    epoch_mesozoic_desc: 'L\'era dei dinosauri con clima caldo e senza ghiacci.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: 'Da 66 milioni di anni fa a oggi',
    epoch_cenozoic_desc: 'Raffreddamento graduale culminato nelle glaciazioni.',
    epoch_anthropocene_name: 'Epoca dell\'Antropocene',
    epoch_anthropocene_age: 'Presente e futuro',
    epoch_anthropocene_desc: 'Riscaldamento rapido dovuto a emissioni umane.',
  },
  seo: [
    {
      type: 'title',
      text: 'CLIMATOLOGIA: Storia geologica della temperatura della Terra',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il clima della Terra e cambiato costantemente nel corso della sua storia di 4,5 miliardi di anni, oscillando tra periodi glaciali e di serra. Questi cambiamenti sono determinati dal ciclo del carbonio.',
    },
    {
      type: 'title',
      text: 'Le ere di serra: climi del Mesozoico e del Paleozoico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Durante l era mesozoica, l epoca dei dinosauri, la Terra ha vissuto condizioni di serra estreme. Le temperature globali medie hanno raggiunto i 22 gradi.',
    },
    {
      type: 'title',
      text: 'Gli stati glaciali',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Al contrario, la Terra e entrata piu volte in periodi di freddo glaciale. Durante l eone proterozoico, il disfacimento chimico ha ridotto la CO2, provocando una glaciazione globale.',
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
