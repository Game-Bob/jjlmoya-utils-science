import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-inflacao-cosmica';
const description = 'Calcule a expansao exponencial do universo primordial durante a epoca da inflacao cosmica.';
const title = 'Calculadora de Inflacao Cosmica: Expansao do Universo Primordial';

const howTo = [
  {
    name: 'Selecionar valores',
    text: 'Arraste os controles deslizantes para ver os resultados.',
  },
  {
    name: 'Comparar fatores de escala',
    text: 'Veja por quantas ordens de magnitude o espaco se expandiu.',
  },
  {
    name: 'Analisar a distorcao dinamica',
    text: 'A tela mostra a expansao do espaco.',
  },
];

const faq = [
  {
    question: 'O que e a inflacao cosmica?',
    answer: 'Um periodo de rapida expansao exponencial do espaco no universo primordial.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculadora de Inflacao Cosmica',
    efoldsLabel: 'Numero de e-folds (N)',
    energyLabel: 'Escala de Energia Inicial (GeV)',
    scaleFactorResult: 'Crescimento do Fator de Escala',
    reheatingTempResult: 'Temperatura de Reaquecimento Estimada',
    chartTitle: 'Distorcao do Tecido Espaco-Tempo',
    presetGuth: 'Padrao (Guth)',
    presetChaotic: 'Caotica',
    presetExtreme: 'Limites Extremos',
    efoldsTooltip: 'Modelos tipicos preveem entre 50 e 60 e-folds.',
    energyTooltip: 'A escala GUT e de cerca de 10^16 GeV.',
    scaleFactorTooltip: 'Representa o fator de expansao total.',
    reheatingTooltip: 'A temperatura no final da inflacao.',
    analogyInsuff: 'Inflacao moderada. Esta expansao e insuficiente.',
    analogyProton: 'O universo expandiu-se do tamanho de um proton para o de uma galaxia numa fracao de segundo.',
    analogyObservable: 'O universo expandiu-se de uma escala subatomica para maior do que o universo observavel em 10^-32 segundos.',
  },
  seo: [
    {
      type: 'title',
      text: 'COSMOLOGIA: Compreendendo a Teoria da Inflacao Cosmica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A inflacao cosmica e um marco da cosmologia moderna. Ela descreve um breve e extremamente rapido periodo de expansao exponencial que ocorreu cerca de 10^-36 segundos apos o Big Bang.',
    },
    {
      type: 'title',
      text: 'O Problema do Horizonte Explicado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O problema do horizonte surge da temperatura uniforme da radiacao cosmica de fundo. Sem a inflacao, regioes distantes nao teriam tido tempo de interagir.',
    },
    {
      type: 'title',
      text: 'O Problema da Plana e Geometria Espacial',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O problema da planitude refere-se a curvatura espacial do universo. A inflacao esticou a curvatura do espaco para torna-la plana.',
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
