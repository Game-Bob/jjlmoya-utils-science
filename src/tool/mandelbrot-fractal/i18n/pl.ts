import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-fraktala-mandelbrota';
const title = 'Kalkulator Fraktala Mandelbrota & Explorer Samopodobienstwa';
const description = 'Badaj zbior Mandelbrota, zblizaj samopodobne granice fraktali i porownuj glebokosc iteracji, kontrast kolorow oraz wspolrzedne plaszczyzny zespolonej.';

const howTo = [
  {
    name: 'Wybierz obszar zbioru Mandelbrota',
    text: 'Zacznij od calego zbioru lub przejdz bezposrednio do obszaru o wysokiej szczegolowosci, takiego jak Dolina Konika Morskiego lub spiralny minibrot.',
  },
  {
    name: 'Zbliz, klikajac obraz',
    text: 'Kliknij dowolny punkt na canvasie, aby wycentrowac plaszczyzne zespolona i powiekszyc fraktal wokol tego wspolrzednego punktu.',
  },
  {
    name: 'Dostosuj glebokosc iteracji i kontrast kolorow',
    text: 'Zwieksz budzet iteracji, aby odslonic drobniejsza strukture granicy, a nastepnie wyreguluj kontrast i palete, by pasma czasu ucieczki byly latwiejsze do odczytania.',
  },
];

