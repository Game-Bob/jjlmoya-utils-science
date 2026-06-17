import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'explorador-fractal-mandelbrot';
const title = 'Calculadora de Fractais de Mandelbrot e Explorador de Autossimilaridade';
const description = 'Explore o conjunto de Mandelbrot, amplie os limites fractais autossimilares e compare a profundidade de iteracao, o contraste de cor e as coordenadas do plano complexo.';

const howTo = [
  {
    name: 'Escolha uma regiao do conjunto de Mandelbrot',
    text: 'Comece pelo conjunto completo ou va diretamente para uma regiao de alto detalhe, como o vale do cavalo marinho ou um minibrot espiral.',
  },
  {
    name: 'Amplie clicando na imagem',
    text: 'Clique em qualquer ponto da tela para centralizar novamente o plano complexo e ampliar o fractal em torno dessa coordenada.',
  },
  {
    name: 'Ajuste a profundidade de iteracao e o contraste de cor',
    text: 'Aumente o orcamento de iteracoes para revelar uma estrutura de borda mais fina, depois ajuste o contraste e a paleta para tornar as bandas de tempo de escape mais faceis de ler.',
  },
];

const faq = [
  {
    question: 'O que a calculadora do conjunto de Mandelbrot mostra?',
    answer: 'Ela mostra quais numeros complexos c mantem a recorrencia z(n+1) = z(n)^2 + c limitada ao comecar de z = 0. Os pontos que nunca escapam dentro do orcamento de iteracao selecionado sao coloridos como membros do conjunto, enquanto os pontos externos sao coloridos de acordo com a rapidez com que sua orbita escapa.',
  },
  {
    question: 'Por que a borda de Mandelbrot contem tantos detalhes?',
    answer: 'A borda separa orbitas estaveis e fugitivas, e pequenas mudancas de coordenadas perto dessa borda podem alterar completamente o comportamento de longo prazo. Essa sensibilidade cria bulbos aninhados, espirais, filamentos e copias em miniatura que aparecem em muitos niveis de ampliacao.',
  },
  {
    question: 'O conjunto de Mandelbrot e verdadeiramente autossimilar?',
    answer: 'Nao e perfeitamente autossimilar no mesmo sentido estrito de um triangulo de Sierpinski, mas e ricamente quase-autossimilar. Pequenas copias de todo o conjunto aparecem por todo o plano, muitas vezes distorcidas e conectadas por estruturas ramificadas elaboradas.',
  },
  {
    question: 'O que o numero de iteracoes controla?',
    answer: 'O numero de iteracoes controla quanto tempo a calculadora testa cada ponto antes de decidir que ele provavelmente pertence ao conjunto. Valores mais altos revelam filamentos mais profundos e minibrots mais limpos, mas exigem mais computacao por pixel.',
  },
  {
    question: 'Por que as cores mudam fora da regiao preta?',
    answer: 'As cores externas sao baseadas no tempo de escape: pontos que escapam rapidamente recebem cores diferentes de pontos que permanecem perto do conjunto por muitas iteracoes. A coloracao suave reduz bandas bruscas e facilita a inspecao da geometria das orbitas proximas.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculadora de Fractais de Mandelbrot',
    canvasLabel: 'Tela interativa do conjunto de Mandelbrot',
    presetsLabel: 'Predefinicoes de regiao de Mandelbrot',
    presetFull: 'Conjunto Completo',
    presetSeahorse: 'Vale do Cavalo Marinho',
    presetSpiral: 'Minibrot Espiral',
    centerPoint: 'Centro',
    magnification: 'Ampliacao',
    visibleWindow: 'Janela visivel',
    renderBudget: 'Iteracoes',
    iterationsLabel: 'Profundidade de iteracao',
    contrastLabel: 'Contraste de escape',
    colorLabel: 'Campo de cor',
    paletteEmber: 'Faixas de brasa',
    paletteLagoon: 'Plasma de lagoa',
    paletteInk: 'Espectro de tinta',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora do Conjunto de Mandelbrot para Fractais, Tempo de Escape e Autossimilaridade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de fractais de Mandelbrot renderiza o classico conjunto do plano complexo definido pela iteracao <strong>z(n+1) = z(n)^2 + c</strong>. Ela foi projetada para exploracao em vez de visualizacao passiva: cada clique centraliza novamente o plano, cada zoom expoe uma vizinhanca matematica menor, e o controle deslizante de iteracoes permite decidir o quao profundamente a calculadora deve testar a borda antes de colorir um ponto como estavel ou em fuga.',
    },
    {
      type: 'title',
      text: 'Como ler a imagem de Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A forma central escura marca os pontos cujas orbitas permanecem limitadas dentro do orcamento de iteracao atual. O exterior colorido e um mapa de tempo de escape. Um ponto colorido proximo ao conjunto pode sobreviver centenas de iteracoes antes que sua magnitude exceda o raio de escape, enquanto um ponto distante escapa quase imediatamente. A geometria cientificamente mais interessante geralmente nao esta dentro da forma preenchida, mas ao longo da borda onde os comportamentos limitados e ilimitados se entrelacam.',
    },
    {
      type: 'table',
      headers: ['Controle', 'O que altera', 'Quando aumentar'],
      rows: [
        ['<strong>Profundidade de iteracao</strong>', 'Quantos passos de recorrencia sao testados para cada pixel.', 'Use valores mais altos apos ampliar filamentos finos ou copias em miniatura.'],
        ['<strong>Contraste de escape</strong>', 'O quanto valores de escape suaves sao separados em bandas visiveis.', 'Aumente quando a imagem parecer chapada; diminua quando as cores forem muito agressivas.'],
        ['<strong>Paleta</strong>', 'O mapeamento de cor aplicado aos pontos externos.', 'Troque de paleta para revelar estruturas que podem estar ocultas por um campo de cor.'],
      ],
    },
    {
      type: 'title',
      text: 'Autossimilaridade e Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma das razoes pelas quais o conjunto de Mandelbrot e tao famoso e sua quase-autossimilaridade. Ao ampliar antenas, espirais e vales, voce encontra repetidamente pequenas ilhas semelhantes a Mandelbrot, frequentemente chamadas de minibrots. Essas copias nao sao meramente decorativas. Sua disposicao reflete a dinamica dos mapas quadraticos, incluindo bulbos periodicos, padroes de bifurcacao e regioes onde as orbitas permanecem presas por longos periodos antes de escapar.',
    },
    {
      type: 'title',
      text: 'Por que iteracoes mais altas importam no zoom profundo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na visao do conjunto completo, um limite de iteracao modesto fornece uma imagem reconhecivel. Em ampliacoes mais profundas, no entanto, muitos pontos de borda levam muito mais tempo para revelar se escapam. Se o limite de iteracao for muito baixo, estruturas finas podem parecer falsamente solidas ou turvas. Aumentar o numero de iteracoes melhora a classificacao da borda e permite que a calculadora resolva gavinhas estreitas, bracos espirais e bulbos satelite com mais confianca.',
    },
    {
      type: 'title',
      text: 'Significado matematico das coordenadas complexas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A leitura de coordenadas mostra o centro atual da janela de visualizacao como um numero complexo c = a + bi. O eixo horizontal e a parte real e o eixo vertical e a parte imaginaria. Clicar na tela escolhe uma nova coordenada complexa e entao amplia a janela visivel ao redor dela. Isso torna a ferramenta util para aprender como as regioes visuais do fractal correspondem a localizacoes precisas no plano complexo.',
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
