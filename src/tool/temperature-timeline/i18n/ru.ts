import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatura-hronologiya';
const description = 'Izuchite istoriyu srednei temperatury Zemli na protyajenii geologicheskih epoh.';
const title = 'Hronologiya Srednei Temperatury Planety';

const howTo = [
  {
    name: 'Viberite epohu',
    text: 'Kliknite na delenie na shkale.',
  },
  {
    name: 'Proverite temperaturu',
    text: 'Schitaite globalnuyu srednyuyu temperaturu.',
  },
  {
    name: 'Nablyudaite za planetoi',
    text: 'Smotrite, kak hols reagiruet na teplovoe sostoyanie.',
  },
];

const faq = [
  {
    question: 'Byla li Zemlya ranshe teplee chem seichas?',
    answer: 'Da, v epohu mezozoya srednie temperatury byli na 10-15 gradusov vyshe.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Hronologiya Temperatury Zemli',
    sub: 'Izuchite geologicheskie klimaticheskie epohi Zemli',
    ageLabel: 'Vozrast:',
    tempLabel: 'Srednyaya Temperatura:',
    selectPrompt: 'Выберите геологический период.',
    epoch_archean_name: 'Arheiskii eon',
    epoch_archean_age: '4,0-2,5 mlrd let nazad',
    epoch_archean_desc: 'Ekstremalno goryachaya Zemlya s atmosferoi metana.',
    epoch_proterozoic_name: 'Proterozoiskii eon',
    epoch_proterozoic_age: '2,5 mlrd - 541 mln let nazad',
    epoch_proterozoic_desc: 'Rost kisloroda vyzval guronskoe oledenenie.',
    epoch_paleozoic_name: 'Paleozoiskaya era',
    epoch_paleozoic_age: '541-252 mln let nazad',
    epoch_paleozoic_desc: 'Vzryv jizni v okeanah i vyhod na sushu.',
    epoch_mesozoic_name: 'Mezozoiskaya era',
    epoch_mesozoic_age: '252-66 mln let nazad',
    epoch_mesozoic_desc: 'Era dinozavrov i parnikovogo klimata.',
    epoch_cenozoic_name: 'Kainozoiskaya era',
    epoch_cenozoic_age: '66 mln let nazad - n. v.',
    epoch_cenozoic_desc: 'Postepennoe ohlajdenie i lednikovye periody.',
    epoch_anthropocene_name: 'Antropocenovaya epoha',
    epoch_anthropocene_age: 'Nastoyashee i budushee',
    epoch_anthropocene_desc: 'Bystroe antropogennoe poteplenie.',
  },
  seo: [
    {
      type: 'title',
      text: 'КЛИМАТОЛОГИЯ: Геологическая история температуры Земли',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Климат Земли постоянно менялся на протяжении 4,5 миллиардов лет ее истории, колеблясь между ледниковыми периодами и парником. Эти изменения определяются углеродными циклами и тектоникой плит.',
    },
    {
      type: 'title',
      text: 'Эпохи парника: климат мезозоя и палеозоя',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'В мезозойскую эру, эпоху динозавров, Земля переживала экстремальные парниковые условия. Средние глобальные температуры достигали 22 градусов.',
    },
    {
      type: 'title',
      text: 'Ледниковые периоды',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Напротив, Земля несколько раз входила в холодные ледниковые периоды. В протерозойский эон химическое выветривание снизило уровень CO2, вызвав глобальное оледенение.',
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
