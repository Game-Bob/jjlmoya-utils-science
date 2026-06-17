import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculateur-demi-vie-desintegration-radioactive';
const title = 'Calculateur de demi vie et de desintegration radioactive';
const description = 'Simulez la desintegration radioactive avec des isotopes reels, la formule de demi-vie, un champ atomique stochastique, la quantite restante et l activite relative.';

const howTo = [
  { name: 'Choisir un isotope', text: 'Commencez avec le carbone 14, l iode 131, l uranium 238, le technetium 99m ou le radon 222. Chaque preset charge une demi-vie realiste et le contexte scientifique dans lequel il est couramment utilise.' },
  { name: 'Regler la taille de l echantillon et le temps', text: 'Ajustez le nombre d atomes representes et faites avancer le temps pour voir comment la fraction restante suit la loi exponentielle de la demi-vie.' },
  { name: 'Comparer le calcul exact et le hasard atomique', text: 'Utilisez le resultat deterministe comme valeur attendue, puis observez le champ atomique pour comprendre pourquoi les petits echantillons fluctuent autour de la courbe theorique.' },
  { name: 'Interpreter l activite', text: 'L activite diminue dans la meme proportion que les noyaux non desintegres. L indicateur montre donc le taux de rayonnement restant par rapport a l echantillon initial.' },
];

