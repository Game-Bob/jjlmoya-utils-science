const slug = 'attraktor-lorenca';
const title = 'Симулятор хаоса аттрактора Лоренца: эффект бабочки в 3D';
const description = 'Исследуйте теорию хаоса с помощью этого интерактивного 3D-симулятора аттрактора Лоренца.';

const howTo = [
  {
    "name": "Вращение холста",
    "text": "Нажмите и перетащите в 3D-окне, чтобы повернуть аттрактор."
  },
  {
    "name": "Настройка слайдеров",
    "text": "Изменяйте параметры Sigma, Rho и Beta для наблюдения за хаосом."
  },
  {
    "name": "Наблюдение расхождения",
    "text": "Следите за экспоненциальным ростом расстояния между траекториями."
  },
  {
    "name": "Пауза и сброс",
    "text": "Используйте кнопки управления для паузы или сброса параметров."
  }
];

const faq = [
  {
    "question": "Что такое аттрактор Лоренца?",
    "answer": "Аттрактор Лоренца - это хаотическое решение системы дифференциальных уравнений Лоренца."
  },
  {
    "question": "Что такое эффект бабочки?",
    "answer": "Чувствительная зависимость нелинейной системы от начальных условий."
  },
  {
    "question": "Что означают параметры?",
    "answer": "Sigma - число Прандтля, Rho - число Рэлея, Beta - геометрический параметр."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Скопировано",
  "noHistory": "Нет истории",
  "load": "Загрузить",
  "delete": "Удалить",
  "title": "Аттрактор Лоренца",
  "subTitle": "Детерминированный хаос",
  "parameterControls": "Параметры системы",
  "simulationSpeed": "Скорость (dt)",
  "initialPerturbation": "Начальное возмущение (dx)",
  "trajectories": "Траектории",
  "distance": "Расстояние расхождения",
  "exponentialGrowth": "Экспоненциальное расхождение",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Координаты",
  "divergenceExplanation": "График расхождения показывает евклидово расстояние между двумя траекториями во времени."
},
  seo: [
  {
    "type": "title",
    "text": "Детерминированный хаос: уравнения Лоренца",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Система Лоренца - это классическая модель нелинейной динамики и теории хаоса."
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
