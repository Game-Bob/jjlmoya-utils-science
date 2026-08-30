import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'halveringstid-radioaktivt-sonderfall-kalkylator';
const title = 'Kalkylator for halveringstid och radioaktivt sonderfall';
const description = 'Simulera radioaktivt sonderfall med verkliga isotoper, halveringstidsformel, stokastiskt atomfalt, aterstaende mangd och relativ aktivitet.';

const howTo = [
  { name: 'Valj isotop', text: 'Börja med kol-14, jod-131, uran-238, teknetium-99m eller radon-222. Varje preset laddar en realistisk halveringstid och ett vanligt vetenskapligt sammanhang.' },
  { name: 'Stall in provstorlek och tid', text: 'Justera antalet atomer som visas och flytta tiden framat for att se hur den aterstaende andelen foljer halveringstidens exponentiella lag.' },
  { name: 'Jamfor exakt matematik och atomart slumpbeteende', text: 'Anvand det deterministiska resultatet som forvantat varde och studera atomfaltet for att se varfor sma prov varierar runt den teoretiska kurvan.' },
  { name: 'Tolka aktiviteten', text: 'Aktiviteten minskar i samma proportion som de icke sonderfallna karnorna, sa mataren visar hur stor del av den ursprungliga stralningshastigheten som finns kvar.' },
];

