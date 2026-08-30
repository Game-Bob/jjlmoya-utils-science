import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'black-hole-event-horizon-simulator';
const title = '黑洞事件视界模拟器：施瓦西半径、光子球与时间膨胀';
const description = '通过交互式的质量、轨道距离、时间膨胀、光子球、逃逸速度和施瓦西半径计算，探索黑洞的事件视界。';

const howTo = [
  {
    name: '选择黑洞质量',
    text: '移动质量滑块，从恒星质量黑洞到超大质量黑洞，实时观察施瓦西半径的变化。',
  },
  {
    name: '将探测器移至视界附近',
    text: '以施瓦西半径为单位设置距离，比较安全的外部轨道、光子球区域以及事件视界的边缘。',
  },
  {
    name: '检查相对论效应',
    text: '观察逃逸速度、引力时间膨胀、红移和轨道周期，了解在视界附近直觉为何失效。',
  },
  {
    name: '比较关键半径',
    text: '利用事件视界、光子球和ISCO的参考环，理解非旋转黑洞周围的不同物理边界。',
  },
];

const faq = [
  {
    question: '什么是黑洞的事件视界？',
    answer: '事件视界是逃逸速度达到光速的边界。一旦物体跨越此界限，包括光在内的任何信号都无法返回外部宇宙。',
  },
  {
    question: '施瓦西半径意味着什么？',
    answer: '施瓦西半径是针对非旋转、不带电黑洞定义的事件视界半径。该半径与质量成正比，即质量加倍，视界半径也加倍。',
  },
  {
    question: '什么是光子球？',
    answer: '光子球位于1.5倍施瓦西半径处，是光线能够以不稳定轨道绕黑洞运行的区域。微小的扰动即会导致光子逃逸或坠入黑洞。',
  },
  {
    question: '什么是ISCO？',
    answer: 'ISCO是"最内层稳定圆形轨道"（Innermost Stable Circular Orbit）的缩写。对于非旋转黑洞，它位于3倍施瓦西半径（即6倍引力半径）处，是有质量粒子能维持的最后稳定轨道。',
  },
  {
    question: '为什么时间膨胀在视界附近会显著增加？',
    answer: '在施瓦西时空中，处于更强引力场中的时钟相对于远处观测者走得更慢。随着探测器接近事件视界，时间膨胀因子趋近于零。',
  },
  {
    question: '这个模拟器能模拟旋转黑洞吗？',
    answer: '不能。本模拟器基于施瓦西度规，假设黑洞不旋转且不带电。真实的黑洞多为旋转黑洞，其自转会改变视界大小、ISCO位置及吸积盘动力学。',
  },
  {
    question: '为什么超大质量黑洞的潮汐力反而较小？',
    answer: '视界处的潮汐梯度随黑洞质量的增加而减小。小型黑洞会在视界附近剧烈撕裂物体，而超大质量黑洞在此处的局部潮汐力相对温和。',
  },
  {
    question: '这是真实的黑洞照片吗？',
    answer: '这是一个教育示意图，而非光线追踪模拟。光环和吸积盘按施瓦西半径缩放，旨在让用户直观比较不同的物理区域。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: '事件视界场图',
    visualCaption: '探测器在缩放后的施瓦西时空中移动。明亮的参考环标记了视界、光子球和最内层稳定圆形轨道。',
    controlsTitle: '黑洞控制',
    eventHorizon: '事件视界',
    photonSphere: '光子球',
    isco: 'ISCO',
    rsLabel: '施瓦西半径',
    diameterLabel: '直径',
    timeLabel: '时间膨胀',
    redshiftLabel: '红移',
    statusSafe: '位于稳定轨道区外',
    statusPhoton: '位于光子球区内',
    statusInside: '视界内',
    diameter: '视界直径',
    lightCrossing: '光穿行时间',
    timeDilation: '相对远处观测者的时钟速率',
    redshift: '引力红移',
    mass: '黑洞质量',
    distance: '探测器距离',
    speed: '轨道速度',
    escapeVelocity: '逃逸速度',
    orbitalPeriod: '轨道周期',
    tidalGradient: '潮汐梯度',
    kilometerUnit: '公里',
    millisecondUnit: '毫秒',
    secondUnit: '秒',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: '太阳质量',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 太阳质量',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: '用于史瓦西半径、光子球和时间膨胀的黑洞事件视界模拟器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这个黑洞事件视界模拟器将史瓦西黑洞的核心概念转化为互动式视觉模型。',
    },
    {
      type: 'paragraph',
      html: '该模拟器专为天文学学生、物理教师和好奇的探索者设计。',
    },
    {
      type: 'title',
      text: '如何计算事件视界半径',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '对于无旋转、无电荷的黑洞，视界半径即为<strong>史瓦西半径</strong>：<strong>Rs = 2GM / c^2</strong>。',
    },
    {
      type: 'paragraph',
      html: '由于半径与质量成正比，10倍太阳质量的黑洞半径约为29.5公里。',
    },
    {
      type: 'table',
      headers: ['区域', '以史瓦西半径为单位的半径', '物理意义'],
      rows: [
        ['事件视界', '1.0 Rs', '逃逸速度等于光速的单向边界。'],
        ['光子球', '1.5 Rs', '光线的非稳定圆轨道。'],
        ['ISCO', '3.0 Rs', '有质量粒子的最内侧稳定圆轨道。'],
        ['弱场区域', '6 Rs 及以外', '引力依然强劲，但圆轨道更容易维持。'],
      ],
    },
    {
      type: 'title',
      text: '逃逸速度与视界作为因果边界的原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '逃逸速度是指物体在没有额外推进力的情况下到达无限远处所需的最小速度。',
    },
    {
      type: 'paragraph',
      html: '逃逸速度读数提供了直观参考，但并非完整的相对论描述。',
    },
    {
      type: 'title',
      text: '黑洞附近的时间膨胀与引力红移',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '相比远处的观察者，固定在黑洞外侧特定半径处的时钟走得更慢。简化因子为 <strong>sqrt(1 - Rs / r)</strong>。',
    },
    {
      type: 'paragraph',
      html: '引力红移遵循相同的几何原理。光线从引力深井爬出时会损失能量。',
    },
    {
      type: 'title',
      text: '光子球与ISCO详解',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '1.5 Rs 处的光子球是光线理论上可以围绕史瓦西黑洞运行的非稳定轨道。',
    },
    {
      type: 'paragraph',
      html: '3 Rs 处的 ISCO 代表物质最内侧的稳定圆轨道。',
    },
    {
      type: 'title',
      text: '恒星级黑洞与超大质量黑洞的比较',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一个出乎意料的规律是，越巨大的黑洞在视界处的潮汐力反而越温和。',
    },
    {
      type: 'paragraph',
      html: '模拟器包含了以每米地球重力加速度表示的潮汐梯度读数。',
    },
    {
      type: 'title',
      text: '本模拟器的局限性',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>无自旋：</strong> 采用史瓦西几何。',
        '<strong>吸积物理简化：</strong> 仅显示示意性吸积盘。',
        '<strong>无光线追踪：</strong> 教学示意图。',
        '<strong>静止观察者时钟：</strong> 非自由落体坐标。',
      ],
    },
    {
      type: 'title',
      text: '常见问题',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '使用本工具估算黑洞的相关物理参数。',
    },
    { type: 'paragraph', html: '本节进一步说明模拟使用的几何模型。史瓦西半径随质量增大，在理想的史瓦西解中与事件视界相关。光子球位于更外侧，是不稳定的圆形光轨道，微小扰动也可能明显改变光线的后续路径。页面显示的时间膨胀取决于比较时采用的观察者位置，不能简单等同于局部时钟的固有时。请分别改变质量和距离来比较尺度，避免混淆不同因素。模型没有包含自旋、电荷、周围物质、吸积盘、磁场、辐射或具体天体的潮汐力。它用于建立广义相对论的直观理解，并区分数学定义与天文观测。分析真实天体还需要质量、自旋、环境和轨道数据，以及公开的方法；本页面不提供实际操作预测或接近致密天体的指引。请记录参数并一次只改变一个条件，以便理解结果的来源。' },
    { type: 'paragraph', html: '还可以改变观察者位置，比较时间显示如何变化。这有助于区分坐标表示与局部时钟的测量。在真实天体中，自旋和周围物质会影响光线轨迹与观测信号，因此不能只用简单的球对称模型解释全部观测结果。请记录每个输入，并使用相同条件重复计算，以便理解结果的来源和限制。' },
    { type: 'paragraph', html: '请比较多次独立运行，并且每次只改变一个参数。这样可以区分模型中的几何效应与观察者选择造成的差异。公式有助于建立直观理解，但解释始终取决于参考系和初始条件。' },
    { type: 'paragraph', html: '请使用相同设置进行可重复比较，再一次只改变一个参数。这样可以区分几何模型产生的效果与参考系选择造成的差异。模拟用于学习，并不是对真实观测黑洞的完整描述。' },
    { type: 'paragraph', html: '请记录每个参数并逐项比较变化，这样更容易理解模型的假设以及结果的来源。' },
    { type: 'paragraph', html: '可以先保持质量不变，改变观察者距离，再单独改变质量。这样能清楚比较半径、光子球和时间显示的关系。真实黑洞还可能旋转并受到周围物质影响，因此这些结果只用于理解理想模型。' },
    { type: 'paragraph', html: '请把每次运行的质量、距离和速度写下来，再与另一组条件比较。记录过程有助于发现哪些变化来自输入，哪些变化来自模型本身的近似。' },
    { type: 'paragraph', html: '这样可以更清楚地解释每次比较的结果。' },
    { type: 'paragraph', html: '请同时阅读限制说明，再解释数值结果，并记录本次运行使用的输入条件，清晰理解。' },
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
