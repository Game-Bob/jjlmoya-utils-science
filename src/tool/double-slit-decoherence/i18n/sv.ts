import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dubbelspalt-dekoherens-simulator';
const title = 'Dubbelspaltexperiment och Dekohaerens Simulator';
const description = 'Slag pa och av vilken-vag-detektorer for att se kvantinterferens blekna till tva partikelband i en visuell dubbelspaltsimulator.';

const howTo = [
  {
    name: 'Borja med detektorn avstangd',
    text: 'Lamna vilken-vag-detektorn inaktiverad och se hur skarmen bildar ljusa och morka interferensfransar fran koherenta sannolikhetsamplituder.',
  },
  {
    name: 'Oka detektorstyrkan',
    text: 'Hoja detektorkontrollen for att introducera vilken-vag-information. Nar detektorn blir starkare minskar koherensen och fransarna forsvinner.',
  },
  {
    name: 'Andra spaltgeometrin',
    text: 'Justera spaltavstand och spaltbredd for att se hur geometrin forandrar fransavstandet, enveloppbredden och den slutliga distributionen pa skarmen.',
  },
  {
    name: 'Las de levande matvarden',
    text: 'Anvand fransynlighet, vilken-vag-information och koherens for att koppla det visuella monstret till kvantmatningshistorien.',
  },
];

