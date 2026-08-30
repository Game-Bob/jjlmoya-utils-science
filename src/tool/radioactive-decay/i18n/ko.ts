import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'radioactive-decay-half-life-calculator';
const title = '방사성 붕괴 반감기 계산기';
const description = '실제 동위원소, 반감기 공식, 확률적 원자 필드, 남은 양, 상대 방사능으로 방사성 붕괴를 시뮬레이션합니다.';

const howTo = [
  { name: '동위원소 선택', text: '탄소-14, 요오드-131, 우라늄-238, 테크네튬-99m, 라돈-222 중에서 시작하세요. 각 프리셋에는 현실적인 반감기와 대표적인 과학적 사용 맥락이 들어 있습니다.' },
  { name: '시료와 시간 설정', text: '표시할 원자 수를 조정하고 시간을 이동해 남은 비율이 반감기의 지수 법칙을 어떻게 따르는지 확인합니다.' },
  { name: '정확한 계산과 원자 단위의 우연성 비교', text: '결정론적 결과를 기대값으로 보고, 원자 필드에서 작은 시료가 이론 곡선 주변에서 흔들리는 이유를 살펴봅니다.' },
  { name: '방사능 해석', text: '방사능은 붕괴하지 않은 핵의 수와 같은 비율로 줄어들기 때문에, 초기 방사선률 대비 얼마나 남았는지 볼 수 있습니다.' },
];

