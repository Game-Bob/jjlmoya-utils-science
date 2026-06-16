import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmisk-inflation-kalkylator';
const description = 'Berakna den exponentiella expansionen av det tidiga universum under den kosmiska inflationspoken.';
const title = 'Kosmisk Inflationskalkylator: Tidig Universumexpansion';

const howTo = [
  {
    name: 'Valj varden',
    text: 'Dra i skjutreglagen for att se resultaten.',
  },
  {
    name: 'Jampfor skalfaktorer',
    text: 'Se hur manga storleksordningar rymden har expanderat.',
  },
  {
    name: 'Analysera dynamisk distorsion',
    text: 'Duken visar rymdens expansion.',
  },
];

const faq = [
  {
    question: 'Vad ar kosmisk inflation?',
    answer: 'En period av snabb exponentiell expansion av rymden i det tidiga universum.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kosmisk Inflationskalkylator',
    efoldsLabel: 'Antal e-folds (N)',
    energyLabel: 'Initial Energiskala (GeV)',
    scaleFactorResult: 'Skalfaktortillvaxt',
    reheatingTempResult: 'Uppskattad Ateruppvarmningstemperatur',
    chartTitle: 'Distorsion av Rymd-Tidvaven',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Kaotisk',
    presetExtreme: 'Extrema Granser',
    efoldsTooltip: 'Typiska modeller forutser mellan 50 och 60 e-folds.',
    energyTooltip: 'GUT-skalan ar runt 10^16 GeV.',
    scaleFactorTooltip: 'Representerar den totala expansionsfaktorn.',
    reheatingTooltip: 'Temperaturen vid slutet av inflationen.',
    analogyInsuff: 'Måttlig inflation. Denna expansion är otillräcklig.',
    analogyProton: 'Universum expanderade från ett protons storlek till en galaxs storlek på en bråkdel av en sekund.',
    analogyObservable: 'Universum expanderade från en subatomär skala till större än det observerbara universum på 10^-32 sekunder.',
  },
  seo: [
    {
      type: 'title',
      text: 'KOSMOLOGI: Att forsta teorin om kosmisk inflation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kosmisk inflation ar en hornsten i modern kosmologi. Den beskriver en kort, extremt snabb period av exponentiell expansion som intraffade cirka 10^-36 sekunder efter Big Bang.',
    },
    {
      type: 'title',
      text: 'Horisontproblemet forklarat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Horisontproblemet beror pa den enhetliga temperaturen hos den kosmiska bakgrundsstralningen. Utan inflation hade avlagsna omraden inte haft tid att na termisk jamvikt.',
    },
    {
      type: 'title',
      text: 'Platthetsproblemet och rymdgeometri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Platthetsproblemet ror universums rumsliga krokning. Inflation strackte ut rymdens krokning sa att den framstar som platt.',
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
