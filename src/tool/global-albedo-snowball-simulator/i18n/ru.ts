import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'globalny-albedo-snezhnyy-shar-simulyator';
const title = 'Globalny simulator albedo i Zemli Snezhka';
const description = 'Issleduyte balans teplovogo izlucheniya Zemli, izmeneniya solnechnoj postoyannoj, kontsentratsiyu parnikovyh gazov i obratnuyu svyaz lyod-albedo, chtoby uvidet, otstupayut li ledyanye shchity, stabiliziruyutsya ili vyzyvayut klimat snezhka.';

const howTo = [
  {
    name: 'Ustanovite padayushchij solnechnyj svet',
    text: 'Peredvigajte polzunok solnechnoj postoyannoj, chtoby proverit stsenarii tusklogo molodogo Solntsa, tekushchego solnechnogo sveta Zemli ili bolee yarkogo budushchego forcinga.',
  },
  {
    name: 'Otregulirujte kontsentratsiyu parnikovyh gazov',
    text: 'Izmennite kontsentratsiyu parnikovyh gazov, chtoby uvidet, kak radiatsionnyj forcing konkuriruet s bolee vysokim planetarnym albedo.',
  },
  {
    name: 'Zasejte planetu ldom',
    text: 'Nahnite s malenkoj polyarnoj shapki ili bolshogo pokrytogo ldom mira. Model povtoryaet petlyu obratnoj svyazi i pokazyvaet, nastupaet lyod ili otstupaet.',
  },
  {
    name: 'Prochitajte sostoyanie klimata',
    text: 'Ispolzujte temperaturu, pogloshchonnuyu radiatsiyu, konechnyj ledyanoj pokrov i krivuyu vremennoj shkaly, chtoby sravnit umerennye, snezhkovye i parnikovye rezultaty.',
  },
];

