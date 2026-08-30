import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sfar-energifangst-simulator';
const title = 'Dyson sfär Energifångst simulator';
const description = 'Uppskatta megastrukturdesign som Dyson-svärmar, ekvatoriella ringar, styva skal och statit-spegelmoln för olika stjärntyper. Beräkna fångad effekt, termisk omloppsradie, materialmassa och täckningsgrad.';

const howTo = [
  {
    name: 'Välj stjärntyp',
    text: 'Börja med en M-dvärg, en solliknande G-stjärna, en A-stjärna, en röd jätte eller en blå jätte. Simulatorn använder representativa värden för ljusstyrka och massa.',
  },
  {
    name: 'Välj megastruktur-arkitektur',
    text: 'Jämför en Dyson-svärm, en ekvatoriell ring, ett styvt skal eller ett statit-spegelmoln. Varje koncept har olika effektivitet och materialkrav.',
  },
  {
    name: 'Justera täckning och driftstemperatur',
    text: 'Öka täckningsgraden för att fånga mer effekt och justera driftstemperaturen för att flytta kollektorerna närmare eller längre bort från stjärnan.',
  },
  {
    name: 'Ställ in Kardasjev-mål',
    text: 'Använd målreglaget för att se vilken andel av stjärnans strålning som krävs för att nå en viss civilisatorisk effektnivå.',
  },
];

