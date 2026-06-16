import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cosmic-inflation-calculator';
const description = 'Calculate the exponential expansion of the early universe during the cosmic inflationary epoch.';
const title = 'Cosmic Inflation Calculator: Early Universe Expansion';

const howTo = [
  {
    name: 'Choose a scenario or slide values',
    text: 'Select one of the cosmological presets or manually drag the sliders to configure inflation parameters.',
  },
  {
    name: 'Observe scale factor growth',
    text: 'Check how many orders of magnitude space has expanded and read the physical analogy explaining it.',
  },
  {
    name: 'Warp the space-time fabric',
    text: 'Look at the real-time space-time grid canvas dynamically expanding or collapsing under extreme values.',
  },
];

const faq = [
  {
    question: 'What is cosmic inflation?',
    answer: 'Cosmic inflation is a theory of exponential expansion of space in the very early universe, occurring around 10^-36 seconds after the Big Bang.',
  },
  {
    question: 'What are e-folds in cosmology?',
    answer: 'E-folds measure the duration of exponential inflation. If the universe expands by a factor of e^N, the number of e-folds is N.',
  },
  {
    question: 'Why did inflation stop?',
    answer: 'Inflation ended when the inflaton field rolled down to the minimum of its potential, decaying into standard model particles in a process called reheating.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cosmic Inflation Calculator',
    efoldsLabel: 'Number of e-folds (N)',
    energyLabel: 'Initial Energy Scale (GeV)',
    scaleFactorResult: 'Scale Factor Growth',
    reheatingTempResult: 'Estimated Reheating Temperature',
    chartTitle: 'Space-Time Fabric Distortion',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Chaotic',
    presetExtreme: 'Extreme Limits',
    efoldsTooltip: 'Typical models predict between 50 and 60 e-folds to resolve flatness and horizon problems.',
    energyTooltip: 'GUT scale is around 10^16 GeV. Higher scales are close to the Planck limit.',
    scaleFactorTooltip: 'Represents the total size expansion factor from the start to the end of inflation.',
    reheatingTooltip: 'The temperature to which the universe was heated after inflation ended.',
    analogyInsuff: 'Moderate inflation. This expansion is <span class="highlight">insufficient</span> to solve the horizon problem.',
    analogyProton: 'The universe expanded from the size of a <span class="highlight">proton</span> to the size of a <span class="highlight">galaxy</span> in a fraction of a second.',
    analogyObservable: 'The universe expanded from a <span class="highlight">subatomic scale</span> to larger than the <span class="highlight">observable universe</span> in 10^-32 seconds.',
  },
  seo: [
    {
      type: 'title',
      text: 'COSMOLOGY: Understanding the Cosmic Inflation Theory',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cosmic inflation is a cornerstone of modern cosmology. It describes a brief, extremely rapid period of exponential expansion that occurred approximately 10^-36 seconds after the Big Bang. During this epoch, the fabric of space-time expanded by a factor of at least 10^26. This sudden surge stretched the geometry of the early universe, effectively diluting any initial curvature and smoothing out spatial irregularities. This process resolves major issues that classical Big Bang cosmology could not explain on its own.',
    },
    {
      type: 'title',
      text: 'The Horizon Problem Explained',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The horizon problem arises from the uniform temperature of the Cosmic Microwave Background (CMB) radiation across the sky. Without inflation, distant regions of the early universe would have been separated by distances larger than the light-travel distance (their particle horizons). This means they could not have exchanged heat or information to reach thermal equilibrium. Inflation solves this by expanding a tiny, causally connected patch of space into our entire observable universe, ensuring that all regions had a common thermal origin.',
    },
    {
      type: 'title',
      text: 'The Flatness Problem and Spatial Geometry',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The flatness problem concerns the spatial curvature of the universe. Observations show that the universe\'s energy density is remarkably close to the critical density required for a flat space. In classical Big Bang theory, any tiny deviation from flatness in the early universe would grow rapidly over time. Inflation solves this problem by stretching the curvature of space so dramatically that the local geometry of the observable universe becomes indistinguishable from flat, similar to how the surface of a giant balloon appears flat to a tiny insect.',
    },
    {
      type: 'title',
      text: 'Quantum Fluctuations and Cosmic Structure',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beyond solving cosmological puzzles, inflation provides the seeds for all structures in the universe. During this rapid expansion, microscopic quantum fluctuations in the inflaton field were stretched to astronomical scales. These stretched fluctuations became density perturbations-slight variations in the density of matter. Over billions of years, gravity pulled matter into the denser regions, eventually forming the vast network of galaxies, stars, and planets we observe today.',
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
