import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = 'ダイソン球エネルギー捕獲シミュレータ';
const description = 'ダイソン群、赤道リング、剛体シェル、ステイタイト鏡雲などの巨大大規模構造の設計を比較評価します。捕獲電力、熱軌道半径、必要資材質量、カルダシェフ目標達成率を算出します。';

const howTo = [
  {
    name: '恒星タイプを選択',
    text: 'M型矮星、太陽型G型星、A型星、赤色巨星、青色巨星から選択します。シミュレータは代表的な光度と質量を用いて軌道半径と周期を算出します。',
  },
  {
    name: 'メガストラクチャ建築を選択',
    text: 'ダイソン群、赤道リング、剛体シェル、ステイタイト鏡雲を比較します。それぞれ捕獲効率や必要資材密度が異なります。',
  },
  {
    name: 'カバー率と動作温度を設定',
    text: 'カバー率を上げて捕獲電力を増やし、動作温度を調整してコレクターを恒星に近づけたり遠ざけたりします。',
  },
  {
    name: 'カルダシェフ目標を設定',
    text: '目標スライダーを操作して、文明スケールのエネルギー目標達成に必要な恒星光度のカバー割合を確認します。',
  },
];

const faq = [
  {
    question: 'ダイソン球とダイソン群の違いは何ですか？',
    answer: '剛体ダイソン球は恒星を完全に覆う一体系のシェルですが、ダイソン群は周回する独立した多数のコレクター集合体です。工学的には剛体シェルは構造的に不安定で莫大な資材を要するため、ダイソン群が選ばれます。',
  },
  {
    question: '最適軌道半径はどのように計算されますか？',
    answer: '両面から放熱するコレクターが、指定された恒星光度の下で設定動作温度に達する距離を推定します。高温動作可能なコレクターほど内側の軌道をとることができます。',
  },
  {
    question: 'ここでのカルダシェフ評価とは何を意味しますか？',
    answer: '捕獲ワット数から公式 K = (log10(P) - 6) / 10 を用いて対数スケールで算出した評価値です。K1付近は惑星規模、K2は恒星出力をほぼ全量利用する段階を示します。',
  },
  {
    question: '計算される資材質量は現実的ですか？',
    answer: 'これは面積と面積密度に基づく一次の教育的試算です。実際の設計では軌道維持、送電システム、製造インフラ等の追加質量が必要になります。',
  },
  {
    question: 'なぜ高光度な恒星ほど巨大なコレクターが必要なのですか？',
    answer: '光度が高い恒星は熱的に安全な半径が外側に押し出されます。距離の二乗に比例して必要な表面積が増大するため、資材需要が急増します。',
  },
  {
    question: '部分的なカバー率でカルダシェフII型に達することは可能ですか？',
    answer: 'はい。主星が十分に明るく高効率なコレクターであれば、一部のカバー率だけでもII型のエネルギー目標に達することが可能です。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'ダイソンコレクター可視化',
    starType: '恒星の種類',
    structureType: '構造',
    coverage: 'コレクターカバレッジ',
    operatingTemp: '動作温度',
    kardashevTarget: 'カルダシェフ目標',
    kardashevRating: '現在の評価',
    capturedPower: '捕捉電力',
    optimalRadius: '最適半径',
    targetCoverage: '目標カバレッジ',
    materialMass: '材料質量',
    captureMeter: '目標捕捉進捗',
    statusReady: 'システムを調整してコレクター需要を推定してください。',
    statusUnderbuilt: 'カバレッジが選択した目標を下回っています。',
    statusBalanced: 'カバレッジは選択した目標に近い状態です。',
    statusExtreme: 'この構成は目標を大幅に上回っています。',
    orbitalPeriod: '軌道周期',
    collectorArea: 'コレクター面積',
    mercuryMasses: '{value} 水星質量',
    kilograms: '{value} kg',
    daysUnit: '{value} 日',
    starMDwarf: 'M型矮星',
    starSun: '太陽型G型星',
    starA: 'A型星',
    starRedGiant: '赤色巨星',
    starBlueGiant: '青色巨星',
    structureSwarm: 'ダイソン群',
    structureRing: '赤道リング',
    structureShell: '剛体シェル',
    structureStatite: 'ステイタイトミラー雲',
  },
  seo: [
    {
      type: 'title',
      text: 'ダイソン球エネルギー捕獲シミュレータ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ダイソン球は単なるSFの妄想ではありません。衛星群、赤道リング、ステイタイト鏡雲など、恒星光度を捉える様々なメガストラクチャ概念の総称です。',
    },
    {
      type: 'paragraph',
      html: '本ツールは捕獲電力、熱軌道半径、必要面積、軌道周期、資材質量、カルダシェフ目標数値を数値化して提示します。',
    },
    {
      type: 'title',
      text: 'ダイソン半径の推定方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最適半径は恒星光度とコレクター動作温度から計算されます。恒星に近いほど強力な熱放射を受けるため放熱能力が求められます。',
    },
    {
      type: 'title',
      text: '各構造タイプの比較',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>ダイソン群:</strong> 独立周回する多数のコレクター。段階的建造が可能な最も現実的なモデル。',
        '<strong>赤道リング:</strong> 赤道上に配置する帯状構造。初期構築が容易。',
        '<strong>剛体シェル:</strong> 全全方位を覆う球体。構造的応力と力学的安定性に課題が存在。',
        '<strong>ステイタイト鏡雲:</strong> 輻射圧で静止維持する超軽量ミラー構造。',
      ],
    },
    {
      type: 'title',
      text: 'カルダシェフ・スケールとカバー率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'カルダシェフ指標は文明の利用エネルギーを対数表示したものです。太陽の数％を覆うだけでも人類の現消費量を何桁も上回ります。',
    },
    {
      type: 'table',
      headers: ['構造タイプ', '主な利点', '主なボトルネック'],
      rows: [
        ['ダイソン群', '段階的構築が可能', '軌道管理と送電ビーム制御'],
        ['赤道リング', '初期面積が少ない', 'カバーエリアの限定'],
        ['剛体シェル', '理論上の最高捕獲効率', '構造的不安定性と膨大な必要質量'],
        ['ステイタイト鏡雲', '面密度が極めて低い', '精密な姿勢制御と熱限界'],
      ],
    },
    {
      type: 'title',
      text: '必要資材質量と資源採掘の試算',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '必要資材は水星質量単位で表示されます。多くの巨大大規模構造計画では水星等の小惑星を解体して資材化することが想定されます。',
    },
    {
      type: 'paragraph',
      html: '物理的スケール感を捉える教育的シミュレーションとしてご活用ください。',
    },
    {
      type: 'paragraph',
      html: '恒星の光度、覆う割合、動作温度を順に変えて、捕獲電力と軌道半径の関係を比較できます。結果は理想化した熱平衡モデルによる試算であり、建設、材料、送電、軌道維持などの工学的課題を含む実現可能性の判定ではありません。複数の構造を同じ条件で比べると、効率と必要資材のトレードオフも確認できます。入力値を一つずつ変えると、どの条件が結果に影響するかを学びやすくなります。構造ごとの違いを同じ条件で確認し、数値の意味と限界を考察してください。',
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
      description,
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
