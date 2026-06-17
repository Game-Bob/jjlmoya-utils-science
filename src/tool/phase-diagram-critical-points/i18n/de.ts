import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'phasendiagramm-kritischer-punkt-visualisierer';
const title = 'Phasendiagramm und Kritischer Punkt Visualisierer';
const description = 'Erkunden Sie feste, flussige, gasformige und uberkritische Bereiche in einem interaktiven Druck-Temperatur-Phasendiagramm mit Tripelpunkt- und Kritischer-Punkt-Markierungen.';

const howTo = [
  {
    name: 'Substanz auswahlen',
    text: 'Wechseln Sie zwischen Wasser, Kohlendioxid und Stickstoff, um zu sehen, wie reale Tripelpunkte und kritische Punkte das Phasenbild verandern.',
  },
  {
    name: 'Temperatur und Druck andern',
    text: 'Nutzen Sie die Schieberegler, um die Probe auf der Druck-Temperatur-Ebene zu positionieren. Das Diagramm aktualisiert den aktiven Phasenbereich und die Live-Probenmarkierung.',
  },
  {
    name: 'Den kritischen Hof beobachten',
    text: 'Bewegen Sie sich zum Ende der Dampf-Flussig-Grenze, um zu sehen, wie die latente Warme verschwindet und der Flussig-Gas-Unterscheid in einer uberkritischen Flussigkeit aufgeht.',
  },
  {
    name: 'Das Lehrpanel lesen',
    text: 'Nutzen Sie die Phasenbezeichnung, den Latenzwarme-Indikator und die Punktanzeigen, um das visuelle Diagramm mit thermodynamischen Fachbegriffen zu verknupfen.',
  },
];

