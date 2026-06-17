import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'halbwertszeit-rechner-radioaktiver-zerfall';
const title = 'Rechner fur Halbwertszeit und radioaktiven Zerfall';
const description = 'Simulieren Sie radioaktiven Zerfall mit realen Isotopen, Halbwertszeit-Formel, stochastischem Atomfeld, Restmenge und relativer Aktivitat.';

const howTo = [
  { name: 'Isotop auswahlen', text: 'Beginnen Sie mit Kohlenstoff-14, Iod-131, Uran-238, Technetium-99m oder Radon-222. Jedes Preset ladt eine realistische Halbwertszeit und den typischen wissenschaftlichen Kontext.' },
  { name: 'Probe und Zeit einstellen', text: 'Passen Sie die dargestellte Atomzahl an und verschieben Sie die Zeit, um zu sehen, wie der verbleibende Anteil dem exponentiellen Gesetz der Halbwertszeit folgt.' },
  { name: 'Exakte Rechnung und atomaren Zufall vergleichen', text: 'Nutzen Sie das deterministische Ergebnis als Erwartungswert und betrachten Sie das Atomfeld, um Schwankungen kleiner Proben um die theoretische Kurve zu verstehen.' },
  { name: 'Aktivitat interpretieren', text: 'Die Aktivitat fallt im gleichen Verhaltnis wie die nicht zerfallenen Kerne. Die Anzeige zeigt also, welcher Anteil der ursprunglichen Strahlungsrate noch bleibt.' },
];

