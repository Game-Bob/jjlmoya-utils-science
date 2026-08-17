import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'svart-hal-handelsehorisont-simulator';
const title = 'Simulator för svarta håls händelsehorisont: Schwarzschildradie, fotonsfär och tidsdilatation';
const description = 'Utforska händelsehorisonten för ett svart hål med interaktiva beräkningar av massa, omloppsavstånd, tidsdilatation, fotonsfär, flykthastighet och Schwarzschildradie.';

const howTo = [
  {
    name: 'Välj den svarta hålets massa',
    text: 'Flytta massreglaget från ett stjärnmassigt svart hål till ett supermassivt svart hål och se hur Schwarzschildradien skalar i realtid.',
  },
  {
    name: 'För sonden nära horisonten',
    text: 'Ställ in avståndet i Schwarzschildradier för att jämföra en säker yttre omloppsbana, fotonsfärsområdet och kanten av händelsehorisonten.',
  },
  {
    name: 'Inspektera relativistiska effekter',
    text: 'Läs av flykthastighet, gravitationell tidsdilatation, rödförskjutning och omloppstid för att förstå varför vanlig intuition bryter samman nära horisonten.',
  },
  {
    name: 'Jämför namngivna radier',
    text: 'Använd vägledande ringar för händelsehorisont, fotonsfär och ISCO för att förstå de olika gränserna kring ett icke-roterande svart hål.',
  },
];

