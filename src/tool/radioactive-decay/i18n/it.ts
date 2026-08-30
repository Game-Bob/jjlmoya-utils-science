import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calcolatore-emivita-decadimento-radioattivo';
const title = 'Calcolatore di emivita e decadimento radioattivo';
const description = 'Simula il decadimento radioattivo con isotopi reali, formula dell\'emivita, campo atomico stocastico, quantità residua e attività relativa.';

const howTo = [
  { name: 'Scegli un isotopo', text: 'Inizia con Carbonio-14, Iodio-131, Uranio-238, Tecnezio-99m o Radon-222. Ogni preset carica un\'emivita realistica e il contesto scientifico in cui viene usato più spesso.' },
  { name: 'Imposta campione e tempo', text: 'Regola il numero di atomi rappresentati e fai avanzare il tempo per vedere come la frazione rimanente segue la legge esponenziale dell\'emivita.' },
  { name: 'Confronta calcolo esatto e casualità atomica', text: 'Usa il risultato deterministico come valore atteso e osserva il campo atomico per capire perché i campioni piccoli oscillano attorno alla curva teorica.' },
  { name: 'Interpreta l\'attività', text: 'L\'attività cala nella stessa proporzione dei nuclei non decaduti, quindi il misuratore mostra quanta velocità di radiazione resta rispetto al campione iniziale.' },
];

