import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'laboratorio-regras-jogo-vida-conway';
const title = 'Laboratório de Regras do Jogo da Vida de Conway';
const description = 'Jogue, edite e compare autômatos celulares ao estilo Conway com regras B/S, sementes de padrões, métricas ao vivo e grade responsiva.';

const howTo = [
  {
    name: 'Semear o tabuleiro',
    text: 'Escolha um padrão como um planador, pulsar ou canhão de Gosper, coloque-o na grade ou gere uma população aleatória.',
  },
  {
    name: 'Executar a simulação',
    text: 'Use os controles de reprodução, pausa, passo e tempo para observar como nascimentos, mortes, densidade e estabilidade evoluem.',
  },
  {
    name: 'Mudar a regra',
    text: 'Alterne entre predefinições ou digite uma regra B/S como B3/S23, B36/S23 ou B3678/S34678 para comparar diferentes autômatos.',
  },
];

const faq = [
  {
    question: 'O que é notação B/S no Jogo da Vida?',
    answer: 'A notação B/S lista os contagens de vizinhos que criam uma nova célula viva e os contagens que permitem a uma célula viva existente sobreviver. O Jogo da Vida de Conway é B3/S23: células mortas nascem com exatamente três vizinhos, e células vivas sobrevivem com dois ou três vizinhos.',
  },
  {
    question: 'Por que este é chamado de laboratório de regras em vez de só simulador?',
    answer: 'A regra clássica de Conway está incluída, mas o simulador é construído para comparar famílias de autômatos celulares do tipo Life. Editar as contagens de nascimento e sobrevivência muda o comportamento de longo prazo, produzindo replicadores, ondas, ilhas congeladas, crescimento caótico ou extinção.',
  },
  {
    question: 'O que significa estabilidade no simulador?',
    answer: 'A estabilidade estima quanto a colônia mudou durante a última geração. Alta estabilidade significa poucas células nascidas ou mortas em relação à população; baixa estabilidade significa que o tabuleiro está turbulento ou se reorganizando rapidamente.',
  },
  {
    question: 'O tabuleiro tem bordas?',
    answer: 'A simulação usa envolvimento toroidal: a borda esquerda se conecta à borda direita e o topo se conecta ao fundo. Isso mantém os padrões se movendo naturalmente sem desaparecer em bordas rígidas.',
  },
  {
    question: 'Posso desenhar meu próprio padrão inicial?',
    answer: 'Sim. Pause a simulação e clique ou toque nas células do tabuleiro para alterná-las. Você pode combinar células desenhadas à mão com padrões embutidos e então executar o resultado sob qualquer predefinição de regra.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Grade de autômatos celulares tipo Life',
    play: 'Reproduzir',
    pause: 'Pausar',
    step: 'Passo',
    clear: 'Tela em branco',
    randomize: 'Aleatório',
    ruleLabel: 'Notação da regra',
    ruleHelp: 'Nascimento / sobrevivência',
    speedLabel: 'Ritmo',
    densityLabel: 'Densidade inicial',
    patternLabel: 'Padrão',
    placePattern: 'Inserir padrão',
    generation: 'Geração',
    population: 'População',
    density: 'Densidade',
    stability: 'Estabilidade',
    births: 'Nascimentos',
    deaths: 'Mortes',
    achievementsLabel: 'Registro de laboratório',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Oscilação de período 2 detectada',
    achievementImmortal: 'Imortal',
    achievementImmortalDescription: 'Geração 500 alcançada com estabilidade total',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Uma semente aleatória esparsa superou 1.000 células vivas',
    presetClassic: 'Conway clássico',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Dia e noite',
    patternGlider: 'Planador',
    patternGosper: 'Canhão de Gosper',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentominó',
    colonyStatus: 'Sinal da colônia',
    statusFrozen: 'estável',
    statusGrowing: 'expandindo',
    statusFading: 'declinando',
    statusChaotic: 'volátil',
    invalidRule: 'Use notação B/S como B3/S23.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador do Jogo da Vida de Conway com Regras Editáveis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este laboratório de regras do Jogo da Vida de Conway permite executar o autômato celular clássico e alterar ou comparar suas regras.',
    },
    {
      type: 'title',
      text: 'Como as regras B/S alteram o jogo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Autômatos celulares do tipo Life são escritos em <strong>notação B/S</strong>. A regra original de Conway, <strong>B3/S23</strong>, é famosa pelo seu equilíbrio perfeito.',
    },
    {
      type: 'table',
      headers: ['Regra', 'Comportamento a observar', 'Bom experimento'],
      rows: [
        ['<strong>B3/S23</strong>', 'Planadores clássicos, osciladores e canhões.', 'Posicione o canhão de Gosper e acompanhe a população.'],
        ['<strong>B36/S23</strong>', 'HighLife suporta autorreplicação.', 'Compare a mesma semente com B3/S23.'],
        ['<strong>B2/S</strong>', 'As células nunca sobrevivem.', 'Comece com uma pequena semente.'],
        ['<strong>B3678/S34678</strong>', 'Day & Night suporta estruturas inversas.', 'Teste com alta densidade inicial.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que os padrões são importantes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os padrões constituem o vocabulário do Jogo da Vida. Planadores mostram movimento e pulsares mostram oscilação.',
    },
    {
      type: 'title',
      text: 'Leitura das métricas em tempo real',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'População e densidade mostram quantas células estão vivas, enquanto nascimentos e mortes revelam o nível de atividade.',
    },
    { type: 'paragraph', html: 'Esta explicação esclarece as hipóteses do modelo e mostra como os parâmetros alteram o resultado. Mude uma variável de cada vez e compare várias execuções, para relacionar cada diferença com uma causa identificável. A visualização é uma aproximação educativa: um sistema real inclui mais variáveis, incertezas de medição e condições de fronteira. Use o resultado para compreender ordens de grandeza, formular perguntas e comparar cenários. Para uma decisão prática ou análise científica, confirme sempre os dados primários, as unidades e as fontes especializadas. Registe as definições usadas para repetir o cálculo e discutir as suas limitações.' },
    { type: 'paragraph', html: 'Repita o cálculo com as mesmas definições e altere depois uma entrada de cada vez. Registe os valores iniciais, as regras usadas e os limites, para distinguir uma tendência do modelo de uma variação numérica ou casual. O resultado tem finalidade educativa e deve ser lido com as hipóteses e limitações. Medições ou projetos reais exigem dados adicionais e revisão especializada.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
