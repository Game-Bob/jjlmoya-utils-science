import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-planeta';
const description = 'Explora la historia de la temperatura media de la Tierra a lo largo de las eras geologicas.';
const title = 'Cronologia de la Temperatura Media del Planeta';

const howTo = [
  {
    name: 'Seleccionar era',
    text: 'Haz clic en una muesca de la regla de escala.',
  },
  {
    name: 'Comprobar temperatura',
    text: 'Lee la temperatura media global.',
  },
  {
    name: 'Observar el planeta',
    text: 'Observa como reacciona el lienzo al estado termico.',
  },
];

const faq = [
  {
    question: 'Estaba la Tierra mas caliente en el pasado que hoy?',
    answer: 'Si, durante eras como el Mesozoico las temperaturas medias eran de 10 a 15 grados mas calidas.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia de la Temperatura Terrestre',
    sub: 'Explora las eras climaticas geologicas de la Tierra',
    ageLabel: 'Edad:',
    tempLabel: 'Temperatura Media:',
    selectPrompt: 'Selecciona un periodo geologico.',
    epoch_archean_name: 'Eon Arcaico',
    epoch_archean_age: '4.0 a 2.5 mil millones de anos atras',
    epoch_archean_desc: 'Tierra extremadamente caliente con atmosfera de metano y CO2.',
    epoch_proterozoic_name: 'Eon Proterozoico',
    epoch_proterozoic_age: '2.5 mil millones a 541 millones de anos atras',
    epoch_proterozoic_desc: 'El oxigeno causa la glaciacion huroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: '541 a 252 millones de anos atras',
    epoch_paleozoic_desc: 'Explosion de vida en oceanos y migracion a la tierra.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: '252 a 66 millones de anos atras',
    epoch_mesozoic_desc: 'La era de los dinosaurios con condiciones de invernadero.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: '66 millones de anos atras al Presente',
    epoch_cenozoic_desc: 'Enfriamiento gradual hasta glaciaciones cuaternarias.',
    epoch_anthropocene_name: 'Epoca del Antropoceno',
    epoch_anthropocene_age: 'Dia Presente y Futuro',
    epoch_anthropocene_desc: 'Calentamiento rapido por gases de efecto invernadero.',
  },
  seo: [
    {
      type: 'title',
      text: 'CLIMATOLOGIA: Historia de la Temperatura Geologica de la Tierra',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El clima de la Tierra ha cambiado constantemente a lo largo de sus 4.500 millones de anos de historia, oscilando entre estados de glaciacion e invernadero. Estos cambios son determinados por los ciclos del carbono y la tectonica de placas.',
    },
    {
      type: 'title',
      text: 'Las Eras de Invernadero: Climas del Mesozoico y Paleozoico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Durante la Era Mesozoica, la epoca de los dinosaurios, la Tierra experimento condiciones extremas de invernadero. Las temperaturas globales medias alcanzaron los 22 grados.',
    },
    {
      type: 'title',
      text: 'Los Estados de Glaciacion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Por el contrario, la Tierra ha entrado en estados frios de glaciacion varias veces. Durante el Eon Proterozoico, la meteorizacion quimica redujo el dioxido de carbono, provocando una glaciacion global conocida como Tierra Bola de Nieve.',
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
