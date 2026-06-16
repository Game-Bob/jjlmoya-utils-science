import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculateur-inflation-cosmique';
const description = 'Calculez l expansion exponentielle de l univers primitif pendant l epoque de l inflation cosmique.';
const title = 'Calculateur d Inflation Cosmique: Expansion de l Univers Primitif';

const howTo = [
  {
    name: 'Selectionner les valeurs',
    text: 'Faites glisser les curseurs pour voir les resultats.',
  },
  {
    name: 'Comparer les facteurs d echelle',
    text: 'Observez de combien d ordres de grandeur l espace s est etendu.',
  },
  {
    name: 'Analyser la distorsion dynamique',
    text: 'Le canevas montre l expansion de l espace.',
  },
];

const faq = [
  {
    question: 'Qu est-ce que l inflation cosmique?',
    answer: 'Une periode d expansion exponentielle rapide du premier univers.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculateur d Inflation Cosmique',
    efoldsLabel: 'Nombre d e-folds (N)',
    energyLabel: 'Echelle d Energie Initiale (GeV)',
    scaleFactorResult: 'Croissance du Facteur d Echelle',
    reheatingTempResult: 'Temperature de Rechauffement Estimee',
    chartTitle: 'Distorsion du Tissu Espace-Temps',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Chaotique',
    presetExtreme: 'Limites Extremes',
    efoldsTooltip: 'Les modeles typiques predisent entre 50 et 60 e-folds.',
    energyTooltip: 'L echelle GUT est d environ 10^16 GeV.',
    scaleFactorTooltip: 'Represente le facteur d expansion total.',
    reheatingTooltip: 'La temperature a la fin de l inflation.',
    analogyInsuff: 'Inflation moderee. Cette expansion est insuffisante.',
    analogyProton: 'L univers s est étendu de la taille d un proton a celle d une galaxie en une fraction de seconde.',
    analogyObservable: 'L univers s est étendu d une echelle subatomique a une taille superieure a l univers observable en 10^-32 secondes.',
  },
  seo: [
    {
      type: 'title',
      text: 'COSMOLOGIE: Comprendre la theorie de l inflation cosmique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L inflation cosmique est une pierre angulaire de la cosmologie moderne. Elle decrit une periode breve et extremement rapide d expansion exponentielle qui s est produite environ 10^-36 secondes apres le Big Bang.',
    },
    {
      type: 'title',
      text: 'Le probleme de l horizon explique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le probleme de l horizon provient de la temperature uniforme du rayonnement de fond cosmologique dans le ciel. Sans l inflation, les regions eloignees n auraient pas eu le temps d echanger de la chaleur.',
    },
    {
      type: 'title',
      text: 'Le probleme de la platitude',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le probleme de la platitude concerne la courbure spatiale de l univers. L inflation a etire la courbure de l espace pour le rendre plat.',
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
