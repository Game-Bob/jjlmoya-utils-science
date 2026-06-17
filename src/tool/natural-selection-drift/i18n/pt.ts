import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulador-selecao-natural-deriva-genetica';
const title = 'Simulador de selecao natural e deriva genetica';
const description =
  'Veja em tempo real como pressao seletiva, mutacao, deriva e reproducao alteram as frequencias alelicas.';

const howTo = [
  { name: 'Defina a populacao', text: 'Escolha uma populacao pequena ou grande para ver o efeito do tamanho amostral.' },
];

const faq = [
  { question: 'Qual e a diferenca entre selecao natural e deriva genetica?', answer: 'Selecao natural nao e aleatoria. Deriva genetica e uma mudanca aleatoria nas frequencias alelicas.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Tamanho da populacao',
    generations: 'Geracoes',
    mutationRate: 'Taxa de mutacao',
    selectionPressure: 'Pressao seletiva',
    driftIntensity: 'Intensidade da deriva',
    alleleCount: 'Alelos iniciais',
    innovationRate: 'Taxa de inovacao',
    run: 'Executar simulacao',
    dominantTrait: 'Traço dominante',
    fitness: 'Fitness final',
    diversity: 'Diversidade genetica',
    evolutionConsole: 'Console evolutivo',
    populationLabel: 'Populacao',
    aliveLabel: 'vivos',
    alleleCountsLabel: 'Contagem de alelos',
    alleleDefault: 'Alelo 1',
    populationValueLabel: 'Populacao',
  },
  seo: [
    { type: 'title', text: 'Selecao natural vs deriva genetica: entenda a evolucao com uma populacao viva', level: 2 },
    { type: 'paragraph', html: 'Este simulador mostra a selecao e a deriva ao vivo, de forma clara e pratica.' },
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
