import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-captura-energia-esfera-de-dyson';
const title = 'Simulador de Captura de Energia da Esfera de Dyson';
const description = 'Estime projetos de megastruturas como enxames de Dyson, anéis equatoriais, conchas rígidas e nuvens de espelhos estáticos. Calcule a potência interceptada, raio orbital térmico, massa de material e cobertura necessária.';

const howTo = [
  {
    name: 'Escolha um tipo de estrela',
    text: 'Comece com uma anã M, uma estrela tipo G como o Sol, uma estrela tipo A, uma gigante vermelha ou uma gigante azul. O simulador ajusta luminosidade e massa para determinar raio e período orbital.',
  },
  {
    name: 'Selecione a arquitetura da megastrutura',
    text: 'Compare um enxame de Dyson, um anel equatorial, uma concha rígida ou uma nuvem estática. Cada conceito possui eficiências de captura e densidades de material distintas.',
  },
  {
    name: 'Ajuste cobertura e temperatura de operação',
    text: 'Aumente a fração de cobertura para capturar mais energia e ajuste a temperatura operacional para aproximar ou afastar os coletores da estrela.',
  },
  {
    name: 'Defina a meta na escala Kardashev',
    text: 'Utilize o seletor para verificar a porcentagem de radiação estelar necessária para atingir um determinado nível energético civilizacional.',
  },
];

