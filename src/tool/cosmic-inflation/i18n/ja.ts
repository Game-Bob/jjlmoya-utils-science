import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cosmic-inflation-calculator';
const description = '宇宙のインフレーション期における初期宇宙の指数関数的膨張を計算します。';
const title = '宇宙インフレーション計算機：初期宇宙の膨張';

const howTo = [
  {
    name: '値を選択する',
    text: 'スライダーをドラッグして結果を確認します。',
  },
  {
    name: 'スケール因子を比較する',
    text: '宇宙が何桁膨張したかを確認します。',
  },
  {
    name: '動的な歪みを分析する',
    text: 'キャンバスは空間の膨張を示します。',
  },
];

const faq = [
  {
    question: '宇宙インフレーションとは何ですか？',
    answer: '初期宇宙における空間の急速な指数関数的膨張の期間。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '宇宙インフレーション計算機',
    efoldsLabel: 'e-fold数（N）',
    energyLabel: '初期エネルギー・スケール（GeV）',
    scaleFactorResult: 'スケール因子の成長',
    reheatingTempResult: '推定再加熱温度',
    chartTitle: '時空の歪み',
    presetGuth: '標準（グース）',
    presetChaotic: 'カオス的',
    presetExtreme: '極限制限',
    efoldsTooltip: '典型的なモデルでは50から60のe-foldが予測されます。',
    energyTooltip: 'GUTスケールは約10^16 GeVです。',
    scaleFactorTooltip: '総膨張率を表します。',
    reheatingTooltip: 'インフレーション終了時の温度。',
    analogyInsuff: '中程度のインフレーション。この膨張は不十分です。',
    analogyProton: '宇宙は一瞬のうちにプロトンの大きさから銀河の大きさまで膨張しました。',
    analogyObservable: '宇宙は10^-32秒で亜原子スケールから観測可能な宇宙より大きく膨張しました。',
  },
  seo: [
    {
      type: 'title',
      text: '宇宙論：宇宙インフレーション理論の理解',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '宇宙インフレーションは現代宇宙論の基礎です。ビッグバンから約10^-36秒後に発生した、非常に急速で指数関数的な膨張期間を説明します。',
    },
    {
      type: 'title',
      text: '地平線問題の解説',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '地平線問題は、宇宙マイクロ波背景放射の温度が一様であることから生じます。インフレーションがなければ、遠方の領域が熱平衡に達する時間はありませんでした。',
    },
    {
      type: 'title',
      text: '平坦性問題と空間幾何学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '平坦性問題は宇宙の空間曲率に関するものです。インフレーションは空間 of 曲率を劇的に引き伸ばし、平坦にしました。',
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
