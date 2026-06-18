import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-energia-esfera-dyson';
const title = 'Simulador de Captura de Energia da Esfera de Dyson';
const description = 'Estime designs de enxame, anel, casca e nuvem de estaticos de Dyson para diferentes estrelas. Calcule a potencia capturada, o raio orbital, a massa de material e a cobertura necessaria para atingir uma escala Kardashev alvo.';

const howTo = [
  {
    name: 'Escolha um tipo de estrela',
    text: 'Comece com uma ana M, uma estrela semelhante ao Sol, uma estrela tipo A, uma gigante vermelha ou uma gigante azul. O simulador usa valores representativos de luminosidade e massa para estimar o raio do coletor e o periodo orbital.',
  },
  {
    name: 'Selecione a arquitetura da megaestrutura',
    text: 'Compare um enxame de Dyson, um anel equatorial, uma casca rigida ou uma nuvem de espelhos estaticos. Cada design tem diferente eficiencia de captura, densidade de material e suposicoes de estabilidade.',
  },
  {
    name: 'Ajuste a cobertura e a temperatura de operacao',
    text: 'Aumente a cobertura para capturar mais potencia estelar e ajuste a temperatura de operacao para aproximar ou afastar os coletores da estrela.',
  },
  {
    name: 'Defina um alvo Kardashev',
    text: 'Use o controle deslizante de alvo para ver quanto da estrela deve ser coberto para atingir uma meta de potencia a escala civilizacional.',
  },
];

