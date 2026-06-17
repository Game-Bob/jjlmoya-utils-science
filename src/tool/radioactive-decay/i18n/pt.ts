import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-meia-vida-decaimento-radioativo';
const title = 'Calculadora de meia vida e decaimento radioativo';
const description = 'Simule decaimento radioativo com isotopos reais, formula de meia-vida, campo atomico estocastico, quantidade restante e atividade relativa.';

const howTo = [
  { name: 'Escolha um isotopo', text: 'Comece com Carbono-14, Iodo-131, Uranio-238, Tecnecio-99m ou Radon-222. Cada preset carrega uma meia-vida realista e o contexto cientifico em que costuma ser usado.' },
  { name: 'Defina a amostra e o tempo', text: 'Ajuste o numero de atomos representados e avance o tempo para ver como a fracao restante segue a lei exponencial da meia-vida.' },
  { name: 'Compare matematica exata e acaso atomico', text: 'Use o resultado deterministico como valor esperado e observe o campo atomico para entender por que amostras pequenas oscilam em torno da curva teorica.' },
  { name: 'Interprete a atividade', text: 'A atividade cai na mesma proporcao dos nucleos nao decaidos, por isso o medidor mostra quanto da taxa de radiacao inicial ainda resta.' },
];

const faq = [
  { question: 'O que significa meia-vida?', answer: 'Meia-vida e o tempo necessario para que metade dos nucleos instaveis de uma amostra decaia, em media. Depois de uma meia-vida restam 50%, depois de duas restam 25% e depois de tres restam 12,5%.' },
  { question: 'Por que o campo atomico nem sempre bate com a porcentagem exata?', answer: 'O decaimento radioativo e probabilistico. A formula fornece a fracao esperada para uma amostra muito grande, enquanto o campo simula atomos individuais com limiares aleatorios. Amostras pequenas mostram ruido estatistico naturalmente.' },
  { question: 'O medidor de atividade e igual aos atomos restantes?', answer: 'Para um unico isotopo, a atividade e proporcional ao numero de nucleos nao decaidos. Se restam 30% dos atomos, a atividade instantanea tambem fica por volta de 30% da atividade inicial.' },
  { question: 'Esta calculadora serve para datacao por radiocarbono?', answer: 'Sim, para calculos conceituais. A datacao com Carbono-14 compara a atividade restante com a de material vivo, mas analises reais tambem corrigem curvas de calibracao, contaminacao e preparo da amostra.' },
  { question: 'Todo isotopo decai para um unico produto estavel?', answer: 'Nem sempre. Alguns isotopos decaem por cadeias com varios produtos filhos. Esta ferramenta modela a meia-vida do isotopo pai, a grandeza principal para estimar nucleos pais restantes e atividade.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotopo',
    sampleAtoms: 'Atomos da amostra',
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
    liveAtoms: 'Atomos ativos',
    decayedAtoms: 'Atomos decaidos',
    resetSeed: 'Novo padrao atomico',
  },
  seo: [
    { type: 'title', text: 'Calculadora de meia-vida radioativa: atomos restantes, atividade e exemplos de isotopos', level: 2 },
    { type: 'paragraph', html: 'Use esta calculadora de decaimento radioativo para estimar quanto resta de um isotopo instavel depois de um certo tempo. Ela atende as buscas mais comuns sobre meia-vida: encontrar a formula, aplica-la a isotopos reais, comparar nucleos pais restantes e decaidos e entender por que a atividade diminui com o envelhecimento da amostra.' },
    { type: 'paragraph', html: 'A ferramenta combina dois modelos. Os resultados numericos usam a equacao exponencial de decaimento, enquanto o campo atomico simula nucleos individuais com limiares estocasticos. Assim, funciona como calculadora rapida e como explicacao visual de por que o decaimento e previsivel em conjunto, mas aleatorio em cada atomo.' },
    { type: 'title', text: 'Formula de decaimento radioativo usada', level: 3 },
    { type: 'paragraph', html: 'A formula e <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> e o numero inicial de nucleos pais, <strong>N(t)</strong> e o numero esperado restante apos o tempo <strong>t</strong>, e <strong>T1/2</strong> e a meia-vida. O expoente <strong>t / T1/2</strong> conta quantas meias-vidas passaram.' },
    { type: 'paragraph', html: 'Se uma amostra comeca com 1.000 nucleos pais e passam duas meias-vidas, o restante esperado e 1.000 x (1/2)^2 = 250 nucleos. A parte decaida e a diferenca: 750 nucleos. O mesmo calculo vale para segundos, horas, dias, anos ou bilhoes de anos.' },
    { type: 'table', headers: ['Tempo decorrido', 'Fator', 'Nucleos pais restantes', 'Atividade relativa'], rows: [['0 meias-vidas', '(1/2)^0', '100%', '100%'], ['1 meia-vida', '(1/2)^1', '50%', '50%'], ['2 meias-vidas', '(1/2)^2', '25%', '25%'], ['3 meias-vidas', '(1/2)^3', '12,5%', '12,5%'], ['5 meias-vidas', '(1/2)^5', '3,125%', '3,125%'], ['10 meias-vidas', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Como calcular a atividade restante', level: 3 },
    { type: 'paragraph', html: 'Para um unico isotopo pai, a atividade e proporcional ao numero de nucleos nao decaidos. Se restam 25% do isotopo pai, a atividade desse isotopo tambem fica em torno de 25% da atividade inicial.' },
    { type: 'paragraph', html: 'Essa relacao e importante em medicina nuclear e seguranca radiologica. O Tecnecio-99m perde atividade em horas, enquanto o Iodo-131 permanece relevante por dias, afetando tratamento, monitoramento e orientacoes de exposicao.' },
    { type: 'title', text: 'Exemplos: Carbono-14, Iodo-131, Tecnecio-99m, Uranio-238 e Radon-222', level: 3 },
    { type: 'table', headers: ['Isotopo', 'Meia-vida aproximada', 'Uso comum', 'O que o resultado mostra'], rows: [['Carbono-14', '5.730 anos', 'Datacao por radiocarbono', 'Quanta atividade de Carbono-14 pai resta em material que ja foi vivo.'], ['Iodo-131', '8,02 dias', 'Terapia medica e incidentes nucleares', 'A rapidez com que a atividade cai ao longo de dias.'], ['Tecnecio-99m', '6,01 horas', 'Imagem diagnostica', 'Por que a atividade medica util se esvai em uma jornada clinica.'], ['Uranio-238', '4,47 bilhoes de anos', 'Datacao geologica', 'Por que isotopos de vida muito longa seguem mensuraveis na historia da Terra.'], ['Radon-222', '3,82 dias', 'Radiacao interna e cadeias de decaimento', 'Como uma fonte gasosa de exposicao muda em poucos dias.']] },
    { type: 'paragraph', html: 'Esses exemplos cobrem diferentes escalas de tempo e intencoes de busca: arqueologia para Carbono-14, atividade medica para Iodo-131 e Tecnecio-99m, exposicao ambiental para Radon-222 e tempo geologico para Uranio-238.' },
    { type: 'title', text: 'Como ler a simulacao atomica estocastica', level: 3 },
    { type: 'paragraph', html: 'O campo atomico animado e propositalmente estocastico. A equacao da o valor esperado para uma amostra grande, mas cada nucleo decai ao acaso. Amostras pequenas podem ficar um pouco acima ou abaixo de 50% apos uma meia-vida; amostras maiores se aproximam mais da curva teorica.' },
    { type: 'paragraph', html: 'Meia-vida nao significa que cada atomo espera um temporizador e entao metade desaparece de uma vez. Cada nucleo instavel tem uma probabilidade constante de decair por unidade de tempo. A curva suave aparece quando muitos eventos aleatorios independentes sao contados juntos.' },
    { type: 'title', text: 'Usos da calculadora', level: 3 },
    { type: 'list', items: ['<strong>Fisica escolar:</strong> calcular nucleos pais restantes apos um numero de meias-vidas.', '<strong>Quimica e ciencia nuclear:</strong> comparar estabilidade, velocidade de decaimento e atividade relativa.', '<strong>Intuicao para radiocarbono:</strong> entender por que amostras antigas tem menos Carbono-14.', '<strong>Planejamento de isotopos medicos:</strong> ver por que meias-vidas curtas sao uteis em imagem diagnostica.', '<strong>Educacao em seguranca radiologica:</strong> estimar a queda da atividade sem confundir meia-vida com desaparecimento imediato.'] },
    { type: 'title', text: 'Limitacoes importantes', level: 3 },
    { type: 'paragraph', html: 'Esta calculadora modela o isotopo pai com uma unica meia-vida. Medicoes reais podem exigir correcoes de eficiencia do detector, radiacao de fundo, razoes de ramificacao, produtos filhos, eliminacao biologica, forma quimica, blindagem e curvas de calibracao.' },
    { type: 'paragraph', html: 'Use o resultado como estimativa cientifica clara e modelo didatico, nao como substituto de orientacao de seguranca radiologica, instrucoes medicas, dosimetria ou analise laboratorial de datacao.' },
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
