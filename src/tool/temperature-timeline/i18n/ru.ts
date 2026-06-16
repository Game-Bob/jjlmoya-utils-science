import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperatura-hronologiya';
const description = 'Izuchite istoriyu srednei temperatury Zemli na protyajenii geologicheskih epoh.';
const title = 'Hronologiya Srednei Temperatury Planety';

const howTo = [
  {
    name: 'Viberite epohu',
    text: 'Kliknite na delenie na shkale.',
  },
  {
    name: 'Proverite temperaturu',
    text: 'Schitaite globalnuyu srednyuyu temperaturu.',
  },
  {
    name: 'Nablyudaite za planetoi',
    text: 'Smotrite, kak hols reagiruet na teplovoe sostoyanie.',
  },
];

const faq = [
  {
    "question": "Byla li Zemlya v proshlom teplee, chem segodnya?",
    "answer": "Da, na Zemle neodnokratno ustanavlivalsya gorazdo bolee teplyi klimat, chem segodnya. V mezozoe (epoha dinozavrov) i rannem eocene planeta nahodilas v parnikovom sostoyanii bez polyarnyh ledyanyh shapok, a srednie globalnye temperatury prevyshali 22 gradusa (primerno na 7-8 gradusov vyshe sovremennogo urovnya). Odnako eti perehody proishodili na protyajenii millionov let, chto pozvolyalo biosfere evolyucionno adaptirovatsya."
  },
  {
    "question": "Chto vyzvalo effekt Zemli-snejka (globalnoe oledenenie)?",
    "answer": "Zemlya-snejka (globalnoe oledenenie) proishodila v osnovnom v neoproterozoe (okolo 700 millionov let nazad). Eto bylo vyzvano rezkim sokrasheniem parnikovyh gazov iz-za uskorennogo himicheskogo vyvetrivaniya silikatnyh porod posle raspada superkontinenta Rodiniya. Led rasprostranilsya ot polyusov do ekvatora, chto privelo k silnomu albedo-effektu i zamorozilo planetu na milliony let, poka vulkany ne nakopili dostatochno CO2 dlya taeniya."
  },
  {
    "question": "Kak Zemlya reguliruet svoyu temperaturu v dolgosrochnoi perspektive?",
    "answer": "U Zemli est estestvennyi termostat, kotoryi upravlyaetsya geologicheskim uglerodnym ciklom, reguliruemym v osnovnom tektonikoi plit i vyvetrivaniem silikatov. Pri poteplenii kislye dojdi bystree reagiruyut s silikatnymi porodami, svyazyvaya CO2 i osajdaya ego na dne okeana v vide karbonatov, chto snijaet parnikovyi effekt. Pri ohlajdenii vyvetrivanie zamedlyaetsya, no vulkany prodoljayut vybrasyvat CO2, postepenno vnov razogrevaya planetu."
  },
  {
    "question": "Chem otlichaetsya izmenenie klimata v antropocene ot geologicheskogo proshlogo?",
    "answer": "Klyuchevoe otlichie zaklyuchaetsya v skorosti. Esli estestvennye kolebaniya klimata v proshlom zanimali desyatki tysyach ili milliony let, pozvolyaya jivotnym i rasteniyam migrirovat i adaptirovatsya, to antropocenovoe poteplenie proishodit za schitannye desyatiletiya. Eta skorost anomalna i prevyshaet prisposoblyaemost sovremennoi biosfery, chto vedet k uskorennomu massovomu vymiraniyu vidov."
  },
  {
    "question": "Chto takoe paleocen-eocenovyi termicheskii maksimum (PETM)?",
    "answer": "PETM - eto ekstremalnoe poteplenie, proizoshedshee primerno 56 millionov let nazad. Ono bylo vyzvano bystrym i massivnym vybrosom ugleroda v atmosferu (predpolojitelno, iz-za tayaniya gidratov metana ili vulkanizma v Severnoi Atlantike), chto podnyalo globalnuyu temperaturu na 5-8 gradusov za neskolko tysyach let. Eto glavnyi geologicheskii analog sovremennogo krizisa, privedshii k acidifikacii okeanov."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Hronologiya Temperatury Zemli',
    sub: 'Izuchite geologicheskie klimaticheskie epohi Zemli',
    ageLabel: 'Vozrast:',
    tempLabel: 'Srednyaya Temperatura:',
    selectPrompt: 'Выберите геологический период.',
    epoch_archean_name: 'Arheiskii eon',
    epoch_archean_age: '4,0-2,5 mlrd let nazad',
    epoch_archean_desc: 'Ekstremalno goryachaya Zemlya s atmosferoi metana.',
    epoch_proterozoic_name: 'Proterozoiskii eon',
    epoch_proterozoic_age: '2,5 mlrd - 541 mln let nazad',
    epoch_proterozoic_desc: 'Rost kisloroda vyzval guronskoe oledenenie.',
    epoch_paleozoic_name: 'Paleozoiskaya era',
    epoch_paleozoic_age: '541-252 mln let nazad',
    epoch_paleozoic_desc: 'Vzryv jizni v okeanah i vyhod na sushu.',
    epoch_mesozoic_name: 'Mezozoiskaya era',
    epoch_mesozoic_age: '252-66 mln let nazad',
    epoch_mesozoic_desc: 'Era dinozavrov i parnikovogo klimata.',
    epoch_cenozoic_name: 'Kainozoiskaya era',
    epoch_cenozoic_age: '66 mln let nazad - n. v.',
    epoch_cenozoic_desc: 'Postepennoe ohlajdenie i lednikovye periody.',
    epoch_anthropocene_name: 'Antropocenovaya epoha',
    epoch_anthropocene_age: 'Nastoyashee i budushee',
    epoch_anthropocene_desc: 'Bystroe antropogennoe poteplenie.',
  },
  seo: [
  {
    "type": "title",
    "text": "ИСТОРИЧЕСКАЯ КЛИМАТОЛОГИЯ: Термическая эволюция Земли сквозь геологические эпохи",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Klimat Zemli nikogda ne byl statichen. Na protyajenii 4,5 milliardov let svoego sushestvovaniya nasha planeta kolebalas mejdu dvumya osnovnymi sostoyaniyami: parnikovym (greenhouse) i lednikovym (icehouse). Ponimanie etih kolebanii - eto ne prosto nauchnyi interes, a neobhodimyi instrument dlya ocenki masshtaba i skorosti sovremennogo antropogennogo potepleniya. Izuchaya izotopy kisloroda v morskih okamenelostyah i puzyrki vozduha v ledyanyh kerne, paleoklimatologi vossozdali tochnuyu kartinu temperaturnogo proshlogo."
  },
  {
    "type": "title",
    "text": "Temperaturnyi reestr po geologicheskim eonam i eram",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Istoriya Zemli delitsya na krupnye vremennye otrezki, opredelyaemye geologicheskimi i biologicheskimi izmeneniyami. Nije privedena tablica ocenochnyh srednih temperatur dlya kajdoi epohi v etoi hronologii:"
  },
  {
    "type": "table",
    "headers": [
      "Geologicheskaya Epoha",
      "Vozrast Aprox.",
      "Srednyaya Temp.",
      "Klimaticheskie Vehi i Harakteristiki"
    ],
    "rows": [
      [
        "<strong>Arheiskii Eon</strong>",
        "4.0-2.5 mlrd let",
        "30 °C",
        "Goryachaya rannyaya Zemlya. Slaboe molodoe Solnce kompensirovalos moshnym parnikovym effektom s vysokim soderjaniem metana."
      ],
      [
        "<strong>Proterozoiskii Eon</strong>",
        "2.5 mlrd - 541 mln",
        "12 °C",
        "Nakoplenie kisloroda; vyzyvaet raspad metana i globalnye oledeniya (\"Zemlya-snejka\")."
      ],
      [
        "<strong>Paleozoiskaya Era</strong>",
        "541-252 mln let",
        "20 °C",
        "Rascvet morskoi jizni i vyhoda na sushu. Zakonchilsya krupneishim vulkanicheskim potepleniem."
      ],
      [
        "<strong>Mezozoiskaya Era</strong>",
        "252-66 mln let",
        "22 °C",
        "Epoha parnika par excellence (polnoe otsutstvie polyarnyh ldov). Rascvet dinozavrov."
      ],
      [
        "<strong>Kainozoiskaya Era</strong>",
        "66 mln let - segodnya",
        "14 °C",
        "Postepennoe ohlajdenie, svyazannoe s dreyfom materikov, perehodishee v chetvertichnye lednikovye cikly."
      ],
      [
        "<strong>Antropocen</strong>",
        "Segodnya i budushee",
        "15.2 °C",
        "Rezkii anomalnyi rost temperatury, vyzvannyi antropogennymi vybrosami parnikovyh gazov."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Termicheskie extremumy proshlogo: ot globalnogo oledeniya do jary mezozoya",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "V istorii nashei planety byvali ekstremalnye klimaticheskie sobytiya. V proterozoe pervyi fotosintez privel k moshnomu vybrosu kisloroda, chto razrushilo metan v atmosfere i poverglo Zemlyu v guronskoe oledenenie (ledniki dostigali ekvatora). V protivopolojnost etomu, v mezozoe i paleocene tektonicheskaya aktivnost vulkanov nasytila atmosferu CO2, povysiv temperaturu na 10 gradusov vyshe sovremennogo urovnya. V eti periody ldov na polyusah ne bylo, a v Arktike rosli shirokolistvennye lesa."
  },
  {
    "type": "title",
    "text": "Klimateobrazuyushie factory v geologicheskom masshtabe",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Dolgosrochnyi klimat Zemli - eto rezultat tonkogo termodinamicheskogo balansa, upravlyaemogo ryadom vzaimosvyazannyh prirodnyh mehanizmov:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Cikly Milankovicha:</strong> Periodicheskie izmeneniya orbity, naklona osi i precessii Zemli, menyayushie kolichestvo solnechnogo tepla.",
      "<strong>Silikatno-karbonatnyi cikl:</strong> Dolgosrochnyi himicheskii termostat. Dojdi vyvodyat CO2, prevrashaya ego v silikaty, osajdayushiesya na dne okeana.",
      "<strong>Tektonika plit:</strong> Dreyf materikov menyaet napravleniya morskih techenii i sozdaet gornye hrepty, chto usilivaet vyvetrivanie CO2.",
      "<strong>Effekt albedo:</strong> Led i sneg otrajayut solnechnye luchi, chto privodit k dalneishemu ohlajdeniyu v zamknutom cikle."
    ]
  },
  {
    "type": "title",
    "text": "Antropocen: besprecedentnoe teplovoe uskorenie v biosfere",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Perehod ot stabilnogo golocena k antropocenu znamenuet epohu neposredstvennogo vliyaniya cheloveka na planetu. V otlichie ot proshlyh sobytii, deistvovavshih na protyajenii tysyachiletii, segodnyashnee poteplenie vyzvano sziganiem iskopaemogo ugleroda za schitannye desyatiletiya. Skorost nakopleniya gazov i rosta temperatury prevyshaet pokazateli vremen velikih massovyh vymiranii, chto stavit biosferu pered besprecedentnym vyzovom."
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
