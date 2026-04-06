import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'calculadora-probabilidad-simulacion',
  title: 'Calculadora de Probabilidad de Simulación: ¿Vives en un Universo Virtual?',
  description: 'Analiza si nuestra realidad es una simulación usando el argumento trilemático de Nick Bostrom. Calcula la probabilidad existencial con 4 parámetros clave.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía',
  ui: {
    copied: 'Copiado',
    noHistory: 'No historial',
    load: 'Cargar',
    delete: 'Eliminar',
    simulationParameters: 'Parámetros de Simulación',
    fpLabel: 'fp',
    fpSub: 'Progreso Tecnológico',
    flLabel: 'fl',
    flSub: 'Supervivencia de la Especie',
    fiLabel: 'fi',
    fiSub: 'Interés en Simular',
    nLabel: 'N',
    nSub: 'Escala de Simulación',
    probabilityTitle: 'Probabilidad de Simulación',
    trilemmaResult: 'Veredicto del Trilema',
    scenario1: 'Escenario 1: Extinción',
    scenario2: 'Escenario 2: Desinterés',
    scenario3: 'Escenario 3: Estamos Simulados',
  },
  seo: [
    {
      type: 'title',
      text: '¿Vivimos en una simulación? La ciencia tras el argumento de Nick Bostrom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La idea de que nuestra realidad podría ser una construcción artificial, una simulación por ordenador extremadamente avanzada, ha pasado de ser ciencia ficción a un debate filosófico y científico serio. En 2003, el filósofo Nick Bostrom de la Universidad de Oxford publicó un artículo titulado <em>"¿Vives en una simulación informática?"</em>, donde propuso un argumento trilemático que desafía nuestra percepción de la existencia.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de probabilidad de simulación utiliza los parámetros clave derivados de la hipótesis de Bostrom para estimar las posibilidades de que tu conciencia sea, de hecho, el resultado de un proceso de software ejecutado por una civilización post-humana.',
    },
    {
      type: 'title',
      text: 'Los pilares del argumento de la simulación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El argumento de Bostrom no afirma que estemos en una simulación, sino que al menos una de las tres siguientes proposiciones es casi con seguridad verdadera:',
    },
    {
      type: 'list',
      items: [
        '<strong>Extinción Prematura:</strong> La especie humana se extinguirá antes de alcanzar una etapa post-humana capaz de realizar simulaciones de ancestros.',
        '<strong>Desinterés Tecnológico:</strong> Cualquier civilización post-humana no tendrá interés en ejecutar simulaciones de sus antepasados por razones éticas o recreativas.',
        '<strong>Simulación Ubicua:</strong> Casi con toda seguridad estamos viviendo en una simulación porque el número de mentes simuladas supera masivamente al de las mentes biológicas originales.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo interpretar los parámetros',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para usar esta herramienta correctamente, es fundamental entender qué representan las variables del modelo:',
    },
    {
      type: 'table',
      headers: ['Variable', 'Concepto', 'Significado'],
      rows: [
        ['<strong>fp</strong>', 'Progreso Tecnológico', 'Probabilidad de que una civilización alcance la capacidad de simular mentes.'],
        ['<strong>fl</strong>', 'Tasa de Supervivencia', 'Probabilidad de que la civilización no se autodestruya antes de llegar a ese punto.'],
        ['<strong>fi</strong>', 'Interés en Simular', 'Porcentaje de civilizaciones que deciden usar su poder para crear mundos virtuales.'],
        ['<strong>N</strong>', 'Escala de Simulación', 'Número total de simulaciones que una sola civilización post-humana crearía.'],
      ],
    },
    {
      type: 'title',
      text: '¿Por qué la probabilidad suele ser tan alta?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si asumimos que una civilización post-humana tendría un poder de cómputo inmenso (como el de una Esfera de Dyson o un cerebro de Júpiter), el número <strong>N</strong> (simulaciones) podría ser de miles de millones. Si <em>N</em> es muy grande, incluso con valores bajos de interés (<em>fi</em>), el número de seres simulados superará por órdenes de magnitud a los seres originales.',
    },
    {
      type: 'title',
      text: 'Evidencias y límites de la computación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Desde la física cuántica hasta la cosmología, algunos científicos buscan "glitches" o límites en la resolución de nuestra realidad. Si el universo tiene una longitud mínima (Longitud de Planck) o comportamientos que parecen optimizaciones de código (como el entrelazamiento cuántico), la hipótesis gana adeptos en el campo de la física digital.',
    },
    {
      type: 'title',
      text: 'Reflexión ética',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si descubriéramos que somos una simulación, ¿cambiaría nuestra moral? Para Bostrom, lo que importa es la experiencia de la conciencia. Una mente simulada sufre y ama igual que una biológica.',
    },
    {
      type: 'title',
      text: 'Casos de uso de la calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Educación Científica:</strong> Comprender modelos probabilísticos aplicados a la cosmología.',
        '<strong>Filosofía Contemporánea:</strong> Explorar el trilema de Bostrom de forma interactiva.',
        '<strong>Futurología:</strong> Analizar el impacto de la tasa de supervivencia de la especie en nuestro destino.',
        '<strong>Curiosidad Existencial:</strong> Evaluar tus propias creencias sobre el futuro de la tecnología.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Qué es exactamente el argumento de Bostrom?',
      answer: 'Nick Bostrom propone que si una civilización post-humana tiene suficiente poder de cómputo, podría crear millones de simulaciones de universos anteriores. Si eso ocurre, el número de seres simulados sería masivamente superior al de los seres biológicos originales. Por lo tanto, estadísticamente es más probable que seas simulado que original.',
    },
    {
      question: '¿Las probabilidades altas significan que definitivamente somos una simulación?',
      answer: 'No. Las probabilidades altas sugieren que es una posibilidad seria que debe considerarse, pero no es una prueba. El argumento se basa en suposiciones sobre el futuro de la tecnología que podrían no cumplirse.',
    },
    {
      question: '¿Cómo afectaría el saber que somos una simulación?',
      answer: 'Filosóficamente, muchos argumentan que no cambia nada fundamental. Si tú y tus seres queridos somos simulados juntos, tus experiencias, emociones y relaciones siguen siendo reales para ti. La experiencia vivida es lo que importa, no el sustrato.',
    },
    {
      question: '¿Hay evidencia científica de que estamos en una simulación?',
      answer: 'No hay evidencia concluyente. Algunos físicos señalan anomalías en mecánica cuántica (cuantización, entrelazamiento) como posibles "optimizaciones computacionales", pero son interpretaciones especulativas.',
    },
    {
      question: '¿Qué valor debería asignar a "N" (escala de simulación)?',
      answer: 'Depende de tus creencias sobre el futuro de la computación. Valores bajos (100-1000) asumen limitaciones de recursos. Valores altos (millones) asumen poder computacional prácticamente ilimitado. La mayoría de discusiones científicas usan valores entre 1000 y 1 billón.',
    },
  ],
  bibliography: [
    {
      name: 'Bostrom, N. (2003). Are You Living in a Computer Simulation? The Philosophical Quarterly, 53(211), 243-255.',
      url: 'https://www.nickbostrom.com/sim.html',
    },
    {
      name: 'Chalmers, D. J. (2005). The Matrix as Metaphysics. Science Fiction and Philosophy, 132-142.',
      url: 'https://consc.net/papers/matrix.html',
    },
    {
      name: 'Gefter, A. (2014). The Man Who Tried to Redeem the World with Logic: The Life and Work of Kurt Gödel. Nautilus Magazine.',
      url: 'https://nautil.us/articles/the-man-who-tried-to-redeem-the-world-with-logic',
    },
    {
      name: 'Tegmark, M. (2014). Our Mathematical Universe: My Quest for the Ultimate Nature of Reality. Knopf.',
      url: 'https://space.mit.edu/home/tegmark/mathematical-universe.html',
    },
    {
      name: 'Tyson, N. deG. (2014). Welcome to the Universe: An Astrophysical Tour. Princeton University Press.',
      url: 'https://www.haydenplanetarium.org/',
    },
  ],
  howTo: [
    {
      name: 'Ajustar Progreso Tecnológico',
      text: 'Estima la probabilidad de que la humanidad alcance el nivel post-humano. 50% es neutral; aumenta si crees que la IA y la computación seguirán avanzando exponencialmente.',
    },
    {
      name: 'Establecer Tasa de Supervivencia',
      text: 'Considera la probabilidad de que la humanidad no se autodestruya. Influye en guerras, cambio climático, pandemias. Valores altos = optimismo sobre nuestro futuro.',
    },
    {
      name: 'Evaluar Interés en Simular',
      text: 'Si la humanidad alcanzara el nivel post-humano, ¿querría crear simulaciones de su pasado? Considera motivaciones: investigación científica, entretenimiento, preservación histórica.',
    },
    {
      name: 'Interpretar el resultado',
      text: 'Observa cómo cambian las probabilidades. Resultados > 90% sugieren que la simulación es casi inevitable si se cumplen los supuestos. Juega con los parámetros para explorar diferentes futuros.',
    },
  ],
  schemas: [],
};
