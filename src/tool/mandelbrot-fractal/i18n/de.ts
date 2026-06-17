import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fraktal-rechner';
const title = 'Mandelbrot Fraktal Rechner und Selbstahnlichkeits Explorer';
const description = 'Erkunden Sie die Mandelbrot Menge, zoomen Sie in selbstahnliche Fraktalgrenzen hinein und vergleichen Sie Iterationstiefe, Farbkontrast und Koordinaten der komplexen Ebene.';

const howTo = [
  {
    name: 'Wahlen Sie eine Region der Mandelbrot Menge',
    text: 'Beginnen Sie mit der gesamten Menge oder springen Sie direkt zu einer detailreichen Region wie dem Seepferdchental oder einem spiralfoermigen Minibrot.',
  },
  {
    name: 'Zoomen Sie durch Klicken auf das Bild',
    text: 'Klicken Sie auf einen beliebigen Punkt auf der Leinwand, um die komplexe Ebene neu zu zentrieren und den Fraktal um diesen Punkt zu vergroessern.',
  },
  {
    name: 'Passen Sie Iterationstiefe und Farbkontrast an',
    text: 'Erhoehen Sie das Iterationsbudget, um feinere Grenzstrukturen sichtbar zu machen, und passen Sie dann Kontrast und Farbpalette an, um die Fluchtzeitbaender besser lesbar zu machen.',
  },
];

