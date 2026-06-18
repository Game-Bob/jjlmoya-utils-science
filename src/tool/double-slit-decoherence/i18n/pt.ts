import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-dupla-fenda-decoherencia';
const title = 'Simulador do Experimento da Dupla Fenda e Decoerencia';
const description = 'Ligue e desligue detectores de caminho para ver a interferencia quantica desaparecer em duas bandas de particulas num simulador visual de dupla fenda.';

const howTo = [
  {
    name: 'Comece com o detector desligado',
    text: 'Deixe o detector de caminho desativado e observe o ecra formar franjas de interferencia claras e escuras a partir de amplitudes de probabilidade coerentes.',
  },
  {
    name: 'Aumente a intensidade do detector',
    text: 'Aumente o controlo do detector para introduzir informacao de caminho. Quanto mais forte o detector se torna, mais a coerencia cai e as franjas desaparecem.',
  },
  {
    name: 'Altere a geometria das fendas',
    text: 'Ajuste a separacao e a largura das fendas para ver como a geometria altera o espacamento das franjas, a largura da envolvente e a distribuicao final no ecra.',
  },
  {
    name: 'Leia as metricas em tempo real',
    text: 'Use a visibilidade das franjas, a informacao de caminho e a coerencia para ligar o padrao visual a historia da medicao quantica.',
  },
];

