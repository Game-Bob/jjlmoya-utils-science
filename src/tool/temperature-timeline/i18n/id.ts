import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kronologi-suhu-planet';
const description = 'Jelajahi sejarah suhu rata-rata Bumi sepanjang era geologi.';
const title = 'Kronologi Suhu Rata Rata Planet';

const howTo = [
  {
    name: 'Pilih era',
    text: 'Klik takik pada penggaris skala.',
  },
  {
    name: 'Periksa suhu',
    text: 'Baca suhu rata-rata global.',
  },
  {
    name: 'Amati planet',
    text: 'Perhatikan kanvas bereaksi terhadap keadaan termal.',
  },
];

const faq = [
  {
    question: 'Apakah Bumi lebih panas di masa lalu daripada sekarang?',
    answer: 'Ya, selama era Mesozoikum suhu rata-rata global jauh lebih hangat.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kronologi Suhu Bumi',
    sub: 'Jelajahi era iklim geologi Bumi',
    ageLabel: 'Usia:',
    tempLabel: 'Suhu Rata-rata:',
    selectPrompt: 'Pilih periode geologi.',
    epoch_archean_name: 'Eon Arkean',
    epoch_archean_age: '4.0 hingga 2.5 miliar tahun lalu',
    epoch_archean_desc: 'Bumi sangat panas dengan atmosfer kaya metana.',
    epoch_proterozoic_name: 'Eon Proterozoikum',
    epoch_proterozoic_age: '2.5 miliar hingga 541 juta tahun lalu',
    epoch_proterozoic_desc: 'Kenaikan oksigen memicu glasiasi Huronian.',
    epoch_paleozoic_name: 'Era Paleozoikum',
    epoch_paleozoic_age: '541 hingga 252 juta tahun lalu',
    epoch_paleozoic_desc: 'Ledakan kehidupan di samudra dan migrasi ke darat.',
    epoch_mesozoic_name: 'Era Mesozoikum',
    epoch_mesozoic_age: '252 hingga 66 juta tahun lalu',
    epoch_mesozoic_desc: 'Zaman dinosaurus dengan kondisi efek rumah kaca.',
    epoch_cenozoic_name: 'Era Kenozoikum',
    epoch_cenozoic_age: '66 juta tahun lalu hingga Sekarang',
    epoch_cenozoic_desc: 'Pendinginan bertahap menuju zaman es Kuarter.',
    epoch_anthropocene_name: 'Epoh Antroposen',
    epoch_anthropocene_age: 'Hari Ini dan Masa Depan',
    epoch_anthropocene_desc: 'Pemanasan cepat akibat emisi gas rumah kaca.',
  },
  seo: [
    {
      type: 'title',
      text: 'KLIMATOLOGI: Sejarah Suhu Geologis Bumi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Iklim Bumi terus berubah sepanjang 4,5 miliar tahun sejarahnya, berosilasi antara kondisi rumah kaca dan zaman es. Pergeseran ini ditentukan oleh siklus karbon dan pergerakan lempeng tektonik.',
    },
    {
      type: 'title',
      text: 'Era Rumah Kaca: Iklim Mesozoikum dan Paleozoikum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Selama Era Mesozoikum, zaman dinosaurus, Bumi mengalami kondisi rumah kaca ekstrem. Suhu rata-rata global mencapai 22 derajat.',
    },
    {
      type: 'title',
      text: 'Zaman Es Global',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebaliknya, Bumi telah beberapa kali memasuki kondisi zaman es yang parah. Selama Eon Proterozoikum, pelapukan kimia menurunkan karbon dioksida, memicu zaman es global.',
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