const faq = [
  {
    question: 'Vad är skillnaden mellan en Dyson-sfär och en Dyson-svärm?',
    answer: 'En styv Dyson-sfär är ett helt heltäckande skal runt en stjärna, medan en Dyson-svärm är en stor samling oberoende kretsande kollektorer. De flesta ingenjörsstudier föredrar svärmar eftersom ett fast skal skulle vara strukturellt instabilt och kräva orimliga mängder material.',
  },
  {
    question: 'Hur beräknar simulatorn den optimala radien?',
    answer: 'Den uppskattar avståndet där kollektorer som strålar från båda sidor uppnår den valda driftstemperaturen under stjärnans givna ljusstyrka. Varmare kollektorer kan ligga i närmare omloppsbanor.',
  },
  {
    question: 'Vad innebär Kardasjev-betyget i detta verktyg?',
    answer: 'Kardasjev-värdet beräknas från den fångade effekten i watt med formeln K = (log10(P) - 6) / 10. Ett värde nära K1 motsvarar jordens planetära energianvändning, medan K2 innebär att nästan hela stjärnans effekt fångas.',
  },
  {
    question: 'Är den beräknade materialmassan realistisk?',
    answer: 'Det är en uppskattning baserad på kollektorarea, ytdensitet och stabilitetsfaktorer. Verkliga konstruktioner kräver ytterligare massa för banhållning, energiöverföring och kylning.',
  },
  {
    question: 'Varför kräver ljusstarka stjärnor så gigantiska kollektorsystem?',
    answer: 'Hög ljusstyrka skjuter den termiskt säkra radien utåt. Eftersom sfärens yta växer med kvadraten på avståndet ökar materialbehovet snabbt.',
  },
  {
    question: 'Kan en civilisation nå Kardasjev Typ II med partiell täckning?',
    answer: 'Ja, förutsatt att stjärnan är tillräckligt ljusstark. Runt solen krävs nästan total täckning för Typ II, men runt en blå jätte räcker en liten bråkdel av den totala strålningen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisering av Dyson-kollektor',
    starType: 'Stjärntyp',
    structureType: 'Struktur',
    coverage: 'Kollektortäckning',
    operatingTemp: 'Driftstemperatur',
    kardashevTarget: 'Kardasjev-mål',
    kardashevRating: 'Aktuell nivå',
    capturedPower: 'Fångad effekt',
    optimalRadius: 'Optimal radie',
    targetCoverage: 'Måltäckning',
    materialMass: 'Materialmassa',
    captureMeter: 'Framsteg mot mål',
    statusReady: 'Justera systemet för att uppskatta kollektorbehovet.',
    statusUnderbuilt: 'Täckningen är lägre än det valda Kardasjev-målet.',
    statusBalanced: 'Täckning och stjärneffekt ligger nära det valda civilisatoriska målet.',
    statusExtreme: 'Denna konfiguration överstiger målet. Den fångar enorm effekt, men materialbehovet ökar snabbt.',
    orbitalPeriod: 'Omloppstid',
    collectorArea: 'Kollektorarea',
    mercuryMasses: '{value} Merkurius-massor',
    kilograms: '{value} kg',
    daysUnit: '{value} dagar',
    starMDwarf: 'M-dvärg',
    starSun: 'Solliknande G-stjärna',
    starA: 'A-stjärna',
    starRedGiant: 'Röd jätte',
    starBlueGiant: 'Blå jätte',
    structureSwarm: 'Dyson-svärm',
    structureRing: 'Ekvatoriell ring',
    structureShell: 'Styvt skal',
    structureStatite: 'Statit-spegelmoln',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson sfär Energifångst simulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En Dyson-sfär är inte bara en science fiction-bild av ett fast skal runt en stjärna. Det är en hel familj av megastrukturkoncept för att fånga stjärnstrålning: från satellitsvärmar och ekvatoriella ringar till lätta statit-speglar.',
    },
    {
      type: 'paragraph',
      html: 'Verktyget beräknar fångad strålningseffekt, termisk omloppsradie, kollektorarea, omloppstid och materialmassa i Merkurius-massor.',
    },
    {
      type: 'title',
      text: 'Beräkning av optimal Dyson-radie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den optimala radien beror direkt på stjärnans ljusstyrka och kollektorernas maximala driftstemperatur.',
    },
    {
      type: 'title',
      text: 'Jämförelse av megastrukturkoncept',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson-svärm:</strong> Ett stort antal oberoende kollektorer. Det mest realistiska konceptet eftersom det kan byggas stegvis.',
        '<strong>Ekvatoriell ring:</strong> Ett smalare bälte av kollektorer med enklare geometri.',
        '<strong>Styvt skal:</strong> Ett helt täckande skal som fångar all strålning, men är mekaniskt instabilt.',
        '<strong>Statit-spegelmoln:</strong> Mycket lätta speglar som hålls på plats av strålningstryck.',
      ],
    },
    {
      type: 'title',
      text: 'Täckningsgrad för Kardasjev-skalan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kardasjev-skalan mäter en civilisations energianvändning. Att fånga en bråkdel av solens strålning överstiger mänsklighetens nuvarande förbrukning med flera storleksordningar.',
    },
    {
      type: 'table',
      headers: ['Konstruktion', 'Främsta fördel', 'Största utmaning'],
      rows: [
        ['Dyson-svärm', 'Kan byggas i etapper', 'Banhantering och energitransmission'],
        ['Ekvatoriell ring', 'Mindre initial yta', 'Begränsad täckningsgrad'],
        ['Styvt skal', 'Maximal energifångst', 'Strukturell instabilitet och gigantisk massa'],
        ['Statit-spegelmoln', 'Mycket låg ytdensitet', 'Exakt positionskontroll och termiska gränser'],
      ],
    },
    {
      type: 'title',
      text: 'Materialbehov och astrofysikalisk utvärdering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Materialbehovet anges i Merkurius-massor. Många teoretiska studier antar att mindre planeter måste monteras ned för att ge råmaterial.',
    },
    {
      type: 'paragraph',
      html: 'Använd dessa resultat för att förstå de fysikaliska storleksordningarna inom stjärningenjörskonst.',
    },
    { type: 'paragraph', html: 'Den här förklaringen tydliggör modellens antaganden och visar hur parametrarna ändrar resultatet. Ändra en variabel i taget och jämför flera körningar så att varje skillnad kan kopplas till en tydlig orsak. Visualiseringen är en pedagogisk approximation: ett verkligt system innehåller fler variabler, mätosäkerheter och randvillkor. Använd resultatet för att förstå storleksordningar, ställa frågor och jämföra scenarier. För praktiska beslut eller vetenskaplig analys måste primärdata, enheter och relevanta källor alltid kontrolleras. Spara inställningarna om du vill upprepa beräkningen och diskutera modellens begränsningar.' },
    { type: 'paragraph', html: 'Upprepa beräkningen med samma inställningar och ändra sedan en indata åt gången. Skriv ned startvärden, beräkningsregler och gränser så att modellens mönster kan skiljas från numerisk variation eller slump. Resultatet är pedagogiskt och ska läsas tillsammans med antaganden och begränsningar. Verkliga mätningar eller konstruktioner kräver ytterligare data och sakkunnig granskning.' },
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
