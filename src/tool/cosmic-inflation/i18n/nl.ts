import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmische-inflatie-calculator';
const description = 'Bereken de exponentiele uitdijing van het vroege heelal tijdens het kosmische inflatietijdperk.';
const title = 'Kosmische Inflatie Calculator: Uitdijing Vroege Heelal';

const howTo = [
  {
    name: 'Selecteer waarden',
    text: 'Sleep de schuifregelaars om resultaten te zien.',
  },
  {
    name: 'Vergelijk schaalfactoren',
    text: 'Bekijk met hoeveel orde van grootte de ruimte is uitgebreid.',
  },
  {
    name: 'Analyseer dynamische vervorming',
    text: 'Het canvas toont de expansie van de ruimte.',
  },
];

const faq = [
  {
    question: 'Wat is kosmische inflatie?',
    answer: 'Een periode van snelle exponentiele uitdijing van de ruimte in het vroege heelal.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kosmische Inflatie Calculator',
    efoldsLabel: 'Aantal e-folds (N)',
    energyLabel: 'Initiele Energieschaal (GeV)',
    scaleFactorResult: 'Groei van de Schaalfactor',
    reheatingTempResult: 'Geschatte Herverwarmingstemperatuur',
    chartTitle: 'Vervorming van het Ruimte-Tijdweefsel',
    presetGuth: 'Standaard (Guth)',
    presetChaotic: 'Chaotisch',
    presetExtreme: 'Extreme Limieten',
    efoldsTooltip: 'Typische modellen voorspellen tussen 50 en 60 e-folds.',
    energyTooltip: 'De GUT-schaal ligt rond 10^16 GeV.',
    scaleFactorTooltip: 'Vertegenwoordigt de totale expansiefactor.',
    reheatingTooltip: 'De temperatuur aan het einde van de inflatie.',
    analogyInsuff: 'Matige inflatie. Deze expansie is onvoldoende.',
    analogyProton: 'Het heelal dijde in een fractie van een seconde uit van de grootte van een proton naar de grootte van een melkwegstelsel.',
    analogyObservable: 'Het heelal dijde in 10^-32 seconden uit van een subatomaire schaal naar groter dan het waarneembare heelal.',
  },
  seo: [
    {
      type: 'title',
      text: 'KOSMOLOGIE: De theorie van kosmische inflatie begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kosmische inflatie is een hoeksteen van de moderne kosmologie. Het beschrijft een korte, extreem snelle periode van exponentiele expansie die ongeveer 10^-36 seconden na de oerknal plaatsvond.',
    },
    {
      type: 'title',
      text: 'Het horizonprobleem uitgelegd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het horizonprobleem vloeit voort uit de uniforme temperatuur van de kosmische achtergrondstraling. Zonder inflatie hadden verre gebieden geen tijd om thermisch evenwicht te bereiken.',
    },
    {
      type: 'title',
      text: 'Het vlakheidsprobleem en ruimtelijke geometrie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het vlakheidsprobleem betreft de ruimtelijke kromming van het heelal. Inflatie rekte de kromming van de ruimte uit tot deze vlak leek.',
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
