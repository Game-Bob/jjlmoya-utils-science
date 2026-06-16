import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-inflacji-kosmicznej';
const description = 'Oblicz wykladnicza ekspansje wczesnego wszechswiata podczas epoki inflacji kosmicznej.';
const title = 'Kalkulator Inflacji Kosmicznej: Ekspansja Wczesnego Wszechswiata';

const howTo = [
  {
    name: 'Wybierz wartosci',
    text: 'Przeciagnij suwaki aby zobaczyc wyniki.',
  },
  {
    name: 'Porownaj czynniki skali',
    text: 'Zobacz o ile rzedow wielkosci rozszerzyla sie przestrzeg.',
  },
  {
    name: 'Analizuj dynamiczne znieksztalcenie',
    text: 'Plotno pokazuje ekspansje przestrzeni.',
  },
];

const faq = [
  {
    question: 'Co to jest inflacja kosmiczna?',
    answer: 'Okres szybkiej wykladniczej ekspansji przestrzeni we wczesnym wszechswiecie.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator Inflacji Kosmicznej',
    efoldsLabel: 'Liczba e-folds (N)',
    energyLabel: 'Poczatkowa Skala Energii (GeV)',
    scaleFactorResult: 'Wzrost Czynnika Skali',
    reheatingTempResult: 'Szacowana Temperatura Ponownego Podgrzania',
    chartTitle: 'Znieksztalcenie Czasoprzestrzeni',
    presetGuth: 'Standardowa (Guth)',
    presetChaotic: 'Chaotyczna',
    presetExtreme: 'Skrajne Granice',
    efoldsTooltip: 'Typowe modele przewiduja miedzy 50 a 60 e-folds.',
    energyTooltip: 'Skala GUT to okolo 10^16 GeV.',
    scaleFactorTooltip: 'Reprezentuje calkowity czynnik ekspansji.',
    reheatingTooltip: 'Temperatura pod koniec inflacji.',
    analogyInsuff: 'Umiarkowana inflacja. Ta ekspansja jest niewystarczajaca.',
    analogyProton: 'Wszechswiat rozszerzyl sie od rozmiarow protonu do rozmiarow galaktyki w ulamku sekundy.',
    analogyObservable: 'Wszechswiat rozszerzyl sie od skali subatomowej do rozmiarow wiekszych niz obserwowalny wszechswiat w 10^-32 sekundy.',
  },
  seo: [
    {
      type: 'title',
      text: 'KOSMOLOGIA: Zrozumienie teorii inflacji kosmicznej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inflacja kosmiczna to kamien milowy wspolczesnej kosmologii. Opisuje krotki, niezwykle szybki okres wykladniczej ekspansji, ktory mial miejsce okolo 10^-36 sekundy po Wielkim Wybuchu.',
    },
    {
      type: 'title',
      text: 'Wyjasnienie problemu horyzontu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Problem horyzontu wynika z jednolitej temperatury kosmicznego mikrofalowego promieniowania tla. Bez inflacji odlegle obszary nie mialyby czasu na osiagniecie rownowagi termicznej.',
    },
    {
      type: 'title',
      text: 'Problem plaskosci i geometria przestrzeni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Problem plaskosci dotyczy zakrzywienia przestrzennego wszechswiata. Inflacja rozciagnela zakrzywienie przestrzeni tak, ze wydaje sie ona plaska.',
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