const faq = [
  {
    question: 'Co pokazuje kalkulator zbioru Mandelbrota?',
    answer: 'Pokazuje, ktore liczby zespolone c utrzymuja rekurencje z(n+1) = z(n)^2 + c ograniczona, gdy zaczniemy od z = 0. Punkty, ktore nigdy nie uciekaja w ramach wybranego budzetu iteracji, sa kolorowane jako czesci zbioru, podczas gdy punkty zewnetrzne sa kolorowane wedlug tego, jak szybko ich orbita ucieka.',
  },
  {
    question: 'Dlaczego granica zbioru Mandelbrota zawiera tak wiele szczegolow?',
    answer: 'Granica oddziela stabilne i uciekajace orbity, a male zmiany wspolrzednych w poblizu tej granicy moga calkowicie zmienic dlugoterminowe zachowanie. Ta wrazliwosc tworzy zagniezdzone bulwy, spirale, filamenty i miniaturowe kopie, ktore pojawiaja sie na wielu poziomach powiekszenia.',
  },
  {
    question: 'Czy zbior Mandelbrota jest naprawde samopodobny?',
    answer: 'Nie jest idealnie samopodobny w taki sam scisly sposob jak trojkat Sierpinskiego, ale jest bogato quasi-samopodobny. Male kopie calego zbioru pojawiaja sie w calej plaszczyznie, czesto znieksztalcone i polaczone rozbudowanymi strukturami galeziastymi.',
  },
  {
    question: 'Co kontroluje liczba iteracji?',
    answer: 'Liczba iteracji kontroluje, jak dlugo kalkulator testuje kazdy punkt przed podjeciem decyzji, ze prawdopodobnie nalezy do zbioru. Wyzsze wartosci ujawniaja glebsze filamenty i czystsze minibroty, ale wymagaja wiecej obliczen na piksel.',
  },
  {
    question: 'Dlaczego kolory zmieniaja sie poza czarnym obszarem?',
    answer: 'Kolory zewnetrzne sa oparte na czasie ucieczki: punkty, ktore uciekaja szybko, otrzymuja inne kolory niz punkty, ktore pozostaja blisko zbioru przez wiele iteracji. Lagodne kolorowanie redukuje ostre pasma i ulatwia badanie geometrii pobliskich orbit.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator Fraktala Mandelbrota',
    canvasLabel: 'Interaktywny canvas zbioru Mandelbrota',
    presetsLabel: 'Presety obszarow Mandelbrota',
    presetFull: 'Caly Zbior',
    presetSeahorse: 'Dolina Konika Morskiego',
    presetSpiral: 'Spiralny Minibrot',
    centerPoint: 'Srodek',
    magnification: 'Powiekszenie',
    visibleWindow: 'Widoczne okno',
    renderBudget: 'Iteracje',
    iterationsLabel: 'Glebokosc iteracji',
    contrastLabel: 'Kontrast ucieczki',
    colorLabel: 'Pole koloru',
    paletteEmber: 'Pasma zarzenia',
    paletteLagoon: 'Plazma lagunowa',
    paletteInk: 'Spektrum atramentu',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator fraktala Mandelbrota renderuje klasyczny zbior na plaszczyznie zespolonej, zdefiniowany przez iteracje <strong>z(n+1) = z(n)^2 + c</strong>. Jest zaprojektowany do eksploracji, a nie biernego ogladania: kazde klikniecie wycentrowuje plaszczyzne, kazde zblizenie odslania mniejsze matematyczne sasiedztwo, a suwak iteracji pozwala zdecydowac, jak gleboko kalkulator powinien testowac granice przed pokolorowaniem punktu jako stabilnego lub uciekajacego.',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ciemny centralny ksztalt oznacza punkty, ktorych orbity pozostaja ograniczone w ramach obecnego budzetu iteracji. Kolorowe zewnetrze to mapa czasu ucieczki. Punkt pokolorowany blisko zbioru moze przetrwac setki iteracji, zanim jego wielkosc przekroczy promien ucieczki, podczas gdy punkt daleko ucieka prawie natychmiast. Najbardziej interesujaca naukowo geometria zwykle nie znajduje sie wewnatrz wypelnionego ksztaltu, ale wzdluz granicy, gdzie ograniczone i nieograniczone zachowanie sie przeplata.',
    },
    {
      type: 'table',
      headers: ['Sterowanie', 'Co zmienia', 'Kiedy zwiekszyc'],
      rows: [
        ['<strong>Glebokosc iteracji</strong>', 'Ile krokow rekurencji jest testowanych dla kazdego piksela.', 'Uzywaj wyzszych wartosci po zblizeniu do cienkich filamentow lub miniaturowych kopii.'],
        ['<strong>Kontrast ucieczki</strong>', 'Jak silnie gladkie wartosci ucieczki sa rozdzielane na widoczne pasma.', 'Podnies go, gdy obraz wyglada plasko; obniz, gdy kolory sa zbyt ostre.'],
        ['<strong>Paleta</strong>', 'Mapowanie kolorow zastosowane do punktow zewnetrznych.', 'Zmieniaj palety, aby odslonic struktury, ktore moga byc ukryte przez jedno pole koloru.'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jednym z powodow, dla ktorych zbior Mandelbrota jest tak slynny, jest jego quasi-samopodobienstwo. Gdy zblizasz sie do anten, spiral i dolin, wielokrotnie napotykasz male, przypominajace Mandelbrota wyspy, czesto nazywane minibrotami. Te kopie nie sa jedynie dekoracyjne. Ich ulozenie odzwierciedla dynamike odwzorowan kwadratowych, w tym okresowe bulwy, wzory bifurkacji i obszary, w ktorych orbity pozostaja uwiezione przez dlugi czas przed ucieczka.',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W widoku calego zbioru umiarkowany limit iteracji daje rozpoznawalny obraz. Jednak przy glebszym powiekszeniu wiele punktow granicznych potrzebuje znacznie wiecej czasu, aby ujawnic, czy uciekaja. Jesli limit iteracji jest zbyt niski, drobne struktury moga wygladac falszywie jako stale lub rozmazane. Zwiekszenie liczby iteracji poprawia klasyfikacje granicy i pozwala kalkulatorowi rozwiaczywac waskie wici, ramiona spiralne i satelitarne bulwy z wieksza pewnoscia.',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Odczyt wspolrzednych pokazuje aktualny srodek viewportu jako liczbe zespolona c = a + bi. Os pozioma to czesc rzeczywista, a os pionowa to czesc urojona. Klikniecie canvasu wybiera nowa wspolrzedna zespolona, a nastepnie powieksza widoczne okno wokol niej. To czyni narzedzie przydatnym do uczenia sie, jak wizualne obszary fraktala odpowiadaja precyzyjnym lokalizacjom na plaszczyznie zespolonej.',
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
