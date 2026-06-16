import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperature-timeline';
const description = '探索地球在整个地质时期的平均气温历史。';
const title = '地球平均气温时间线';

const howTo = [
  {
    name: '选择地质时期',
    text: '点击刻度尺上的刻度。',
  },
  {
    name: '检查温度',
    text: '读取全球平均温度。',
  },
  {
    name: '观察行星',
    text: '观察画布对热状态的反应。',
  },
];

const faq = [
  {
    question: '地球过去的温度比现在高吗？',
    answer: '是的，在中生代等时期，全球平均气温比现在高出10到15摄氏度。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '地球气温时间线',
    sub: '探索地球的地质气候时期',
    ageLabel: '年龄:',
    tempLabel: '平均气温:',
    selectPrompt: '选择地质时期。',
    epoch_archean_name: '太古宙',
    epoch_archean_age: '40亿至25亿年前',
    epoch_archean_desc: '富含甲烷和二氧化碳的极热地球。',
    epoch_proterozoic_name: '元古宙',
    epoch_proterozoic_age: '25亿至5.41亿年前',
    epoch_proterozoic_desc: '氧气上升导致休伦冰期及雪球地球。',
    epoch_paleozoic_name: '古生代',
    epoch_paleozoic_age: '5.41亿至2.52亿年前',
    epoch_paleozoic_desc: '海洋生命爆发与向陆地迁移。',
    epoch_mesozoic_name: '中生代',
    epoch_mesozoic_age: '2.52亿至6600万年前',
    epoch_mesozoic_desc: '温室气候下的恐龙时代。',
    epoch_cenozoic_name: '新生代',
    epoch_cenozoic_age: '6600万年前至今',
    epoch_cenozoic_desc: '逐渐冷却并走向第四纪冰期。',
    epoch_anthropocene_name: '人新世',
    epoch_anthropocene_age: '现代与未来',
    epoch_anthropocene_desc: '温室气体排放导致的快速变暖。',
  },
  seo: [
    {
      type: 'title',
      text: '气候学：地球地质温度史',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在地球45亿年的历史中，气候不断变化，在冰室和温室状态之间摆动。这些转变是由碳循环和板块构造决定的。',
    },
    {
      type: 'title',
      text: '温室时代：中生代和古生代气候',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在恐龙时代的中生代，地球经历了极端的温室条件。全球平均气温达到了22度。',
    },
    {
      type: 'title',
      text: '冰室状态',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '相反，地球几次进入严酷的冰室状态。原生代时期，化学风化作用降低了二氧化碳，引发了全球冰期。',
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
