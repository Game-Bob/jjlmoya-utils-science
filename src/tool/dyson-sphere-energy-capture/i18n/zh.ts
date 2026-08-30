import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = '戴森球能量捕获模拟器';
const description = '估算针对不同恒星的戴森群、环形、刚性壳和静态镜云等巨型结构设计。计算捕获功率、热轨道半径、材料质量以及达到卡尔达肖夫目标所需的覆盖率。';

const howTo = [
  {
    name: '选择恒星类型',
    text: '从M型矮星、类太阳G型星、A型星、红巨星或蓝巨星开始。模拟器使用代表性的光度和质量值来估算收集器半径和轨道周期。',
  },
  {
    name: '选择巨型结构架构',
    text: '比较戴森群、赤道环、刚性壳或静态镜云。每种设计都具有不同的捕获效率、材料密度和稳定性假设。',
  },
  {
    name: '设置覆盖率和工作温度',
    text: '增加覆盖率以捕获更多恒星功率，然后调整工作温度以使收集器更靠近或更远离恒星。',
  },
  {
    name: '匹配卡尔达肖夫目标',
    text: '使用目标滑块可以查看必须包围恒星的程度，以实现文明规模的能量目标。',
  },
];

const faq = [
  {
    question: '戴森球和戴森群有什么区别？',
    answer: '刚性戴森球是围绕恒星的连续外壳，而戴森群是大量独立运行的轨道收集器的集合。大多数工程讨论都倾向于戴森群，因为坚固的外壳在结构上不稳定且极耗材料。',
  },
  {
    question: '模拟器如何选择最佳半径？',
    answer: '它估算在所选恒星光度下，从两侧辐射的收集器达到所选工作温度的距离。较热的收集器可以在更近的轨道上运行，而较冷的收集器需要更大的半径。',
  },
  {
    question: '这里的卡尔达肖夫评级是什么意思？',
    answer: '卡尔达肖夫值使用常用对数形式 K = (log10(P) - 6) / 10 从捕获的功率计算得出，其中 P 是以瓦特为单位的功率。接近 K1 的值代表行星规模的能源使用，而 K2 则接近完整的恒星输出。',
  },
  {
    question: '材料质量精确吗？',
    answer: '这是基于收集器面积、面密度和稳定性因子的一阶教育性估算。实际设计需要轨道维持、无线能量传输、采矿损耗、冗余、散热和制造基础设施。',
  },
  {
    question: '为什么高光度恒星需要如此巨大的收集器系统？',
    answer: '高光度恒星将安全热半径向外推。这增加了给定覆盖率所需的表面积，因此材料需求增长速度比捕获的功率感觉直观得多。',
  },
  {
    question: '文明能否在部分覆盖的情况下达到卡尔达肖夫 II 型？',
    answer: '可以，只要宿主恒星足够亮且收集器效率高。在类太阳恒星周围，达到接近 II 型需要捕获太阳光度的大部分，但在更亮的恒星周围，相同的功率目标可能需要较低的比例覆盖率。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: '戴森收集器可视化',
    starType: '恒星类型',
    structureType: '结构',
    coverage: '收集器覆盖率',
    operatingTemp: '工作温度',
    kardashevTarget: '卡尔达肖夫目标',
    kardashevRating: '当前评级',
    capturedPower: '捕获功率',
    optimalRadius: '最优半径',
    targetCoverage: '目标覆盖率',
    materialMass: '材料质量',
    captureMeter: '目标捕获进度',
    statusReady: '调整系统以估算收集器需求。',
    statusUnderbuilt: '覆盖率低于所选目标。添加收集器或选择更亮的恒星。',
    statusBalanced: '覆盖率和恒星输出接近所选的文明规模目标。',
    statusExtreme: '此配置超出目标。它捕获巨大功率，但材料需求增长迅速。',
    orbitalPeriod: '轨道周期',
    collectorArea: '收集器面积',
    mercuryMasses: '{value} 水星质量',
    kilograms: '{value} 千克',
    daysUnit: '{value} 天',
    starMDwarf: 'M型矮星',
    starSun: '类太阳G型星',
    starA: 'A型星',
    starRedGiant: '红巨星',
    starBlueGiant: '蓝巨星',
    structureSwarm: '戴森群',
    structureRing: '赤道环',
    structureShell: '刚性壳',
    structureStatite: '静态镜云',
  },
  seo: [
    {
      type: 'title',
      text: '戴森球能量捕获模拟器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '戴森球不仅仅是外壳内恒星的科幻形象。它是一系列拦截恒星光度的巨型结构概念：卫星群、赤道环、薄镜云以及著名但充满问题的刚性壳。该模拟器将这些想法转化为数字，以便您可以比较恒星类型、收集器温度、覆盖率和结构设计如何改变能量预算。',
    },
    {
      type: 'paragraph',
      html: '计算器估算捕获功率、热轨道半径、收集器面积、轨道周期、材料质量以及所选卡尔达肖夫规模目标所需的覆盖率。它专为学生、世界构建者、科学传播者以及任何试图理解为什么 II 型文明具有挑战性的人而设计。',
    },
    {
      type: 'title',
      text: '如何估算戴森半径',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最佳半径由恒星光度和收集器工作温度计算得出。靠近明亮恒星的收集器接收强烈通量，必须高温运行或散热。向外移动可减少热应力，但所需的收集器面积随距离的平方而增长。',
    },
    {
      type: 'title',
      text: '戴森群、环形、刚性壳和静态镜云比较',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>戴森群：</strong>许多独立运行的轨道收集器。这是最可行的巨型结构架构，因为它可以逐步建造。',
        '<strong>赤道环：</strong>较窄的收集器带，覆盖效率较低。作为第一个巨型结构更容易想象。',
        '<strong>刚性壳：</strong>视觉上具有标志性但在机械上不利。恒星周围的外壳具有严重的稳定性和材料问题。',
        '<strong>静态镜云：</strong>由辐射压部分保持的超轻反射器。它减少了质量需求，但热承受力较低。',
      ],
    },
    {
      type: 'title',
      text: '卡尔达肖夫规模所需的覆盖率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '卡尔达肖夫规模以对数形式表达文明能源使用。在该工具中，捕获的瓦特转换为 K 评级。太阳周围的部分戴森群在达到完整 II 型状态之前很久就可以超越人类目前的能源使用量。',
    },
    {
      type: 'table',
      headers: ['设计选择', '主要优势', '主要瓶颈'],
      rows: [
        ['戴森群', '可以分阶段建造，具有独立轨道', '交通控制和无线能量传输'],
        ['赤道环', '较低的初始面积和更简单的几何形状', '有限的覆盖率'],
        ['刚性壳', '简单图表中的最大拦截', '结构不稳定性和巨大质量'],
        ['静态镜云', '极低的面密度', '精确的轨道维持和温度限制'],
      ],
    },
    {
      type: 'title',
      text: '材料质量与采矿现实核查',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '材料估算将收集器面积乘以假设的面密度和设计稳定性因子。当数字变得天文学级别时，它有意以水星质量报告质量。',
    },
    {
      type: 'paragraph',
      html: '将结果作为数量级参考而非精确蓝图。',
    },
    { type: 'paragraph', html: '本说明整理模型的假设，并解释输入参数如何改变结果。每次只改变一个变量，再比较多次运行，便于判断差异的原因。图示是用于学习的近似模型，真实系统还会受到更多变量、测量误差和边界条件影响。请用结果理解数量级、提出问题并比较情景；如果用于实际判断或研究，还应核对原始数据、单位和专业资料。记录参数可以复现计算，也能更清楚地讨论模型的限制。' },
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
