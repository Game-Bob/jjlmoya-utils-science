import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulyator-fraktala-mandelbrota';
const title = 'Kalkulyator Fraktala Mandelbrota & Explorer Samopodobiya';
const description = 'Issleduyte mnozhestvo Mandelbrota, priblizhayte samopodobnye fraktalnye granicy i sravnivayte glubinu iteracii, cvvetovoj kontrast i koordinaty kompleksnoj ploskosti.';

const howTo = [
  {
    name: 'Vyberite oblast mnozhestva Mandelbrota',
    text: 'Nachnite s polnogo mnozhestva ili perejdite pryamo k oblasti s vysokoj detalizaciej, takoj kak Dolina Morskogo Konka ili spiralnyj minibrot.',
  },
  {
    name: 'Priblizhayte, nazhimaya na izobrazhenie',
    text: 'Nazhmite na lyubuyu tochku na kanvase, aby perecentrirovat kompleksnuyu ploskost i uvelichit fraktal vokrug etoj koordinaty.',
  },
  {
    name: 'Nastroyte glubinu iteracii i cvvetovoj kontrast',
    text: 'Uvelichte byudzhet iteracij, chtoby raskryt bolee melkuyu strukturu granicy, zatem otreguliruyte kontrast i palitru, chtoby polosy vremeni pobega bylo legche chitat.',
  },
];

