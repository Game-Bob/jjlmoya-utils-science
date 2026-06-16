const slug = 'lorenz-atractor';
const title = 'Lorenz Çekeri Kaos Simülatörü: 3D Kelebek Etkisi';
const description = 'Bu etkilesimli 3D Lorenz cekeri simulasyonu ile kaos teorisini kesfedin. Kelebek etkisini gorsellestirin.';

const howTo = [
  {
    "name": "Gorunumu dondurun",
    "text": "Cekeri dondurmek icin 3D ekran uzerinde tiklayip surukleyin."
  },
  {
    "name": "Surguleri ayarlayin",
    "text": "Kaos davranisini gozlemlemek icin Sigma, Rho ve Beta parametrelerini degistirin."
  },
  {
    "name": "Sapmayi izleyin",
    "text": "Iki yorunge arasindaki mesafenin ustel olarak buyumesini izleyin."
  },
  {
    "name": "Duraklat ve sifirla",
    "text": "Simulasyonu duraklatmak veya varsayilanlara sifirlamak icin kontrolleri kullanin."
  }
];

const faq = [
  {
    "question": "Lorenz Çekeri nedir?",
    "answer": "Lorenz cekeri, Lorenz denklem sisteminin kaotik cozumler kumesidir."
  },
  {
    "question": "Kelebek Etkisi nedir?",
    "answer": "Dogrusal olmayan bir sistemde baslangic kosullarina hassas baglilik durumudur."
  },
  {
    "question": "Parametreler neyi temsil eder?",
    "answer": "Sigma Prandtl sayisini, Rho Rayleigh sayisini, Beta ise geometrik en-boy oranini temsil eder."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopyalandi",
  "noHistory": "Gecmis yok",
  "load": "Yukle",
  "delete": "Sil",
  "title": "Lorenz Çekeri",
  "subTitle": "Belirlenimci Kaos",
  "parameterControls": "Sistem Parametreleri",
  "simulationSpeed": "Simulasyon Hizi (dt)",
  "initialPerturbation": "Baslangic Sapmasi (dx)",
  "trajectories": "Yorungeler",
  "distance": "Sapma Mesafesi",
  "exponentialGrowth": "Ustel Sapma",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinatlar",
  "divergenceExplanation": "Sapma grafigi, iki yorunge arasindaki Oklid mesafesinin zaman icindeki degisimini gosterir."
},
  seo: [
  {
    "type": "title",
    "text": "Belirlenimci Kaos: Lorenz Denklemlerini Anlamak",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Lorenz sistemi, dogrusal olmayan dinamik ve kaos teorisinde temel bir formülasyondur."
  }
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
