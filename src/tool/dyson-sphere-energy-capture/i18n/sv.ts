import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sfar-energiinfangning-simulator';
const title = 'Dyson sfar Energiinfangning Simulator';
const description = 'Uppskatta Dyson-svarm, ring, skal och statit-konstruktioner for olika stjarnor. Berakna infangad effekt, omloppsradie, materialmassa och tackning som behovs for att na en mal-Kardashevskala.';

const howTo = [
  {
    name: 'Valj en stjarntyp',
    text: 'Borja med en M-dvarg, solliknande stjarna, A-stjarna, rod jatte eller bla jatte. Simulatorn anvander representativa ljusstyrke- och massvarden for att uppskatta kollektorradie och omloppstid.',
  },
  {
    name: 'Valj megastrukturens arkitektur',
    text: 'Jamfor en Dyson-svarm, ekvatorialring, stelt skal eller statit-spegelmoln. Varje konstruktion har olika antaganden om infangningseffektivitet, materialtather och stabilitet.',
  },
  {
    name: 'Stall in tackning och drifttemperatur',
    text: 'Oka tackningen for att fanga mer stjarnkraft, justera sedan drifttemperaturen for att flytta kollektorerna narmare eller langre bort fran stjarnan.',
  },
  {
    name: 'Valj ett Kardashev-mal',
    text: 'Anvand mal-reglaget for att se hur mycket av stjarnan som maste omfattas for att na en energiniva pa civilisationsskala.',
  },
];

