import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-energii-sfery-dysona';
const title = 'Symulator Przechwytywania Energii Sfery Dysona';
const description = 'Oszacuj projekty roju, pierścienia, powłoki i chmury zwierciadeł statytowych Dysona dla różnych gwiazd. Oblicz przechwyconą moc, promień orbity, masę materiału i pokrycie potrzebne do osiągnięcia docelowej skali Kardaszewa.';

const howTo = [
  {
    name: 'Wybierz typ gwiazdy',
    text: 'Zacznij od czerwonego karła, gwiazdy podobnej do Słońca, gwiazdy typu A, czerwonego olbrzyma lub błękitnego olbrzyma. Symulator używa reprezentatywnych wartości jasności i masy do oszacowania promienia kolektora i okresu orbitalnego.',
  },
  {
    name: 'Wybierz architekturę megastruktury',
    text: 'Porównaj rój Dysona, pierścień równikowy, sztywną powłokę lub chmurę zwierciadeł statytowych. Każdy projekt ma inną wydajność przechwytywania, gęstość materiału i założenia dotyczące stabilności.',
  },
  {
    name: 'Ustaw pokrycie i temperaturę roboczą',
    text: 'Zwiększ pokrycie, aby przechwycić więcej mocy gwiazdowej, a następnie dostosuj temperaturę roboczą, aby przybliżyć lub oddalić kolektory od gwiazdy.',
  },
  {
    name: 'Dopasuj cel Kardaszewa',
    text: 'Użyj suwaka celu, aby zobaczyć, jaka część gwiazdy musi być osłonięta, aby osiągnąć cel mocy na skali cywilizacyjnej.',
  },
];

