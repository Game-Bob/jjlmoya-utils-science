import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperature-timeline';
const description = '地質年代における地球の平均気温の歴史を探索します。';
const title = '地球の平均気温タイムライン';

const howTo = [
  {
    name: '年代を選択する',
    text: '目盛りをクリックします。',
  },
  {
    name: '気温を確認する',
    text: '地球の平均気温を読み取ります。',
  },
  {
    name: '惑星を観察する',
    text: 'キャンバスが熱状態に反応するのを確認します。',
  },
];

const faq = [
  {
    question: '地球は過去に現在よりも温暖でしたか？',
    answer: 'はい、中生代などの時代には現在より10から15度高かったです。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: '地球の気温タイムライン',
    sub: '地球の地質気候年代を探索する',
    ageLabel: '年代:',
    tempLabel: '平均気温:',
    selectPrompt: '地質年代を選択してください。',
    epoch_archean_name: '太古代',
    epoch_archean_age: '40億〜25億年前',
    epoch_archean_desc: 'メタンと二酸化炭素に富む極めて高温の地球。',
    epoch_proterozoic_name: '原生代',
    epoch_proterozoic_age: '25億〜5億4100万年前',
    epoch_proterozoic_desc: '酸素上昇によるヒューロニアン氷期とスノーボールアース。',
    epoch_paleozoic_name: '古生代',
    epoch_paleozoic_age: '5億4100万〜2億5200万年前',
    epoch_paleozoic_desc: '海洋生命の爆発的進化と陸上への進出。',
    epoch_mesozoic_name: '中生代',
    epoch_mesozoic_age: '2億5200万〜6600万年前',
    epoch_mesozoic_desc: '恐竜の時代。极域に氷がなく温暖な気候。',
    epoch_cenozoic_name: '新生代',
    epoch_cenozoic_age: '6600万年前〜現代',
    epoch_cenozoic_desc: '徐々に寒冷化し、第四紀氷河期へ移行。',
    epoch_anthropocene_name: '人新世',
    epoch_anthropocene_age: '現代および未来',
    epoch_anthropocene_desc: '温室効果ガス排出に伴う急激な温暖化。',
  },
  seo: [
    {
      type: 'title',
      text: '気候学：地球の地質学的気温の歴史',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '地球の気候は45億年の歴史の中で絶えず変化し、氷河期と温室期の間を往復してきました。これらの変化は、炭素循環やプレートテクトニクスによって決定されます。',
    },
    {
      type: 'title',
      text: '温室効果期：中生代と古生代の気候',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '恐竜の時代である中生代には、地球は極端な温室効果状態を経験しました。世界平均気温は22度に達しました。',
    },
    {
      type: 'title',
      text: '氷河期状態',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '対照的に、地球は何度か厳しい氷河期に入りました。原生代には化学風化により二酸化炭素が減少し、全球凍結（スノーボールアース）が発生しました。',
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
