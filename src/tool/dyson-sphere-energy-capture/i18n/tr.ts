import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-kuresi-enerji-yakalama-simulatoru';
const title = 'Dyson Küresi Enerji Yakalama Simülatörü';
const description = 'Farklı yıldızlar için Dyson sürüsü, halkası, kabuğu ve statit toplayıcı tasarımlarını tahmin edin. Yakalama gücünü, yörünge yarıçapını, malzeme kütlesini ve hedef Kardashev ölçeğine ulaşmak için gereken kapsamayı hesaplayın.';

const howTo = [
  {
    name: 'Bir yıldız türü seçin',
    text: 'Bir M cücesi, Güneş benzeri yıldız, A-tipi yıldız, kırmızı dev veya mavi dev ile başlayın. Simülatör, toplayıcı yarıçapı ve yörünge periyodunu tahmin etmek için temsili parlaklık ve kütle değerlerini kullanır.',
  },
  {
    name: 'Mega yapı mimarisini seçin',
    text: 'Bir Dyson sürüsü, ekvatoral halka, rijit kabuk veya statit ayna bulutunu karşılaştırın. Her tasarımın farklı yakalama verimliliği, malzeme yoğunluğu ve kararlılık varsayımları vardır.',
  },
  {
    name: 'Kapsama ve çalışma sıcaklığını ayarlayın',
    text: 'Daha fazla yıldız gücü yakalamak için kapsamayı artırın, ardından toplayıcıları yıldıza yaklaştırmak veya uzaklaştırmak için çalışma sıcaklığını ayarlayın.',
  },
  {
    name: 'Bir Kardashev hedefi belirleyin',
    text: 'Hedef kaydırıcısını kullanarak bir uygarlık ölçeğindeki güç hedefine ulaşmak için yıldızın ne kadarının kapsanması gerektiğini görün.',
  },
];

