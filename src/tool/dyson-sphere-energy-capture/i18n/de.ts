import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-spharen-energie-gewinnung-simulator';
const title = 'Dyson Spharen Energiegewinnung Simulator';
const description = 'Schatzen Sie Dyson-Schwarm, Ring, Hulle und Statit-Kollektor-Entwurfe fur verschiedene Sterne. Berechnen Sie die eingefangene Leistung, den Umlaufradius, die Materialmasse und die erforderliche Abdeckung fur eine Ziel-Kardaschow-Skala.';

const howTo = [
  {
    name: 'Wahlen Sie einen Sterntyp',
    text: 'Beginnen Sie mit einem M-Zwerg, einem sonnenahnlichen Stern, einem A-Stern, einem Roten Riesen oder einem Blauen Riesen. Der Simulator verwendet reprasentative Leuchtkraft- und Massewerte, um Kollektorradius und Umlaufzeit zu schatzen.',
  },
  {
    name: 'Wahlen Sie die Megastruktur-Architektur',
    text: 'Vergleichen Sie einen Dyson-Schwarm, einen Aquatorring, eine starre Hulle oder eine Statit-Spiegelwolke. Jeder Entwurf hat unterschiedliche Einfangeffizienz, Materialdichte und Stabilitatsannahmen.',
  },
  {
    name: 'Stellen Sie Abdeckung und Betriebstemperatur ein',
    text: 'Erhohen Sie die Abdeckung, um mehr Sternleistung einzufangen, und passen Sie die Betriebstemperatur an, um die Kollektoren naher an den Stern oder weiter weg zu bringen.',
  },
  {
    name: 'Wahlen Sie ein Kardaschow-Ziel',
    text: 'Nutzen Sie den Zielregler, um zu sehen, wie viel vom Stern umschlossen werden muss, um ein zivilisationsweites Energieziel zu erreichen.',
  },
];