const faq = [
  {
    question: 'Porque e que o padrao muda quando os detectores sao ligados?',
    answer: 'Um detector que pode revelar qual fenda a particula usou destroi a relacao de fase entre as duas alternativas. Sem essa coerencia, os dois caminhos de probabilidade ja nao interferem e o ecra aproxima-se de duas bandas largas de particulas.',
  },
  {
    question: 'Este simulador significa que a consciencia colapsa a funcao de onda?',
    answer: 'Nao. O simulador centra-se na informacao fisica de caminho e na decoerencia. Um detector, o ambiente ou qualquer interacao que torne o caminho distinguivel pode suprimir a interferencia sem necessitar de um observador consciente.',
  },
  {
    question: 'O que e a visibilidade das franjas?',
    answer: 'A visibilidade das franjas compara as regioes claras e escuras no ecra. Visibilidade alta significa forte contraste de interferencia. Visibilidade baixa significa que os espacos escuros se preencheram e o padrao comporta-se mais como dois fluxos de particulas independentes.',
  },
  {
    question: 'Isto e um resolvedor completo de mecanica quantica?',
    answer: 'Nao. E um modelo educativo que combina uma envolvente de interferencia de dupla fenda com um controlo de decoerencia. Foi construido para explicar visualmente o efeito da medicao, nao para substituir uma simulacao da equacao de Schrodinger para um aparato real.',
  },
  {
    question: 'Porque e que a separacao das fendas afeta o espacamento das franjas?',
    answer: 'Uma separacao maior cria uma diferenca de fase mais rapida atraves do ecra, por isso as bandas claras e escuras ficam mais proximas. Uma separacao menor espalha as franjas mais amplamente.',
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
    kicker: 'Controlo de medicao',
    detectorToggle: 'Ativar detector de caminho',
    detectorStrength: 'Intensidade do detector',
    slitSeparation: 'Separacao das fendas',
    slitWidth: 'Largura da fenda',
    unobserved: 'Nao observado',
    observed: 'Observado',
    waveMode: 'Interferencia',
    particleMode: 'Bandas de particulas',
    fringeVisibility: 'Visibilidade das franjas',
    whichPath: 'Informacao de caminho',
    coherence: 'Coerencia',
    readoutNote: 'A interferencia sobrevive quando ambos os caminhos permanecem indistinguiveis. A medicao torna a informacao de caminho disponivel e o ecra perde as suas franjas escuras.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador do experimento da dupla fenda com decoerencia e detecao de caminho',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador de dupla fenda transforma a experiencia quantica classica num modelo visual interativo. Com o detector desligado, o ecra mostra um padrao de interferencia: bandas claras e escuras produzidas porque os dois caminhos possiveis permanecem coerentes. Quando um detector de caminho e adicionado, o padrao transforma-se gradualmente em duas bandas largas de particulas porque as alternativas de caminho se tornam distinguiveis.',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta foi concebida para estudantes que procuram uma explicacao clara do porque e que a observacao altera o resultado da dupla fenda. Evita a vaga frase "o observador muda a realidade" e concentra-se na ideia fisicamente util: a interferencia requer alternativas indistinguiveis, enquanto a medicao e o entrelacamento ambiental removem a relacao de fase necessaria para as franjas.',
    },
    {
      type: 'title',
      text: 'O que o experimento da dupla fenda demonstra',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na configuracao nao observada, um unico objeto quantico e descrito por amplitudes de probabilidade associadas a ambas as fendas. Essas amplitudes somam-se com fase. Em algumas posicoes do ecra reforcam-se mutuamente, produzindo bandas claras; noutras posicoes cancelam-se, produzindo bandas escuras. Essa estrutura alternada e a assinatura da interferencia.',
    },
    {
      type: 'paragraph',
      html: 'Se um detector registar qual fenda foi usada, as alternativas deixam de ser indistinguiveis. O ecra ja nao recebe uma soma coerente de amplitudes. Recebe uma mistura de dois resultados condicionados pelo caminho, por isso os espacos escuros de interferencia preenchem-se e o resultado parece particulas a passar por uma fenda ou pela outra.',
    },
    {
      type: 'title',
      text: 'Como ler o simulador',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Controlo ou metrica', 'O que altera', 'O que procurar'],
      rows: [
        ['Intensidade do detector', 'Quanta informacao de caminho esta disponivel', 'Valores mais altos reduzem a visibilidade das franjas e aumentam o padrao de duas bandas.'],
        ['Separacao das fendas', 'A distancia entre as duas aberturas', 'Maior separacao torna as bandas de interferencia mais apertadas no ecra.'],
        ['Largura da fenda', 'O tamanho de cada abertura', 'Fendas mais largas estreitam a envolvente de difracao e remodelam o brilho geral.'],
        ['Visibilidade das franjas', 'Contraste entre regioes claras e escuras do ecra', 'Um numero alto significa que a interferencia coerente ainda e visivel.'],
        ['Coerencia', 'Quanta relacao de fase permanece entre os caminhos', 'A coerencia cai a medida que o detector torna os caminhos distinguiveis.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoerencia sem misticismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A decoerencia e a perda de coerencia de fase utilizavel quando um sistema quantico se correlaciona com um detector ou com o ambiente. Num experimento de dupla fenda, essa correlacao pode transportar informacao de caminho. Uma vez que o caminho e registado em principio, mesmo que ninguem leia o registo, o padrao de interferencia e suprimido.',
    },
    {
      type: 'paragraph',
      html: 'Esta distincao e importante porque muitas interpretacoes exageram o papel da observacao humana. A fisica importante nao e a visao ou a consciencia; e se a montagem experimental preserva ou destroi a indistinguibilidade das alternativas que de outra forma interfeririam.',
    },
    {
      type: 'title',
      text: 'Limites deste modelo educativo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O simulador usa um padrao compacto de dupla fenda de estilo otico e combina-o com um modelo de intensidade do detector para a decoerencia. E excelente para intuicao, demonstracoes em aula e revisao conceptual, mas nao e uma solucao numerica de um aparato quantico completo com espacos de Hilbert do detector, fontes de ruido ou calibracao laboratorial.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use-o para entender conceitos:</strong> interferencia, informacao de caminho, coerencia e medicao.',
        '<strong>Nao o use para concecao experimental:</strong> experiencias reais de dupla fenda requerem calculos precisos de comprimento de onda, abertura, detector e propagacao.',
        '<strong>Concentre-se na tendencia:</strong> a medida que a distinguibilidade aumenta, o contraste de interferencia diminui.',
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
