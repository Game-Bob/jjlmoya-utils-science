import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'natural-selection-drift';
const title = '자연 선택과 유전적 표류 시뮬레이터';
const description =
  '선택 압력, 돌연변이, 표류, 번식이 대립유전자 빈도를 어떻게 바꾸는지 실시간으로 볼 수 있습니다.';

const howTo = [
  {
    name: '개체 수 설정',
    text: '소규모 또는 대규모 집단을 선택하여 표본 크기가 진화적 안정성에 미치는 영향을 확인하세요.',
  },
  {
    name: '선택 및 표류 조정',
    text: '선택 압력을 높여 특정 형질을 우대하거나, 표류 강도를 높여 우연이 결과를 지배하도록 하세요.',
  },
  {
    name: '세대 진행 관찰',
    text: '시뮬레이션을 실행하고 세대 흐름에 따른 우성 형질, 적합도, 다양성을 비교하세요.',
  },
  {
    name: '균형 해석',
    text: '최종 지표를 사용하여 적응이 승리하는 시점과 무작위 변동이 지배하는 시점을 이해하세요.',
  },
];

const faq = [
  {
    question: '자연 선택과 유전적 표류의 차이는 무엇인가요?',
    answer: '자연 선택은 생존이나 번식에 유리한 형질이 흔해지는 비무작위 과정입니다. 유전적 표류는 대립유전자 빈도의 무작위 변화이며 소규모 집단에서 가장 강력합니다.',
  },
  {
    question: '소규모 집단이 더 빠르게 변화하는 이유는 무엇인가요?',
    answer: '개체 수가 적을수록 무작위 표본 추출의 영향이 큽니다. 이는 우연한 사건이 세대 간 대립유전자 빈도를 더 극적으로 변화시킬 수 있음을 의미합니다.',
  },
  {
    question: '표류가 선택을 압도할 수 있나요?',
    answer: '예. 표류가 충분히 강하면 개체 수가 적을 때 유리한 형질이라도 우연히 사라질 수 있습니다.',
  },
  {
    question: '이 시뮬레이터에서 적합도는 무엇을 의미하나요?',
    answer: '적합도는 현재 집단이 선택된 환경에 얼마나 잘 적응했는지를 나타내는 단순화된 점수입니다.',
  },
  {
    question: '개체 수 크기가 왜 그렇게 중요한가요?',
    answer: '개체 수 크기는 무작위 표본 추출이 대립유전자 빈도에 미치는 영향력을 결정합니다. 대규모 집단에서는 선택의 효과가 더 명확하게 드러납니다.',
  },
  {
    question: '이 시뮬레이터를 언제 사용해야 하나요?',
    answer: '진화의 직관적 원리를 이해하고 선택과 같은 방향성 있는 힘과 표류와 같은 확률적 힘의 차이를 시각적으로 확인하고 싶을 때 사용하세요.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: '개체 수',
    generations: '세대',
    mutationRate: '돌연변이율',
    selectionPressure: '선택 압력',
    driftIntensity: '표류 강도',
    alleleCount: '초기 대립유전자',
    innovationRate: '혁신률',
    run: '시뮬레이션 시작',
    dominantTrait: '우성 형질',
    fitness: '최종 적합도',
    diversity: '유전적 다양성',
    evolutionConsole: '진화 콘솔',
    populationLabel: '집단',
    aliveLabel: '생존',
    alleleCountsLabel: '대립유전자 수',
    alleleDefault: '대립유전자 1',
    populationValueLabel: '집단',
  },
  seo: [
    {
      type: 'title',
      text: '자연 선택과 유전적 표류를 살아 있는 집단으로 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구는 진화의 핵심 개념을 시각적으로 빠르게 이해하도록 돕습니다. 선택 압력, 돌연변이율, 표류의 상호작용을 실시간으로 관찰할 수 있습니다.',
    },
    {
      type: 'title',
      text: '제어 항목의 의미와 중요성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '자연 선택은 생존에 유리한 형질을 늘리는 진화의 비무작위 요소입니다. 유전적 표류는 무작위 요소입니다.',
    },
    {
      type: 'paragraph',
      html: '두 가지 힘은 항상 동시에 존재하며 매 세대 상호작용합니다.',
    },
    {
      type: 'title',
      text: '시뮬레이션 결과 읽는 법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '실시간 지표를 통해 집단의 동적인 변화를 해석할 수 있습니다.',
    },
    {
      type: 'title',
      text: '개체 수 크기가 결과를 바꾸는 이유',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>선택 압력:</strong> 환경이 특정 형질을 얼마나 강력하게 우대하는지 나타냅니다.',
        '<strong>표류 강도:</strong> 무작위 표본 추출 오차가 집단을 얼마나 변화시키는지 나타냅니다.',
        '<strong>돌연변이율:</strong> 새로운 변이가 시스템에 도입되는 빈도를 나타냅니다.',
        '<strong>초기 대립유전자 수:</strong> 시작 시 존재하는 대립유전자 종류 수입니다.',
        '<strong>유전적 다양성:</strong> 진화의 원료가 되는 유전적 변이입니다.',
      ],
    },
    {
      type: 'paragraph',
      html: '추상적인 개념을 직관적으로 이해할 수 있는 실용적인 학습 도구입니다.',
    },
    {
      type: 'title',
      text: '시도해 볼 수 있는 간단한 예시',
      level: 3,
    },
    {
      type: 'table',
      headers: ['목표', '조작할 항목', '관찰할 결과'],
      rows: [
        ['선택의 승리 보기', '선택 압력을 높이고 표류를 낮게 유지', '시간이 지남에 따라 하나의 대립유전자가 우세해집니다.'],
        ['무작위 표류 보기', '개체 수를 줄이고 표류를 높임', '대립유전자 빈도가 예측 불가능하게 변동합니다.'],
        ['새로운 변이 보기', '돌연변이와 혁신률을 높임', '새로운 대립유전자가 지속적으로 등장합니다.'],
      ],
    },
    {
      type: 'paragraph',
      html: '실시간 시각화를 통해 진화적 트레이드오프를 쉽게 경험할 수 있습니다.',
    },
    { type: 'paragraph', html: '이 설명은 모델의 가정과 입력값이 결과를 바꾸는 방식을 정리합니다. 한 번에 하나의 변수만 바꾸고 여러 실행을 비교하면 차이의 원인을 파악하기 쉽습니다. 화면의 결과는 학습을 위한 근사이며 실제 시스템에는 더 많은 변수, 측정 오차와 경계 조건이 있습니다. 수치는 규모와 경향을 이해하는 데 사용하고, 실제 판단이나 연구에서는 원자료, 단위와 전문 자료를 함께 확인하세요. 설정을 기록하면 계산을 재현하고 모델의 한계도 검토할 수 있습니다.' },
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