const faq = [
  {
    question: 'Chto takoe obratnaya svyaz lyod-albedo?',
    answer: 'Lyod i sneg otrazhayut bolshe solnechnogo sveta, chem okean ili susha. Kogda lyod rasshiryaetsya, planetarnoe albedo rastyot, pogloshchonnaya solnechnaya energiya padayet, i ohlazhdenie mozhet pozvolit obrazovatsya eshchyo bolshemu kolichestvu lda. Kogda lyod otstupaet, bolee tyomnaya poverhnost pogloshchaet bolshe energii, i poteplenie uskoryaetsya.',
  },
  {
    question: 'Chto oznachaet Zemlya snezhok?',
    answer: 'Zemlya snezhok eto gipoteticheskoe klimaticheskoe sostoyanie, pri kotorom lyod dostigaet nizkih shirot ili pochti globalnogo pokrytiya. Geologicheskie dannye svidetelstvuyut o tom, chto Zemlya mogla priblizhatsya k takim sostoyaniyam v neoproterozojskuyu eru.',
  },
  {
    question: 'Yavlyaetsya li eto polnoj klimaticheskoj modelyu?',
    answer: 'Net. Eto kompaktnaya model energeticheskogo balansa dlya obucheniya. Ona ignoriruet atmosfernuyu tsirkulyatsiyu, oblaka, perenos tepla okeanom, vremena goda, geografiyu i obratnye svyazi uglerodnogo tsikla, no ulavlivayet osnovnuyu radiatsionnuyu logiku obratnoj svyazi albedo.',
  },
  {
    question: 'Pochemu parnikovye gazy mogut razrushit sostoyanie snezhka?',
    answer: 'Parnikovye gazy umenshayut iskhodyashchee dlinovolnovoe ohlazhdenie, dobavlyaya radiatsionnyj forcing. V stsenariyah Zemli snezhka vulkanicheskij uglekislyj gaz mozhet nakaplivatsya, kogda vyvetrivanie silikatov zamedlyaetsya, v konechnom itoge nagrevaya planetu dostatochno, chtoby rastopit lyod na nizkih shirotah.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Upravlenie klimatom',
    solarConstant: 'Solnechnaya postoyannaya',
    greenhouse: 'Parnikovye gazy',
    initialIce: 'Nachalnyj ledyanoj pokrov',
    temperature: 'Ravnovesnaya temperatura',
    absorbed: 'Pogloshchyonnyj solnechnyj svet',
    finalIce: 'Konechnyj ledyanoj pokrov',
    albedo: 'Planetarnoe albedo',
    forcing: 'Parnikovyj forcing',
    state: 'Sostoyanie klimata',
    timeline: 'Izmenenie ledyanogo pokrova',
    years: 'let modeli',
    snowball: 'Blokirovka snezhka',
    temperate: 'Umerennoe ravnovesie',
    hothouse: 'Parnikovoe otstuplenie',
    retreating: 'Lyod otstupaet',
    advancing: 'Lyod nastupaet',
    stable: 'Blizko k ravnovesiyu',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Radiatsionnaya diagnostika',
  },
  seo: [
    {
      type: 'title',
      text: 'Globalny simulator albedo dlya obratnoj svyazi lyod-albedo i Zemli Snezhka',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Etot simulator issleduet odnu iz vazhnejshih petel obratnoj svyazi v planetarnom klimate: svyaz mezhdu ledyanym pokrovom, otrazhatelnoj sposobnostyu i pogloshchyonnym solnechnym svetom. Planeta s yarkim ldom otrazhaet bolshe padayushchej solnechnoj radiatsii obratno v kosmos. Eto ohlazhdenie mozhet sohranit ili rasshirit lyod, eshchyo bolshe povyshaya albedo i tolkaya sistemu k sostoyaniyu Zemli Snezhka. Planeta s menshim kolichestvom lda pogloshchaet bolshe solnechnogo sveta, chto mozhet uskorit deglyatsiatsiyu.',
    },
    {
      type: 'paragraph',
      html: 'Ispolzujte polzunki dlya izmeneniya solnechnoj postoyannoj, kontsentratsii parnikovyh gazov i nachalnogo ledyanogo pokrova. Zatem model povtoryaet prostoj globalnyj energeticheskij balans i pokazyvaet, dvizhetsya li klimat k obshirnomu oledeneniyu, umerennomu ravnovesiyu ili goryachemu sostoyaniyu s malym kolichestvom lda. On prednaznachen dlya bystroj intuitsii: kazhdyj element upravleniya napryamuyu sootvetstvuet fizicheskomu terminu v radiatsionnom byudzhete.',
    },
    {
      type: 'title',
      text: 'Kak otsenivaetsya energeticheskij balans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pogloshchonnaya korotkovolnovaya radiatsiya otsenivaetsya kak S(1 - a) / 4, gde S solnechnaya postoyannaya, a a planetarnoe albedo. Delenie na chetyre preobrazuet solnechnyj svet, perehvachennyj diskom Zemli, v srednee po vsej sfericheskoj poverhnosti. Bolee vysokoe albedo snizhaet pogloshchonnuyu energiyu; bolee vysokaya kontsentratsiya parnikovyh gazov dobavlyaet polozhitelnyj radiatsionnyj forcing, povyshayushchij otsenku temperatury poverhnosti.',
    },
    {
      type: 'table',
      headers: ['Parametr', 'Fizicheskij smysl', 'Klimaticheskij effekt'],
      rows: [
        ['Solnechnaya postoyannaya', 'Padayushchaya zvyozdnaya energiya na orbite Zemli', 'Bolee vysokie znacheniya nagrevayut planetu i sokrashchayut lyod.'],
        ['Parnikovye gazy', 'Dlinovolnovoj radiatsionnyj forcing otnositelno etalonnoj atmosfery', 'Bolee vysokie znacheniya zatrudnyayut blokirovku snezhka.'],
        ['Nachalnyj ledyanoj pokrov', 'Nachalnaya otrazhatelnaya sposobnost planety', 'Vysokie znacheniya mogut vyzvat nekontroliruemoe ohlazhdenie cherez obratnuyu svyaz albedo.'],
      ],
    },
    {
      type: 'title',
      text: 'Pochemu obratnaya svyaz albedo mozhet stat nelinejnoj',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Petlya lyod-albedo eto ne myagkaya odnonapravlennaya regulirovka. Kak tolko lyod dostigaet dostatochnoj chasti planety, bolee yarkaya poverhnost mozhet udalit tak mnogo pogloshchonnogo solnechnogo sveta, chto letneye tayanie stanovitsya slabym. V protivopolozhnom napravlenii otstupayushchij lyod obnazhaet bolee tyomnyj okean i sushu, uvelichivaya pogloshchenie i udalyaya planetu ot oledeneniya. Vot pochemu odinakovyj forcing mozhet davat raznye rezultaty v zavisimosti ot nachalnogo ledyanogo pokrova.',
    },
    {
      type: 'paragraph',
      html: 'Realnaya Zemlya dobavlyaet mnogo slozhnostej: oblaka, pyl na ldu, perenos tepla okeanom, polozhenie kontinentov, sezonnyj solnechnyj svet, dinamiku morskogo lda i uglerodnyj tsikl. Prostaya model vsyochyo imeet tsennost, potomu chto ona izoliruet radiatsionnyj byudzhet pervogo poryadka. Ona pozvolyaet uvidet, pochemu gipotezy Zemli Snezhka zavisyat kak ot slabogo solnechnogo sveta ili triggerov vysokogo albedo, tak i ot posleduyushchego nakopleniya parnikovyh gazov dlya pobega.',
    },
    {
      type: 'title',
      text: 'Interpretatsiya simulatora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Blokirovka snezhka:</strong> konechnyj ledyanoj pokrov ochen vysoki, a ravnovesnaya temperatura ostayotsya znachitelno nizhe tochki zamerzaniya.',
        '<strong>Umerennoe ravnovesie:</strong> model stabiliziruetsya s chastichnym ledyanym pokrovom i umerennym pogloshchyonnym izlucheniem.',
        '<strong>Parnikovoe otstuplenie:</strong> lyod razrushaetsya do ochen maloj doli, v to vremya kak parnikovyj forcing i pogloshchyonnyj solnechnyj svet ostayutsya vysokimi.',
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
