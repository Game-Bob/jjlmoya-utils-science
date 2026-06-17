import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatore-emivita-decadimento-radioattivo';
const title = 'Calcolatore di emivita e decadimento radioattivo';
const description = 'Simula il decadimento radioattivo con isotopi reali, formula dell emivita, campo atomico stocastico, quantita residua e attivita relativa.';

const howTo = [
  { name: 'Scegli un isotopo', text: 'Inizia con Carbonio-14, Iodio-131, Uranio-238, Tecnezio-99m o Radon-222. Ogni preset carica un emivita realistica e il contesto scientifico in cui viene usato piu spesso.' },
  { name: 'Imposta campione e tempo', text: 'Regola il numero di atomi rappresentati e fai avanzare il tempo per vedere come la frazione rimanente segue la legge esponenziale dell emivita.' },
  { name: 'Confronta calcolo esatto e casualita atomica', text: 'Usa il risultato deterministico come valore atteso e osserva il campo atomico per capire perche i campioni piccoli oscillano attorno alla curva teorica.' },
  { name: 'Interpreta l attivita', text: 'L attivita cala nella stessa proporzione dei nuclei non decaduti, quindi il misuratore mostra quanta velocita di radiazione resta rispetto al campione iniziale.' },
];

const faq = [
  { question: 'Che cosa significa emivita?', answer: 'L emivita e il tempo necessario perche, in media, meta dei nuclei instabili di un campione decada. Dopo una emivita resta il 50%, dopo due resta il 25% e dopo tre resta il 12,5%.' },
  { question: 'Perche il campo atomico non coincide sempre con la percentuale esatta?', answer: 'Il decadimento radioattivo e probabilistico. La formula fornisce la frazione attesa per un campione molto grande, mentre il campo simula atomi individuali con soglie casuali. Nei piccoli campioni il rumore statistico e naturale.' },
  { question: 'Il misuratore di attivita equivale agli atomi rimasti?', answer: 'Per un singolo isotopo, l attivita e proporzionale al numero di nuclei non decaduti. Se resta il 30% degli atomi, anche l attivita istantanea e circa il 30% di quella iniziale.' },
  { question: 'Questo calcolatore puo essere usato per la datazione al radiocarbonio?', answer: 'Si, per calcoli concettuali. La datazione con Carbonio-14 confronta l attivita residua con quella del materiale vivente, ma una datazione reale corregge anche curve di calibrazione, contaminazione e preparazione del campione.' },
  { question: 'Ogni isotopo decade in un solo prodotto stabile?', answer: 'Non sempre. Alcuni isotopi decadono attraverso catene con piu prodotti figli. Questo strumento modella l emivita dell isotopo padre, la grandezza principale per stimare nuclei padre residui e attivita.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotopo',
    sampleAtoms: 'Atomi del campione',
    elapsedTime: 'Tempo trascorso',
    halfLife: 'Emivita',
    remaining: 'Residuo',
    decayed: 'Decaduto',
    activity: 'Attivita relativa',
    timeUnit: 'Unita di tempo',
    expectedCurve: 'Curva attesa',
    atomField: 'Campo atomico',
    presetUse: 'Uso tipico',
    oneHalfLife: '1 emivita',
    twoHalfLives: '2 emivite',
    fourHalfLives: '4 emivite',
    custom: 'Personalizzato',
    liveAtoms: 'Atomi attivi',
    decayedAtoms: 'Atomi decaduti',
    resetSeed: 'Nuovo schema atomico',
  },
  seo: [
    { type: 'title', text: 'Calcolatore di emivita radioattiva: atomi residui, attivita ed esempi di isotopi', level: 2 },
    { type: 'paragraph', html: 'Usa questo calcolatore di decadimento radioattivo per stimare quanto resta di un isotopo instabile dopo un certo tempo. Risponde alle ricerche piu comuni sull emivita: trovare la formula, applicarla a isotopi reali, confrontare nuclei padre residui e decaduti e capire perche l attivita diminuisce con l eta del campione.' },
    { type: 'paragraph', html: 'Lo strumento combina due modelli. I risultati numerici usano l equazione esponenziale del decadimento, mentre il campo atomico simula nuclei individuali con soglie stocastiche. Cosi funziona sia come calcolatore rapido sia come spiegazione visiva del perche il decadimento e prevedibile in massa ma casuale per il singolo atomo.' },
    { type: 'title', text: 'Formula del decadimento radioattivo usata', level: 3 },
    { type: 'paragraph', html: 'La formula e <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> e il numero iniziale di nuclei padre, <strong>N(t)</strong> e il numero atteso dopo il tempo <strong>t</strong>, e <strong>T1/2</strong> e l emivita. L esponente <strong>t / T1/2</strong> conta quante emivite sono trascorse.' },
    { type: 'paragraph', html: 'Se un campione parte da 1.000 nuclei padre e passano due emivite, il residuo atteso e 1.000 x (1/2)^2 = 250 nuclei. I nuclei decaduti sono 750. Lo stesso calcolo vale per secondi, ore, giorni, anni o miliardi di anni.' },
    { type: 'table', headers: ['Tempo trascorso', 'Fattore', 'Nuclei padre residui', 'Attivita relativa'], rows: [['0 emivite', '(1/2)^0', '100%', '100%'], ['1 emivita', '(1/2)^1', '50%', '50%'], ['2 emivite', '(1/2)^2', '25%', '25%'], ['3 emivite', '(1/2)^3', '12,5%', '12,5%'], ['5 emivite', '(1/2)^5', '3,125%', '3,125%'], ['10 emivite', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Come calcolare l attivita residua', level: 3 },
    { type: 'paragraph', html: 'Per un singolo isotopo padre, l attivita e proporzionale al numero di nuclei non decaduti. Se resta il 25% dell isotopo padre, anche l attivita di quell isotopo e circa il 25% di quella iniziale.' },
    { type: 'paragraph', html: 'Questa relazione e importante in medicina nucleare e radioprotezione. Il Tecnezio-99m perde attivita in ore, mentre lo Iodio-131 resta rilevante per giorni, influenzando terapia, monitoraggio e indicazioni di esposizione.' },
    { type: 'title', text: 'Esempi: Carbonio-14, Iodio-131, Tecnezio-99m, Uranio-238 e Radon-222', level: 3 },
    { type: 'table', headers: ['Isotopo', 'Emivita approssimativa', 'Uso comune', 'Che cosa mostra il risultato'], rows: [['Carbonio-14', '5.730 anni', 'Datazione al radiocarbonio', 'Quanta attivita di Carbonio-14 padre resta in materiale un tempo vivente.'], ['Iodio-131', '8,02 giorni', 'Terapia medica e incidenti nucleari', 'Quanto rapidamente cala l attivita nell arco di giorni.'], ['Tecnezio-99m', '6,01 ore', 'Diagnostica per immagini', 'Perche l attivita utile scompare durante una giornata clinica.'], ['Uranio-238', '4,47 miliardi di anni', 'Datazione geologica', 'Perche isotopi molto longevi restano misurabili nella storia della Terra.'], ['Radon-222', '3,82 giorni', 'Radiazione indoor e catene di decadimento', 'Come cambia in pochi giorni una fonte gassosa di esposizione.']] },
    { type: 'paragraph', html: 'Questi esempi coprono scale temporali e intenzioni diverse: archeologia per Carbonio-14, attivita medica per Iodio-131 e Tecnezio-99m, esposizione ambientale per Radon-222 e tempo geologico per Uranio-238.' },
    { type: 'title', text: 'Come leggere la simulazione atomica stocastica', level: 3 },
    { type: 'paragraph', html: 'Il campo atomico animato e volutamente stocastico. L equazione da il valore atteso per un grande campione, ma i singoli nuclei decadono casualmente. Nei piccoli campioni il risultato puo stare un po sopra o sotto il 50% dopo una emivita; nei campioni grandi si avvicina alla curva teorica.' },
    { type: 'paragraph', html: 'Emivita non significa che ogni atomo aspetti un timer e poi meta degli atomi sparisca insieme. Ogni nucleo instabile ha una probabilita costante di decadere per unita di tempo. La curva liscia emerge contando molti eventi casuali indipendenti.' },
    { type: 'title', text: 'Usi del calcolatore', level: 3 },
    { type: 'list', items: ['<strong>Fisica a scuola:</strong> calcolare i nuclei padre residui dopo un certo numero di emivite.', '<strong>Chimica e scienza nucleare:</strong> confrontare stabilita, velocita di decadimento e attivita relativa.', '<strong>Intuizione sul radiocarbonio:</strong> capire perche i campioni antichi contengono meno Carbonio-14.', '<strong>Pianificazione di isotopi medici:</strong> vedere perche le emivite brevi sono utili nell imaging.', '<strong>Educazione alla radioprotezione:</strong> stimare il calo di attivita senza confondere emivita e scomparsa immediata.'] },
    { type: 'title', text: 'Limiti importanti', level: 3 },
    { type: 'paragraph', html: 'Questo calcolatore modella l isotopo padre con una sola emivita. Misure reali possono richiedere correzioni per efficienza del rivelatore, radiazione di fondo, rapporti di ramificazione, prodotti figli, eliminazione biologica, forma chimica, schermatura e curve di calibrazione.' },
    { type: 'paragraph', html: 'Usa il risultato come stima scientifica chiara e modello didattico, non come sostituto di indicazioni di radioprotezione, istruzioni mediche, dosimetria o analisi di datazione di laboratorio.' },
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

