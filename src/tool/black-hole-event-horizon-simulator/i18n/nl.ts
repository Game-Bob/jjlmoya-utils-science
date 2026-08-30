import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zwart-gat-gebeurtenishorizon-simulator';
const title = 'Zwart Gat Gebeurtenishorizon Simulator';
const description = 'Verken de gebeurtenishorizon van een zwart gat met interactieve berekeningen van massa, baanafstand, tijddilatatie, fotonenbol, ontsnappingssnelheid en Schwarzschild-straal.';

const howTo = [
  {
    name: 'Kies de massa van het zwarte gat',
    text: 'Beweeg de massaschuif van een stellair zwart gat naar een superzwaar zwart gat en zie hoe de Schwarzschild-straal in realtime schaalt.',
  },
  {
    name: 'Breng de sonde naar de horizon',
    text: 'Stel de afstand in Schwarzschild-stralen in om een veilige buitenbaan, het fotonenbol-gebied en de rand van de gebeurtenishorizon te vergelijken.',
  },
  {
    name: 'Inspecteer relativistische effecten',
    text: 'Lees de ontsnappingssnelheid, gravitationele tijddilatatie, roodverschuiving en omlooptijd af om te begrijpen waarom gewone intuïtie nabij de horizon tekortschiet.',
  },
  {
    name: 'Vergelijk de karakteristieke stralen',
    text: 'Gebruik de geleideringen voor de gebeurtenishorizon, fotonenbol en ISCO om de verschillende grenzen rond een niet-roterend zwart gat te begrijpen.',
  },
];