const faq = [
  { question: '반감기란 무엇인가요?', answer: '반감기는 시료 안의 불안정한 원자핵 절반이 평균적으로 붕괴하는 데 걸리는 시간입니다. 한 반감기 뒤에는 50%, 두 반감기 뒤에는 25%, 세 반감기 뒤에는 12.5%가 남습니다.' },
  { question: '원자 필드가 정확한 비율과 항상 맞지 않는 이유는 무엇인가요?', answer: '방사성 붕괴는 확률적입니다. 공식은 큰 시료의 기대 비율을 주고, 원자 필드는 개별 원자에 무작위 임계값을 부여해 시뮬레이션합니다.' },
  { question: '방사능 표시가 남은 원자 수와 같은 뜻인가요?', answer: '하나의 동위원소에서는 방사능이 붕괴하지 않은 핵의 수에 비례합니다. 원자가 30% 남으면 순간 방사능도 약 30%입니다.' },
  { question: '탄소 연대 측정에 사용할 수 있나요?', answer: '개념 이해에는 사용할 수 있습니다. 실제 실험실 연대 측정은 보정 곡선, 오염, 시료 준비도 함께 고려합니다.' },
  { question: '모든 동위원소가 하나의 안정한 생성물로 붕괴하나요?', answer: '항상 그렇지는 않습니다. 여러 딸핵종을 거치는 붕괴 사슬도 있습니다. 이 도구는 부모 동위원소의 반감기를 모델링합니다.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: '동위원소',
    sampleAtoms: '시료 원자',
    elapsedTime: '경과 시간',
    halfLife: '반감기',
    remaining: '남음',
    decayed: '붕괴됨',
    activity: '상대 방사능',
    timeUnit: '시간 단위',
    expectedCurve: '예상 곡선',
    atomField: '원자 필드',
    presetUse: '주요 용도',
    oneHalfLife: '1 반감기',
    twoHalfLives: '2 반감기',
    fourHalfLives: '4 반감기',
    custom: '사용자 설정',
    liveAtoms: '활성 원자',
    decayedAtoms: '붕괴한 원자',
    resetSeed: '새 원자 패턴',
  },
  seo: [
    {
      type: 'title',
      text: '방사성 반감기 계산기: 남은 원자, 방사능, 동위원소 예시',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 방사성 붕괴 계산기는 불안정한 동위원소가 일정 시간이 지난 뒤 얼마나 남는지 추정합니다. 반감기 공식, 실제 동위원소 계산, 남은 부모핵, 붕괴한 핵, 방사능 감소를 찾는 검색 의도에 맞춰 구성되어 있습니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구는 두 가지 보완 모델을 결합합니다. 수치 결과는 표준 지수 붕괴 방정식을 사용하고, 원자 필드는 확률적 임계값으로 개별 원자핵을 시뮬레이션합니다.',
    },
    {
      type: 'title',
      text: '계산기에서 사용하는 방사성 붕괴 공식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '사용 공식은 <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>입니다. <strong>N0</strong>는 초기 부모핵 수, <strong>N(t)</strong>는 시간 <strong>t</strong> 뒤의 기대 잔량, <strong>T1/2</strong>는 반감기입니다.',
    },
    {
      type: 'paragraph',
      html: '예를 들어 시료가 1,000개의 부모핵으로 시작해 2 반감기가 지나면 예상 남은 양은 1,000 x (1/2)^2 = 250개입니다. 붕괴한 양은 750개입니다.',
    },
    {
      type: 'table',
      headers: ['경과 시간', '계수', '남은 부모핵', '상대 방사능'],
      rows: [
        ['0 반감기', '(1/2)^0', '100%', '100%'],
        ['1 반감기', '(1/2)^1', '50%', '50%'],
        ['2 반감기', '(1/2)^2', '25%', '25%'],
        ['3 반감기', '(1/2)^3', '12.5%', '12.5%'],
        ['5 반감기', '(1/2)^5', '3.125%', '3.125%'],
        ['10 반감기', '(1/2)^10', '0.098%', '0.098%'],
      ],
    },
    {
      type: 'title',
      text: '반감기 후 남은 방사능 계산 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '하나의 부모 동위원소에서는 방사능이 붕괴하지 않은 핵의 수에 비례합니다. 부모 동위원소의 25%가 남으면 방사능도 초기 방사능의 약 25%가 됩니다.',
    },
    {
      type: 'paragraph',
      html: '이 관계는 핵의학과 방사선 방호에서 중요합니다.',
    },
    {
      type: 'title',
      text: '예시: 탄소-14, 요오드-131, 테크네튬-99m, 우라늄-238, 라돈-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['동위원소', '대략적인 반감기', '주요 용도', '결과의 의미'],
      rows: [
        ['탄소-14', '5,730년', '방사성 탄소 연대 측정', '유기물에 남은 탄소-14 방사능.'],
        ['요오드-131', '8.02일', '의학 치료', '치료 후 며칠 동안 방사능 감소 속도.'],
        ['테크네튬-99m', '6.01시간', '진단 영상', '임상 하루 동안 유용한 방사능이 감소하는 이유.'],
        ['우라늄-238', '44.7억 년', '지질 연대 측정', '장수명 동위원소가 지구 역사 규모에서 측정 가능한 이유.'],
        ['라돈-222', '3.82일', '실내 방사선', '기체 노출원의 변화.'],
      ],
    },
    {
      type: 'paragraph',
      html: '이 예시들은 다양한 시간 규모와 응용 분야를 다룹니다.',
    },
    {
      type: 'title',
      text: '확률적 원자 시뮬레이션 읽는 법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '원자 필드는 확률적으로 모델링됩니다. 작은 시료에서는 통계적 변동이 일어납니다.',
    },
    {
      type: 'paragraph',
      html: '매끄러운 곡선은 수많은 무작위 사건을 합산할 때 나타납니다.',
    },
    {
      type: 'title',
      text: '반감기 계산기 활용 사례',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>물리 교육:</strong> 남은 핵 수 계산과 시각적 모델 연결.',
        '<strong>핵화학:</strong> 동위원소 안정성과 붕괴 속도 비교.',
        '<strong>연대 측정:</strong> 유기물 시료의 붕괴 원리 이해.',
        '<strong>의학 동위원소:</strong> 진단 영상에서 단반감기 활용 이유.',
        '<strong>방사선 방호:</strong> 시간에 따른 방사능 감소 추정.',
      ],
    },
    {
      type: 'title',
      text: '중요한 한계 사항',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 계산기는 부모 동위원소를 하나의 반감기로 모델링합니다.',
    },
    {
      type: 'paragraph',
      html: '결과는 교육용 모델 및 과학적 추정치로 참고해 주세요.',
    },
    { type: 'paragraph', html: '이 설명은 모델의 가정과 입력값이 결과를 바꾸는 방식을 정리합니다. 한 번에 하나의 변수만 바꾸고 여러 실행을 비교하면 차이의 원인을 파악하기 쉽습니다. 화면의 결과는 학습을 위한 근사이며 실제 시스템에는 더 많은 변수, 측정 오차와 경계 조건이 있습니다. 수치는 규모와 경향을 이해하는 데 사용하고, 실제 판단이나 연구에서는 원자료, 단위와 전문 자료를 함께 확인하세요. 설정을 기록하면 계산을 재현하고 모델의 한계도 검토할 수 있습니다.' },
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
