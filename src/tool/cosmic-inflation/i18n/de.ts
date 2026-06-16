import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmische-inflation-rechner';
const description = 'Berechnen Sie die exponentielle Ausdehnung des fruehen Universums waehrend der kosmischen Inflationsphase.';
const title = 'Kosmischer Inflationsrechner: Ausdehnung des fruehen Universums';

const howTo = [
  {
    name: 'Werte auswaehlen',
    text: 'Ziehen Sie die Schieberegler, um Ergebnisse anzuzeigen.',
  },
  {
    name: 'Skalenfaktoren vergleichen',
    text: 'Sehen Sie, um wie viele Groessenordnungen sich der Raum ausgedehnt hat.',
  },
  {
    name: 'Dynamische Verzerrung analysieren',
    text: 'Die Leinwand zeigt die Expansion des Raumes.',
  },
];

const faq = [
  {
    question: 'Was ist kosmische Inflation?',
    answer: 'Eine Phase extrem schneller Expansion des fruehen Universums.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kosmischer Inflationsrechner',
    efoldsLabel: 'Anzahl der E-Folds (N)',
    energyLabel: 'Anfaengliche Energieskala (GeV)',
    scaleFactorResult: 'Skalenfaktor-Wachstum',
    reheatingTempResult: 'Geschaetzte Reheating-Temperatur',
    chartTitle: 'Verzerrung des Raum-Zeit-Gewebes',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Chaotisch',
    presetExtreme: 'Extreme Grenzen',
    efoldsTooltip: 'Typische Modelle sagen zwischen 50 und 60 E-Folds voraus.',
    energyTooltip: 'Die GUT-Skala liegt bei etwa 10^16 GeV.',
    scaleFactorTooltip: 'Stellt den gesamten Expansionsfaktor dar.',
    reheatingTooltip: 'Die Temperatur nach dem Ende der Inflation.',
    analogyInsuff: 'Moderate Inflation. Diese Expansion reicht nicht aus.',
    analogyProton: 'Das Universum dehnte sich in Bruchteilen einer Sekunde von der Groesse eines Protons auf die Groesse einer Galaxie aus.',
    analogyObservable: 'Das Universum dehnte sich in 10^-32 Sekunden von einer subatomaren Skala auf eine Groesse aus, die groesser als das beobachtbare Universum ist.',
  },
  seo: [
    {
      type: 'title',
      text: 'KOSMOLOGIE: Die Theorie der kosmischen Inflation verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die kosmische Inflation ist ein Eckpfeiler der modernen Kosmologie. Sie beschreibt eine kurze, extrem schnelle Phase exponentieller Expansion, die etwa 10^-36 Sekunden nach dem Urknall stattfand. Waehrend dieser Epoche dehnte sich das Gefuege der Raumzeit um einen factor von mindestens 10^26 aus.',
    },
    {
      type: 'title',
      text: 'Das Horizontproblem erklaert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Horizontproblem ergibt sich aus der gleichmaessigen Temperatur der kosmischen Mikrowellen-Hintergrundstrahlung am Himmel. Ohne Inflation haetten weit entfernte Regionen der Visekunden nicht genuegend Zeit gehabt, um miteinander zu interagieren oder ein thermisches Gleichgewicht zu erreichen.',
    },
    {
      type: 'title',
      text: 'Das Flachheitsproblem und die Raumgeometrie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Flachheitsproblem betrifft die raeumliche Kruemmung des Universums. Beobachtungen zeigen, dass die Energiedichte der Viertelecke extrem nahe an der kritischen Dichte liegt, die fuer einen flachen Raum erforderlich ist. Inflation loest dieses Problem.',
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
