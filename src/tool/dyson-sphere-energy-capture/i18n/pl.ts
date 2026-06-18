import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-energii-sfery-dysona';
const title = 'Symulator Przechwytywania Energii Sfery Dysona';
const description = 'Oszacuj projekty roju, pierscienia, powloki i chmury statytow Dysona dla roznych gwiazd. Oblicz przechwycona moc, promien orbity, mase materialu i pokrycie potrzebne do osiagniecia docelowej skali Kardaszewa.';

const howTo = [
  {
    name: 'Wybierz typ gwiazdy',
    text: 'Zacznij od czerwonego karÅ‚a, gwiazdy podobnej do SÅ‚onca, gwiazdy typu A, czerwonego olbrzyma lub bÅ‚Ä™kitnego olbrzyma. Symulator uzywa reprezentatywnych wartoÅ›ci jasnosci i masy do oszacowania promienia kolektora i okresu orbitalnego.',
  },
  {
    name: 'Wybierz architekture megastruktury',
    text: 'Porownaj roj Dysona, pierscien rÃ³wnikowy, sztywna powloke lub chmure zwierciadeÅ‚ statytowych. Kazdy projekt ma inna wydajnosc przechwytywania, gestosc materialu i zaÅ‚ozenia dotyczace stabilnosci.',
  },
  {
    name: 'Ustaw pokrycie i temperature robocza',
    text: 'Zwieksz pokrycie, aby przechwycic wiecej mocy gwiazdowej, a nastepnie dostosuj temperature robocza, aby przyblizyc lub oddalic kolektory od gwiazdy.',
  },
  {
    name: 'Dopasuj cel Kardaszewa',
    text: 'Uzyj suwaka celu, aby zobaczyc, jaka czesc gwiazdy musi byc osÅ‚onieta, aby osiagnac cel mocy na skali cywilizacyjnej.',
  },
];

