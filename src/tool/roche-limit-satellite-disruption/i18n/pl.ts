import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'granica-roche-kalkulator-zaklocenia-satelity';
const title = 'Kalkulator granicy Roche i symulator zakłócenia satelity';
const description = 'Oblicz granice Roche dla planet i księżyców, porównaj odległości rozpadu dla ciał płynnych i sztywnych oraz zobacz, jak siły pływowe zamieniają satelitę w układ pierścieni.';

const howTo = [
  {
    name: 'Wybierz ciało główne',
    text: 'Wybierz planetę, której grawitacja rozciąga satelitę. Kalkulator ładuje jej promień, gęstość i masę do szacowania granicy Roche oraz okresu orbitalnego.',
  },
  {
    name: 'Wybierz typ satelity',
    text: 'Wybierz lodowy księżyc, skalisty księżyc, zbiorowisko gruzu lub ciało bogate w żelazo. Gęstość i spójność wewnętrzna zmieniają granice rozpadu.',
  },
  {
    name: 'Przesuń suwak orbity',
    text: 'Przeciągnij odległość orbitalną do wewnątrz lub na zewnątrz. Wizualizacja pokazuje, czy satelita znajduje się poza granicą Roche, na jej krawędzi, ulega fragmentacji lub już staje się pierścieniem.',
  },
  {
    name: 'Porównaj granice',
    text: 'Użyj odczytów, aby porównać klasyczną granicę Roche dla ciał płynnych z niższym oszacowaniem dla ciała sztywnego oraz granicę operacyjną skorygowaną o spójność.',
  },
];

