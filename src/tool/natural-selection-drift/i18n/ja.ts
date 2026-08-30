import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'natural-selection-drift';
const title = '自然選択と遺伝的浮動のシミュレーター';
const description =
  '選択圧、突然変異、浮動、繁殖が対立遺伝子頻度をどう変えるかをリアルタイムで確認できます。';

const howTo = [
  {
    name: '個体数を設定する',
    text: '小規模または大規模な個体群を選択し、サンプルサイズが進化の安定性にどう影響するかを確認します。',
  },
  {
    name: '選択と浮動を調整する',
    text: '選択圧を高めて特定の形質を優遇するか、浮动強度を上げて偶然の要素を大きくします。',
  },
  {
    name: '世代の経過を観察する',
    text: 'シミュレーションを実行し、優勢形質、適応度、多様性の変化を時間経過とともに比較します。',
  },
  {
    name: 'バランスを解釈する',
    text: '最終メトリクスを使用して、適応が勝つタイミングとランダムな変動が支配するタイミングを理解します。',
  },
];

const faq = [
  {
    question: '自然選択と遺伝的浮動の違いは何ですか？',
    answer: '自然選択は生存や繁殖に有利な形質が広まる非ランダムな me 過程です。遺伝的浮動は対立遺伝子頻度のランダムな変化であり、小規模な個体群で最も強く働きます。',
  },
  {
    question: 'なぜ小規模な個体群は変化が速いのですか？',
    answer: '個体数が少ないほどランダムサンプリングの影響が大きくなるため、偶然の出来事が世代間の頻度をより劇的に変化させます。',
  },
  {
    question: '浮動が選択を打ち消すことはありますか？',
    answer: 'はい。浮動が十分に強い場合、個体数が少ないと有利な形質であっても偶然消失することがあります。',
  },
  {
    question: 'このシミュレーターでの適応度の意味は何ですか？',
    answer: '適応度は、現在の個体群が選択された環境にどれだけ適合しているかを示す簡略化されたスコアです。',
  },
  {
    question: 'なぜ個体群のサイズが重要なのですか？',
    answer: '個体群のサイズは、ランダムサンプリングが対立遺伝子頻度に与える影響の強さを決定します。大規模個体群では選択の効果が見えやすくなります。',
  },
  {
    question: 'どのような時にこのシミュレーターを使うべきですか？',
    answer: '進化の直感的な理解を得たい時や、選択のような方向性を持つ力と浮動のような確率的な力の違いを視覚的に確かめたい時に役立ちます。',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: '個体数',
    generations: '世代',
    mutationRate: '突然変異率',
    selectionPressure: '選択圧',
    driftIntensity: '浮動強度',
    alleleCount: '初期対立遺伝子',
    innovationRate: '新規変異率',
    run: 'シミュレーション開始',
    dominantTrait: '優勢形質',
    fitness: '最終適応度',
    diversity: '遺伝的多様性',
    evolutionConsole: '進化コンソール',
    populationLabel: '個体群',
    aliveLabel: '生存数',
    alleleCountsLabel: '対立遺伝子数',
    alleleDefault: '対立遺伝子1',
    populationValueLabel: '個体群',
  },
  seo: [
    {
      type: 'title',
      text: '自然選択と遺伝的浮動を生きた個体群で理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールは、進化の仕組みを視覚的に理解するための実践的なシミュレーターです。選択圧、変異率、浮動の相互作用をリアルタイムで観察できます。',
    },
    {
      type: 'title',
      text: 'コントロールの意味と重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '自然選択は進化の非ランダムな要素であり、生存率を高める形質を増やします。遺伝的浮動はランダムな要素です。',
    },
    {
      type: 'paragraph',
      html: '両方の力は常に同時に存在し、世代ごとに影響を与え合います。',
    },
    {
      type: 'title',
      text: 'シミュレーション結果の読み方',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'リアルタイムの指標により、個体群の動的な変化を解釈できます。',
    },
    {
      type: 'title',
      text: '個体群サイズが結果を変える理由',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>選択圧:</strong> 環境が特定の形質をどれだけ強く優遇するか。',
        '<strong>浮動強度:</strong> 偶然のサンプリング誤差がどれだけ個体群を変えるか。',
        '<strong>突然変異率:</strong> 新しい変異がシステムに導入される頻度。',
        '<strong>初期対立遺伝子数:</strong> 開始時に存在する対立遺伝子の種類数。',
        '<strong>遺伝的多様性:</strong> 進化の原料となる遺伝的バリエーション。',
      ],
    },
    {
      type: 'paragraph',
      html: '抽象的な概念を直感的に捉えるための効果的な学習ツールです。',
    },
    {
      type: 'title',
      text: '試してみるべきクイック例',
      level: 3,
    },
    {
      type: 'table',
      headers: ['目的', '変更する操作', '観察できる現象'],
      rows: [
        ['選択の勝利を見る', '選択圧を上げ浮動を低く保つ', '1つの対立遺伝子が時間をかけて優勢になります。'],
        ['ランダムな浮動を見る', '個体数を減らし浮動を上げる', '対立遺伝子頻度が予測不能に変動します。'],
        ['新しい変異の登場を見る', '変異率と新規率を上げる', '新しい対立遺伝子が絶えず出現します。'],
      ],
    },
    {
      type: 'paragraph',
      html: 'リアルタイムの視覚化により、進化のトレーディングオフを容易に体験できます。',
    },
    { type: 'paragraph', html: 'この説明ではモデルの前提と、入力値が結果を変える仕組みを整理します。変数を一つずつ変更して複数回比較すると、差の原因を確認しやすくなります。表示は学習用の近似であり、実際の系には追加の変数、測定誤差、境界条件があります。数値は規模や傾向を理解するために使い、実務や研究では一次データ、単位、専門資料も確認してください。設定を記録すると計算を再現し、モデルの限界も検討できます。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
