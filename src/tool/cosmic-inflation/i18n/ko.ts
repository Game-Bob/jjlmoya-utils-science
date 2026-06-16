import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cosmic-inflation-calculator';
const description = '우주 인플레이션 시대 동안 초기 우주의 기하급수적 팽창을 계산합니다.';
const title = '우주 인플레이션 계산기: 초기 우주 팽창';

const howTo = [
  {
    name: '값 선택하기',
    text: '슬라이더를 드래그하여 결과를 확인하세요.',
  },
  {
    name: '척도 인자 비교하기',
    text: '공간이 몇 배나 팽창했는지 관찰하세요.',
  },
  {
    name: '동적 왜곡 분석하기',
    text: '캔버스는 공간의 팽창을 보여줍니다.',
  },
];

const faq = [
  {
    question: '우주 인플레이션이란 무엇입니까?',
    answer: '초기 우주의 급격한 기하급수적 공간 팽창 기간.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '우주 인플레이션 계산기',
    efoldsLabel: 'e-folds 수 (N)',
    energyLabel: '초기 에너지 스케일 (GeV)',
    scaleFactorResult: '척도 인자 성장',
    reheatingTempResult: '추정 재가열 온도',
    chartTitle: '시공간 구조 왜곡',
    presetGuth: '표준 (구스)',
    presetChaotic: '혼돈',
    presetExtreme: '극단적 한계',
    efoldsTooltip: '일반적인 모델은 50에서 60 e-folds를 예측합니다.',
    energyTooltip: 'GUT 스케일은 약 10^16 GeV입니다.',
    scaleFactorTooltip: '총 팽창 인자를 나타냅니다.',
    reheatingTooltip: '인플레이션이 끝날 때의 온도.',
    analogyInsuff: '완만한 인플레이션. 이 팽창은 불충분합니다.',
    analogyProton: '우주는 순식간에 양성자 크기에서 은하 크기로 팽창했습니다.',
    analogyObservable: '우주는 10^-32초 만에 아원자 스케일에서 관측 가능한 우주보다 크게 팽창했습니다.',
  },
  seo: [
    {
      type: 'title',
      text: '우주론: 우주 인플레이션 이론의 이해',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '우주 인플레이션은 현대 우주론의 초석입니다. 빅방 후 약 10^-36초에 일어난 급격한 기하급수적 팽창을 설명합니다.',
    },
    {
      type: 'title',
      text: '지평선 문제 설명',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '지평선 문제는 우주 마이크로파 배경 복사의 균일성에서 비롯됩니다. 인플레이션이 없었다면 먼 지역들이 열적 평형에 도달할 시간이 없었습니다.',
    },
    {
      type: 'title',
      text: '평탄성 문제와 공간 기하학',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '평탄성 문제는 우주의 곡률에 관한 것입니다. 인플레이션은 우주의 곡률을 극적으로 늘려 평탄하게 만들었습니다.',
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
