import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'radioactive-decay-half-life-calculator';
const title = '放射性衰变半衰期计算器';
const description = '使用真实同位素、半衰期公式、随机原子场、剩余数量和相对活度来模拟放射性衰变。';

const howTo = [
  { name: '选择同位素', text: '从碳-14、碘-131、铀-238、锝-99m 或氡-222 开始。每个预设都会载入真实的半衰期和常见科学用途。' },
  { name: '设置样本和时间', text: '调整显示的原子数量，并推进时间，观察剩余比例如何遵循半衰期的指数规律。' },
  { name: '比较精确计算和原子随机性', text: '把确定性结果作为期望值，再观察原子场，理解小样本为什么会围绕理论曲线波动。' },
  { name: '解读活度', text: '活度与未衰变原子核数量按相同比例下降，因此仪表显示相对于初始样本还剩多少辐射率。' },
];

const faq = [
  { question: '什么是半衰期?', answer: '半衰期是样本中平均一半不稳定原子核发生衰变所需的时间。一个半衰期后剩 50%，两个后剩 25%，三个后剩 12.5%。' },
  { question: '为什么原子场不总是等于精确百分比?', answer: '放射性衰变是概率过程。公式给出大样本的期望比例，而原子场用随机阈值模拟单个原子。' },
  { question: '活度和剩余原子数是一回事吗?', answer: '对单一同位素来说，活度与未衰变原子核数量成正比。如果还剩 30% 的原子，瞬时活度也约为初始活度的 30%。' },
  { question: '这个计算器能用于碳十四测年吗?', answer: '可用于概念理解。真实实验室测年还需要校准曲线、污染修正和样本处理。' },
  { question: '每种同位素都会衰变成一个稳定产物吗?', answer: '不一定。有些同位素会通过包含多个子体产物的衰变链变化。本工具建模的是母体同位素的半衰期。' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: '同位素',
    sampleAtoms: '样本原子',
    elapsedTime: '经过时间',
    halfLife: '半衰期',
    remaining: '剩余',
    decayed: '已衰变',
    activity: '相对活度',
    timeUnit: '时间单位',
    expectedCurve: '期望曲线',
    atomField: '原子场',
    presetUse: '常见用途',
    oneHalfLife: '1 个半衰期',
    twoHalfLives: '2 个半衰期',
    fourHalfLives: '4 个半衰期',
    custom: '自定义',
    liveAtoms: '未衰变原子',
    decayedAtoms: '已衰变原子',
    resetSeed: '新的原子图案',
  },
  seo: [
    {
      type: 'title',
      text: '放射性半衰期计算器: 剩余原子、活度和同位素示例',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这个放射性衰变计算器用于估算不稳定同位素在给定时间后还剩多少。它覆盖常见搜索意图: 半衰期公式、真实同位素计算、剩余母核、已衰变原子核以及活度下降。',
    },
    {
      type: 'paragraph',
      html: '本工具结合了两个互补模型。数值计算结果采用标准指数衰变方程，而原子场则通过随机阈值模拟单个原子核。',
    },
    {
      type: 'title',
      text: '计算器使用的放射性衰变公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '使用的公式是 <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>。<strong>N0</strong> 是初始母核数量，<strong>N(t)</strong> 是时间 <strong>t</strong> 后的期望剩余量，<strong>T1/2</strong> 是半衰期。',
    },
    {
      type: 'paragraph',
      html: '例如，如果初始样本有 1,000 个母核，经过 2 个半衰期后，预期剩余量为 1,000 x (1/2)^2 = 250 个原子核。衰变掉的数量为 750 个。',
    },
    {
      type: 'table',
      headers: ['经过时间', '公式因子', '剩余母核', '相对活度'],
      rows: [
        ['0 个半衰期', '(1/2)^0', '100%', '100%'],
        ['1 个半衰期', '(1/2)^1', '50%', '50%'],
        ['2 个半衰期', '(1/2)^2', '25%', '25%'],
        ['3 个半衰期', '(1/2)^3', '12.5%', '12.5%'],
        ['5 个半衰期', '(1/2)^5', '3.125%', '3.125%'],
        ['10 个半衰期', '(1/2)^10', '0.098%', '0.098%'],
      ],
    },
    {
      type: 'title',
      text: '如何计算半衰期后的剩余活度',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '对于单一同位素，活度与未衰变原子核数量成正比。如果母体同位素还剩 25%，其活度也约为初始活度的 25%。',
    },
    {
      type: 'paragraph',
      html: '这种关系在核医学和辐射防护中至关重要。',
    },
    {
      type: 'title',
      text: '示例：碳-14、碘-131、锝-99m、铀-238 和氡-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['同位素', '近似半衰期', '常见用途', '结果说明'],
      rows: [
        ['碳-14', '5,730 年', '放射性碳测年', '有机物中剩余的碳-14 活度。'],
        ['碘-131', '8.02 天', '医学治疗', '治疗后数天内活度下降的速度。'],
        ['锝-99m', '6.01 小时', '诊断成像', '有用的医学活度为什么会在一个临床工作日内下降。'],
        ['铀-238', '44.7 亿年', '地质年代测定', '长寿命同位素为什么能在地球历史尺度上被测量。'],
        ['氡-222', '3.82 天', '室内辐射', '气态暴露源在数天内的变化。'],
      ],
    },
    {
      type: 'paragraph',
      html: '这些示例涵盖了不同的时间尺度和科学应用。',
    },
    {
      type: 'title',
      text: '如何解读随机原子模拟',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '原子场采用了随机建模。对于小样本，结果会在理论值周围波动。',
    },
    {
      type: 'paragraph',
      html: '平滑曲线只有在汇总大量独立随机事件时才会显现。',
    },
    {
      type: 'title',
      text: '半衰期计算器的应用场景',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>物理教学:</strong> 计算剩余原子核并联系直观模型。',
        '<strong>核化学:</strong> 比较同位素稳定性和衰变速率。',
        '<strong>碳十四测年:</strong> 理解有机样本的衰变规律。',
        '<strong>核医学:</strong> 规划短半衰期同位素诊断。',
        '<strong>辐射防护:</strong> 评估活度随时间下降的趋势。',
      ],
    },
    {
      type: 'title',
      text: '重要局限性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '本计算器仅对母体同位素进行单一半衰期建模。',
    },
    {
      type: 'paragraph',
      html: '请将计算结果作为教学模型和科学估算参考。',
    },
    { type: 'paragraph', html: '本说明整理模型的假设，并解释输入参数如何改变结果。每次只改变一个变量，再比较多次运行，便于判断差异的原因。图示是用于学习的近似模型，真实系统还会受到更多变量、测量误差和边界条件影响。请用结果理解数量级、提出问题并比较情景；如果用于实际判断或研究，还应核对原始数据、单位和专业资料。记录参数可以复现计算，也能更清楚地讨论模型的限制。' },
    { type: 'paragraph', html: '请用相同条件重新计算，再逐项改变输入进行比较。记录初始值、计算规则和使用的上限，有助于区分模型趋势与数值变化。本结果是学习用途的近似，实际观测或设计还需要额外数据和专业核查。' },
    { type: 'paragraph', html: '还应分别改变初始数量和经过时间，观察曲线为何不是线性的。样本较小时会出现随机波动，因此单次运行不一定与理论曲线完全重合。' },
    { type: 'paragraph', html: '这些参数也可以用于课堂演示：先计算理论剩余量，再观察随机事件如何围绕理论趋势变化。' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
