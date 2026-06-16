import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatur-zeitleiste';
const description = 'Erkunden Sie die durchschnittliche Temperaturgeschichte der Erde ueber geologische Epochen hinweg.';
const title = 'Durchschnittliche Temperaturzeitleiste der Erde';

const howTo = [
  {
    name: 'Epoche auswaehlen',
    text: 'Klicken Sie auf eine Kerbe auf dem Skalenlineal.',
  },
  {
    name: 'Temperatur pruefen',
    text: 'Lesen Sie die globale Durchschnittstemperatur ab.',
  },
  {
    name: 'Planet beobachten',
    text: 'Beobachten Sie, wie die Leinwand auf den thermischen Zustand reagiert.',
  },
];

const faq = [
  {
    question: 'War die Erde frueher waermer als heute?',
    answer: 'Ja, waehrend des Mesozoikums war die Erde deutlich waermer.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Temperaturzeitleiste der Erde',
    sub: 'Erkunden Sie die geologischen Klimaepochen der Erde',
    ageLabel: 'Alter:',
    tempLabel: 'Durchschnittstemperatur:',
    selectPrompt: 'Waehlen Sie eine geologische Periode aus.',
    epoch_archean_name: 'Archaeikum',
    epoch_archean_age: '4,0 bis 2,5 Milliarden Jahre vor heute',
    epoch_archean_desc: 'Extrem heisse Erde mit methan- und kohlendioxidreicher Atmosphaere.',
    epoch_proterozoic_name: 'Proterozoikum',
    epoch_proterozoic_age: '2,5 Milliarden bis 541 Millionen Jahre vor heute',
    epoch_proterozoic_desc: 'Sauerstoffanstieg verursacht Huroni-Vereisung.',
    epoch_paleozoic_name: 'Palaeozoikum',
    epoch_paleozoic_age: '541 bis 252 Millionen Jahre vor heute',
    epoch_paleozoic_desc: 'Lebensexplosion in Ozeanen und Besiedlung des Landes.',
    epoch_mesozoic_name: 'Mesozoikum',
    epoch_mesozoic_age: '252 bis 66 Millionen Jahre vor heute',
    epoch_mesozoic_desc: 'Zeitalter der Dinosaurier. Weltweite Treibhausbedingungen.',
    epoch_cenozoic_name: 'Kaenozoikum',
    epoch_cenozoic_age: '66 Millionen Jahre vor heute bis Gegenwart',
    epoch_cenozoic_desc: 'Allmaehliche Abkuehlung bis zu quartaeren Eiszeiten.',
    epoch_anthropocene_name: 'Anthropozean',
    epoch_anthropocene_age: 'Gegenwart und Zukunft',
    epoch_anthropocene_desc: 'Schnelle Erwaermung durch Treibhausgasemissionen.',
  },
  seo: [
    {
      type: 'title',
      text: 'KLIMATOLOGIE: Die geologische Temperaturgeschichte der Erde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Klima der Erde hat sich im Laufe ihrer 4,5 Milliarden Jahre dauernden Geschichte staendig veraendert und schwankte zwischen Eis- und Treibhauszustaenden. Diese Verschiebungen werden durch Kohlenstoffkreislaeufe und Plattentektonik bestimmt.',
    },
    {
      type: 'title',
      text: 'Die Treibhaus-Aeren: Mesozoikum und Palaeozoikum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Waehrend des Mesozoikums, dem Zeitalter der Dinosaurier, herrschten auf der Erde extreme Treibhausbedingungen. Die globalen Durchschnittstemperaturen erreichten 22 Grad.',
    },
    {
      type: 'title',
      text: 'Die Eiszeitzustaende',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Im Gegensatz dazu erlebte das Proterozoikum schwere Vereisungen, die als Schneeball Erde bekannt sind.',
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
