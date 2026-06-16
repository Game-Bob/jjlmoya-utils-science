import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kozmik-enflasyon-hesaplayici';
const description = 'Kozmik enflasyon donemi sirasinda erken evrenin ustel genislemesini hesaplayin.';
const title = 'Kozmik Enflasyon Hesaplayici: Erken Evren Genislemesi';

const howTo = [
  {
    name: 'Degerleri secin',
    text: 'Sonuclari gormek icin kaydiricilari surukleyin.',
  },
  {
    name: 'Olcek faktorlerini karsilastirin',
    text: 'Uzayin kac kat buyudugunu gorun.',
  },
  {
    name: 'Dinamik bukulmeyi analiz edin',
    text: 'Tuval uzayin genislemesini gosterir.',
  },
];

const faq = [
  {
    question: 'Kozmik enflasyon nedir?',
    answer: 'Erken evrende uzayin hizli ustel genisleme donemi.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kozmik Enflasyon Hesaplayici',
    efoldsLabel: 'e-folds Sayisi (N)',
    energyLabel: 'Baslangic Enerji Olcegi (GeV)',
    scaleFactorResult: 'Olcek Faktoru Büyümesi',
    reheatingTempResult: 'Tahmini Yeniden Isinma Sicakligi',
    chartTitle: 'Uzay-Zaman Dokusu Bukulmesi',
    presetGuth: 'Standart (Guth)',
    presetChaotic: 'Kaotik',
    presetExtreme: 'Uch Limitler',
    efoldsTooltip: 'Tipik modeller 50 ila 60 e-folds ongormektedir.',
    energyTooltip: 'GUT olcegi yaklasik 10^16 GeV civarindadir.',
    scaleFactorTooltip: 'Toplam genisleme faktorunu temsil eder.',
    reheatingTooltip: 'Enflasyon sonundaki sicaklik.',
    analogyInsuff: 'Orta duzeyde enflasyon. Bu genisleme yetersizdir.',
    analogyProton: 'Evren, bir saniyenin cok kucuk bir diliminde bir proton boyutundan bir galaksi boyutuna genisledi.',
    analogyObservable: 'Evren, 10^-32 saniyede atom alti bir olcekten gozlenebilir evrenden daha buyuk bir boyuta genisledi.',
  },
  seo: [
    {
      type: 'title',
      text: 'KOZMOLOJİ: Kozmik Enflasyon Teorisini Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kozmik enflasyon modern kozmolojinin temel taslarindan biridir. Big Bang\'den yaklasik 10^-36 saniye sonra meydana gelen kisa, son derece hizli bir ustel genisleme donemini tanimlar.',
    },
    {
      type: 'title',
      text: 'Ufuk Problemi Aciklamasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ufuk problemi, kozmik mikrodalga arka plan isimasinin gokyuzundeki homojen sicakligindan kaynaklanir. Enflasyon olmasaydi, uzak bolgelerin termal dengeye ulasacak zamani olmazdi.',
    },
    {
      type: 'title',
      text: 'Düzlük Problemi ve Uzay Geometrisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Duzluk problemi evrenin uzaysal egriligi ile ilgilidir. Enflasyon, uzayin egriligini o kadar dramatik sekilde esnetti ki gozlenebilir evren duz gorunur.',
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