const faq = [
  {
    question: 'Was ist der Unterschied zwischen einer Dyson-Sphare und einem Dyson-Schwarm?',
    answer: 'Eine starre Dyson-Sphare ist eine durchgehende Hulle um einen Stern, wahrend ein Dyson-Schwarm eine grose Sammlung unabhangiger umlaufender Kollektoren ist. Die meisten technischen Diskussionen bevorzugen Scharme, da eine feste Hulle strukturell instabil und extrem materialintensiv ware.',
  },
  {
    question: 'Wie wahlt der Simulator den optimalen Radius?',
    answer: 'Er schatzt die Entfernung, bei der Kollektoren, die von beiden Seiten abstrahlen, unter der gewahlten Sternleuchtkraft die gewunschte Betriebstemperatur erreichen. Heisere Kollektoren konnen naher umlaufen, wahrend kuhlere Kollektoren grosere Radien benotigen.',
  },
  {
    question: 'Was bedeutet die Kardaschow-Bewertung hier?',
    answer: 'Der Kardaschow-Wert wird aus der eingefangenen Leistung mit der logarithmischen Formel K = (log10(P) - 6) / 10 berechnet, wobei P die Leistung in Watt ist. Ein Wert nahe K1 steht fur planetaren Energieverbrauch, wahrend K2 sich der vollen Sternleistung annashert.',
  },
  {
    question: 'Ist die Materialmasse realistisch?',
    answer: 'Es handelt sich um eine erste bildungsspezifische Abschatzung basierend auf Kollektorflache, Flachendichte und einem Stabilitatsfaktor. Echte Entwurfe wurden Stationshaltung, Energiebertragung, Abbauverluste, Redundanz, Warmeabfuhr und Fertigungsinfrastruktur benotigen.',
  },
  {
    question: 'Warum benotigen helle Sterne so grose Kollektorsysteme?',
    answer: 'Sterne mit hoher Leuchtkraft verschieben den sicheren Warmieradius nach ausen. Das vergrosert die fur einen bestimmten Abdeckungsanteil benotigte Oberflache, sodass der Materialbedarf schneller steigen kann, als die eingefangene Leistung intuitiv wirkt.',
  },
  {
    question: 'Kann eine Zivilisation Kardaschow Typ II mit teilweiser Abdeckung erreichen?',
    answer: 'Ja, wenn der Mutterstern hell genug ist und die Kollektoren effizient sind. Bei einem sonnenahnlichen Stern erfordert das Erreichen von Typ II die Erfassung eines groen Teils der Sonnenleuchtkraft, aber bei helleren Sternen kann dasselbe Energieziel mit einem geringeren Abdeckungsanteil erreicht werden.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson-Kollektor-Visualisierung',
    starType: 'Sterntyp',
    structureType: 'Struktur',
    coverage: 'Kollektorabdeckung',
    operatingTemp: 'Betriebstemperatur',
    kardashevTarget: 'Kardaschow-Ziel',
    kardashevRating: 'Aktuelle Bewertung',
    capturedPower: 'Eingefangene Leistung',
    optimalRadius: 'Optimaler Radius',
    targetCoverage: 'Zielabdeckung',
    materialMass: 'Materialmasse',
    captureMeter: 'Fortschritt zum Ziel',
    statusReady: 'Passen Sie das System an, um den Kollektorbedarf zu schatzen.',
    statusUnderbuilt: 'Die Abdeckung liegt unter dem gewahlten Kardaschow-Ziel. Fugen Sie Kollektoren hinzu oder wahlen Sie einen helleren Stern.',
    statusBalanced: 'Abdeckung und Sternleistung liegen nahe am gewahlten Ziel auf Zivilisationsskala.',
    statusExtreme: 'Diese Konfiguration uberschreitet das Ziel. Sie erfasst enorme Leistung, aber der Materialbedarf steigt schnell.',
    orbitalPeriod: 'Umlaufzeit',
    collectorArea: 'Kollektorflache',
    mercuryMasses: '{value} Merkur-Massen',
    kilograms: '{value} kg',
    daysUnit: '{value} Tage',
    starMDwarf: 'M-Zwerg',
    starSun: 'Sonnentyp G',
    starA: 'A-Stern',
    starRedGiant: 'Roter Riese',
    starBlueGiant: 'Blauer Riese',
    structureSwarm: 'Dyson-Schwarm',
    structureRing: 'Aquatorring',
    structureShell: 'Starre Hulle',
    structureStatite: 'Statit-Spiegelwolke',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson Spharen Energiegewinnung Simulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine Dyson-Sphare ist nicht nur ein Science-Fiction-Bild eines Sterns in einer Hulle. Sie ist eine Familie moglicher Megastrukturkonzepte zum Abfangen von Sternleuchtkraft: Satellitenschwarme, Aquatorringe, dunne Spiegelwolken und die beruhmte, aber problematische starre Hulle. Dieser Simulator verwandelt diese Ideen in Zahlen, damit Sie vergleichen konnen, wie Sterntyp, Kollektortemperatur, Abdeckung und Strukturentwurf das Energiebudget verandern.',
    },
    {
      type: 'paragraph',
      html: 'Der Rechner schatzt die eingefangene Leistung, den thermischen Umlaufradius, die Kollektorflache, die Umlaufzeit, die Materialmasse und die fur ein gewahltes Kardaschow-Ziel benotigte Abdeckung. Er ist fur Studenten, Weltbauer, Wissenschaftskommunikatoren und alle entwickelt, die verstehen wollen, warum Typ-II-Zivilisationen schwer zu erreichen sind: Die Herausforderung ist nicht nur Energie, sondern auch Flache, Warme, Rohstoffabbau, Stabilitat und orbitale Logistik.',
    },
    {
      type: 'title',
      text: 'Wie der Dyson Radius geschatzt wird',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der optimale Radius wird aus der Sternleuchtkraft und der Kollektor-Betriebstemperatur berechnet. Ein Kollektor nahe einem hellen Stern erfahrt einen intensiven Fluss und muss heis laufen oder enorme Warmemengen abfuhren. Eine Bewegung nach ausen reduziert die thermische Belastung, aber die erforderliche Kollektorflache wachst mit dem Quadrat der Entfernung. Dieser Zielkonflikt erklart, warum derselbe Abdeckungsanteil bei einem schwachen M-Zwerg bescheiden und bei einem Blauen Riesen enorm sein kann.',
    },
    {
      type: 'title',
      text: 'Dyson Schwarm, Ring, Hulle und Statit Wolke im Vergleich',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson-Schwarm:</strong> viele unabhangig umlaufende Kollektoren. Er ist die plausibelste grosstrukturelle Architektur, da er schrittweise gebaut werden kann und keine starre Sternhulle erfordert.',
        '<strong>Aquatorring:</strong> ein schmaleres Kollektorbad mit geringerer Abdeckungseffizienz. Er ist als erste Megastruktur leichter vorstellbar, kann aber die volle Sternleistung nicht einfangen, ohne zu einem breiteren Schwarm zu werden.',
        '<strong>Starre Hulle:</strong> visuell ikonisch, aber mechanisch ungunstig. Eine Hulle um einen Stern hat schwerwiegende Stabilitats- und Materialprobleme, daher weist der Simulator ihr hohe Masse und geringe Stabilitat zu.',
        '<strong>Statit-Spiegelwolke:</strong> extrem leichte Reflektoren, die teilweise durch Strahlungsdruck gehalten werden. Sie reduziert den Materialbedarf, hat aber eine geringere Warmetoleranz und anspruchsvolle Kontrollanforderungen.',
      ],
    },
    {
      type: 'title',
      text: 'Erforderliche Abdeckung fur die Kardaschow Skala',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Kardaschow-Skala druckt den zivilisatorischen Energieverbrauch logarithmisch aus. In diesem Tool werden eingefangene Watt mit K = (log10(P) - 6) / 10 in eine K-Bewertung umgerechnet. Ein teilweiser Dyson-Schwarm um die Sonne kann den aktuellen menschlichen Energieverbrauch um viele Grosenordnungen bertreffen, lange bevor er den vollstandigen Typ-II-Status erreicht. Das Ergebnis der Zielabdeckung zeigt den Anteil der Sternleuchtkraft, der fur das gewahlte Ziel abgefangen werden muss.',
    },
    {
      type: 'table',
      headers: ['Entwurfswahl', 'Hauptvorteil', 'Hauptengpass'],
      rows: [
        ['Dyson-Schwarm', 'Schrittweise baubar mit unabhangigen Umlaufbahnen', 'Verkehrskontrolle und Energiebertragung'],
        ['Aquatorring', 'Geringere Anfangsflache und einfachere Geometrie', 'Begrenzte Abdeckung'],
        ['Starre Hulle', 'Maximale Erfassung in einem einfachen Diagramm', 'Strukturelle Instabilitat und enorme Masse'],
        ['Statit-Wolke', 'Sehr geringe Flachendichte', 'Prazise Stationshaltung und Warmegrenzen'],
      ],
    },
    {
      type: 'title',
      text: 'Materialmasse und Realitatscheck zum Rohstoffabbau',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Materialschatzung multipliziert die Kollektorflache mit einer angenommenen Flachendichte und einem Entwurfsstabilitatsfaktor. Sie gibt die Masse absichtlich in Merkur-Massen an, wenn die Zahl astronomisch wird, weil viele Dyson-Schwarm-Diskussionen sich den Abbau kleiner Planeten oder Asteroiden als Rohstoffquelle vorstellen. Selbst dunne Kollektoren werden massiv, wenn sie uber astronomische Einheitenskalen verteilt sind.',
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie das Ergebnis als Grosenordnungs-Richtwert und nicht als Bauplan. Echte Megastruktur-Technik wurde Strahlenschadenmodelle, Warmezyklen, Kollisionsvermeidung, Lageregelung, Energiebertragung, Fertigungsausbeute und langfristige Bahnevolution benotigen. Der Wert des Simulators liegt darin, dass er die ersten Einschrankungen sofort sichtbar macht.',
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
