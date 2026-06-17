import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'visualizador-paradoxo-gemeos';
const title = 'Visualizador do Paradoxo dos Gemeos: Dilatacao do Tempo na Relatividade Especial';
const description = 'Visualize como a relatividade especial faz um gemeo que viaja rapidamente retornar mais jovem do que o gemeo que ficou na Terra.';

const howTo = [
  {
    name: 'Ajuste a velocidade da nave espacial',
    text: 'Use o controle deslizante de velocidade para escolher uma fracao da velocidade da luz e observe o fator de Lorentz aumentar.',
  },
  {
    name: 'Escolha a duracao da missao no referencial da Terra',
    text: 'Ajuste quantos anos se passam para o gemeo que permanece na Terra durante a viagem completa de ida e volta.',
  },
  {
    name: 'Compare os relogios e as linhas de universo',
    text: 'Leia a diferenca de idade, o tempo decorrido na nave, a distancia no referencial da Terra e a linha de universo curvada que marca a mudanca de referenciais inerciais do gemeo viajante.',
  },
];

const faq = [
  {
    question: 'O que e o paradoxo dos gemeos na relatividade especial?',
    answer: 'O paradoxo dos gemeos e um experimento mental em que um gemeo viaja pelo espaco em velocidade relativistica e depois retorna a Terra mais jovem do que o gemeo que ficou em casa. Parece paradoxal porque cada gemeo pode inicialmente descrever o outro como se movendo, mas o gemeo viajante muda de referencial inercial ao fazer meia-volta, entao os dois caminhos atraves do espaco-tempo nao sao simetricos.',
  },
  {
    question: 'Por que o gemeo viajante envelhece menos?',
    answer: 'Na relatividade especial, o tempo proprio decorrido depende do caminho atraves do espaco-tempo. Um relogio se movendo a velocidade v em relacao a um observador inercial tique mais lentamente pelo fator de Lorentz gamma. O viajante acumula menos tempo proprio ao longo das pernas de ida e volta do que o gemeo que fica em casa acumula na Terra.',
  },
  {
    question: 'A aceleracao causa a diferenca de idade?',
    answer: 'A aceleracao e importante porque permite que o viajante inverta a direcao e se reuna a Terra, mas a diferenca de idade e calculada a partir do caminho completo no espaco-tempo, nao apenas da aceleracao. Mesmo que a meia-volta fosse muito breve, o caminho do viajante ainda conteria menos tempo proprio do que o caminho da Terra.',
  },
  {
    question: 'O que significa o fator de Lorentz gamma?',
    answer: 'O fator de Lorentz gamma e igual a 1 dividido pela raiz quadrada de 1 menos v ao quadrado sobre c ao quadrado. Ele indica o quanto intervalos de tempo, comprimentos e energias diferem entre referenciais inerciais. Em velocidades cotidianas gamma e quase 1, mas perto da velocidade da luz ele aumenta bruscamente.',
  },
  {
    question: 'Esse efeito pode ser medido na vida real?',
    answer: 'Sim. A dilatacao do tempo foi medida com particulas rapidas, relogios atomicos transportados em aeronaves, sistemas de sincronizacao via satelite e aceleradores de particulas. O paradoxo dos gemeos usa uma historia de viagem extrema, mas o efeito de relogio subjacente e uma parte rotineiramente verificada da fisica moderna.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Visualizacao espaco-temporal do paradoxo dos gemeos',
    controlsTitle: 'Controles do paradoxo dos gemeos',
    worldlineLabel: 'Diagrama de linha de universo para o gemeo terrestre e o gemeo viajante',
    earthTwin: 'Idade do gemeo terrestre',
    travelingTwin: 'Idade do viajante',
    presetCruise: 'Cruzeiro',
    presetRelativistic: 'Relativistico',
    presetExtreme: 'Extremo',
    velocityLabel: 'Velocidade da nave',
    earthYearsLabel: 'Tempo decorrido na Terra',
    ageGapLabel: 'Diferenca de idade no reencontro',
    gammaLabel: 'Fator de Lorentz',
    shipTimeLabel: 'Tempo proprio do viajante',
    distanceLabel: 'Distancia de meia-volta',
    yearsUnit: 'anos',
    yearsShortUnit: 'anos',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora do Paradoxo dos Gemeos para a Relatividade Especial',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O visualizador do paradoxo dos gemeos transforma uma das ideias mais famosas da relatividade especial em um diagrama espaco-temporal interativo. Defina a velocidade de uma nave espacial como uma fracao da velocidade da luz, escolha quantos anos se passam na Terra, e a calculadora computa o fator de Lorentz, o tempo proprio do viajante, a diferenca de idade no reencontro e a distancia de ida ate o ponto de meia-volta. O layout visual separa o relogio da Terra do relogio da nave para que a assimetria seja visivel em vez de escondida dentro de formulas.',
    },
    {
      type: 'title',
      text: 'Como o Calculo Funciona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A quantidade central e o fator de Lorentz: gamma = 1 / sqrt(1 - v^2 / c^2). Para uma viagem simples de ida e volta com velocidade de cruzeiro constante, o tempo experimentado pelo viajante e a duracao da missao no referencial da Terra dividida por gamma. A diferenca entre essas duas duracoes e a diferenca de idade quando os gemeos se reencontram. A ferramenta tambem mostra a distancia de meia-volta no referencial da Terra, que e metade do tempo total terrestre multiplicado pela velocidade da nave em anos-luz por ano.',
    },
    {
      type: 'table',
      headers: ['Velocidade', 'Fator de Lorentz', 'Taxa do Relogio do Viajante', 'Significado Fisico'],
      rows: [
        ['0.50c', '1.155', '86.6% da taxa terrestre', 'Um efeito relativistico notavel mas moderado.'],
        ['0.86c', '1.960', '51.0% da taxa terrestre', 'O viajante envelhece cerca de metade da taxa durante o cruzeiro.'],
        ['0.98c', '5.025', '19.9% da taxa terrestre', 'A dilatacao temporal extrema domina o resultado da missao.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que a situacao nao e simetrica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A primeira vista, cada gemeo pode dizer que o outro esta se movendo, o que faz o resultado parecer contraditorio. A resolucao e que o gemeo terrestre permanece aproximadamente em um referencial inercial, enquanto o gemeo viajante parte, inverte a direcao e retorna. Essa mudanca de referencial inercial da ao viajante um caminho diferente atraves do espaco-tempo. A linha de universo desenhada por esta ferramenta se curva no evento de meia-volta, enquanto a linha de universo do gemeo terrestre permanece reta.',
    },
    {
      type: 'title',
      text: 'Leitura do Diagrama de Linha de Universo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma linha de universo e um mapa de um objeto atraves do espaco-tempo em vez de apenas atraves do espaco. Neste visualizador, a linha vertical da Terra representa o gemeo que fica em casa. O caminho vermelho inclinado representa o viajante saindo da Terra e retornando. O aumento da velocidade faz o caminho do viajante se inclinar mais dramaticamente e reduz a quantidade de tempo proprio acumulado no relogio da nave espacial.',
    },
    {
      type: 'list',
      items: [
        '<strong>Diferenca de idade:</strong> o quanto mais jovem o viajante esta no reencontro.',
        '<strong>Fator de Lorentz:</strong> o multiplicador que liga o tempo do referencial da Terra ao tempo proprio do viajante.',
        '<strong>Tempo proprio do viajante:</strong> o tempo real decorrido medido por um relogio na nave espacial.',
        '<strong>Distancia de meia-volta:</strong> a distancia de ida no referencial da Terra antes de o viajante inverter o curso.',
      ],
    },
    {
      type: 'title',
      text: 'Evidencia Pratica para a Dilatacao do Tempo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O paradoxo dos gemeos e um experimento mental claro, mas a dilatacao do tempo nao e especulativa. Muons criados na atmosfera superior sobrevivem tempo suficiente para atingir o solo porque seus relogios em movimento estao dilatados da perspectiva da Terra. Experimentos com relogios atomicos em aeronaves e a navegacao via satelite de precisao tambem exigem correcoes relativisticas. A mesma matematica por tras deste visualizador faz parte da infraestrutura de temporizacao usada pelos sistemas GPS modernos.',
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
