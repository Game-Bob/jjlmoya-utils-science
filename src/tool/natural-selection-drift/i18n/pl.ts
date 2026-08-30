import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'symulator-doboru-naturalnego-dryfu-genetycznego';
const title = 'Symulator doboru naturalnego i dryfu genetycznego';
const description =
  'Zobacz w czasie rzeczywistym, jak presja selekcyjna, mutacje, dryf i rozmnażanie zmieniają częstość alleli.';

const howTo = [
  { name: 'Ustaw populację', text: 'Wybierz małą lub dużą populację, aby zobaczyć wpływ wielkości próbki.' },
  { name: 'Dostosuj dobór i dryf', text: 'Zwiększ presję selekcyjną lub dryf, aby zobaczyć inne ścieżki ewolucyjne.' },
  { name: 'Obserwuj pokolenia', text: 'Uruchom symulację i porównaj cechę dominującą, dostosowanie i różnorodność w czasie.' },
  { name: 'Interpretuj wyniki', text: 'Użyj wskaźników, aby zrozumieć, kiedy wygrywa adaptacja, a kiedy dominuje przypadek.' },
];

const faq = [
  { question: 'Jaka jest różnica między doborem naturalnym a dryfem genetycznym?', answer: 'Dobór naturalny nie jest losowy. Korzystne cechy stają się częstsze. Dryf genetyczny to losowa zmiana częstości alleli.' },
  { question: 'Dlaczego małe populacje zmieniają się szybciej?', answer: 'Przy niewielkiej liczbie osobników przypadek ma większy wpływ na następne pokolenie.' },
  { question: 'Czy dryf może przeważyć nad doborem?', answer: 'Tak. Korzystna cecha może zniknąć przez przypadek, jeśli dryf jest wystarczająco silny.' },
  { question: 'Co oznacza dostosowanie (fitness) w tym symulatorze?', answer: 'Dostosowanie to uproszczony wskaźnik pokazujący, jak dobrze populacja jest przystosowana do środowiska.' },
  { question: 'Dlaczego wielkość populacji jest tak ważna?', answer: 'Określa, jak silnie losowe wahania wpływają na częstość alleli.' },
  { question: 'Kiedy należy używać tego symulatora?', answer: 'Gdy chcesz zrozumieć intuicję stojącą za ewolucją, zwłaszcza różnicę między doborem a dryfem.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Wielkość populacji',
    generations: 'Pokolenia',
    mutationRate: 'Tempo mutacji',
    selectionPressure: 'Presja selekcyjna',
    driftIntensity: 'Intensywność dryfu',
    alleleCount: 'Początkowe allele',
    innovationRate: 'Tempo innowacji',
    run: 'Uruchom symulację',
    dominantTrait: 'Dominująca cecha',
    fitness: 'Fitness końcowy',
    diversity: 'Różnorodność genetyczna',
    evolutionConsole: 'Konsola ewolucji',
    populationLabel: 'Populacja',
    aliveLabel: 'żywych',
    alleleCountsLabel: 'Liczba alleli',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Populacja',
  },
  seo: [
    {
      type: 'title',
      text: 'Dobór naturalny vs. Dryf genetyczny: Zrozum ewolucję dzięki żywej populacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Jeśli chcesz zrozumieć różnicę między doborem naturalnym a dryfem genetycznym, ten symulator zapewnia warstwę wizualną. Zamiast czytać statyczną definicję, obserwujesz populację w czasie rzeczywistym.',
    },
    {
      type: 'title',
      text: 'Co oznaczają suwaki i dlaczego są ważne',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Dobór naturalny to nielosowa część ewolucji. Zwiększa częstość cech poprawiających przeżywalność lub rozmnażanie. Dryf genetyczny to część losowa.',
    },
    {
      type: 'paragraph',
      html:
        'Obie siły działają jednocześnie. W dużych populacjach zazwyczaj dominuje dobór, podczas gdy w małych populacjach przypadek może wyeliminować pożyteczne cechy.',
    },
    {
      type: 'title',
      text: 'Jak odczytywać wyniki symulacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Wskaźniki na żywo pokazują cechę dominującą, różnorodność genetyczną, dostosowanie końcowe oraz to, czy populacja rośnie, czy spada.',
    },
    {
      type: 'title',
      text: 'Dlaczego wielkość populacji zmienia przebieg ewolucji',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Presja selekcyjna:</strong> Jak silnie środowisko faworyzuje daną cechę.',
        '<strong>Intensywność dryfu:</strong> Jak duży szum losowy wpływa na populację.',
        '<strong>Tempo mutacji:</strong> Jak często powstają nowe warianty.',
        '<strong>Liczba alleli:</strong> Początkowa różnorodność w systemie.',
        '<strong>Różnorodność genetyczna:</strong> Dlaczego zmienność jest surowcem ewolucji.',
      ],
    },
    {
      type: 'paragraph',
      html:
        'Praktyczne narzędzie do zrozumienia doboru, dryfu i mutacji w systemach biologicznych.',
    },
    {
      type: 'title',
      text: 'Szybkie przykłady do wypróbowania',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Cel', 'Zmiana', 'Oczekiwany rezultat'],
      rows: [
        [
          'Pokaż wygraną doboru',
          'Zwiększ presję selekcyjną i zmniejsz dryf',
          'Jeden allel stopniowo dominuje',
        ],
        [
          'Pokaż dominację przypadku',
          'Zmniejsz populację i zwiększ dryf',
          'Losowe wahania częstości alleli',
        ],
        [
          'Pokaż mutacje',
          'Zwiększ tempo mutacji',
          'Regularnie pojawiają się nowe allele',
        ],
      ],
    },
    {
      type: 'paragraph',
      html:
        'Połączenie wizualizacji i wskaźników w czasie rzeczywistym ułatwia zrozumienie procesów ewolucyjnych.',
    },
    { type: 'paragraph', html: 'To wyjaśnienie porządkuje założenia modelu i pokazuje, jak parametry zmieniają wynik. Zmieniaj jedną wartość naraz i porównuj kilka uruchomień, aby każdą różnicę można było połączyć z rozpoznawalną przyczyną. Wizualizacja jest przybliżeniem dydaktycznym: rzeczywisty system ma więcej zmiennych, niepewności pomiarowych i warunków brzegowych. Używaj wyniku do poznawania skal, formułowania pytań i porównywania scenariuszy. Przed decyzją praktyczną lub analizą naukową sprawdź dane pierwotne, jednostki i specjalistyczne źródła. Zapisz ustawienia, aby powtórzyć obliczenie i omówić ograniczenia modelu.' },
    { type: 'paragraph', html: 'Powtórz obliczenie z tymi samymi ustawieniami, a następnie zmieniaj jedną wartość naraz. Zapisz wartości początkowe, reguły obliczeń i użyte ograniczenia, aby odróżnić prawidłowość modelu od zmiany numerycznej lub przypadku. Wynik ma charakter dydaktyczny i należy go czytać razem z założeniami oraz ograniczeniami. Rzeczywisty pomiar lub projekt wymaga dodatkowych danych i kontroli specjalisty.' },
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
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
