import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'black-hole-event-horizon-simulator';
const title = 'ブラックホール事象の地平面シミュレーター';
const description = 'ブラックホールの事象の地平面を、質量、軌道距離、時間の遅れ、光子球、脱出速度、シュワルツシルト半径のインタラクティブな計算で探索しましょう。';

const howTo = [
  {
    name: 'ブラックホールの質量を選ぶ',
    text: '質量スライダーを動かして、恒星質量ブラックホールから超大質量ブラックホールまで変化させ、シュワルツシルト半径がリアルタイムで変化する様子を観察しましょう。',
  },
  {
    name: '探査機を地平面の近くに移動する',
    text: 'シュワルツシルト半径単位で距離を設定し、安全な外部軌道、光子球領域、事象の地平面の端を比較しましょう。',
  },
  {
    name: '相対論的効果を調べる',
    text: '脱出速度、重力による時間の遅れ、赤方偏移、公転周期を読み取って、地平面の近くで日常的な直感がなぜ通用しなくなるのかを理解しましょう。',
  },
  {
    name: '名前付き半径を比較する',
    text: '事象の地平面、光子球、ISCOのガイドリングを使って、非回転ブラックホールの周りの異なる境界を理解しましょう。',
  },
];

const faq = [
  {
    question: 'ブラックホールの事象の地平面とは何ですか？',
    answer: '事象の地平面とは、脱出速度が光速に達する境界です。物体がこれを越えると、光速以下のいかなる信号も外部の宇宙に戻ることができません。',
  },
  {
    question: 'シュワルツシルト半径とは何を意味しますか？',
    answer: 'シュワルツシルト半径は、非回転・無電荷のブラックホールにおける事象の地平面の半径です。質量に比例して大きくなるため、質量が2倍になれば地平面の半径も2倍になります。',
  },
  {
    question: '光子球とは何ですか？',
    answer: '光子球はシュワルツシルト半径の1.5倍の位置にある領域で、光がブラックホールの周りを不安定な軌道で周回できます。わずかな摂動で光子は外側へ脱出するか、内側へ落下します。',
  },
  {
    question: 'ISCOとは何ですか？',
    answer: 'ISCOは最も内側の安定した円軌道を意味します。非回転ブラックホールの場合、シュワルツシルト半径の3倍（重力半径の6倍）に位置し、質量を持つ粒子がとりうる最後の安定した円軌道を示します。',
  },
  {
    question: '地平面の近くで時間の遅れが大きくなるのはなぜですか？',
    answer: 'シュワルツシルト時空では、重力場のより深くにある時計は遠方の観測者に比べて遅く刻まれます。表示される係数は、探査機が事象の地平面に近づくにつれてゼロに近づきます。',
  },
  {
    question: 'このシミュレーターは回転するブラックホールをモデル化できますか？',
    answer: 'いいえ。このシミュレーターはシュワルツシルト解を使用しており、スピンと電荷がないことを前提としています。実際の天体物理学上のブラックホールは多くの場合回転しており、スピンは地平面の大きさ、ISCOの位置、円盤の振る舞いを変化させます。',
  },
  {
    question: '超大質量ブラックホールの地平面での潮汐力が弱いのはなぜですか？',
    answer: '地平面での潮汐勾配はブラックホールの質量が大きくなるほど減少します。小型の恒星質量ブラックホールは地平面近くで物体を激しく引き伸ばすことができますが、超大質量ブラックホールではその境界での局所的な勾配がより穏やかになります。',
  },
  {
    question: 'この可視化は実際のブラックホール画像を示していますか？',
    answer: 'これは教育用の図であり、レイトレーシングによる観測ではありません。リングと円盤は簡略化されたシュワルツシルト半径に合わせてスケーリングされており、物理的な領域を比較しやすくしています。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: '事象の地平面フィールドマップ',
    visualCaption: '探査機はスケーリングされたシュワルツシルト時空を移動します。明るいガイドリングは地平面、光子球、最も内側の安定した円軌道を示しています。',
    controlsTitle: 'ブラックホール制御',
    eventHorizon: '事象の地平面',
    photonSphere: '光子球',
    isco: 'ISCO',
    rsLabel: 'シュワルツシルト半径',
    diameterLabel: '直径',
    timeLabel: '時間の遅れ',
    redshiftLabel: '赤方偏移',
    statusSafe: '安定軌道領域の外側',
    statusPhoton: '光子球領域の内側',
    statusInside: '地平面の限界',
    diameter: '地平面の直径',
    lightCrossing: '光の横断時間',
    timeDilation: '遠方観測者との時計の比率',
    redshift: '重力赤方偏移',
    mass: 'ブラックホール質量',
    distance: '探査機の距離',
    speed: '探査機の軌道速度',
    escapeVelocity: '脱出速度',
    orbitalPeriod: '探査機の公転周期',
    tidalGradient: '潮汐勾配',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: '太陽質量',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0倍',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10太陽質量',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'シュワルツシルト半径、光子球、時間の引き伸ばしを計算するブラックホール事象の地平面シミュレーター',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このブラックホール事象の地平面シミュレーターは、シュワルツシルト・ブラックホールの核心的アイデアを対話型の視覚モデルに変換します。',
    },
    {
      type: 'paragraph',
      html: 'このシミュレーターは、天文を学ぶ学生、物理の指導者、科学の探求者のために設計されています。',
    },
    {
      type: 'title',
      text: '事象の地平面半径の計算方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '回転せず電荷を持たないブラックホールの場合、地平面半径は<strong>シュワルツシルト半径</strong>となります。計算式は <strong>Rs = 2GM / c^2</strong> です。',
    },
    {
      type: 'paragraph',
      html: 'シュワルツシルト半径は質量に比例するため、10太陽質量のブラックホールの半径は約29.5kmになります。',
    },
    {
      type: 'table',
      headers: ['領域', 'シュワルツシルト半径単位の半径', '物理的意味'],
      rows: [
        ['事象の地平面', '1.0 Rs', '脱出速度が光速に達する一方通行の境界線。'],
        ['光子球', '1.5 Rs', '光が周回できる不安定な円軌道。'],
        ['ISCO', '3.0 Rs', '有質量粒子が存在できる最内室安定円軌道。'],
        ['弱場領域', '6 Rs 以上', '重力は依然として強いが、円軌道運動が容易に維持できる。'],
      ],
    },
    {
      type: 'title',
      text: '脱出速度と地平面が因果的境界である理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '脱出速度とは、追加の推進力なしに無限遠まで到達するために必要な最小速度です。',
    },
    {
      type: 'paragraph',
      html: '脱出速度の表示は有用な直感を提供しますが、完全な相対論的記述ではありません。',
    },
    {
      type: 'title',
      text: 'ブラックホール近傍の時間の引き伸ばしと重力赤方偏移',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'シュワルツシルト・ブラックホールの外側の固定半径にある時計は、遠方の観察者と比べて遅く進みます。簡略化された係数は <strong>sqrt(1 - Rs / r)</strong> です。',
    },
    {
      type: 'paragraph',
      html: '重力赤方偏移も同じ幾何学に従います。重力井戸から脱出する光はエネルギーを失います。',
    },
    {
      type: 'title',
      text: '光子球とISCOの解説',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '1.5 Rs に位置する光子球は、理論上光が円軌道を描くことができる領域です。',
    },
    {
      type: 'paragraph',
      html: '3 Rs の ISCO は、物質が安定して周回できる最も内側の領域です。',
    },
    {
      type: 'title',
      text: '恒星質量ブラックホールと超大質量ブラックホールの比較',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '驚くべき事実は、巨大なブラックホールほど地平面での潮汐力が穏やかになり得る点です。',
    },
    {
      type: 'paragraph',
      html: 'シミュレーターには、メートルあたりの地球重力単位で表された潮汐勾配が表示されます。',
    },
    {
      type: 'title',
      text: '本シミュレーターの制限事項',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>自転なし:</strong> シュワルツシルト幾何学を使用。',
        '<strong>降着物理の簡易化:</strong> ディスク表示は目安。',
        '<strong>レイトレーシングなし:</strong> 概念的図解。',
        '<strong>静止観測者時計:</strong> 自由落下座標とは異なります。',
      ],
    },
    {
      type: 'title',
      text: 'よくある質問',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ブラックホールの各種パラメータの試算に本ツールをご活用ください。',
    },
    { type: 'paragraph', html: 'この節ではシミュレーションで使う幾何を詳しく説明します。シュワルツシルト半径は質量に比例して大きくなり、理想化した解では事象の地平面に対応します。光子球はその外側にある不安定な円軌道で、わずかな摂動でも光の軌道は大きく変化します。表示される時間の遅れは比較する観測者の位置に依存し、局所時計の固有時と同じ意味ではありません。質量と距離を別々に変えると、効果の尺度を比較できます。このモデルは回転、電荷、周囲の物質、降着円盤、磁場、放射、具体的な天体の潮汐力を扱いません。一般相対論の概念を学び、数学的な定義と天文学的観測を区別するための教育用表示です。実際の天体を分析するには質量、回転、環境、軌道のデータと公開された方法が必要であり、ここでの表示は運用上の予測や接近手順ではありません。条件を一つずつ変え、どの仮定が結果に影響するかを記録してください。' },
    { type: 'paragraph', html: 'さらに、観測者の位置を変えたときに時間表示がどのように変わるかを比較できます。これは座標の選び方と局所的な時計の測定を区別するための学習例です。現実の天体では回転や周囲の物質が光の経路と観測信号に影響するため、単純な球対称モデルだけで観測結果を説明することはできません。各入力を記録し、同じ条件で再計算してください。' },
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
