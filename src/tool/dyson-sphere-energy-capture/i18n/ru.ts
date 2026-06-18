import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-sfera-energeticheskii-simulator';
const title = 'Simulator zakhvata energii sfery Daisona';
const description = 'Otsenite konstruktsii roya Daisona, koltsa, obolochki i statit-kollektorov dlya raznykh zvyozd. Rasschitayte zakhvachennuyu moshchnost, orbitalnyy radius, massu materiala i pokrytiye, neobkhodimoye dlya dostizheniya tselevoy shkaly Kardasheva.';

const howTo = [
  {
    name: 'Vyberite tip zvezdy',
    text: 'Nachnite s karlika M, zvezdy solnechnogo tipa, zvezdy tipa A, krasnogo giganta ili golubogo giganta. Simulator ispolzuyet reprezentativnyye znacheniya svetimosti i massy dlya otsenki radiusa kollektora i orbitalnogo perioda.',
  },
  {
    name: 'Vyberite arkhitekturu megastruktury',
    text: 'Sravnite roy Daisona, ekvatorialnoye kol-tso, zhyostkuyu obolochku ili oblako statit-zerkal. Kazhdaya konstruktsiya imeyet raznyye predpolozheniya ob effektivnosti zakhvata, plotnosti materiala i stabilnosti.',
  },
  {
    name: 'Ustanovite pokrytiye i rabochuyu temperaturu',
    text: 'Uvelichite pokrytiye, chtoby zakhvatyvat bolshe zvyozdnoy moshchnosti, zatem otreguliruyte rabochuyu temperaturu, chtoby priblizit ili otdalit kollektory ot zvezdy.',
  },
  {
    name: 'Viberite tsel po shkale Kardasheva',
    text: 'Ispolzuyte polzunok tseli, chtoby uvidet, kakuyu chast zvezdy nuzhno okhvatit dlya dostizheniya energeticheskoy tseli tsivilizatsionnogo masshtaba.',
  },
];

