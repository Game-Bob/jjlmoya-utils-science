import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dubbelspalt-dekoherens-simulator';
const title = 'Dubbelspaltexperiment och Dekoherens Simulator';
const description = 'Slå på och av vilken-väg-detektorer för att se kvantinterferens blekna till två partikelband i en visuell dubbelspaltsimulator.';

const howTo = [
  {
    name: 'Börja med detektorn avstängd',
    text: 'Lämna vilken-väg-detektorn inaktiverad och se hur skärmen bildar ljusa och mörka interferensfransar från koherenta sannolikhetsamplituder.',
  },
  {
    name: 'Öka detektorstyrkan',
    text: 'Höj detektorkontrollen för att introducera vilken-väg-information. När detektorn blir starkare minskar koherensen och fransarna försvinner.',
  },
  {
    name: 'Ändra spaltgeometrin',
    text: 'Justera spaltavstånd och spaltbredd för att se hur geometrin förändrar fransavståndet, enveloppbredden och den slutliga distributionen på skärmen.',
  },
  {
    name: 'Läs de levande mätvärdena',
    text: 'Använd fransynlighet, vilken-väg-information och koherens för att koppla det visuella mönstret till kvantmätningshistorien.',
  },
];

const faq = [
  {
    question: 'Varför ändras mönstret när detektorer slås på?',
    answer: 'En detektor som kan avslöja vilken spalt partikeln använde förstör fasrelationen mellan de två alternativen. Utan den koherensen interfererar de två sannolikhetsvägarna inte längre och skärmen närmar sig två breda partikelband.',
  },
  {
    question: 'Betyder denna simulator att medvetandet kollapsar vågfunktionen?',
    answer: 'Nej. Simulatorn fokuserar på fysisk vilken-väg-information och dekoherens. En detektor, miljön eller varje interaktion som gör skillnaden på vägen kan undertrycka interferens utan att kräva en medveten observatör.',
  },
  {
    question: 'Vad är fransynlighet?',
    answer: 'Fransynlighet jämför ljusa och mörka områden på skärmen. Hög synlighet innebär stark interferenskontrast. Låg synlighet innebär att de mörka luckorna har fyllts i och mönstret beter sig mer som två oberoende partikelströmmar.',
  },
  {
    question: 'Är detta en fullständig kvantmekaniklösare?',
    answer: 'Nej. Det är en pedagogisk modell som blandar ett dubbelspalts interferensenvelopp med en dekoherenskontroll. Den är byggd för att förklara mäteffekten visuellt, inte för att ersätta en Schrödingerekvationssimulering för en verklig apparat.',
  },
  {
    question: 'Varför påverkar spaltavståndet fransavståndet?',
    answer: 'Större avstånd skapar en snabbare fasskillnad över skärmen, så ljusa och mörka band kommer närmare varandra. Mindre avstånd sprider ut fransarna längre ifrån varandra.',
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
    kicker: 'Mätkontroll',
    detectorToggle: 'Aktivera vilken-väg-detektor',
    detectorStrength: 'Detektorstyrka',
    slitSeparation: 'Spaltavstånd',
    slitWidth: 'Spaltbredd',
    unobserved: 'Oobserverad',
    observed: 'Observerad',
    waveMode: 'Interferens',
    particleMode: 'Partikelband',
    fringeVisibility: 'Fransynlighet',
    whichPath: 'Vilken-väg-info',
    coherence: 'Koherens',
    readoutNote: 'Interferens överlever när båda vägarna förblir osärskiljbara. Mätning gör väginformation tillgänglig och skärmen förlorar sina mörka fransar.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator för dubbelspaltsexperimentet med dekoherens och vägdetektering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna dubbelspaltssimulator förvandlar det klassiska kvantexperimentet till en interaktiv visuell modell. Med detektorn avstängd visar skärmen ett interferensmönster: ljusa och mörka ränder som uppstår eftersom de två alternativa vägarna förblir koherenta.',
    },
    {
      type: 'paragraph',
      html: 'Verktyget är utformat för studerande som söker en tydlig förklaring till varför mätning förändrar dubbelspaltsresultatet. Det undviker svepande uttryck som "observatören förändrar verkligheten" och fokuserar på den fysikaliska kärnan: interferens kräver osärskiljbara alternativ.',
    },
    {
      type: 'title',
      text: 'Vad dubbelspaltsexperimentet visar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I den oobserverade uppställningen beskrivs ett enskilt kvantobjekt av sannolikhetsamplituder kopplade till båda spalterna. Amplituderna adderas med fas, vilket ger förstärkning i ljusa ränder och utsläckning i mörka ränder.',
    },
    {
      type: 'paragraph',
      html: 'Om en detektor registrerar vilken spalt som användes är alternativen inte längre osärskiljbara, och skärmen visar istället två klassiska partikelband.',
    },
    {
      type: 'title',
      text: 'Hur simulatorn avläses',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Reglage eller mätvärde', 'Vad det ändrar', 'Vad du ska observera'],
      rows: [
        ['Detektorstyrka', 'Hur mycket väginformation som är tillgänglig', 'Högre värden minskar randkontrasten och framhäver partikelmönstret.'],
        ['Spaltavstånd', 'Avståndet mellan de två öppningarna', 'Större avstånd gör interferensränder tätare placerade på skärmen.'],
        ['Spaltbredd', 'Storleken på varje öppning', 'Bredare spalter smalnar av diffraktionshöljet.'],
        ['Randkontrast', 'Kontrasten mellan ljusa och mörka områden', 'Ett högt tal innebär att koherent interferens fortfarande syns.'],
        ['Koherens', 'Kvarvarande fasrelation mellan vägarna', 'Koherensen sjunker när vägarna blir särskiljbara.'],
      ],
    },
    {
      type: 'title',
      text: 'Dekoherens utan mystik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekoherens innebär förlust av användbar faskoherens när ett kvantsystem blir korrelerat med en detektor eller omgivningen.',
    },
    {
      type: 'paragraph',
      html: 'Den avgörande fysiken handlar inte om mänsklig medvetenhet, utan om huruvida experimentuppställningen bevarar eller förstör alternativens osärskiljbarhet.',
    },
    {
      type: 'title',
      text: 'Begränsningar i denna pedagogiska modell',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulatorn kombinerar ett optiskt dubbelspaltsmönster med en dekoherensmodell baserad på detektorstyrka. Den är idealisk för att bygga konceptuell intuition.',
    },
    {
      type: 'list',
      items: [
        '<strong>Använd den för begreppsförståelse:</strong> interferens, väginformation, koherens och mätning.',
        '<strong>Använd den inte för laboratoriedesign:</strong> verkliga experiment kräver precisa beräkningar av våglängd och utbredning.',
        '<strong>Fokusera på trenden:</strong> när särskiljbarheten ökar minskar interferenskontrasten.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Jämför interferensmönstret när väginformationen är otillgänglig med resultatet efter en mätning. Modellen visar hur koherens och detektorns information påverkar ljusa och mörka fransar, men är en pedagogisk förenkling av ett kvantexperiment.',
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
