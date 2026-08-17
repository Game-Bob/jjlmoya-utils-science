import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'halbwertszeit-rechner-radioaktiver-zerfall';
const title = 'Rechner für Halbwertszeit und radioaktiven Zerfall';
const description = 'Simulieren Sie radioaktiven Zerfall mit realen Isotopen, der Halbwertszeit-Formel, stochastischem Atomfeld, Restmenge und relativer Aktivität.';

const howTo = [
  { name: 'Isotop auswählen', text: 'Beginnen Sie mit Kohlenstoff-14, Iod-131, Uran-238, Technetium-99m oder Radon-222. Jedes Preset lädt eine realistische Halbwertszeit und den typischen wissenschaftlichen Kontext.' },
  { name: 'Probe und Zeit einstellen', text: 'Passen Sie die dargestellte Atomzahl an und verschieben Sie die Zeit, um zu sehen, wie der verbleibende Anteil dem exponentiellen Gesetz der Halbwertszeit folgt.' },
  { name: 'Exakte Rechnung und atomaren Zufall vergleichen', text: 'Nutzen Sie das deterministische Ergebnis als Erwartungswert und betrachten Sie das Atomfeld, um Schwankungen kleiner Proben um die theoretische Kurve zu verstehen.' },
  { name: 'Aktivität interpretieren', text: 'Die Aktivität fällt im gleichen Verhältnis wie die nicht zerfallenen Kerne. Die Anzeige zeigt also, welcher Anteil der ursprünglichen Strahlungsrate noch bleibt.' },
];

