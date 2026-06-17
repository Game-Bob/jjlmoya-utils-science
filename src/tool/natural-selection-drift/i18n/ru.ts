import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulyator-estestvennogo-otbora-geneticheskogo-drejfa';
const title = 'Simulyator estestvennogo otbora i geneticheskogo drejfa';
const description =
  'V realnom vremeni nablyudajte, kak davlenie otbora, mutacii, drejf i razmnozhenie menyayut chastoty allelej.';

const faq = [
  { question: 'V chem raznica mezhdu estestvennym otborom i geneticheskim drejfom?', answer: 'Estestvennyj otbor ne sluchaen. Poleznye priznaki stanyatsya chashche. Geneticheskij drejf - sluchajnoe izmenenie chastot allelej.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Razmer populyacii',
    generations: 'Pokoleniya',
    mutationRate: 'Chastota mutacij',
    selectionPressure: 'Davlenie otbora',
    driftIntensity: 'Sila drejfa',
    alleleCount: 'Nachalnye alleli',
    innovationRate: 'Chastota innovacij',
    run: 'Zapustit simulyaciyu',
    dominantTrait: 'Dominiruyushij priznak',
    fitness: 'Itogovyj fitness',
    diversity: 'Geneticheskoe raznoobrazie',
    evolutionConsole: 'Evolyucionnaya konsol',
    populationLabel: 'Populyaciya',
    aliveLabel: 'zhivyx',
    alleleCountsLabel: 'Schetchik allelej',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Populyaciya',
  },
  seo: [
    { type: 'title', text: 'Estestvennyj otbor vs geneticheskij drejf: ponyat evolyuciyu s zhivoj populyaciej', level: 2 },
    { type: 'paragraph', html: 'Eta model pomogaet uvidet raznicu mezhdu otborom i drejfom cherez zhivuyu vizualizaciyu.' },
  ],
  faq,
  bibliography,
  howTo: [],
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] },
  ],
};