const faq = [
  {
    question: 'Jaka jest roznica miedzy sfera Dysona a rojem Dysona?',
    answer: 'Sztywna sfera Dysona to ciagla powloka wokol gwiazdy, podczas gdy roj Dysona to duza kolekcja niezaleznych kolektorow orbitalnych. Wiekszosc dyskusji inzynieryjnych faworyzuje roje, poniewaz staÅ‚a powloka byÅ‚aby strukturalnie niestabilna i niezwykle materialochÅ‚onna.',
  },
  {
    question: 'Jak symulator wybiera optymalny promien?',
    answer: 'Szacuje odleglosc, w ktorej kolektory promieniujace z obu stron osiagaja wybrana temperature robocza przy wybranej jasnosci gwiazdowej. GorÄ…tsze kolektory moga orbitowac blizej, podczas gdy chlodniejsze kolektory wymagajÄ… wiekszych promieni.',
  },
  {
    question: 'Co tutaj oznacza ocena Kardaszewa?',
    answer: 'Wartosc Kardaszewa jest obliczana z przechwyconej mocy przy uzyciu powszechnej formy logarytmicznej K = (log10(P) - 6) / 10, gdzie P to moc w watach. Wartosc bliska K1 oznacza uzycie energii w skali planetarnej, podczas gdy K2 zbliza sie do peÅ‚nej mocy gwiazdowej.',
  },
  {
    question: 'Czy masa materialu jest realistyczna?',
    answer: 'Jest to edukacyjne oszacowanie pierwszego rzedu oparte na powierzchni kolektora, gestosci powierzchniowej i wspÃ³Å‚czynniku stabilnosci. Prawdziwe projekty wymagaÅ‚yby utrzymania pozycji, transmisji mocy, strat wydobywczych, nadmiarowosci, odprowadzania ciepÅ‚a i infrastruktury produkcyjnej.',
  },
  {
    question: 'Dlaczego jasne gwiazdy wymagajÄ… tak duzych systemÃ³w kolektorÃ³w?',
    answer: 'Gwiazdy o wysokiej jasnosci wypychaja bezpieczny promien termiczny na zewnatrz. To zwieksza powierzchnie potrzebna dla danej frakcji pokrycia, przez co zapotrzebowanie na material moze rosnac szybciej, niz intuicyjnie sugeruje przechwycona moc.',
  },
  {
    question: 'Czy cywilizacja moze osiagnac Typ II Kardaszewa z czesciowym pokryciem?',
    answer: 'Tak, jesli gwiazda macierzysta jest wystarczajÄ…co jasna, a kolektory wydajne. Wokol gwiazdy podobnej do SÅ‚onca, osiagniecie blisko Typu II wymaga przechwycenia duzej frakcji jasnosci sÅ‚onecznej, ale wokol jajniejszych gwiazd ten sam cel mocy moze wymagac nizszej frakcji pokrycia.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Wizualizacja kolektora Dysona',
    starType: 'Typ gwiazdy',
    structureType: 'Struktura',
    coverage: 'Pokrycie kolektora',
    operatingTemp: 'Temperatura robocza',
    kardashevTarget: 'Cel Kardaszewa',
    kardashevRating: 'Obecna ocena',
    capturedPower: 'Przechwycona moc',
    optimalRadius: 'Optymalny promien',
    targetCoverage: 'Pokrycie docelowe',
    materialMass: 'Masa materialu',
    captureMeter: 'Postep w kierunku celu',
    statusReady: 'Dostosuj system, aby oszacowac zapotrzebowanie kolektora.',
    statusUnderbuilt: 'Pokrycie jest ponizej wybranego celu Kardaszewa. Dodaj kolektory albo wybierz jasniejsza gwiazde.',
    statusBalanced: 'Pokrycie i moc gwiazdy sa blisko wybranego celu w skali cywilizacji.',
    statusExtreme: 'Ta konfiguracja przekracza cel. Przechwytuje ogromna moc, ale zapotrzebowanie materialowe szybko rosnie.',
    orbitalPeriod: 'Okres orbitalny',
    collectorArea: 'Powierzchnia kolektora',
    mercuryMasses: '{value} mas Merkurego',
    kilograms: '{value} kg',
    daysUnit: '{value} dni',
    starMDwarf: 'Czerwony karzel',
    starSun: 'Gwiazda typu G jak SÅ‚once',
    starA: 'Gwiazda typu A',
    starRedGiant: 'Czerwony olbrzym',
    starBlueGiant: 'BÅ‚Ä™kitny olbrzym',
    structureSwarm: 'Roj Dysona',
    structureRing: 'Pierscien rÃ³wnikowy',
    structureShell: 'Sztywna powloka',
    structureStatite: 'Chmura zwierciadel statytowych',
  },
  seo: [
    {
      type: 'title',
      text: 'Symulator Przechwytywania Energii Sfery Dysona',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sfera Dysona to nie tylko obraz science fiction gwiazdy w powloce. To rodzina mozliwych koncepcji megastruktur do przechwytywania jasnosci gwiazdowej: roje satelitow, pierscienie rÃ³wnikowe, cienkie chmury zwierciadel oraz znana, ale problematyczna sztywna powloka. Ten symulator zamienia te pomysÅ‚y w liczby, abys mogl porownac, jak typ gwiazdy, temperatura kolektora, pokrycie i projekt konstrukcji zmieniaja budzet energetyczny.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator szacuje przechwycona moc, termiczny promien orbity, powierzchnie kolektora, okres orbitalny, mase materialu i pokrycie potrzebne do wybranego celu w skali Kardaszewa. Jest stworzony dla studentow, budowniczych swiatow, komunikatorow naukowych i wszystkich, ktÃ³rzy prÃ³buja zrozumiec, dlaczego cywilizacje Typu II sa trudne: wyzwaniem jest nie tylko moc, ale takze powierzchnia, cieplo, wydobycie, stabilnosc i logistyka orbitalna.',
    },
    {
      type: 'title',
      text: 'Jak szacowany jest promien Dysona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Optymalny promien jest obliczany z jasnosci gwiazdowej i temperatury roboczej kolektora. Kolektor blisko jasnej gwiazdy otrzymuje intensywny strumien i musi pracowac goraco lub odrzucac ogromne ilosci ciepla. Oddalanie sie zmniejsza naprezenia termiczne, ale wymagana powierzchnia kolektora rosnie z kwadratem odleglosci. Ten kompromis wyjasnia, dlaczego ta sama frakcja pokrycia moze byc skromna wokol slabego czerwonego karla i ogromna wokol bÅ‚Ä™kitnego olbrzyma.',
    },
    {
      type: 'title',
      text: 'Porownanie Roja Dysona, Pierscienia, Powloki i Chmury Statytow',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Roj Dysona:</strong> wiele niezaleznych kolektorow orbitalnych. To najbardziej prawdopodobna architektura na duza skale, poniewaz moze byc budowana stopniowo i nie wymaga sztywnej powloki gwiazdowej.',
        '<strong>Pierscien rÃ³wnikowy:</strong> wezsze pasmo kolektorow z nizsza wydajnoscia pokrycia. Latwiej wyobrazic go sobie jako pierwsza megastrukture, ale nie moze przechwycic pelnej mocy gwiazdowej bez stania sie szerszym rojem.',
        '<strong>Sztywna powloka:</strong> wizualnie ikoniczna, ale mechanicznie niekorzystna. PowÅ‚oka wokol gwiazdy ma powazne problemy ze stabilnoscia i materialem, dlatego symulator przypisuje jej wysoka mase i niska stabilnosc.',
        '<strong>Chmura zwierciadel statytowych:</strong> ultralekkie reflektory utrzymywane czesciowo przez cisnienie promieniowania. Zmniejsza zapotrzebowanie na material, ale ma nizsza tolerancje termiczna i wymagajace wymagania kontrolne.',
      ],
    },
    {
      type: 'title',
      text: 'Pokrycie potrzebne do skali Kardaszewa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skala Kardaszewa wyraza zuzycie energii cywilizacji w sposob logarytmiczny. W tym narzedziu przechwycone waty sa przeliczane na ocene K za pomoca K = (log10(P) - 6) / 10. Czesciowy roj Dysona wokol SÅ‚onca moze przekroczyc obecne zuzycie energii przez ludzkosc o wiele rzedow wielkosci na dÅ‚ugo przed osiagnieciem peÅ‚nego statusu Typu II. Wynik pokrycia docelowego pokazuje frakcje jasnosci gwiazdowej, ktÃ³ra musi byc przechwycona dla wybranego celu.',
    },
    {
      type: 'table',
      headers: ['WybÃ³r projektu', 'Glowna zaleta', 'Glowne ograniczenie'],
      rows: [
        ['Roj Dysona', 'Budowa etapowa z niezaleznymi orbitami', 'Kontrola ruchu i transmisja mocy'],
        ['Pierscien rÃ³wnikowy', 'Nizszy poczatkowy obszar i prostsza geometria', 'Ograniczone pokrycie'],
        ['Sztywna powloka', 'Maksymalne przechwycenie w prostym schemacie', 'Niestabilnosc strukturalna i ogromna masa'],
        ['Chmura statytow', 'Bardzo niska gestosc powierzchniowa', 'Precyzyjne utrzymanie pozycji i limity cieplne'],
      ],
    },
    {
      type: 'title',
      text: 'Masa materialu i realia wydobycia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Oszacowanie materialu mnozy powierzchnie kolektora przez zaloÅ¼ona gestosc powierzchniowa i wspolczynnik stabilnosci konstrukcji. Celowo podaje mase w masach Merkurego, gdy liczba staje sie astronomiczna, poniewaz wiele dyskusji o rojach Dysona wyobraza sobie demontaz maÅ‚ych planet lub asteroid w celu pozyskania surowcow. Nawet cienkie kolektory staja sie masywne, gdy sa rozlozone na skalach jednostek astronomicznych.',
    },
    {
      type: 'paragraph',
      html: 'Uzywaj wyniku jako wskazowki rzedu wielkosci, a nie jako planu. Prawdziwa inzynieria megastruktur wymagaÅ‚aby modeli uszkodzen radiacyjnych, cykli termicznych, unikania kolizji, kontroli pozycji, transmisji mocy, wydajnosci produkcyjnej i dÅ‚ugoterminowej ewolucji orbitalnej. Wartoscia symulatora jest to, ze natychmiast uwidacznia pierwsze ograniczenia.',
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
