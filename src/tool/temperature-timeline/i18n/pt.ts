import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-media-planeta';
const title = 'Cronologia da Temperatura Média do Planeta';
const description = 'Explore a história da temperatura média da Terra ao longo das eras geológicas.';

const howTo = [
  { name: 'Selecionar uma era', text: 'Clique em uma marca na escala temporal.' },
  { name: 'Verificar a temperatura', text: 'Leia a temperatura média global para o período selecionado.' },
  { name: 'Observar o planeta', text: 'Veja como a tela reage ao estado térmico da Terra.' },
];

const faq = [
  {
    question: 'A Terra já esteve mais quente no passado do que está hoje?',
    answer: 'Sim, a Terra já experimentou climas consideravelmente mais quentes. Durante o Mesozoico (era dos dinossauros) e o início do Eoceno, o planeta encontrava-se num estado de "estufa" (greenhouse) sem calotas polares, com temperaturas médias globais superiores a 22°C (7 a 8°C acima da média atual). Contudo, estas transições ocorreram em escalas de milhões de anos, permitindo a adaptação evolutiva.'
  },
  {
    question: 'O que causou o fenômeno da "Terra Bola de Neve"?',
    answer: 'Ocorreu principalmente durante o Neoproterozoico (há 700 milhões de anos). Foi desencadeado pela redução extrema de gases de efeito estufa, resultante do intemperismo químico acelerado das rochas de silicato após a fragmentação do supercontinente Rodinia. O gelo estendeu-se dos polos ao equador, aumentando o efeito albedo e prendendo o planeta num ciclo de congelamento global.'
  },
  {
    question: 'Como a Terra regula a sua temperatura a longo prazo?',
    answer: 'A Terra possui um termostato natural controlado pelo ciclo geoquímico do carbono, regulado pela tectónica de placas e pelo intemperismo dos silicatos. Quando o planeta aquece, a chuva reage mais rapidamente com rochas silicatadas, removendo CO2 da atmosfera e depositando-o no fundo oceânico como carbonatos, o que reduz o efeito estufa.'
  },
  {
    question: 'Em que difere a mudança climática do Antropoceno do passado geológico?',
    answer: 'A diferença fundamental reside na velocidade. Enquanto transições passadas levavam dezenas de milhares a milhões de anos, o aquecimento do Antropoceno ocorre em poucas décadas. Esta taxa de variação térmica supera a capacidade de adaptação da biosfera atual.'
  },
  {
    question: 'O que foi o Máximo Térmico do Paleoceno-Eoceno (PETM)?',
    answer: 'O PETM foi um evento de aquecimento global extremo ocorrido há cerca de 56 milhões de anos, causado por uma injeção massiva de carbono na atmosfera. Aumentou as temperaturas globais em 5 a 8°C em poucos milhares de anos, sendo considerado o melhor análogo geológico para as mudanças climáticas modernas.'
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia da Temperatura Terrestre',
    sub: 'Explore as eras climáticas geológicas da Terra',
    ageLabel: 'Idade:',
    tempLabel: 'Temperatura Média:',
    selectPrompt: 'Selecione um período geológico.',
    epoch_archean_name: 'Eon Arqueano',
    epoch_archean_age: '4,0 a 2,5 bilhões de anos atrás',
    epoch_archean_desc: 'Terra extremamente quente com atmosfera rica em metano.',
    epoch_proterozoic_name: 'Eon Proterozoico',
    epoch_proterozoic_age: '2,5 bilhões a 541 milhões de anos atrás',
    epoch_proterozoic_desc: 'Aumento do oxigênio causa a glaciação Huroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: '541 a 252 milhões de anos atrás',
    epoch_paleozoic_desc: 'Explosão de vida marinha e colonização terrestre.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: '252 a 66 milhões de anos atrás',
    epoch_mesozoic_desc: 'A era dos dinossauros sob severo efeito estufa.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: '66 milhões de anos atrás ao presente',
    epoch_cenozoic_desc: 'Resfriamento gradual rumo às glaciações.',
    epoch_anthropocene_name: 'Época do Antropoceno',
    epoch_anthropocene_age: 'Presente e futuro',
    epoch_anthropocene_desc: 'Aquecimento acelerado por emissões antropogênicas.',
  },
  seo: [
    { type: 'title', text: 'CLIMATOLOGIA HISTÓRICA: A evolução térmica da Terra através das eras geológicas', level: 2 },
    { type: 'paragraph', html: 'O clima da Terra nunca foi estático. Ao longo de 4,5 bilhões de anos, o planeta oscilou entre estados de estufa (greenhouse) e glaciação (icehouse). Compreender estas flutuações é indispensável para contextualizar a gravidade do aquecimento global atual. Através de isótopos de oxigênio e testemunhos de gelo, os paleoclimatologistas reconstroem a história térmica da Terra.' },
    { type: 'title', text: 'Registro de temperaturas por éon e era geológica', level: 3 },
    { type: 'paragraph', html: 'A história da Terra é dividida em grandes intervalos definidos por mudanças biológicas e geológicas. Abaixo apresenta-se a tabela das temperaturas médias estimadas:' },
    {
      type: 'table',
      headers: ['Época Geológica', 'Idade Aprox.', 'Temp. Média', 'Marcos Climatológicos'],
      rows: [
        ['<strong>Éon Arqueano</strong>', '4,0 - 2,5 Ga', '30 °C', 'Terra primitiva quente com forte efeito estufa.'],
        ['<strong>Éon Proterozoico</strong>', '2,5 Ga - 541 Ma', '12 °C', 'Glaciações globais ("Terra Bola de Neve").'],
        ['<strong>Era Paleozoica</strong>', '541 - 252 Ma', '20 °C', 'Explosão de vida marinha e colonização terrestre.'],
        ['<strong>Era Mesozoica</strong>', '252 - 66 Ma', '22 °C', 'Período de estufa sem gelo polar.'],
        ['<strong>Era Cenozoica</strong>', '66 Ma - presente', '14 °C', 'Resfriamento gradual e ciclos glaciais.'],
        ['<strong>Antropoceno</strong>', 'Presente', '15,2 °C', 'Aquecimento rápido de origem humana.'],
      ],
    },
    { type: 'title', text: 'Extremos térmicos do passado: da glaciação global ao calor do Mesozoico', level: 3 },
    { type: 'paragraph', html: 'A história do planeta inclui eventos climáticos extremos. No Proterozoico a fotossíntese liberou oxigênio oxidando o metano e gerando glaciações. No Mesozoico o vulcanismo saturou a atmosfera com CO2.' },
    { type: 'title', text: 'Fatores que regem o clima planetário em escala geológica', level: 3 },
    { type: 'paragraph', html: 'O clima da Terra a longo prazo resulta de um equilíbrio termodinâmico governado por diversos mecanismos naturais interconectados:' },
    {
      type: 'list',
      items: [
        '<strong>Ciclos de Milankovitch:</strong> Variações orbitais que alteram a radiação solar recebida.',
        '<strong>Ciclo do Carbono Silicato-Carbonato:</strong> Termostato geoquímico a longo prazo.',
        '<strong>Tectônica de Placas:</strong> Deriva continental e intemperismo químico do CO2.',
        '<strong>Efeito Albedo:</strong> Reflexão da luz solar pelo gelo ampliando o resfriamento.',
      ],
    },
    { type: 'title', text: 'O Antropoceno: Uma aceleração térmica sem precedentes na biosfera', level: 3 },
    { type: 'paragraph', html: 'A transição para o Antropoceno marca o impacto direto das atividades humanas nos sistemas planetários. Ao contrário de eventos térmicos passados, o aquecimento atual ocorre a um ritmo extremamente rápido.' },
    { type: 'paragraph', html: 'A cronologia é uma orientação educativa para comparar épocas muito diferentes. As temperaturas são estimativas reconstruídas a partir de indicadores como núcleos de gelo, sedimentos e fósseis, pelo que incluem incertezas e diferenças regionais. Use a tabela para observar ordens de grandeza e considere sempre o contexto geológico juntamente com a média indicada.' },
    { type: 'paragraph', html: 'Esta explicação esclarece as hipóteses do modelo e mostra como os parâmetros alteram o resultado. Mude uma variável de cada vez e compare várias execuções, para relacionar cada diferença com uma causa identificável. A visualização é uma aproximação educativa: um sistema real inclui mais variáveis, incertezas de medição e condições de fronteira. Use o resultado para compreender ordens de grandeza, formular perguntas e comparar cenários. Para uma decisão prática ou análise científica, confirme sempre os dados primários, as unidades e as fontes especializadas. Registe as definições usadas para repetir o cálculo e discutir as suas limitações.' },
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
