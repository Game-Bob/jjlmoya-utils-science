import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'halfwaardetijd-radioactief-verval-calculator';
const title = 'Calculator voor halfwaardetijd en radioactief verval';
const description = 'Simuleer radioactief verval met echte isotopen, de halfwaardetijdformule, een stochastisch atoomveld, resterende hoeveelheid en relatieve activiteit.';

const howTo = [
  { name: 'Kies een isotoop', text: 'Begin met Koolstof-14, Jodium-131, Uranium-238, Technetium-99m of Radon-222. Elke preset laadt een realistische halfwaardetijd en de wetenschappelijke context waarin die vaak wordt gebruikt.' },
  { name: 'Stel monster en tijd in', text: 'Pas het aantal weergegeven atomen aan en schuif de tijd vooruit om te zien hoe de resterende fractie de exponentiele halfwaardetijdwet volgt.' },
  { name: 'Vergelijk exacte berekening en atomair toeval', text: 'Gebruik het deterministische resultaat als verwachte waarde en bekijk het atoomveld om te begrijpen waarom kleine monsters rond de theoretische curve schommelen.' },
  { name: 'Lees de activiteit', text: 'De activiteit daalt in dezelfde verhouding als de niet-vervallen kernen, dus de meter toont hoeveel stralingssnelheid overblijft ten opzichte van het beginmonster.' },
];