const faq = [
  { question: 'Vad betyder halveringstid?', answer: 'Halveringstid ar tiden det tar for halften av de instabila karnorna i ett prov att sonderfalla i genomsnitt. Efter en halveringstid aterstar 50%, efter tva 25% och efter tre 12,5%.' },
  { question: 'Varfor stammer atomfaltet inte alltid exakt med procenten?', answer: 'Radioaktivt sonderfall ar probabilistiskt. Formeln ger den forvantade andelen for ett mycket stort prov, medan fältet simulerar enskilda atomer med slumpmassiga trosklar.' },
  { question: 'Ar aktivitetsmataren samma sak som aterstaende atomer?', answer: 'For en enda isotop ar aktiviteten proportionell mot antalet icke sonderfallna karnor. Om 30% av atomerna finns kvar ar aktiviteten ocksa ungefar 30% av startaktiviteten.' },
  { question: 'Kan kalkylatorn anvandas for kol-14-datering?', answer: 'Ja, som begreppslig berakning. Verklig laboratoriedatering korrigerar ocksa kalibreringskurvor, kontaminering och provberedning.' },
  { question: 'Sonderfaller varje isotop till en enda stabil produkt?', answer: 'Inte alltid. Vissa isotoper sonderfaller via kedjor med flera dotterprodukter. Verktyget modellerar moderisotopens halveringstid.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotop',
    sampleAtoms: 'Atomer i provet',
    elapsedTime: 'Forfluten tid',
    halfLife: 'Halveringstid',
    remaining: 'Aterstar',
    decayed: 'Sonderfallit',
    activity: 'Relativ aktivitet',
    timeUnit: 'Tidsenhet',
    expectedCurve: 'Forvantad kurva',
    atomField: 'Atomfalt',
    presetUse: 'Vanlig anvandning',
    oneHalfLife: '1 halveringstid',
    twoHalfLives: '2 halveringstider',
    fourHalfLives: '4 halveringstider',
    custom: 'Anpassad',
    liveAtoms: 'Aktiva atomer',
    decayedAtoms: 'Sonderfallna atomer',
    resetSeed: 'Nytt atommonster',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkylator för radioaktiv halveringstid: återstående atomer, aktivitet och exempel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Använd denna kalkylator för radioaktivt sönderfall för att uppskatta hur mycket av en instabil isotop som återstår efter en viss tid. Den täcker de vanligaste sökintentionerna: hitta formeln för halveringstid, tillämpa den på verkliga isotoper, jämföra återstående moderkärnor med sönderfallna kärnor och förstå varför aktiviteten minskar över tid.',
    },
    {
      type: 'paragraph',
      html: 'Verktyget kombinerar två komplementära modeller. De numeriska resultaten använder den standardiserade exponentiella sönderfallsekvationen, medan atomfältet simulerar enskilda kärnor med stokastiska trösklar.',
    },
    {
      type: 'title',
      text: 'Formel för radioaktivt sönderfall som används i kalkylatorn',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Formeln är <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> är det ursprungliga antalet moderkärnor, <strong>N(t)</strong> är det förväntade antalet som återstår efter tiden <strong>t</strong>, och <strong>T1/2</strong> är halveringstiden.',
    },
    {
      type: 'paragraph',
      html: 'Om ett prov till exempel startar med 1 000 moderkärnor och två halveringstider passerar, är den förväntade återstående mängden 1 000 x (1/2)^2 = 250 kärnor. Den sönderfallna mängden är 750 kärnor.',
    },
    {
      type: 'table',
      headers: ['Förfluten tid', 'Formelfaktor', 'Återstående moderkärnor', 'Relativ aktivitet'],
      rows: [
        ['0 halveringstider', '(1/2)^0', '100%', '100%'],
        ['1 halveringstid', '(1/2)^1', '50%', '50%'],
        ['2 halveringstider', '(1/2)^2', '25%', '25%'],
        ['3 halveringstider', '(1/2)^3', '12,5%', '12,5%'],
        ['5 halveringstider', '(1/2)^5', '3,125%', '3,125%'],
        ['10 halveringstider', '(1/2)^10', '0,098%', '0,098%'],
      ],
    },
    {
      type: 'title',
      text: 'Hur man beräknar återstående aktivitet efter en halveringstid',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För en enskild moderisotop är aktiviteten proportionell mot antalet osönderfallna kärnor. Om 25 % av moderisotopen återstår är aktiviteten också cirka 25 % av ursprunglig aktivitet.',
    },
    {
      type: 'paragraph',
      html: 'Detta samband är av central betydelse inom nukleärmedicin och strålskydd.',
    },
    {
      type: 'title',
      text: 'Exempel: Kol-14, Jod-131, Teknetium-99m, Uran-238 och Radon-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Isotop', 'Ungefärlig halveringstid', 'Vanlig användning', 'Vad resultatet visar'],
      rows: [
        ['Kol-14', '5 730 år', 'Kol-14-datering', 'Återstående C-14-aktivitet i organiskt material.'],
        ['Jod-131', '8,02 dagar', 'Medicinsk terapi', 'Minskning av aktivitet under dagar efter behandling.'],
        ['Teknetium-99m', '6,01 timmar', 'Diagnostisk bildtagning', 'Varför medicinsk aktivitet minskar under en klinisk arbetsdag.'],
        ['Uran-238', '4,47 miljarder år', 'Geologisk datering', 'Varför långlivade isotoper förblir mätbara på geologiska tidsskalor.'],
        ['Radon-222', '3,82 dagar', 'Inomhusstrålning', 'Förändring av en gasformig exponeringskälla över dagar.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Dessa exempel täcker olika tidsskalor och vetenskapliga tillämpningar.',
    },
    {
      type: 'title',
      text: 'Hur man läser den stokastiska atomsimuleringen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Atomfältet är modellerat stokastiskt. För små prover kommer resultaten att fluktuera runt det teoretiska värdet.',
    },
    {
      type: 'paragraph',
      html: 'Den jämna kurvan framträder först när många oberoende slumpmässiga händelser räknas samman.',
    },
    {
      type: 'title',
      text: 'Användningsområden för kalkylatorn',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Fysikundervisning:</strong> beräkning av återstående kärnor och koppling till en visuell modell.',
        '<strong>Kärnkemi:</strong> jämförelse av isotopstabilitet och sönderfallshastighet.',
        '<strong>Radiokoldatering:</strong> förståelse för sönderfall i organiska prover.',
        '<strong>Nukleärmedicin:</strong> planering av bilddiagnostik med kortlivade isotoper.',
        '<strong>Strålskydd:</strong> uppskattning av aktivitesminskning över tid.',
      ],
    },
    {
      type: 'title',
      text: 'Viktiga begränsningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Denna kalkylator modellerar moderisotopen med en enskild halveringstid.',
    },
    {
      type: 'paragraph',
      html: 'Använd resultaten som en pedagogisk modell och vetenskaplig uppskattning.',
    },
    { type: 'paragraph', html: 'Den här förklaringen tydliggör modellens antaganden och visar hur parametrarna ändrar resultatet. Ändra en variabel i taget och jämför flera körningar så att varje skillnad kan kopplas till en tydlig orsak. Visualiseringen är en pedagogisk approximation: ett verkligt system innehåller fler variabler, mätosäkerheter och randvillkor. Använd resultatet för att förstå storleksordningar, ställa frågor och jämföra scenarier. För praktiska beslut eller vetenskaplig analys måste primärdata, enheter och relevanta källor alltid kontrolleras. Spara inställningarna om du vill upprepa beräkningen och diskutera modellens begränsningar.' },
    { type: 'paragraph', html: 'Upprepa beräkningen med samma inställningar och ändra sedan en indata åt gången. Skriv ned startvärden, beräkningsregler och gränser så att modellens mönster kan skiljas från numerisk variation eller slump. Resultatet är pedagogiskt och ska läsas tillsammans med antaganden och begränsningar. Verkliga mätningar eller konstruktioner kräver ytterligare data och sakkunnig granskning.' },
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