const faq = [
  {
    question: 'Jaka jest różnica między sferą Dysona a rojem Dysona?',
    answer: 'Sztywna sfera Dysona to ciągła powłoka wokół gwiazdy, podczas gdy rój Dysona to duża kolekcja niezależnych kolektorów orbitalnych. Większość dyskusji inżynieryjnych faworyzuje roje, ponieważ stała powłoka byłaby strukturalnie niestabilna i niezwykle materiałochłonna.',
  },
  {
    question: 'Jak symulator wybiera optymalny promień?',
    answer: 'Szacuje odległość, w której kolektory promieniujące z obu stron osiągają wybraną temperaturę roboczą przy wybranej jasności gwiazdowej. Gorętsze kolektory mogą orbitować bliżej, podczas gdy chłodniejsze kolektory wymagają większych promieni.',
  },
  {
    question: 'Co tutaj oznacza ocena Kardaszewa?',
    answer: 'Wartość Kardaszewa jest obliczana z przechwyconej mocy przy użyciu powszechnej formy logarytmicznej K = (log10(P) - 6) / 10, gdzie P to moc w watach. Wartość bliska K1 oznacza użycie energii w skali planetarnej, podczas gdy K2 zbliża się do pełnej mocy gwiazdowej.',
  },
  {
    question: 'Czy masa materiału jest realistyczna?',
    answer: 'Jest to edukacyjne oszacowanie pierwszego rzędu oparte na powierzchni kolektora, gęstości powierzchniowej i współczynniku stabilności. Prawdziwe projekty wymagałyby utrzymania pozycji, transmisji mocy, strat wydobywczych, nadmiarowości, odprowadzania ciepła i infrastruktury produkcyjnej.',
  },
  {
    question: 'Dlaczego jasne gwiazdy wymagają tak dużych systemów kolektorów?',
    answer: 'Gwiazdy o wysokiej jasności wypychają bezpieczny promień termiczny na zewnątrz. To zwiększa powierzchnię potrzebną dla danej frakcji pokrycia, przez co zapotrzebowanie na materiał może rosnąć szybciej, niż intuicyjnie sugeruje przechwycona moc.',
  },
  {
    question: 'Czy cywilizacja może osiągnąć Typ II Kardaszewa z częściowym pokryciem?',
    answer: 'Tak, jeśli gwiazda macierzysta jest wystarczająco jasna, a kolektory wydajne. Wokół gwiazdy podobnej do Słońca, osiągnięcie blisko Typu II wymaga przechwycenia dużej frakcji jasności słonecznej, ale wokół jaśniejszych gwiazd ten sam cel mocy może wymagać niższej frakcji pokrycia.',
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
    optimalRadius: 'Optymalny promień',
    targetCoverage: 'Pokrycie docelowe',
    materialMass: 'Masa materiału',
    captureMeter: 'Postęp w kierunku celu',
    statusReady: 'Dostosuj system, aby oszacować zapotrzebowanie kolektora.',
    statusUnderbuilt: 'Pokrycie jest poniżej wybranego celu Kardaszewa. Dodaj kolektory albo wybierz jaśniejszą gwiazdę.',
    statusBalanced: 'Pokrycie i moc gwiazdy są blisko wybranego celu w skali cywilizacji.',
    statusExtreme: 'Ta konfiguracja przekracza cel. Przechwytuje ogromną moc, ale zapotrzebowanie materiałowe szybko rośnie.',
    orbitalPeriod: 'Okres orbitalny',
    collectorArea: 'Powierzchnia kolektora',
    mercuryMasses: '{value} mas Merkurego',
    kilograms: '{value} kg',
    daysUnit: '{value} dni',
    starMDwarf: 'Czerwony karzeł',
    starSun: 'Gwiazda typu G jak Słońce',
    starA: 'Gwiazda typu A',
    starRedGiant: 'Czerwony olbrzym',
    starBlueGiant: 'Błękitny olbrzym',
    structureSwarm: 'Rój Dysona',
    structureRing: 'Pierścień równikowy',
    structureShell: 'Sztywna powłoka',
    structureStatite: 'Chmura zwierciadeł statytowych',
  },
  seo: [
    {
      type: 'title',
      text: 'Symulator Przechwytywania Energii Sfery Dysona',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sfera Dysona to nie tylko koncepcja z literatury science-fiction. To cała rodzina pomysłów inżynieryjnych służących przechwytywaniu promieniowania gwiazdy: od rojów satelitów po chmury zwierciadeł statitowych.',
    },
    {
      type: 'paragraph',
      html: 'Aplikacja oblicza przechwyconą moc, optymalny promień termiczny, powierzchnię kolektorów, okres orbitalny i masę surowcową przeliczoną na masy Merkurego.',
    },
    {
      type: 'title',
      text: 'Wyznaczanie optymalnego promienia Dysona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Optymalny promień zależy bezpośrednio od jasności gwiazdy oraz maksymalnej dopuszczalnej temperatury roboczej kolektorów.',
    },
    {
      type: 'title',
      text: 'Porównanie koncepcji megastruktur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rój Dysona:</strong> Ogromna liczba niezależnych kolektorów. Najbardziej realistyczna architektura pozwalająca na stopniową rozbudowę.',
        '<strong>Pierścień równikowy:</strong> Węższy pas kolektorów o prostszej geometrii.',
        '<strong>Sztywna powłoka:</strong> Ciągła struktura oferująca maksymalne przechwytywanie, ale skrajnie niestabilna mechanicznie.',
        '<strong>Chmura statitów:</strong> Bardzo lekkie zwierciadła utrzymywane ciśnieniem promieniowania.',
      ],
    },
    {
      type: 'title',
      text: 'Pokrycie a Skala Kardaszewa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skala Kardaszewa określa poziom rozwoju cywilizacji na podstawie zużycia energii. Przechwycenie ułamka energii Słońca wielokrotnie przewyższa obecne zapotrzebowanie ludzkości.',
    },
    {
      type: 'table',
      headers: ['Konstrukcja', 'Główna zaleta', 'Główne wyzwanie'],
      rows: [
        ['Rój Dysona', 'Możliwość budowy etapami', 'Kierowanie ruchem i przesył energii'],
        ['Pierścień równikowy', 'Mniejsza powierzchnia początkowa', 'Ograniczone pokrycie'],
        ['Sztywna powłoka', 'Maksymalne przechwytywanie', 'Niestabilność i ogromna masa'],
        ['Chmura statitów', 'Bardzo mała gęstość powierzchniowa', 'Precyzyjna kontrola położenia'],
      ],
    },
    {
      type: 'title',
      text: 'Zapotrzebowanie na surowce i analiza realności',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Masa materiału wyrażana jest w masach Merkurego. Wiele projektów teoretycznych zakłada rozbiórkę małych planet w celu pozyskania surowców.',
    },
    {
      type: 'paragraph',
      html: 'Używaj tych wyników jako jakościowego przewodnika po fizycznych granicach inżynierii kosmicznej.',
    },
    { type: 'paragraph', html: 'To wyjaśnienie porządkuje założenia modelu i pokazuje, jak parametry zmieniają wynik. Zmieniaj jedną wartość naraz i porównuj kilka uruchomień, aby każdą różnicę można było połączyć z rozpoznawalną przyczyną. Wizualizacja jest przybliżeniem dydaktycznym: rzeczywisty system ma więcej zmiennych, niepewności pomiarowych i warunków brzegowych. Używaj wyniku do poznawania skal, formułowania pytań i porównywania scenariuszy. Przed decyzją praktyczną lub analizą naukową sprawdź dane pierwotne, jednostki i specjalistyczne źródła. Zapisz ustawienia, aby powtórzyć obliczenie i omówić ograniczenia modelu.' },
    { type: 'paragraph', html: 'Powtórz obliczenie z tymi samymi ustawieniami, a następnie zmieniaj jedną wartość naraz. Zapisz wartości początkowe, reguły obliczeń i użyte ograniczenia, aby odróżnić prawidłowość modelu od zmiany numerycznej lub przypadku. Wynik ma charakter dydaktyczny i należy go czytać razem z założeniami oraz ograniczeniami. Rzeczywisty pomiar lub projekt wymaga dodatkowych danych i kontroli specjalisty.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
