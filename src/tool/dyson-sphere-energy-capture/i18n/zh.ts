import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = '戴森球能量捕获模拟器';
const description = '评估不同恒星周围的戴森群、环、壳层和静力反射镜收集器设计。计算捕获功率、轨道半径、材料质量以及达到目标卡尔达肖夫等级所需的覆盖率。';

const howTo = [
  {
    name: '选择恒星类型',
    text: '从M矮星、类日恒星、A型星、红巨星或蓝巨星开始。模拟器使用代表性的亮度和质量值来估算收集器半径和轨道周期。',
  },
  {
    name: '选择巨型结构架构',
    text: '比较戴森群、赤道环、刚性壳层或静力反射镜云。每种设计具有不同的捕获效率、材料密度和稳定性假设。',
  },
  {
    name: '设置覆盖率和运行温度',
    text: '增加覆盖率以捕获更多恒星能量，然后调整运行温度以将收集器移近或远离恒星。',
  },
  {
    name: '匹配卡尔达肖夫目标',
    text: '使用目标滑块查看需要包围多少恒星才能达到文明规模的能量目标。',
  },
];

const faq = [
  {
    question: '戴森球和戴森群有什么区别？',
    answer: '刚性戴森球是围绕恒星的一个连续壳层，而戴森群是大量独立轨道收集器的集合。大多数工程讨论倾向于群，因为固体壳层结构不稳定且需要极其大量的材料。',
  },
  {
    question: '模拟器如何选择最佳半径？',
    answer: '它估算在所选恒星光度下，双侧辐射的收集器达到所选运行温度的距离。温度更高的收集器可以在更近的轨道运行，而温度更低的收集器需要更大的半径。',
  },
  {
    question: '这里的卡尔达肖夫评级意味着什么？',
    answer: '卡尔达肖夫值使用对数形式K = (log10(P) - 6) / 10从捕获功率计算，其中P是以瓦特为单位的功率。接近K1的值表示行星规模的能源使用，而K2接近恒星的完整输出。',
  },
  {
    question: '材料质量现实吗？',
    answer: '这是基于收集器面积、面密度和稳定性因子的教育性一阶估算。实际设计需要站位保持、电力传输、采矿损失、冗余、散热和制造基础设施。',
  },
  {
    question: '为什么明亮恒星需要如此巨大的收集器系统？',
    answer: '高光度恒星将安全热半径向外推。这增加了给定覆盖率所需的表面积，因此材料需求的增长速度可能比捕获功率的直观感觉更快。',
  },
  {
    question: '文明能否通过部分覆盖达到卡尔达肖夫II型？',
    answer: '可以，如果主星足够亮且收集器高效。在类日恒星周围，接近II型需要捕获大部分太阳光度，但在更亮的恒星周围，相同的功率目标可以通过更低的覆盖率实现。',
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
    operatingTemp: '运行温度',
    kardashevTarget: '卡尔达肖夫目标',
    kardashevRating: '当前评级',
    capturedPower: '捕获功率',
    optimalRadius: '最佳半径',
    targetCoverage: '目标覆盖率',
    materialMass: '材料质量',
    captureMeter: '目标进度',
    statusReady: '调整系统以估算收集器需求。',
    orbitalPeriod: '轨道周期',
    collectorArea: '收集器面积',
    starMDwarf: 'M矮星',
    starSun: 'G型类日恒星',
    starA: 'A型星',
    starRedGiant: '红巨星',
    starBlueGiant: '蓝巨星',
    structureSwarm: '戴森群',
    structureRing: '赤道环',
    structureShell: '刚性壳层',
    structureStatite: '静力反射镜云',
  },
  seo: [
    {
      type: 'title',
      text: '戴森球能量捕获模拟器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '戴森球不仅仅是壳层内部恒星的科幻形象。它是一个用于拦截恒星光度的巨型结构概念家族：卫星群、赤道环、薄反射镜云以及著名但有问题的刚性壳层。这个模拟器将这些想法转化为数字，让您比较恒星类型、收集器温度、覆盖率和结构设计如何改变能源预算。',
    },
    {
      type: 'paragraph',
      html: '该计算器估算捕获功率、热轨道半径、收集器面积、轨道周期、材料质量以及达到选定卡尔达肖夫等级目标所需的覆盖率。它专为学生、世界构建者、科学传播者以及任何试图理解为什么II型文明如此困难的人而设计：挑战不仅在于能量，还在于面积、热量、采矿、稳定性和轨道后勤。',
    },
    {
      type: 'title',
      text: '戴森半径的估算方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最佳半径根据恒星光度和收集器运行温度计算。靠近明亮恒星的收集器受到强烈的辐射通量，必须高温运行或排出大量热量。向外移动会减少热应力，但所需的收集器面积随距离的平方增长。这种权衡解释了为什么相同的覆盖率在暗淡的M矮星周围很小，而在蓝巨星周围却极其巨大。',
    },
    {
      type: 'title',
      text: '戴森群、环、壳层和静力反射镜云的比较',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>戴森群：</strong>许多独立轨道的收集器。这是最合理的大规模架构，因为它可以逐步建造，不需要刚性恒星壳层。',
        '<strong>赤道环：</strong>一个较窄的收集器带，覆盖率较低。作为第一个巨型结构更容易想象，但如果不扩展为更宽的群，就无法捕获恒星的完整输出。',
        '<strong>刚性壳层：</strong>视觉上具有标志性，但在机械上不利。围绕恒星的壳层存在严重的稳定性和材料问题，因此模拟器为其分配了高质量和低稳定性。',
        '<strong>静力反射镜云：</strong>部分由辐射压力支撑的超轻反射体。它减少了材料需求，但耐热性较低，控制要求严格。',
      ],
    },
    {
      type: 'title',
      text: '卡尔达肖夫等级所需的覆盖率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '卡尔达肖夫等级以对数形式表示文明的能源使用量。在此工具中，捕获的瓦特使用K = (log10(P) - 6) / 10转换为K评级。太阳周围的局部戴森群在达到完全II型状态之前很久就可以超过当前人类能源使用量数个数量级。目标覆盖率结果显示为实现选定目标必须拦截的恒星光度比例。',
    },
    {
      type: 'table',
      headers: ['设计选择', '主要优势', '主要瓶颈'],
      rows: [
        ['戴森群', '可逐步建造，独立轨道', '交通管制和电力传输'],
        ['赤道环', '初始面积小，几何简单', '覆盖率有限'],
        ['刚性壳层', '简单图中最大拦截', '结构不稳定性和巨大质量'],
        ['静力反射镜云', '非常低的面密度', '精确定位和热量限制'],
      ],
    },
    {
      type: 'title',
      text: '材料质量与采矿现实核查',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '材料估算将收集器面积乘以假设的面密度和设计稳定性因子。当数字变得天文数字时，它有意识地以水星质量报告质量，因为许多戴森群讨论设想拆除小行星或小行星以获取原材料。即使是很薄的收集器，当分布在天文单位尺度上时，也会变得非常巨大。',
    },
    {
      type: 'paragraph',
      html: '将结果用作数量级指南，而不是蓝图。真正的巨型结构工程需要辐射损伤模型、热循环、碰撞避免、姿态控制、电力传输、制造良率和长期轨道演化。该模拟器的价值在于它能够立即显示第一个约束条件。',
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
