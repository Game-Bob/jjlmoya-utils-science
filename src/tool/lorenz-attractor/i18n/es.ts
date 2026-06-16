const slug = 'atractor-de-lorenz';
const title = 'Simulador del Atractor de Lorenz: El Efecto Mariposa en 3D';
const description = 'Explora la teoria del caos con esta simulacion interactiva en 3D del atractor de Lorenz. Visualiza el efecto mariposa ejecutando dos trayectorias casi de forma simultanea.';

const howTo = [
  {
    "name": "Rotar el lienzo",
    "text": "Haz clic y arrastra sobre el visor 3D para rotar el atractor y verlo desde diferentes angulos."
  },
  {
    "name": "Ajustar los deslizadores",
    "text": "Modifica los parametros Sigma, Rho y Beta para ver como el sistema transita hacia el caos."
  },
  {
    "name": "Observar la divergencia",
    "text": "Modifica la perturbacion inicial y observa como la distancia entre trayectorias crece exponencialmente."
  },
  {
    "name": "Pausar y reiniciar",
    "text": "Usa los controles para pausar la simulacion, limpiar los caminos o restaurar los valores por defecto."
  }
];

const faq = [
  {
    "question": "Que es el Atractor de Lorenz?",
    "answer": "El atractor de Lorenz es un conjunto de soluciones caoticas para el sistema de Lorenz, un sistema de tres ecuaciones diferenciales acopladas de primer orden."
  },
  {
    "question": "Que es el Efecto Mariposa?",
    "answer": "Es la dependencia sensible a las condiciones iniciales en un sistema no lineal, donde una pequena variacion inicial provoca grandes divergencias a largo plazo."
  },
  {
    "question": "Que representan Sigma, Rho y Beta?",
    "answer": "Sigma es el numero de Prandtl, Rho es el numero de Rayleigh y Beta es la relacion de aspecto geometrico del sistema."
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
  "noHistory": "Sin historial",
  "load": "Cargar",
  "delete": "Eliminar",
  "title": "Atractor de Lorenz",
  "subTitle": "Caos Determinista y Dependencia Sensible",
  "parameterControls": "Parametros del Sistema",
  "simulationSpeed": "Velocidad (dt)",
  "initialPerturbation": "Perturbacion Inicial (dx)",
  "trajectories": "Trayectorias",
  "distance": "Distancia de Divergencia",
  "exponentialGrowth": "Divergencia Exponencial",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Coordenadas",
  "divergenceExplanation": "El grafico de divergencia muestra la distancia euclidiana entre las dos trayectorias a lo largo del tiempo. Observa como aumenta exponencialmente."
},
  seo: [
  {
    "type": "title",
    "text": "Caos Determinista: Entendiendo las Ecuaciones de Lorenz",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "El sistema de Lorenz es una formulacion fundamental en la dinamica no lineal y la teoria del caos, que describe el movimiento de una particula en un espacio tridimensional."
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
