const slug = 'atraktor-lorenz';
const title = 'Simulator Kekacauan Atraktor Lorenz Efek Kupu kupu dalam 3D';
const description = 'Jelajahi teori kekacauan dengan simulasi atraktor Lorenz 3D interaktif ini. Visualisasikan efek kupu-kupu.';

const howTo = [
  {
    "name": "Putar kanvas",
    "text": "Klik dan seret pada viewport 3D untuk memutar atraktor."
  },
  {
    "name": "Sesuaikan slider",
    "text": "Ubah parameter Sigma, Rho, dan Beta untuk mengamati transisi kekacauan."
  },
  {
    "name": "Amati divergensi",
    "text": "Perhatikan bagaimana jarak antara kedua lintasan tumbuh secara eksponensial."
  },
  {
    "name": "Jeda dan atur ulang",
    "text": "Gunakan kontrol untuk menjeda simulasi atau mengatur ulang parameter."
  }
];

const faq = [
  {
    "question": "Apa itu Atraktor Lorenz?",
    "answer": "Atraktor Lorenz adalah serangkaian solusi kacau dari sistem Lorenz."
  },
  {
    "question": "Apa itu Efek Kupu-kupu?",
    "answer": "Ketergantungan sensitif pada kondisi awal dalam sistem non-linear."
  },
  {
    "question": "Apa arti parameter tersebut?",
    "answer": "Sigma mewakili angka Prandtl, Rho angka Rayleigh, dan Beta rasio aspek geometri."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Disalin",
  "noHistory": "Tidak ada riwayat",
  "load": "Muat",
  "delete": "Hapus",
  "title": "Atraktor Lorenz",
  "subTitle": "Kekacauan Deterministik",
  "parameterControls": "Parameter Sistem",
  "simulationSpeed": "Kecepatan (dt)",
  "initialPerturbation": "Gangguan Awal (dx)",
  "trajectories": "Lintasan",
  "distance": "Jarak Divergensi",
  "exponentialGrowth": "Divergensi Eksponensial",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinat",
  "divergenceExplanation": "Grafik divergensi menunjukkan jarak Euclidean antara kedua lintasan dari waktu ke waktu."
},
  seo: [
  {
    "type": "title",
    "text": "Kekacauan Deterministik: Memahami Persamaan Lorenz",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Sistem Lorenz adalah formulasi penting dalam dinamika non-linear dan teori kekacauan."
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
