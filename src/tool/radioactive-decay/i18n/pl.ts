import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkulator-okresu-poltrwania-rozpadu-promieniotworczego';
const title = 'Kalkulator okresu poltrwania i rozpadu promieniotworczego';
const description = 'Symuluj rozpad promieniotworczy z realnymi izotopami, wzorem okresu poltrwania, stochastycznym polem atomow, iloscia pozostala i aktywnoscia wzgledna.';

const howTo = [
  { name: 'Wybierz izotop', text: 'Zacznij od wegla-14, jodu-131, uranu-238, technetu-99m albo radonu-222. Kazdy preset laduje realistyczny okres poltrwania i typowy kontekst naukowy.' },
  { name: 'Ustaw probke i czas', text: 'Dostosuj liczbe widocznych atomow i przesuwaj czas, aby zobaczyc, jak pozostala frakcja podaza za prawem wykladniczym.' },
  { name: 'Porownaj wynik dokladny i losowosc atomowa', text: 'Uzyj wyniku deterministycznego jako wartosci oczekiwanej i obserwuj pole atomow, aby zrozumiec wahania malych probek.' },
  { name: 'Zinterpretuj aktywnosc', text: 'Aktywnosc spada proporcjonalnie do liczby jader, ktore jeszcze sie nie rozpadly.' },
];

