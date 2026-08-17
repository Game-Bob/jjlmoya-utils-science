import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulator-natuurlijke-selectie-genetische-drift';
const title = 'Simulator voor natuurlijke selectie en genetische drift';
const description =
  'Bekijk in realtime hoe selectiedruk, mutatie, drift en voortplanting allelfrequenties veranderen.';

const howTo = [
  { name: 'Populatie kiezen', text: 'Kies een kleine of grote populatie om het effect van steekproefgrootte te zien.' },
  { name: 'Selectie en drift instellen', text: 'Verhoog selectiedruk of drift om andere evolutiepaden te zien.' },
  { name: 'Generaties bekijken', text: 'Start de simulatie en vergelijk het dominante kenmerk, de fitness en de diversiteit door de tijd heen.' },
  { name: 'Resultaten interpreteren', text: 'Gebruik de metrieken om te begrijpen wanneer aanpassing wint en wanneer toeval overheerst.' },
];

const faq = [
  { question: 'Wat is het verschil tussen natuurlijke selectie en genetische drift?', answer: 'Natuurlijke selectie is niet willekeurig. Gunstige eigenschappen worden vaker doorgegeven. Genetische drift is een willekeurige verandering van allelfrequenties.' },
  { question: 'Waarom veranderen kleine populaties sneller?', answer: 'Bij weinig individuen heeft toeval een grotere invloed op de volgende generatie.' },
  { question: 'Kan drift selectie overtreffen?', answer: 'Ja. Een gunstige eigenschap kan door toeval verdwijnen als de drift sterk genoeg is.' },
  { question: 'Wat betekent fitness in deze simulator?', answer: 'Fitness is een vereenvoudigde score voor hoe goed de populatie is aangepast aan de omgeving.' },
  { question: 'Waarom is de populatiegrootte zo belangrijk?', answer: 'Het bepaalt hoe sterk willekeurige schommelingen de allelfrequenties beïnvloeden.' },
  { question: 'Wanneer moet ik deze simulator gebruiken?', answer: 'Wanneer je de intuïtie achter evolutie wilt begrijpen, vooral het verschil tussen selectie en drift.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Populatiegrootte',
    generations: 'Generaties',
    mutationRate: 'Mutatiesnelheid',
    selectionPressure: 'Selectiedruk',
    driftIntensity: 'Driftintensiteit',
    alleleCount: 'Startallelen',
    innovationRate: 'Innovatiesnelheid',
    run: 'Simulatie starten',
    dominantTrait: 'Dominante eigenschap',
    fitness: 'Eindfitness',
    diversity: 'Genetische diversiteit',
    evolutionConsole: 'Evolutieconsole',
    populationLabel: 'Populatie',
    aliveLabel: 'levend',
    alleleCountsLabel: 'Aantal allelen',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Populatie',
  },
  seo: [
    {
      type: 'title',
      text: 'Natuurlijke selectie vs. Genetische drift: Evolutie begrijpen met een levende populatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Als je het verschil tussen natuurlijke selectie en genetische drift wilt begrijpen, biedt deze simulator de visuele laag. In plaats van een statische definitie te lezen, bekijk je een populatie in realtime.',
    },
    {
      type: 'title',
      text: 'Wat de instellingen betekenen en waarom ze belangrijk zijn',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Natuurlijke selectie is het niet-willekeurige deel van evolutie. Het verhoogt de frequentie van eigenschappen die overleving of voortplanting verbeteren. Genetische drift is het willekeurige deel.',
    },
    {
      type: 'paragraph',
      html:
        'Beide krachten werken tegelijkertijd. In grote populaties overheerst meestal selectie, terwijl in kleine populaties toeval nuttige eigenschappen kan wissen.',
    },
    {
      type: 'title',
      text: 'Hoe de resultaten van de simulatie te lezen',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'De live-metrieken tonen het dominante kenmerk, de genetische diversiteit, de eindfitness en of de populatie groeit of afneemt.',
    },
    {
      type: 'title',
      text: 'Waarom populatiegrootte het verhaal verandert',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Selectiedruk:</strong> Hoe sterk de omgeving een eigenschap bevoordeelt.',
        '<strong>Driftintensiteit:</strong> Hoeveel toevallige ruis de populatie beïnvloedt.',
        '<strong>Mutatiesnelheid:</strong> Hoe vaak nieuwe variaties ontstaan.',
        '<strong>Aantal allelen:</strong> Oorspronkelijke variatie in het systeem.',
        '<strong>Genetische diversiteit:</strong> Waarom variatie de grondstof voor evolutie is.',
      ],
    },
    {
      type: 'paragraph',
      html:
        'Een praktisch hulpmiddel om selectie, drift en mutatie in biologische systemen te begrijpen.',
    },
    {
      type: 'title',
      text: 'Snelle voorbeelden om te proberen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Doel', 'Verandering', 'Verwacht resultaat'],
      rows: [
        [
          'Selectie tonen',
          'Verhoog selectiedruk en verlaag drift',
          'Één allel domineert geleidelijk',
        ],
        [
          'Toeval tonen',
          'Verlaag populatiegrootte en verhoog drift',
          'Willekeurige schommelingen in allelfrequenties',
        ],
        [
          'Mutatie tonen',
          'Verhoog mutatiesnelheid',
          'Nieuwe allelen verschijnen regelmatig',
        ],
      ],
    },
    {
      type: 'paragraph',
      html:
        'De combinatie van visuele weergave en realtime metrieken maakt het begrijpen van evolutie eenvoudig.',
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
      description,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