const faq = [
  { question: 'Was bedeutet Halbwertszeit?', answer: 'Die Halbwertszeit ist die Zeit, nach der im Mittel die Halfte der instabilen Kerne einer Probe zerfallen ist. Nach einer Halbwertszeit bleiben 50%, nach zwei 25% und nach drei 12,5%.' },
  { question: 'Warum stimmt das Atomfeld nicht immer exakt mit dem Prozentwert uberein?', answer: 'Radioaktiver Zerfall ist probabilistisch. Die Formel liefert den Erwartungswert fur eine sehr grosse Probe, wahrend das Feld einzelne Atome mit zufalligen Schwellen simuliert. Kleine Proben zeigen naturliche statistische Schwankungen.' },
  { question: 'Entspricht die Aktivitat den verbleibenden Atomen?', answer: 'Bei einem einzelnen Isotop ist die Aktivitat proportional zur Zahl der nicht zerfallenen Kerne. Wenn 30% der Atome ubrig sind, liegt auch die momentane Aktivitat ungefahr bei 30% der Anfangsaktivitat.' },
  { question: 'Kann der Rechner fur Radiokarbondatierung genutzt werden?', answer: 'Ja, als konzeptionelle Rechnung. Die Kohlenstoff-14-Datierung vergleicht die verbleibende Aktivitat mit lebendem Material; echte Laboranalysen korrigieren zusatzlich Kalibrationskurven, Kontamination und Probenaufbereitung.' },
  { question: 'Zerfallt jedes Isotop in genau ein stabiles Produkt?', answer: 'Nicht immer. Manche Isotope zerfallen uber Ketten mit mehreren Tochterprodukten. Dieses Werkzeug modelliert die Halbwertszeit des Mutterisotops, die wichtigste Grosse fur verbleibende Mutterkerne und Aktivitat.' },
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
    activity: 'Relative Aktivitat',
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
    { type: 'title', text: 'Halbwertszeit-Rechner: verbleibende Atome, Aktivitat und Isotop-Beispiele', level: 2 },
    { type: 'paragraph', html: 'Mit diesem Rechner fur radioaktiven Zerfall schatzen Sie, wie viel eines instabilen Isotops nach einer bestimmten Zeit noch vorhanden ist. Er deckt die wichtigsten Suchabsichten ab: die Halbwertszeit-Formel finden, sie auf reale Isotope anwenden, verbleibende Mutterkerne mit zerfallenen Kernen vergleichen und verstehen, warum Aktivitat mit der Zeit abnimmt.' },
    { type: 'paragraph', html: 'Das Werkzeug verbindet zwei Perspektiven. Die Zahlen nutzen die exponentielle Zerfallsgleichung, das Atomfeld simuliert einzelne Kerne mit stochastischen Schwellen. So eignet es sich als schneller Rechner und als visuelle Erklarung dafur, warum Zerfall in grossen Mengen vorhersagbar, beim einzelnen Atom aber zufallig ist.' },
    { type: 'title', text: 'Verwendete Formel fur radioaktiven Zerfall', level: 3 },
    { type: 'paragraph', html: 'Die Formel lautet <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> ist die Anfangszahl der Mutterkerne, <strong>N(t)</strong> die erwartete Restzahl nach der Zeit <strong>t</strong>, und <strong>T1/2</strong> die Halbwertszeit. Der Exponent <strong>t / T1/2</strong> zahlt die vergangenen Halbwertszeiten.' },
    { type: 'paragraph', html: 'Beginnt eine Probe mit 1.000 Mutterkernen und zwei Halbwertszeiten verstreichen, bleiben erwartet 1.000 x (1/2)^2 = 250 Kerne. Zerfallen sind 750 Kerne. Dieselbe Rechnung gilt fur Sekunden, Stunden, Tage, Jahre oder Milliarden Jahre.' },
    { type: 'table', headers: ['Verstrichene Zeit', 'Formelfaktor', 'Verbleibende Mutterkerne', 'Relative Aktivitat'], rows: [['0 Halbwertszeiten', '(1/2)^0', '100%', '100%'], ['1 Halbwertszeit', '(1/2)^1', '50%', '50%'], ['2 Halbwertszeiten', '(1/2)^2', '25%', '25%'], ['3 Halbwertszeiten', '(1/2)^3', '12,5%', '12,5%'], ['5 Halbwertszeiten', '(1/2)^5', '3,125%', '3,125%'], ['10 Halbwertszeiten', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Restaktivitat berechnen', level: 3 },
    { type: 'paragraph', html: 'Bei einem einzelnen Mutterisotop ist die Aktivitat proportional zur Zahl der nicht zerfallenen Kerne. Bleiben 25% des Mutterisotops, liegt auch die Aktivitat dieses Isotops bei etwa 25% der Anfangsaktivitat.' },
    { type: 'paragraph', html: 'Das ist wichtig in Nuklearmedizin und Strahlenschutz. Technetium-99m verliert Aktivitat innerhalb von Stunden, Iod-131 bleibt uber Tage relevant und beeinflusst Therapieplanung, Kontaminationsuberwachung und Expositionshinweise.' },
    { type: 'title', text: 'Beispiele: Kohlenstoff-14, Iod-131, Technetium-99m, Uran-238 und Radon-222', level: 3 },
    { type: 'table', headers: ['Isotop', 'Ungefaire Halbwertszeit', 'Typischer Suchkontext', 'Was das Ergebnis zeigt'], rows: [['Kohlenstoff-14', '5.730 Jahre', 'Radiokarbondatierung', 'Wie viel Aktivitat des Mutterisotops Kohlenstoff-14 in ehemals lebendem Material verbleibt.'], ['Iod-131', '8,02 Tage', 'Medizinische Therapie und nukleare Ereignisse', 'Wie schnell Aktivitat uber Tage nach Freisetzung oder Behandlung sinkt.'], ['Technetium-99m', '6,01 Stunden', 'Diagnostische Bildgebung', 'Warum nutzbare medizinische Aktivitat innerhalb eines klinischen Tages abnimmt.'], ['Uran-238', '4,47 Milliarden Jahre', 'Geologische Datierung', 'Warum langlebige Isotope uber Erdgeschichte messbar bleiben.'], ['Radon-222', '3,82 Tage', 'Innenraumstrahlung und Zerfallsketten', 'Wie sich eine gasformige Expositionsquelle uber Tage verandert.']] },
    { type: 'paragraph', html: 'Diese Beispiele decken verschiedene Zeitskalen und Suchintentionen ab: Archaologie fur Kohlenstoff-14, medizinische Aktivitat fur Iod-131 und Technetium-99m, Umweltbelastung fur Radon-222 und geologische Zeit fur Uran-238.' },
    { type: 'title', text: 'Die stochastische Atomsimulation lesen', level: 3 },
    { type: 'paragraph', html: 'Das animierte Atomfeld ist bewusst stochastisch. Die Gleichung liefert den Erwartungswert fur grosse Proben, aber einzelne Kerne zerfallen zufallig. Kleine Proben konnen nach einer Halbwertszeit etwas uber oder unter 50% liegen; grossere Proben nahern sich der theoretischen Kurve.' },
    { type: 'paragraph', html: 'Halbwertszeit bedeutet nicht, dass jedes Atom auf einen Timer wartet und dann genau die Halfte verschwindet. Jeder instabile Kern hat pro Zeiteinheit eine konstante Zerfallswahrscheinlichkeit. Die glatte Kurve entsteht erst aus vielen unabhangigen Zufallsereignissen.' },
    { type: 'title', text: 'Anwendungsfalle des Rechners', level: 3 },
    { type: 'list', items: ['<strong>Physikunterricht:</strong> verbleibende Mutterkerne nach einer Anzahl von Halbwertszeiten berechnen.', '<strong>Chemie und Kernwissenschaft:</strong> Stabilitat, Zerfallsgeschwindigkeit und relative Aktivitat vergleichen.', '<strong>Radiokarbon-Verstandnis:</strong> verstehen, warum alte Proben weniger Kohlenstoff-14 enthalten.', '<strong>Planung medizinischer Isotope:</strong> sehen, warum kurze Halbwertszeiten fur Bildgebung nutzlich sind.', '<strong>Strahlenschutzbildung:</strong> Aktivitatsschatzungen ohne Verwechslung von Halbwertszeit und sofortigem Verschwinden.'] },
    { type: 'title', text: 'Wichtige Grenzen', level: 3 },
    { type: 'paragraph', html: 'Dieser Rechner modelliert das Mutterisotop mit einer einzigen Halbwertszeit. Reale Messungen konnen Korrekturen fur Detektoreffizienz, Hintergrundstrahlung, Verzweigungsverhaltnisse, Tochterprodukte, biologische Ausscheidung, chemische Form, Abschirmung und Kalibrationskurven erfordern.' },
    { type: 'paragraph', html: 'Nutzen Sie das Ergebnis als klare wissenschaftliche Schatzung und Lernmodell, nicht als Ersatz fur Strahlenschutzberatung, medizinische Anweisungen, Dosimetrie oder Labor-Datierung.' },
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
