import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-inflasi-kosmik';
const description = 'Hitung ekspansi eksponensial alam semesta awal selama zaman inflasi kosmik.';
const title = 'Kalkulator Inflasi Kosmik: Ekspansi Alam Semesta Awal';

const howTo = [
  {
    name: 'Pilih nilai',
    text: 'Seret slider untuk melihat hasil.',
  },
  {
    name: 'Bandingkan faktor skala',
    text: 'Lihat berapa banyak orde magnitudo ruang telah mengembang.',
  },
  {
    name: 'Analisis distorsi dinamis',
    text: 'Kanvas menunjukkan ekspansi ruang.',
  },
];

const faq = [
  {
    question: 'Apa itu inflasi kosmik?',
    answer: 'Periode ekspansi eksponensial yang cepat dari alam semesta awal.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator Inflasi Kosmik',
    efoldsLabel: 'Jumlah e-folds (N)',
    energyLabel: 'Skala Energi Awal (GeV)',
    scaleFactorResult: 'Pertumbuhan Faktor Skala',
    reheatingTempResult: 'Perkiraan Suhu Pemanasan Ulang',
    chartTitle: 'Distorsi Jaringan Ruang-Waktu',
    presetGuth: 'Standar (Guth)',
    presetChaotic: 'Kaois',
    presetExtreme: 'Batas Ekstrim',
    efoldsTooltip: 'Model khas memprediksi antara 50 dan 60 e-folds.',
    energyTooltip: 'Skala GUT adalah sekitar 10^16 GeV.',
    scaleFactorTooltip: 'Mempresentasikan faktor ekspansi total.',
    reheatingTooltip: 'Suhu pada akhir inflasi.',
    analogyInsuff: 'Inflasi moderat. Ekspansi ini tidak mencukupi.',
    analogyProton: 'Alam semesta mengembang dari ukuran proton ke ukuran galaksi dalam waktu singkat.',
    analogyObservable: 'Alam semesta mengembang dari skala subatomik ke ukuran yang lebih besar dari alam semesta terobservasi dalam 10^-32 detik.',
  },
  seo: [
    {
      type: 'title',
      text: 'KOSMOLOGI: Memahami Teori Inflasi Kosmik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inflasi kosmik adalah pilar kosmologi modern. Teori ini menjelaskan periode ekspansi eksponensial yang sangat cepat sekitar 10^-36 detik setelah Big Bang.',
    },
    {
      type: 'title',
      text: 'Masalah Horison Dijelaskan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Masalah horison muncul dari keseragaman suhu Radiasi Latar Belakang Kosmik di langit. Tanpa inflasi, wilayah yang jauh tidak memiliki cukup waktu untuk berinteraksi.',
    },
    {
      type: 'title',
      text: 'Masalah Kerataan Ruang',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Masalah kerataan berkaitan dengan kelengkungan spasial alam semesta. Inflasi meregangkan kelengkungan ruang sehingga tampak sangat rata.',
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