const faq = [
  {
    question: 'Wat is de gebeurtenishorizon van een zwart gat?',
    answer: 'De gebeurtenishorizon is de grens waar de ontsnappingssnelheid de lichtsnelheid bereikt. Zodra een object deze overschrijdt, kan geen enkel signaal dat met of onder de lichtsnelheid beweegt, terugkeren naar het buitenuniversum.',
  },
  {
    question: 'Wat betekent de Schwarzschild-straal?',
    answer: 'De Schwarzschild-straal is de straal van de gebeurtenishorizon voor een niet-roterend, ongeladen zwart gat. Deze groeit lineair met de massa, dus verdubbeling van de massa verdubbelt de horizonstraal.',
  },
  {
    question: 'Wat is de fotonenbol?',
    answer: 'De fotonenbol is een gebied op 1,5 Schwarzschild-straal waar licht in een onstabiele baan om het zwarte gat kan cirkelen. Kleine verstoringen zorgen ervoor dat fotonen naar buiten ontsnappen of naar binnen vallen.',
  },
  {
    question: 'Wat is de ISCO?',
    answer: 'ISCO staat voor de binnenste stabiele cirkelbaan (Innermost Stable Circular Orbit). Voor een niet-roterend zwart gat ligt deze op 3 Schwarzschild-stralen (of 6 gravitationele stralen) en markeert de laatste stabiele cirkelbaan voor massieve deeltjes.',
  },
  {
    question: 'Waarom neemt tijddilatatie toe nabij de horizon?',
    answer: 'In de Schwarzschild-meetkunde tikken klokken dieper in het gravitatieveld langzamer ten opzichte van verre waarnemers. De weergegeven factor nadert nul naarmate de sonde de gebeurtenishorizon nadert.',
  },
  {
    question: 'Kan deze simulator een roterend zwart gat modelleren?',
    answer: 'Nee. Deze gebruikt de Schwarzschild-oplossing, die uitgaat van geen spin en geen elektrische lading. Echte astrofysische zwarte gaten roteren vaak, wat de horizonafmetingen, ISCO-locatie en het schijfgedrag verandert.',
  },
  {
    question: 'Waarom zijn superzware zwarte gaten minder "gewelddadig" aan de horizon?',
    answer: 'De getijdengradiënt aan de horizon neemt af naarmate de massa van het zwarte gat toeneemt. Een klein stellair zwart gat kan objecten hevig uitrekken nabij de horizon, terwijl een superzwaar zwart gat een zachtere lokale gradiënt aan die grens kan hebben.',
  },
  {
    question: 'Toont de visualisatie een echt beeld van een zwart gat?',
    answer: 'Het is een educatief diagram, geen ray-traced observatie. De ringen en de schijf zijn geschaald naar de vereenvoudigde Schwarzschild-stralen zodat de fysieke zones gemakkelijk te vergelijken zijn.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Gebeurtenishorizon veldkaart',
    visualCaption: 'De sonde beweegt door de geschaalde Schwarzschild-meetkunde. De felle geleideringen markeren de horizon, de fotonenbol en de binnenste stabiele cirkelbaan.',
    controlsTitle: 'Zwart gat bediening',
    eventHorizon: 'Gebeurtenishorizon',
    photonSphere: 'Fotonenbol',
    isco: 'ISCO',
    rsLabel: 'Schwarzschild-straal',
    diameterLabel: 'Diameter',
    timeLabel: 'Tijddilatatie',
    redshiftLabel: 'Roodverschuiving',
    statusSafe: 'Buiten stabiel baangebied',
    statusPhoton: 'Binnen de fotonenbol-zone',
    statusInside: 'Aan de horizonlimiet',
    diameter: 'Horizondiameter',
    lightCrossing: 'Lichtoversteektijd',
    timeDilation: 'Kloksnelheid vs. verre waarnemer',
    redshift: 'Gravitationele roodverschuiving',
    mass: 'Massa van het zwarte gat',
    distance: 'Afstand van de sonde',
    speed: 'Baansnelheid van de sonde',
    escapeVelocity: 'Ontsnappingssnelheid',
    orbitalPeriod: 'Omlooptijd van de sonde',
    tidalGradient: 'Getijdengradiënt',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'zonnemassa',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 zonnemassa',
    initialDistanceOutput: '3,0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Zwart Gat Gebeurtenishorizon Simulator voor Schwarzschild-radius, fotonsfeer en tijddilatatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze gebeurtenishorizon-simulator zet de kernconcepten van Schwarzschild-zwarte gaten om in een interactief visueel model.',
    },
    {
      type: 'paragraph',
      html: 'De simulator is ontworpen voor studenten astronomie, docenten natuurkunde en nieuwsgierige onderzoekers.',
    },
    {
      type: 'title',
      text: 'Hoe de gebeurtenishorizon-radius wordt berekend',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor een niet-roterend, ongeladen zwart gat is de radius de <strong>Schwarzschild-radius</strong>: <strong>Rs = 2GM / c^2</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Omdat de radius lineair schaalt met massa, heeft een zwart gat van 10 zonnemassa\'s een radius van ongeveer 29,5 km.',
    },
    {
      type: 'table',
      headers: ['Regio', 'Radius in Schwarzschild-radii', 'Betekenis'],
      rows: [
        ['Gebeurtenishorizon', '1.0 Rs', 'De grens van waaruit niets kan ontsnappen, omdat de ontsnappingssnelheid gelijk is aan c.'],
        ['Fotonsfeer', '1.5 Rs', 'De instabiele cirkelvormige baan voor licht rond een Schwarzschild-zwart gat.'],
        ['ISCO', '3.0 Rs', 'De binnenste stabiele cirkelvormige baan voor deeltjes met massa.'],
        ['Zwak veld', '6 Rs en verder', 'Zwaartekracht is nog steeds sterk, maar cirkelvormige banen zijn makkelijker te behouden.'],
      ],
    },
    {
      type: 'title',
      text: 'Ontsnappingssnelheid en causale grens',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De ontsnappingssnelheid is de snelheid die een object nodig heeft om zonder verdere voortstuwing willekeurig ver weg te komen.',
    },
    {
      type: 'paragraph',
      html: 'De weergave van de ontsnappingssnelheid biedt nuttige intuïtie, maar is geen volledige relativistische beschrijving.',
    },
    {
      type: 'title',
      text: 'Tijddilatatie en gravitationele roodverschuiving',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een klok die op een vaste afstand buiten een zwart gat staat, tikt langzamer vergeleken met een verre waarnemer. De vereenvoudigde factor is <strong>sqrt(1 - Rs / r)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Gravitationele roodverschuiving volgt dezelfde geometrie. Licht dat uit de zwaartekrachtput klimt, verliest energie.',
    },
    {
      type: 'title',
      text: 'Fotonsfeer en ISCO uitgelegd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De fotonsfeer op 1.5 Rs is de plaats waar licht in principe in een instabiele cirkelvormige baan kan bewegen.',
    },
    {
      type: 'paragraph',
      html: 'De ISCO op 3 Rs is de binnenste stabiele cirkelvormige baan voor materie.',
    },
    {
      type: 'title',
      text: 'Stellair versus supermassief zwart gat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een verrassende les is dat grotere zwarte gaten minder extreme getijdenkrachten hebben bij de horizon.',
    },
    {
      type: 'paragraph',
      html: 'De simulator bevat een getijdenverloopweergave in aardse zwaartekracht per meter.',
    },
    {
      type: 'title',
      text: 'Beperkingen van deze simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Geen spin:</strong> gebruikt Schwarzschild-geometrie.',
        '<strong>Vereenvoudigde accretiefysica:</strong> illustratieve schijf.',
        '<strong>Geen ray tracing:</strong> educatief diagram.',
        '<strong>Stationaire klok:</strong> niet in vrije val.',
      ],
    },
    {
      type: 'title',
      text: 'Veelgestelde vragen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze tool om de parameters van een zwart gat te schatten.',
    },
    { type: 'paragraph', html: 'Deze sectie beschrijft de geometrie van de simulatie uitgebreider. De Schwarzschildstraal groeit met de massa en is in de ideale Schwarzschildoplossing verbonden met de waarnemingshorizon. De fotonensfeer ligt verder naar buiten en stelt instabiele cirkelbanen voor licht voor; een kleine verstoring kan de verdere baan sterk wijzigen. De getoonde tijdsdilatatie hangt af van de gekozen waarnemer en is niet hetzelfde als de eigentijd van een lokale klok. Verander massa en afstand afzonderlijk om schalen te vergelijken zonder effecten te vermengen. Het model bevat geen rotatie, elektrische lading, omringende materie, accretieschijf, magnetische velden, straling of getijdenkrachten van een concreet object. Het helpt intuïtie voor de algemene relativiteit opbouwen en onderscheid maken tussen een wiskundige definitie en een astronomische waarneming. Een echte bron vereist gegevens over massa, rotatie, omgeving en baan plus een gepubliceerde methode. Deze pagina geeft geen operationele voorspelling of instructie om een compact object te naderen. Noteer de aannames voordat je een resultaat interpreteert.' },
    { type: 'paragraph', html: 'Je kunt ook de positie van de waarnemer wijzigen en vergelijken hoe de tijdweergave verandert. Dit helpt het verschil te begrijpen tussen een coördinatenweergave en de meting van een lokale klok. Bij een echt object beïnvloeden rotatie en omringende materie de lichtbanen en het waargenomen signaal; een eenvoudig bolsymmetrisch model kan daarom niet alle waarnemingen beschrijven. Noteer elke parameter en herhaal de berekening onder dezelfde voorwaarden om de oorsprong en grenzen van het resultaat te begrijpen.' },
    { type: 'paragraph', html: 'Vergelijk meerdere onafhankelijke runs en wijzig telkens één parameter. Zo kun je een geometrisch effect van het model onderscheiden van een gevolg van de gekozen waarnemer. De formules zijn nuttig voor intuïtie, maar hun interpretatie hangt altijd af van het referentiekader en de beginvoorwaarden.' },
    { type: 'paragraph', html: 'Gebruik dezelfde instellingen voor een herhaalbare vergelijking en verander daarna één parameter. Zo wordt duidelijk welke conclusie uit de geometrie volgt en welke afhangt van het gekozen referentiekader. De simulatie is een onderwijsmodel, geen volledige beschrijving van een waargenomen zwart gat.' },
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
