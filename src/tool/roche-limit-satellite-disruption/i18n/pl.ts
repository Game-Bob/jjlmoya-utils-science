const slug = 'granica-roche-kalkulator-zaklocenia-satelity';
const title = 'Kalkulator granicy Roche i symulator zaklocenia satelity';
const description = 'Oblicz granice Roche dla planet i ksiezycow, porownaj odleglosci rozpadu dla cial plynnch i sztywnych oraz zobacz, jak sily plywowe zamieniaja satelite w uklad pierscieni.';

const howTo = [
  {
    name: 'Wybierz cialo glowne',
    text: 'Wybierz planete, ktorej grawitacja rozciaga satelite. Kalkulator laduje jej promien, gestosc i mase do szacowania granicy Roche oraz okresu orbitalnego.',
  },
  {
    name: 'Wybierz typ satelity',
    text: 'Wybierz lodowy ksiezyc, skalisty ksiezyc, zbiorowisko gruzu lub cialo bogate w zelazo. Gestosc i spojnosc wewnetrzna zmieniaja granice rozpadu.',
  },
  {
    name: 'Przesun suwak orbity',
    text: 'Przeciagnij odleglosc orbitalna do wewnatrz lub na zewnatrz. Wizualizacja pokazuje, czy satelita znajduje sie poza granica Roche, na jej krawedzi, ulega fragmentacji lub juz staje sie pierscieniem.',
  },
  {
    name: 'Porownaj granice',
    text: 'Uzyj odczytow, aby porownac klasyczna granice Roche dla cial plynnch z nizszym oszacowaniem dla ciala sztywnego oraz granica operacyjna skorygowana o spojnosc.',
  },
];

