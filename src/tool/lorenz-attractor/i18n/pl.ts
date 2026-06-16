const slug = 'atraktor-lorenza';
const title = 'Symulator Chaosu Atraktora Lorenza: Efekt Motyla w 3D';
const description = 'Badaj teorie chaosu z interaktywna symulacja 3D atraktora Lorenza. Zobacz efekt motyla.';

const howTo = [
  {
    "name": "Obracaj widok",
    "text": "Kliknij i przeciagnij na obszarze 3D, aby obrocic atraktor."
  },
  {
    "name": "Dostosuj suwaki",
    "text": "Zmieniaj parametry Sigma, Rho i Beta, aby wplynac na zachowanie ukladu."
  },
  {
    "name": "Obserwuj dywergencje",
    "text": "Zobacz, jak odleglosc miedzy dwiema trajektoriami rosnie wykladniczo."
  },
  {
    "name": "Pauza i reset",
    "text": "Uzyj przyciskow kontrolnych, aby zatrzymac lub zresetowac symulacje."
  }
];

const faq = [
  {
    "question": "Co to jest Atraktor Lorenza?",
    "answer": "Atraktor Lorenza to zbior chaotycznych rozwiazan ukladu rownan Lorenza."
  },
  {
    "question": "Co to jest Efekt Motyla?",
    "answer": "Wrażliwa zaleznosc ukladu od warunkow poczatkowych."
  },
  {
    "question": "Co oznaczaja parametry?",
    "answer": "Sigma to liczba Prandtla, Rho to liczba Rayleigha, a Beta to stosunek geometryczny."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Skopiowano",
  "noHistory": "Brak historii",
  "load": "Wczytaj",
  "delete": "Usun",
  "title": "Atraktor Lorenza",
  "subTitle": "Chaos Deterministyczny",
  "parameterControls": "Parametry Ukladu",
  "simulationSpeed": "Predkosc (dt)",
  "initialPerturbation": "Zaburzenie Poczatkowe (dx)",
  "trajectories": "Trajektorie",
  "distance": "Odleglosc Dywergencji",
  "exponentialGrowth": "Dywergencja Wykladnicza",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Wspolrzedne",
  "divergenceExplanation": "Wykres dywergencji pokazuje odleglosc euklidesowa miedzy dwiema trajektoriami w czasie."
},
  seo: [
  {
    "type": "title",
    "text": "Chaos Deterministyczny: Zrozumiec Rownania Lorenza",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Uklad Lorenza to historyczne sformulowanie w dziedzinie dynamiki nieliniowej."
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
