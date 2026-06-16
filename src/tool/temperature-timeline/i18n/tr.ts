import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-sicaklik-kronolojisi';
const description = 'Jeolojik donemler boyunca Dunyanin ortalama sicaklik gecmisini kesfedin.';
const title = 'Gezegen Ortalama Sicaklik Kronolojisi';

const howTo = [
  {
    name: 'Bir donem secin',
    text: 'Olcek cetvelindeki bir celtige tiklayin.',
  },
  {
    name: 'Sicakligi kontrol edin',
    text: 'Kuresel ortalama sicakligi okuyun.',
  },
  {
    name: 'Gezegeni gozlemleyin',
    text: 'Tuvalin termal duruma nasil tepki verdigini izleyin.',
  },
];

const faq = [
  {
    question: 'Dunya gecmiste bugunden daha mi sicakti?',
    answer: 'Evet, Mezozoyik gibi donemlerde ortalama sicakliklar 10 ila 15 derece daha sicakti.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Dunyanin Sicaklik Kronolojisi',
    sub: 'Dunyanin jeolojik iklim donemlerini kesfedin',
    ageLabel: 'Yas:',
    tempLabel: 'Ortalama Sicaklik:',
    selectPrompt: 'Jeolojik bir donem secin.',
    epoch_archean_name: 'Arkeyan Devir',
    epoch_archean_age: '4,0 ila 2,5 milyar yil once',
    epoch_archean_desc: 'Metan ve CO2 zengini asiri sicak dunya.',
    epoch_proterozoic_name: 'Proterozoyik Devir',
    epoch_proterozoic_age: '2,5 milyar ila 541 milyon yil once',
    epoch_proterozoic_desc: 'Oksijen artisi Huron buzul cagina yol acti.',
    epoch_paleozoic_name: 'Paleozoyik Zaman',
    epoch_paleozoic_age: '541 ila 252 milyon yil once',
    epoch_paleozoic_desc: 'Denizlerde yasam patlamasi ve karaya gecis.',
    epoch_mesozoic_name: 'Mezozoyik Zaman',
    epoch_mesozoic_age: '252 ila 66 milyon yil once',
    epoch_mesozoic_desc: 'Sera kosullarinin hakim oldugu dinozorlar cagi.',
    epoch_cenozoic_name: 'Senozoyik Zaman',
    epoch_cenozoic_age: '66 milyon yil once ila Gunumuz',
    epoch_cenozoic_desc: 'Kuvaterner buzul caglarina giden soguma.',
    epoch_anthropocene_name: 'Antroposen Donem',
    epoch_anthropocene_age: 'Gunumuz ve Gelecek',
    epoch_anthropocene_desc: 'Sera gazi salinimi kaynakli hizli isinma.',
  },
  seo: [
    {
      type: 'title',
      text: 'İKLİMBİLİM: Dünya\'nın Jeolojik Sıcaklık Geçmişi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dunyanin iklimi, 4,5 milyar yillik tarihi boyunca sera ve buzul caglar arasinda gidip gelerek surekli degismistir. Bu degisimler karbon donguleri ve levha tektonigi ile belirlenir.',
    },
    {
      type: 'title',
      text: 'Sera Donemleri: Mezozoyik ve Paleozoyik İklimleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dinozorlar donemi olan Mezozoyik sirasinda Dunya uc sera kosullari yasadi. Kuresel ortalama sicakliklar 22 dereceye ulasti.',
    },
    {
      type: 'title',
      text: 'Buzul Cag Donemleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aksine, Dunya bircok kez siddetli buzul cag donemlerine girdi. Proterozoyik devirde, kimyasal asinma karbondioksiti azaltarak kuresel bir buzul cagina yol acti.',
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
