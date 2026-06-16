const slug = 'lorenz-attractor';
const title = '로렌츠 아틀랙터 카오스 시뮬레이터: 3D 나비 효과';
const description = '인터랙티브 3D 로렌츠 아틀랙터 시뮬레이션으로 카오스 이론을 탐구하고 나비 효과를 시각화하세요.';

const howTo = [
  {
    "name": "화면 회전",
    "text": "3D 뷰포트를 클릭하고 드래그하여 아틀랙터를 다양한 각도에서 관찰하세요."
  },
  {
    "name": "슬라이더 조정",
    "text": "시그마, 로, 베타 매개변수를 수정하여 카오스로 진입하는 상태를 관찰하세요."
  },
  {
    "name": "발산 관찰",
    "text": "두 궤적 사이의 거리가 지수함수적으로 증가하는 과정을 확인하세요."
  },
  {
    "name": "일시정지 및 리셋",
    "text": "컨트롤을 사용해 시뮬레이션을 일시정지하거나 기본값으로 초기화하세요."
  }
];

const faq = [
  {
    "question": "로렌츠 아틀랙터란 무엇인가요?",
    "answer": "로렌츠 아틀랙터는 로렌츠 방정식계에서 나타나는 카오스적 해의 집합입니다."
  },
  {
    "question": "나비 효과란 무엇인가요?",
    "answer": "비선형 시스템에서 초기 조건의 미세한 변화가 시간이 지나며 거대한 차이를 만들어내는 현상입니다."
  },
  {
    "question": "매개변수들은 무엇을 나타내나요?",
    "answer": "시그마는 프란틀 수, 로는 레일리 수, 베타는 기하학적 종횡비를 의미합니다."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "복사됨",
  "noHistory": "기록 없음",
  "load": "불러오기",
  "delete": "삭제",
  "title": "로렌츠 아틀랙터",
  "subTitle": "결정론적 카오스",
  "parameterControls": "시스템 매개변수",
  "simulationSpeed": "속도 (dt)",
  "initialPerturbation": "초기 미세 차이 (dx)",
  "trajectories": "궤적",
  "distance": "발산 거리",
  "exponentialGrowth": "지수 발산",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "좌표",
  "divergenceExplanation": "발산 그래프는 두 궤적 간의 유클리드 거리 변화를 실시간으로 나타냅니다."
},
  seo: [
  {
    "type": "title",
    "text": "결정론적 카오스: 로렌츠 방정식의 이해",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "로렌츠 방정식은 비선형 역학 및 카오스 이론 연구에서 가장 중요한 이정표 중 하나입니다."
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
