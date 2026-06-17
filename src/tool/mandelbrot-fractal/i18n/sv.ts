import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fraktal-kalkylator';
const title = 'Mandelbrot Fraktalkalkylator & Self Similarity Explorer';
const description = 'Utforska Mandelbrotmangden, zooma in pa sjalvliknande fraktalgranser och jamfor itereringsdjup, fargkontrast och komplexa plankarordinater.';

const howTo = [
  {
    name: 'Valj ett omrade av Mandelbrotmangden',
    text: 'Borja med hela mangden eller hoppa direkt till ett hogdetaljrikt omrade som haestskedalen eller en spiralminibrot.',
  },
  {
    name: 'Zooma genom att klicka pa bilden',
    text: 'Klicka pa valfri punkt pa canvasset for att atercentrera den komplexa planet och forstora fraktalen runt den koordinaten.',
  },
  {
    name: 'Justera itereringsdjup och fargkontrast',
    text: 'Oka itereringsbudgeten for att avsloja finare gransstruktur, justera sedan kontrast och palett for att gora flyktidsband lattare att lasa.',
  },
];

const faq = [
  {
    question: 'Vad visar Mandelbrotmangsdkalkylatorn?',
    answer: 'Den visar vilka komplexa tal c som haller rekursionen z(n+1) = z(n)^2 + c begransad nar man borjar fran z = 0. Punkter som aldrig flyr inom den valda itereringsbudgeten fargsattes som medlemmar av mangden, medan yttre punkter fargsatts efter hur snabbt deras bana flyr.',
  },
  {
    question: 'Varfor innehaller Mandelbrotmangdens grans sa mycket detalj?',
    answer: 'Gransen separerar stabila och flyende banor, och sma koordinatforandringar nara den gransen kan fullstandigt andra langtidsbeteendet. Denna kanslighet skapar kapslade bulbler, spiraler, filament och miniatyrkopior som upptrader pa manga forstoringsnivaer.',
  },
  {
    question: 'Ar Mandelbrotmangden verkligen sjalvliknande?',
    answer: 'Den ar inte perfekt sjalvliknande pa samma strikta satt som en Sierpinskietriangel, men den ar rikligt kvasi-sjalvliknande. Sma kopior av hela mangden upptrader overallt i planet, ofta forvridna och sammanbundna av utforliga greningsstrukturer.',
  },
  {
    question: 'Vad styr itereringsantalet?',
    answer: 'Itereringsantalet styr hur lange kalkylatorn testar varje punkt innan den beslutar att den sannolikt tillhor mangden. Hogre varden avslojar djupare filament och renare minibrots, men kraver mer berakning per pixel.',
  },
  {
    question: 'Varfor andras fargerna utanfor det svarta omradet?',
    answer: 'Yttre farger baseras pa flyktid: punkter som flyr snabbt far andra farger an punkter som haller sig nara mangden under manga iterationer. Jamn farglagning minskar harda band och gor geometrin hos narliggande banor lattare att inspektera.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fraktalkalkylator',
    canvasLabel: 'Interaktiv Mandelbrotmangd-canvas',
    presetsLabel: 'Forinstallda Mandelbrotomraden',
    presetFull: 'Hela Mangden',
    presetSeahorse: 'Hastskedalen',
    presetSpiral: 'Spiralminibrot',
    centerPoint: 'Centrum',
    magnification: 'Forstoring',
    visibleWindow: 'Synligt fonster',
    renderBudget: 'Itereringar',
    iterationsLabel: 'Itereringsdjup',
    contrastLabel: 'Flyktkontrast',
    colorLabel: 'Fargfalt',
    paletteEmber: 'Glodbands',
    paletteLagoon: 'Lagunplasma',
    paletteInk: 'Blackspektrum',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna Mandelbrotfraktalkalkylator renderar den klassiska komplexa-plan-mangden definierad av iterationen <strong>z(n+1) = z(n)^2 + c</strong>. Den ar designad for utforskning snarare an passivt tittande: varje klick atercentrerar planet, varje zoom exponerar en mindre matematisk omgivning, och itereringsreglaget later dig bestamma hur djupt kalkylatorn ska testa gransen innan den fargsatter en punkt som stabil eller flyende.',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den morka centrala formen markerar punkter vars banor forbli r begransade inom den aktuella itereringsbudgeten. Det farglagda yttre ar en flyktidskarta. En punkt farglagd nara mangden kan overleva hundratals iterationer innan dess magnitud overstiger flyktradien, medan en punkt langt borta flyr nastan omedelbart. Den mest vetenskapligt intressanta geometrin ar vanligtvis inte innanfor den fyllda formen, utan langs gransen dar begransat och obegransat beteende sammanflatas.',
    },
    {
      type: 'table',
      headers: ['Kontroll', 'Vad den andra r', 'Nar den ska okas'],
      rows: [
        ['<strong>Itereringsdjup</strong>', 'Hur manga rekursionssteg som testas for varje pixel.', 'Anvand hogre varden efter inzoomning pa tunna filament eller miniatyrkopior.'],
        ['<strong>Flyktkontrast</strong>', 'Hur starkt jamma flyktvarden separeras i synliga band.', 'Ho j den nar bilden ser plan ut; sank den nar fargerna ar for harda.'],
        ['<strong>Palett</strong>', 'Fargmappningen som tillampas pa yttre punkter.', 'Vaxla paletter for att avsloja strukturer som kan vara dolda av ett enda fargfalt.'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En anledning till att Mandelbrotmangden ar sa kanda ar dess kvasi-sjalvlikhet. Nar du zoomar in pa antenner, spiraler och dalar stoter du upprepade ganger pa sma Mandelbrotliknande oar, ofta kallade minibrots. Dessa kopior ar inte bara dekorativa. Deras arrangemang speglar dynamiken i kvadratiska avbildningar, inklusive periodiska bulbler, bifurkationsmonster och omraden dar banor forbli r fastna under langa perioder innan de flyr.',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I hela mangdens vy ger en blygsam itereringsgrans en igenkannlig bild. Vid djupare forstoring tar det dock mycket langre tid for manga granspunkter att avsloja om de flyr. Om itereringsgransen ar for lag kan fina strukturer se falskt solida eller otydliga ut. Att oka itereringsantalet forbattrar gransklassificeringen och later kalkylatorn losa upp smala slingor, spiralarmar och satellitbulbler med storre sakerhet.',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Koordinatlasningen visar det aktuella centrumet av visningsporten som ett komplext tal c = a + bi. Den horisontella axeln ar den reella delen och den vertikala axeln ar den imaginara delen. Genom att klicka pa canvasset valjer du en ny komplex koordinat och forstorar sedan det synliga fonstret runt den. Detta gor verktyget anvandbart for att lara sig hur visuella omraden av fraktalen motsvarar exakta platser i det komplexa planet.',
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