const faq = [
  { question: 'Que signifie demi-vie?', answer: 'La demi-vie est le temps necessaire pour que la moitie des noyaux instables d un echantillon se desintegrent en moyenne. Apres une demi-vie il reste 50%, apres deux il reste 25%, et apres trois il reste 12,5%.' },
  { question: 'Pourquoi le champ atomique ne correspond-il pas toujours au pourcentage exact?', answer: 'La desintegration radioactive est probabiliste. La formule donne la fraction attendue pour un tres grand echantillon, tandis que le champ simule des atomes individuels avec des seuils aleatoires. Les petits echantillons montrent naturellement du bruit statistique.' },
  { question: 'L indicateur d activite correspond-il aux atomes restants?', answer: 'Pour un isotope unique, l activite est proportionnelle au nombre de noyaux non desintegres. S il reste 30% des atomes, l activite instantanee vaut aussi environ 30% de l activite initiale.' },
  { question: 'Ce calculateur peut-il servir pour la datation au radiocarbone?', answer: 'Oui, pour des calculs conceptuels. La datation au carbone 14 compare l activite restante avec celle d une matiere vivante, mais une datation de laboratoire corrige aussi les courbes de calibration, la contamination et la preparation de l echantillon.' },
  { question: 'Chaque isotope se desintegre-t-il en un seul produit stable?', answer: 'Pas toujours. Certains isotopes se desintegrent par chaines avec plusieurs produits fils. Cet outil modelise la demi-vie de l isotope parent, la grandeur la plus utile pour estimer les noyaux parents restants et l activite.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotope',
    sampleAtoms: 'Atomes de l echantillon',
    elapsedTime: 'Temps ecoule',
    halfLife: 'Demi-vie',
    remaining: 'Restant',
    decayed: 'Desintegre',
    activity: 'Activite relative',
    timeUnit: 'Unite de temps',
    expectedCurve: 'Courbe attendue',
    atomField: 'Champ atomique',
    presetUse: 'Usage courant',
    oneHalfLife: '1 demi-vie',
    twoHalfLives: '2 demi-vies',
    fourHalfLives: '4 demi-vies',
    custom: 'Personnalise',
    liveAtoms: 'Atomes actifs',
    decayedAtoms: 'Atomes desintegres',
    resetSeed: 'Nouveau motif atomique',
  },
  seo: [
    { type: 'title', text: 'Calculateur de demi-vie radioactive: atomes restants, activite et exemples d isotopes', level: 2 },
    { type: 'paragraph', html: 'Utilisez ce calculateur de desintegration radioactive pour estimer la part restante d un isotope instable apres une duree donnee. Il repond aux intentions de recherche les plus courantes: trouver la formule de demi-vie, l appliquer a des isotopes reels, comparer les noyaux parents restants aux noyaux desintegres et comprendre pourquoi l activite baisse avec l age de l echantillon.' },
    { type: 'paragraph', html: 'L outil combine deux modeles complementaires. Les resultats numeriques utilisent l equation exponentielle de desintegration, tandis que le champ atomique simule des noyaux individuels avec des seuils stochastiques. Il fonctionne donc comme calculateur rapide et comme explication visuelle du caractere previsible en masse mais aleatoire atome par atome.' },
    { type: 'title', text: 'Formule de desintegration radioactive utilisee', level: 3 },
    { type: 'paragraph', html: 'La formule est <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> est le nombre initial de noyaux parents, <strong>N(t)</strong> le nombre attendu apres le temps <strong>t</strong>, et <strong>T1/2</strong> la demi-vie. Le rapport <strong>t / T1/2</strong> indique combien de demi-vies se sont ecoulees.' },
    { type: 'paragraph', html: 'Si un echantillon commence avec 1 000 noyaux parents et que deux demi-vies passent, il reste en moyenne 1 000 x (1/2)^2 = 250 noyaux. Les 750 autres sont desintegres. Le meme calcul vaut pour des demi-vies en secondes, heures, jours, annees ou milliards d annees.' },
    { type: 'table', headers: ['Temps ecoule', 'Facteur', 'Noyaux parents restants', 'Activite relative'], rows: [['0 demi-vie', '(1/2)^0', '100%', '100%'], ['1 demi-vie', '(1/2)^1', '50%', '50%'], ['2 demi-vies', '(1/2)^2', '25%', '25%'], ['3 demi-vies', '(1/2)^3', '12,5%', '12,5%'], ['5 demi-vies', '(1/2)^5', '3,125%', '3,125%'], ['10 demi-vies', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Calculer l activite restante', level: 3 },
    { type: 'paragraph', html: 'Pour un isotope parent unique, l activite est proportionnelle au nombre de noyaux non desintegres. Si 25% de l isotope parent reste, l activite de cet isotope vaut aussi environ 25% de l activite initiale.' },
    { type: 'paragraph', html: 'Cette relation est essentielle en medecine nucleaire et en radioprotection. Le technetium 99m perd son activite en quelques heures, tandis que l iode 131 reste pertinent pendant des jours, ce qui influence les traitements, la surveillance et les consignes d exposition.' },
    { type: 'title', text: 'Exemples: carbone 14, iode 131, technetium 99m, uranium 238 et radon 222', level: 3 },
    { type: 'table', headers: ['Isotope', 'Demi-vie approximative', 'Usage courant', 'Ce que montre le resultat'], rows: [['Carbone 14', '5 730 ans', 'Datation au radiocarbone', 'L activite de carbone 14 parent restante dans une matiere autrefois vivante.'], ['Iode 131', '8,02 jours', 'Therapie medicale et incidents nucleaires', 'La vitesse a laquelle l activite baisse sur plusieurs jours.'], ['Technetium 99m', '6,01 heures', 'Imagerie diagnostique', 'Pourquoi l activite utile disparait au cours d une journee clinique.'], ['Uranium 238', '4,47 milliards d annees', 'Datation geologique', 'Pourquoi les isotopes tres longs restent mesurables a l echelle de l histoire terrestre.'], ['Radon 222', '3,82 jours', 'Rayonnement interieur et chaines de decroissance', 'Comment une source gazeuse d exposition evolue en quelques jours.']] },
    { type: 'paragraph', html: 'Ces exemples couvrent plusieurs echelles de temps et intentions de recherche: archeologie et datation pour le carbone 14, activite medicale pour l iode 131 et le technetium 99m, exposition environnementale pour le radon 222 et temps geologique pour l uranium 238.' },
    { type: 'title', text: 'Lire la simulation atomique stochastique', level: 3 },
    { type: 'paragraph', html: 'Le champ atomique anime est volontairement stochastique. L equation donne la valeur attendue pour un grand echantillon, mais chaque noyau se desintegre au hasard. Une petite simulation peut donc laisser un peu plus ou un peu moins de 50% apres une demi-vie; un grand echantillon se rapproche de la courbe theorique.' },
    { type: 'paragraph', html: 'La demi-vie ne signifie pas que chaque atome attend une minuterie puis que la moitie disparait d un coup. Chaque noyau instable conserve une probabilite constante de se desintegrer par unite de temps. La courbe lisse apparait quand on compte beaucoup d evenements aleatoires independants.' },
    { type: 'title', text: 'Cas d utilisation du calculateur', level: 3 },
    { type: 'list', items: ['<strong>Physique scolaire:</strong> calculer les noyaux parents restants apres un nombre donne de demi-vies.', '<strong>Chimie et science nucleaire:</strong> comparer stabilite, vitesse de decroissance et activite relative.', '<strong>Intuition pour le radiocarbone:</strong> comprendre pourquoi les echantillons anciens contiennent moins de carbone 14.', '<strong>Planification des isotopes medicaux:</strong> voir pourquoi les demi-vies courtes sont utiles en imagerie.', '<strong>Education a la radioprotection:</strong> estimer la baisse d activite sans confondre demi-vie et disparition immediate.'] },
    { type: 'title', text: 'Limites importantes', level: 3 },
    { type: 'paragraph', html: 'Ce calculateur modelise l isotope parent avec une seule demi-vie. Les mesures reelles peuvent exiger d autres corrections: efficacite du detecteur, rayonnement de fond, rapports de branchement, produits fils, elimination biologique, forme chimique, blindage et courbes de calibration.' },
    { type: 'paragraph', html: 'Utilisez le resultat comme estimation scientifique claire et modele pedagogique, pas comme substitut a des consignes de radioprotection, instructions medicales, dosimetrie ou analyse de datation en laboratoire.' },
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
