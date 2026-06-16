import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatura-linia-czasu';
const description = 'Poznaj historie srednich temperatur Ziemi w epokach geologicznych.';
const title = 'Linia Czasu Srednich Temperatur Planety';

const howTo = [
  {
    name: 'Wybierz ere',
    text: 'Kliknij naciecie na podzialce.',
  },
  {
    name: 'Sprawdz temperature',
    text: 'Odczytaj globalna srednia temperature.',
  },
  {
    name: 'Obserwuj planete',
    text: 'Obserwuj, jak plotno reaguje na stan termiczny.',
  },
];

const faq = [
  {
    question: 'Czy Ziemia byla w przeszlosci cieplejsza niz dzis?',
    answer: 'Tak, w epokach takich jak mezozoik srednie temperatury byly o 10-15 stopni wyzsze.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Linia Czasu Temperatur Ziemi',
    sub: 'Poznaj epoki klimatyczne Ziemi',
    ageLabel: 'Wiek:',
    tempLabel: 'Srednia Temperatura:',
    selectPrompt: 'Wybierz okres geologiczny.',
    epoch_archean_name: 'Archaik',
    epoch_archean_age: '4,0 do 2,5 miliarda lat temu',
    epoch_archean_desc: 'Ekstremalnie goraca Ziemia z atmosfera bogata w metan.',
    epoch_proterozoic_name: 'Proterozoik',
    epoch_proterozoic_age: '2,5 miliarda do 541 milionow lat temu',
    epoch_proterozoic_desc: 'Wzrost tlenu wywoluje zlodowacenie huronskie.',
    epoch_paleozoic_name: 'Paleozoik',
    epoch_paleozoic_age: '541 do 252 milionow lat temu',
    epoch_paleozoic_desc: 'Eksplozja zycia w oceanach i wyjscie na lad.',
    epoch_mesozoic_name: 'Mezozoik',
    epoch_mesozoic_age: '252 do 66 milionow lat temu',
    epoch_mesozoic_desc: 'Era dinozaurow w warunkach cieplarnianych.',
    epoch_cenozoic_name: 'Kenozoik',
    epoch_cenozoic_age: '66 milionow lat temu do dzis',
    epoch_cenozoic_desc: 'Stopniowe ochlodzenie i zlodowacenia czwartorzedu.',
    epoch_anthropocene_name: 'Antropocen',
    epoch_anthropocene_age: 'Obecnie i w przyszlosci',
    epoch_anthropocene_desc: 'Szybkie ocieplenie wywolane emisja gazow.',
  },
  seo: [
    {
      type: 'title',
      text: 'KLIMATOLOGIA: Geologiczna historia temperatury Ziemi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Klimat Ziemi nieustannie zmienial sie w ciagu jej 4,5 miliarda lat historii, oscylujac miedzy stanami zlodowacenia i cieplarnianymi. Zmiany te sa determinowane przez obieg wegla i ruchy plyt tektonicznych.',
    },
    {
      type: 'title',
      text: 'Epoki cieplarniane: Klimat mezozoiku i paleozoiku',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podczas ery mezozoicznej, epoki dinozaurow, Ziemia doswiadczyla skrajnych warunkow cieplarnianych. Srednie globalne temperatury osiagnely 22 stopnie.',
    },
    {
      type: 'title',
      text: 'Stany zlodowacenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Z kolei Ziemia kilkakrotnie wchodzila w mrozne stany zlodowacenia. Podczas eonu proterozoicznego wietrzenie chemiczne obnizylo poziom CO2, wywolujac globalne zlodowacenie znane jako Ziemia Sniezka.',
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
