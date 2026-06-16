const slug = 'lorenz-attractor';
const title = 'ローレンツ・アトラクター・カオス・シミュレーター：3Dバタフライ・エフェクト';
const description = 'このインタラクティブな3Dローレンツ・アトラクター・シミュレーションでカオス理論を探索してください。';

const howTo = [
  {
    "name": "キャンバスを回転する",
    "text": "3Dビューポート上をドラッグして、アトラクターを回転させます。"
  },
  {
    "name": "スライダーを調整する",
    "text": "Sigma、Rho、Betaパラメーターを調整してカオスを観察します。"
  },
  {
    "name": "発散を観察する",
    "text": "2つの軌道間の距離が指数関数的に増大する様子を観察します。"
  },
  {
    "name": "一時停止とリセット",
    "text": "コントロールボタンを使用して、シミュレーションの停止や初期化を行います。"
  }
];

const faq = [
  {
    "question": "ローレンツ・アトラクターとは何ですか？",
    "answer": "ローレンツ・アトラクターは、ローレンツ方程式系のカオス的な解の集合です。"
  },
  {
    "question": "バタフライ・エフェクトとは何ですか？",
    "answer": "初期条件に対する鋭敏な依存性のことで、わずかな差が将来的に決定的な違いを生みます。"
  },
  {
    "question": "各パラメーターは何を意味しますか？",
    "answer": "Sigmaはプラントル数、Rhoはレイリー数、Betaはアスペクト比に関連します。"
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "コピーされました",
  "noHistory": "履歴なし",
  "load": "読み込み",
  "delete": "削除",
  "title": "ローレンツ・アトラクター",
  "subTitle": "決定論的カオス",
  "parameterControls": "システムパラメーター",
  "simulationSpeed": "速度 (dt)",
  "initialPerturbation": "初期微小差 (dx)",
  "trajectories": "軌道",
  "distance": "発散距離",
  "exponentialGrowth": "指数関数的発散",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "座標",
  "divergenceExplanation": "発散グラフは、2つの軌道間のユークリッド距離の経時変化を示しています。"
},
  seo: [
  {
    "type": "title",
    "text": "決定論的カオス：ローレンツ方程式の理解",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "ローレンツ方程式系は、非線形力学とカオス理論における歴史的な金字塔です。"
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
