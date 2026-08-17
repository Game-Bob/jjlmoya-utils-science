import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulador-selecao-natural-deriva-genetica';
const title = 'Simulador de Seleção Natural e Deriva Genética';
const description =
  'Veja em tempo real como a pressão seletiva, a mutação, a deriva genética e a reprodução alteram as frequências alélicas.';

const howTo = [
  {
    name: 'Defina a população',
    text: 'Escolha uma população pequena ou grande para observar como o tamanho da amostra influencia a estabilidade evolutiva.',
  },
  {
    name: 'Ajuste seleção e deriva',
    text: 'Ajuste a pressão seletiva ou a intensidade da deriva para observar trajetórias evolutivas distintas.',
  },
  {
    name: 'Acompanhe as gerações',
    text: 'Execute a simulação e compare o traço dominante, a fitness e a diversidade ao longo do tempo.',
  },
  {
    name: 'Interprete os resultados',
    text: 'Use as métricas para entender quando a adaptação vence e quando o acaso domina.',
  },
];

const faq = [
  {
    question: 'Qual é a diferença entre seleção natural e deriva genética?',
    answer:
      'A seleção natural não é aleatória: características vantajosas aumentam a fitness e tornam-se mais comuns. A deriva genética é uma mudança aleatória nas frequências alélicas, sendo muito mais forte em populações reduzidas.',
  },
  {
    question: 'Por que populações pequenas mudam mais rapidamente?',
    answer:
      'Em populações pequenas, o erro de amostragem é maior, o que significa que o acaso tem um peso muito superior na composição da próxima geração.',
  },
  {
    question: 'A deriva pode superar a seleção?',
    answer:
      'Sim. Um alelo vantajoso pode ser eliminado por puro acaso se a deriva genética for forte o suficiente para superar o benefício seletivo.',
  },
  {
    question: 'O que significa fitness neste simulador?',
    answer:
      'Fitness é uma pontuação simplificada que indica o quão bem a população está adaptada ao ambiente escolhido.',
  },
  {
    question: 'Por que o tamanho da população é importante?',
    answer:
      'Determina o quanto as flutuações aleatórias afetam as frequências alélicas.',
  },
  {
    question: 'Quando devo usar este simulador?',
    answer:
      'Quando quiser compreender a intuição por trás da evolução, especialmente a diferença entre seleção e deriva.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Tamanho da população',
    generations: 'Gerações',
    mutationRate: 'Taxa de mutação',
    selectionPressure: 'Pressão seletiva',
    driftIntensity: 'Intensidade da deriva',
    alleleCount: 'Alelos iniciais',
    innovationRate: 'Taxa de inovação',
    run: 'Executar simulação',
    dominantTrait: 'Traço dominante',
    fitness: 'Fitness final',
    diversity: 'Diversidade genética',
    evolutionConsole: 'Console evolutivo',
    populationLabel: 'População',
    aliveLabel: 'vivos',
    alleleCountsLabel: 'Contagem de alelos',
    alleleDefault: 'Alelo 1',
    populationValueLabel: 'População',
  },
  seo: [
    {
      type: 'title',
      text: 'Seleção natural vs deriva genética: entender a evolução com uma população viva',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Se você quer entender a diferença entre seleção natural e deriva genética, este simulador oferece a camada visual necessária. Em vez de ler definições estáticas, você observa uma população a evoluir em tempo real.',
    },
    {
      type: 'title',
      text: 'O que significam os controlos e por que são importantes',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'A seleção natural aumenta a frequência de traços vantajosos. A deriva genética altera as frequências de forma puramente estocástica.',
    },
    {
      type: 'paragraph',
      html:
        'Ambas as forças atuam simultaneamente: em populações grandes a seleção domina, enquanto em populações pequenas o acaso pode eliminar traços úteis.',
    },
    {
      type: 'title',
      text: 'Como ler os resultados da simulação',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'As métricas em tempo real mostram o traço dominante, a diversidade genética, a fitness final e a estabilidade da população.',
    },
    {
      type: 'title',
      text: 'Por que o tamanho da população altera a história',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pressão seletiva:</strong> O quanto o ambiente favorece um traço.',
        '<strong>Intensidade da deriva:</strong> O ruído de amostragem aleatória.',
        '<strong>Taxa de mutação:</strong> A frequência de novas variações.',
        '<strong>Número de alelos:</strong> A diversidade inicial no sistema.',
        '<strong>Diversidade genética:</strong> A matéria-prima da evolução.',
      ],
    },
    {
      type: 'paragraph',
      html:
        'Uma ferramenta prática para compreender a seleção, deriva e mutação em sistemas biológicos.',
    },
    {
      type: 'title',
      text: 'Exemplos rápidos para experimentar',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Objetivo', 'Alteração', 'Resultado esperado'],
      rows: [
        [
          'Mostrar seleção',
          'Aumentar pressão seletiva e reduzir deriva',
          'Um alelo domina gradualmente',
        ],
        [
          'Mostrar deriva',
          'Reduzir população e aumentar deriva',
          'Flutuações aleatórias nas frequências',
        ],
        [
          'Mostrar mutação',
          'Aumentar taxa de mutação',
          'Novos alelos surgem regularmente',
        ],
      ],
    },
    {
      type: 'paragraph',
      html:
        'A combinação de visuais em tempo real e métricas facilita a compreensão dos processos evolutivos.',
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
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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