import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulering-av-naturligt-urval-genetisk-drift';
const title = 'Simulering av naturligt urval och genetisk drift';
const description =
  'Se i realtid hur selektionstryck, mutation, genetisk drift och reproduktion ändrar allelfrekvenser.';

const howTo = [
  {
    name: 'Välj populationsstorlek',
    text: 'Välj en liten eller stor population för att se hur urvalsstorlek förändrar den evolutionära stabiliteten.',
  },
  {
    name: 'Justera selektion och drift',
    text: 'Öka selektionstrycket för att gynna en egenskap, eller öka driftintensiteten för att låta slumpen dominera.',
  },
  {
    name: 'Följ generationernas utveckling',
    text: 'Kör simuleringen och jämför dominerande egenskaper, fitness och variation över tid.',
  },
  {
    name: 'Tolka balansen',
    text: 'Använd de slutliga mätvärdena för att förstå när anpassning vinner och när slumpmässig fluktuation tar över.',
  },
];

const faq = [
  {
    question: 'Vad är skillnaden mellan naturligt urval och genetisk drift?',
    answer: 'Naturligt urval är en icke-slumpmässig process där gynnsamma egenskaper blir vanligare. Genetisk drift är slumpmässig förändring av allelfrekvenser i en population, starkast i små populationer.',
  },
  {
    question: 'Varför förändras små populationer snabbare?',
    answer: 'Med färre individer har slumpmässigt urval en större effekt. Det innebär att slumpen kan ändra allelfrekvenser mer dramatiskt från en generation till nästa.',
  },
  {
    question: 'Kan drift övervinna urval?',
    answer: 'Ja. Om driften är tillräckligt stark kan en gynnsam egenskap försvinna av slumpen, särskilt när populationen är liten.',
  },
  {
    question: 'Vad betyder fitness i denna simulator?',
    answer: 'Fitness är ett förenklat mått på hur väl populationen är anpassad till den valda miljön.',
  },
  {
    question: 'Varför spelar populationsstorlek så stor roll?',
    answer: 'Populationsstorleken avgör hur starkt slumpmässigt urval påverkar allelfrekvenser. I stora populationer syns urvalet tydligare.',
  },
  {
    question: 'När bör jag använda denna simulator?',
    answer: 'Använd den för att få en visuell förståelse för evolutionsmekanismer och skilja på riktade krafter som urval och stokastiska krafter som drift.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Populationsstorlek',
    generations: 'Generationer',
    mutationRate: 'Mutationshastighet',
    selectionPressure: 'Selektionstryck',
    driftIntensity: 'Driftintensitet',
    alleleCount: 'Startalleler',
    innovationRate: 'Innovationshastighet',
    run: 'Starta simulering',
    dominantTrait: 'Dominerande egenskap',
    fitness: 'Slutlig fitness',
    diversity: 'Genetisk variation',
    evolutionConsole: 'Evolutionskonsol',
    populationLabel: 'Population',
    aliveLabel: 'levande',
    alleleCountsLabel: 'Allelräkning',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Population',
  },
  seo: [
    {
      type: 'title',
      text: 'Naturligt urval vs genetisk drift: förstå evolution med en levande population',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna simulator hjälper dig att se skillnaden mellan selektion och drift på ett tydligt sätt genom levande visualisering.',
    },
    {
      type: 'title',
      text: 'Vad kontrollerna betyder och varför de är viktiga',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Naturligt urval ökar frekvensen av egenskaper som förbättrar överlevnad. Genetisk drift ändrar allelfrekvenser av slump.',
    },
    {
      type: 'paragraph',
      html: 'Båda krafterna är alltid närvarande och samverkar i varje generation.',
    },
    {
      type: 'title',
      text: 'Hur du läser simuleringsresultaten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mätvärdena i realtid hjälper dig att tolka systemets förändringar.',
    },
    {
      type: 'title',
      text: 'Varför populationsstorlek förändrar bilden',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Selektionstryck:</strong> Hur starkt miljön belönar en egenskap.',
        '<strong>Driftintensitet:</strong> Hur mycket slumpmässigt urval ändrar populationen.',
        '<strong>Mutationshastighet:</strong> Hur ofta ny variation uppstår.',
        '<strong>Allelantal:</strong> Antal startalleler.',
        '<strong>Genetisk variation:</strong> Råmaterialet för evolution.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Verktyget ger ett snabbt och praktiskt sätt att förstå evolutionsbiologi.',
    },
    {
      type: 'title',
      text: 'Snabba exempel att testa',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Mål', 'Vad du ska ändra', 'Vad du bör se'],
      rows: [
        ['Visa selektionsseger', 'Öka selektionstryck och håll drift låg', 'En allel dominerar över tid.'],
        ['Visa slumpmässig drift', 'Minska populationen och öka drift', 'Allelfrekvenser svänger oförutsägbart.'],
        ['Visa ny variation', 'Öka mutation och innovation', 'Nya alleler uppstår kontinuerligt.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Visualiseringen gör verktyget idealiskt för undervisning och självstudier.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};