const faq = [
  {
    question: 'Qual é a diferença entre uma esfera de Dyson e um enxame de Dyson?',
    answer: 'Uma esfera de Dyson rígida é uma concha contínua e sólida ao redor de uma estrela, enquanto um enxame de Dyson é uma coleção de coletores orbitais independentes. A maioria das análises de engenharia favorece o enxame porque uma concha sólida seria estruturalmente instável e exigiria quantidades impraticáveis de matéria.',
  },
  {
    question: 'Como o simulador escolhe o raio ótimo?',
    answer: 'Ele calcula a distância em que os coletores emitindo radiação por ambos os lados atingem a temperatura operacional escolhida sob a luminosidade estelar dada. Coletores mais quentes podem orbitar mais perto.',
  },
  {
    question: 'O que representa o índice Kardashev nesta ferramenta?',
    answer: 'O valor Kardashev é derivado da potência capturada em watts pela fórmula K = (log10(P) - 6) / 10. Um valor próximo de K1 representa o consumo planetário da Terra, enquanto K2 equivale a toda a potência emitida pela estrela.',
  },
  {
    question: 'A massa de material calculada é realista?',
    answer: 'É uma estimativa física de primeira ordem baseada na área, massa superficial e fatores de estabilidade. Projetos reais exigiriam massa adicional para propulsores de manutenção de órbita, transmissão de energia e sistemas de resfriamento.',
  },
  {
    question: 'Por que estrelas muito brilhantes exigem coletores gigantescos?',
    answer: 'Estrelas de alta luminosidade empurram o raio térmico de segurança para longe. Como a área da esfera cresce com o quadrado da distância, a massa necessária para cobrir a mesma porcentagem aumenta vertiginosamente.',
  },
  {
    question: 'Uma civilização pode atingir o Tipo II com cobertura parcial?',
    answer: 'Sim, desde que a estrela central seja extremamente luminosa. Ao redor do Sol, atingir o Tipo II exige capturar quase todo o fluxo, mas em uma gigante azul, uma pequena fração da emissão total é suficiente.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualização do coletor de Dyson',
    starType: 'Tipo de estrela',
    structureType: 'Estrutura',
    coverage: 'Cobertura do coletor',
    operatingTemp: 'Temperatura de operação',
    kardashevTarget: 'Alvo Kardashev',
    kardashevRating: 'Classificação atual',
    capturedPower: 'Potência capturada',
    optimalRadius: 'Raio ótimo',
    targetCoverage: 'Cobertura alvo',
    materialMass: 'Massa do material',
    captureMeter: 'Progresso da captura',
    statusReady: 'Ajuste o sistema para estimar as demandas do coletor.',
    statusUnderbuilt: 'A cobertura está abaixo da meta Kardashev selecionada.',
    statusBalanced: 'A cobertura está próxima da meta civilizacional selecionada.',
    statusExtreme: 'Esta configuração excede o alvo. Capta enorme potência, mas o consumo de material cresce rápido.',
    orbitalPeriod: 'Período orbital',
    collectorArea: 'Área do coletor',
    mercuryMasses: '{value} massas de Mercúrio',
    kilograms: '{value} kg',
    daysUnit: '{value} dias',
    starMDwarf: 'Anã M',
    starSun: 'Estrela tipo G como o Sol',
    starA: 'Estrela tipo A',
    starRedGiant: 'Gigante vermelha',
    starBlueGiant: 'Gigante azul',
    structureSwarm: 'Enxame de Dyson',
    structureRing: 'Anel equatorial',
    structureShell: 'Concha rígida',
    structureStatite: 'Nuvem de espelhos estáticos',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador de Captura de Energia da Esfera de Dyson',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma esfera de Dyson não é apenas uma ideia de ficção científica de uma concha sólida. Trata-se de uma família de conceitos de megastruturas para interceptar a radiação estelar: desde enxames de satélites até nuvens de espelhos mantidas por pressão de radiação.',
    },
    {
      type: 'paragraph',
      html: 'O aplicativo calcula a potência capturada, o raio orbital térmico, a área necessária, o período de revolução e a massa de material expressa em equivalentes de massa de Mercúrio.',
    },
    {
      type: 'title',
      text: 'Estimativa do raio orbital de Dyson',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O raio ideal depende da luminosidade estelar e da temperatura operacional dos painéis. Uma órbita próxima reduz o tamanho da esfera, mas exige alta tolerância térmica.',
    },
    {
      type: 'title',
      text: 'Comparação dos conceitos de megastrutura',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Enxame de Dyson:</strong> Coletores independentes em órbitas próprias. O modelo mais viável por permitir construção gradual.',
        '<strong>Anel equatorial:</strong> Faixa mais estreita de coletores com menor cobertura total.',
        '<strong>Concha rígida:</strong> Estrutura contínua com máxima captura, mas mecanicamente instável.',
        '<strong>Nuvem estática:</strong> Espelhos ultraleves suspensos pela pressão de radiação estelar.',
      ],
    },
    {
      type: 'title',
      text: 'Cobertura necessária e Escala Kardashev',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A escala Kardashev mede o consumo energético de uma civilização. Capturar uma pequena fração da radiação do Sol excede o consumo atual da humanidade em ordens de grandeza.',
    },
    {
      type: 'table',
      headers: ['Arquitetura', 'Vantagem principal', 'Gargalo principal'],
      rows: [
        ['Enxame de Dyson', 'Construção modular por etapas', 'Gestão de tráfego orbital e transmissão de energia'],
        ['Anel equatorial', 'Menor área inicial', 'Capacidade limitada de captura'],
        ['Concha rígida', 'Captura total da radiação', 'Instabilidade mecânica e massa colossal'],
        ['Nuvem estática', 'Massa por área extremamente baixa', 'Desafios de alinhamento e limites térmicos'],
      ],
    },
    {
      type: 'title',
      text: 'Massa de materiais e disponibilidade de recursos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A estimativa de material é dada em massas do planeta Mercúrio. Diversos estudos teóricos preveem a mineração e desmantelamento de corpos menores do sistema planetário.',
    },
    {
      type: 'paragraph',
      html: 'Utilize esses dados para compreender a escala física e os limites da engenharia estelar.',
    },
    { type: 'paragraph', html: 'Esta explicação esclarece as hipóteses do modelo e mostra como os parâmetros alteram o resultado. Mude uma variável de cada vez e compare várias execuções, para relacionar cada diferença com uma causa identificável. A visualização é uma aproximação educativa: um sistema real inclui mais variáveis, incertezas de medição e condições de fronteira. Use o resultado para compreender ordens de grandeza, formular perguntas e comparar cenários. Para uma decisão prática ou análise científica, confirme sempre os dados primários, as unidades e as fontes especializadas. Registe as definições usadas para repetir o cálculo e discutir as suas limitações.' },
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