const faq = [
  { question: 'Che cosa significa emivita?', answer: 'L\'emivita è il tempo necessario affinché, in media, metà dei nuclei instabili di un campione decada. Dopo un\'emivita resta il 50%, dopo due resta il 25% e dopo tre resta il 12,5%.' },
  { question: 'Perché il campo atomico non coincide sempre con la percentuale esatta?', answer: 'Il decadimento radioattivo è probabilistico. La formula fornisce la frazione attesa per un campione molto grande, mentre il campo simula atomi individuali con soglie casuali. Nei piccoli campioni il rumore statistico è naturale.' },
  { question: 'Il misuratore di attività equivale agli atomi rimasti?', answer: 'Per un singolo isotopo, l\'attività è proporzionale al numero di nuclei non decaduti. Se resta il 30% degli atomi, anche l\'attività istantanea è circa il 30% di quella iniziale.' },
  { question: 'Questo calcolatore può essere usato per la datazione al radiocarbonio?', answer: 'Sì, per calcoli concettuali. La datazione con Carbonio-14 confronta l\'attività residua con quella del materiale vivente, ma una datazione reale corregge anche curve di calibrazione, contaminazione e preparazione del campione.' },
  { question: 'Ogni isotopo decade in un solo prodotto stabile?', answer: 'Non sempre. Alcuni isotopi decadono attraverso catene con più prodotti figli. Questo strumento modella l\'emivita dell\'isotopo padre, la grandezza principale per stimare nuclei padre residui e attività.' },
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
    activity: 'Attività relativa',
    timeUnit: 'Unità di tempo',
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
    { type: 'title', text: 'Calcolatore di emivita radioattiva: atomi residui, attività ed esempi di isotopi', level: 2 },
    { type: 'paragraph', html: 'Usa questo calcolatore di decadimento radioattivo per stimare quanto resta di un isotopo instabile dopo un certo tempo. Risponde alle ricerche più comuni sull\'emivita: trovare la formula, applicarla a isotopi reali, confrontare nuclei padre residui e decaduti e capire perché l\'attività diminuisce con l\'età del campione.' },
    { type: 'paragraph', html: 'Lo strumento combina due modelli complementari: il risultato numerico deterministico usa la formula esponenziale, mentre il campo atomico simula la natura stocastica del decadimento.' },
    { type: 'title', text: 'Formula del decadimento radioattivo utilizzata', level: 3 },
    { type: 'paragraph', html: 'La formula è <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> è il numero iniziale di nuclei padre, <strong>N(t)</strong> è il numero atteso dopo il tempo <strong>t</strong>, e <strong>T1/2</strong> è l\'emivita. L\'esponente <strong>t / T1/2</strong> indica quante emivite sono trascorse.' },
    { type: 'paragraph', html: 'Ad esempio, se un campione parte con 1.000 nuclei padre e trascorrono due emivite, la quantità residua attesa è 1.000 x (1/2)^2 = 250 nuclei. La quantità decaduta è pari a 750 nuclei.' },
    { type: 'table', headers: ['Tempo trascorso', 'Fattore', 'Nuclei padre residui', 'Attività relativa'], rows: [['0 emivite', '(1/2)^0', '100%', '100%'], ['1 emivita', '(1/2)^1', '50%', '50%'], ['2 emivite', '(1/2)^2', '25%', '25%'], ['3 emivite', '(1/2)^3', '12,5%', '12,5%'], ['5 emivite', '(1/2)^5', '3,125%', '3,125%'], ['10 emivite', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Come calcolare l\'attività residua dopo un\'emivita', level: 3 },
    { type: 'paragraph', html: 'Per un singolo isotopo padre, l\'attività è proporzionale al numero di nuclei non decaduti. Se rimane il 25% dell\'isotopo padre, l\'attività è circa il 25% di quella iniziale.' },
    { type: 'paragraph', html: 'Questa relazione è fondamentale in medicina nucleare e nella radioprotezione.' },
    { type: 'title', text: 'Esempi: Carbonio-14, Iodio-131, Tecnezio-99m, Uranio-238 e Radon-222', level: 3 },
    { type: 'table', headers: ['Isotopo', 'Emivita approssimativa', 'Uso comune', 'Significato del risultato'], rows: [['Carbonio-14', '5.730 anni', 'Datazione al radiocarbonio', 'Attività C-14 residua in materiale organico.'], ['Iodio-131', '8,02 giorni', 'Terapia medica', 'Calo dell\'attività in pochi giorni dopo il trattamento.'], ['Tecnezio-99m', '6,01 ore', 'Diagnostica per immagini', 'Perché l\'attività utile si riduce nell\'arco di una giornata clinica.'], ['Uranio-238', '4,47 miliardi di anni', 'Datazione geologica', 'Perché gli isotopi a vita lunghissima restano misurabili su scale geologiche.'], ['Radon-222', '3,82 giorni', 'Esposizione indoor', 'Evoluzione di una sorgente gassosa in pochi giorni.']] },
    { type: 'paragraph', html: 'Questi esempi coprono diverse scale temporali e applicazioni scientifiche.' },
    { type: 'title', text: 'Come leggere la simulazione atomica stocastica', level: 3 },
    { type: 'paragraph', html: 'Il campo atomico è modellato in modo stocastico. Per campioni piccoli, i risultati oscillano attorno al valore teorico.' },
    { type: 'paragraph', html: 'La curva regolare emerge solo quando si conta un numero elevato di eventi casuali indipendenti.' },
    { type: 'title', text: 'Casi d\'uso del calcolatore di emivita', level: 3 },
    { type: 'list', items: ['<strong>Didattica della fisica:</strong> calcolo dei nuclei residui e collegamento a un modello visivo.', '<strong>Chimica nucleare:</strong> confronto della stabilità degli isotopi.', '<strong>Datazione al radiocarbonio:</strong> comprensione del decadimento nei reperti.', '<strong>Pianificazione medica:</strong> gestione degli isotopi per diagnostica.', '<strong>Radioprotezione:</strong> stima della riduzione dell\'attività nel tempo.'] },
    { type: 'title', text: 'Limitazioni importanti', level: 3 },
    { type: 'paragraph', html: 'Questo calcolatore modella l\'isotopo padre con una singola emivita.' },
    { type: 'paragraph', html: 'Usa i risultati come modello didattico e stima scientifica.' },
    { type: 'paragraph', html: 'Inserisci la quantità iniziale, l\'emivita e il tempo trascorso per confrontare la frazione residua. Il decadimento è esponenziale, non lineare: dopo ogni emivita rimane metà dei nuclei presenti all\'inizio dell\'intervallo. L\'attività indica il numero di decadimenti per unità di tempo e segue lo stesso andamento nel modello semplice. Per un campione reale usa i dati dell\'isotopo e le relative incertezze riportate da fonti scientifiche. Catene di decadimento, miscele di isotopi e limiti del rivelatore richiedono modelli aggiuntivi. Il calcolatore serve a capire formula, proporzioni e scale temporali, non sostituisce una misura radiometrica o le procedure di sicurezza del laboratorio.' },
    { type: 'paragraph', html: 'Questa spiegazione chiarisce le ipotesi del modello e mostra come i parametri cambiano il risultato. Modifica una sola variabile alla volta e confronta più esecuzioni, così ogni variazione può essere collegata a una causa riconoscibile. La visualizzazione è un\'approssimazione didattica: un sistema reale comprende più variabili, incertezze di misura e condizioni al contorno. Usa quindi il risultato per capire gli ordini di grandezza, porre domande e confrontare scenari. Per una decisione pratica o un\'analisi scientifica, verifica sempre dati primari, unità e fonti specialistiche. Annotare le impostazioni permette di ripetere il calcolo e discutere con chiarezza i suoi limiti.' },
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
