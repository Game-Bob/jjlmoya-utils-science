import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-spharen-energie-gewinnung-simulator';
const title = 'Dyson Sphären Energieausbeute Simulator';
const description = 'Schätzen Sie Kollektorentwürfe wie Dyson-Schwärme, Äquatorringe, starre Hüllen und Statit-Spiegelwolken für verschiedene Sterntypen ab. Berechnen Sie die aufgefangene Leistung, den thermischen Umlaufradius, die benötigte Materialmasse und die erforderliche Abdeckung für Ihr Kardaschow-Ziel.';

const howTo = [
  {
    name: 'Wählen Sie einen Sterntyp',
    text: 'Beginnen Sie mit einem M-Zwerg, einem sonnenähnlichen G-Stern, einem A-Stern, einem Roten Riesen oder einem Blauen Riesen. Der Simulator verwendet repräsentative Werte für Leuchtkraft und Masse zur Berechnung von Radius und Umlaufzeit.',
  },
  {
    name: 'Wählen Sie die Megastruktur-Architektur',
    text: 'Vergleichen Sie einen Dyson-Schwarm, einen Äquatorring, eine starre Hülle oder eine Statit-Spiegelwolke. Jeder Entwurf basiert auf unterschiedlichen Annahmen zu Einfangeffizienz, Materialdichte und Stabilität.',
  },
  {
    name: 'Passen Sie Abdeckung und Betriebstemperatur an',
    text: 'Erhöhen Sie den Abdeckungsgrad zur Steigerung der abgefangenen Leistung und verändern Sie die Betriebstemperatur, um die Kollektoren näher am Stern oder weiter entfernt zu positionieren.',
  },
  {
    name: 'Stellen Sie ein Kardaschow-Ziel ein',
    text: 'Nutzen Sie den Zielregler, um zu ermitteln, welcher Anteil der Sternstrahlung abgefangen werden muss, um ein zivilisatorisches Energieziel zu erreichen.',
  },
];