const faq = [
  {
    question: 'V chyom raznitsa mezhdu sferoy Daisona i royem Daisona?',
    answer: 'Zhyostkaya sfera Daisona predstavlyayet soboy nepreryvnuyu obolochku vokrug zvezdy, togda kak roy Daisona eto bolshoye sobraniye nezavisimykh orbitalnykh kollektorov. Bolshinstvo tekhnicheskikh diskussiy otdayut predpochteniye royam, potomu chto sploshnaya obolochka byla by strukturno nestabilna i chrezvychayno materialoyomka.',
  },
  {
    question: 'Kak simulator vybirayet optimalnyy radius?',
    answer: 'On otsenivayet rasstoyaniye, na kotorom kollektory, izluchayushchiye s obeikh storon, dostigayut vybrannoy rabochey temperatury pri zadannoy zvyozdnoy svetimosti. Boleye goryachiye kollektory mogut obrashehatsya blizhe, togda kak boleye kholodnym trebuyutsya bolshiye radiusy.',
  },
  {
    question: 'Chto zdes oznachayet otsenka po Kardashevu?',
    answer: 'Znacheniye Kardasheva rasschityvayetsya iz zakhvachennoy moshchnosti po logarifmicheskoy formule K = (log10(P) - 6) / 10, gde P eto moshchnost v vattakh. Znacheniye blizkoye k K1 sootvetstvuyet energeticheskim potrebnostyam planetarnogo masshtaba, v to vremya kak K2 priblizhayetsya k polnomu vykhodu zvezdy.',
  },
  {
    question: 'Realistichna li massa materiala?',
    answer: 'Eto uchebnaya priblizhennaya otsenka pervogo poryadka, osnovannaya na ploshchadi kollektora, poverkhnostnoy plotnosti i koeffitsiyente stabilnosti. Realnyye proyekty potrebovali by stationarnogo uderzhaniya, peredachi energii, poter pri dobyche, rezervirovaniya, otvoda tepla i proizvodstvennoy infrastruktury.',
  },
  {
    question: 'Pochemu yarkim zvezdam trebuyutsya takiye bolshiye sistemy kollektorov?',
    answer: 'Zvyozdy s vysokoy svetimostyu otodvigayut bezopasnyy teplovoy radius naruzhu. Eto uvelichivayet ploshchad poverkhnosti, neobkhodimuyu dlya zadannoy doli pokrytiya, poetomu potrebnost v materiale mozhet rasti bystreye, chem inuitsivno vosprinimayetsya zakhvachennaya moshchnost.',
  },
  {
    question: 'Mozhet li tsivilizatsiya dostich II tipa po Kardashevu s chastichnym pokrytiyem?',
    answer: 'Da, yesli roditelskaya zvezda dostatochno yarka i kollektory effektivny. Vokrug zvezdy solnechnogo tipa dostizheniye II tipa trebuyet zakhvata bolshoy chasti solnechnoy svetimosti, no vokrug boleye yarkikh zvyozd ta zhe tselevaya moshchnost mozhet byt dostignuta pri menshey doli pokrytiya.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Vizualizatsiya kollektora Daisona',
    starType: 'Tip zvezdy',
    structureType: 'Struktura',
    coverage: 'Pokrytiye kollektora',
    operatingTemp: 'Rabochaya temperatura',
    kardashevTarget: 'Tsel po Kardashevu',
    kardashevRating: 'Tekushchiy pokazatel',
    capturedPower: 'Zakhvachennaya moshchnost',
    optimalRadius: 'Optimalnyy radius',
    targetCoverage: 'Tselevoye pokrytiye',
    materialMass: 'Massa materiala',
    captureMeter: 'Progress k tseli',
    statusReady: 'Nastroyte sistemu dlya otsenki potrebnosti v kollektorakh.',
    orbitalPeriod: 'Orbitalnyy period',
    collectorArea: 'Ploshchad kollektora',
    starMDwarf: 'Karlik M',
    starSun: 'Zvezda G solnechnogo tipa',
    starA: 'Zvezda tipa A',
    starRedGiant: 'Krasnyy gigant',
    starBlueGiant: 'Goluboy gigant',
    structureSwarm: 'Roy Daisona',
    structureRing: 'Ekvatorialnoye kol-tso',
    structureShell: 'Zhyostkaya obolochka',
    structureStatite: 'Oblako statit-zerkal',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulator zakhvata energii sfery Daisona',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sfera Daisona eto ne tolko nauchno-fantasticheskiy obraz zvezdy vnutri obolochki. Eto semeystvo kontseptsiy megastruktur dlya perekhvata zvyozdnoy svetimosti: roi sputnikov, ekvatorialnyye kol-tsa, tonkiye zerkalnyye oblaka i znamenitaya, no problemnaya zhyostkaya obolochka. Etot simulator prevrashchayet eti idei v tsifry, chtoby vy mogli sravnit, kak tip zvezdy, temperatura kollektora, pokrytiye i konstruktsiya struktury menyayut energeticheskiy byudzhet.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulyator otsenivayet zakhvachennuyu moshchnost, teplovoy orbitalnyy radius, ploshchad kollektora, orbitalnyy period, massu materiala i pokrytiye, neobkhodimoye dlya vybrannoy tseli po shkale Kardasheva. On sozdan dlya studentov, mirostroiteley, nauchnykh kommunikatorov i vsekh, kto pyetayetsya ponyat, pochemu tsivilizatsii II tipa tak slozhny: problema ne tolko v energii, no i v ploshchadi, teplote, dobyche, stabilnosti i orbitalnoy logistike.',
    },
    {
      type: 'title',
      text: 'Kak otsenivayetsya radius Daisona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Optimalnyy radius rasschityvayetsya iz zvyozdnoy svetimosti i rabochey temperatury kollektora. Kollektor blizko k yarkoy zvezde poluchayet intensivnyy potok i dolzhen rabotat goryachim ili otvodit ogromnoye kolichestvo tepla. Peremeshcheniye naruzhu snizhayet teplovuyu nagruzku, no neobkhodimaya ploshchad kollektora rastvot s kvadratom rasstoyaniya. Etot kompromiss obyasnyayet, pochemu odna i ta zhe dolya pokrytiya mozhet byt skromnoy vokrug tusklogo karlika M i ogromnoy vokrug golubogo giganta.',
    },
    {
      type: 'title',
      text: 'Sravneniye roya, kol-tsa, obolochki i oblaka statitov',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Roy Daisona:</strong> mnozhestvo nezavisimykh orbitalnykh kollektorov. Eto naiboleye pravdopodobnaya krupnomasshtabnaya arkhitektura, poskolku yego mozhno stroit postepenno i on ne trebuyet zhyostkoy zvyozdnoy obolochki.',
        '<strong>Ekvatorialnoye kol-tso:</strong> boleye uzkaya polosa kollektorov s boleye nizkoy effektivnostyu pokrytiya. Yego legche predstavit kak pervuyu megastrukturu, no on ne mozhet zakhvatit polnyy vykhod zvezdy bez rasshireniya v boleye shirokiy roy.',
        '<strong>Zhyostkaya obolochka:</strong> vizualno znakomaya, no mekhanicheski nevygodnaya. Obolochka vokrug zvezdy imeyet ser-yoznyye problemy so stabilnostyu i materialami, poetomu simulator prisvaivayet yey bolshuyu massu i nizkuyu stabilnost.',
        '<strong>Oblako statit-zerkal:</strong> sverkhlyogkiye otrazhateli, chastichno uderzhivayemyye davleniyem izlucheniya. Ono snizhayet potrebnost v materiale, no imeyet ponizhennuyu teplovuyu stoykost i trebuyet slozhnogo upravleniya.',
      ],
    },
    {
      type: 'title',
      text: 'Pokrytiye, neobkhodimoye dlya shkaly Kardasheva',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Shkala Kardasheva vyrazhayet energeticheskoye potrebleniye tsivilizatsii v logarifmicheskoy forme. V etom instrumente zakhvachennyye vatty preobrazuyutsya v pokazatel K po formule K = (log10(P) - 6) / 10. Chastichnyy roy Daisona vokrug Solntsa mozhet prevzyt tekushcheye energeticheskoye potrebleniye chelovechestva na mnogo poryadkov velichiny zadolgo do dostizheniya polnogo statusa II tipa. Rezultat tselevogo pokrytiya pokazyvayet dolyu zvyozdnoy svetimosti, kotoruyu neobkhodimo perekhvatit dlya vybrannoy tseli.',
    },
    {
      type: 'table',
      headers: ['Vybor konstruktsii', 'Glavnoye preimushchestvo', 'Glavnoye ogranicheniye'],
      rows: [
        ['Roy Daisona', 'Postroyka etapami s nezavisimymi orbitami', 'Kontrol dvizheniya i peredacha energii'],
        ['Ekvatorialnoye kol-tso', 'Menshaya nachalnaya ploshchad i prostaya geometriya', 'Ogranichennoye pokrytiye'],
        ['Zhyostkaya obolochka', 'Maksimalnyy perekhvat v prostoy skheme', 'Strukturnaya nestabilnost i ogromnaya massa'],
        ['Oblako statitov', 'Ochen nizkaya poverkhnostnaya plotnost', 'Tochnoye uderzhaniye i teplovyye ogranicheniya'],
      ],
    },
    {
      type: 'title',
      text: 'Massa materiala i realnosti dobychi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Otsenka materiala umnozhayet ploshchad kollektora na predpolagayemuyu poverkhnostnuyu plotnost i koeffitsiyent stabilnosti konstruktsii. Kogda chisla stanovyatsya astronomicheskimi, massa namerenno soobshchayetsya v massakh Merkuriya, potomu chto mnogiye diskussii o roye Daisona predstavlyayut demontazh malykh planet ili asteroidov dlya polucheniya syrya. Dazhe tonkiye kollektory stanovatsya massivnymi, kogda rastyanuty na masshtaby astronomicheskikh yedinits.',
    },
    {
      type: 'paragraph',
      html: 'Ispolzuyte rezultat kak priblizitelnyy orientir, a ne kak proyektnuyu spetsifikatsiyu. Nastoyashchaya inzheneriya megastruktur potrebuyet modeli radiatsionnogo povrezhdeniya, teplovyye tsikly, izbezhanie stolknoveniy, kontrol polozheniya, peredachu energii, proizvodstvennyye pokazateli i dolgosrochnuyu orbitalnuyu evolyutsiyu. Tsennost simulyatora v tom, chto on delayet pervyye ogranicheniya vidimymi nemedlenno.',
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
