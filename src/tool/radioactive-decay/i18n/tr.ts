import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'radyoaktif-bozunma-yari-omur-hesaplayici';
const title = 'Radyoaktif bozunma yari omur hesaplayici';
const description = 'Gercek izotoplarla radyoaktif bozunmayi, yari omur formulunu, stokastik atom alanini, kalan miktari ve goreli aktiviteyi simule edin.';

const howTo = [
  { name: 'Bir izotop secin', text: 'Karbon-14, Iyot-131, Uranyum-238, Teknesyum-99m veya Radon-222 ile baslayin. Her preset gercekci bir yari omur ve yaygin bilimsel baglam yukler.' },
  { name: 'Ornek ve zamani ayarlayin', text: 'Gosterilen atom sayisini ayarlayin ve zaman ilerledikce kalan oranin yari omur yasasini nasil izledigini gorun.' },
  { name: 'Kesin hesap ile atomik rastlantiyi karsilastirin', text: 'Deterministik sonucu beklenen deger olarak kullanin; kucuk orneklerin teorik egri etrafinda neden dalgalandigini atom alaninda izleyin.' },
  { name: 'Aktiviteyi yorumlayin', text: 'Aktivite, bozunmamis cekirdeklerle ayni oranda azalir. Gosterge, baslangic radyasyon hizinin ne kadarinin kaldigini gosterir.' },
];