const faq = [
  { question: 'Wat betekent halfwaardetijd?', answer: 'Halfwaardetijd is de tijd waarin gemiddeld de helft van de instabiele kernen in een monster vervalt. Na een halfwaardetijd blijft 50% over, na twee 25% en na drie 12,5%.' },
  { question: 'Waarom klopt het atoomveld niet altijd precies met het percentage?', answer: 'Radioactief verval is probabilistisch. De formule geeft de verwachte fractie voor een zeer groot monster, terwijl het veld individuele atomen met willekeurige drempels simuleert. Kleine monsters tonen vanzelf statistische ruis.' },
  { question: 'Is de activiteitsmeter hetzelfde als de resterende atomen?', answer: 'Voor een enkele isotoop is activiteit evenredig met het aantal niet-vervallen kernen. Als 30% van de atomen overblijft, is de momentane activiteit ook ongeveer 30% van de beginactiviteit.' },
  { question: 'Kan deze calculator worden gebruikt voor koolstofdatering?', answer: 'Ja, voor conceptuele berekeningen. Koolstof-14-datering vergelijkt de resterende activiteit met levend materiaal, maar echte laboratoriumdatering corrigeert ook kalibratiecurven, besmetting en monstervoorbereiding.' },
  { question: 'Vervalt elke isotoop naar een enkel stabiel product?', answer: 'Niet altijd. Sommige isotopen vervallen via reeksen met meerdere dochterproducten. Deze tool modelleert de halfwaardetijd van de moederisotoop, de belangrijkste grootheid voor resterende moederkernen en activiteit.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotoop',
    sampleAtoms: 'Atomen in monster',
    elapsedTime: 'Verstreken tijd',
    halfLife: 'Halfwaardetijd',
    remaining: 'Resterend',
    decayed: 'Vervallen',
    activity: 'Relatieve activiteit',
    timeUnit: 'Tijdseenheid',
    expectedCurve: 'Verwachte curve',
    atomField: 'Atoomveld',
    presetUse: 'Gebruik',
    oneHalfLife: '1 halfwaardetijd',
    twoHalfLives: '2 halfwaardetijden',
    fourHalfLives: '4 halfwaardetijden',
    custom: 'Aangepast',
    liveAtoms: 'Actieve atomen',
    decayedAtoms: 'Vervallen atomen',
    resetSeed: 'Nieuw atoompatroon',
  },
  seo: [
    {
      type: 'title',
      text: 'Halfwaardetijdcalculator: resterende atomen, activiteit en voorbeelden van isotopen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze calculator voor radioactief verval om te schatten hoeveel van een instabiele isotoop overblijft na een gekozen tijd. De pagina sluit aan op veelvoorkomende zoekvragen: de formule vinden, die toepassen op echte isotopen, resterende moederkernen vergelijken met vervallen kernen en begrijpen waarom activiteit afneemt.',
    },
    {
      type: 'paragraph',
      html: 'De tool combineert twee complementaire modellen. De numerieke resultaten gebruiken de standaard exponentiële vervalvergelijking, terwijl het atoomveld individuele kernen met stochastische drempels simuleert.',
    },
    {
      type: 'title',
      text: 'Formule voor radioactief verval gebruikt door de calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De formule is <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> is het startaantal moederkernen, <strong>N(t)</strong> het verwachte aantal na tijd <strong>t</strong>, en <strong>T1/2</strong> de halfwaardetijd. De verhouding <strong>t / T1/2</strong> telt hoeveel halfwaardetijden zijn verstreken.',
    },
    {
      type: 'paragraph',
      html: 'Begint een monster bijvoorbeeld met 1.000 moederkernen en verstrijken twee halfwaardetijden, dan blijft verwacht 1.000 x (1/2)^2 = 250 kernen over. Het vervallen aantal is 750 kernen.',
    },
    {
      type: 'table',
      headers: ['Verstreken tijd', 'Formulefactor', 'Moederkernen over', 'Relatieve activiteit'],
      rows: [
        ['0 halfwaardetijden', '(1/2)^0', '100%', '100%'],
        ['1 halfwaardetijd', '(1/2)^1', '50%', '50%'],
        ['2 halfwaardetijden', '(1/2)^2', '25%', '25%'],
        ['3 halfwaardetijden', '(1/2)^3', '12,5%', '12,5%'],
        ['5 halfwaardetijden', '(1/2)^5', '3,125%', '3,125%'],
        ['10 halfwaardetijden', '(1/2)^10', '0,098%', '0,098%'],
      ],
    },
    {
      type: 'title',
      text: 'Resterende activiteit berekenen na een halfwaardetijd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor een enkele moederisotoop is activiteit evenredig met het aantal niet-vervallen kernen. Als 25% van de moederisotoop overblijft, is de activiteit ook ongeveer 25% van de beginactiviteit.',
    },
    {
      type: 'paragraph',
      html: 'Deze verhouding is van groot belang in de nucleaire geneeskunde en stralingsbescherming.',
    },
    {
      type: 'title',
      text: 'Voorbeelden: Koolstof-14, Jodium-131, Technetium-99m, Uranium-238 en Radon-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Isotoop', 'Geschatte halfwaardetijd', 'Typisch gebruik', 'Wat het resultaat laat zien'],
      rows: [
        ['Koolstof-14', '5.730 jaar', 'Radiokoolstofdatering', 'Resterende Koolstof-14-activiteit in organisch materiaal.'],
        ['Jodium-131', '8,02 dagen', 'Medische therapie', 'Snelheid waarmee activiteit in dagen daalt.'],
        ['Technetium-99m', '6,01 uur', 'Diagnostische beeldvorming', 'Waarom medische activiteit binnen een werkdag daalt.'],
        ['Uranium-238', '4,47 miljard jaar', 'Geologische datering', 'Waarom langlevende isotopen meetbaar blijven op geologische schaal.'],
        ['Radon-222', '3,82 dagen', 'Binnenstraling', 'Verandering van een gasvormige bron over dagen.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Deze voorbeelden dekken verschillende tijdsschalen en toepassingen af.',
    },
    {
      type: 'title',
      text: 'De stochastische atoomsimulatie lezen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het atoomveld is stochastisch gemodelleerd. Bij kleine monsters schommelen de resultaten rond de theoretische waarde.',
    },
    {
      type: 'paragraph',
      html: 'De gladde curve verschijnt pas wanneer vele onafhankelijke toevallige gebeurtenissen samen worden geteld.',
    },
    {
      type: 'title',
      text: 'Toepassingen van de halfwaardetijdcalculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Natuurkundeonderwijs:</strong> berekening van resterende kernen en koppeling aan visueel model.',
        '<strong>Kernchemie:</strong> vergelijking van isotoopstabiliteit en vervalsnelheid.',
        '<strong>Radiokoolstofdatering:</strong> begrip van verval in organische monsters.',
        '<strong>Medische isotopen:</strong> planning van diagnostische beeldvorming.',
        '<strong>Stralingsbescherming:</strong> schatting van activiteitsafname in de tijd.',
      ],
    },
    {
      type: 'title',
      text: 'Belangrijke beperkingen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze calculator modelleert de moederisotoop met een enkele halfwaardetijd.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik de resultaten als een didactisch model en wetenschappelijke schatting.',
    },
    { type: 'paragraph', html: 'Deze uitleg verduidelijkt de aannames van het model en laat zien hoe parameters het resultaat veranderen. Wijzig telkens één waarde en vergelijk meerdere runs, zodat elk verschil aan een herkenbare oorzaak kan worden gekoppeld. De visualisatie is een didactische benadering; een echt systeem bevat meer variabelen, meetonzekerheden en randvoorwaarden. Gebruik de uitkomst om ordes van grootte te begrijpen, vragen te formuleren en scenario\'s te vergelijken. Controleer voor een praktische beslissing of wetenschappelijke analyse altijd primaire gegevens, eenheden en gespecialiseerde bronnen. Noteer de instellingen om een berekening te herhalen en de beperkingen te bespreken.' },
    { type: 'paragraph', html: 'Herhaal de berekening met dezelfde instellingen en wijzig daarna één invoer tegelijk. Noteer beginwaarden, rekenregels en gebruikte grenzen, zodat een patroon in het model niet wordt verward met numerieke variatie of toeval. De uitkomst is didactisch bedoeld en moet samen met de aannames en beperkingen worden gelezen. Voor echte metingen of ontwerpen zijn aanvullende gegevens en specialistische controle nodig.' },
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