const faq = [
  {
    question: 'Varfor andras monstret nar detektorer slas pa?',
    answer: 'En detektor som kan avsloja vilken spalt partikeln anvande forstor fasrelationen mellan de tva alternativen. Utan den koherensen interfererar de tva sannolikhetsvagarna inte langre och skarmen narmar sig tva breda partikelband.',
  },
  {
    question: 'Betyder denna simulator att medvetandet kollapsar vagfunktionen?',
    answer: 'Nej. Simulatorn fokuserar pa fysisk vilken-vag-information och dekoherens. En detektor, miljon eller varje interaktion som gorskillnaden pa vagen kan undertrycka interferens utan att krava en medveten observator.',
  },
  {
    question: 'Vad ar fransynlighet?',
    answer: 'Fransynlighet jamfor ljusa och morka omraden pa skarmen. Hog synlighet innebar starkt interferenskontrast. Lag synlighet innebar att de morka luckorna har fyllts i och monstret beter sig mer som tva oberoende partikelstrommar.',
  },
  {
    question: 'Ar detta en fullstandig kvantmekaniklosare?',
    answer: 'Nej. Det ar en pedagogisk modell som blandar ett dubbelspalts interferensenvelopp med en dekoherens-kontroll. Den ar byggd for att forklara mateffekten visuellt, inte for att ersatta en Schrodingerekvationssimulering for en verklig apparat.',
  },
  {
    question: 'Varfor paverkar spaltavstandet fransavstandet?',
    answer: 'Storre avstand skapar en snabbare fasskillnad over skarmen, sa ljusa och morka band kommer narmare varandra. Mindre avstand sp rider ut fransarna langre ifran varandra.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Dubbelspaltapparat',
    controls: 'Dubbelspaltkontroller',
    results: 'Dubbelspaltresultat',
    kicker: 'Matningskontroll',
    detectorToggle: 'Aktivera vilken-vag-detektor',
    detectorStrength: 'Detektorstyrka',
    slitSeparation: 'Spaltavstand',
    slitWidth: 'Spaltbredd',
    unobserved: 'Oobserverad',
    observed: 'Observerad',
    waveMode: 'Interferens',
    particleMode: 'Partikelband',
    fringeVisibility: 'Fransynlighet',
    whichPath: 'Vilken-vag-info',
    coherence: 'Koherens',
    readoutNote: 'Interferens overlever nar bada vagarna forblir osarskiljbara. Matning gor vaginformation tillganglig och skarmen forlorar sina morka fransar.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dubbelspaltexperiment simulator med dekoherens och vilken-vag-detektion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna dubbelspaltsimulator forvandlar det klassiska kvantexperimentet till en interaktiv visuell modell. Med detektorn avstangd visar skarmen ett interferensmonster: ljusa och morka band uppstar eftersom de tva mojliga vagarna forblir koherenta. Nar en vilken-vag-detektor lags till, forvandlas monstret gradvis till tva breda partikelband eftersom vagalternativen blir sarskiljbara.',
    },
    {
      type: 'paragraph',
      html: 'Verkyget ar utformat for larande som soker en tydlig forklaring till varfor observation forandrar dubbelspaltresultatet. Det undviker den vaga frasen "observatoren forandrar verkligheten" och fokuserar istallet pa den fysiskt anvandbara iden: interferens kraver osarskiljbara alternativ, medan matning och miljoomfltning tar bort fasrelationen som behovs for fransar.',
    },
    {
      type: 'title',
      text: 'Vad dubbelspaltexperimentet demonstrerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I den oobserverade uppstallningen beskrivs ett enda kvantobjekt av sannolikhetsamplituder kopplade till bada spalterna. Dessa amplituder adderas med fas. Pa vissa positioner pa skarmen forstarker de varandra och skapar ljusa band; pa andra positioner tar de ut varandra och skapar morka band. Den vaxlande strukturen ar kannedomen for interferens.',
    },
    {
      type: 'paragraph',
      html: 'Om en detektor registrerar vilken spalt som anvandes upphor alternativen att vara osarskiljbara. Skarmen tar inte langre emot en koherent summa av amplituder. Den tar emot en blandning av tva vagbetingade utfall, sa de morka interferensluckorna fylls i och resultatet ser ut som partiklar som gar genom den ena eller den andra spalten.',
    },
    {
      type: 'title',
      text: 'Hur man laser simulatorn',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kontroll eller matvarde', 'Vad den andra', 'Vad du ska titta efter'],
      rows: [
        ['Detektorstyrka', 'Hur mycket vilken-vag-information som ar tillganglig', 'Hogre varden minskar fransynligheten och forstarker tvabands-partikelmonstret.'],
        ['Spaltavstand', 'Avstandet mellan de tva oppningarna', 'Storre avstand gor interferensbanden tatre pa skarmen.'],
        ['Spaltbredd', 'Storleken pa varje oppning', 'Bredare spalter smalnar av diffraktionsenveloppen och omformar den overgripande ljusstyrkan.'],
        ['Fransynlighet', 'Kontrast mellan ljusa och morka skarmomraden', 'Ett hogt tal betyder att koherent interferens fortfarande ar synlig.'],
        ['Koherens', 'Hur mycket fasrelation som aterstar mellan vagarna', 'Koherensen sjunker nar detektorn gor vagarna sarskiljbara.'],
      ],
    },
    {
      type: 'title',
      text: 'Dekoherens utan mystik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekoherens ar forlusten av anvandbar fas-koherens nar ett kvantsystem blir korrelerat med en detektor eller miljo. I ett dubbelspaltexperiment kan den korrelationen bara vilken-vag-information. Nar vagen val ar registrerad i princip, aven om ingen laser registreringen, undertrycks interferensmonstret.',
    },
    {
      type: 'paragraph',
      html: 'Denna skillnad ar viktig eftersom manga forklaringar overdriver rollen av mannsklig observation. Den viktiga fysiken ar inte syn eller medvetande; det ar om experimentuppstallningen bevarar eller forstor osarskiljbarheten av de alternativ som annars skulle interferera.',
    },
    {
      type: 'title',
      text: 'Begransningar av denna pedagogiska modell',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulatorn anvander ett kompakt optiskt dubbelspaltsmonster och kombinerar det med en detektorstyrkemodell for dekoherens. Den ar utmarkt for intuition, klassrumsdemonstrationer och konceptuell repetition, men den ar inte en numerisk losning av en fullstandig kvantapparat med detektor Hilbert-rum, bruskallor eller laboratoriekalibrering.',
    },
    {
      type: 'list',
      items: [
        '<strong>Anvand den for att forsta koncept:</strong> interferens, vilken-vag-information, koherens och matning.',
        '<strong>Anvand den inte for experimentell design:</strong> verkliga dubbelspaltexperiment kraver precisa berakningar av vaglangd, oppning, detektor och propagation.',
        '<strong>Fokusera pa trenden:</strong> nar sarskiljbarheten okar, minskar interferenskontrasten.',
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
