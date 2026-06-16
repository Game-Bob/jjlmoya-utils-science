import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-inflacion-cosmica';
const description = 'Calcula la expansion exponencial del universo primitivo durante la epoca de inflacion cosmica.';
const title = 'Calculadora de Inflacion Cosmica: Expansion del Universo Primitivo';

const howTo = [
  {
    name: 'Seleccionar valores',
    text: 'Arrastra los deslizadores para ver los resultados.',
  },
  {
    name: 'Comparar factores de escala',
    text: 'Observa por cuantos ordenes de magnitud se ha expandido el espacio.',
  },
  {
    name: 'Analizar distorsion dinamica',
    text: 'El lienzo muestra la expansion del espacio.',
  },
];

const faq = [
  {
    question: 'Que es la inflacion cosmica?',
    answer: 'Un periodo de expansion exponencial rapida del espacio en el universo primitivo.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculadora de Inflacion Cosmica',
    efoldsLabel: 'Numero de e-folds (N)',
    energyLabel: 'Escala de Energia Inicial (GeV)',
    scaleFactorResult: 'Crecimiento del Factor de Escala',
    reheatingTempResult: 'Temperatura de Recalentamiento Estimada',
    chartTitle: 'Distorsion del Tejido Espacio-Temporal',
    presetGuth: 'Estandar (Guth)',
    presetChaotic: 'Caotica',
    presetExtreme: 'Limites Extremos',
    efoldsTooltip: 'Los modelos tipicos predicen entre 50 y 60 e-folds.',
    energyTooltip: 'La escala GUT esta alrededor de 10^16 GeV.',
    scaleFactorTooltip: 'Representa el factor de expansion total.',
    reheatingTooltip: 'La temperatura al final de la inflacion.',
    analogyInsuff: 'Inflacion moderada. Esta expansion es insuficiente.',
    analogyProton: 'El universo se expandio desde el tamano de un proton al de una galaxia en una fraccion de segundo.',
    analogyObservable: 'El universo se expandio desde una escala subatomica a una mayor que el universo observable en 10^-32 segundos.',
  },
  seo: [
    {
      type: 'title',
      text: 'COSMOLOGIA: Entendiendo la Teoria de la Inflacion Cosmica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La inflacion cosmica es una piedra angular de la cosmologia moderna. Describe un periodo breve y extremadamente rapido de expansion exponencial que ocurrio aproximadamente 10^-36 segundos despues del Big Bang. Durante esta epoca, el tejido del espacio-tiempo se expandio en un factor de al menos 10^26.',
    },
    {
      type: 'title',
      text: 'El Problema del Horizonte Explicado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El problema del horizonte surge de la temperatura uniforme de la radiacion del Fondo Cosmico de Microondas. Sin la inflacion, las regiones distantes del universo primitivo no habrian tenido tiempo de interactuar para alcanzar el equilibrio termico.',
    },
    {
      type: 'title',
      text: 'El Problema de la Planitud y la Geometria Espacial',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El problema de la planitud se refiere a la curvatura espacial del universo. Las observaciones muestran que la densidad de energia del universo esta notablemente cerca de la densidad critica requerida para un espacio plano.',
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
