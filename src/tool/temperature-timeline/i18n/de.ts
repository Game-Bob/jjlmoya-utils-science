import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatur-zeitleiste';
const description = 'Erkunden Sie die durchschnittliche Temperaturgeschichte der Erde ueber geologische Epochen hinweg.';
const title = 'Durchschnittliche Temperaturzeitleiste der Erde';

const howTo = [
  {
    name: 'Epoche auswaehlen',
    text: 'Klicken Sie auf eine Kerbe auf dem Skalenlineal.',
  },
  {
    name: 'Temperatur pruefen',
    text: 'Lesen Sie die globale Durchschnittstemperatur ab.',
  },
  {
    name: 'Planet beobachten',
    text: 'Beobachten Sie, wie die Leinwand auf den thermischen Zustand reagiert.',
  },
];

const faq = [
  {
    "question": "War die Erde in der Vergangenheit waermer als heute?",
    "answer": "Ja, die Erde erlebte Klimata, die wesentlich waermer waren als heute. Waehrend des Mesozoikums (Zeitalter der Dinosaurier) und des fruehen Eozaens befand sich der Planet in einem Treibhauszustand ohne polare Eiskappen, und die weltweiten Durchschnittstemperaturen ueberstiegen 22 Grad, etwa 7 bis 8 Grad waermer als der heutige Durchschnitt. Die Uebergaenge zu diesen Perioden erstreckten sich jedoch ueber Jahrmillionen, was eine evolutionaere Anpassung ermoeglichte."
  },
  {
    "question": "Was verursachte das Schneeball-Erde-Phaenomen?",
    "answer": "Die Schneeball-Erde (globale Vereisung) trat vor allem im Neoproterozoikum auf (vor etwa 700 Millionen Jahren). Sie wurde durch eine extreme Verringerung der Treibhausgase infolge einer beschleunigten chemischen Verwitterung von Silikatgesteinen nach dem Auseinanderbrechen des Superkontinents Rodinia ausgeloest. Das Eis erstreckte sich vom Pol bis zum Aequator, reflektierte die Sonnenstrahlung (Albedo-Effekt) und fing den Planeten in einer globalen Kaeltschleife ein, die erst nach Millionen von Jahren vulkanischer CO2-Akkumulation durchbrochen wurde."
  },
  {
    "question": "Wie reguliert die Erde ihre Temperatur langfristig?",
    "answer": "Die Erde besitzt einen natuerlichen Thermostaten, der durch den geologischen Kohlenstoffkreislauf gesteuert wird, der wiederum massgeblich durch Plattentektonik und Silikatverwitterung reguliert wird. Wenn sich der Planet erwaermt, reagiert saurer Regen schneller mit Silikatgesteinen, entzieht der Atmosphaere CO2 und lagert es als Karbonate auf dem Meeresboden ab, was den Treibhauseffekt abschwaecht. Kuehlt sich der Planet ab, nimmt die Verwitterung ab, aber die vulkanische Aktivitaet stoesst weiterhin CO2 aus, wodurch sich der Planet allmaehlich wieder erwaermt."
  },
  {
    "question": "Wie unterscheidet sich der Klimawandel im Anthropozean von der geologischen Vergangenheit?",
    "answer": "Der grundlegende Unterschied liegt in der Geschwindigkeit des Wandels. Waehrend natuerliche Klimauebergaenge in der geologischen Vergangenheit in der Regel ueber Zehntausende oder Millionen von Jahren stattfanden (was Raum fuer biologische Wanderungen und Evolution liess), vollzieht sich die Erwaermung im Anthropozean in wenigen Jahrzehnten. Diese Rate der thermischen Schwankung ist exponentiell schneller als fast jedes andere dokumentierte Ereignis zuvor, uebertrifft die Anpassungsfaehigkeit der derzeitigen Biosphaere und verursacht ein beschleunigtes Massensterben."
  },
  {
    "question": "Was war das Palaeozaen-Eozaen-Termalmaximum (PETM)?",
    "answer": "Das PETM war ein extremes globales Erwaermungsereignis, das vor etwa 56 Millionen Jahren stattfand. Es wurde durch einen raschen und massiven Eintrag von Kohlenstoff in die Atmosphaere verursacht (moeglicherweise durch die Freisetzung von ozeanischen Methanhydraten oder Vulkanismus im Nordatlantik), wodurch sich die globalen Temperaturen in wenigen tausend Jahren um 5 bis 8 Grad erhoehten. Es gilt als das beste geologische Analogon fuer den modernen Klimawandel und fuehrte zu einer schweren Versauerung der Ozeane und zum Aussterben benthischer Organismen."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Temperaturzeitleiste der Erde',
    sub: 'Erkunden Sie die geologischen Klimaepochen der Erde',
    ageLabel: 'Alter:',
    tempLabel: 'Durchschnittstemperatur:',
    selectPrompt: 'Waehlen Sie eine geologische Periode aus.',
    epoch_archean_name: 'Archaeikum',
    epoch_archean_age: '4,0 bis 2,5 Milliarden Jahre vor heute',
    epoch_archean_desc: 'Extrem heisse Erde mit methan- und kohlendioxidreicher Atmosphaere.',
    epoch_proterozoic_name: 'Proterozoikum',
    epoch_proterozoic_age: '2,5 Milliarden bis 541 Millionen Jahre vor heute',
    epoch_proterozoic_desc: 'Sauerstoffanstieg verursacht Huroni-Vereisung.',
    epoch_paleozoic_name: 'Palaeozoikum',
    epoch_paleozoic_age: '541 bis 252 Millionen Jahre vor heute',
    epoch_paleozoic_desc: 'Lebensexplosion in Ozeanen und Besiedlung des Landes.',
    epoch_mesozoic_name: 'Mesozoikum',
    epoch_mesozoic_age: '252 bis 66 Millionen Jahre vor heute',
    epoch_mesozoic_desc: 'Zeitalter der Dinosaurier. Weltweite Treibhausbedingungen.',
    epoch_cenozoic_name: 'Kaenozoikum',
    epoch_cenozoic_age: '66 Millionen Jahre vor heute bis Gegenwart',
    epoch_cenozoic_desc: 'Allmaehliche Abkuehlung bis zu quartaeren Eiszeiten.',
    epoch_anthropocene_name: 'Anthropozean',
    epoch_anthropocene_age: 'Gegenwart und Zukunft',
    epoch_anthropocene_desc: 'Schnelle Erwaermung durch Treibhausgasemissionen.',
  },
  seo: [
  {
    "type": "title",
    "text": "HISTORISCHE KLIMATOLOGIE: Die thermische Evolution der Erde durch geologische Epochen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Das Klima der Erde war nie statisch. Im Laufe ihrer 4,5 Milliarden Jahre dauernden Geschichte schwankte unser Planet zwischen zwei Grundzustaenden: dem Treibhauszustand (greenhouse) und dem Eiszeitenzustand (icehouse). Das Verstaendnis dieser grossraeumigen Schwankungen ist nicht nur eine geologische Neugierde, sondern ein unverzichtbares Instrument zur Kontextualisierung der Geschwindigkeit und Schwere der anthropogenen globalen Erwaermung. Durch die Untersuchung von Sauerstoffisotopen in marinen Fossilien und in Eiskernen eingeschlossenen Luftblasen konnten Paleoklimatologen die Temperaturgeschichte der Erde praezise rekonstruieren."
  },
  {
    "type": "title",
    "text": "Temperaturaufzeichnung nach geologischer Epoche und Aera",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Die Geschichte der Erde unterteilt sich in grosse Zeitintervalle, die durch biologische und geologische Veraenderungen definiert sind. Unten ist die Liste der geschaetzten Durchschnittstemperaturen fuer jede verfuegbare Epoche aufgefuehrt:"
  },
  {
    "type": "table",
    "headers": [
      "Geologische Epoche",
      "Alter Aprox.",
      "Durchschnittstemp.",
      "Klimatologische Meilensteine und Merkmale"
    ],
    "rows": [
      [
        "<strong>Archaeikum</strong>",
        "4,0 bis 2,5 Ga",
        "30 °C",
        "Fruehe heisse Erde. Eine schwache junge Sonne wurde durch einen extremen, methanreichen Treibhauseffekt kompensiert."
      ],
      [
        "<strong>Proterozoikum</strong>",
        "2,5 Ga bis 541 Ma",
        "12 °C",
        "Anstieg des freien Sauerstoffs; fuehrte zum Methankollaps und loeste globale Vereisungen aus (\"Schneeball Erde\")."
      ],
      [
        "<strong>Palaeozoikum</strong>",
        "541 bis 252 Ma",
        "20 °C",
        "Grosse marine Biodiversitaet und Landbesiedlung. Endete mit Vulkanausbruechen und extremer Erwaermung."
      ],
      [
        "<strong>Mesozoikum</strong>",
        "252 bis 66 Ma",
        "22 °C",
        "Die Warmzeit par excellence (Super-Treibhaus ohne polares Eis). Bluetezeit der Dinosaurier."
      ],
      [
        "<strong>Kaenozoikum</strong>",
        "66 Ma bis heute",
        "14 °C",
        "Schrittweise Abkuehlung durch kontinentale Meeresstroemungen, die zu quartaeren Eiszeitzyklen fuehrte."
      ],
      [
        "<strong>Anthropozean</strong>",
        "Gegenwart & Zukunft",
        "15.2 °C",
        "Drastische und anomale Erwaermung durch anthropogene Emissionen von Treibhausgasen."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Thermische Extreme der Vergangenheit: Von der globalen Vereisung zur Hitze des Mesozoikums",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Die Geschichte unseres Planeten umfasst extreme klimatische Ereignisse. Im Proterozoikum setzte die primitive Fotosynthese in grossem Massstab Sauerstoff frei, wodurch das Methan in der Atmosphaere oxidiert wurde und der Planet in die Huroni-Vereisung stuerzte - eine der Epochen der \"Schneeball-Erde\", in der die Gletscher aequatoriale Breiten erreichten. Am entgegengesetzten Extrem, waehrend des Mesozoikums und des Palaeozans, saettigte eine intensive tektonische Vulkanaktivitaet die Atmosphaere mit CO2, was die globale Durchschnittstemperatur auf bis zu 10 Grad ueber das heutige Niveau ansteigen liess. In diesen Zeitraeumen gab es ueberhaupt kein Polareis, in arktischen Breiten wuchsen gemaessigte Waelder und Dinosaurier dominierten."
  },
  {
    "type": "title",
    "text": "Faktoren, die das globale Klima auf geologischer Skala steuern",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Das langfristige Klima der Erde ist das Ergebnis eines empfindlichen thermodynamischen Gleichgewichts, das von mehreren miteinander verknuepften natuerlichen Mechanismen gesteuert wird:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Milankovitch-Zyklen:</strong> Geringfuegige periodische Schwankungen der orbitalen Exzentrizitaet, Neigung und Praezession der Erde veraendern die empfangene Sonnenstrahlung.",
      "<strong>Silikat-Karbonat-Kohlenstoffkreislauf:</strong> Der langfristige geochemische Thermostat. Regen entzieht der Atmosphaere CO2 und wandelt es in Silikate um, die in den Ozeanen abgelagert werden.",
      "<strong>Plattentektonik:</strong> Die Kontinentaldrift veraendert die globalen Meeresstroemungen und laesst Gebirge entstehen, welche die chemische Verwitterung von CO2 beschleunigen.",
      "<strong>Albedo-Rueckkopplung:</strong> Das Vorhandensein von Schnee und Eis reflektiert das Sonnenlicht und kuehlt den Planeten in Rueckkopplungsschleifen weiter ab."
    ]
  },
  {
    "type": "title",
    "text": "Das Anthropozean: Eine beispiellose thermische Beschleunigung der Biosphaere",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Der Uebergang vom stabilen Holozaen zum Anthropozean markiert das Zeitalter des direkten Einflusses der Menschheit auf die Systeme unseres Planeten. Im Gegensatz zu frueheren thermischen Ereignissen, deren orbitale oder vulkanische Ursachen sich ueber Zehntausende von Jahren erstreckten, wird die heutige Erwaermung durch die massive Verbrennung fossiler Kohlenstoffreserven vorangetrieben, die sich ueber Jahrmillionen angesammelt haben. Die derzeitige Rate der Treibhausgasakkumulation und des Anstiegs der globalen Durchschnittstemperatur ist wesentlich schneller als beim Perm-Trias-Massensterben oder dem PETM und stellt eine beispiellose Herausforderung fuer die biologische Anpassungsfaehigkeit dar."
  }
],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
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
