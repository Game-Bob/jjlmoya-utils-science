import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-fraktala-mandelbrota';
const title = 'Kalkulator fraktala Mandelbrota i eksplorator samopodobieństwa';
const description = 'Badaj zbiór Mandelbrota, przybliżaj samopodobne granice fraktali i porównuj głębokość iteracji, kontrast kolorów oraz współrzędne płaszczyzny zespolonej.';

const howTo = [
  {
    name: 'Wybierz obszar zbioru Mandelbrota',
    text: 'Zacznij od całego zbioru lub przejdź bezpośrednio do obszaru o wysokiej szczegółowości, takiego jak Dolina Konika Morskiego lub spiralny minibrot.',
  },
  {
    name: 'Przybliż, klikając obraz',
    text: 'Kliknij dowolny punkt na kanwie, aby wycentrować płaszczyznę zespoloną i powiększyć fraktal wokół tej współrzędnej.',
  },
  {
    name: 'Dostosuj głębokość iteracji i kontrast kolorów',
    text: 'Zwiększ budżet iteracji, aby odsłonić drobniejszą strukturę granicy, a następnie wyreguluj kontrast i paletę, by pasma czasu ucieczki były łatwiejsze do odczytania.',
  },
];

const faq = [
  {
    question: 'Co pokazuje kalkulator zbioru Mandelbrota?',
    answer: 'Pokazuje, które liczby zespolone c utrzymują rekurencję z(n+1) = z(n)^2 + c ograniczoną, gdy zaczniemy od z = 0. Punkty, które nigdy nie uciekają w ramach wybranego budżetu iteracji, są kolorowane jako części zbioru, podczas gdy punkty zewnętrzne są kolorowane według tego, jak szybko ich orbita ucieka.',
  },
  {
    question: 'Dlaczego granica zbioru Mandelbrota zawiera tak wiele szczegółów?',
    answer: 'Granica oddziela stabilne i uciekające orbity, a małe zmiany współrzędnych w pobliżu tej granicy mogą całkowicie zmienić długoterminowe zachowanie. Ta wrażliwość tworzy zagnieżdżone bulwy, spirale, filamenty i miniaturowe kopie, które pojawiają się na wielu poziomach powiększenia.',
  },
  {
    question: 'Czy zbiór Mandelbrota jest naprawdę samopodobny?',
    answer: 'Nie jest idealnie samopodobny w taki sam ścisły sposób jak trójkąt Sierpińskiego, ale jest bogato quasi-samopodobny. Małe kopie całego zbioru pojawiają się w całej płaszczyźnie, często zniekształcone i połączone rozbudowanymi strukturami gałęzistymi.',
  },
  {
    question: 'Co kontroluje liczba iteracji?',
    answer: 'Liczba iteracji kontroluje, jak długo kalkulator testuje każdy punkt przed podjęciem decyzji, że prawdopodobnie należy do zbioru. Wyższe wartości ujawniają głębsze filamenty i czystsze minibroty, ale wymagają więcej obliczeń na piksel.',
  },
  {
    question: 'Dlaczego kolory zmieniają się poza czarnym obszarem?',
    answer: 'Kolory zewnętrzne są oparte na czasie ucieczki: punkty, które uciekają szybko, otrzymują inne kolory niż punkty, które pozostają blisko zbioru przez wiele iteracji. Łagodne kolorowanie redukuje ostre pasma i ułatwia badanie geometrii pobliskich orbit.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Kalkulator fraktala Mandelbrota',
    canvasLabel: 'Interaktywna kanwa zbioru Mandelbrota',
    presetsLabel: 'Presety obszarów Mandelbrota',
    presetFull: 'Cały Zbiór',
    presetSeahorse: 'Dolina Konika Morskiego',
    presetSpiral: 'Spiralny Minibrot',
    centerPoint: 'Środek',
    magnification: 'Powiększenie',
    visibleWindow: 'Widoczne okno',
    renderBudget: 'Iteracje',
    iterationsLabel: 'Głębokość iteracji',
    contrastLabel: 'Kontrast ucieczki',
    colorLabel: 'Pole koloru',
    paletteEmber: 'Pasma żarzenia',
    paletteLagoon: 'Plazma lagunowa',
    paletteInk: 'Spektrum atramentu',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Zbioru Mandelbrota dla Fraktali, Czasu Ucieczki i Samopodobieństwa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator fraktala Mandelbrota generuje klasyczny zbiór na płaszczyźnie zespolonej zdefiniowany iteracją <strong>z(n+1) = z(n)^2 + c</strong>. Jest zaprojektowany do eksploracji.',
    },
    {
      type: 'title',
      text: 'Jak interpretować obraz Mandelbrota',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ciemny centralny kształt oznacza punkty, których orbity pozostają ograniczone. Kolorowy obszar zewnętrzny to mapa czasu ucieczki.',
    },
    {
      type: 'table',
      headers: ['Kontrola', 'Co zmienia', 'Kiedy zwiększać'],
      rows: [
        ['<strong>Głębokość iteracji</strong>', 'Ile kroków rekurstwnych testuje się dla każdego piksela.', 'Zwiększ po przybliżeniu wąskich włókien.'],
        ['<strong>Kontrast ucieczki</strong>', 'Jak mocno gładkie wartości ucieczki dzielą się na widoczne pasma.', 'Zwiększ, jeśli obraz jest płaski.'],
        ['<strong>Paleta</strong>', 'Mapowanie kolorów dla punktów zewnętrznych.', 'Zmień paletę, aby odsłonić ukryte struktury.'],
      ],
    },
    {
      type: 'title',
      text: 'Samopodobieństwo i Minibroty',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jednym z powodów sławy zbioru Mandelbrota jest jego kwazi-samopodobieństwo. Przybliżając spirale, wielokrotnie napotyka się małe kopie całego zbioru, zwane minibrotami.',
    },
    {
      type: 'title',
      text: 'Dlaczego wysoka liczba iteracji ma znaczenie przy dużym powiększeniu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przy dużym powiększeniu punkty brzegowe wymagają znacznie więcej kroków, aby sprawdzić, czy uciekają. Za mała liczba iteracji zamazuje detale.',
    },
    {
      type: 'title',
      text: 'Znaczenie matematyczne współrzędnych zespolonych',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Odczyt współrzędnych pokazuje środek widoku jako liczbę zespoloną c = a + bi. Oś pozioma to część rzeczywista, a pionowa to część urojona.',
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