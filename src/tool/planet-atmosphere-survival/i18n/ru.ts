import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulyator-vyzhivaniya-v-atmosfere-planety';
const title = 'Kalkulyator Vyzhivaniya v Atmosfere Planety';
const description = 'Kak dolgo vy smozhete prozhit bez skafandra na Marse, Venere, Titane, Yupitere ili Everest? Ehtot interaktivnyj kalkulyator ocenivaet vremya vyzhivaniya nezaashchishchennogo cheloveka s uchetom davleniya, temperatury, kisloroda, uglekislogo gaza, toksichnosti i vetrovyh opasnostej.';

const howTo = [
  {
    name: 'Vyberite cel, chtoby zagruzit realnye dannye atmosfery',
    text: 'Vyberite Mars, Veneru, Titan, Yupiter ili prednastrojku vershiny Everest, chtoby nemedlenno ustanovit realisticheskie znacheniya davleniya, temperatury, gazovoj smesi i vetra dlya ehtoj sredy.',
  },
  {
    name: 'Regulirujte usloviya, chtoby issledovat perelomnyj moment',
    text: 'Peredvigajte polzunki davleniya, temperatury, kisloroda i uglekislogo gaza, chtoby uvidet, kakaya opasnost stanovitsya smertelnoj pervoj. Ne bolshie izmeneniya mogut polnostyu smestit ogranichivayushchij faktor.',
  },
  {
    name: 'Prochtite chasy vyzhivaniya i slaboe zveno',
    text: 'Tajmer pokazyvaet priblizitelnoe vremya do vozniknoveniya seryoznogo biologicheskogo stressa. Metka ogranichivayushchego faktora tochno ukazyvaet, kakaya opasnost v dannyj moment yavlyaetsya naibolee srochnoj ugrozoj.',
  },
  {
    name: 'Sravnite opasnosti vizualno na karte riska',
    text: 'Radialnye spicy i grafik vremennoj linii pokazyvayut, kak davlenie, zhara, holod, gipoksiya, toksichnost i veter vnosyat vklad v obshchij risk s techeniem vremeni.',
  },
];