const faq = [
  { question: 'Yari omur ne demektir?', answer: 'Yari omur, bir ornekteki kararsiz cekirdeklerin ortalama olarak yarisinin bozunmasi icin gereken suredir. Bir yari omurden sonra %50, iki yari omurden sonra %25, uc yari omurden sonra %12,5 kalir.' },
  { question: 'Atom alani neden tam yuzdeyle her zaman uyusmaz?', answer: 'Radyoaktif bozunma olasiliksaldir. Formul cok buyuk ornekler icin beklenen orani verir; alan ise rastgele esiklere sahip tek tek atomlari simule eder.' },
  { question: 'Aktivite gostergesi kalan atomlarla ayni sey mi?', answer: 'Tek bir izotop icin aktivite bozunmamis cekirdek sayisiyla orantilidir. Atomlarin %30 u kaldiysa anlik aktivite de yaklasik %30 olur.' },
  { question: 'Bu hesaplayici karbon tarihleme icin kullanilabilir mi?', answer: 'Kavramsal hesaplar icin evet. Gercek laboratuvar tarihlemesi kalibrasyon egrileri, kirlenme ve ornek hazirligini da duzeltir.' },
  { question: 'Her izotop tek bir kararli urune mi bozunur?', answer: 'Her zaman degil. Bazi izotoplar birden fazla kiz urun iceren zincirlerle bozunur. Bu arac ana izotopun yari omrunu modeller.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Izotop',
    sampleAtoms: 'Ornek atomlari',
    elapsedTime: 'Gecen sure',
    halfLife: 'Yari omur',
    remaining: 'Kalan',
    decayed: 'Bozunan',
    activity: 'Goreli aktivite',
    timeUnit: 'Zaman birimi',
    expectedCurve: 'Beklenen egri',
    atomField: 'Atom alani',
    presetUse: 'Yaygin kullanim',
    oneHalfLife: '1 yari omur',
    twoHalfLives: '2 yari omur',
    fourHalfLives: '4 yari omur',
    custom: 'Ozel',
    liveAtoms: 'Aktif atomlar',
    decayedAtoms: 'Bozunan atomlar',
    resetSeed: 'Yeni atom deseni',
  },
  seo: [
    {
      type: 'title',
      text: 'Radyoaktif yarı ömür hesaplayıcı: kalan atomlar, aktivite ve izotop örnekleri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu radyoaktif bozunma hesaplayıcısı, kararsız bir izotoptan belirli bir süre sonra ne kadar kaldığını tahmin eder. Yarı ömür formülü, gerçek izotop uygulamaları, kalan ana çekirdekler, bozunan çekirdekler ve aktivite azalması gibi arama niyetlerini karşılar.',
    },
    {
      type: 'paragraph',
      html: 'Bu araç iki tamamlayıcı modeli birleştirir. Sayısal sonuçlar standart üstel bozunma denklemini kullanırken, atom alanı rastgele eşiklerle tek tek çekirdekleri simüle eder.',
    },
    {
      type: 'title',
      text: 'Hesaplayıcı tarafından kullanılan radyoaktif bozunma formülü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kullanılan formül <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> başlangıçtaki ana çekirdek sayısı, <strong>N(t)</strong> <strong>t</strong> süresi sonundaki beklenen kalan miktar, <strong>T1/2</strong> ise yarı ömürdür.',
    },
    {
      type: 'paragraph',
      html: 'Örneğin, bir örnek 1.000 ana çekirdekle başlarsa ve iki yarı ömür geçerse, beklenen kalan miktar 1.000 x (1/2)^2 = 250 çekirdektir. Bozunan miktar 750 çekirdektir.',
    },
    {
      type: 'table',
      headers: ['Geçen süre', 'Formül faktörü', 'Kalan ana çekirdek', 'Göreli aktivite'],
      rows: [
        ['0 yarı ömür', '(1/2)^0', '100%', '100%'],
        ['1 yarı ömür', '(1/2)^1', '50%', '50%'],
        ['2 yarı ömür', '(1/2)^2', '25%', '25%'],
        ['3 yarı ömür', '(1/2)^3', '12,5%', '12,5%'],
        ['5 yarı ömür', '(1/2)^5', '3,125%', '3,125%'],
        ['10 yarı ömür', '(1/2)^10', '0,098%', '0,098%'],
      ],
    },
    {
      type: 'title',
      text: 'Yarı ömürden sonra kalan aktivite nasıl hesaplanır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tek bir ana izotop için aktivite, bozunmamış çekirdek sayısı ile orantılıdır. Ana izotopun %25\'i kaldıysa, aktivite de başlangıç aktivitesinin yaklaşık %25\'i olur.',
    },
    {
      type: 'paragraph',
      html: 'Bu ilişki nükleer tıp ve radyasyondan korunmada büyük önem taşır.',
    },
    {
      type: 'title',
      text: 'Örnekler: Karbon-14, İyot-131, Teknesyum-99m, Uranyum-238 ve Radon-222',
      level: 3,
    },
    {
      type: 'table',
      headers: ['İzotop', 'Yaklaşık yarı ömür', 'Yaygın kullanım', 'Sonucun anlamı'],
      rows: [
        ['Karbon-14', '5.730 yıl', 'Radyokarbon tarihleme', 'Organik maddede kalan C-14 aktivitesi.'],
        ['İyot-131', '8,02 gün', 'Tıbbi tedavi', 'Tedaviden sonraki günlerde aktivite düşüşü.'],
        ['Teknesyum-99m', '6,01 saat', 'Tanısal görüntüleme', 'Tıbbi aktivitenin klinik gün içinde neden azaldığı.'],
        ['Uranyum-238', '4,47 milyar yıl', 'Jeolojik tarihleme', 'Uzun ömürlü izotopların jeolojik ölçekte neden ölçülebilir kaldığı.'],
        ['Radon-222', '3,82 gün', 'İç mekan radyasyonu', 'Gaz maruziyet kaynağının gün içindeki değişimi.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Bu örnekler farklı zaman ölçeklerini ve bilimsel uygulamaları kapsar.',
    },
    {
      type: 'title',
      text: 'Stokastik atom simülasyonu nasıl okunur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Atom alanı stokastik olarak modellenmiştir. Küçük örneklerde sonuçlar teorik değer etrafında dalgalanır.',
    },
    {
      type: 'paragraph',
      html: 'Pürüzsüz eğri ancak çok sayıda bağımsız rastgele olay toplandığında ortaya çıkar.',
    },
    {
      type: 'title',
      text: 'Yarı ömür hesaplayıcının kullanım alanları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Fizik eğitimi:</strong> kalan çekirdeklerin hesaplanması ve görsel modelle ilişkilendirilmesi.',
        '<strong>Nükleer kimya:</strong> izotop kararlılığı ve bozunma hızlarının karşılaştırılması.',
        '<strong>Radyokarbon tarihleme:</strong> organik örneklerde bozunmanın anlaşılması.',
        '<strong>Nükleer tıp:</strong> kısa yarı ömürlü izotoplarla görüntüleme planlaması.',
        '<strong>Radyasyondan korunma:</strong> zamanla aktivite düşüşünün tahmini.',
      ],
    },
    {
      type: 'title',
      text: 'Önemli kısıtlamalar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu hesaplayıcı ana izotopu tek bir yarı ömürle modeller.',
    },
    {
      type: 'paragraph',
      html: 'Sonuçları eğitici bir model ve bilimsel bir tahmin olarak kullanın.',
    },
    { type: 'paragraph', html: 'Bu açıklama modelin varsayımlarını ve parametrelerin sonucu nasıl değiştirdiğini gösterir. Her seferinde yalnızca bir değeri değiştirin ve birkaç çalıştırmayı karşılaştırın; böylece her farkı anlaşılır bir nedene bağlayabilirsiniz. Görselleştirme eğitsel bir yaklaşımdır: gerçek sistemlerde daha fazla değişken, ölçüm belirsizliği ve sınır koşulu bulunur. Sonucu ölçekleri anlamak, sorular oluşturmak ve senaryoları karşılaştırmak için kullanın. Pratik bir karar veya bilimsel analiz için birincil verileri, birimleri ve uzman kaynaklarını ayrıca kontrol edin. Hesabı tekrarlamak ve sınırlarını tartışmak için ayarları not edin.' },
    { type: 'paragraph', html: 'Hesabı aynı ayarlarla tekrarlayın, ardından her seferinde yalnızca bir girdiyi değiştirin. Başlangıç değerlerini, hesaplama kurallarını ve sınırları kaydedin; böylece model eğilimini sayısal değişimden veya rastlantıdan ayırabilirsiniz. Sonuç eğitim amaçlıdır ve varsayımlar ile sınırlamalarla birlikte okunmalıdır. Gerçek ölçüm veya tasarım için ek veri ve uzman incelemesi gerekir.' },
    { type: 'paragraph', html: 'Ayrıca başlangıç miktarı ile geçen süreyi ayrı ayrı değiştirerek eğrinin neden doğrusal olmadığını inceleyin. Küçük örneklerde rastgele dalgalanmalar görülebilir; bu nedenle tek bir deneme teorik eğriyle birebir eşleşmeyebilir.' },
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

