import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-media-planeta';
const description = 'Explore a historia da temperatura media da Terra ao longo das eras geologicas.';
const title = 'Cronologia da Temperatura Media do Planeta';

const howTo = [
  {
    name: 'Selecionar uma era',
    text: 'Clique em uma marca na escala.',
  },
  {
    name: 'Verificar a temperatura',
    text: 'Leia a temperatura media global.',
  },
  {
    name: 'Observar o planeta',
    text: 'Veja como a tela reage ao estado termico.',
  },
];

const faq = [
  {
    question: 'A Terra era mais quente no passado do que hoje?',
    answer: 'Sim, durante eras como o Mesozoico as temperaturas medias eram 10 a 15 graus mais quentes.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia da Temperatura Terrestre',
    sub: 'Explore as eras climaticas geologicas da Terra',
    ageLabel: 'Idade:',
    tempLabel: 'Temperatura Media:',
    selectPrompt: 'Selecione um periodo geologico.',
    epoch_archean_name: 'Eon Arqueano',
    epoch_archean_age: '4,0 a 2,5 bilhoes de anos atras',
    epoch_archean_desc: 'Terra extremamente quente com atmosfera de metano e CO2.',
    epoch_proterozoic_name: 'Eon Proterozoico',
    epoch_proterozoic_age: '2,5 bilhoes a 541 milhoes de anos atras',
    epoch_proterozoic_desc: 'Oxigenio em alta causa a glaciacao huroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: '541 a 252 milhoes de anos atras',
    epoch_paleozoic_desc: 'Explosao de vida nos oceanos e migracao terrestre.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: '252 a 66 milhoes de anos atras',
    epoch_mesozoic_desc: 'Era dos dinossauros sob severo efeito estufa.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: '66 milhoes de anos atras ao Presente',
    epoch_cenozoic_desc: 'Resfriamento gradual rumo as glaciacoes.',
    epoch_anthropocene_name: 'Epoca do Antropoceno',
    epoch_anthropocene_age: 'Presente e futuro',
    epoch_anthropocene_desc: 'Aquecimento acelerado por emissoes de gases.',
  },
  seo: [
    {
      type: 'title',
      text: 'CLIMATOLOGIA: Historia da Temperatura Geologica da Terra',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O clima da Terra mudou constantemente ao longo dos seus 4,5 milhoes de anos de historia, oscilando entre estados de glaciacao e efeito estufa. Estas mudancas sao determinadas pelos ciclos do carbono e tectonica de placas.',
    },
    {
      type: 'title',
      text: 'As Eras de Estufa: Climas do Mesozoico e Paleozoico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Durante a Era Mesozoica, a epoca dos dinossauros, a Terra experimento condicoes extremas de estufa. As temperaturas globais medias atingiram os 22 graus.',
    },
    {
      type: 'title',
      text: 'Os Estados de Glaciacao',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Por o contrario, a Terra entrou em estados frios de glaciacao varias vezes. Durante o Eon Proterozoico, o intemperismo quimico reduziu o CO2, provocando uma glaciacao global.',
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