const faq = [
  {
    question: 'Mozhet li chelovek vyzhit na Marse bez skafandra?',
    answer: 'Net. Mars imeet chrezvychajno nizkoe davlenie (menee 1% ot zemnogo), pochti ne soderzhit kisloroda dlya dyhaniya, a ego atmosfera v osnovnom sostoit iz uglekislogo gaza. Poterya soznaniya proizojdyot v techenie sekund, a seryoznye travmy v techenie minut bez podderzhki davleniya i kisloroda.',
  },
  {
    question: 'Pochemu atmosfernoe davlenie tak kriticheski vazhno dlya vyzhivaniya cheloveka?',
    answer: 'Nizhe predela Armstronga (primerno 6,3 kPa) voda mozhet zapat pri temperature tela. Nizkoe davlenie takzhe prepyatstvuet postupleniyu kisloroda v krov, dazhe esli vozduh sostoit iz 100% kisloroda. Vot pochemu davlenie yavlyaetsya odnoj iz samyh bystryh smertelnyh opasnostej.',
  },
  {
    question: 'Na kakoj planete naibolee blagopriyatnaya dlya vyzhivaniya atmosfera?',
    answer: 'Sredi celej v Solnechnoj sisteme, Zemlya na bolshoj vysote (Everest) naibolee blagopriyatna dlya vyzhivaniya, hotya vso eshchyo opasna bez akklimatizacii. Titan naimenee vrazhdeben sredi drugih variantov, potomu chto ego davlenie upravlyaemo, no emu ne hvataet kisloroda, i on kriogenno holoden. Ni odna planeta ili luna, krome Zemli, ne imeet dyhatelnoj atmosfery.',
  },
  {
    question: 'Venera huzhe iz-za zhary ili davleniya?',
    answer: 'Oba faktora ekstremalny na poverhnosti. Venera imeet razdavlivayushchee davlenie (v 92 raza bolshe zemnogo) i temperaturu poverhnosti vyshe, chem v kuhonnoj pechi. Ehti opasnosti dejstvuyut vmeste, poetomu instrument pomechaet obe kak nemedlennye dominiruyushchie ugrozy.',
  },
  {
    question: 'Pochemu u Titana bolee dlitelnaya ocenka vyzhivaniya, chem u Marsa?',
    answer: 'Titan imeet plotnuyu atmosferu, poetomu samo po sebe davlenie ne yavlyaetsya nemedlennoj problemoj. Vremya vyzhivaniya ogranicheno ekstremalnym holodom (okolo -180°C) i polnym otsutstviem kisloroda. Mars terpit neudachu po davleniyu, Titan po temperature.',
  },
  {
    question: 'Kakovy osnovnye prichiny smerti v kosmose bez skafandra?',
    answer: 'Samye bystrye ubijcy ehto vozdejstvie vakuuma (poterya davleniya, vyzyvayushchaya ebullizm i gipoksiyu v techenie sekund), za kotorymi sleduyut ekstremalnaya temperatura, toksichnyj gazovyj sostav i teplopoterya, vyzvannaya vetrom. Kalkulyator otslezhivaet vse shest kategorij opasnostej.',
  },
  {
    question: 'Podhodit li ehtot instrument dlya planirovaniya kosmicheskih missij?',
    answer: 'Net. Ehto obrazovatelnaya model, ispolzuyushchaya uproshchyonnye biologicheskie porogi. Realnyj analiz dekompressii, gipoksii, toksichnyh gazov, termicheskih travm i riska missii trebuet ekspertnoj medicinskoj i inzhenernoj ocenki dlya bezopasnosti.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Karta atmosfernogo riska',
    timeline: 'Vremennaya liniya biologicheskogo riska',
    controls: 'Upravlenie atmosferoj',
    destination: 'Naznachenie',
    pressure: 'Davlenie',
    temperature: 'Temperatura',
    oxygen: 'Kislorod',
    co2: 'Uglekislyj gaz',
    limitingFactor: 'Ogranichivayushchij faktor',
    verdict: 'Verdikt',
    exposureSummary: 'Сводка воздействия',
    atmosphericModel: 'Модель атмосферного воздействия',
    survivalEnvelope: 'предел выживания',
    survival: 'Выживание',
    mode: 'Режим',
    metric: 'Метрическая',
    imperial: 'Имперская',
    unitSystem: 'Система единиц',
    vitalStress: 'жизненный стресс',
    timeLabel: 'время',
    estimatedSurvival: 'расчетное выживание',
    hazardPressure: 'Давление',
    hazardTemperature: 'Температура',
    hazardOxygen: 'Кислород',
    hazardToxicity: 'Токсичность',
    hazardWind: 'Ветер',
    presetMars: 'Марс',
    presetVenus: 'Поверхность Венеры',
    presetTitan: 'Титан',
    presetJupiter: 'Облачный слой Юпитера',
    presetEverest: 'Земля, вершина Эвереста',
    noteMars: 'Почти вакуум, экстремальный холод и почти нет кислорода.',
    noteVenus: 'Сокрушительное давление и жар печи доминируют немедленно.',
    noteTitan: 'Плотный азотный воздух, но смертельный холод и нет кислорода.',
    noteJupiter: 'Богатая водородом атмосфера, сильный холод и неистовые ветры.',
    noteEverest: 'Выживаемо для тренированных альпинистов, но гипоксия и холод серьезны.',
    verdictSeconds: 'Секунды',
    verdictMinutes: 'Минуты',
    verdictHours: 'Часы',
    verdictExtended: 'Риск длительного воздействия',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulyator Vyzhivaniya v Atmosfere Planety: Kak Dolgo Vy Smozhete Prozhit Bez Skafandra na Marse, Venere, Titane ili Yupitere?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esli by vy vnezapno okazalis v atmosfere drugoj planety bez skafandra, kak dolgo by vy prozhili? Ehtot kalkulyator ocenivaet vremya vyzhivaniya nezaashchishchennogo cheloveka na Marse, Venere, Titane, Yupitere i Everest, modeliruya shest opasnostej: obshchee davlenie, dostupnost kisloroda, temperaturu, koncentraciyu uglekislogo gaza, toksichnuyu himiyu i vetrovuyu nagruzku. On otvechaet na voprosy, kotorye entuziasty kosmosa i studenty zadayut chashche vsego: kakaya planeta ubivaet bystree vsego, kakaya opasnost yavlyaetsya realnoj ugrozoj i chto vam ponadobitsya dlya vyzhivaniya.',
    },
    {
      type: 'paragraph',
      html: 'Rezultat yavlyaetsya obrazovatelnoj ocenkoj, a ne chislom dlya planirovaniya missij. On prednaznachen dlya sravneniya togo, pochemu raznye miry opasny sovershenno po-raznomu. Mars termit neudachu po davleniyu i gipoksii v techenie sekund. Venera sochetaet razdavlivayushchee davlenie s zharoj pechi. Titan kriogenen i ne imeet kisloroda. Oblachnye palaty gazovyh gigantov dobavlyayut toksicheskie sostavy i sverhzvukovye vetry. Kazhdaya sreda uchit chemu-to raznomu o tom, chto delaet Zemlyu unikalno obitaemoj.',
    },
    {
      type: 'title',
      text: 'Na Kakoj Planete Naibolee Blagopriyatnaya dlya Vyzhivaniya Atmosfera?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sredi celej v ehtom kalkulyatore, zemnye sredy na bolshoj vysote (kak vershina Everest) naibolee blagopriyatny dlya vyzhivaniya, hotya vso eshchyo opasny bez podgotovki. Sredi drugih planet Titan imeet naibolee shchadyashchee davlenie, no terpit neudachu po temperature i kislorodu. Ni odno drugoe mesto, krome Zemli, v nastoyashchee vremya ne predlagaet dyhatelnoj atmosfery. Kalkulyator pomogaet tochno uvidet, pochemu kazhdyj mir terpit neudachu i kakaya opasnost peresech kriticheskij porog ran she vsego.',
    },
    {
      type: 'title',
      text: 'Kak Kazhdaya Opasnost Vliyaet na Organizm',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Davlenie (nizkoe):</strong> nizhe 6,3 kPa zhidkosti organizma mogut zapat (ebullizm). Dazhe vyshe ehtogo nizkoe davlenie prepyatstvuet pogloshcheniyu kisloroda. Ehto samyj bystryj ubijca v sredah, blizkih k vakuumu.',
        '<strong>Davlenie (vysokoe):</strong> ekstremalnoe davlenie szhimaet dyhatelnye gazy, uvelichivaet risk azotnogo narkoza i mozhet mehanicheski povredit lyogkie i pazuhi.',
        '<strong>Parциальnoe davlenie kisloroda:</strong> dyhatelnyj kislorod zavisit kak ot procentnogo soderzhaniya gaza, tak i ot obshchego davleniya. Redkaya atmosfera mozhet imet 21% kisloroda, no vso ravnoy vyzyvat gipoksiyu.',
        '<strong>Temperatura (zhara):</strong> vyshe primerno 60°C denaturaciya belkov i otkaz organov nachinayutsya bystro. Temperatura poverhnosti Venery prevyshaet 460°C.',
        '<strong>Temperatura (holod):</strong> nizhe tochki zamerzaniya nastupayut obmorozhenie i gipotermiya. Pri kriogennyh temperaturah, takih kak -180°C na Titane, zamerzanie tkanej pochti nemedlennoe.',
        '<strong>Tok-sichnost uglekislogo gaza:</strong> CO2 vyshe primerno 5% vyzyvaet golovokruzhenie, golovnuyu bol i poteryu soznaniya. Mnogie planetarnye atmosfery v osnovnom sostoyat iz CO2.',
        '<strong>Tok-sicheskaya himiya:</strong> soedineniya sery, ammoniak, metan i vodorod mogut byt korrozionnymi, udushayushchimi ili himicheski opasnymi.',
        '<strong>Veter:</strong> silnye vetry uskoryayut teplopoteryu putyom konvekcii, vyzyvayut vetrovoe ohlazhdenie, razdut oblomki i mogut fizicheski destabilizirovat cheloveka.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Pochemu Nizkoe Davlenie Ubivaet Prezhde Vsego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars imeet poverhnostnoe davlenie primerno 0,6 kPa, znachitelno nizhe predela Armstronga (6,3 kPa), gde voda mozhet zapat pri temperature tela. Nezaashchishchyonnoe vozdejstvie vyzvalo by ebullizm, bystruyu gipoksiyu i poteryu soznaniya v techenie 15 sekund. Dazhe esli uchest holod (v srednem -60°C) i atmosferu, bogatuyu uglekislym gazon, davlenie i kislorodnaya nedostatochnost dominiruyut na vremennoj linii. Funkcionalnaya davleniynaya odezhda i zapas kisloroda yavlyayutsya absolyutnym minimumom dlya vyzhivaniya na Marse.',
    },
    {
      type: 'title',
      text: 'Venera: Ekstremalnoe Davlenie i Zhara Dejstvuyushchie Vmeste',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Poverhnost Venery imeet davlenie 92 zemnyh atmosfer (primerno 9,3 MPa, chto sootvetstvuet 900 metram pod vodoj) i temperaturu poverhnosti 462°C. Atmosfera na 96% sostoit iz uglekislogo gaza s oblakami sernoj kisloty. Ehti opasnosti dejstvuyut odnovremenno, a ne posledovatelno: davlenie razdavlivaet, zhara varit, a CO2 otravlyaet. V ehtom kalkulyatore Venera yavlyaetsya edinstvennym celevym obektom, gde neskolko opasnostej peresekayut smertelnyj porog pochti v odin i tot zhe moment.',
    },
    {
      type: 'title',
      text: 'Titan: Samoe Druzhelyubnoe Davlenie v Solnechnoj Sisteme Za Predelami Zemli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sputnik Saturna Titan neobychen, potomu chto ego poverhnostnoe davlenie (okolo 147 kPa, ili v 1,45 raza bolshe zemnogo) na samom dele nahoditsya v diapazone, kotoryj chelovek mozhet vynesti. Dlya ehtoj peremennoj ne ponadobilsya by davleniinyj skafandr. Odnako Titan ne imeet prakticheski nikakogo kisloroda, temperaturu poverhnosti -179°C i atmosferu iz metana i azota. Kalkulyator pokazyvaet davlenie kak upravlyaemoe, no temperatura i kislorodnaya nedostatochnost dominiruyut nemedlenno. Titan napominaet, chto vyzhivanie zavisit ot vsego profilya opasnostej, a ne tolko ot odnogo izmereniya.',
    },
    {
      type: 'title',
      text: 'Kak Interpretirovat Tajmer Vyzhivaniya i Kartu Riska',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tajmer vyzhivaniya ocenivaet interval do vozniknoveniya seryoznogo biologicheskogo stressa u nezaashchishchyonnogo cheloveka. Metka ogranichivayushchego faktora opredelyaet, kakaya opasnost peresechet kriticheskij porog pervoj. Radialnye spicy opasnostej pokazyvayut otnositelnuyu tyazhest kazhdoj iz shesti otslezhivaemyh opasnostej, a grafik vremennoj linii otobrazhaet, kak kombinirovannyj risk nakoplyaetsya v techenie perioda vozdejstviya. Ehti vizualnye instrumenty pomogayut s pervogo vzglyada uvidet, pochemu dannaya sreda opasna i kakaya zashchitnaya sistema imela by naibolshee znachenie.',
    },
    {
      type: 'table',
      headers: ['Naznachenie', 'Smertelnye opasnosti', 'Bystrejshaya ugroza', 'Chto skafandr dolzhen ispravit'],
      rows: [
        ['Mars', 'Blizkij k vakuumu, gipoksiya, holod, CO2', 'Davlenie < predel Armstronga', 'Davleniynaya odezhda, kislorod, termoizolyaciya'],
        ['Poverhnost Venery', 'Razdavlivayushchee davlenie, 462°C zhara, CO2, sernaya kislota', 'Davlenie i zhara odnovremenno', 'Tyazhyoloe ohlazhdenie, davleniinyj korpus, dyhatelnyj apparat'],
        ['Titan', 'Net kisloroda, -179°C holod, metan', 'Temperatura i gipoksiya', 'Zapas kisloroda, ekstremalnaya termozashchita'],
        ['Oblachnaya palata Yupitera', 'Net kisloroda, bogato vodorodom, holod, silnyj veter', 'Gipoksiya i otsutstvie dyhatelnogo gaza', 'Germetichnaya dyhatelnaya sistema, termoregulyaciya'],
        ['Vershina Everest', 'Gipoksiya, holod, veter', 'Parcialnoe davlenie kisloroda slishkom nizkoe', 'Kislorodnaya maska, zimnyaya odezhda, akklimatizaciya'],
      ],
    },
    {
      type: 'title',
      text: 'Chto Nuzhno, Chtoby Vyzhit Bez Skafandra?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realisticheski, ni odno izvestnoe telo Solnechnoj sistemy, krome Zemli, ne pozvolyaet nezaashchishchyonnomu cheloveku prozhit bolee neskolkih minut, a bolshinstvo ubivaet v techenie sekund. Cennost ehtogo kalkulyatora ne v poiske bezopasnoj planety, a v ponimanii konkretnyh prichin, po kotorym kazhdaya sreda vrazhdebna. Ehti znaniya napravlyayut obrazovanie v oblasti planetarnoj nauki, proektirovanie kosmicheskih habitato v, prioritety podgotovki astronavto v i poisk potencialno obitaemyh ekzoplanet, gde atmosfera mozhet dejstvitelno podderzhivat zhizn.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ispolzujte dlya obucheniya:</strong> posmotrite, kak izmenenie odnoj peremennoj, naprimer, udvoenie davleniya na Marse, menyaet okno vyzhivaniya.',
        '<strong>Ispolzujte dlya sravneniya:</strong> sravnite, pochemu Titan daet bolshe vremeni, chem Venera, hotya oba nevyzhivaemy.',
        '<strong>Ispolzujte dlya obsuzhdeniya:</strong> izuchite, chto ponadobilos by terraformirovannoj atmosfere dlya dostizheniya dyhatelnyh uslovij.',
        '<strong>Ne ispolzujte dlya realnyh reshenij:</strong> kalkulyator ispolzuet uproshchyonnye porogi. Planirovanie chrezvychajnyh situacij trebuet professionalnoj aerokosmicheskoj mediciny.',
      ],
    },
    {
      type: 'title',
      text: 'Vazhnye Ogranicheniya i Obrazovatelnaya Cel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realnoe vyzhivanie zavisit ot individualnogo zdorovya, odezhdy, urovnya nagruzki, vlazhnosti, solnechnoj radi, istorii dekompressii, smesi dyhatelnogo gaza, vremeni spaseniya i mnogih drugih peremennyh. Dannye o planetarnoj atmosfere takzhe varyiruyutsya v zavisimosti ot vysoty, sezona i istochnika izmerenij. Ehtot instrument ispolzuet uproshchyonnye biologicheskie porogi i reprezentativnye ekologichesskie dannye dlya nauchnogo obrazovaniya. On prednaznachen dlya pomoshchi studentam, uchitelyam, entuziastam kosmosa i nauchnym pisatelyam v ponimanii planetarnoj obitaemosti, a ne dlya rukovodstva realnymi kosmicheskimi operaciyami.',
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