const faq = [
  {
    question: 'Cto pokazyvaet kalkulyator mnozhestva Mandelbrota?',
    answer: 'On pokazyvaet, kakie kompleksnye cisla c sohranyayut rekurentnost z(n+1) = z(n)^2 + c ogranichennoj pri nacale s z = 0. Tochki, kotorye nikogda ne ubegayut v ramkah vybrannogo byudzheta iteracij, okrasivayutsya kak cleny mnozhestva, v to vremya kak vnesnie tochki okrasivayutsya v zavisimosti ot togo, kak bystro ih orbita ubegaet.',
  },
  {
    question: 'Pochemu granica mnozhestva Mandelbrota soderzit stolko detalej?',
    answer: 'Granica otdelyaet stabilnye i ubegayusie orbity, i nebolsie izmeneniya koordinat vblizi etoj granicy mogut polnostyu izmenit dolgosrocnoe povedenie. Eta chuvstvitelnost sozdaet vlozennye bulb, spirali, filamety i miniatyurnye kopii, kotorye poyavlyayutsya na mnogih urovnyah uveliceniya.',
  },
  {
    question: 'Yavlyaetsya li mnozhestvo Mandelbrota poistine samopodobnym?',
    answer: 'Ono ne yavlyaetsya idealno samopodobnym v tom ze strogom smysle, cto treugolnik Serpinskogo, no ono bogato kvazi-samopodobno. Malenkie kopii vsego mnozhestva poyavlyayutsya po vsej ploskosti, casto iskazhennye i soedinennye sloznymi razvetvlyayusimisya strukturami.',
  },
  {
    question: 'Cto kontroliruet kolicestvo iteracij?',
    answer: 'Kolicestvo iteracij kontroliruet, kak dolgo kalkulyator testiruet kazduyu tochku, precem resit, cto ona, veroyatno, prinadlezt mnozhestvu. Bolee vysokie znaceniya obnaruzivayut bolee glubokie filamety i bolee cistye minibroty, no trebuyut bolse vycislenij na piksel.',
  },
  {
    question: 'Pochemu cveta izmenyayutsya za predelami cernoj oblasti?',
    answer: 'Vnesnie cveta osnovany na vremeni pobega: tocki, kotorye ubegayut bystro, polucayut drugie cveta, cem tocki, kotorye ostayutsya vblizi mnozhestva v tecenie mnogih iteracij. Plavnaya raskraska umensaet rezkie polosy i oblegcaet issledovanie geometrii blizlezasih orbit.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulyator Fraktala Mandelbrota',
    canvasLabel: 'Interaktivnyj kanvas mnozhestva Mandelbrota',
    presetsLabel: 'Prednastrojki oblastej Mandelbrota',
    presetFull: 'Polnoe Mnozhestvo',
    presetSeahorse: 'Dolina Morskogo Konka',
    presetSpiral: 'Spiralnyj Minibrot',
    centerPoint: 'Centr',
    magnification: 'Uvelicenie',
    visibleWindow: 'Vidimoe okno',
    renderBudget: 'Iteracii',
    iterationsLabel: 'Glubina iteracii',
    contrastLabel: 'Kontrast pobega',
    colorLabel: 'Cvetovoe pole',
    paletteEmber: 'Polosy zary',
    paletteLagoon: 'Lagunnaya plazma',
    paletteInk: 'Spektr cernil',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Etot kalkulyator fraktala Mandelbrota otobrazact klassiceskoe mnozhestvo na kompleksnoj ploskosti, opredelennoe iteraciej <strong>z(n+1) = z(n)^2 + c</strong>. On prednaznacen dlya issledovaniya, a ne passivnogo prosmotra: kazdyj klik perecentriruet ploskost, kazdoe priblizenie otkryvaet mensie matematiceskie okrestnosti, a polzunok iteracij pozvolyaet vam resit, naskolko gluboko kalkulyator dolzen testirovat granicu, precem raskrasit tocku kak stabilnuyu ili ubegayusuyu.',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Termaya centralnaya forma otmeccaet tocki, ci orbity ostayutsya ogranicennymi v ramkah tekusego byudzeta iteracij. Cvetnaya vnesnyaya cast predstavlyaet soboj kartu vremeni pobega. Tocka, raskrasennaya blizko k mnozestvu, mozet vyderzat sotni iteracij, precem ee velicina prevysit radius pobega, v to vremya kak dalekaya tocka ubegaet pocti momentalno. Naibolee naucno interesnaya geometriya obycno nahoditsya ne vnutri zapolnennoj formy, a vdol granicy, gde ogranicennoe i neogranicennoe povedenie perepletayutsya.',
    },
    {
      type: 'table',
      headers: ['Upravlenie', 'Cto ono menyaet', 'Kogda uvelicit'],
      rows: [
        ['<strong>Glubina iteracii</strong>', 'Skolko sagi rekursii testiruetsya dlya kazdogo piksela.', 'Ispolzujte bolee vysokie znaceniya posle priblizeniya k tonkim filametam ili miniatyurnym kopiyam.'],
        ['<strong>Kontrast pobega</strong>', 'Naskolko silno plavnye znaceniya pobega razdelyayutsya na vidimye polosy.', 'Povysajte ego, kogda izobrazenie vyglyadit ploskim; ponizajte, kogda cveta sliskom rezkie.'],
        ['<strong>Palitra</strong>', 'Cvetovoe sopostavlenie, primenyaemoe k vnesnim tockam.', 'Perelikite palitry, chtoby obnaruzit struktury, kotorye mogut byt skryty odnim cvetovym polem.'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Odna iz pricin, po kotoroj mnozestvo Mandelbrota tak izvestno, ego kvazi-samopodobie. Kogda vy priblizaetes k antennam, spiralyam i dolinam, vy neodnokratno stalkivaetes s malenkimi ostrovkami, napominayusimi Mandelbrota, casto nazyvaemymi minibrotami. Eti kopii ne prosto dekorativny. Ih raspolozenie otrazaet dinamiku kvadraticeskih otobrazenij, vklucaya periodiceskie bulby, bikifurkacionnye patterny i oblasti, gde orbity ostayutsya v lovuske v tecenie dlitelnyh periodov pered pobegom.',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na vide polnogo mnozestva umerennyj limit iteracij daet uznavaemoe izobrazenie. Odnako pri bolee glubokom priblizenii mnogie granicnye tocki zatracivayut gorazdo bolse vremeni, cto by obnaruzit, ubegayut li oni. Esli limit iteracij sliskom nizok, tonkie struktury mogut vyglyadet lozno tverdymi ili mutnymi. Povysenie kolicestva iteracij ulucsaet klassifikaciyu granicy i pozvolyaet kalkulyatoru bolee uverenno razresat uzkie usiki, spiralnye rukava i sputnikovye bulby.',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pokazanie koordinat otobrazact tekusij centr vidovogo okna kak kompleksnoe cislo c = a + bi. Gorizontalnaya os eta deystvitelnaya cast, a vertikalnaya os mnimaya cast. Nazatie na kanvas vybiraet novuyu kompleksnuyu koordinatu, zatem uvelicivaet vidimoe okno vokrug nee. Eto delaet instrument poleznym dlya izuceniya togo, kak vizualnye oblasti fraktala sootvetsvuyut tocnym mestopolozieniyam na kompleksnoj ploskosti.',
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