const faq = [
  {
    question: 'Dyson küresi ile Dyson sürüsü arasındaki fark nedir?',
    answer: 'Rijit bir Dyson küresi, bir yıldızın etrafında sürekli bir kabukken, Dyson sürüsü bağımsız yörüngedeki toplayıcılardan oluşan büyük bir koleksiyondur. Mühendislik tartışmalarının çoğu sürüleri tercih eder, çünkü katı bir kabuk yapısal olarak kararsız ve son derece malzeme yoğun olurdu.',
  },
  {
    question: 'Simülatör en uygun yarıçapı nasıl seçer?',
    answer: 'Seçilen yıldız parlaklığı altında her iki tarafından ışın yayan toplayıcıların seçilen çalışma sıcaklığına ulaştığı mesafeyi tahmin eder. Daha sıcak toplayıcılar daha yakın yörüngeye girebilirken, daha soğuk toplayıcılar daha büyük yarıçap gerektirir.',
  },
  {
    question: 'Burada Kardashev derecesi ne anlama geliyor?',
    answer: 'Kardashev değeri, yakalanan güçten logaritmik formül K = (log10(P) - 6) / 10 kullanılarak hesaplanır, burada P watt cinsinden güçtür. K1\'e yakın bir değer gezegen ölçeğinde enerji kullanımını temsil ederken, K2 tam yıldız çıktısına yaklaşır.',
  },
  {
    question: 'Malzeme kütlesi gerçekçi mi?',
    answer: 'Toplayıcı alanı, yüzey yoğunluğu ve bir kararlılık faktörüne dayalı eğitsel birinci dereceden bir tahmindir. Gerçek tasarımlar durak bakımı, güç iletimi, madencilik kayıpları, yedeklilik, ısı atımı ve üretim altyapısı gerektirirdi.',
  },
  {
    question: 'Parlak yıldızlar neden bu kadar büyük toplayıcı sistemleri gerektiriyor?',
    answer: 'Yüksek parlaklıktaki yıldızlar güvenli termal yarıçapı dışarı iter. Bu, belirli bir kapsama oranı için gereken yüzey alanını artırır, bu nedenle malzeme talebi, yakalanan gücün sezgisel hissettirdiğinden daha hızlı yükselebilir.',
  },
  {
    question: 'Bir uygarlık kısmi kapsama ile Kardashev Tip II\'ye ulaşabilir mi?',
    answer: 'Evet, ana yıldız yeterince parlaksa ve toplayıcılar verimliyse. Güneş benzeri bir yıldızın etrafında Tip II\'ye yaklaşmak, güneş parlaklığının büyük bir kısmını yakalamayı gerektirir, ancak daha parlak yıldızların etrafında aynı güç hedefine daha düşük kapsama oranıyla ulaşılabilir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson toplayıcı görüntülemesi',
    starType: 'Yıldız türü',
    structureType: 'Yapı',
    coverage: 'Toplayıcı kapsaması',
    operatingTemp: 'Çalışma sıcaklığı',
    kardashevTarget: 'Kardashev hedefi',
    kardashevRating: 'Mevcut derece',
    capturedPower: 'Yakalanan güç',
    optimalRadius: 'En uygun yarıçap',
    targetCoverage: 'Hedef kapsama',
    materialMass: 'Malzeme kütlesi',
    captureMeter: 'Hedefe doğru ilerleme',
    statusReady: 'Toplayıcı talebini tahmin etmek için sistemi ayarlayın.',
    statusUnderbuilt: 'Kapsama seçilen Kardashev hedefinin altında. Toplayıcı ekleyin veya daha parlak bir yıldız seçin.',
    statusBalanced: 'Kapsama ve yıldız çıkışı seçilen uygarlık ölçeği hedefine yakın.',
    statusExtreme: 'Bu yapılandırma hedefi aşıyor. Çok büyük güç yakalar, ancak malzeme talebi hızla artar.',
    orbitalPeriod: 'Yörünge periyodu',
    collectorArea: 'Toplayıcı alanı',
    mercuryMasses: '{value} Merkür kütlesi',
    kilograms: '{value} kg',
    daysUnit: '{value} gün',
    starMDwarf: 'M cücesi',
    starSun: 'G tipi Güneş benzeri',
    starA: 'A tipi yıldız',
    starRedGiant: 'Kırmızı dev',
    starBlueGiant: 'Mavi dev',
    structureSwarm: 'Dyson sürüsü',
    structureRing: 'Ekvatoral halka',
    structureShell: 'Rijit kabuk',
    structureStatite: 'Statit ayna bulutu',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson Küresi Enerji Yakalama Simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dyson küresi yalnızca bilim kurgu eserlerindeki katı bir kabuk imgesinden ibaret değildir. Yıldız ışınımını yakalamaya yönelik uydu sürüleri, ekvatoral halkalar ve statit aynalardan oluşan geniş bir megastruktur konseptleri ailesidir.',
    },
    {
      type: 'paragraph',
      html: 'Uygulama; yakalanan gücü, termal yörünge yarıçapını, kolektör alanını, yörünge periyodunu ve Merkür kütlesi cinsinden gereken malzeme kütlesini hesaplar.',
    },
    {
      type: 'title',
      text: 'Optimum Dyson Yarıçapının Hesaplanması',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Optimum yarıçap doğrudan yıldızın parlaklığına ve kolektörlerin maksimum çalışma sıcaklığına bağlıdır.',
    },
    {
      type: 'title',
      text: 'Megastruktur Konseptlerinin Karşılaştırılması',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson Sürüsü:</strong> Bağımsız yörüngelerdeki çok sayıda kolektör. Kademeli inşaya izin veren en gerçekçi mimari.',
        '<strong>Ekvatoral Halka:</strong> Daha dar bir kolektör kuşağı ve daha basit geometri.',
        '<strong>Rijit Kabuk:</strong> Maksimum yakalama sağlayan ancak mekanik olarak kararsız olan katı yapı.',
        '<strong>Statit Ayna Bulutu:</strong> Radyasyon basıncıyla dengede tutulan ultra hafif aynalar ve zorlu kontrol gereksinimleri.',
      ],
    },
    {
      type: 'title',
      text: 'Kardashev Ölçeği İçin Gereken Kaplama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kardashev ölçeği bir medeniyetin enerji kullanımını ölçer. Güneş ışınımının küçük bir kısmını yakalamak bile insanlığın mevcut tüketimini kat kat aşar.',
    },
    {
      type: 'table',
      headers: ['Mimari', 'Ana Avantaj', 'Temel Zorluk'],
      rows: [
        ['Dyson Sürüsü', 'Kademeli inşa edilebilir', 'Yörünge trafiği ve güç iletimi'],
        ['Ekvatoral Halka', 'Daha küçük başlangıç alanı', 'Sınırlı kaplama kapasitesi'],
        ['Rijit Kabuk', 'Maksimum enerji yakalama', 'Yapısal kararsızlık ve devasa kütle'],
        ['Statit Ayna Bulutu', 'Çok düşük yüzey yoğunluğu', 'Hassas konum kontrolü ve termal sınırlar'],
      ],
    },
    {
      type: 'title',
      text: 'Malzeme İhtiyacı ve Hammadde Değerlendirmesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Malzeme kütlesi Merkür kütlesi birimleriyle ifade edilir. Birçok teorik çalışma, hammadde sağlamak için küçük gezegenlerin parçalanmasını öngörür.',
    },
    {
      type: 'paragraph',
      html: 'Bu sonuçları yıldız mühendisliğinin fiziksel sınırlarını anlamak için eğitici bir rehber olarak kullanın.',
    },
    { type: 'paragraph', html: 'Bu açıklama modelin varsayımlarını ve parametrelerin sonucu nasıl değiştirdiğini gösterir. Her seferinde yalnızca bir değeri değiştirin ve birkaç çalıştırmayı karşılaştırın; böylece her farkı anlaşılır bir nedene bağlayabilirsiniz. Görselleştirme eğitsel bir yaklaşımdır: gerçek sistemlerde daha fazla değişken, ölçüm belirsizliği ve sınır koşulu bulunur. Sonucu ölçekleri anlamak, sorular oluşturmak ve senaryoları karşılaştırmak için kullanın. Pratik bir karar veya bilimsel analiz için birincil verileri, birimleri ve uzman kaynaklarını ayrıca kontrol edin. Hesabı tekrarlamak ve sınırlarını tartışmak için ayarları not edin.' },
    { type: 'paragraph', html: 'Hesabı aynı ayarlarla tekrarlayın, ardından her seferinde yalnızca bir girdiyi değiştirin. Başlangıç değerlerini, hesaplama kurallarını ve sınırları kaydedin; böylece model eğilimini sayısal değişimden veya rastlantıdan ayırabilirsiniz. Sonuç eğitim amaçlıdır ve varsayımlar ile sınırlamalarla birlikte okunmalıdır. Gerçek ölçüm veya tasarım için ek veri ve uzman incelemesi gerekir.' },
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
