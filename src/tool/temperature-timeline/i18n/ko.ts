import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperature-timeline';
const description = '지질 시대에 걸친 지구의 평균 기온 역사를 탐색합니다.';
const title = '지구 평균 기온 타임라인';

const howTo = [
  {
    name: '시대 선택하기',
    text: '자 눈금을 클릭하세요.',
  },
  {
    name: '온도 확인하기',
    text: '글로벌 평균 온도를 읽어보세요.',
  },
  {
    name: '행성 관찰하기',
    text: '캔버스가 열 상태에 반응하는 것을 관찰하세요.',
  },
];

const faq = [
  {
    question: '과거에는 지구가 지금보다 더 더웠습니까?',
    answer: '예, 중생대와 같은 시대에는 평균 기온이 지금보다 10~15도 더 높았습니다.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '지구 기온 타임라인',
    sub: '지구의 지질 기후 시대를 탐색해보세요',
    ageLabel: '연대:',
    tempLabel: '평균 기온:',
    selectPrompt: '지질 시대를 선택하세요.',
    epoch_archean_name: '시생누대',
    epoch_archean_age: '40억 ~ 25억 년 전',
    epoch_archean_desc: '메탄과 이산화탄소가 풍부한 극도로 뜨거운 지구.',
    epoch_proterozoic_name: '원생누대',
    epoch_proterozoic_age: '25억 ~ 5억 4100만 년 전',
    epoch_proterozoic_desc: '산소 증가로 인한 휴로니안 빙하기와 눈덩이 지구.',
    epoch_paleozoic_name: '고생대',
    epoch_paleozoic_age: '5억 4100만 ~ 2억 5200만 년 전',
    epoch_paleozoic_desc: '해양 생명체의 폭발적 진화와 육상 진출.',
    epoch_mesozoic_name: '중생대',
    epoch_mesozoic_age: '2억 5200만 ~ 6600만 년 전',
    epoch_mesozoic_desc: '공룡의 시대. 온실 기후와 높은 해수면.',
    epoch_cenozoic_name: '신생대',
    epoch_cenozoic_age: '6600만 년 전 ~ 현재',
    epoch_cenozoic_desc: '점진적 한랭화로 제4기 빙하기 도래.',
    epoch_anthropocene_name: '인류세',
    epoch_anthropocene_age: '현재 및 미래',
    epoch_anthropocene_desc: '온실가스 배출로 인한 급격한 온난화.',
  },
  seo: [
    {
      type: 'title',
      text: '기후학: 지구의 지질학적 기온 역사',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '지구의 기후는 45억 년 역사 동안 빙하기와 온난기 사이를 오가며 끊임없이 변해왔습니다. 이러한 변화는 탄소 순환과 판구조론에 의해 지배됩니다.',
    },
    {
      type: 'title',
      text: '온난기 시대: 중생대 및 고생대 기후',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '공룡 시대인 중생대 동안 지구는 극단적인 온난화 상태를 경험했습니다. 평균 지구 기온은 22도에 달했습니다.',
    },
    {
      type: 'title',
      text: '빙하기 상태',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '반대로 지구는 여러 번 심각한 빙하기 상태에 진입했습니다. 원생대에는 화학적 풍화가 이산화탄소를 감소시켜 눈덩이 지구라 불리는 전 지구적 빙하기를 초래했습니다.',
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
