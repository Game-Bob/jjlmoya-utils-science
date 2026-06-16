import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatur-tidslinje';
const description = 'Utforska jordens genomsnittliga temperaturhistoria genom geologiska epoker.';
const title = 'Planetens Genomsnittliga Temperaturtidslinje';

const howTo = [
  {
    name: 'Valj en epok',
    text: 'Klicka pa ett streck pa skalan.',
  },
  {
    name: 'Kontrollera temperaturen',
    text: 'Las av den globala medeltemperaturen.',
  },
  {
    name: 'Observera planeten',
    text: 'Se hur duken reagerar pa det termiska tillstandet.',
  },
];

const faq = [
  {
    question: 'Var jorden varmare forr an idag?',
    answer: 'Ja, under perioder som mesozoikum var medeltemperaturerna 10 till 15 grader varmare.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Jordens Temperaturtidslinje',
    sub: 'Utforska jordens geologiska klimatperioder',
    ageLabel: 'Ålder:',
    tempLabel: 'Genomsnittstemperatur:',
    selectPrompt: 'Välj en geologisk period.',
    epoch_archean_name: 'Arkeikum',
    epoch_archean_age: '4,0 till 2,5 miljarder ar sedan',
    epoch_archean_desc: 'Extrem het jord med metanrik atmosfar.',
    epoch_proterozoic_name: 'Proterozoikum',
    epoch_proterozoic_age: '2,5 miljarder till 541 miljoner ar sedan',
    epoch_proterozoic_desc: 'Syrgashojning orsakar Huronian-nedisningen.',
    epoch_paleozoic_name: 'Paleozoikum',
    epoch_paleozoic_age: '541 till 252 miljoner ar sedan',
    epoch_paleozoic_desc: 'Livsexplosion i haven och kolonisation av land.',
    epoch_mesozoic_name: 'Mesozoikum',
    epoch_mesozoic_age: '252 till 66 miljoner ar sedan',
    epoch_mesozoic_desc: 'Dinosauriernas tidsalder under vaxthusforhallanden.',
    epoch_cenozoic_name: 'Kenozoikum',
    epoch_cenozoic_age: '66 miljoner ar sedan till nutid',
    epoch_cenozoic_desc: 'Gradvis avkylning mot kvartara istider.',
    epoch_anthropocene_name: 'Antropocen',
    epoch_anthropocene_age: 'Nutid och framtid',
    epoch_anthropocene_desc: 'Snabb uppvarmning drivet av vaxthusgaser.',
  },
  seo: [
    {
      type: 'title',
      text: 'KLIMATOLOGI: Jordens geologiska temperaturhistoria',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jordens klimat har standigt forandrats under dess 4,5 miljarder ar av historia, och pendlat mellan is- och vaxthusstadier. Dessa forandringar styrs av koldioxidcykler och kontinentaldrift.',
    },
    {
      type: 'title',
      text: 'Vaxthusepokerna: Mesozoikum und Paleozoikum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Under mesozoikum, dinosauriernas tidsalder, upplevde jorden extrema vaxthusforhallanden. Den globala medeltemperaturen nadde 22 grader.',
    },
    {
      type: 'title',
      text: 'Istidstillstand',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I kontrast gick jorden in i svara istider flera ganger. Under proterozoikum minskade den kemiska vittringen koldioxiden, vilket ledde till en global nedisning.',
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
