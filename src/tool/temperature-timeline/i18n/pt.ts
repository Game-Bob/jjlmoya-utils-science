import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-media-planeta';
const description = 'Explore a historia da temperatura media da Terra ao longo das eras geologicas.';
const title = 'Cronologia da Temperatura Media do Planeta';

const howTo = [
  {
    name: 'Selecionar uma era',
    text: 'Clique em uma marca na escala.',
  },
  {
    name: 'Verificar a temperatura',
    text: 'Leia a temperatura media global.',
  },
  {
    name: 'Observar o planeta',
    text: 'Veja como a tela reage ao estado termico.',
  },
];

const faq = [
  {
    "question": "A Terra ja esteve mais quente no passado do que esta hoje?",
    "answer": "Sim, a Terra ja experimentou climas consideravelmente mais quentes do que o atual. Durante o Mesozoico (a era dos dinossauros) e o Eoceno inicial, o planeta encontrava-se num estado de estufa (greenhouse) sem calotas polares, e as temperaturas medias globais superavam os 22 graus, cerca de 7 a 8 graus mais quentes do que a media atual. No entanto, as transicoes para esses periodos ocorreram em escalas de milhoes de anos, permitindo a adaptacao evolutiva."
  },
  {
    "question": "O que causou o fenomeno da Terra Bola de Neve?",
    "answer": "A Terra Bola de Neve (glaciacao global) ocorreu principalmente durante o Neoproterozoico (ha cerca de 700 milhoes de anos). Foi desencadeada por uma reducao extrema dos gases de efeito estufa devido ao intemperismo quimico acelerado de rochas de silicato apos a fratura do supercontinente Rodinia. O gelo estendeu-se dos polos ao equador, refletindo a radiacao solar (efeito albedo) e prendendo o planeta num ciclo de congelamento global que so foi quebrado apos milhoes de anos de acumulacao de CO2 vulcanico."
  },
  {
    "question": "Como a Terra regula a sua temperatura a longo prazo?",
    "answer": "A Terra possui um termostato natural controlado pelo ciclo do carbono a escala geologica, regulado principalmente pela tectonica de placas e meteorizacao dos silicatos. Quando o planeta aquece, a chuva acida reage mais rapidamente com as rochas de silicato, absorvendo CO2 da atmosfera e depositando-o no fundo oceanico sob a forma de carbonatos, o que reduz o efeito estufa. Se o planeta arrefece, o intemperismo diminui mas a atividade vulcanica continua a libertar CO2, aquecendo gradualmente o planeta de novo."
  },
  {
    "question": "Em que difere a mudanca climatica do Antropoceno do passado geologico?",
    "answer": "A diferenca fundamental reside na velocidade da mudanca. Enquanto as transicoes climaticas naturais do passado geologico costumavam ocorrer ao longo de dezenas de milhares ou milhoes de anos (dando margem para a migracao e evolucao biologica), o aquecimento do Antropoceno esta a acontecer em questao de decadas. Esta taxa de variacao termica e exponencialmente mais rapida do que quase qualquer evento previo documentado, superando a capacidade de adaptacao da biosfera atual e provocando uma extincao em massa acelerada."
  },
  {
    "question": "O que foi o Maximo Termico do Paleoceno-Eoceno (PETM)?",
    "answer": "O PETM foi um evento de aquecimento global extremo ocorrido ha aproximadamente 56 milhoes de anos. Deve-se a uma injecao rapida e massiva de carbono na atmosfera (provavelmente pela libertacao de hidratos de metano oceanicos ou vulcanismo no Atlantico Norte), elevando a temperatura global de 5 a 8 graus em poucos milhares de anos. E considerado o melhor analogo geologico da mudanca climatica moderna, resultando em acidificacao oceanica severa e extincoes em massa de organismos bentonicos."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia da Temperatura Terrestre',
    sub: 'Explore as eras climaticas geologicas da Terra',
    ageLabel: 'Idade:',
    tempLabel: 'Temperatura Media:',
    selectPrompt: 'Selecione um periodo geologico.',
    epoch_archean_name: 'Eon Arqueano',
    epoch_archean_age: '4,0 a 2,5 bilhoes de anos atras',
    epoch_archean_desc: 'Terra extremamente quente com atmosfera de metano e CO2.',
    epoch_proterozoic_name: 'Eon Proterozoico',
    epoch_proterozoic_age: '2,5 bilhoes a 541 milhoes de anos atras',
    epoch_proterozoic_desc: 'Oxigenio em alta causa a glaciacao huroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: '541 a 252 milhoes de anos atras',
    epoch_paleozoic_desc: 'Explosao de vida nos oceanos e migracao terrestre.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: '252 a 66 milhoes de anos atras',
    epoch_mesozoic_desc: 'Era dos dinossauros sob severo efeito estufa.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: '66 milhoes de anos atras ao Presente',
    epoch_cenozoic_desc: 'Resfriamento gradual rumo as glaciacoes.',
    epoch_anthropocene_name: 'Epoca do Antropoceno',
    epoch_anthropocene_age: 'Presente e futuro',
    epoch_anthropocene_desc: 'Aquecimento acelerado por emissoes de gases.',
  },
  seo: [
  {
    "type": "title",
    "text": "CLIMATOLOGIA HISTORICA: A evolucao termica da Terra atraves das eras geologicas",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "O clima da Terra nunca foi estatico. Ao longo dos seus 4.500 milhoes de anos de existencia, o nosso planeta oscilou entre dois estados fundamentais: o estado de estufa (greenhouse) e o estado de glaciacao (icehouse). Compreender estas flutuacoes a grande escala nao e apenas um exercicio de curiosidade geologica, mas uma ferramenta indispensavel para contextualizar a velocidade e gravidade do aquecimento global antropogenico. Mediante o estudo de isotopos de oxigenio em fosseis marinhos e bolhas de ar atrapadas em nucleos de gelo, os paleoclimatologos puderam reconstruir um registo preciso da temperatura terrestre do passado."
  },
  {
    "type": "title",
    "text": "Registo de temperaturas por eon e era geologica",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "A historia planetaria divide-se em grandes intervalos temporais definidos por mudancas biologicas e geologicas. A seguir, apresenta-se a relacao de temperaturas medias estimadas para cada epoca disponivel nesta cronologia:"
  },
  {
    "type": "table",
    "headers": [
      "Epoca Geologica",
      "Idade Aprox.",
      "Temperatura Media",
      "Marco e Caracteristicas Climatologicas"
    ],
    "rows": [
      [
        "<strong>Eon Arqueano</strong>",
        "4.0 a 2.5 Ga",
        "30 °C",
        "Terra primitiva muito quente. Sol jovem fraco compensado por um efeito estufa extremo rico em metano."
      ],
      [
        "<strong>Eon Proterozoico</strong>",
        "2.5 Ga a 541 Ma",
        "12 °C",
        "Aumento de oxigenio livre; causou o colapso do metano e desencadeou glaciacoes globais (\"Terra Bola de Neve\")."
      ],
      [
        "<strong>Era Paleozoica</strong>",
        "541 a 252 Ma",
        "20 °C",
        "Grande biodiversidade marinha e colonizacao terrestre. Termina com um evento vulcanico e aquecimento extremo."
      ],
      [
        "<strong>Era Mesozoica</strong>",
        "252 a 66 Ma",
        "22 °C",
        "O periodo quente por excelencia (superestufa sem gelo polar). Florescimento dos dinossauros."
      ],
      [
        "<strong>Era Cenozoica</strong>",
        "66 Ma a hoje",
        "14 °C",
        "Arrefecimento progressivo impulsionado por correntes oceanicas continentais ate aos ciclos de glaciacoes quaternarias."
      ],
      [
        "<strong>Antropoceno</strong>",
        "Presente e futuro",
        "15.2 °C",
        "Aquecimento anomalo e vertiginoso devido as emissoes antropogenicas de gases de efeito estufa."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Os extremos termicos do passado: Da glaciacao global ao calor do Mesozoico",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "A historia planetaria inclui marcos climaticos extremos. No Eon Proterozoico, a fotossintese primitiva libertou oxigenio massivamente, oxidando o metano atmosferico e sumindo o planeta na glaciacao Huroni, um dos periodos de \"Terra Bola de Neve\" onde os glaciares alcancaram latitudes equatoriais. No extremo oposto, durante a Era Mesozoica e o Paleoceno, a intensa atividade vulcanica tectonica saturou a atmosfera de CO2, elevando a temperatura global promedio ate 10 graus acima dos niveis atuais. Estes periodos careciam por completo de gelo polar, albergando florestas temperadas em latitudes articas e permitindo a hegemonia de repteis de sangue frio como os dinossauros."
  },
  {
    "type": "title",
    "text": "Factores que dirigem o clima planetario a escala geologica",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "O clima da Terra a longo prazo e o resultado de um delicado equilibrio termodinamico governado por varios mecanismos naturais interconectados:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Ciclos de Milankovitch:</strong> Pequenas variacoes periodicas na excentricidade orbital, inclinacao e precessao do planeta alteram a radiacao solar recebida.",
      "<strong>Ciclo do Carbono Silicato-Carbonato:</strong> O termostato geoquimico a longo prazo. A chuva remove CO2 convertendo-o em silicatos depositados nos oceanos.",
      "<strong>Tectonica de Placas:</strong> A deriva continental altera as correntes marinhas globais e cria cadeias montanhosas que aceleram a meteorizacao quimica do CO2.",
      "<strong>Efeito Albedo de Retroalimentacao:</strong> A presenca de neve e gelo reflete a luz solar, arrefecendo ainda mais o planeta em circulos de retroalimentacao."
    ]
  },
  {
    "type": "title",
    "text": "O Antropoceno: Uma aceleracao termica sem precedentes na biosfera",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "A transicao do periodo estavel do Holoceno ao Antropoceno marca a era de impacto direto da humanidade sobre os sistemas planetarios. A diferenca dos eventos termicos do passado, cujas causas orbitais ou vulcanicas operavam a escalas de dezenas de milhares de anos, o aquecimento atual esta impulsionado pela combustao massiva de reservas de carbono fossil acumuladas durante milhoes de anos. A taxa atual de acumulacao de gases de efeito estufa e o incremento da temperatura global media estao a ocorrer a uma velocidade significativamente superior do que a da extincion do Permico-Triasico ou o PETM, propondo um desafio adaptativo sem precedentes para a biodiversidade planetaria."
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