const faq = [
  {
    question: 'Was zeigt der Mandelbrot Mengen Rechner?',
    answer: 'Er zeigt, welche komplexen Zahlen c die Rekursion z(n+1) = z(n)^2 + c beschraenkt halten, wenn man bei z = 0 beginnt. Punkte, die innerhalb des gewaehlten Iterationsbudgets nie entkommen, werden als Elemente der Menge eingefaerbt, waehrend aeussere Punkte danach gefaerbt werden, wie schnell ihre Umlaufbahn entkommt.',
  },
  {
    question: 'Warum enthaelt der Mandelbrot Rand so viele Details?',
    answer: 'Der Rand trennt stabile und entkommende Umlaufbahnen. Schon winzige Koordinatenaenderungen in der Naehe dieses Randes koennen das Langzeitverhalten vollstaendig veraendern. Diese Empfindlichkeit erzeugt ineinander verschachtelte Knoten, Spiralen, Filamente und miniaturisierte Kopien, die auf vielen Vergroesserungsstufen erscheinen.',
  },
  {
    question: 'Ist die Mandelbrot Menge wirklich selbstahnlich?',
    answer: 'Sie ist nicht perfekt selbstahnlich im gleichen strengen Sinne wie ein Sierpinski Dreieck, aber sie ist reichhaltig quasi selbstahnlich. Kleine Kopien der gesamten Menge erscheinen ueberall in der Ebene, oft verzerrt und durch aufwaendige verzweigte Strukturen verbunden.',
  },
  {
    question: 'Was steuert die Iterationsanzahl?',
    answer: 'Die Iterationsanzahl bestimmt, wie lange der Rechner jeden Punkt testet, bevor er entscheidet, dass er wahrscheinlich zur Menge gehoert. Hoehere Werte legen tiefere Filamente und sauberere Minibrots frei, erfordern aber mehr Berechnung pro Pixel.',
  },
  {
    question: 'Warum aendern sich die Farben ausserhalb des schwarzen Bereichs?',
    answer: 'Die Farben aussen basieren auf der Fluchtzeit: Punkte, die schnell entkommen, erhalten andere Farben als Punkte, die viele Iterationen in der Naehe der Menge bleiben. Glaettende Farbgebung reduziert harte Baender und erleichtert die Untersuchung der Geometrie benachbarter Umlaufbahnen.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fraktal Rechner',
    canvasLabel: 'Interaktive Mandelbrot Mengen Leinwand',
    presetsLabel: 'Mandelbrot Region Voreinstellungen',
    presetFull: 'Gesamte Menge',
    presetSeahorse: 'Seepferdchental',
    presetSpiral: 'Spiral Minibrot',
    centerPoint: 'Zentrum',
    magnification: 'Vergroesserung',
    visibleWindow: 'Sichtbarer Ausschnitt',
    renderBudget: 'Iterationen',
    iterationsLabel: 'Iterationstiefe',
    contrastLabel: 'Fluchtkontrast',
    colorLabel: 'Farbfeld',
    paletteEmber: 'Glutbaender',
    paletteLagoon: 'Lagunen Plasma',
    paletteInk: 'Tinten Spektrum',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Mengen Rechner fur Fraktale, Fluchtzeit und Selbstahnlichkeit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Mandelbrot Fraktal Rechner rendert die klassische Menge der komplexen Ebene, definiert durch die Iteration <strong>z(n+1) = z(n)^2 + c</strong>. Er ist fur die Erkundung konzipiert, nicht fur die passive Betrachtung. Jeder Klick zentriert die Ebene neu, jeder Zoom legt eine kleinere mathematische Nachbarschaft frei, und der Iterationsschieberegler lasst Sie entscheiden, wie tief der Rechner die Grenze testen soll, bevor er einen Punkt als stabil oder entweichend farbt.',
    },
    {
      type: 'title',
      text: 'Wie man das Mandelbrot Bild liest',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die dunkle zentrale Form markiert Punkte, deren Umlaufbahnen innerhalb des aktuellen Iterationsbudgets beschrankt bleiben. Die farbige Aussenseite ist eine Fluchtzeitkarte. Ein Punkt, der nahe der Menge gefarbt ist, kann hunderte von Iterationen uberstehen, bevor sein Betrag den Fluchtradius uberschreitet, wahrend ein weit entfernter Punkt fast sofort entkommt. Die wissenschaftlich interessanteste Geometrie befindet sich normalerweise nicht innerhalb der gefullten Form, sondern entlang der Grenze, wo beschranktes und unbeschranktes Verhalten ineinandergreifen.',
    },
    {
      type: 'table',
      headers: ['Steuerung', 'Was sie andert', 'Wann erhohen'],
      rows: [
        ['<strong>Iterationstiefe</strong>', 'Wie viele Rekursionsschritte fur jeden Pixel getestet werden.', 'Hoehere Werte nach dem Zoomen in dunne Filamente oder miniaturisierte Kopien verwenden.'],
        ['<strong>Fluchtkontrast</strong>', 'Wie stark glatte Fluchtwerte in sichtbare Baender getrennt werden.', 'Erhohen, wenn das Bild flach aussieht; senken, wenn die Farben zu hart sind.'],
        ['<strong>Palette</strong>', 'Die Farbzuordnung, die auf aeussere Punkte angewendet wird.', 'Paletten wechseln, um Strukturen sichtbar zu machen, die von einem Farbfeld verdeckt werden koennten.'],
      ],
    },
    {
      type: 'title',
      text: 'Selbstahnlichkeit und Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein Grund, warum die Mandelbrot Menge so beruhmt ist, ist ihre Quasi Selbstahnlichkeit. Wenn Sie in Antennen, Spiralen und Taeler zoomen, stossen Sie immer wieder auf kleine mandelbrotahnliche Inseln, die oft als Minibrots bezeichnet werden. Diese Kopien sind nicht nur dekorativ. Ihre Anordnung spiegelt die Dynamik quadratischer Abbildungen wider, einschliesslich periodischer Knoten, Bifurkationsmuster und Regionen, in denen Umlaufbahnen ueber lange Zeitraeume gefangen bleiben, bevor sie entkommen.',
    },
    {
      type: 'title',
      text: 'Warum hoehere Iterationen bei tiefem Zoom wichtig sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bei der Ansicht der gesamten Menge liefert eine moderate Iterationsgrenze ein erkennbares Bild. Bei staerkerer Vergroesserung brauchen viele Grenzpunkte jedoch viel laenger, um zu zeigen, ob sie entkommen. Wenn die Iterationsgrenze zu niedrig ist, koennen feine Strukturen faelschlich solide oder matschig aussehen. Die Erhoehung der Iterationsanzahl verbessert die Grenzklassifikation und ermoeglicht es dem Rechner, schmale Ranken, Spiralarme und Satellitenknoten mit mehr Sicherheit aufzuloesen.',
    },
    {
      type: 'title',
      text: 'Mathematische Bedeutung der komplexen Koordinaten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Koordinatenanzeige zeigt das aktuelle Zentrum des Ansichtsfensters als komplexe Zahl c = a + bi. Die horizontale Achse ist der Realteil und die vertikale Achse der Imaginaerteil. Ein Klick auf die Leinwand waehlt eine neue komplexe Koordinate und vergroessert dann das sichtbare Fenster darum herum. Dies macht das Werkzeug nuetzlich, um zu lernen, wie visuelle Regionen des Fraktals mit genauen Positionen in der komplexen Ebene korrespondieren.',
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
