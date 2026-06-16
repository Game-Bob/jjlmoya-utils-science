import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kosmicheskaya-inflyaciya-kalkulyator';
const description = 'Rasschitaite eksponencialnoe rasshirenie rannei Vselennoi v epohu kosmicheskoi inflyacii.';
const title = 'Kalkulyator Kosmicheskoi Inflyacii: Rasshirenie Rannei Vselennoi';

const howTo = [
  {
    name: 'Viberite znacheniya',
    text: 'Peretashite polzunki dlya prosmotra rezultatov.',
  },
  {
    name: 'Sravnite masshtabnye factory',
    text: 'Posmotrite na skolko poryadkov rasshirilos prostranstvo.',
  },
  {
    name: 'Analiziruite iskrglenie',
    text: 'Hols pokazvaet rasshirenie prostranstva.',
  },
];

const faq = [
  {
    "question": "Chto takoe kosmicheskaya inflyaciya i pochemu ona proizoshla?",
    "answer": "Kosmicheskaya inflyaciya - eto teoriya, postuliruyushaya sverhbystroe i eksponencialnoe rasshirenie prostranstva v samye pervye doli sekundy sushestvovaniya Vselennoi, konkretno okolo 10^-36 sekundy posle Bolshogo vzryva. Eto proizoshlo iz-za togo, chto teoreticheskoe skalyarnoe pole, nazyvaemoe inflatonom, nahodilos v sostoyanii vysokoi plotnosti energii lojnogo vakuuma, chto porodilo otricatelnoe davlenie i ottalkivayushuyu silu gravitacii, rastyagivayushuyu tkan prostranstva-vremeni."
  },
  {
    "question": "Chto oznachaet chislo e-folds (e-skladyvanii)?",
    "answer": "Chislo e-folds izmeryaet dlitelnost fazy eksponencialnogo rasshireniya. Odno e-fold predstavlyaet soboi vremya, za kotoroe razmer Vselennoi uvelichivaetsya v chislo Eilera (okolo 2.718 raza). Esli Vselennaya prohodit N e-folds, ee masshtabnyi factor uvelichivaetsya v e^N raz. Standartnye kosmologicheskie modeli trebuyut minimum ot 50 do 60 e-folds dlya resheniya problem ploskostnosti i gorizonta."
  },
  {
    "question": "Kak inflyaciya reshaet problemu gorizonta?",
    "answer": "Problema gorizonta sprashivaet, pochemu ekstremalno udalennye oblasti Vselennoi imeyut pochti odinakovuyu temperaturu reliktovogo izlucheniya (CMB), hotya skorost sveta ne pozvolila by im vzaimodeistvovat dlya dostijeniya ravnovesiya. Inflyaciya reshaet eto, pokazvaya, chto do eksponencialnogo rasshireniya vsya nablyudaemaya Vselennaya byla kroshechnoi, svyazannoi prichinno i termicheski odnorodnoi oblastyu, kotoraya byla mgnovenno rastyanuta za predely zritelnogo gorizonta."
  },
  {
    "question": "Chto takoe problema ploskostnosti i kak ona reshaetsya?",
    "answer": "Plotnost energii sovremennoi Vselennoi ekstremalno blizka k kriticheskoi, chto oznachaet, chto prostranstvo ploskoe s minimalnoi pogreshnostyu. Bez inflyacii lyuboe nachalnoe otklonenie ot ploskostnosti roslo by eksponencialno so vremenem, trebuya nevozmojnoi tonkoi nastroiki v moment Bolshogo vzryva. Inflyaciya rastyagivaet prostranstvennuyu kriviznu tak silno, chto lyubaya nachalnaya krivizna razmyvaetsya, podobno tomu kak poverhnost gigantskogo shara kajetsya ploskoi lokalno."
  },
  {
    "question": "Chto takoe process razogreva ili reheating?",
    "answer": "Razogrev (reheating) - eto teplovoi perehod, otmechayushii konec inflyacii. Vo vremya inflyacii Vselennaya ostyvaet do temperatur, blizkih k absolyutnomu nulyu, iz-za eksponencialnogo rasshireniya obema. Kogda pole inflatona raspadaetsya v minimume svoego potenciala, ego ostavshayasya energiya peredaetsya prostranstvu v vide chastic Standartnoi modeli cherez kvantovye vzaimodeistviya, zapolnyaya kosmos goryachei i plotnoi plazmoi, kotoraya zapuskaet tradicionnuyu fazu Bolshogo vzryva."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulyator Kosmicheskoi Inflyacii',
    efoldsLabel: 'Chislo e-folds (N)',
    energyLabel: 'Nachalnaya Shkala Energii (GeV)',
    scaleFactorResult: 'Rost Masshtabnogo Faktora',
    reheatingTempResult: 'Ocenochnaya Temperatura Razogreva',
    chartTitle: 'Iskryglenie Prostranstva-Vremeni',
    presetGuth: 'Standart (Guth)',
    presetChaotic: 'Haoticheskaya',
    presetExtreme: 'Extremalnye Predely',
    efoldsTooltip: 'Tipichnye modeli predskazyvayut ot 50 do 60 e-folds.',
    energyTooltip: 'Shkala GUT sostavlyaet okolo 10^16 GeV.',
    scaleFactorTooltip: 'Predstavlyaet soboi obshii koefficient rasshireniya.',
    reheatingTooltip: 'Temperatura v konce inflyacii.',
    analogyInsuff: 'Umerennaya inflyaciya. Etogo rasshireniya nedostatochno.',
    analogyProton: 'Vselennaya rasshirilas ot razmerov protona do razmerov galaktiki za doli sekundy.',
    analogyObservable: 'Vselennaya rasshirilas ot subatomnogo masshtaba do razmerov, prevyshayushih nablyudaemuyu Vselennuyu, za 10^-32 sekundy.',
  },
  seo: [
  {
    "type": "title",
    "text": "КОСМОЛОГИЯ: Teoriya Kosmicheskoi Inflyacii i Rasshirenie Prostranstva-Vremeni",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kosmicheskaya inflyaciya predstavlyaet soboi kraeugolnyi kamen, svyazyvayushii fiziku chastic s nablyudatelnoi astrofizikoi. Predlojennaya v nachale 1980-h godov fizikami Alanom Gutom i Andreem Linde, eta teoriya postuliruet, chto rannyaya Vselennaya proshla cherez fazu eksponencialnogo rasshireniya, vyzvannuyu plotnostyu energii skalyarnogo polya, izvestnogo kak inflaton. Eto rasshirenie uvelichilo obem Vselennoi v koefficient kak minimum 10^26 za kroshechnuyu dolyu sekundy, razreshiv glubokie paradoksy klassicheskoi modeli Bolshogo vzryva i sozdav teoreticheskuyu bazu dlya formirovaniya kosmicheskih struktur."
  },
  {
    "type": "title",
    "text": "Sravnenie Modelei Inflyacii i Parametrov",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Razlichnye potencialy polya inflatona sozdayut raznye skorosti rasshireniya i temperatury razogreva. Nije privedeny harakteristiki osnovnyh modelei, simuliruemyh v etom kalkulyatore:"
  },
  {
    "type": "table",
    "headers": [
      "Model Inflyacii",
      "Diapazon e-folds (N)",
      "Shkala Energii (GeV)",
      "Fizicheskii i Dinamicheskii Rezultat"
    ],
    "rows": [
      [
        "<strong>Standart Guta</strong>",
        "50 - 60",
        "10^16",
        "Reshaet ploskostnost i gorizont; inflyaciya zakanchivaetsya nukleaciei puzyrei v medlennom fazovom perehode."
      ],
      [
        "<strong>Haoticheskaya Inflyaciya (Linde)</strong>",
        "60 i bolee",
        "10^16",
        "Inflaton medlenno skatyvaetsya po prostomu parabolicheskomu potencialu; izbegaet problem rezkogo fazovogo perehoda."
      ],
      [
        "<strong>Extremalnye Predely</strong>",
        "90 i bolee",
        "10^19 (Plank)",
        "Energii blizki k predelu kvantovoi gravitacii; masshtabnoe rastyajenie pervobytnogo prostranstva-vremeni."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Razreshenie Klassicheskih Problem Bolshogo Vzryva",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Do razrabotki teorii inflyacii klassicheskaya kosmologiya Bolshogo vzryva stradala ot sereznyh teoreticheskih nesootvetstvii. Problema gorizonta, svyazannaya s odnorodnostyu reliktovogo izlucheniya, i problema ploskostnosti, svyazannaya s kriticheskoi plotnostyu prostranstva, ukazvali na neobhodimost ekstremalno maloveroyatnyh nachalnyh uslovii. Inflyaciya estestvennym obrazom reshaet obe trudnosti, rastyagivaya termicheski odnorodnuyu mikrootdelnost i dinamicheski rasplashivaya lokalnuyu geometriyu prostranstva. K tomu je ona razbavlyaet koncentraciyu magnitnyh monopolei, kotorye doljny byli obrazovatsya v izbytke v rannei Vselennoi."
  },
  {
    "type": "title",
    "text": "Nablyudatelnye Astronomicheskie Dokazatelstva Inflyacionnoi Modeli",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Teoriya kosmicheskoi inflyacii - eto ne prosto krasivaya matematicheskaya konstrukciya; ona obladaet prochnymi kosmicheskimi dokazatelstvami, podtverjdennymi sputnikami COBE, WMAP i Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Odnorodnost CMB:</strong> Reliktovoe izluchenie nablyudaetsya s odnorodnoi temperaturoi s kolebaniyami vsego v 1 dolyu na 100,000 na protivopolojnyh storonah neba.",
      "<strong>Ploskaya Geometriya:</strong> Izmereniya krivizny Vselennoi podtverjdayut, chto ona ploskaya s pogreshnostyu menee 1%, chto sootvetstvuet masshtabnomu inflyacionnomu rastyajeniyu.",
      "<strong>Otsutstvie Monopolei:</strong> Logicheski obyasnyaet polnoe otsutstvie stabilnyh magnitnyh monopolei bolshoi massy v nashei nablyudaemoi Vselennoi.",
      "<strong>Spektr Kolebanii:</strong> Nablyudaemye anizotropii v kosmicheskom reliktovom fone pokazvayut spektralnyi indeks nemnogo nije 1, kak raz tak, kak predskazyvayut modeli medlennogo skatyvaniya inflatona."
    ]
  },
  {
    "type": "title",
    "text": "Kvantovye Kolebaniya i Semena Galaktik",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Samym neobychnym aspektom kosmicheskoi inflyacii yavlyaetsya ee sposobnost rabotat v kachestve kosmicheskogo mikroskopa. Mikroskopicheskie kvantovye kolebaniya polya inflatona byli rastyanuty do astronomicheskih masshtabov za period eksponencialnogo rasshireniya. V konce inflyacii eti kolebaniya zamorozilis v vide kolebanii plotnosti materii (pervonachalnye vozmusheniya). Eti razlichiya plotnosti poslujili gravitacionnymi semenami, kotorye za milliardy let prityanuli materiyu drug k drugu, dav jizn pervym zvezdam, galaktikam, skopleniyam galaktik i kosmicheskoi seti, kotoruyu my nablyudaem segodnya."
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
