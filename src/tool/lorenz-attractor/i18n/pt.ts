const slug = 'atrator-de-lorenz';
const title = 'Simulador de Caos do Atractor de Lorenz: O Efeito Borboleta em 3D';
const description = 'Explore a teoria do caos com esta simulacao interativa 3D do atractor de Lorenz. Visualize o efeito borboleta.';

const howTo = [
  {
    "name": "Rodar a tela",
    "text": "Clique e arraste no visor 3D para rotacionar o atractor."
  },
  {
    "name": "Ajustar os sliders",
    "text": "Modifique os parametros Sigma, Rho e Beta para ver a mudanca para o caos."
  },
  {
    "name": "Observar a divergencia",
    "text": "Veja como a distancia entre as duas trajectorias cresce exponencialmente."
  },
  {
    "name": "Pausar e reiniciar",
    "text": "Use os botoes para pausar a simulacao ou restaurar as configuracoes."
  }
];

const faq = [
  {
    "question": "O que e o Atractor de Lorenz?",
    "answer": "O atractor de Lorenz e um conjunto de solucoes caoticas do sistema de Lorenz."
  },
  {
    "question": "O que e o Efeito Borboleta?",
    "answer": "A sensibilidade extrema as condicoes iniciais em sistemas deterministas nao lineares."
  },
  {
    "question": "O que significam os parametros?",
    "answer": "Sigma representa o numero de Prandtl, Rho o numero de Rayleigh e Beta a relacao geometrica."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Copiado",
  "noHistory": "Sem historico",
  "load": "Carregar",
  "delete": "Eliminar",
  "title": "Atractor de Lorenz",
  "subTitle": "Caos Deterministico",
  "parameterControls": "Parametros do Sistema",
  "simulationSpeed": "Velocidade (dt)",
  "initialPerturbation": "Perturbacao Inicial (dx)",
  "trajectories": "Trajectorias",
  "distance": "Distancia de Divergencia",
  "exponentialGrowth": "Divergencia Exponencial",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Coordenadas",
  "divergenceExplanation": "O grafico de divergencia mostra a distancia euclidiana entre as duas trajectorias ao longo do tempo."
},
  seo: [
    { type: 'title', text: "Caos Deterministico: Compreender as Equacoes de Lorenz", level: 2 },
    { type: 'paragraph', html: "O sistema de Lorenz e uma formulacao historica na dinamica nao linear e na teoria do caos. Derivado originalmente em 1963 pelo meteorologista e matematico <strong>Edward Lorenz</strong>, o modelo nasceu de uma representacao simplificada da conveccao atmosferica. A sua descoberta de que estas equacoes simples e deterministicas podiam produzir um comportamento caotico complexo e nao periodico transformou a nossa compreensao dos sistemas fisicos." },
    { type: 'paragraph', html: "O sistema e definido por tres equacoes diferenciais acopladas que seguem uma coordenada no espaco de fases tridimensional ao longo do tempo:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Descreve a taxa de movimento convectivo. O parametro &sigma; (numero de Prandtl) representa a relacao entre a viscosidade do fluido e a condutividade termica.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Representa a diferenca de temperatura entre as correntes convectivas ascendentes e descendentes. &rho; (numero de Rayleigh) representa a intensidade do aquecimento convectivo.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Regista a distorcao do perfil de temperatura vertical. &beta; e a relacao de aspeto geometrico da celula convectiva.",
      ],
    },
    { type: 'title', text: "O Efeito Borboleta: Dependencia Sensivel das Condicoes Iniciais", level: 3 },
    { type: 'paragraph', html: "A caracteristica definidora dos sistemas caoticos e a sua <strong>dependencia sensivel das condicoes iniciais</strong>, popularmente conhecida como o <strong>Efeito Borboleta</strong>. Neste simulador, duas trajetorias (T1 a ciano e T2 a rosa) partem com uma separacao minima. Inicialmente percorrem praticamente o mesmo caminho. Apos um breve periodo, a diferenca e amplificada pelos termos nao lineares e os caminhos divergem completamente." },
    {
      type: 'table',
      headers: ["Parametro","Valor Padrao","Contexto Fisico","Comportamento ao Mudar"],
      rows: [
        ["&sigma; (Sigma)","10.0","Numero de Prandtl","Determina o atrito interno do fluido. Valores mais elevados aceleram a reacao das variacoes de velocidade aos gradientes de temperatura."],
        ["&rho; (Rho)","28.0","Numero de Rayleigh","Principal motor do caos. Abaixo de &rho; = 1, a origem e o unico ponto estavel. Em &rho; = 28, o sistema e totalmente caotico."],
        ["&beta; (Beta)","8/3 (2.667)","Relacao de Aspeto Geometrico","Controla a relacao largura-altura das celulas de conveccao. Modifica a escala e a velocidade de rotacao das orbitas."],
      ],
    },
    { type: 'title', text: "Espaco de Fases, Atratores Estranhos e Fractais", level: 3 },
    { type: 'paragraph', html: "Em fisica classica, as trajetorias estabilizam-se em pontos fixos ou repetem o mesmo caminho indefinidamente. O sistema de Lorenz nao faz nenhum dos dois: a trajetoria enrola-se infinitamente sem nunca se cruzar, formando um <strong>atrator estranho</strong> com geometria fractal (dimensao de Hausdorff cerca de 2,06)." },
    { type: 'title', text: "Aplicacoes da Teoria do Caos na Ciencia", level: 3 },
    { type: 'paragraph', html: "As licoes do atrator de Lorenz estendem-se muito alem da meteorologia e influenciaram muitas areas modernas:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologia:</strong> Estabeleceu os limites fundamentais da previsibilidade meteorologica, levando a metodos de previsao por conjunto.",
      "<strong>Criptografia:</strong> A natureza determinista mas imprevisivel das orbitas caoticas e usada para gerar chaves pseudo-aleatorias seguras.",
      "<strong>Cardiologia:</strong> Usada para modelar ritmos cardiacos, onde coracoes saudaveis exibem caracteristicas caoticas.",
      "<strong>Engenharia:</strong> Ajuda a projetar estruturas estaveis analisando e evitando a ressonancia caotica em pontes suspensas.",
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
