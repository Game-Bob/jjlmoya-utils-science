import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatuur-tijdlijn';
const description = 'Ontdek de geschiedenis van de gemiddelde temperatuur op aarde door de geologische tijdperken heen.';
const title = 'Gemiddelde Temperatuur Tijdlijn van de Planeet';

const howTo = [
  {
    name: 'Selecteer een tijdperk',
    text: 'Klik op een inkeping op de schaalverdeling.',
  },
  {
    name: 'Controleer temperatuur',
    text: 'Lees de wereldwijde gemiddelde temperatuur.',
  },
  {
    name: 'Observeer de planeet',
    text: 'Kijk hoe het canvas reageert op de thermische toestand.',
  },
];

const faq = [
  {
    question: 'Was de aarde in het verleden warmer dan nu?',
    answer: 'Ja, tijdens tijdperken zoals het Mesozoicum waren de temperaturen 10 tot 15 graden warmer.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Temperatuur Tijdlijn van de Aarde',
    sub: 'Ontdek de geologische klimaattijdperken van de Aarde',
    ageLabel: 'Leeftijd:',
    tempLabel: 'Gemiddelde Temperatuur:',
    selectPrompt: 'Selecteer een geologische periode.',
    epoch_archean_name: 'Archeicum',
    epoch_archean_age: '4,0 tot 2,5 miljard jaar geleden',
    epoch_archean_desc: 'Extreem hete aarde met methaanrijke atmosfeer.',
    epoch_proterozoic_name: 'Proterozoicum',
    epoch_proterozoic_age: '2,5 miljard tot 541 miljoen jaar geleden',
    epoch_proterozoic_desc: 'Zuurstofstijging veroorzaakt Huronian-ijstijd.',
    epoch_paleozoic_name: 'Paleozoicum',
    epoch_paleozoic_age: '541 tot 252 miljoen jaar geleden',
    epoch_paleozoic_desc: 'Levensexplosie in oceanen en kolonisatie van land.',
    epoch_mesozoic_name: 'Mesozoicum',
    epoch_mesozoic_age: '252 tot 66 miljoen jaar geleden',
    epoch_mesozoic_desc: 'Tijdperk van de dinosauriërs onder broeikascondities.',
    epoch_cenozoic_name: 'Cenozoicum',
    epoch_cenozoic_age: '66 miljoen jaar geleden tot heden',
    epoch_cenozoic_desc: 'Geleidelijke afkoeling leidend tot Kwartaire ijstijden.',
    epoch_anthropocene_name: 'Antropoceen',
    epoch_anthropocene_age: 'Heden en toekomst',
    epoch_anthropocene_desc: 'Snelle opwarming door uitstoot van broeikasgassen.',
  },
  seo: [
    {
      type: 'title',
      text: 'KLIMATOLOGIE: De geologische temperatuurgeschiedenis der Aarde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het klimaat op aarde is in de loop van haar 4,5 miljard jaar durende geschiedenis voortdurend veranderd, schommelend tussen ijstijden en broeikasstadia. Deze verschuivingen worden bepaald door koolstofcycli en platentektoniek.',
    },
    {
      type: 'title',
      text: 'De broeikastijdperken: Mesozoicum en Paleozoicum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tijdens het Mesozoicum, het tijdperk van de dinosauriers, heersten er op aarde extreme broeikasomstandigkeiten. De gemiddelde wereldwijde temperatuur bereikte 22 graden.',
    },
    {
      type: 'title',
      text: 'De ijstijden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling hiermee maakte het Proterozoicum zware ijstijden door, bekend als Sneeuwbalaarde.',
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