const faq = [
  {
    question: 'Vad ar skillnaden mellan en Dyson-sfar och en Dyson-svarm?',
    answer: 'Ett stelt Dyson-skal ar ett kontinuerligt skal runt en stjarna, medan en Dyson-svarm ar en stor samling oberoende kretsande kollektorer. De flesta tekniska diskussioner favoriserar svarmar eftersom ett fast skal skulle vara strukturellt instabilt och extremt materialkravande.',
  },
  {
    question: 'Hur valjer simulatorn optimal radie?',
    answer: 'Den uppskattar avstandet dar kollektorer som stralar fran bada sidor nar den valda drifttemperaturen under den givna stjarnans ljusstyrka. Hetare kollektorer kan ga i bana narmare, medan svalare kollektorer kraver storre radier.',
  },
  {
    question: 'Vad betyder Kardashev-klassificeringen har?',
    answer: 'Kardashev-vardet beraknas fran infangad effekt med den logaritmiska formeln K = (log10(P) - 6) / 10, dar P ar effekt i watt. Ett varde nara K1 representerar energianvandning pa planetarisk skala, medan K2 narmar sig full stjarnkraft.',
  },
  {
    question: 'Ar materialmassan realistisk?',
    answer: 'Det ar en pedagogisk uppskattning av forsta ordningen baserad pa kollektorarea, ytdensitet och en stabilitetsfaktor. Verkliga konstruktioner skulle krava positionshallning, kraftoverforing, brytningsforluster, redundans, varmeavledning och tillverkningsinfrastruktur.',
  },
  {
    question: 'Varfor kraver ljusa stjornor sa stora kollektorsystem?',
    answer: 'Stjarnor med hog ljusstyrka skjuter den sakra termiska radien utat. Det okar den yta som behovs for en given tackningsgrad, sa materialbehovet kan stiga snabbare an den infangade effekten kanslas intuitiv.',
  },
  {
    question: 'Kan en civilisation na Kardashev typ II med delvis tackning?',
    answer: 'Ja, om vardstjarnan ar tillrackligt ljusstark och kollektorerna effektiva. Runt en solliknande stjarna kraver nara typ II att en stor del av solens ljusstyrka infangas, men runt ljusare stjornor kan samma effektmal uppnas med lagre tackningsgrad.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson-kollektor visualisering',
    starType: 'Stjarntyp',
    structureType: 'Struktur',
    coverage: 'Kolloktortackning',
    operatingTemp: 'Drifttemperatur',
    kardashevTarget: 'Kardashev-mal',
    kardashevRating: 'Nuvarande klassificering',
    capturedPower: 'Infangad effekt',
    optimalRadius: 'Optimal radie',
    targetCoverage: 'Maltackning',
    materialMass: 'Materialmassa',
    captureMeter: 'Framsteg mot mal',
    statusReady: 'Justera systemet for att uppskatta kollektorbehovet.',
    statusUnderbuilt: 'Tackningen ligger under det valda Kardashev-malet. Lagga till kollektorer eller valj en ljusare stjarna.',
    statusBalanced: 'Tackning och stjarnans effekt ligger nara det valda civilisationsmalet.',
    statusExtreme: 'Den har konfigurationen overskrider malet. Den fangar enorm effekt, men materialbehovet okar snabbt.',
    orbitalPeriod: 'Omloppstid',
    collectorArea: 'Kollektorarea',
    mercuryMasses: '{value} Merkuriusmassor',
    kilograms: '{value} kg',
    daysUnit: '{value} dagar',
    starMDwarf: 'M-dvarg',
    starSun: 'G-stjarna solliknande',
    starA: 'A-stjarna',
    starRedGiant: 'Rod jatte',
    starBlueGiant: 'Bla jatte',
    structureSwarm: 'Dyson-svarm',
    structureRing: 'Ekvatorialring',
    structureShell: 'Stelt skal',
    structureStatite: 'Statit-spegelmoln',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson sfar Energiinfangning Simulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En Dyson-sfar ar inte bara en science fiction-bild av en stjarna inuti ett skal. Det ar en familj av mojliga megastrukturkoncept for att fanga upp stjarnors ljusstyrka: svarmar av satelliter, ekvatorialringar, tunna spegelmoln och det beromda men problematiska stela skalet. Den har simulatorn omvandlar dessa ideer till siffror sa att du kan jamfora hur stjarntyp, kollektortemperatur, tackning och konstruktionsdesign forandrar energibudgeten.',
    },
    {
      type: 'paragraph',
      html: 'Kalkylatorn uppskattar infangad effekt, termisk omloppsradie, kollektorarea, omloppstid, materialmassa och tackningen som behovs for ett valt Kardashev-mal. Den ar byggd for studenter, varldsbyggare, vetenskapskommunikatorer och alla som forsoker forsta varfor Typ II-civilisationer ar svar: utmaningen ar inte bara energi, utan ocksa area, varme, utvinning, stabilitet och orbital logistik.',
    },
    {
      type: 'title',
      text: 'Hur Dysonradien uppskattas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den optimala radien beraknas fran stjarnans ljusstyrka och kollektorns drifttemperatur. En kollektor nara en ljus stjarna far intensivt flode och maste ga varm eller avleda enorma mangder varme. Att flytta utat minskar termisk stress, men den kravda kollektorarean vaxer med kvadraten pa avstandet. Denna avvagning forklarar varfor samma tackningsgrad kan vara modest runt en svag M-dvarg och enorm runt en bla jatte.',
    },
    {
      type: 'title',
      text: 'Jamforelse av Dyson svarm, ring, skal och statitmoln',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson-svarm:</strong> manga oberoende kretsande kollektorer. Det ar den mest trovardiga storskaliga arkitekturen eftersom den kan byggas gradvis och kraver inget stelt stjarnskal.',
        '<strong>Ekvatorialring:</strong> ett smalare kollektorband med lagre tackningseffektivitet. Den ar lattare att forestalla sig som en forsta megastruktur, men kan inte fanga full stjarnkraft utan att bli en bredare svarm.',
        '<strong>Stelt skal:</strong> visuellt ikoniskt men mekanisk ofordelaktigt. Ett skal runt en stjarna har allvarliga stabilitets- och materialproblem, sa simulatorn tilldelar det hog massa och lag stabilitet.',
        '<strong>Statit-spegelmoln:</strong> ultra-latta reflektorer som delvis halls av strahlningstryck. Det minskar materialbehovet men har lagre varmetalans och kraver kraven positionskontroll.',
      ],
    },
    {
      type: 'title',
      text: 'Tackning som behovs for Kardashev skalan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kardashev-skalan uttrycker en civilisations kraftanvandning logaritmiskt. I detta verktyg omvandlas infangade watt till ett K-varde med K = (log10(P) - 6) / 10. En delvis Dyson-svarm runt solen kan overstiga nuvarande mannisklig energianvandning med manga storleksordningar langt innan den nar full Typ II-status. Resultatet for maltackning visar den andel av stjarnans ljusstyrka som maste fangas upp for det valda malet.',
    },
    {
      type: 'table',
      headers: ['Konstruktionsval', 'Storsta fordel', 'Storsta flaskhals'],
      rows: [
        ['Dyson-svarm', 'Byggbar i etapper med oberoende banor', 'Trafikkontroll och kraftoverforing'],
        ['Ekvatorialring', 'Mindre initial area och enklare geometri', 'Begransad tackning'],
        ['Stelt skal', 'Maximal infangning i ett enkelt diagram', 'Strukturell instabilitet och enorm massa'],
        ['Statitmoln', 'Mycket lag ytdensitet', 'Precis positionshallning och varmebegransningar'],
      ],
    },
    {
      type: 'title',
      text: 'Materialmassa och realitetskontroll av utvinning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Materialuppskattningen multiplicerar kollektorarean med en antagen ytdensitet och en konstruktionsstabilitetsfaktor. Den rapporterar medvetet massa i Merkurius-massor nar siffrorna blir astronomiska, eftersom manga Dyson-svarmdiskussioner forestaller sig demontering av sma planeter eller asteroider for ravaror. Aven tunna kollektorer blir massiva nar de sprids over astronomiska enhetsskalor.',
    },
    {
      type: 'paragraph',
      html: 'Anvand resultatet som en storleksordningsguide snarare an en ritning. Verklig megastrukturingenjorskap skulle behova strahlingsskademodeller, termiska cykler, kollisionsundvikande, attitydkontroll, kraftoverforing, tillverkningsutbyte och langsiktig banevolution. Vardet med simulatorn ar att den gor de forsta begransningarna synliga omedelbart.',
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