const faq = [
  { question: 'Co oznacza okres poltrwania?', answer: 'To czas, po ktorym srednio polowa niestabilnych jader w probce ulega rozpadowi. Po jednym okresie zostaje 50%, po dwoch 25%, po trzech 12,5%.' },
  { question: 'Dlaczego pole atomow nie zawsze zgadza sie z dokladnym procentem?', answer: 'Rozpad promieniotworczy jest probabilistyczny. Wzor daje wartosc oczekiwana dla duzej probki, a pole symuluje pojedyncze atomy z losowymi progami.' },
  { question: 'Czy aktywnosc jest tym samym co liczba atomow pozostalych?', answer: 'Dla jednego izotopu aktywnosc jest proporcjonalna do liczby jader, ktore sie nie rozpadly.' },
  { question: 'Czy kalkulator nadaje sie do datowania radioweglowego?', answer: 'Tak, koncepcyjnie. Prawdziwe datowanie laboratoryjne wymaga takze krzywych kalibracyjnych, kontroli zanieczyszczen i przygotowania probki.' },
  { question: 'Czy kazdy izotop rozpada sie do jednego stabilnego produktu?', answer: 'Nie zawsze. Niektore izotopy rozpadaja sie lancuchowo z kilkoma produktami potomnymi. Narzedzie modeluje izotop macierzysty.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Izotop',
    sampleAtoms: 'Atomy probki',
    elapsedTime: 'Czas',
    halfLife: 'Okres poltrwania',
    remaining: 'Pozostalo',
    decayed: 'Rozpadlo sie',
    activity: 'Aktywnosc wzgledna',
    timeUnit: 'Jednostka czasu',
    expectedCurve: 'Krzywa oczekiwana',
    atomField: 'Pole atomow',
    presetUse: 'Typowe uzycie',
    oneHalfLife: '1 okres poltrwania',
    twoHalfLives: '2 okresy poltrwania',
    fourHalfLives: '4 okresy poltrwania',
    custom: 'Wlasne',
    liveAtoms: 'Aktywne atomy',
    decayedAtoms: 'Atomy po rozpadzie',
    resetSeed: 'Nowy wzor atomow',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator okresu półtrwania: pozostałe atomy, aktywność i przykłady izotopów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator rozpadu promieniotwórczego pomaga oszacować, ile niestabilnego izotopu zostaje po zadanym czasie. Odpowiada na najczęstsze intencje wyszukiwania: wzór okresu półtrwania, obliczenia dla realnych izotopów, jądra macierzyste pozostałe, jądra rozpadłe i spadek aktywności.',
    },
    {
      type: 'paragraph',
      html: 'Narzędzie łączy dwa komplementarne modele. Wyniki numeryczne wykorzystują standardowe równanie wykładnicze, podczas gdy pole atomowe symuluje pojedyncze jądra za pomocą progów stochastycznych.',
    },
    {
      type: 'title',
      text: 'Wzór rozpadu promieniotwórczego używany przez kalkulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wzór to <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> to początkowa liczba jąder macierzystych, <strong>N(t)</strong> to oczekiwana liczba pozostała po czasie <strong>t</strong>, a <strong>T1/2</strong> to okres półtrwania.',
    },
    {
      type: 'paragraph',
      html: 'Na przykład, jeśli próbka rozpoczyna się od 1000 jąder macierzystych i upływają dwa okresy półtrwania, oczekiwana pozostała ilość wynosi 1000 x (1/2)^2 = 250 jąder. Ilość rozpadła wynosi 750 jąder.',
    },
    {
      type: 'table',
      headers: ['Czas', 'Czynnik', 'Jądra macierzyste', 'Aktywność względna'],
      rows: [
        ['0 okresów', '(1/2)^0', '100%', '100%'],
        ['1 okres', '(1/2)^1', '50%', '50%'],
        ['2 okresy', '(1/2)^2', '25%', '25%'],
        ['3 okresy', '(1/2)^3', '12,5%', '12,5%'],
        ['5 okresów', '(1/2)^5', '3,125%', '3,125%'],
        ['10 okresów', '(1/2)^10', '0,098%', '0,098%'],
      ],
    },
    {
      type: 'title',
      text: 'Jak obliczyć pozostałą aktywność po okresie półtrwania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dla pojedynczego izotopu macierzystego aktywność jest proporcjonalna do liczby nierozpadłych jąder. Jeśli pozostaje 25% izotopu macierzystego, aktywność wynosi również około 25% aktywności początkowej.',
    },
    {
      type: 'paragraph',
      html: 'Zależność ta ma kluczowe znaczenie w medycynie nuklearnej i ochronie radiologicznej.',
    },
    {
      type: 'title',
      text: 'Przykłady: Węgiel-14, Jod-131, Technet-99m, Uran-238 i Radon-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Izotop', 'Przybliżony okres półtrwania', 'Typowe zastosowanie', 'Znaczenie wyniku'],
      rows: [
        ['Węgiel-14', '5 730 lat', 'Datowanie radiowęglowe', 'Pozostała aktywność węgla-14 w materiale organicznym.'],
        ['Jod-131', '8,02 dnia', 'Terapia medyczna', 'Szybkość spadku aktywności w ciągu dni.'],
        ['Technet-99m', '6,01 godziny', 'Diagnostyka obrazowa', 'Dlaczego użyteczna aktywność spada w trakcie dnia klinicznego.'],
        ['Uran-238', '4,47 mld lat', 'Datowanie geologiczne', 'Dlaczego długożyciowe izotopy są mierzalne w skali geologicznej.'],
        ['Radon-222', '3,82 dnia', 'Promieniowanie w budynkach', 'Zmiana gazowego źródła ekspozycji.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Te przykłady obejmują różne skale czasowe i zastosowania naukowe.',
    },
    {
      type: 'title',
      text: 'Jak odczytywać stochastyczną symulację atomową',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pole atomowe jest wymodelowane stochastycznie. Dla małych próbek wyniki wahać się będą wokół wartości teoretycznej.',
    },
    {
      type: 'paragraph',
      html: 'Gładka krzywa pojawia się dopiero przy uśrednieniu wielu niezależnych zdarzeń losowych.',
    },
    {
      type: 'title',
      text: 'Zastosowania kalkulatora okresu półtrwania',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Edukacja fizyczna:</strong> obliczanie pozostałych jąder i łączenie z modelem wizualnym.',
        '<strong>Chemia jądrowa:</strong> porównywanie stabilności i szybkości rozpadu izotopów.',
        '<strong>Datowanie radiowęglowe:</strong> zrozumienie rozpadu próbek organicznych.',
        '<strong>Medycyna nuklearna:</strong> planowanie diagnostyki z użyciem krótkożyciowych izotopów.',
        '<strong>Ochrona radiologiczna:</strong> szacowanie spadku aktywności w czasie.',
      ],
    },
    {
      type: 'title',
      text: 'Ważne ograniczenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ten kalkulator modeluje izotop macierzysty za pomocą pojedynczego okresu półtrwania.',
    },
    {
      type: 'paragraph',
      html: 'Używaj wyników jako modelu dydaktycznego i szacunku naukowego.',
    },
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