const faq = [
  { question: 'Was bedeutet Halbwertszeit?', answer: 'Die Halbwertszeit ist die Zeit, nach der im Mittel die Hälfte der instabilen Kerne einer Probe zerfallen ist. Nach einer Halbwertszeit bleiben 50%, nach zwei 25% und nach drei 12,5%.' },
  { question: 'Warum stimmt das Atomfeld nicht immer exakt mit dem Prozentwert überein?', answer: 'Radioaktiver Zerfall ist probabilistisch. Die Formel liefert den Erwartungswert für eine sehr große Probe, während das Feld einzelne Atome mit zufälligen Schwellen simuliert. Kleine Proben zeigen natürliche statistische Schwankungen.' },
  { question: 'Entspricht die Aktivität den verbleibenden Atomen?', answer: 'Bei einem einzelnen Isotop ist die Aktivität proportional zur Zahl der nicht zerfallenen Kerne. Wenn 30% der Atome übrig sind, liegt auch die momentane Aktivität ungefähr bei 30% der Anfangsaktivität.' },
  { question: 'Kann der Rechner für Radiokarbondatierung genutzt werden?', answer: 'Ja, als konzeptionelle Rechnung. Die Kohlenstoff-14-Datierung vergleicht die verbleibende Aktivität mit lebendem Material; echte Laboranalysen korrigieren zusätzlich Kalibrationskurven, Kontamination und Probenaufbereitung.' },
  { question: 'Zerfällt jedes Isotop in genau ein stabiles Produkt?', answer: 'Nicht immer. Manche Isotope zerfallen über Ketten mit mehreren Tochterprodukten. Dieses Werkzeug modelliert die Halbwertszeit des Mutterisotops, die wichtigste Größe für verbleibende Mutterkerne und Aktivität.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotop',
    sampleAtoms: 'Atome in der Probe',
    elapsedTime: 'Verstrichene Zeit',
    halfLife: 'Halbwertszeit',
    remaining: 'Verbleibend',
    decayed: 'Zerfallen',
    activity: 'Relative Aktivität',
    timeUnit: 'Zeiteinheit',
    expectedCurve: 'Erwartete Kurve',
    atomField: 'Atomfeld',
    presetUse: 'Typische Nutzung',
    oneHalfLife: '1 Halbwertszeit',
    twoHalfLives: '2 Halbwertszeiten',
    fourHalfLives: '4 Halbwertszeiten',
    custom: 'Benutzerdefiniert',
    liveAtoms: 'Aktive Atome',
    decayedAtoms: 'Zerfallene Atome',
    resetSeed: 'Neues Atommuster',
  },
  seo: [
    {
      type: 'title',
      text: 'Halbwertszeit-Rechner: verbleibende Atome, Aktivität und Isotop-Beispiele',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mit diesem Rechner für radioaktiven Zerfall schätzen Sie, wie viel eines instabilen Isotops nach einer bestimmten Zeit noch vorhanden ist. Er deckt die wichtigsten Suchabsichten ab: die Halbwertszeit-Formel finden, sie auf reale Isotope anwenden, verbleibende Mutterkerne mit zerfallenen Kernen vergleichen und verstehen, warum Aktivität mit der Zeit abnimmt.',
    },
    {
      type: 'paragraph',
      html: 'Das Werkzeug kombiniert zwei komplementäre Modelle. Die numerischen Ergebnisse nutzen die Standard-Zerfallsgleichung, während das Atomfeld einzelne Kerne mit stochastischen Schwellen simuliert.',
    },
    {
      type: 'title',
      text: 'Verwendete Formel für radioaktiven Zerfall',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Formel lautet <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> ist die Anfangszahl der Mutterkerne, <strong>N(t)</strong> die erwartete Restzahl nach der Zeit <strong>t</strong>, und <strong>T1/2</strong> die Halbwertszeit. Der Exponent <strong>t / T1/2</strong> zählt die vergangenen Halbwertszeiten.',
    },
    {
      type: 'paragraph',
      html: 'Wenn beispielsweise eine Probe mit 1.000 Mutterkernen beginnt und zwei Halbwertszeiten verstreichen, beträgt die erwartete Restmenge 1.000 x (1/2)^2 = 250 Kerne. Die zerfallene Menge ist die Differenz: 750 Kerne.',
    },
    {
      type: 'table',
      headers: ['Verstrichene Zeit', 'Formelfaktor', 'Verbleibende Mutterkerne', 'Relative Aktivität'],
      rows: [
        ['0 Halbwertszeiten', '(1/2)^0', '100%', '100%'],
        ['1 Halbwertszeit', '(1/2)^1', '50%', '50%'],
        ['2 Halbwertszeiten', '(1/2)^2', '25%', '25%'],
        ['3 Halbwertszeiten', '(1/2)^3', '12,5%', '12,5%'],
        ['5 Halbwertszeiten', '(1/2)^5', '3,125%', '3,125%'],
        ['10 Halbwertszeiten', '(1/2)^10', '0,098%', '0,098%'],
      ],
    },
    {
      type: 'title',
      text: 'Berechnung der Restaktivität nach einer Halbwertszeit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Für ein einzelnes Mutterisotop ist die Aktivität proportional zur Anzahl der nicht zerfallenen Kerne. Verbleiben 25% des Mutterisotops, beträgt die Aktivität ebenfalls ca. 25% des Anfangswerts.',
    },
    {
      type: 'paragraph',
      html: 'Diese Beziehung ist in der Nuklearmedizin und im Strahlenschutz von zentraler Bedeutung.',
    },
    {
      type: 'title',
      text: 'Beispiele: Kohlenstoff-14, Iod-131, Technetium-99m, Uran-238 und Radon-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Isotop', 'Ungefähre Halbwertszeit', 'Typische Anwendung', 'Bedeutung des Ergebnisses'],
      rows: [
        ['Kohlenstoff-14', '5.730 Jahre', 'Radiokarbondatierung', 'Verbleibende C-14-Aktivität in organischem Material.'],
        ['Iod-131', '8,02 Tage', 'Medizinische Therapie', 'Abfall der Aktivität über Tage nach Behandlung.'],
        ['Technetium-99m', '6,01 Stunden', 'Diagnostische Bildgebung', 'Warum medizinische Aktivität innerhalb eines Tages abnimmt.'],
        ['Uran-238', '4,47 Milliarden Jahre', 'Geologische Datierung', 'Warum langlebige Isotope über Erdzeitalter messbar bleiben.'],
        ['Radon-222', '3,82 Tage', 'Innenraumstrahlung', 'Veränderung einer Gasquelle über Tage.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Diese Beispiele decken verschiedene Zeitskalen und wissenschaftliche Fragestellungen ab.',
    },
    {
      type: 'title',
      text: 'Lesen der stochastischen Atom-Simulation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das animierte Atomfeld ist stochastisch modelliert. Bei kleinen Proben schwanken die Ergebnisse natürlich um den theoretischen Wert.',
    },
    {
      type: 'paragraph',
      html: 'Die glatte Kurve entsteht erst bei der Auswertung vieler unabhängiger Zufallsereignisse.',
    },
    {
      type: 'title',
      text: 'Anwendungsbereiche des Halbwertszeit-Rechners',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Physikunterricht:</strong> Berechnung verbleibender Kerne und Verknüpfung mit einem visuellen Modell.',
        '<strong>Chemie und Kernphysik:</strong> Vergleich von Isotopenstabilität und Zerfallsgeschwindigkeiten.',
        '<strong>Radiokarbondatierung:</strong> Verständnis für den Zerfall organischer Proben.',
        '<strong>Nuklearmedizin:</strong> Planung von Bildgebungsverfahren mit kurzlebigen Isotopen.',
        '<strong>Strahlenschutz:</strong> Abschätzung des Aktivitätsabfalls über die Zeit.',
      ],
    },
    {
      type: 'title',
      text: 'Wichtige Einschränkungen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieser Rechner modelliert das Mutterisotop mit einer einzelnen Halbwertszeit.',
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie die Ergebnisse als didaktisches Modell und wissenschaftliche Orientierung.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};