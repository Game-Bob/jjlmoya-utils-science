import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmicheskaya-inflyaciya-kalkulyator';
const description = 'Rasschitaite eksponencialnoe rasshirenie rannei Vselennoi v epohu kosmicheskoi inflyacii.';
const title = 'Kalkulyator Kosmicheskoi Inflyacii: Rasshirenie Rannei Vselennoi';

const howTo = [
  {
    name: 'Viberite znacheniya',
    text: 'Peretashite polzunki dlya prosmotra rezultatov.',
  },
  {
    name: 'Sravnite masshtabnye factory',
    text: 'Posmotrite na skolko poryadkov rasshirilos prostranstvo.',
  },
  {
    name: 'Analiziruite iskrglenie',
    text: 'Hols pokazvaet rasshirenie prostranstva.',
  },
];

const faq = [
  {
    question: 'Chto takoe kosmicheskaya inflyaciya?',
    answer: 'Period bystrogo eksponencialnogo rasshireniya prostranstva v rannei Vselennoi.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulyator Kosmicheskoi Inflyacii',
    efoldsLabel: 'Chislo e-folds (N)',
    energyLabel: 'Nachalnaya Shkala Energii (GeV)',
    scaleFactorResult: 'Rost Masshtabnogo Faktora',
    reheatingTempResult: 'Ocenochnaya Temperatura Razogreva',
    chartTitle: 'Iskryglenie Prostranstva-Vremeni',
    presetGuth: 'Standart (Guth)',
    presetChaotic: 'Haoticheskaya',
    presetExtreme: 'Extremalnye Predely',
    efoldsTooltip: 'Tipichnye modeli predskazyvayut ot 50 do 60 e-folds.',
    energyTooltip: 'Shkala GUT sostavlyaet okolo 10^16 GeV.',
    scaleFactorTooltip: 'Predstavlyaet soboi obshii koefficient rasshireniya.',
    reheatingTooltip: 'Temperatura v konce inflyacii.',
    analogyInsuff: 'Umerennaya inflyaciya. Etogo rasshireniya nedostatochno.',
    analogyProton: 'Vselennaya rasshirilas ot razmerov protona do razmerov galaktiki za doli sekundy.',
    analogyObservable: 'Vselennaya rasshirilas ot subatomnogo masshtaba do razmerov, prevyshayushih nablyudaemuyu Vselennuyu, za 10^-32 sekundy.',
  },
  seo: [
    {
      type: 'title',
      text: 'КОСМОЛОГИЯ: Понимание теории космической инфляции',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Космическая инфляция - это краеугольный камень современной космологии. Она описывает краткий, чрезвычайно быстрый период экспоненциального расширения, произошедший примерно через 10^-36 секунд после Большого взрыва.',
    },
    {
      type: 'title',
      text: 'Объяснение проблемы горизонта',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Проблема горизонта возникает из-за однородной температуры реликтового излучения на небе. Без инфляции у удаленных областей не было бы времени для взаимодействия.',
    },
    {
      type: 'title',
      text: 'Проблема плоскостности',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Проблема плоскостности касается пространственной кривизны Вселенной. Инфляция растянула кривизну пространства, сделав его плоским.',
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
