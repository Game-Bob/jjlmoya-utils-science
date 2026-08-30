import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-meia-vida-decaimento-radioativo';
const title = 'Calculadora de meia vida e decaimento radioativo';
const description = 'Simule decaimento radioativo com isótopos reais, fórmula de meia-vida, campo atómico estocástico, quantidade restante e atividade relativa.';

const howTo = [
  { name: 'Escolha um isótopo', text: 'Comece com Carbono-14, Iodo-131, Urânio-238, Tecnécio-99m ou Radão-222. Cada pré-definição carrega uma meia-vida realista e o contexto científico em que costuma ser usado.' },
  { name: 'Defina a amostra e o tempo', text: 'Ajuste o número de átomos representados e avance o tempo para ver como a fração restante segue a lei exponencial da meia-vida.' },
  { name: 'Compare matemática exata e acaso atómico', text: 'Use o resultado determinístico como valor esperado e observe o campo atómico para entender por que amostras pequenas oscilam em torno da curva teórica.' },
  { name: 'Interprete a atividade', text: 'A atividade cai na mesma proporção dos núcleos não decaídos, por isso o medidor mostra quanto da taxa de radiação inicial ainda resta.' },
];

const faq = [
  { question: 'O que significa meia-vida?', answer: 'Meia-vida é o tempo necessário para que metade dos núcleos instáveis de uma amostra decaia, em média. Depois de uma meia-vida restam 50%, depois de duas restam 25% e depois de três restam 12,5%.' },
  { question: 'Por que o campo atómico nem sempre bate com a percentagem exata?', answer: 'O decaimento radioativo é probabilístico. A fórmula fornece a fração esperada para uma amostra muito grande, enquanto o campo simula átomos individuais com limiares aleatórios. Amostras pequenas mostram ruído estatístico naturalmente.' },
  { question: 'O medidor de atividade é igual aos átomos restantes?', answer: 'Para um único isótopo, a atividade é proporcional ao número de núcleos não decaídos. Se restam 30% dos átomos, a atividade instantânea também fica por volta de 30% da atividade inicial.' },
  { question: 'Esta calculadora serve para datação por radiocarbono?', answer: 'Sim, para cálculos conceituais. A datação com Carbono-14 compara a atividade restante com a de material vivo, mas análises reais também corrigem curvas de calibração, contaminação e preparo da amostra.' },
  { question: 'Todo isótopo decai para um único produto estável?', answer: 'Nem sempre. Alguns isótopos decaem por cadeias com vários produtos filhos. Esta ferramenta modela a meia-vida do isótopo pai, a grandeza principal para estimar núcleos pais restantes e atividade.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isótopo',
    sampleAtoms: 'Átomos da amostra',
    elapsedTime: 'Tempo decorrido',
    halfLife: 'Meia-vida',
    remaining: 'Restante',
    decayed: 'Decaido',
    activity: 'Atividade relativa',
    timeUnit: 'Unidade de tempo',
    expectedCurve: 'Curva esperada',
    atomField: 'Campo atomico',
    presetUse: 'Uso comum',
    oneHalfLife: '1 meia-vida',
    twoHalfLives: '2 meias-vidas',
    fourHalfLives: '4 meias-vidas',
    custom: 'Personalizado',
    liveAtoms: 'Átomos ativos',
    decayedAtoms: 'Átomos decaídos',
    resetSeed: 'Novo padrão atómico',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de meia-vida radioativa: átomos restantes, atividade e exemplos de isótopos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use esta calculadora de decaimento radioativo para estimar quanto resta de um isótopo instável depois de um certo tempo. Ela atende às buscas mais comuns sobre meia-vida: encontrar a fórmula, aplicá-la a isótopos reais, comparar núcleos pais restantes e decaídos e entender por que a atividade diminui com o envelhecimento da amostra.',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta combina dois modelos complementares. Os resultados numéricos usam a equação exponencial padrão, enquanto o campo atómico simula núcleos individuais com limiares estocásticos.',
    },
    {
      type: 'title',
      text: 'Fórmula de decaimento radioativo usada pela calculadora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A fórmula é <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> é o número inicial de núcleos pais, <strong>N(t)</strong> é o número esperado restante após o tempo <strong>t</strong>, e <strong>T1/2</strong> é a meia-vida.',
    },
    {
      type: 'paragraph',
      html: 'Por exemplo, se uma amostra começa com 1.000 núcleos pais e passam duas meias-vidas, a quantidade esperada restante é 1.000 x (1/2)^2 = 250 núcleos. A quantidade decaída é de 750 núcleos.',
    },
    {
      type: 'table',
      headers: ['Tempo decorrido', 'Fator', 'Núcleos pais restantes', 'Atividade relativa'],
      rows: [
        ['0 meias-vidas', '(1/2)^0', '100%', '100%'],
        ['1 meia-vida', '(1/2)^1', '50%', '50%'],
        ['2 meias-vidas', '(1/2)^2', '25%', '25%'],
        ['3 meias-vidas', '(1/2)^3', '12,5%', '12,5%'],
        ['5 meias-vidas', '(1/2)^5', '3,125%', '3,125%'],
        ['10 meias-vidas', '(1/2)^10', '0,098%', '0,098%'],
      ],
    },
    {
      type: 'title',
      text: 'Como calcular a atividade restante após uma meia-vida',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para um único isótopo pai, a atividade é proporcional ao número de núcleos não decaídos. Se restam 25% do isótopo pai, a atividade é de cerca de 25% da atividade inicial.',
    },
    {
      type: 'paragraph',
      html: 'Essa relação é fundamental em medicina nuclear e radioproteção.',
    },
    {
      type: 'title',
      text: 'Exemplos: Carbono-14, Iodo-131, Tecnécio-99m, Urânio-238 e Rádon-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Isótopo', 'Meia-vida aproximada', 'Uso comum', 'Significado do resultado'],
      rows: [
        ['Carbono-14', '5.730 anos', 'Datação por radiocarbono', 'Atividade C-14 restante em matéria orgânica.'],
        ['Iodo-131', '8,02 dias', 'Terapia médica', 'Queda da atividade em dias após tratamento.'],
        ['Tecnécio-99m', '6,01 horas', 'Imagem diagnóstica', 'Por que a atividade médica útil cai em uma jornada clínica.'],
        ['Urânio-238', '4,47 bilhões de anos', 'Datação geológica', 'Por que isótopos de longa vida continuam mensuráveis em escala geológica.'],
        ['Rádon-222', '3,82 dias', 'Exposição interna', 'Evolução de uma fonte gasosa ao longo de dias.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Estes exemplos cobrem diferentes escalas de tempo e aplicações científicas.',
    },
    {
      type: 'title',
      text: 'Como ler a simulação atómica estocástica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O campo atómico é modelado estocasticamente. Para amostras pequenas, os resultados oscilam em torno do valor teórico.',
    },
    {
      type: 'paragraph',
      html: 'A curva suave aparece apenas quando se soma um grande número de eventos aleatórios independentes.',
    },
    {
      type: 'title',
      text: 'Casos de uso da calculadora de meia-vida',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ensino de física:</strong> cálculo de núcleos restantes e conexão com modelo visual.',
        '<strong>Química nuclear:</strong> comparação de estabilidade de isótopos.',
        '<strong>Datação por radiocarbono:</strong> compreensão do decaimento em amostras orgânicas.',
        '<strong>Medicina nuclear:</strong> planejamento com isótopos de meia-vida curta.',
        '<strong>Proteção radiológica:</strong> estimativa de queda de atividade ao longo do tempo.',
      ],
    },
    {
      type: 'title',
      text: 'Limitações importantes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora modela o isótopo pai com uma única meia-vida.',
    },
    {
      type: 'paragraph',
      html: 'Use os resultados como modelo didático e estimativa científica.',
    },
    { type: 'paragraph', html: 'Esta explicação esclarece as hipóteses do modelo e mostra como os parâmetros alteram o resultado. Mude uma variável de cada vez e compare várias execuções, para relacionar cada diferença com uma causa identificável. A visualização é uma aproximação educativa: um sistema real inclui mais variáveis, incertezas de medição e condições de fronteira. Use o resultado para compreender ordens de grandeza, formular perguntas e comparar cenários. Para uma decisão prática ou análise científica, confirme sempre os dados primários, as unidades e as fontes especializadas. Registe as definições usadas para repetir o cálculo e discutir as suas limitações.' },
    { type: 'paragraph', html: 'Repita o cálculo com as mesmas definições e altere depois uma entrada de cada vez. Registe os valores iniciais, as regras usadas e os limites, para distinguir uma tendência do modelo de uma variação numérica ou casual. O resultado tem finalidade educativa e deve ser lido com as hipóteses e limitações. Medições ou projetos reais exigem dados adicionais e revisão especializada.' },
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
