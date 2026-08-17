import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sphere-energy-capture';
const title = '다이슨 구 에너지 포획 시뮬레이터';
const description = '다이슨 군집, 적도 고리, 강체 껍질, 스테이타이트 거울 구름 설계를 포획 전력, 열 궤도 반지름, 재료 질량, 카르다쇼프 척도로 비교 평가합니다.';

const howTo = [
  {
    name: '항성 유형 선택',
    text: 'M형 왜성, 태양형 G형 별, A형 별, 적색 거성, 청색 거성 중 하나를 선택합니다. 시뮬레이터는 대표 광도와 질량을 사용하여 궤도 반지름과 주기를 산출합니다.',
  },
  {
    name: '거대 구조 건축 선택',
    text: '다이슨 군집, 적도 고리, 강체 껍질, 스테이타이트 거울 구름을 비교합니다. 각각 포획 효율과 필요 재료 밀도가 다릅니다.',
  },
  {
    name: '커버리지와 동작 온도 설정',
    text: '커버리지를 올려 포획 전력을 늘리고 동작 온도를 조정하여 수집기를 항성에 가깝게 또는 멀게 배치합니다.',
  },
  {
    name: '카르다쇼프 목표 설정',
    text: '목표 슬라이더를 조작하여 문명 규모 에너지 목표 달성에 필요한 항성 광도의 커버 비율을 확인합니다.',
  },
];

const faq = [
  {
    question: '다이슨 구와 다이슨 군집의 차이는 무엇인가요?',
    answer: '강체 다이슨 구는 항성을 완전히 둘러싸는 연속적인 껍질인 반면, 다이슨 군집은 공전하는 수많은 독립 수집기 집합체입니다. 공학적으로 강체 껍질은 구조적으로 불안정하고 막대한 재료가 필요하여 군집 형태가 선호됩니다.',
  },
  {
    question: '최적 궤도 반지름은 어떻게 계산되나요?',
    answer: '양면에서 방열하는 수집기가 지정된 항성 광도 아래에서 설정 동작 온도에 도달하는 거리를 추정합니다. 고온 동작이 가능한 수집기일수록 안쪽 궤도를 가질 수 있습니다.',
  },
  {
    question: '여기서 카르다쇼프 등급은 무엇을 의미하나요?',
    answer: '포획한 와트 수에서 공식 K = (log10(P) - 6) / 10 을 사용하여 대수 척도로 산출한 평가 값입니다. K1 부근은 행성 규모, K2는 항성 출력을 거의 전량 이용하는 단계를 나타냅니다.',
  },
  {
    question: '계산된 재료 질량이 현실적인가요?',
    answer: '면적과 면적 밀도를 기반으로 한 1차 교육적 추정치입니다. 실제 설계에서는 궤도 유지, 송전 시스템, 제조 인프라 등의 추가 질량이 필요합니다.',
  },
  {
    question: '왜 고광도 항성일수록 거대한 수집기가 필요한가요?',
    answer: '광도가 높은 항성은 열적으로 안전한 반지름이 외곽으로 밀려납니다. 거리의 제곱에 비례하여 필요한 표면적이 증가하므로 재료 수요가 급증합니다.',
  },
  {
    question: '부분적인 커버리지로 카르다쇼프 II형에 도달할 수 있나요?',
    answer: '예, 주성이 충분히 밝고 고효율 수집기라면 일부 커버리지 비율만으로도 II형 에너지 목표에 도달할 수 있습니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: '다이슨 수집기 시각화',
    starType: '항성 유형',
    structureType: '구조',
    coverage: '수집기 커버리지',
    operatingTemp: '동작 온도',
    kardashevTarget: '카르다쇼프 목표',
    kardashevRating: '현재 등급',
    capturedPower: '포획 전력',
    optimalRadius: '최적 반지름',
    targetCoverage: '목표 커버리지',
    materialMass: '재료 질량',
    captureMeter: '목표 포획 진행도',
    statusReady: '시스템을 조정하여 수집기 수요를 추정하세요.',
    statusUnderbuilt: '커버리지가 선택한 목표 아래에 있습니다.',
    statusBalanced: '커버리지가 선택한 목표에 근접합니다.',
    statusExtreme: '이 구성은 목표를 크게 초과합니다.',
    orbitalPeriod: '궤도 주기',
    collectorArea: '수집기 면적',
    mercuryMasses: '{value} 수성 질량',
    kilograms: '{value} kg',
    daysUnit: '{value} 일',
    starMDwarf: 'M형 왜성',
    starSun: '태양형 G형 별',
    starA: 'A형 별',
    starRedGiant: '적색 거성',
    starBlueGiant: '청색 거성',
    structureSwarm: '다이슨 군집',
    structureRing: '적도 고리',
    structureShell: '강체 껍질',
    structureStatite: '스테이타이트 미러 구름',
  },
  seo: [
    {
      type: 'title',
      text: '다이슨 구 에너지 포획 시뮬레이터',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '다이슨 구는 공상과학 상상 속의 껍질에 불과한 것이 아닙니다. 위성 군집, 적도 고리, 스테이타이트 거울 구름 등 항성 광도를 포획하는 다양한 거대 구조 개념의 총칭입니다.',
    },
    {
      type: 'paragraph',
      html: '본 도구는 포획 전력, 열 궤도 반지름, 필요 면적, 궤도 주기, 재료 질량, 카르다쇼프 목표 수치를 산출하여 제시합니다.',
    },
    {
      type: 'title',
      text: '다이슨 반지름 추정 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '최적 반지름은 항성 광도와 수집기 동작 온도에서 계산됩니다. 항성에 가까울수록 강력한 열 방사를 받으므로 방열 능력이 요구됩니다.',
    },
    {
      type: 'title',
      text: '각 구조 유형의 비교',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>다이슨 군집:</strong> 독립 공전하는 수많은 수집기. 단계적 건설이 가능한 가장 현실적인 모델.',
        '<strong>적도 고리:</strong> 적도 상에 배치하는 띠 모양 구조. 초기 구축이 용이.',
        '<strong>강체 껍질:</strong> 전 방위를 둘러싸는 구체. 구조적 응력과 역학적 안정성에 과제 존재.',
        '<strong>스테이타이트 거울 구름:</strong> 복사압으로 정지 유지하는 초경량 거울 구조.',
      ],
    },
    {
      type: 'title',
      text: '카르다쇼프 척도와 커버리지',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '카르다쇼프 지표는 문명의 이용 에너지를 대수로 표시한 것입니다. 태양의 수 %를 둘러싸는 것만으로도 인류의 현 소비량을 크게 상회합니다.',
    },
    {
      type: 'table',
      headers: ['구조 유형', '주요 장점', '주요 병목'],
      rows: [
        ['다이슨 군집', '단계적 구축 가능', '궤도 관리 및 송전 빔 제어'],
        ['적도 고리', '초기 면적이 적음', '커버 영역의 한계'],
        ['강체 껍질', '이론상 최고 포획 효율', '구조적 불안정성과 막대한 필요 질량'],
        ['스테이타이트 거울 구름', '면적 밀도가 극히 낮음', '정밀한 자세 제어와 열 한계'],
      ],
    },
    {
      type: 'title',
      text: '필요 재료 질량과 자원 채굴 추정',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '필요 재료는 수성 질량 단위로 표시됩니다. 많은 거대 구조 계획에서는 수성 등의 소행성을 해체하여 재료화하는 것이 상정됩니다.',
    },
    {
      type: 'paragraph',
      html: '물리적 스케일감을 파악하는 교육적 시뮬레이션으로 활용하세요.',
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
