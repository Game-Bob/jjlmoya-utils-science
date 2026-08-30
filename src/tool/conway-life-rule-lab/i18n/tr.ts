import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conway-hayat-oyunu-kural-laboratuvari';
const title = 'Conway Hayat Oyunu Kural Laboratuvarı';
const description = 'B/S kuralları, desen tohumları, canlı metrikler ve duyarlı simülasyon tahtasıyla Conway tarzı hücresel otomatları oynayın, düzenleyin ve karşılaştırın.';

const howTo = [
  {
    name: 'Tahtayı tohumlayın',
    text: 'Bir planör, pulsar veya Gosper topu gibi bir desen seçin, ızgaraya yerleştirin ya da rastgele bir popülasyon oluşturun.',
  },
  {
    name: 'Simülasyonu çalıştırın',
    text: 'Doğumları, ölümleri, yoğunluğu ve kararlılığı zaman içinde izlemek için oynat, duraklat, adım ve tempo kontrollerini kullanın.',
  },
  {
    name: 'Kuralı değiştirin',
    text: 'Önayarlar arasında geçiş yapın veya farklı otomatları karşılaştırmak için B3/S23, B36/S23 veya B3678/S34678 gibi bir B/S kuralı yazın.',
  },
];

const faq = [
  {
    question: 'Hayat Oyunu\'nda B/S gösterimi nedir?',
    answer: 'B/S gösterimi, yeni bir canlı hücre yaratan komşu sayılarını ve mevcut bir canlı hücrenin hayatta kalmasını sağlayan sayıları listeler. Conway Hayat Oyunu B3/S23\'tür: ölü hücreler tam olarak üç komşuyla doğar ve canlı hücreler iki veya üç komşuyla hayatta kalır.',
  },
  {
    question: 'Bu araç neden sadece simülatör değil kural laboratuvarı olarak adlandırılıyor?',
    answer: 'Klasik Conway kuralı dahildir, ancak simülatör Life benzeri hücresel otomatların ailelerini karşılaştırmak için oluşturulmuştur. Doğum ve hayatta kalma sayılarını düzenlemek uzun vadeli davranışı değiştirir, çoğaltıcılar, dalgalar, donmuş adalar, kaotik büyüme veya yok oluş üretir.',
  },
  {
    question: 'Simülatörde kararlılık ne anlama gelir?',
    answer: 'Kararlılık, koloninin son nesil boyunca ne kadar değiştiğini tahmin eder. Yüksek kararlılık, nüfusa göre az doğum veya ölüm anlamına gelir; düşük kararlılık, tahtanın çalkantılı olduğu veya hızla yeniden düzenlendiği anlamına gelir.',
  },
  {
    question: 'Tahtanın kenarları var mı?',
    answer: 'Simülasyon toroidal sarma kullanır: sol kenar sağ kenara bağlanır ve üst alta bağlanır. Bu, desenlerin sert sınırlarda kaybolmadan doğal şekilde hareket etmesini sağlar.',
  },
  {
    question: 'Kendi başlangıç desenimi çizebilir miyim?',
    answer: 'Evet. Simülasyonu duraklatın ve hücreleri değiştirmek için tahtadaki hücrelere tıklayın veya dokunun. Elle çizilmiş hücreleri yerleşik desenlerle birleştirebilir ve ardından sonucu herhangi bir kural önayarı altında çalıştırabilirsiniz.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Life benzeri hücresel otomat tahtası',
    play: 'Oynat',
    pause: 'Duraklat',
    step: 'Adım',
    clear: 'Boş tuval',
    randomize: 'Rastgele',
    ruleLabel: 'Kural gösterimi',
    ruleHelp: 'Doğum / hayatta kalma',
    speedLabel: 'Tempo',
    densityLabel: 'Başlangıç yoğunluğu',
    patternLabel: 'Desen',
    placePattern: 'Deseni yerleştir',
    generation: 'Nesil',
    population: 'Popülasyon',
    density: 'Yoğunluk',
    stability: 'Kararlılık',
    births: 'Doğumlar',
    deaths: 'Ölümler',
    achievementsLabel: 'Laboratuvar kaydı',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Periyot 2 salınım algılandı',
    achievementImmortal: 'Ölümsüz',
    achievementImmortalDescription: 'Tam kararlılıkla 500. nesle ulaşıldı',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Seyrek rastgele tohum 1.000 canlı hücreyi aştı',
    presetClassic: 'Klasik Conway',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Gündüz ve gece',
    patternGlider: 'Planör',
    patternGosper: 'Gosper topu',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Koloni sinyali',
    statusFrozen: 'kararlı',
    statusGrowing: 'genişliyor',
    statusFading: 'azalıyor',
    statusChaotic: 'oynak',
    invalidRule: 'B3/S23 gibi B/S gösterimi kullanın.',
  },
  seo: [
    {
      type: 'title',
      text: 'Düzenlenebilir Kurallara Sahip Conway\'in Yaşam Oyunu Simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu Conway\'in Yaşam Oyunu kural laboratuvarı, klasik hücresel otomatı çalıştırmanıza ve kurallarını değiştirip karşılaştırmanıza olanak tanır.',
    },
    {
      type: 'title',
      text: 'B/S Kuralları Oyunu Nasıl Değiştirir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yaşam benzeri hücresel otomatlar genellikle <strong>B/S notasyonu</strong> ile yazılır. Conway\'in orijinal kuralı <strong>B3/S23</strong>, yok olma ile kontrolsüz büyüme arasındaki hassas dengesiyle ünlüdür.',
    },
    {
      type: 'table',
      headers: ['Kural', 'Gözlemlenecek Davranış', 'İyi Bir Deney'],
      rows: [
        ['<strong>B3/S23</strong>', 'Klasik planörler, osilatörler ve silahlar.', 'Gosper silahını yerleştirin ve nüfusu izleyin.'],
        ['<strong>B36/S23</strong>', 'HighLife kendi kendini çoğaltmayı destekler.', 'Aynı tohumu B3/S23 ile karşılaştırın.'],
        ['<strong>B2/S</strong>', 'Hücreler asla hayatta kalmaz.', 'Küçük bir tohumla başlayın.'],
        ['<strong>B3678/S34678</strong>', 'Day & Night ters yapıları destekler.', 'Yüksek başlangıç yoğunluğuyla test edin.'],
      ],
    },
    {
      type: 'title',
      text: 'Desenler Neden Önemlidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Desenler Yaşam Oyunu\'nun kelime dağarcığını oluşturur. Planörler hareketi, pulsar osilasyonu gösterir.',
    },
    {
      type: 'title',
      text: 'Canlı Metrikleri Okuma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nüfus ve yoğunluk kaç hücrenin canlı olduğunu gösterir, doğum ve ölümler ise mevcut aktivite seviyesini ortaya koyar.',
    },
    { type: 'paragraph', html: 'Bu açıklama modelin varsayımlarını ve parametrelerin sonucu nasıl değiştirdiğini gösterir. Her seferinde yalnızca bir değeri değiştirin ve birkaç çalıştırmayı karşılaştırın; böylece her farkı anlaşılır bir nedene bağlayabilirsiniz. Görselleştirme eğitsel bir yaklaşımdır: gerçek sistemlerde daha fazla değişken, ölçüm belirsizliği ve sınır koşulu bulunur. Sonucu ölçekleri anlamak, sorular oluşturmak ve senaryoları karşılaştırmak için kullanın. Pratik bir karar veya bilimsel analiz için birincil verileri, birimleri ve uzman kaynaklarını ayrıca kontrol edin. Hesabı tekrarlamak ve sınırlarını tartışmak için ayarları not edin.' },
    { type: 'paragraph', html: 'Hesabı aynı ayarlarla tekrarlayın, ardından her seferinde yalnızca bir girdiyi değiştirin. Başlangıç değerlerini, hesaplama kurallarını ve sınırları kaydedin; böylece model eğilimini sayısal değişimden veya rastlantıdan ayırabilirsiniz. Sonuç eğitim amaçlıdır ve varsayımlar ile sınırlamalarla birlikte okunmalıdır. Gerçek ölçüm veya tasarım için ek veri ve uzman incelemesi gerekir.' },
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
