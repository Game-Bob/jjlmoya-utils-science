import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-dupla-fenda-decoerencia';
const title = 'Simulador do Experimento da Dupla Fenda e Decoerência';
const description = 'Ligue e desligue detectores de caminho para ver a interferência quântica desaparecer em duas bandas de partículas num simulador visual de dupla fenda.';

const howTo = [
  {
    name: 'Comece com o detector desligado',
    text: 'Deixe o detector de caminho desativado e observe o ecrã formar franjas de interferência claras e escuras a partir de amplitudes de probabilidade coerentes.',
  },
  {
    name: 'Aumente a intensidade do detector',
    text: 'Aumente o controlo do detector para introduzir informação de caminho. Quanto mais forte o detector se torna, mais a coerência cai e as franjas desaparecem.',
  },
  {
    name: 'Altere a geometria das fendas',
    text: 'Ajuste a separação e a largura das fendas para ver como a geometria altera o espaçamento das franjas, a largura da envolvente e a distribuição final no ecrã.',
  },
  {
    name: 'Leia as métricas em tempo real',
    text: 'Use a visibilidade das franjas, a informação de caminho e a coerência para ligar o padrão visual à história da medição quântica.',
  },
];

const faq = [
  {
    question: 'Por que é que o padrão muda quando os detectores são ligados?',
    answer: 'Um detector que pode revelar qual fenda a partícula usou destrói a relação de fase entre as duas alternativas. Sem essa coerência, os dois caminhos de probabilidade já não interferem e o ecrã aproxima-se de duas bandas largas de partículas.',
  },
  {
    question: 'Este simulador significa que a consciência colapsa a função de onda?',
    answer: 'Não. O simulador centra-se na informação física de caminho e na decoerência. Um detector, o ambiente ou qualquer interação que torne o caminho distinguível pode suprimir a interferência sem necessitar de um observador consciente.',
  },
  {
    question: 'O que é a visibilidade das franjas?',
    answer: 'A visibilidade das franjas compara as regiões claras e escuras no ecrã. Visibilidade alta significa forte contraste de interferência. Visibilidade baixa significa que os espaços escuros se preencheram e o padrão comporta-se mais como dois fluxos de partículas independentes.',
  },
  {
    question: 'Isto é um resolvedor completo de mecânica quântica?',
    answer: 'Não. É um modelo educativo que combina uma envolvente de interferência de dupla fenda com um controlo de decoerência. Foi construído para explicar visualmente o efeito da medição, não para substituir uma simulação da equação de Schrödinger para um aparato real.',
  },
  {
    question: 'Por que é que a separação das fendas afeta o espaçamento das franjas?',
    answer: 'Uma separação maior cria uma diferença de fase mais rápida através do ecrã, por isso as bandas claras e escuras ficam mais próximas. Uma separação menor espalha as franjas mais amplamente.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Aparato de dupla fenda',
    controls: 'Controlos da dupla fenda',
    results: 'Resultados da dupla fenda',
    kicker: 'Controlo de medição',
    detectorToggle: 'Ativar detector de caminho',
    detectorStrength: 'Intensidade do detector',
    slitSeparation: 'Separação das fendas',
    slitWidth: 'Largura da fenda',
    unobserved: 'Não observado',
    observed: 'Observado',
    waveMode: 'Interferência',
    particleMode: 'Bandas de partículas',
    fringeVisibility: 'Visibilidade das franjas',
    whichPath: 'Informação de caminho',
    coherence: 'Coerência',
    readoutNote: 'A interferência sobrevive quando ambos os caminhos permanecem indistinguíveis. A medição torna a informação de caminho disponível e o ecrã perde as suas franjas escuras.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador do experimento de fenda dupla com decoerência e detecção de caminho',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador de fenda dupla transforma o clássico experimento quântico em um modelo visual interativo. Com o detector desligado, a tela exibe um padrão de interferência: franjas claras e escuras produzidas porque as duas alternativas de caminho permanecem coerentes.',
    },
    {
      type: 'paragraph',
      html: 'Ative o detector para comparar o padrão com informação de caminho disponível.',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta foi projetada para estudantes que buscam uma explicação clara sobre por que a medição altera o resultado. Evita a frase vaga de que "o observador muda a realidade" e foca na ideia física: a interferência exige alternativas indistinguíveis.',
    },
    {
      type: 'title',
      text: 'O que o experimento da fenda dupla demonstra',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na configuração não observada, um único objeto quântico é descrito por amplitudes de probabilidade associadas a ambas as fendas. Essas amplitudes se somam em fase, gerando bandas claras e escuras.',
    },
    {
      type: 'paragraph',
      html: 'Se um detector registra qual fenda foi utilizada, as opções deixam de ser indistinguíveis e a tela passa a exibir um padrão clássico de duas bandas de partículas.',
    },
    {
      type: 'title',
      text: 'Como interpretar o simulador',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Controle ou métrica', 'O que altera', 'O que observar'],
      rows: [
        ['Intensidade do detector', 'Quantidade de informação de caminho disponível', 'Valores mais altos reduzem a visibilidade das franjas e acentuam o padrão corpuscular.'],
        ['Separação das fendas', 'Distância entre as duas aberturas', 'Uma separação maior aproxima as bandas de interferência na tela.'],
        ['Largura da fenda', 'Tamanho de cada abertura', 'Fendas mais largas estreitam o envelope de difração.'],
        ['Visibilidade das franjas', 'Contraste entre regiões claras e escuras', 'Um valor alto indica que a interferência coerente ainda está presente.'],
        ['Coerência', 'Relação de fase restante entre os caminhos', 'A coerência cai à medida que o caminho se torna distinguível.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoerência sem misticismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A decoerência é a perda de coerência de fase utilizável quando um sistema quântico se correlaciona com um detector ou com o ambiente.',
    },
    {
      type: 'paragraph',
      html: 'A física fundamental não depende da consciência humana, mas sim do fato de o aparato preservar ou destruir a indistinguibilidade das alternativas.',
    },
    {
      type: 'title',
      text: 'Limites deste modelo educacional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O simulador combina um padrão óptico de fenda dupla com um modelo de decoerência baseado na intensidade do detector. É ideal para intuir conceitos e ensino.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use para entender os conceitos:</strong> interferência, informação de caminho, coerência e medição.',
        '<strong>Não use para projetos laboratoriais:</strong> experimentos reais exigem cálculos precisos de comprimento de onda e propagação.',
        '<strong>Foque na tendência:</strong> conforme a distinguibilidade aumenta, o contraste de interferência diminui.',
      ],
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