const faq = [
  {
    question: 'Czym jest granica Roche?',
    answer: 'Granica Roche to odleglosc od masywnego ciala glownego, przy ktorej sily plywowe dzialajace na mniejsze cialo na orbicie staja sie wystarczajaco silne, aby pokonac jego grawitacje wlasna. Wewnatrz tej granicy slaby lub plynny satelita moze zostac rozerwany.',
  },
  {
    question: 'Dlaczego istnieja granice Roche dla cial plynnch i sztywnych?',
    answer: 'Satelita plynny latwo sie odksztalca, wiec sily plywowe moga zwiekszyc jego wydluzenie i rozerwac go dalej od planety. Satelita sztywny moze przeciwstawiac sie odksztalceniom dzieki wytrzymalosci materialu, dlatego prostsze oszacowanie dla ciala sztywnego umieszcza rozpad blizej ciala glownego.',
  },
  {
    question: 'Czy kazdy ksiezyc wewnatrz granicy Roche natychmiast staje sie pierscieniem?',
    answer: 'Nie. Rzeczywisty rozpad zalezy od rotacji, skladu, pekniec, porowatosci, ogrzewania, uderzen i wytrzymalosci materialu. To narzedzie pokazuje klasyczna granice grawitacyjna i uzywa pasa przejsciowego do okreslenia ryzyka, a nie natychmiastowego przelaczenia.',
  },
  {
    question: 'Dlaczego pierscienie Saturna znajduja sie w poblizu granicy Roche?',
    answer: 'Pierscienie Saturna zajmuja region, w ktorym material lodowy moze utrzymywac sie jako czastki zamiast laczyc sie w jeden duzy ksiezyc. Granica Roche pomaga wyjasnic, dlaczego czastki pierscieni pozostaja rozproszone blisko planety.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Cialo glowne',
    satelliteType: 'Typ satelity',
    orbitDistance: 'Odleglosc orbitalna',
    rocheBoundary: 'Granica Roche',
    fluidLimit: 'Granica dla ciala plynnego',
    rigidLimit: 'Granica dla ciala sztywnego',
    activeLimit: 'Granica aktywna',
    safetyRatio: 'Wspolczynnik bezpieczenstwa',
    orbitalPeriod: 'Okres orbitalny',
    tidalStress: 'Naprezenie plywowe',
    ringFormation: 'Tworzenie sie pierscienia',
    stable: 'Stabilna orbita',
    grazing: 'Oddzialywanie plywowe',
    fragmenting: 'Fragmentacja',
    ring: 'Uklad pierscieni',
    km: 'km',
    hours: 'h',
    density: 'Gestosc',
    cohesion: 'Spojnosc',
    planetRadius: 'Promien planety',
    reset: 'Resetuj',
    closePass: 'Bliski przelot',
    moonTrack: 'Tor ksiezyca',
    debrisTrack: 'Tor szczatkow',
  },
  seo: [
    {
      type: 'title',
      text: 'Wzor granicy Roche, znaczenie i jak uzywac tego kalkulatora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Granica Roche</strong> to minimalna odleglosc orbitalna, przy ktorej satelita utrzymywany glownie przez wlasna grawitacje moze okrazyc wieksze cialo bez rozerwania przez sily plywowe. Ludzie zwykle szukaja tego pojecia, aby sprawdzic, czy ksiezyc, kometa, asteroida lub sztuczny obiekt przetrwa bliskie spotkanie z planeta, czy tez material rozproszy sie w pierscien. Ten kalkulator odpowiada na to pytanie, laczac promien planety, gestosc planety, gestosc satelity i przyblizona wytrzymalosc wewnetrzna satelity.',
    },
    {
      type: 'paragraph',
      html: 'Kluczowa idea jest prosta: grawitacja nie dziala rownomiernie na calego satelite. Strona blizsza jest przyciagana silniej niz strona dalsza, co tworzy sile rozciagajaca. Jesli to rozciaganie plywowe jest silniejsze niz grawitacja wlasna i spojnosc materialu satelity, cialo moze pekac, tracic mase i ostatecznie ulec fragmentacji. Granica Roche nie jest wiec tylko odlegloscia; to porownanie zewnetrznego naprezenia plywowego z wewnetrznym wiazaniem.',
    },
    {
      type: 'title',
      text: 'Rownania granicy Roche uzywane przez kalkulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dla plynnnego lub bardzo slabego satelity klasyczne przyblizenie to <strong>d = 2,44 R (rho_M / rho_m)^(1/3)</strong>. Dla sztywnego satelity popularne przyblizenie to <strong>d = 1,26 R (rho_M / rho_m)^(1/3)</strong>. W tych rownaniach <strong>d</strong> to granica Roche mierzona od srodka planety, <strong>R</strong> to promien ciala glownego, <strong>rho_M</strong> to gestosc ciala glownego, a <strong>rho_m</strong> to gestosc satelity.',
    },
    {
      type: 'list',
      items: [
        '<strong>Promien ciala glownego:</strong> Wieksze planety tworza wieksza odleglosc granicy Roche nawet przy podobnej gestosci.',
        '<strong>Gestosc ciala glownego:</strong> Gestsze cialo glowne zwieksza sile plywowa przy danej wielokrotnosci swojego promienia.',
        '<strong>Gestosc satelity:</strong> Gestszy satelita ma silniejsza grawitacje wlasna, wiec moze przetrwac blizej planety.',
        '<strong>Wytrzymalosc satelity:</strong> Plynny, lodowy, spekany lub gruzowy obiekt rozpada sie dalej niz zbity sztywny obiekt.',
      ],
    },
    {
      type: 'table',
      headers: ['Model', 'Postac wzoru', 'Zastosowanie', 'Co oznacza wynik'],
      rows: [
        ['Granica Roche dla ciala plynnnego', '2,44 R (rho_M / rho_m)^(1/3)', 'Lodowe ksiezyce, ciala stopione, zbiorowiska gruzu, slabe komety', 'Konserwatywna odleglosc rozpadu dla obiektow latwo ulegajacych odksztalceniom.'],
        ['Granica Roche dla ciala sztywnego', '1,26 R (rho_M / rho_m)^(1/3)', 'Geste skaliste lub metaliczne ciala z wytrzymaloscia materialu', 'Blizsze, nizsze oszacowanie, gdzie wytrzymalosc materialu opoznia rozpad.'],
        ['Wskazanie z korekta o spojnosc', 'Miedzy przypadkiem plynnym a sztywnym', 'Szybkie porownanie scenariuszy w tym symulatorze', 'Praktyczna linia ryzyka dla wybranego typu satelity, a nie uniwersalny przelacznik praw natury.'],
      ],
    },
    {
      type: 'title',
      text: 'Przyklad: Dlaczego lodowy ksiezyc w poblizu Saturna jest wrazliwy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturn jest znacznie mniej gesty niz Ziemia, ale jest ogromny. Lodowy satelita o malej gestosci ma slaba grawitacje wlasna w porownaniu ze zbi tym skalistym ksiezycem, wiec stosunek gestosci nadal umieszcza granice Roche dla ciala plynnnego daleko od szczytow chmur Saturna. To jeden z powodow, dla ktorych fizyka granicy Roche jest kluczowa dla zrozumienia, dlaczego Saturn moze utrzymywac szeroki, jasny uklad pierscieni zlozony glownie z lodowych czastek zamiast jednego duzego, ponownie zlaczonego ksiezyca.',
    },
    {
      type: 'paragraph',
      html: 'Jesli wybierzesz Saturna i lodowy ksiezyc w kalkulatorze, a nastepnie przesuniesz orbite do wewnatrz, obserwuj wspolczynnik bezpieczenstwa. Powyzej <strong>1,00x</strong> wybrana orbita znajduje sie poza aktywna granica Roche. W poblizu <strong>1,00x</strong> ksiezyc znajduje sie w strefie oddzialywania plywowego, gdzie utrata masy lub pekanie staje sie prawdopodobne. Ponizej <strong>1,00x</strong> wizualizacja przesuwa sie w kierunku lukow fragmentow i tworzenia pierscienia, poniewaz wybrany model przewiduje rozpad.',
    },
    {
      type: 'title',
      text: 'Jak interpretowac wspolczynnik bezpieczenstwa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Wspolczynnik bezpieczenstwa</strong> to bieza ca odleglosc orbitalna podzielona przez wybrana granice Roche. Wartosc <strong>1,25x</strong> oznacza, ze orbita jest o 25% dalej niz aktywna granica rozpadu. Wartosc <strong>1,00x</strong> oznacza, ze orbita znajduje sie dokladnie na wybranej granicy Roche. Wartosc <strong>0,80x</strong> oznacza, ze satelita znajduje sie gleboko wewnatrz wybranej strefy rozpadu.',
    },
    {
      type: 'table',
      headers: ['Wspolczynnik bezpieczenstwa', 'Wyswietlany stan', 'Interpretacja praktyczna'],
      rows: [
        ['Powyzej 1,12x', 'Stabilna orbita', 'Satelita znajduje sie poza wybrana granica Roche dla tego uproszczonego modelu.'],
        ['1,00x do 1,12x', 'Oddzialywanie plywowe', 'Obiekt jest wystarczajaco blisko, aby odksztalcenia, pekanie lub utrata powierzchni mialy znaczenie.'],
        ['0,78x do 1,00x', 'Fragmentacja', 'Grawitacja wlasna nie jest juz wystarczajaca w wybranym modelu; strumienie szczatkow sa prawdopodobne.'],
        ['Ponizej 0,78x', 'Uklad pierscieni', 'Pierwotne cialo jest przedstawione jako rozproszony material podazajacy po sasiednich orbitach.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Odczyt okresu orbitalnego jest dolaczony, poniewaz bliskie przejscia nie dotycza tylko odleglosci. Material wewnatrz strefy rozpadu podaza po szybkich, nieco roznych orbitach. Gdy fragmenty sie rozdziela, scinanie orbitalne rozrzuca je wokol planety, podczas gdy kolizje splaszczaja i sortuja szczatki w dysk przypominajacy pierscien.',
    },
    {
      type: 'title',
      text: 'Dlaczego granica Roche moze tworzyc pierscienie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdy satelita rozpada sie poza granica Roche, fragmenty moga ostatecznie zderzyc sie i ponownie polaczyc w mniejszy ksiezyc. Wewnatrz granicy Roche pobliskie fragmenty nie moga latwo polaczyc sie w jedno stabilne cialo zwiazane grawitacyjnie, poniewaz sily plywowe ciagle odciagaja material od siebie. Rezultatem moze byc dlugowieczny pierscien, zwlaszcza gdy szczatki sa lodowe, ulegaja kolizjom i sa ciagle mieszane przez male ksiezyce lub rezonanse.',
    },
    {
      type: 'paragraph',
      html: 'Tworzenie sie pierscienia jest stopniowe. Rozpadajacy sie ksiezyc najpierw sie wydluza, a nastepnie traci czastki i wieksze fragmenty. Te fragmenty zajmuja nieco rozne promienie orbitalne, wiec dryfuja przed siebie lub za siebie. Z czasem kolizje tlumia ruch pionowy, a material osiada w cienkim dysku. Dlatego symulator pokazuje przejscie od pojedynczego ksiezyca do lukow, a nastepnie do pelniejszego pierscienia, zamiast traktowac rozpad jako natychmiastowa eksplozje.',
    },
    {
      type: 'title',
      text: 'Wazne ograniczenia tego kalkulatora granicy Roche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator jest przeznaczony do szybkiego wyrobienia intuicji naukowej, a nie do precyzyjnego projektowania misji. Rzeczywiste satelity podlegaja wplywom rotacji, mimo srodu orbity, wewnetrznego uwarstwienia, wytrzymalosci na rozciaganie, porowatosci, temperatury, ogrzewania plywowego, wczesniejszych pekniec, uderzen i rezonansow z innymi ksiezycami. Wirujace zbiorowisko gruzu na ekscentrycznej orbicie moze ulegac rozpadowi inaczej niz zimny monolit na orbicie kolowej, nawet jesli ich srednie gestosci sa podobne.',
    },
    {
      type: 'list',
      items: [
        '<strong>Uzywaj granicy dla ciala plynnnego</strong>, gdy obiekt jest slaby, lodowy, stopiony, silnie spekany lub zlozony z luznego agregatu.',
        '<strong>Uzywaj granicy dla ciala sztywnego</strong> jako dolnego oszacowania dla zbi tych cial ze znaczaca wytrzymaloscia wewnetrzna.',
        '<strong>Odczytuj granice aktywna</strong> jako wybrana granice robocza symulatora dla wybranego typu satelity.',
        '<strong>Nie traktuj wyniku</strong> jako dokladnego przewidywania dla nazwanego rzeczywistego ksiezyca bez szczegolowego modelu geofizycznego.',
      ],
    },
    {
      type: 'title',
      text: 'Czeste pytania, na ktore pomaga odpowiedziec to narzedzie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uzyj tego narzedzia, gdy chcesz oszacowac pytania takie jak: Jak blisko Ziemi moze znalezc sie ksiezyc, zanim sie rozpadnie? Dlaczego pierscienie Saturna znajduja sie w obszarze granicy Roche? Czy skalisty ksiezyc przetrwa blizej niz lodowy? Jak gestosc zmienia granice Roche? Jaka jest roznica miedzy granica Roche dla ciala plynnnego a sztywnego? Elementy sterowania sa zbudowane wokol tych porownan, wiec zmiana jednej zmiennej natychmiast pokazuje, jak zmienia sie odleglosc rozpadu, wspolczynnik bezpieczenstwa i wizualizacja tworzenia pierscienia.',
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
