const slug = 'lorenz-attractor';
const title = '洛伦兹吸引子混沌模拟器：3D蝴蝶效应';
const description = '通过这个交互式3D洛伦兹吸引子模拟探索混沌理论。可视化蝴蝶效应。';

const howTo = [
  {
    "name": "旋转画布",
    "text": "在3D视口上点击并拖动以旋转吸引子。"
  },
  {
    "name": "调节滑块",
    "text": "修改Sigma、Rho和Beta参数以观察混沌的产生。"
  },
  {
    "name": "观察发散",
    "text": "观察两条轨迹之间的距离是如何呈指数级增长的。"
  },
  {
    "name": "暂停与重置",
    "text": "使用控制按钮暂停模拟或重置参数。"
  }
];

const faq = [
  {
    "question": "什么是洛伦兹吸引子？",
    "answer": "洛伦兹吸引子是洛伦兹方程组的一组混沌解。"
  },
  {
    "question": "什么是蝴蝶效应？",
    "answer": "非线性系统中对初始条件的敏感依赖性，微小的初始差异会导致巨大的长期差异。"
  },
  {
    "question": "参数代表什么？",
    "answer": "Sigma代表普朗特数，Rho代表瑞利数，Beta与物理尺寸几何比相关。"
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "已复制",
  "noHistory": "无历史记录",
  "load": "加载",
  "delete": "删除",
  "title": "洛伦兹吸引子",
  "subTitle": "决定论混沌",
  "parameterControls": "系统参数",
  "simulationSpeed": "速度 (dt)",
  "initialPerturbation": "初始微扰 (dx)",
  "trajectories": "轨迹",
  "distance": "发散距离",
  "exponentialGrowth": "指数发散",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "坐标",
  "divergenceExplanation": "发散图显示了两条轨迹之间的欧几里得距离随时间的变化。"
},
  seo: [
  {
    "type": "title",
    "text": "决定论混沌：理解洛伦兹方程",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "洛伦兹方程组是非线性动力学和混沌理论研究中的里程碑。"
  }
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
