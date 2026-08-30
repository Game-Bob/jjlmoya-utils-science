import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'dogal-secilim-genetik-suruklenme-simulatoru';
const title = 'Doğal Seçilim ve Genetik Sürüklenme Simülatörü';
const description =
  'Seçilim baskısı, mutasyon, sürüklenme ve üremenin alel frekanslarını gerçek zamanlı nasıl değiştirdiğini görün.';

const howTo = [
  { name: 'Popülasyonu ayarlayın', text: 'Örneklem büyüklüğünün evrimsel kararlılığı nasıl etkilediğini görmek için küçük veya büyük bir popülasyon seçin.' },
  { name: 'Seçilim ve sürüklenmeyi düzenleyin', text: 'Farklı evrimsel yolları gözlemlemek için seçilim baskısını veya sürüklenmeyi artırın.' },
  { name: 'Nesilleri izleyin', text: 'Simülasyonu başlatın ve baskın özelliği, fitness değerini ve çeşitliliği zaman içinde karşılaştırın.' },
  { name: 'Sonuçları yorumlayın', text: 'Uyarlanmanın ne zaman kazandığını ve şansın ne zaman baskın olduğunu anlamak için ölçümleri kullanın.' },
];

const faq = [
  {
    question: 'Doğal seçilim ile genetik sürüklenme arasındaki fark nedir?',
    answer: 'Doğal seçilim rastgele değildir; yararlı özellikler daha yaygın hale gelir. Genetik sürüklenme ise alel frekanslarında rastgele bir değişikliktir.',
  },
  {
    question: 'Küçük popülasyonlar neden daha hızlı değişir?',
    answer: 'Az sayıda birey olduğunda, rastgele örnekleme sonraki nesil üzerinde daha büyük bir etkiye sahip olur.',
  },
  {
    question: 'Sürüklenme seçilimi bastırabilir mi?',
    answer: 'Evet. Sürüklenme yeterince güçlüyse yararlı bir alel şans eseri yok olabilir.',
  },
  {
    question: 'Bu simülatörde fitness ne anlama gelir?',
    answer: 'Fitness, popülasyonun seçilen çevreye ne kadar iyi uyum sağladığını gösteren basitleştirilmiş bir puandır.',
  },
  {
    question: 'Popülasyon büyüklüğü neden bu kadar önemlidir?',
    answer: 'Rastgele dalgalanmaların alel frekanslarını ne kadar güçlü etkilediğini belirler.',
  },
  {
    question: 'Bu simülatörü ne zaman kullanmalıyım?',
    answer: 'Evrimin arkasındaki sezgiyi, özellikle seçilim ve sürüklenme arasındaki farkı anlamak istediğinizde.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Popülasyon büyüklüğü',
    generations: 'Nesiller',
    mutationRate: 'Mutasyon oranı',
    selectionPressure: 'Seçilim baskısı',
    driftIntensity: 'Sürüklenme yoğunluğu',
    alleleCount: 'Başlangıç alelleri',
    innovationRate: 'İnovasyon oranı',
    run: 'Simülasyonu başlat',
    dominantTrait: 'Baskın özellik',
    fitness: 'Nihai fitness',
    diversity: 'Genetik çeşitlilik',
    evolutionConsole: 'Evrim konsolu',
    populationLabel: 'Popülasyon',
    aliveLabel: 'canlı',
    alleleCountsLabel: 'Alel sayıları',
    alleleDefault: 'Alel 1',
    populationValueLabel: 'Popülasyon',
  },
  seo: [
    {
      type: 'title',
      text: 'Doğal Seçilim vs. Genetik Sürüklenme: Canlı Popülasyonla Evrimi Anlayın',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Doğal seçilim ile genetik sürüklenme arasındaki farkı anlamak istiyorsanız, bu simülatör görsel katmanı sağlar. Statik tanımları okumak yerine popülasyonu gerçek zamanlı izlersiniz.',
    },
    {
      type: 'title',
      text: 'Kontroller Ne Anlama Gelir ve Neden Önemlidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Doğal seçilim evrimin rastgele olmayan kısmıdır. Hayatta kalmayı artıran özelliklerin frekansını yükseltir. Genetik sürüklenme rastgele kısımdır.',
    },
    {
      type: 'paragraph',
      html:
        'Her iki kuvvet de aynı anda etki eder: büyük popülasyonlarda seçilim baskınken, küçük popülasyonlarda şans yararlı özellikleri silebilir.',
    },
    {
      type: 'title',
      text: 'Simülasyon Sonuçları Nasıl Okunur',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Canlı ölçümler baskın özelliği, genetik çeşitliliği, nihai fitness değerini ve popülasyon durumunu gösterir.',
    },
    {
      type: 'title',
      text: 'Popülasyon Büyüklüğü Hikayeyi Neden Değiştirir',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Seçilim baskısı:</strong> Çevrenin bir özelliği ne kadar kayırdığı.',
        '<strong>Sürüklenme yoğunluğu:</strong> Rastgele örnekleme gürültüsü.',
        '<strong>Mutasyon oranı:</strong> Yeni varyasyonların ortaya çıkma sıklığı.',
        '<strong>Alel sayısı:</strong> Sistemdeki başlangıç çeşitliliği.',
        '<strong>Genetik çeşitlilik:</strong> Evrimin ham maddesi.',
      ],
    },
    {
      type: 'paragraph',
      html:
        'Biyolojik sistemlerde seçilim, sürüklenme ve mutasyonu anlamak için pratik bir araç.',
    },
    {
      type: 'title',
      text: 'Denenecek Hızlı Örnekler',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Hedef', 'Değişiklik', 'Beklenen Sonuç'],
      rows: [
        [
          'Seçilimi göstermek',
          'Seçilim baskısını artırın ve sürüklenmeyi azaltın',
          'Bir alel kademeli olarak baskın hale gelir',
        ],
        [
          'Sürüklenmeyi göstermek',
          'Popülasyonu azaltın ve sürüklenmeyi artırın',
          'Alel frekanslarında rastgele dalgalanmalar',
        ],
        [
          'Mutasyonu göstermek',
          'Mutasyon oranını artırın',
          'Düzenli olarak yeni aleller ortaya çıkar',
        ],
      ],
    },
    {
      type: 'paragraph',
      html:
        'Görsel sunum ve gerçek zamanlı ölçümler evrimsel süreçlerin anlaşılmasını kolaylaştırır.',
    },
    { type: 'paragraph', html: 'Bu açıklama modelin varsayımlarını ve parametrelerin sonucu nasıl değiştirdiğini gösterir. Her seferinde yalnızca bir değeri değiştirin ve birkaç çalıştırmayı karşılaştırın; böylece her farkı anlaşılır bir nedene bağlayabilirsiniz. Görselleştirme eğitsel bir yaklaşımdır: gerçek sistemlerde daha fazla değişken, ölçüm belirsizliği ve sınır koşulu bulunur. Sonucu ölçekleri anlamak, sorular oluşturmak ve senaryoları karşılaştırmak için kullanın. Pratik bir karar veya bilimsel analiz için birincil verileri, birimleri ve uzman kaynaklarını ayrıca kontrol edin. Hesabı tekrarlamak ve sınırlarını tartışmak için ayarları not edin.' },
    { type: 'paragraph', html: 'Hesabı aynı ayarlarla tekrarlayın, ardından her seferinde yalnızca bir girdiyi değiştirin. Başlangıç değerlerini, hesaplama kurallarını ve sınırları kaydedin; böylece model eğilimini sayısal değişimden veya rastlantıdan ayırabilirsiniz. Sonuç eğitim amaçlıdır ve varsayımlar ile sınırlamalarla birlikte okunmalıdır. Gerçek ölçüm veya tasarım için ek veri ve uzman incelemesi gerekir.' },
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
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
