import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'natural-selection-drift';
const title = '自然选择和遗传漂变模拟器';
const description =
  '实时观察选择压力、突变、漂变和繁殖如何改变等位基因频率。';

const howTo = [
  {
    name: '设置种群规模',
    text: '选择小型或大型种群，观察样本大小如何改变进化稳定性以及随机性占主导的难易程度。',
  },
  {
    name: '调节选择与漂变',
    text: '提高选择压力以青睐某种性状，或提高漂变强度以使随机性在小种群中占主导。',
  },
  {
    name: '观察世代演变',
    text: '运行模拟并比较随时间变化的优势性状、适应度和多样性。',
  },
  {
    name: '解读动态平衡',
    text: '使用最终指标来理解何时适应胜出，何时随机波动占据主导。',
  },
];

const faq = [
  {
    question: '自然选择和遗传漂变有什么区别？',
    answer: '自然选择是非随机过程，能提高生存或繁殖能力的性状会变得更普遍。遗传漂变是等位基因频率的随机变化，在小种群中最显著。',
  },
  {
    question: '为什么小种群变化得更快？',
    answer: '个体数量越少，随机抽样的影响越大。这意味着偶然事件在世代间会更剧烈地改变频率。',
  },
  {
    question: '漂变会压倒选择吗？',
    answer: '是的。如果漂变足够强，特别是在种群规模较小或选择压力较弱时，有益性状也可能因偶然消失。',
  },
  {
    question: '在此模拟器中适应度代表什么？',
    answer: '适应度是一个简化的分数，代表当前种群对所选环境的适应程度。',
  },
  {
    question: '为什么种群规模如此重要？',
    answer: '种群规模决定了随机抽样影响等位基因频率的强度。在大型种群中，选择更容易被观察到。',
  },
  {
    question: '何时应该使用此模拟器？',
    answer: '当您想直观理解进化原理，并区分选择等方向性力量与漂变等随机力量的区别时使用。',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: '种群规模',
    generations: '世代',
    mutationRate: '突变率',
    selectionPressure: '选择压力',
    driftIntensity: '漂变强度',
    alleleCount: '初始等位基因',
    innovationRate: '创新率',
    run: '开始模拟',
    dominantTrait: '优势性状',
    fitness: '最终适应度',
    diversity: '遗传多样性',
    evolutionConsole: '进化控制台',
    populationLabel: '种群',
    aliveLabel: '存活',
    alleleCountsLabel: '等位基因数量',
    alleleDefault: '等位基因 1',
    populationValueLabel: '种群',
  },
  seo: [
    {
      type: 'title',
      text: '用动态种群理解自然选择和遗传漂变',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这个模拟器帮助你把进化概念和实时变化联系起来。观察选择压力、突变率和漂变强度的相互作用。',
    },
    {
      type: 'title',
      text: '控制参数的含义及其重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '自然选择是进化的非随机部分，提高有利性状的频率。遗传漂变是随机部分。',
    },
    {
      type: 'paragraph',
      html: '两种力量始终同时存在并在每一代中相互作用。',
    },
    {
      type: 'title',
      text: '如何解读模拟结果',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '实时指标帮助你在系统发生变化时进行解读。',
    },
    {
      type: 'title',
      text: '为什么种群规模会改变进化轨迹',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>选择压力：</strong> 环境奖励某种性状的强弱程度。',
        '<strong>漂变强度：</strong> 随机抽样噪声改变种群的程度。',
        '<strong>突变率：</strong> 新变异进入系统的频率。',
        '<strong>等位基因数量：</strong> 初始存在的等位基因种类数。',
        '<strong>遗传多样性：</strong> 进化的原始原材料。',
      ],
    },
    {
      type: 'paragraph',
      html: '该工具提供了快速理解进化生物学的实用方法。',
    },
    {
      type: 'title',
      text: '可以尝试的快速示例',
      level: 3,
    },
    {
      type: 'table',
      headers: ['目标', '需要调整的参数', '预期观察现象'],
      rows: [
        ['展示选择胜出', '提高选择压力并保持低漂变', '一种等位基因将逐渐主导。'],
        ['展示随机漂变', '降低种群规模并提高漂变', '等位基因频率呈现不可预测的波动。'],
        ['展示产生新变异', '提高突变率和创新率', '新等位基因将持续出现。'],
      ],
    },
    {
      type: 'paragraph',
      html: '实时视觉呈现使该工具非常适合教学与自主探索。',
    },
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