const faq = [
  {
    question: 'Vad är händelsehorisonten för ett svart hål?',
    answer: 'Händelsehorisonten är gränsen där flykthastigheten når ljushastigheten. När ett objekt väl passerat den kan ingen signal som rör sig med eller under ljushastigheten återvända till det yttre universumet.',
  },
  {
    question: 'Vad betyder Schwarzschildradien?',
    answer: 'Schwarzschildradien är händelsehorisontens radie för ett icke-roterande, oladdat svart hål. Den växer linjärt med massan, så att dubbla massan dubblar horisontradien.',
  },
  {
    question: 'Vad är fotonsfären?',
    answer: 'Fotonsfären är ett område vid 1,5 Schwarzschildradier där ljus kan kretsa kring det svarta hålet i en instabil bana. Små störningar får fotoner att antingen fly utåt eller falla inåt.',
  },
  {
    question: 'Vad är ISCO?',
    answer: 'ISCO står för "Innermost Stable Circular Orbit" (innersta stabila cirkulära omloppsbana). För ett icke-roterande svart hål ligger den vid 3 Schwarzschildradier (eller 6 gravitationsradier) och markerar den sista stabila omloppsbanan för massiva partiklar.',
  },
  {
    question: 'Varför ökar tidsdilatationen nära horisonten?',
    answer: 'I Schwarzschild-geometrin går klockor djupare i gravitationsfältet långsammare i förhållande till avlägsna betraktare. Den visade faktorn närmar sig noll allteftersom sonden närmar sig händelsehorisonten.',
  },
  {
    question: 'Kan den här simulatorn modellera ett roterande svart hål?',
    answer: 'Nej. Den använder Schwarzschild-lösningen, som förutsätter ingen rotation och ingen elektrisk laddning. Verkliga astrofysiska svarta hål roterar ofta, och rotationen ändrar horisontstorleken, ISCO-positionen och skivans beteende.',
  },
  {
    question: 'Varför är supermassiva svarta hål mindre "tidvattensvåldsamma" vid horisonten?',
    answer: 'Tidvattensgradienten vid horisonten minskar när massan hos det svarta hålet ökar. Ett litet stjärnmassigt svart hål kan sträcka ut objekt våldsamt nära horisonten, medan ett supermassivt svart hål kan ha en skonsammare lokal gradient vid den gränsen.',
  },
  {
    question: 'Visar visualiseringen en riktig bild av ett svart hål?',
    answer: 'Det är ett pedagogiskt diagram, inte en avbildning med strålkastning (ray-tracing). Ringarna och skivan är skalade till de förenklade Schwarzschildradierna så att de fysikaliska zonerna är lätta att jämföra.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Händelsehorisontens fältkarta',
    visualCaption: 'Sonden rör sig genom skalad Schwarzschild-geometri. De ljusa vägledande ringarna markerar horisonten, fotonsfären och den innersta stabila cirkulära omloppsbanan.',
    controlsTitle: 'Kontroller för svart hål',
    eventHorizon: 'Händelsehorisont',
    photonSphere: 'Fotonsfär',
    isco: 'ISCO',
    rsLabel: 'Schwarzschildradie',
    diameterLabel: 'Diameter',
    timeLabel: 'Tidsdilatation',
    redshiftLabel: 'Rödförskjutning',
    statusSafe: 'Utanför stabilt omloppsområde',
    statusPhoton: 'Inne i fotonsfärens zon',
    statusInside: 'Vid horisontgränsen',
    diameter: 'Horisontdiameter',
    lightCrossing: 'Ljuskorsningstid',
    timeDilation: 'Klockhastighet vs. avlägsen betraktare',
    redshift: 'Gravitationell rödförskjutning',
    mass: 'Svart håls massa',
    distance: 'Sondens avstånd',
    speed: 'Sondens omloppshastighet',
    escapeVelocity: 'Flykthastighet',
    orbitalPeriod: 'Sondens omloppstid',
    tidalGradient: 'Tidvattensgradient',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'solmassor',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 solmassor',
    initialDistanceOutput: '3,0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Svart hål händelsehorisont-simulator för Schwarzschild-radie, fotonsfär och tidsdilatation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna händelsehorisont-simulator omvandlar nyckelidéerna kring Schwarzschild-svarta hål till en interaktiv visuell modell.',
    },
    {
      type: 'paragraph',
      html: 'Simulatorn är utformad för astronomistudenter, fysiklärare och nyfikna forskare.',
    },
    {
      type: 'title',
      text: 'Hur händelsehorisontens radie beräknas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För ett icke-roterande, oladdat svart hål är radien <strong>Schwarzschild-radien</strong>: <strong>Rs = 2GM / c^2</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Eftersom radien skalar linjärt med massan har ett svart hål med 10 solmassor en radie på cirka 29,5 km.',
    },
    {
      type: 'table',
      headers: ['Region', 'Radie i Schwarzschild-radier', 'Betydelse'],
      rows: [
        ['Händelsehorisont', '1.0 Rs', 'Enkelriktningsgränsen där flykthastigheten är lika med ljushastigheten.'],
        ['Fotonsfär', '1.5 Rs', 'Den ostabila cirkulära omloppsbanan för ljus.'],
        ['ISCO', '3.0 Rs', 'Den innersta stabila cirkulära omloppsbanan för massiva partiklar.'],
        ['Svagt fält', '6 Rs och bortom', 'Gravitationen är fortfarande stark men cirkulära omloppsbanor är lättare att upprätthålla.'],
      ],
    },
    {
      type: 'title',
      text: 'Flykthastighet och kausal gräns',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Flykthastigheten är den hastighet som krävs för att nå godtyckligt långt bort utan ytterligare framdrivning.',
    },
    {
      type: 'paragraph',
      html: 'Flykthastighetsavläsningen ger en användbar intuition men är inte en komplett relativistisk beskrivning.',
    },
    {
      type: 'title',
      text: 'Tidsdilatation och gravitationell rödförskjutning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En klocka som hålls vid en fast radie utanför ett svart hål tickar långsammare jämfört med en avlägsen observatör. Den förenklade faktorn är <strong>sqrt(1 - Rs / r)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Gravitationell rödförskjutning följer samma geometri. Ljus som klättrar ur gravitationstunneln förlorar energi.',
    },
    {
      type: 'title',
      text: 'Fotonsfär och ISCO förklaras',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fotonsfären vid 1.5 Rs är den plats där ljus i princip kan kretsa i en ostabil cirkulär bana.',
    },
    {
      type: 'paragraph',
      html: 'ISCO vid 3 Rs representerar den sista stabila cirkulära omloppsbanan för materia.',
    },
    {
      type: 'title',
      text: 'Stellära kontra supermassiva svarta hål',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En överraskande läxa är att större svarta hål ger mindre extrema tidvattenskrafter vid horisonten.',
    },
    {
      type: 'paragraph',
      html: 'Simulatorn innehåller en tidvattensgradientavläsning uttryckt i jordgravitation per meter.',
    },
    {
      type: 'title',
      text: 'Begränsningar hos denna simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ingen spinn:</strong> använder Schwarzschild-geometri.',
        '<strong>Förenklad ackretionsfysik:</strong> illustrativ skiva.',
        '<strong>Ingen ray tracing:</strong> pedagogiskt diagram.',
        '<strong>Stationär klocka:</strong> inte i fritt fall.',
      ],
    },
    {
      type: 'title',
      text: 'Vanliga frågor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Använd detta verktyg för att uppskatta parametrar för ett svart hål.',
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