const faq = [
  {
    question: 'Was unterscheidet eine Dyson-Sphäre von einem Dyson-Schwarm?',
    answer: 'Eine starre Dyson-Sphäre ist eine geschlossene Hülle um einen Stern. Ein Dyson-Schwarm hingegen ist eine Ansammlung unabhängiger, umlaufender Kollektoren. Technische Studien bevorzugen Schwärme, da eine feste Hülle strukturell instabil wäre und unvorstellbare Materialmengen verschlingen würde.',
  },
  {
    question: 'Wie wird der optimale Umlaufradius ermittelt?',
    answer: 'Der Simulator berechnet die Distanz, bei der die Kollektoren unter der gegebenen Sternleuchtkraft ihre Strahlungswärme beidseitig abgeben und dabei genau die gewählte Betriebstemperatur halten. Heißere Kollektoren können näher am Stern kreisen.',
  },
  {
    question: 'Was bedeutet die Kardaschow-Skala in diesem Werkzeug?',
    answer: 'Der Kardaschow-Wert wird aus der abgefangenen Leistung in Watt über die logarithmische Beziehung K = (log10(P) - 6) / 10 berechnet. Ein Wert nahe K1 entspricht dem planetaren Energieverbrauch der Erde, während K2 die vollständige Ausnutzung der Sternleistung bedeutet.',
  },
  {
    question: 'Ist die berechnete Materialmasse realistisch?',
    answer: 'Es handelt sich um eine vereinfachte physikalische Abschätzung basierend auf Oberfläche, Flächenmasse und Stabilitätsfaktoren. Reale Konstruktionen erfordern zusätzliche Massen für Kurskorrekturen, Energieübertragung, Abbauverluste und Kühlung.',
  },
  {
    question: 'Warum erfordern leuchtstarke Sterne gigantische Kollektorflächen?',
    answer: 'Helle Sterne verschieben den thermisch sicheren Abstand weit nach außen. Dadurch vergrößert sich die Kugelfläche im Quadrat zur Entfernung, sodass der Materialbedarf für denselben Prozentrang an Abdeckung extrem ansteigt.',
  },
  {
    question: 'Kann eine Zivilisation Typ II mit teilweiser Abdeckung erreichen?',
    answer: 'Ja, sofern der Hauptstern eine ausreichend hohe Leuchtkraft besitzt. Bei sonnenähnlichen Sternen erfordert Typ II fast die gesamte Strahlung, bei blauen Riesen reicht bereits ein kleiner Bruchteil der Gesamtemission.',
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
    statusReady: 'Passen Sie das System an, um den Kollektorbedarf zu schätzen.',
    statusUnderbuilt: 'Die Abdeckung liegt unter dem gewählten Kardaschow-Ziel. Fügen Sie Kollektoren hinzu oder wählen Sie einen helleren Stern.',
    statusBalanced: 'Abdeckung und Sternleistung liegen nahe am gewählten Ziel auf Zivilisationsskala.',
    statusExtreme: 'Diese Konfiguration überschreitet das Ziel. Sie erfasst enorme Leistung, aber der Materialbedarf steigt schnell.',
    orbitalPeriod: 'Umlaufzeit',
    collectorArea: 'Kollektorfläche',
    mercuryMasses: '{value} Merkur-Massen',
    kilograms: '{value} kg',
    daysUnit: '{value} Tage',
    starMDwarf: 'M-Zwerg',
    starSun: 'Sonnentyp G',
    starA: 'A-Stern',
    starRedGiant: 'Roter Riese',
    starBlueGiant: 'Blauer Riese',
    structureSwarm: 'Dyson-Schwarm',
    structureRing: 'Äquatorring',
    structureShell: 'Starre Hülle',
    structureStatite: 'Statit-Spiegelwolke',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson Sphären Energieausbeute Simulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine Dyson-Sphäre ist keineswegs nur ein Science-Fiction-Klischee einer geschlossenen Hülle um einen Stern. Es handelt sich um ein ganzes Spektrum technischer Megastruktur-Konzepte zur Erfassung von Sternenenergie: von beweglichen Satellitenschwärmen über äquatoriale Ringe bis hin zu ultraleichten Statit-Spiegeln. Dieser Simulator übersetzt theoretische Annahmen in konkrete physikalische Leistungskennzahlen.',
    },
    {
      type: 'paragraph',
      html: 'Die Anwendung berechnet die gewonnene Strahlungsleistung, den thermischen Umlaufradius, die Kollektorfläche, die Umlaufdauer sowie die benötigte Materialmasse für definierte Kardaschow-Stufen. Entwickelt für Studierende, Wissenschaftskommunikatoren und Astrophysik-Begeisterte.',
    },
    {
      type: 'title',
      text: 'Berechnung des optimalen Dyson-Radius',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der optimale Abstand hängt direkt von der Leuchtkraft des Zentralgestirns und der maximalen Betriebstemperatur der Kollektoroberflächen ab. Nahe am Stern herrscht enorme Strahlungsintensität, was hohe thermische Belastungen erzeugt. Eine größere Entfernung kühlt das System, erhöht aber den Flächenbedarf quadratisch zur Distanz.',
    },
    {
      type: 'title',
      text: 'Vergleich der Megastruktur-Konzepte',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson-Schwarm:</strong> Eine Vielzahl unabhängiger Kollektoren auf eigenen Umlaufbahnen. Das realistischste Modell, da es schrittweise erbaut werden kann.',
        '<strong>Äquatorring:</strong> Ein schmaler Gürtel von Solarkollektoren. Einfacher zu realisieren, deckt jedoch nur einen geringen Winkelbereich der Sternabstrahlung ab.',
        '<strong>Starre Hülle:</strong> Die klassische, aber physikalisch instabile Hülle. Erfordert unvorstellbare Zugfestigkeiten und enorme Materialmengen.',
        '<strong>Statit-Spiegelwolke:</strong> Ultraleichte Spiegel, die durch den Strahlungsdruck des Sterns in Position gehalten werden.',
      ],
    },
    {
      type: 'title',
      text: 'Abdeckung für die Kardaschow-Skala',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Kardaschow-Skala klassifiziert Zivilisationen anhand ihres Energieverbrauchs. Ein teilweiser Dyson-Schwarm um unsere Sonne würde den gegenwärtigen Gesamtenergiebedarf der Menschheit um ein Vielfaches übertreffen, lange bevor der Status einer Typ-II-Zivilisation erreicht ist.',
    },
    {
      type: 'table',
      headers: ['Architektur', 'Hauptvorteil', 'Größte Herausforderung'],
      rows: [
        ['Dyson-Schwarm', 'Schrittweiser Aufbau möglich', 'Orbitale Verkehrssteuerung & Mikrowellen-Übertragung'],
        ['Äquatorring', 'Geringerer Materialaufwand', 'Stark begrenzte Energierückgewinnung'],
        ['Starre Hülle', 'Vollständige Strahlungserfassung', 'Extrem hohe Materialspannungen und Eigengravitation'],
        ['Statit-Spiegelwolke', 'Minimales Gewicht pro Quadratkilometer', 'Komplexe Ausrichtung gegen den Strahlungsdruck'],
      ],
    },
    {
      type: 'title',
      text: 'Materialbedarf und astrophysikalischer Realitätscheck',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der Materialbedarf wird in Einheiten von Merkur-Massen angegeben. Viele theoretische Entwürfe nehmen an, dass ganze Monde oder kleinere Planeten im System abgebaut und zu Hauchdünnen Solarsegeln umgeformt werden müssen.',
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie diese Werte als erste physikalische Orientierung für das Verständnis der Größenordnungen interstellarer Ingenieurskunst.',
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