const faq = [
  {
    question: 'Was ist ein Phasendiagramm?',
    answer: 'Ein Phasendiagramm zeigt, welcher Aggregatzustand bei verschiedenen Kombinationen von Temperatur und Druck stabil ist. Die Grenzlinien markieren Bedingungen, unter denen zwei Phasen im Gleichgewicht nebeneinander existieren konnen.',
  },
  {
    question: 'Was passiert am kritischen Punkt?',
    answer: 'Am kritischen Punkt endet die Dampf-Flussig-Grenze. Oberhalb der kritischen Temperatur und des kritischen Drucks wird das Material zu einer uberkritischen Flussigkeit, und es gibt keine scharfe Trennung zwischen Flussigkeit und Gas.',
  },
  {
    question: 'Warum hat Wasser eine andere Schmelzlinie?',
    answer: 'Wasser ist ungewohnlich, weil Eis in der Nahe des Schmelzpunkts eine geringere Dichte als flussiges Wasser hat. Steigender Druck kann die dichtere flussige Phase begunstigen, weshalb die Fest-Flussig-Grenze einen anderen Verlauf hat als bei vielen anderen Substanzen.',
  },
  {
    question: 'Sind die dargestellten Kurven laborgenau?',
    answer: 'Nein. Das Werkzeug verwendet vereinfachte Kurven, die an publizierte Tripelpunkt- und Kritischer-Punkt-Werte angelehnt sind. Es ist fur das konzeptionelle Lernen konzipiert, nicht fur Verfahrenstechnik oder Sicherheitsberechnungen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Phasendiagramm Steuerung',
    substance: 'Substanz',
    units: 'Einheiten',
    scientificUnits: 'Wissenschaftlich (K, MPa)',
    metricUnits: 'Metrisch (Celsius, kPa)',
    imperialUnits: 'Imperial (Fahrenheit, psi)',
    temperature: 'Temperatur',
    pressure: 'Druck',
    diagram: 'Druck-Temperatur-Phasendiagramm',
    sample: 'Probenzustand',
    phase: 'Stabile Phase',
    triplePoint: 'Tripelpunkt',
    criticalPoint: 'Kritischer Punkt',
    vaporCurve: 'Dampf-Flussig-Grenze',
    meltingLine: 'Fest-Flussig-Grenze',
    latentHeat: 'Latentwarme Kontrast',
    criticalProximity: 'Kritische Nahe',
    coordinates: 'Koordinaten',
    solid: 'Fest',
    liquid: 'Flussig',
    gas: 'Gasformig',
    supercritical: 'Uberkritisch',
    low: 'niedrig',
    high: 'hoch',
    reset: 'Zurucksetzen',
    interpretation: 'Interpretation',
    note: 'Grenzlinien markieren Koexistenz; Bereiche markieren die stabilste Phase fur die gewahlten Bedingungen.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interaktives Phasendiagramm Visualisierer fur Tripelpunkte, Siedekurven und kritische Punkte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Phasendiagramm-Visualisierer verwandelt ein abstraktes Druck-Temperatur-Diagramm in eine interaktive Karte. Wahlen Sie eine Substanz, andern Sie Temperatur und Druck, und sehen Sie, ob die Probe als Feststoff, Flussigkeit, Gas oder uberkritische Flussigkeit vorhergesagt wird. Das Ziel ist es, Phasengrenzen raumlich erfahrbar zu machen: Das Uberschreiten einer Linie andert den stabilen Zustand, wahrend die Annaherung an den kritischen Punkt die Bedeutung einer Phasengrenze selbst verandert.',
    },
    {
      type: 'paragraph',
      html: 'Das Werkzeug richtet sich an Studenten, Lehrer, Wissenschaftsautoren und alle, die eine klare Erklarung von Phasendiagrammen suchen. Es betont die Merkmale, die in der einfuhrenden Thermodynamik am wichtigsten sind: den Tripelpunkt, an dem drei Phasen koexistieren, die Dampf-Flussig-Kurve, die Fest-Flussig-Grenze und den kritischen Endpunkt, an dem der Flussig-Gas-Unterschied verschwindet.',
    },
    {
      type: 'title',
      text: 'Wie man das Druck-Temperatur-Diagramm liest',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein Phasendiagramm tragt die Temperatur auf der einen und den Druck auf der anderen Achse auf. Jeder Bereich zeigt die Phase, die unter diesen Bedingungen stabil ist. Die Linien zwischen den Bereichen sind Koexistenzkurven: Entlang dieser Linien konnen zwei Phasen im Gleichgewicht bleiben, anstatt dass eine Phase die andere vollstandig ersetzt.',
    },
    {
      type: 'table',
      headers: ['Diagrammmerkmal', 'Bedeutung', 'Was im Werkzeug zu beachten ist'],
      rows: [
        ['Tripelpunkt', 'Fest, Flussig und Gas koexistieren', 'Der Tieftemperatur-Knotenpunkt, an dem die Grenzen aufeinandertreffen.'],
        ['Dampf-Flussig-Kurve', 'Siede- oder Kondensationsgleichgewicht', 'Die gekrummte Linie vom Tripelpunkt zum kritischen Punkt.'],
        ['Fest-Flussig-Grenze', 'Schmelz- oder Gefriergleichgewicht', 'Die steile Linie, die feste und flussige Bereiche trennt.'],
        ['Kritischer Punkt', 'Ende der Dampf-Flussig-Grenze', 'Der hervorgehobene Endpunkt, an dem die latente Warme verschwindet.'],
        ['Uberkritischer Bereich', 'Keine scharfe Flussig-Gas-Unterscheidung', 'Der Hochtemperatur- und Hochdruckbereich jenseits des kritischen Punkts.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum der kritische Punkt wichtig ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unterhalb des kritischen Punkts ist Sieden ein Phasenubergang: Flussigkeit und Dampf konnen koexistieren, und Energie kann als latente Warme aufgenommen werden, wahrend die Temperatur an die Randbedingung gebunden bleibt. Am kritischen Punkt endet diese Grenze. Daruber andert sich die Dichte kontinuierlich, und die Substanz wird als uberkritische Flussigkeit und nicht als normale Flussigkeit oder Gas beschrieben.',
    },
    {
      type: 'paragraph',
      html: 'Dies ist in der Chemie, der Planetenwissenschaft, der industriellen Extraktion, der Kalte- und Hochdruckphysik von Bedeutung. Kohlendioxid wird beispielsweise unter relativ zuganglichen Bedingungen uberkritisch im Vergleich zu Wasser, weshalb uberkritisches CO2 in der Extraktion und Materialverarbeitung eingesetzt wird. Wasser erfordert viel hohere Temperaturen und Drucke, was seinen kritischen Punkt fur Energiesysteme und Geophysik wichtig macht.',
    },
    {
      type: 'title',
      text: 'Was dieser Visualisierer vereinfacht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Reale Phasendiagramme konnen Polymorphe, metastabile Zustande, nichtideale Mischungen, mehrere feste Phasen und experimentell angepasste Zustandsgleichungen umfassen. Dieses Lehrwerkzeug halt das Modell bewusst kompakt. Es verankert jede Substanz an erkennbaren Referenzwerten und zeichnet glatte Lehrkurven, damit die Hauptideen leicht zu erfassen sind, ohne dass eine Thermodynamik-Tabelle benotigt wird.',
    },
    {
      type: 'list',
      items: [
        '<strong>Nutzen Sie es fur die Intuition:</strong> Es hilft zu erklaren, warum sich Schnellkochtopfe, Trockeneis, Sieden und uberkritische Flussigkeiten unterschiedlich verhalten.',
        '<strong>Nicht fur technische Grenzwerte verwenden:</strong> Vereinfachte Kurven sind kein Ersatz fur zertifizierte Stoffdaten.',
        '<strong>Fokus auf Topologie:</strong> Das wichtigste Lernergebnis ist, wie Phasenbereiche zusammenhangen und wo Grenzen enden.',
      ],
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
