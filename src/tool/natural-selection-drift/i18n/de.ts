import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulator-natuerliche-selektion-genetische-drift';
const title = 'Simulator für natürliche Selektion und genetische Drift';
const description =
  'Beobachte in Echtzeit, wie Selektionsdruck, Mutation, Drift und Fortpflanzung die Allelfrequenzen verändern.';

const howTo = [
  { name: 'Population festlegen', text: 'Wähle eine kleine oder große Population, um den Einfluss der Stichprobe zu sehen.' },
  { name: 'Selektion und Drift einstellen', text: 'Erhöhe den Selektionsdruck oder die Drift, um andere Evolutionsverläufe zu sehen.' },
  { name: 'Generationen beobachten', text: 'Starte die Simulation und vergleiche dominantes Merkmal, Fitness und Vielfalt über die Zeit.' },
  { name: 'Ergebnisse deuten', text: 'Nutze die Metriken, um zu verstehen, wann Anpassung gewinnt und wann Zufall dominiert.' },
];

const faq = [
  { question: 'Was ist der Unterschied zwischen natürlicher Selektion und genetischer Drift?', answer: 'Natürliche Selektion ist nicht zufällig. Vorteilhafte Merkmale werden häufiger. Genetische Drift ist eine zufällige Veränderung der Allelfrequenzen, besonders stark in kleinen Populationen.' },
  { question: 'Warum verändern sich kleine Populationen schneller?', answer: 'Bei wenigen Individuen hat Zufall einen größeren Einfluss auf die nächste Generation.' },
  { question: 'Kann Drift Selektion übertreffen?', answer: 'Ja. Ein vorteilhaftes Merkmal kann durch Zufall verschwinden, wenn die Drift stark genug ist.' },
  { question: 'Was bedeutet Fitness in diesem Simulator?', answer: 'Fitness ist eine vereinfachte Kennzahl dafür, wie gut die Population an die Umgebung angepasst ist.' },
  { question: 'Warum ist die Populationsgröße so wichtig?', answer: 'Sie bestimmt, wie stark Zufall die Allelfrequenzen beeinflusst.' },
  { question: 'Wann sollte ich diesen Simulator benutzen?', answer: 'Wenn du die Intuition hinter Evolution verstehen willst, besonders den Unterschied zwischen Selektion und Drift.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Populationsgröße',
    generations: 'Generationen',
    mutationRate: 'Mutationsrate',
    selectionPressure: 'Selektionsdruck',
    driftIntensity: 'Driftintensität',
    alleleCount: 'Startallele',
    innovationRate: 'Innovationsrate',
    run: 'Simulation starten',
    dominantTrait: 'Dominantes Merkmal',
    fitness: 'Endfitness',
    diversity: 'Genetische Vielfalt',
    evolutionConsole: 'Evolution-Konsole',
    populationLabel: 'Population',
    aliveLabel: 'lebend',
    alleleCountsLabel: 'Allelzahlen',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Population',
  },
  seo: [
    {
      type: 'title',
      text: 'Natürliche Selektion vs. Genetische Drift: Evolution in einer lebenden Population verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Wenn du den Unterschied zwischen natürlicher Selektion und genetischer Drift verstehen willst, bietet dieser Simulator die visuelle Ebene. Anstatt statische Definitionen zu lesen, beobachtest du eine Population in Echtzeit.',
    },
    {
      type: 'paragraph',
      html: 'Verändere Populationsgröße, Fitnessvorteil und Startverteilung, um beide Prozesse getrennt zu beobachten. Selektion hängt von unterschiedlichen Fortpflanzungschancen ab, während Drift durch Zufallsstichproben besonders in kleinen Populationen sichtbar wird. Wiederhole Läufe mit gleichem Aufbau, denn einzelne Simulationen sind keine Vorhersage für eine reale Population. Vergleiche mehrere Durchläufe und achte darauf, ob ein Merkmal wegen eines Vorteils häufiger wird oder nur durch Zufall erhalten bleibt.',
    },
    {
      type: 'title',
      text: 'Was die Regler bedeuten und warum sie wichtig sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Natürliche Selektion ist der nicht-zufällige Teil der Evolution. Sie erhöht die Häufigkeit von Merkmalen, die Überleben oder Fortpflanzung verbessern. Genetische Drift ist der zufällige Teil.',
    },
    {
      type: 'paragraph',
      html:
        'Beide Kräfte wirken gleichzeitig. In großen Populationen dominiert meist die Selektion, in kleinen Populationen kann der Zufall nützliche Merkmale auslöschen.',
    },
    {
      type: 'title',
      text: 'Wie man die Ergebnisse der Simulation liest',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Die Live-Metriken zeigen das dominante Merkmal, die genetische Vielfalt, die Endfitness und ob die Population wächst oder kollabiert.',
    },
    {
      type: 'title',
      text: 'Warum die Populationsgröße die Geschichte verändert',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Selektionsdruck:</strong> Wie stark das Umfeld ein Merkmal bevorzugt.',
        '<strong>Driftintensität:</strong> Wie stark Zufallsschwankungen die Population beeinflussen.',
        '<strong>Mutationsrate:</strong> Wie oft neue Variationen entstehen.',
        '<strong>Anzahl der Allele:</strong> Ursprüngliche Allelvielfalt im System.',
        '<strong>Genetische Vielfalt:</strong> Warum Variation das Rohmaterial der Evolution ist.',
      ],
    },
    {
      type: 'paragraph',
      html:
        'Ein praktisches Werkzeug zum Verständnis von Selektion, Drift und Mutation in biologischen Systemen.',
    },
    {
      type: 'title',
      text: 'Schnelle Beispiele zum Ausprobieren',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ziel', 'Änderung', 'Erwartetes Ergebnis'],
      rows: [
        [
          'Selektion zeigen',
          'Selektionsdruck erhöhen und Drift senken',
          'Ein Allel dominiert schrittweise und die Vielfalt sinkt langsamer',
        ],
        [
          'Zufall zeigen',
          'Populationsgröße senken und Drift erhöhen',
          'Zufällige Schwankungen der Allele ohne klaren Fitnessvorteil',
        ],
        [
          'Mutation zeigen',
          'Mutationsrate erhöhen',
          'Neue Allele entstehen regelmäßig',
        ],
      ],
    },
    {
      type: 'paragraph',
      html:
        'Die Kombination aus visueller Darstellung und Echtzeitmetriken erleichtert das Verständnis evolutiver Prozesse.',
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
