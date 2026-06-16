import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'chronologie-temperature-planete';
const description = 'Explorez l histoire de la temperature moyenne de la Terre a travers les eres geologiques.';
const title = 'Chronologie de la Temperature Moyenne de la Planete';

const howTo = [
  {
    name: 'Selectionner une ere',
    text: 'Cliquez sur une encoche de la regle.',
  },
  {
    name: 'Verifier la temperature',
    text: 'Lisez la temperature moyenne globale.',
  },
  {
    name: 'Observer la planete',
    text: 'Regardez le canevas reagir a l etat thermique.',
  },
];

const faq = [
  {
    "question": "La Terre a-t-elle ete plus chaude dans le passe qu aujourd hui?",
    "answer": "Oui, la Terre a connu des climats beaucoup plus chauds qu aujourd hui. Pendant le Mesozoique (l ere des dinosaures) et le debut de l Eocene, la planete etait dans un etat de serre sans calottes polaires, et les temperatures moyennes mondiales depassaient 22 degres, soit environ 7 a 8 degres de plus que la moyenne actuelle. Cependant, les transitions vers ces periodes se sont produites sur des echelles de temps de millions d annees, permettant une adaptation evolutive."
  },
  {
    "question": "Qu est-ce qui a cause le phenomene de la Terre Boule de Neige?",
    "answer": "La Terre Boule de Neige (glaciation globale) s est produite principalement au cours du Neoproterozoique (il y a environ 700 millions d annees). Elle a ete declenchee par une reduction extreme des gaz a effet de serre due a l alteration chimique acceleree des roches silicatees suite a la dislocation du supercontinent Rodinia. La glace s est etendue des poles a l equateur, reflechissant le rayonnement solaire (effet albedo) et enfermant la planete dans une boucle de gel global qui n a ete brisee qu apres des millions d annees d accumulation de CO2 volcanique."
  },
  {
    "question": "Comment la Terre regule-t-elle sa temperature a long terme?",
    "answer": "La Terre possede un thermostat naturel controle par le cycle geologique du carbone, regule principalement par la tectonique des plaques et l alteration des silicates. Lorsque la planete se rechauffe, la pluie acide reagit plus rapidement avec les roches silicatees, extrayant le CO2 de l atmosphere pour le deposer au fond des oceans sous forme de carbonates, ce qui reduit l effet de serre. Si la planete se refroidit, l alteration diminue mais l activite volcanique continue de liberer du CO2, rechauffant progressivement la planete."
  },
  {
    "question": "En quoi le changement climatique de l Antropocene differe-t-il du passe geologique?",
    "answer": "La difference fondamentale reside dans la vitesse du changement. Alors que les transitions climatiques naturelles du passe geologique se produisaient generalement sur des dizaines de milliers ou des millions d annees (laissant le temps aux migrations et a l evolution biologique), le rechauffement de l Anthropocene se produit en quelques decennies. Ce taux de variation thermique est exponentiellement plus rapide que presque tous les evenements anterieurs documentes, depassant la capacite d adaptation de la biosphere actuelle et provoquant une extinction de masse acceleree."
  },
  {
    "question": "Qu etait le maximum thermique du Paleocene-Eocene (PETM)?",
    "answer": "Le PETM est un evenement de rechauffement climatique extreme survenu il y a environ 56 millions d annees. Il a ete cause par une injection rapide et massive de carbone dans l atmosphere (provenant peut-etre de la liberation d hydrates de methane oceaniques ou du volcanisme de l Atlantique Nord), augmentant les temperatures mondiales de 5 a 8 degres en quelques milliers d annees. Il est considere comme le meilleur analogue geologique du changement climatique moderne, entrainant une severe acidification des oceans et des extinctions de masse d organismes benthiques."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Chronologie de la Temperature de la Terre',
    sub: 'Explorez les eres climatiques geologiques de la Terre',
    ageLabel: 'Age:',
    tempLabel: 'Temperature Moyenne:',
    selectPrompt: 'Selectionnez une periode geologique.',
    epoch_archean_name: 'Eon Archeen',
    epoch_archean_age: '4,0 a 2,5 milliards d\'annees',
    epoch_archean_desc: 'Terre extremement chaude avec atmosphere de methane.',
    epoch_proterozoic_name: 'Eon Proterozoique',
    epoch_proterozoic_age: '2,5 milliards a 541 millions d\'annees',
    epoch_proterozoic_desc: 'La hausse de l\'oxygene provoque la glaciation huronienne.',
    epoch_paleozoic_name: 'Ere Paleozoique',
    epoch_paleozoic_age: '541 a 252 millions d\'annees',
    epoch_paleozoic_desc: 'Explosion de la vie marine et migration terrestre.',
    epoch_mesozoic_name: 'Ere Mesozoique',
    epoch_mesozoic_age: '252 a 66 millions d\'annees',
    epoch_mesozoic_desc: 'L\'age des dinosaures sous des conditions de serre.',
    epoch_cenozoic_name: 'Ere Cenozoique',
    epoch_cenozoic_age: '66 millions d\'annees a aujourd\'hui',
    epoch_cenozoic_desc: 'Refroidissement progressif menant aux glaciations.',
    epoch_anthropocene_name: 'Epoque de l\'Anthropocene',
    epoch_anthropocene_age: 'Present et futur',
    epoch_anthropocene_desc: 'Rechauffement rapide du aux emissions de gaz a effet de serre.',
  },
  seo: [
  {
    "type": "title",
    "text": "CLIMATOLOGIE HISTORIQUE: L evolution thermique de la Terre a travers les eres geologiques",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Le climat de la Terre n a jamais ete statique. Au cours de ses 4,5 milliards d annees d existence, notre planete a oscille entre deux etats fondamentaux: l etat de serre (greenhouse) et l etat de glaciation (icehouse). Comprendre ces fluctuations a grande echelle n est pas seulement une curiosite geologique, mais un outil indispensable pour contextualiser la vitesse et la gravite du rechauffement climatique anthropique. En etudiant les isotopes de l oxygene dans les fossiles marins et les bulles d air emprisonnees dans les carottes de glace, les paleoclimatologues ont reconstruit un enregistrement precis des temperatures passees de la Terre."
  },
  {
    "type": "title",
    "text": "Enregistrement de la temperature par eon et ere geologique",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "L histoire de la Terre est divisee en grands intervalles de temps definis par des changements biologiques et geologiques. Voici la liste des temperatures moyennes estimees pour chaque epoque disponible dans cette chronologie:"
  },
  {
    "type": "table",
    "headers": [
      "Epoque Geologique",
      "Age Approx.",
      "Temp. Moyenne",
      "Jalons et Caracteristiques Climatologiques"
    ],
    "rows": [
      [
        "<strong>Eon Archeen</strong>",
        "4.0 a 2.5 Ga",
        "30 °C",
        "Terre primitive chaude. Un jeune Soleil faible etait compense par un effet de serre extreme riche en methane."
      ],
      [
        "<strong>Eon Proterozoique</strong>",
        "2.5 Ga a 541 Ma",
        "12 °C",
        "Montee de l oxygene libre; a provoque l effondrement du methane et declenche des glaciations globales (\"Terre Boule de Neige\")."
      ],
      [
        "<strong>Era Paleozoique</strong>",
        "541 a 252 Ma",
        "20 °C",
        "Grande biodiversite marine et colonisation terrestre. S est terminee par des eruptions volcaniques et un rechauffement extreme."
      ],
      [
        "<strong>Era Mesozoique</strong>",
        "252 a 66 Ma",
        "22 °C",
        "La periode chaude par excellence (super-serre sans glace polaire). L apogee des dinosaures."
      ],
      [
        "<strong>Era Cenozoique</strong>",
        "66 Ma a aujourd'hui",
        "14 °C",
        "Refroidissement progressif entraine par les courants oceano-continentaux menant aux cycles de l age de glace du Quaternaire."
      ],
      [
        "<strong>Anthropocene</strong>",
        "Present & futur",
        "15.2 °C",
        "Rechauffement drastique et anomal induit par les emissions anthropiques de gaz a effet de serre."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Les extremes thermiques du passe: de la glaciation globale a la chaleur du Mesozoique",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "L histoire planetaire comprend des evenements climatiques extremes. Au cours de l eon proterozoique, la photosynthese primitive a libere de l oxygene a grande echelle, oxydant le methane atmospherique et plongeant la planete dans la glaciation huronienne - l une des periodes de \"Terre Boule de Neige\" ou les glaciers ont atteint les latitudes equatoriales. A l extreme oppose, pendant l ere mesozoique et le Paleocene, une intense activite volcanique tectonique a sature l atmosphere de CO2, elevant la temperature globale moyenne jusqu a 10 degres au-dessus des niveaux actuels. Ces periodes manquaient completement de glace polaire, abritant des forets temperees aux latitudes arctiques et permettant la dominance de reptiles a sang froid comme les dinosaures."
  },
  {
    "type": "title",
    "text": "Facteurs qui guident le climat de la planete a l echelle geologique",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Le climat a long terme de la Terre est le resultat d un equilibre thermodynamique delicat gouverne par plusieurs mecanismes naturels interconnectes:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Cycles de Milankovitch:</strong> De petites variations periodiques de l excentricite, de l inclinaison et de la precession orbitales de la planete modifient le rayonnement solaire recu.",
      "<strong>Cycle du carbone silicate-carbonate:</strong> Le thermostat geochimique a long terme. La pluie elimine le CO2, le convertissant en silicates deposes dans les oceans.",
      "<strong>Tectonique des plaques:</strong> La derive des continents altere les courants marins mondiaux et cree des chaines de montagnes qui accelerent l alteration chimique du CO2.",
      "<strong>Effet albedo de retroaction:</strong> La presence de neige et de glace reflechit la lumiere du soleil, refroidissant encore plus la planete dans des boucles de retroaction."
    ]
  },
  {
    "type": "title",
    "text": "L Anthropocene: une acceleration thermique sans precedent dans la biosphere",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La transition de la periode stable de l Holocene a l Anthropocene marque l ere de l impact direct de l humanite sur les systemes planetaires. Contrairement aux evenements thermiques du passe, dont les causes orbitales ou volcaniques operaient sur des echelles de temps de dizaines de milliers d annees, le rechauffement actuel est entraine par la combustion massive de reserves de carbone fossile accumulees pendant des millions d annees. Le rythme actuel d accumulation des gaz a effet de serre et l augmentation de la temperature moyenne mondiale se produisent a une vitesse nettement superieure a celle de l extinction du Permien-Trias ou du PETM, posant un defi adaptatif sans precedent pour la biodiversite planetaire."
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
