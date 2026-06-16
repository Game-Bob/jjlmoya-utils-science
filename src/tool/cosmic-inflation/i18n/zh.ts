import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cosmic-inflation-calculator';
const description = '计算宇宙暴胀时期早期宇宙的指数级膨胀。';
const title = '宇宙暴胀计算器：早期宇宙膨胀';

const howTo = [
  {
    name: '选择数值',
    text: '拖动滑块查看结果。',
  },
  {
    name: '比较尺度因子',
    text: '观察空间膨胀了多少个数量级。',
  },
  {
    name: '分析动态扭曲',
    text: '画布显示了空间的膨胀。',
  },
];

const faq = [
  {
    question: '什么是宇宙暴胀？',
    answer: '早期宇宙中空间快速指数级膨胀的时期。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '宇宙暴胀计算器',
    efoldsLabel: 'e-folds数量 (N)',
    energyLabel: '初始能量尺度 (GeV)',
    scaleFactorResult: '尺度因子增长',
    reheatingTempResult: '估计再加热温度',
    chartTitle: '时空结构扭曲',
    presetGuth: '标准（古斯）',
    presetChaotic: '混沌',
    presetExtreme: '极端极限',
    efoldsTooltip: '典型模型预测在50到60个e-folds之间。',
    energyTooltip: 'GUT尺度约为10^16 GeV。',
    scaleFactorTooltip: '代表总膨胀系数。',
    reheatingTooltip: '暴胀结束时的温度。',
    analogyInsuff: '中度暴胀。这种膨胀是不够的。',
    analogyProton: '宇宙在极短时间内从质子大小膨胀到星系大小。',
    analogyObservable: '宇宙在10^-32秒内从亚原子尺度膨胀到大于可观测宇宙的范围。',
  },
  seo: [
    {
      type: 'title',
      text: '宇宙学：理解宇宙暴胀理论',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '宇宙暴胀是现代宇宙学的基石。它描述了在大爆炸后约10^-36秒发生的一个短暂、极其迅速的指数级膨胀时期。',
    },
    {
      type: 'title',
      text: '视界问题解释',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '视界问题源于宇宙微波背景辐射在天空中的均匀温度。如果没有暴胀，遥远的区域将没有时间进行热平衡。',
    },
    {
      type: 'title',
      text: '平坦性问题与空间几何',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '平坦性问题涉及宇宙的空间曲率。暴胀戏剧性地拉伸了空间的曲率，使可观测宇宙显得极其平坦。',
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
