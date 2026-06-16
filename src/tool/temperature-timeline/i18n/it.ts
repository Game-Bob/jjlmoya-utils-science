import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-pianeta';
const description = 'Esplora la storia della temperatura media della Terra attraverso le ere geologiche.';
const title = 'Cronologia della Temperatura Media del Pianeta';

const howTo = [
  {
    name: 'Seleziona un era',
    text: 'Fai clic su una tacca sul righello di scala.',
  },
  {
    name: 'Controlla la temperatura',
    text: 'Leggi la temperatura media globale.',
  },
  {
    name: 'Osserva il pianeta',
    text: 'Guarda la tela reagire allo stato termico.',
  },
];

const faq = [
  {
    "question": "La Terra e stata piu calda in passato rispetto ad oggi?",
    "answer": "Si, la Terra ha vissuto climi notevolmente piu caldi di quello attuale. Durante il Mesozoico (l era dei dinosauri) e il primo Eocene, il pianeta si trovava in uno stato di serra senza calotte polari, e le temperature medie globali superavano i 22 gradi, circa 7-8 gradi in piu rispetto alla media odierna. Tuttavia, le transizioni verso questi periodi sono avvenute su scale temporali di milioni di anni, consentendo l adattamento evolutivo."
  },
  {
    "question": "Cosa ha causato il fenomeno della Terra a Palla di Neve?",
    "answer": "La Terra a Palla di Neve (glaciazione globale) si e verificata principalmente durante il Neoproterozoico (circa 700 milioni di anni fa). E stata innescata da un estrema riduzione dei gas serra a causa dell accelerazione del disfacimento chimico delle rocce silicatiche in seguito alla frammentazione del supercontinente Rodinia. Il ghiaccio si estese dai poli all equatore, riflettendo la radiazione solare (effetto albedo) e intrappolando il pianeta in un ciclo di gelo globale interrotto solo dopo milioni di anni di accumulo di CO2 vulcanica."
  },
  {
    "question": "In che modo la Terra regola la sua temperatura a lungo termine?",
    "answer": "La Terra possiede un termostato naturale controllato dal ciclo geologico del carbonio, regolato principalmente dalla tettonica delle placche e dal disfacimento dei silicati. Quando il pianeta si riscalda, la pioggia acida reagisce piu rapidamente con le rocce silicatiche, sottraendo CO2 all atmosfera e depositandola sul fondo oceanico sotto forma di carbonati, riducendo l effetto serra. Se il pianeta si raffredda, il disfacimento diminuisce ma l attivita vulcanica continua a rilasciare CO2, riscaldando gradualmente il pianeta."
  },
  {
    "question": "In che modo il cambiamento climatico dell Antropocene differisce dal passato geologico?",
    "answer": "La differenza fondamentale risiede nella velocita del cambiamento. Mentre le transizioni climatiche naturali nel passato geologico si verificavano in genere nel corso di decine di migliaia o milioni di anni (lasciando margine per la migrazione e l evoluzione biologica), il riscaldamento dell Antropocene sta avvenendo nel giro di pochi decenni. Questo tasso di variazione termica e esponenzialmente piu rapido di quasi tutti gli eventi precedenti documentati, superando la capacita di adattamento della biosfera attuale e causando un estinzione di massa accelerata."
  },
  {
    "question": "Che cos era il Massimo Termico del Paleocene-Eocene (PETM)?",
    "answer": "Il PETM e stato un evento di riscaldamento globale estremo verificatosi circa 56 milioni di anni fa. E stato causato da una rapida e massiccia immissione di carbonio nell atmosfera (probabilmente dovuta al rilascio di idrati di metano oceanici o al vulcanismo dell Atlantico settentrionale), che ha innalzato le temperature globali di 5-8 gradi in poche migliaia di anni. E considerato il miglior analogo geologico del moderno cambiamento climatico, con conseguente grave acidificazione degli oceani ed estinzioni di massa di organismi bentonici."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia della Temperatura Terrestre',
    sub: 'Esplora le ere climatiche geologiche della Terra',
    ageLabel: 'Eta:',
    tempLabel: 'Temperatura Media:',
    selectPrompt: 'Seleziona un periodo geologico.',
    epoch_archean_name: 'Eone Archeano',
    epoch_archean_age: 'Da 4.0 a 2.5 miliardi di anni fa',
    epoch_archean_desc: 'Terra caldissima con atmosfera ricca di metano.',
    epoch_proterozoic_name: 'Eone Proterozoico',
    epoch_proterozoic_age: 'Da 2.5 miliardi a 541 milioni di anni fa',
    epoch_proterozoic_desc: 'L\'aumento di ossigeno causa la glaciazione uroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: 'Da 541 a 252 milioni di anni fa',
    epoch_paleozoic_desc: 'Esplosione della vita marina e migrazione sulla terra.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: 'Da 252 a 66 milioni di anni fa',
    epoch_mesozoic_desc: 'L\'era dei dinosauri con clima caldo e senza ghiacci.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: 'Da 66 milioni di anni fa a oggi',
    epoch_cenozoic_desc: 'Raffreddamento graduale culminato nelle glaciazioni.',
    epoch_anthropocene_name: 'Epoca dell\'Antropocene',
    epoch_anthropocene_age: 'Presente e futuro',
    epoch_anthropocene_desc: 'Riscaldamento rapido dovuto a emissioni umane.',
  },
  seo: [
  {
    "type": "title",
    "text": "CLIMATOLOGIA STORICA: L evoluzione termica della Terra attraverso le ere geologiche",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Il clima della Terra non e mai stato statico. Nel corso dei suoi 4,5 miliardi di anni di esistenza, il nostro pianeta ha oscillato tra due stati fondamentali: lo stato di serra (greenhouse) e lo stato di glaciazione (icehouse). Comprendere queste fluttuazioni su larga scala non e solo una curiosita geologica, ma uno strumento indispensabile per contestualizzare la velocita e la gravita del riscaldamento globale antropico. Studiando gli isotopi dell ossigeno nei fossili marini e le bolle d aria intrappolate nelle carote di ghiaccio, i paleoclimatologi hanno ricostruito una registrazione precisa delle temperature passate della Terra."
  },
  {
    "type": "title",
    "text": "Registrazione della temperatura per eone ed era geologica",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La storia della Terra e divisa in importanti intervalli temporali definiti da cambiamenti biologici e geologici. Di seguito e riportato l elenco delle temperature medie stimate per ciascuna epoca disponibile in questa cronologia:"
  },
  {
    "type": "table",
    "headers": [
      "Epoca Geologica",
      "Eta Approssimativa",
      "Temperatura Media",
      "Tappe e Caratteristiche Climatologiche"
    ],
    "rows": [
      [
        "<strong>Eone Archeano</strong>",
        "Da 4.0 a 2.5 Ga",
        "30 °C",
        "Terra primordiale calda. Un giovane Sole debole era compensato da un estremo effetto serra ricco di metano."
      ],
      [
        "<strong>Eone Proterozoico</strong>",
        "Da 2.5 Ga a 541 Ma",
        "12 °C",
        "Aumento dell ossigeno libero; ha causato il collasso del metano e innescato glaciazioni globali (\"Terra a Palla di Neve\")."
      ],
      [
        "<strong>Era Paleozoica</strong>",
        "Da 541 a 252 Ma",
        "20 °C",
        "Grande biodiversita marina e colonizzazione della terraferma. Terminata con eruzioni vulcaniche e riscaldamento estremo."
      ],
      [
        "<strong>Era Mesozoica</strong>",
        "Da 252 a 66 Ma",
        "22 °C",
        "Il periodo caldo per eccellenza (super-serra senza ghiaccio polare). Apice dei dinosauri."
      ],
      [
        "<strong>Era Cenozoica</strong>",
        "Da 66 Ma a oggi",
        "14 °C",
        "Raffreddamento progressivo guidato da correnti oceaniche continentali che portano ai cicli dell era glaciale del Quaternario."
      ],
      [
        "<strong>Antropocene</strong>",
        "Presente e futuro",
        "15.2 °C",
        "Riscaldamento drastico e anomalo indotto dalle emissioni antropiche di gas serra."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Estremi termici del passato: dalla glaciazione globale al caldo mesozoico",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La storia planetaria comprende eventi climatici estremi. Nell eone proterozoico, la fotosintesi primitiva ha rilasciato ossigeno su scala massiccia, ossidando il metano atmosferico e facendo sprofondare il pianeta nella glaciazione uroniana, uno dei periodi di \"Terra a Palla di Neve\" in cui i ghiacciai raggiunsero le latitudini equatoriali. All estremo opposto, durante l era mesozoica e il Paleocene, un intensa attivita vulcanica tettonica ha saturato l atmosfera di CO2, innalzando la temperatura globale media fino a 10 gradi sopra i livelli attuali. In questi periodi mancava completamente il ghiaccio polare, con foreste temperate a latitudini artiche e il dominio di rettili a sangue freddo come i dinosauri."
  },
  {
    "type": "title",
    "text": "Fattori che guidano il clima planetario su scala geologica",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Il clima a lungo termine della Terra e il risultato di un delicato equilibrio termodinamico governato da diversi meccanismi naturali interconnessi:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Cicli di Milankovitch:</strong> Piccole variazioni periodiche dell eccentricita orbitale, dell inclinazione e della precessione del pianeta modificano la radiazione solare ricevuta.",
      "<strong>Ciclo del carbonio silicato-carbonato:</strong> Il termostato geochimico a lungo termine. La pioggia rimuove il CO2, convertendolo in silicati depositati negli oceani.",
      "<strong>Tettonica delle placche:</strong> La deriva dei continenti altera le correnti marine globali e crea catene montuose che accelerano il disfacimento chimico del CO2.",
      "<strong>Effetto albedo di feedback:</strong> La presenza di neve e ghiaccio riflette la luce solare, raffreddando ulteriormente il pianeta in cicli di feedback."
    ]
  },
  {
    "type": "title",
    "text": "L Antropocene: un accelerazione termica senza precedenti nella biosfera",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La transizione dal periodo stabile dell Olocene all Antropocene segna l era dell impatto diretto dell umanita sui sistemi planetari. A differenza degli eventi termici del passato, le cui cause orbitali o vulcaniche operavano su scale temporali di decine di migliaia di anni, il riscaldamento attuale e guidato dalla combustione massiccia di riserve di carbonio fossile accumulate nel corso di milioni di anni. Il tasso attuale di accumulo dei gas serra e l aumento della temperatura media globale si stanno verificando a una velocita significativamente superiore rispetto a quella dell estinzione del Permiano-Triassico o del PETM, ponendo una sfida adattativa senza precedenti per la biodiversita planetaria."
  }
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
        text: step.text,
      })),
    },
  ],
};
