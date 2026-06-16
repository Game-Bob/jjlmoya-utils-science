const slug = 'lorenz-attraktor';
const title = 'Lorenz Attraktor Chaos Simulator Der Schmetterlingseffekt in 3D';
const description = 'Erforschen Sie die Chaostheorie mit dieser interaktiven 3D-Lorenz-Attraktor-Simulation. Visualisieren Sie den Schmetterlingseffekt.';

const howTo = [
  {
    "name": "Leinwand drehen",
    "text": "Klicken und ziehen Sie im 3D-Viewport, um den Attraktor zu drehen."
  },
  {
    "name": "Schieberegler anpassen",
    "text": "Aendern Sie die Parameter Sigma, Rho und Beta, um das Chaos zu beobachten."
  },
  {
    "name": "Divergenz beobachten",
    "text": "Beobachten Sie, wie der Abstand zwischen den beiden Trajektorien exponentiell waechst."
  },
  {
    "name": "Pause und Reset",
    "text": "Verwenden Sie die Steuerelemente, um die Simulation anzuhalten oder zurueckzusetzen."
  }
];

const faq = [
  {
    "question": "Was ist der Lorenz-Attraktor?",
    "answer": "Der Lorenz-Attraktor ist eine Reihe chaotischer Loesungen des Lorenz-Systems."
  },
  {
    "question": "Was ist der Schmetterlingseffekt?",
    "answer": "Die empfindliche Abhaengigkeit von den Anfangsbedingungen in chaotischen Systemen."
  },
  {
    "question": "Was bedeuten die Parameter?",
    "answer": "Sigma ist die Prandtl-Zahl, Rho die Rayleigh-Zahl und Beta das geometrische Aspektverhaeltnis."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopiert",
  "noHistory": "Kein Verlauf",
  "load": "Laden",
  "delete": "Loeschen",
  "title": "Lorenz-Attraktor",
  "subTitle": "Deterministisches Chaos",
  "parameterControls": "Systemparameter",
  "simulationSpeed": "Geschwindigkeit (dt)",
  "initialPerturbation": "Anfaengliche Stoerung (dx)",
  "trajectories": "Trajektorien",
  "distance": "Divergenzabstand",
  "exponentialGrowth": "Exponentielle Divergenz",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinaten",
  "divergenceExplanation": "Das Divergenzdiagramm zeigt den euklidischen Abstand zwischen den beiden Trajektorien im Laufe der Zeit."
},
  seo: [
    { type: 'title', text: "Deterministisches Chaos: Die Lorenz-Gleichungen verstehen", level: 2 },
    { type: 'paragraph', html: "Das Lorenz-System ist ein Meilenstein der nichtlinearen Dynamik und Chaostheorie. Es wurde 1963 vom Meteorologen und Mathematiker <strong>Edward Lorenz</strong> entwickelt und entstand aus einem vereinfachten Modell der atmosphaerischen Konvektion. Lorenz reduzierte die komplexen Stroemungsdynamikgleichungen auf drei gekoppelte gewoehnliche Differentialgleichungen. Die Entdeckung, dass diese einfachen, deterministischen Gleichungen hochkomplexes, nichtperiodisches, chaotisches Verhalten erzeugen koennen, veraenderte unser Verstaendnis physikalischer Systeme grundlegend." },
    { type: 'paragraph', html: "Das System wird durch drei gekoppelte Differentialgleichungen beschrieben, die eine Koordinate im dreidimensionalen Phasenraum ueber die Zeit verfolgen:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Beschreibt die Rate der Konvektionsbewegung. Der Parameter &sigma; (Prandtl-Zahl) steht fuer das Verhaeltnis von Viskositaet zu Waermeleitfaehigkeit des Fluids.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Stellt den Temperaturunterschied zwischen auf- und absteigenden Konvektionsstroemen dar. &rho; (Rayleigh-Zahl) repraesentiert die konvektive Heizintensitaet.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Verfolgt die Verzerrung des vertikalen Temperaturprofils. &beta; ist das geometrische Aspektverhaeltnis der konvektiven Zelle.",
      ],
    },
    { type: 'title', text: "Schmetterlingseffekt: Sensitive Abhaengigkeit von Anfangsbedingungen", level: 3 },
    { type: 'paragraph', html: "Das charakteristische Merkmal chaotischer Systeme ist ihre <strong>sensitive Abhaengigkeit von den Anfangsbedingungen</strong>, bekannt als der <strong>Schmetterlingseffekt</strong>. In einem nicht-chaotischen System fuehrt eine kleine Anfangsabweichung zu einer proportional kleinen Endabweichung. In einem chaotischen System hingegen waechst der Abstand zwischen zwei beliebig nah startenden Trajektorien exponentiell." },
    { type: 'paragraph', html: "Dieser Simulator demonstriert dies, indem zwei Trajektorien (T1 in Cyan, T2 in Pink) mit einem winzigen Startwertunterschied (Stoerungsregler) parallel laufen. Anfangs verlaufen sie nahezu identisch und erscheinen als lila Linie. Nach kurzer Zeit verstaerken die nichtlinearen Terme den Unterschied, und die Pfade divergieren vollstaendig." },
    {
      type: 'table',
      headers: ["Parameter","Standardwert","Physikalische Bedeutung","Auswirkung bei Aenderung"],
      rows: [
        ["&sigma; (Sigma)","10.0","Prandtl-Zahl","Bestimmt die innere Reibung des Fluids. Hoehere Werte beschleunigen die Reaktion der Geschwindigkeitsaenderungen auf Temperaturgradienten."],
        ["&rho; (Rho)","28.0","Rayleigh-Zahl","Haupttreiber des Chaos. Unterhalb von &rho; = 1 ist der Ursprung der einzige stabile Punkt. Bei &rho; = 28 ist das System vollstaendig chaotisch."],
        ["&beta; (Beta)","8/3 (2.667)","Geometrisches Aspektverhaeltnis","Steuert das Breite-zu-Hoehe-Verhaeltnis der Konvektionszellen. Beeinflusst Massstab und Rotationsgeschwindigkeit der Orbits."],
      ],
    },
    { type: 'title', text: "Phasenraum, Seltsame Attraktoren und Fraktale", level: 3 },
    { type: 'paragraph', html: "In der klassischen Physik enden Trajektorien entweder in stabilen Punkten (Senken) oder wiederholen sich als Grenzzyklen. Das Lorenz-System tut weder das eine noch das andere: Die Bahn schlingt sich unendlich im dreidimensionalen Raum, ohne sich selbst zu schneiden. Diese unbegrenzte, sich nicht wiederholende Struktur ist in einem endlichen Volumen des Phasenraums eingeschlossen und bildet einen <strong>seltsamen Attraktor</strong>." },
    { type: 'paragraph', html: "Die Geometrie des Attraktors ist fraktal mit einer Hausdorff-Dimension von ca. 2.06. Der Attraktor ist damit mehr als eine zweidimensionale Flaeche, aber weniger als ein dreidimensionaler Koerper, und zeigt eine komplexe topologische Struktur." },
    { type: 'title', text: "Anwendungen der Chaostheorie in der Wissenschaft", level: 3 },
    { type: 'paragraph', html: "Die Erkenntnisse aus dem Lorenz-Attraktor gehen weit ueber die Wettervorhersage hinaus. Die Chaostheorie hat viele moderne Wissenschaftsgebiete beeinflusst:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologie:</strong> Setzte grundlegende Grenzen der Wettervorhersagbarkeit und fuehrte zu Ensemble-Prognosemethoden.",
      "<strong>Kryptographie:</strong> Die deterministische, aber unvorhersehbare Natur chaotischer Orbits wird zur Erzeugung sicherer Pseudozufallsschluessen und zur Verschluesselung verwendet.",
      "<strong>Kardiologie:</strong> Modelliert Herzrhythmen, wobei gesunde Herzen chaotische Eigenschaften aufweisen, waehrend periodische Rhythmen auf Pathologien hinweisen koennen.",
      "<strong>Ingenieurwesen:</strong> Hilft, stabile Strukturen zu entwerfen, indem chaotische Resonanz in Haengebruecken und mechanischen Systemen analysiert und vermieden wird.",
      ],
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
      description: description,
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
