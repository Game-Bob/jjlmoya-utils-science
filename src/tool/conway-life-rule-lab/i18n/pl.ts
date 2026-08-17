import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'laboratorium-regul-gra-w-zycie-conwaya';
const title = 'Laboratorium reguł Gry w życie Conwaya';
const description = 'Graj, edytuj i porównuj automaty komórkowe typu Conwaya z regułami B/S, wzorcami startowymi, metrykami live i responsywną planszą.';

const howTo = [
  {
    name: 'Obsiej planszę',
    text: 'Wybierz wzorzec, taki jak szybowiec, pulsar lub działo Gospera, umieść go na siatce lub wygeneruj losową populację.',
  },
  {
    name: 'Uruchom symulację',
    text: 'Użyj przycisków start, pauza, krok i tempo, aby obserwować jak zmieniają się narodziny, śmierci, gęstość i stabilność.',
  },
  {
    name: 'Zmień regułę',
    text: 'Przełącz predefiniowane ustawienie lub wpisz regułę B/S, taką jak B3/S23, B36/S23 lub B3678/S34678, by porównać różne automaty.',
  },
];

const faq = [
  {
    question: 'Co to jest notacja B/S w Grze w życie?',
    answer: 'Notacja B/S opisuje, ile sąsiadów tworzy nową żywą komórkę i ile pozwala istniejącej żywej komórce przeżyć. Gra w życie Conwaya to B3/S23: martwe komórki rodzą się przy dokładnie trzech sąsiadach, a żywe przeżywają z dwoma lub trzema sąsiadami.',
  },
  {
    question: 'Dlaczego to narzędzie nazywa się laboratorium reguł, a nie tylko symulatorem?',
    answer: 'Klasyczna reguła Conwaya jest zawarta, ale symulator jest zbudowany do porównywania rodzin automatów komórkowych podobnych do Life. Edytowanie liczb narodzin i przeżycia zmienia długoterminowe zachowanie, dając replikatory, fale, zamarznięte wyspy, chaotyczny wzrost lub wyginięcie.',
  },
  {
    question: 'Co oznacza stabilność w symulatorze?',
    answer: 'Stabilność szacuje, jak bardzo kolonia zmieniła się podczas ostatniej generacji. Wysoka stabilność oznacza mało narodzin i śmierci względem populacji; niska stabilność oznacza, że plansza jest burzliwa lub szybko się reorganizuje.',
  },
  {
    question: 'Czy plansza ma krawędzie?',
    answer: 'Symulacja używa toroidalnego zawijania: lewa krawędź łączy się z prawą, a góra łączy się z dołem. Dzięki temu wzorce poruszają się naturalnie, nie znikając przy twardych granicach.',
  },
  {
    question: 'Czy mogę narysować własny wzorzec startowy?',
    answer: 'Tak. Wstrzymaj symulację i kliknij lub stuknij komórki na planszy, aby je przełączyć. Możesz łączyć ręcznie narysowane komórki z wbudowanymi wzorcami i uruchamiać wynik pod dowolnym presetem reguły.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Plansza automatów komórkowych typu Life',
    play: 'Start',
    pause: 'Pauza',
    step: 'Krok',
    clear: 'Puste płótno',
    randomize: 'Losuj',
    ruleLabel: 'Notacja reguły',
    ruleHelp: 'Narodziny / przetrwanie',
    speedLabel: 'Tempo',
    densityLabel: 'Gęstość startowa',
    patternLabel: 'Wzorzec',
    placePattern: 'Umieść wzorzec',
    generation: 'Generacja',
    population: 'Populacja',
    density: 'Gęstość',
    stability: 'Stabilność',
    births: 'Narodziny',
    deaths: 'Śmierci',
    achievementsLabel: 'Dziennik laboratorium',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Wykryto oscylację o okresie 2',
    achievementImmortal: 'Nieśmiertelny',
    achievementImmortalDescription: 'Osiągnięto generację 500 przy pełnej stabilności',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Rzadkie losowe ziarno przekroczyło 1 000 żywych komórek',
    presetClassic: 'Klasyczny Conway',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Dzień i noc',
    patternGlider: 'Szybowiec',
    patternGosper: 'Działo Gospera',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Sygnał kolonii',
    statusFrozen: 'stabilna',
    statusGrowing: 'rośnie',
    statusFading: 'zanika',
    statusChaotic: 'zmienna',
    invalidRule: 'Użyj notacji B/S, np. B3/S23.',
  },
  seo: [
    {
      type: 'title',
      text: 'Symulator Gry w Życie Conwaya z edytowalnymi regułami',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To laboratorium reguł Gry w Życie Conwaya pozwala uruchamiać klasyczny automat komórkowy oraz modyfikować i porównywać jego reguły.',
    },
    {
      type: 'title',
      text: 'Jak reguły B/S zmieniają grę',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Automaty komórkowe typu Life są zapisywane w <strong>notacji B/S</strong>. Oryginalna reguła Conwaya <strong>B3/S23</strong> jest znana z idealnego zrównoważenia.',
    },
    {
      type: 'table',
      headers: ['Reguła', 'Zachowanie do obserwacji', 'Dobra obserwacja'],
      rows: [
        ['<strong>B3/S23</strong>', 'Klasyczne szybowce, oscylatory i działa.', 'Umieść działo Gospera i śledź populację.'],
        ['<strong>B36/S23</strong>', 'HighLife wspiera samoreplikację.', 'Porównaj to samo ziarno z B3/S23.'],
        ['<strong>B2/S</strong>', 'Komórki nigdy nie przeżywają.', 'Rozpocznij od małego ziarna.'],
        ['<strong>B3678/S34678</strong>', 'Day & Night wspiera odwrócone struktury.', 'Przetestuj z wysoką gęstością początkową.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego wzorce są ważne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wzorce tworzą słownik Gry w Życie. Szybowce pokazują ruch, a pulsary oscylację.',
    },
    {
      type: 'title',
      text: 'Odczytywanie statystyk na żywo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Populacja i gęstość pokazują, ile komórek żyje, podczas gdy narodziny i zgony ujawniają poziom aktywności.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