const faq = [
  {
    question: 'Czym jest granica Roche?',
    answer: 'Granica Roche to odległość od masywnego ciała głównego, przy której siły pływowe działające na mniejsze ciało na orbicie stają się wystarczająco silne, aby pokonać jego grawitację własną. Wewnątrz tej granicy słaby lub płynny satelita może zostać rozerwany.',
  },
  {
    question: 'Dlaczego istnieją granice Roche dla ciał płynnych i sztywnych?',
    answer: 'Satelita płynny łatwo się odkształca, więc siły pływowe mogą zwiększyć jego wydłużenie i rozerwać go dalej od planety. Satelita sztywny może przeciwstawiać się odkształceniom dzięki wytrzymałości materiału, dlatego prostsze oszacowanie dla ciała sztywnego umieszcza rozpad bliżej ciała głównego.',
  },
  {
    question: 'Czy każdy księżyc wewnątrz granicy Roche natychmiast staje się pierścieniem?',
    answer: 'Nie. Rzeczywisty rozpad zależy od rotacji, składu, pęknięć, porowatości, ogrzewania, uderzeń i wytrzymałości materiału. To narzędzie pokazuje klasyczną granicę grawitacyjną i używa pasa przejściowego do określenia ryzyka, a nie natychmiastowego przełączenia.',
  },
  {
    question: 'Dlaczego pierścienie Saturna znajdują się w pobliżu granicy Roche?',
    answer: 'Pierścienie Saturna zajmują region, w którym materiał lodowy może utrzymywać się jako cząstki zamiast łączyć się w jeden duży księżyc. Granica Roche pomaga wyjaśnić, dlaczego cząstki pierścieni pozostają rozproszone blisko planety.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Ciało główne',
    satelliteType: 'Typ satelity',
    orbitDistance: 'Odległość orbitalna',
    rocheBoundary: 'Granica Roche',
    fluidLimit: 'Granica dla ciała płynnego',
    rigidLimit: 'Granica dla ciała sztywnego',
    activeLimit: 'Granica aktywna',
    safetyRatio: 'Współczynnik bezpieczeństwa',
    orbitalPeriod: 'Okres orbitalny',
    tidalStress: 'Naprężenie pływowe',
    ringFormation: 'Tworzenie się pierścienia',
    stable: 'Stabilna orbita',
    grazing: 'Oddziaływanie pływowe',
    fragmenting: 'Fragmentacja',
    ring: 'Układ pierścieni',
    km: 'km',
    hours: 'h',
    density: 'Gęstość',
    cohesion: 'Spójność',
    planetRadius: 'Promień planety',
    reset: 'Resetuj',
    closePass: 'Bliski przelot',
    moonTrack: 'Tor księżyca',
    debrisTrack: 'Tor szczątków',
    primaryEarth: 'Ziemia',
    primaryMars: 'Mars',
    primaryJupiter: 'Jowisz',
    primarySaturn: 'Saturn',
    primaryNeptune: 'Neptun',
    satelliteIcyMoon: 'Lodowy księżyc',
    satelliteRockyMoon: 'Skalisty księżyc',
    satelliteRubblePile: 'Stos gruzu',
    satelliteIronCore: 'Księżyc bogaty w żelazo',
    cohesionFluid: 'Płynny',
    cohesionFractured: 'Spękany',
    cohesionRigid: 'Sztywny',
  },
  seo: [
    {
      type: 'title',
      text: 'Wzór granicy Roche, znaczenie i jak używać tego kalkulatora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Granica Roche</strong> to minimalna odległość orbitalna, przy której satelita utrzymywany głównie przez własną grawitację może okrążyć większe ciało bez rozerwania przez siły pływowe. Kalkulator łączy promień planety, gęstość planety, gęstość satelity i przybliżoną wytrzymałość wewnętrzną satelity, aby oszacować ryzyko fragmentacji.',
    },
    {
      type: 'paragraph',
      html: 'Wybierz model dla satelity płynnego albo ciała sztywnego, a następnie porównaj wynik z odległością orbity. Dla obiektu utrzymywanego przez własną grawitację używa się relacji zależnej od stosunku gęstości; ciało o wewnętrznej wytrzymałości może zbliżyć się bardziej, zanim naprężenia pływowe spowodują pękanie. Obliczenie jest przybliżeniem dydaktycznym: nie opisuje kształtu nieregularnego, rotacji synchronicznej, tarcia atmosferycznego ani historii migracji orbity. Traktuj granicę jako strefę do dalszej analizy, a nie jako ostrą linię gwarantującą rozpad lub bezpieczeństwo. Zmieniaj promień i gęstości osobno, aby zobaczyć, które założenia najbardziej wpływają na odległość graniczną. Wyniki pomagają zrozumieć pierścienie planetarne, rozpad księżyców oraz różnicę między uproszczonym równaniem a pełnym modelem mechaniki orbitalnej. W praktyce warto zachować osobne założenia dla średniej gęstości planety, gęstości satelity i jego spójności. Porównanie dwóch modeli nie oznacza, że jeden wynik jest uniwersalną granicą dla każdego księżyca. Dodatkowe obserwacje mogą zmienić parametry, szczególnie gdy obiekt ma porowatą budowę, nieregularny kształt albo obraca się inaczej niż przyjęto w równaniu. Dzięki zmianie jednego parametru naraz łatwiej ocenić wrażliwość wyniku i wyjaśnić, dlaczego odległość graniczna zmienia się wraz ze stosunkiem promieni i gęstości.',
    },
    {
      type: 'paragraph',
      html: 'Kluczowa idea jest prosta: grawitacja nie działa równomiernie na całego satelitę. Strona bliższa jest przyciągana silniej niż strona dalsza, co tworzy siłę rozciągającą. Jeśli to rozciąganie pływowe jest silniejsze niż grawitacja własna i spójność materiału satelity, ciało może pękać, tracić masę i ostatecznie ulec fragmentacji.',
    },
    {
      type: 'title',
      text: 'Równania granicy Roche używane przez kalkulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dla płynnego lub bardzo słabego satelity klasyczne przybliżenie to <strong>d = 2,44 R (rho_M / rho_m)^(1/3)</strong>. Dla sztywnego satelity popularne przybliżenie to <strong>d = 1,26 R (rho_M / rho_m)^(1/3)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Promień ciała głównego:</strong> Większe planety tworzą większą odległość granicy Roche.',
        '<strong>Gęstość ciała głównego:</strong> Gęstsze ciało główne zwiększa siłę pływową.',
        '<strong>Gęstość satelity:</strong> Gęstszy satelita ma silniejszą grawitację własną.',
        '<strong>Wytrzymałość satelity:</strong> Płynny, lodowy lub spękany obiekt rozpada się dalej niż zbity, sztywny obiekt.',
      ],
    },
    {
      type: 'table',
      headers: ['Model', 'Postać wzoru', 'Zastosowanie', 'Co oznacza wynik'],
      rows: [
        ['Granica Roche dla ciała płynnego', '2,44 R (rho_M / rho_m)^(1/3)', 'Lodowe księżyce, ciała stopione, gruz', 'Konserwatywna odległość rozpadu.'],
        ['Granica Roche dla ciała sztywnego', '1,26 R (rho_M / rho_m)^(1/3)', 'Gęste skały, metale', 'Bliższe, niższe oszacowanie.'],
        ['Wskazanie z korektą o spójność', 'Między przypadkiem płynnym a sztywnym', 'Porównanie scenariuszy', 'Praktyczna linia ryzyka.'],
      ],
    },
    {
      type: 'title',
      text: 'Przykład: Dlaczego lodowy księżyc przy Saturnie jest wrażliwy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturn ma małą gęstość, ale jest ogromny. Lodowy księżyc ma słabą grawitację własną, więc granica płynna Roche wypadnie daleko od chmur Saturna.',
    },
    {
      type: 'paragraph',
      html: 'Zmieniając odległość orbitalną, obserwuj współczynnik bezpieczeństwa.',
    },
    {
      type: 'title',
      text: 'Jak interpretować współczynnik bezpieczeństwa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Współczynnik bezpieczeństwa to stosunek odległości orbitalnej do aktywnej granicy Roche.',
    },
    {
      type: 'table',
      headers: ['Współczynnik', 'Stan', 'Odczyt praktyczny'],
      rows: [
        ['Powyżej 1,12x', 'Stabilna orbita', 'Satelita jest bezpieczny.'],
        ['1,00x do 1,12x', 'Oddziaływanie pływowe', 'Możliwe pęknięcia powierzchniowe.'],
        ['0,78x do 1,00x', 'Fragmentacja', 'Rozpad satelity.'],
        ['Poniżej 0,78x', 'Układ pierścieni', 'Tworzenie się dysku cząstek.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Szczątki rozciągają się wzdłuż orbity pod wpływem ścinania orbitalnego.',
    },
    {
      type: 'title',
      text: 'Dlaczego granica Roche tworzy pierścienie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wewnątrz granicy Roche cząstki nie mogą ulec ponownej akrecji z powodu niszczących sił pływowych.',
    },
    {
      type: 'paragraph',
      html: 'Tworzenie pierścienia jest procesem stopniowym.',
    },
    {
      type: 'title',
      text: 'Ważne ograniczenia kalkulatora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realne satelity różnią się rotacją, porowatością i spójnością strukturalną.',
    },
    {
      type: 'list',
      items: [
        '<strong>Stosuj granicę płynną:</strong> dla luźnych i lodowych ciał.',
        '<strong>Stosuj granicę sztywną:</strong> dla zwartych skał.',
        '<strong>Korzystaj z granicy aktywnej:</strong> do szybkiego porównania.',
        '<strong>Nie traktuj wyniku jako pewnik:</strong> bez uwzględnienia geofizyki.',
      ],
    },
    {
      type: 'title',
      text: 'Częste pytania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Używaj narzędzia do szacowania rozpadu satelitów pod wpływem sił pływowych.',
    },
    {
      type: 'paragraph',
      html: 'Zmieniając jeden parametr naraz, łatwiej sprawdzić wrażliwość wyniku. Gęstość planety, gęstość satelity i jego promień wpływają na skalę granicy, lecz uproszczone równanie nie opisuje każdego rzeczywistego przypadku. Nieregularny kształt, porowata budowa, obrót, tarcie oraz historia orbity mogą zmienić zachowanie obiektu. Dlatego traktuj obliczoną odległość jako punkt odniesienia do nauki mechaniki orbitalnej i porównywania modeli, a nie jako ostrą granicę bezpieczeństwa. Zestawienie ciała płynnego i sztywnego pokazuje, jak wewnętrzna spójność może opóźnić fragmentację. Wynik pomaga analizować powstawanie pierścieni planetarnych i różnicę między prostym przybliżeniem a pełną symulacją sił pływowych.',
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
