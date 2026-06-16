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
  {
    "type": "title",
    "text": "Caos Deterministico: Compreender as Equacoes de Lorenz",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "O sistema de Lorenz e uma formulacao fundamental na teoria do caos."
  }
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