const faq = [
  {
    question: 'Qual e a diferenca entre uma esfera de Dyson e um enxame de Dyson?',
    answer: 'Uma esfera de Dyson rigida e uma casca continua em torno de uma estrela, enquanto um enxame de Dyson e uma grande colecao de coletores orbitais independentes. A maioria das discussoes de engenharia favorece os enxames porque uma casca solida seria estruturalmente instavel e extremamente intensiva em materiais.',
  },
  {
    question: 'Como o simulador escolhe o raio otimo?',
    answer: 'Ele estima a distancia onde os coletores que irradiam de ambos os lados atingem a temperatura de operacao selecionada sob a luminosidade estelar escolhida. Coletores mais quentes podem orbitar mais perto, enquanto coletores mais frios requerem raios maiores.',
  },
  {
    question: 'O que a classificacao Kardashev significa aqui?',
    answer: 'O valor Kardashev e calculado a partir da potencia capturada usando a forma logaritmica comum K = (log10(P) - 6) / 10, onde P e a potencia em watts. Um valor proximo de K1 representa uso de energia em escala planetaria, enquanto K2 se aproxima da producao estelar completa.',
  },
  {
    question: 'A massa de material e realista?',
    answer: 'E uma estimativa educativa de primeira ordem baseada na area do coletor, densidade superficial e um fator de estabilidade. Projetos reais precisariam de mantencao de estacao, transmissao de energia, perdas de mineracao, redundancia, dissipacao de calor e infraestrutura de fabricacao.',
  },
  {
    question: 'Por que estrelas brilhantes exigem sistemas de coletores tao grandes?',
    answer: 'Estrelas de alta luminosidade empurram o raio termico seguro para fora. Isso aumenta a area superficial necessaria para uma dada fracao de cobertura, entao a demanda de material pode aumentar mais rapido do que a potencia capturada parece intuitivamente.',
  },
  {
    question: 'Uma civilizacao pode atingir o Tipo II de Kardashev com cobertura parcial?',
    answer: 'Sim, se a estrela hospedeira for suficientemente brilhante e os coletores forem eficientes. Em torno de uma estrela semelhante ao Sol, atingir perto do Tipo II requer capturar uma grande fracao da luminosidade solar, mas em torno de estrelas mais luminosas, o mesmo objetivo de potencia pode precisar de uma fracao de cobertura menor.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualizacao do coletor Dyson',
    starType: 'Tipo de estrela',
    structureType: 'Estrutura',
    coverage: 'Cobertura do coletor',
    operatingTemp: 'Temperatura de operacao',
    kardashevTarget: 'Alvo Kardashev',
    kardashevRating: 'Classificacao atual',
    capturedPower: 'Potencia capturada',
    optimalRadius: 'Raio otimo',
    targetCoverage: 'Cobertura alvo',
    materialMass: 'Massa de material',
    captureMeter: 'Progresso em direcao ao alvo',
    statusReady: 'Ajuste o sistema para estimar a demanda do coletor.',
    statusUnderbuilt: 'A cobertura esta abaixo do alvo Kardashev selecionado. Adicione coletores ou escolha uma estrela mais brilhante.',
    statusBalanced: 'A cobertura e a saida estelar estao proximas do objetivo de escala civilizacional selecionado.',
    statusExtreme: 'Esta configuracao ultrapassa o alvo. Ela captura potencia enorme, mas a demanda de material cresce rapido.',
    orbitalPeriod: 'Periodo orbital',
    collectorArea: 'Area do coletor',
    mercuryMasses: '{value} massas de Mercurio',
    kilograms: '{value} kg',
    daysUnit: '{value} dias',
    starMDwarf: 'Ana M',
    starSun: 'Estrela tipo G como o Sol',
    starA: 'Estrela tipo A',
    starRedGiant: 'Gigante vermelha',
    starBlueGiant: 'Gigante azul',
    structureSwarm: 'Enxame de Dyson',
    structureRing: 'Anel equatorial',
    structureShell: 'Casca rigida',
    structureStatite: 'Nuvem de espelhos estaticos',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador de Captura de Energia da Esfera de Dyson',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma esfera de Dyson nao e apenas uma imagem de ficcao cientifica de uma estrela dentro de uma casca. E uma familia de conceitos possiveis de megaestrutura para intercetar a luminosidade estelar: enxames de satelites, aneis equatoriais, nuvens finas de espelhos e a famosa mas problematica casca rigida. Este simulador transforma essas ideias em numeros para que voce possa comparar como o tipo de estrela, a temperatura do coletor, a cobertura e o design da estrutura mudam o orcamento energetico.',
    },
    {
      type: 'paragraph',
      html: 'A calculadora estima a potencia capturada, o raio termico orbital, a area do coletor, o periodo orbital, a massa de material e a cobertura necessaria para um alvo de escala Kardashev escolhido. Foi construida para estudantes, construtores de mundos, comunicadores cientificos e qualquer pessoa que tente entender por que as civilizacoes Tipo II sao dificeis: o desafio nao e apenas a potencia, mas a area, o calor, a mineracao, a estabilidade e a logistica orbital.',
    },
    {
      type: 'title',
      text: 'Como o raio de Dyson e estimado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O raio otimo e calculado a partir da luminosidade estelar e da temperatura de operacao do coletor. Um coletor perto de uma estrela brilhante recebe um fluxo intenso e deve funcionar quente ou rejeitar enormes quantidades de calor. Mover-se para fora reduz o estresse termico, mas a area do coletor necessaria cresce com o quadrado da distancia. Esta compensacao explica por que a mesma fracao de cobertura pode ser modesta em torno de uma ana M fraca e enorme em torno de uma gigante azul.',
    },
    {
      type: 'title',
      text: 'Enxame de Dyson, Anel, Casca e Nuvem de Estaticos Comparados',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Enxame de Dyson:</strong> muitos coletores orbitais independentes. E a arquitetura em larga escala mais viavel porque pode ser construida gradualmente e nao requer uma casca estelar rigida.',
        '<strong>Anel equatorial:</strong> uma faixa de coletores mais estreita com menor eficiencia de cobertura. E mais facil de imaginar como primeira megaestrutura, mas nao pode capturar a producao estelar completa sem se tornar um enxame mais amplo.',
        '<strong>Casca rigida:</strong> iconicamente visual mas mecanicamente desfavoravel. Uma casca em torno de uma estrela tem graves problemas de estabilidade e material, entao o simulador atribui alta massa e baixa estabilidade.',
        '<strong>Nuvem de espelhos estaticos:</strong> refletores ultraleves mantidos parcialmente pela pressao de radiacao. Reduz a demanda de material mas tem menor tolerancia termica e exigencias de controle rigorosas.',
      ],
    },
    {
      type: 'title',
      text: 'Cobertura necessaria para a escala Kardashev',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A escala Kardashev expressa o uso de energia da civilizacao logaritmicamente. Nesta ferramenta, os watts capturados sao convertidos numa classificacao K usando K = (log10(P) - 6) / 10. Um enxame de Dyson parcial em torno do Sol pode exceder o uso atual de energia humana em muitas ordens de grandeza muito antes de atingir o status completo de Tipo II. O resultado da cobertura alvo mostra a fracao de luminosidade estelar que deve ser intercetada para o objetivo selecionado.',
    },
    {
      type: 'table',
      headers: ['Escolha de design', 'Principal vantagem', 'Principal gargalo'],
      rows: [
        ['Enxame de Dyson', 'Construivel em etapas com orbitas independentes', 'Controle de trafego e transmissao de energia'],
        ['Anel equatorial', 'Area inicial menor e geometria mais simples', 'Cobertura limitada'],
        ['Casca rigida', 'Intercecao maxima num diagrama simples', 'Instabilidade estrutural e massa enorme'],
        ['Nuvem de estaticos', 'Densidade superficial muito baixa', 'Mantencao de estacao precisa e limites termicos'],
      ],
    },
    {
      type: 'title',
      text: 'Massa de material e verificacao realista de mineracao',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A estimativa de material multiplica a area do coletor por uma densidade superficial assumida e um fator de estabilidade de design. Relata intencionalmente a massa em massas de Mercurio quando o numero se torna astronomico, porque muitas discussoes sobre enxames de Dyson imaginam desmantelar pequenos planetas ou asteroides para materia prima. Mesmo coletores finos tornam-se massivos quando espalhados por escalas de unidades astronomicas.',
    },
    {
      type: 'paragraph',
      html: 'Use o resultado como um guia de ordem de grandeza em vez de um projeto. A verdadeira engenharia de megaestruturas precisaria de modelos de dano por radiacao, ciclos termicos, evitacao de colisoes, controlo de atitude, transmissao de energia, rendimento de fabricacao e evolucao orbital a longo prazo. O valor do simulador e que torna visiveis as primeiras restricoes imediatamente.',
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
