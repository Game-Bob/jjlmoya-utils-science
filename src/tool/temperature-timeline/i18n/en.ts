import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-temperature-timeline';
const description = 'Explore the average temperature history of Earth across geologic eras from the early Archean to the modern Anthropocene.';
const title = 'Planet Average Temperature Timeline: Geologic Climate History';

const howTo = [
  {
    name: 'Select a geologic epoch',
    text: 'Click a notch on the vertical scale ruler or drag the planetary canvas to travel through geologic time.',
  },
  {
    name: 'Check global average temperature',
    text: 'Observe the monumental temperature readout and its deviation from today\'s baseline.',
  },
  {
    name: 'Watch the planetary canvas',
    text: 'Observe how the abstract earth expands, contracts, and changes colors to represent extreme heat or glacial ice.',
  },
];

const faq = [
  {
    question: 'Was Earth hotter in the past than it is today?',
    answer: 'Yes, during eras like the Mesozoic and early Eocene, global average temperatures were up to 10 to 15 degrees Celsius warmer than today.',
  },
  {
    question: 'What is Snowball Earth?',
    answer: 'Snowball Earth refers to periods during the Proterozoic eon when the planet was almost entirely covered in glacial ice.',
  },
  {
    question: 'What drives long-term geological climate changes?',
    answer: 'Long-term changes are driven by plate tectonics, changes in greenhouse gas concentrations, volcanic activity, and variations in Earth\'s orbit.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Earth Temperature Timeline',
    sub: 'Explore Earth\'s geologic climate epochs',
    ageLabel: 'Age:',
    tempLabel: 'Average Temperature:',
    selectPrompt: 'Select a geologic period on the interactive chart below to view climatic details.',
    epoch_archean_name: 'Archean Eon',
    epoch_archean_age: '4.0 to 2.5 billion years ago',
    epoch_archean_desc: 'Extremely hot earth with a methane and carbon dioxide rich atmosphere. Liquid oceans existed despite a faint young sun due to greenhouse effect.',
    epoch_proterozoic_name: 'Proterozoic Eon',
    epoch_proterozoic_age: '2.5 billion to 541 million years ago',
    epoch_proterozoic_desc: 'Rise of oxygen causes the Huronian glaciation, leading to one of the first Snowball Earth periods, followed by stabilization.',
    epoch_paleozoic_name: 'Paleozoic Era',
    epoch_paleozoic_age: '541 to 252 million years ago',
    epoch_paleozoic_desc: 'Explosion of life in oceans and migration to land. Ended with the Permian-Triassic extinction, the warmest phase of this era.',
    epoch_mesozoic_name: 'Mesozoic Era',
    epoch_mesozoic_age: '252 to 66 million years ago',
    epoch_mesozoic_desc: 'The age of dinosaurs. Greenhouse conditions prevailed worldwide with no polar ice caps, resulting in high ocean levels and warm climates.',
    epoch_cenozoic_name: 'Cenozoic Era',
    epoch_cenozoic_age: '66 million years ago to Present',
    epoch_cenozoic_desc: 'Gradual cooling trend culminating in the Quaternary glaciations (Ice Ages) and the modern Holocene epoch.',
    epoch_anthropocene_name: 'Anthropocene Epoch',
    epoch_anthropocene_age: 'Present Day and Future',
    epoch_anthropocene_desc: 'Rapid warming driven by greenhouse gas emissions, deviating from the long term natural cooling trend of the late Cenozoic.',
  },
  seo: [
    {
      type: 'title',
      text: 'CLIMATOLOGY: Geologic Temperature History of Earth',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The Earth\'s climate has constantly shifted over its 4.5 billion year history, oscillating between icehouse and greenhouse states. These shifts are determined by carbon cycles, changes in atmospheric chemistry, plate tectonics, and variations in solar radiation. Understanding these paleoclimates is vital for contextualizing modern climate trends and forecasting future ecological changes.',
    },
    {
      type: 'title',
      text: 'The Greenhouse Eras: Mesozoic and Paleozoic Climates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'During the Mesozoic Era, the age of dinosaurs, Earth experienced extreme greenhouse conditions. Atmospheric carbon dioxide levels surged due to volcanic outgassing during the breakup of Pangaea. Average global temperatures reached 22 °C, with no permanent polar ice sheets. Tropical and temperate forests extended to the high latitudes, and sea levels rose to flood large continental areas, showing the power of greenhouse forcing.',
    },
    {
      type: 'title',
      text: 'The Icehouse States: Proterozoic and Cenozoic Cooling',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Conversely, Earth has entered cold icehouse states several times. During the Proterozoic Eon, chemical weathering of new continental crust absorbed carbon dioxide, leading to severe glaciations known as Snowball Earth. Ice sheets reached sea level at the equator, turning the planet into a reflective white sphere. The Cenozoic Era has experienced a gradual cooling trend over the last 50 million years, driven by the uplift of the Himalayas, culminating in the Quaternary ice ages.',
    },
    {
      type: 'title',
      text: 'The Anthropocene: A New Epoch of Rapid Change',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Today, Earth has entered the Anthropocene, where human activity is the primary driver of climate change. Industrial emissions of greenhouse gases have disrupted the natural orbital cycles that govern ice age cycles. Average temperatures have risen rapidly, pushing the planet out of the stable Holocene baseline. Exploring Earth\'s geological past highlights the scale and speed of this modern warming, illustrating how past warming events triggered mass extinctions.',
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
