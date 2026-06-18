import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dyson-kure-enerji-yakalama-simulatoru';
const title = 'Dyson Kuresi Enerji Yakalama Simulatoru';
const description = 'Farkli yildizlar icin Dyson surusu, halkasi, kabugu ve statit toplayici tasarimlarini tahmin edin. Yakalama gucunu, yorunge yaricapini, malzeme kutlesini ve hedef Kardashev olcegine ulasmak icin gereken kapsamayi hesaplayin.';

const howTo = [
  {
    name: 'Bir yildiz turu secin',
    text: 'Bir M cucesi, Gunes benzeri yildiz, A-tipi yildiz, kirmizi dev veya mavi dev ile baslayin. Simulator, toplayici yaricapi ve yorunge periyodunu tahmin etmek icin temsili parlaklik ve kutle degerlerini kullanir.',
  },
  {
    name: 'Mega yapi mimarisini secin',
    text: 'Bir Dyson surusu, ekvatoral halka, rijit kabuk veya statit ayna bulutunu karsilastirin. Her tasarimin farkli yakalama verimliligi, malzeme yogunlugu ve kararlilik varsayimlari vardir.',
  },
  {
    name: 'Kapsama ve calisma sicakligini ayarlayin',
    text: 'Daha fazla yildiz gucu yakalamak icin kapsamayi artirin, ardindan toplayicilari yildiza yaklastirmak veya uzaklastirmak icin calisma sicakligini ayarlayin.',
  },
  {
    name: 'Bir Kardashev hedefi belirleyin',
    text: 'Hedef kaydiricisini kullanarak bir uygarlik olcegindeki guc hedefine ulasmak icin yildizin ne kadarinin kapsanmasi gerektigini gorun.',
  },
];

const faq = [
  {
    question: 'Dyson kuresi ile Dyson surusu arasindaki fark nedir?',
    answer: 'Rijit bir Dyson kuresi, bir yildizin etrafinda surekli bir kabukken, Dyson surusu bagimsiz yorungedeki toplayicilardan olusan buyuk bir koleksiyondur. Muhendislik tartismalarinin cogu surulari tercih eder, cunku kati bir kabuk yapisal olarak kararsiz ve son derece malzeme yogun olurdu.',
  },
  {
    question: 'Simulator en uygun yaricapi nasil secer?',
    answer: 'Secilen yildiz parlakligi altinda her iki tarafindan isin yayan toplayicilarin secilen calisma sicakligina ulastigi mesafeyi tahmin eder. Daha sicak toplayicilar daha yakin yorungeye girebilirken, daha soguk toplayicilar daha buyuk yaricap gerektirir.',
  },
  {
    question: 'Burada Kardashev derecesi ne anlama geliyor?',
    answer: 'Kardashev degeri, yakalanan gucten logaritmik formül K = (log10(P) - 6) / 10 kullanilarak hesaplanir, burada P watt cinsinden guctur. K1\'e yakin bir deger gezegen olceginde enerji kullanimini temsil ederken, K2 tam yildiz cikisina yaklasir.',
  },
  {
    question: 'Malzeme kutlesi gercekci mi?',
    answer: 'Toplayici alani, yuzey yogunlugu ve bir kararlilik faktorune dayali egitsel birinci dereceden bir tahmindir. Gercek tasarimlar durak bakimi, guc iletimi, madencilik kayiplari, yedeklilik, isi atimi ve uretim altyapisi gerektirirdi.',
  },
  {
    question: 'Parlak yildizlar neden bu kadar buyuk toplayici sistemleri gerektiriyor?',
    answer: 'Yuksek parlakliktaki yildizlar guvenli termal yaricapi disari iter. Bu, belirli bir kapsama orani icin gereken yuzey alanini artirir, bu nedenle malzeme talebi, yakalanan gucun sezgisel hissettirdiginden daha hizli yukselebilir.',
  },
  {
    question: 'Bir uygarlik kismi kapsama ile Kardashev Tip II\'ye ulasabilir mi?',
    answer: 'Evet, ana yildiz yeterince parlaksa ve toplayicilar verimliyse. Gunes benzeri bir yildizin etrafinda Tip II\'ye yaklasmak, gunes parlakliginin buyuk bir kismini yakalamayi gerektirir, ancak daha parlak yildizlarin etrafinda ayni guc hedefine daha dusuk kapsama oraniyla ulasilabilir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Dyson toplayici goruntulemesi',
    starType: 'Yildiz turu',
    structureType: 'Yapi',
    coverage: 'Toplayici kapsamasi',
    operatingTemp: 'Calisma sicakligi',
    kardashevTarget: 'Kardashev hedefi',
    kardashevRating: 'Mevcut derece',
    capturedPower: 'Yakalanan guc',
    optimalRadius: 'En uygun yaricap',
    targetCoverage: 'Hedef kapsama',
    materialMass: 'Malzeme kutlesi',
    captureMeter: 'Hedefe dogru ilerleme',
    statusReady: 'Toplayici talebini tahmin etmek icin sistemi ayarlayin.',
    orbitalPeriod: 'Yorunge periyodu',
    collectorArea: 'Toplayici alani',
    starMDwarf: 'M cucesi',
    starSun: 'G tipi Gunes benzeri',
    starA: 'A tipi yildiz',
    starRedGiant: 'Kirmizi dev',
    starBlueGiant: 'Mavi dev',
    structureSwarm: 'Dyson surusu',
    structureRing: 'Ekvatoral halka',
    structureShell: 'Rijit kabuk',
    structureStatite: 'Statit ayna bulutu',
  },
  seo: [
    {
      type: 'title',
      text: 'Dyson Kuresi Enerji Yakalama Simulatoru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir Dyson kuresi, bir kabugun icindeki bir yildizin bilim kurgu goruntusunden ibaret degildir. Yildiz parlakligini yakalamak icin olasi mega yapi kavramlarindan olusan bir ailedir: uydu surulari, ekvatoral halkalar, ince ayna bulutlari ve unlu ancak sorunlu rijit kabuk. Bu simulator bu fikirleri sayilara donusturerek yildiz turu, toplayici sicakligi, kapsama ve yapi tasariminin enerji butcesini nasil degistirdigini karsilastirmanizi saglar.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayici, yakalanan gucu, termal yorunge yaricapini, toplayici alanini, yorunge periyodunu, malzeme kutlesini ve secilen bir Kardashev olcegi hedefi icin gereken kapsamayi tahmin eder. Ogrenciler, dunya kuruculari, bilim iletisimcileri ve Tip II uygarliklarinin neden zor oldugunu anlamaya calisan herkes icin tasarlanmistir: zorluk sadece guc degil, ayni zamanda alan, isi, madencilik, kararlilik ve yorunge lojistigidir.',
    },
    {
      type: 'title',
      text: 'Dyson Yaricapi Nasil Tahmin Edilir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En uygun yaricap, yildiz parlakligi ve toplayici calisma sicakligindan hesaplanir. Parlak bir yildizin yakinindaki bir toplayici yogun bir akis alir ve sicak calismali veya buyuk miktarda isiyi atmalidir. Disari dogru hareket etmek termal stresi azaltir, ancak gereken toplayici alani mesafenin karesiyle artar. Bu denge, ayni kapsama oraninin zayif bir M cucesi etrafinda mutevazi ve mavi bir dev etrafinda devasa olmasini aciklar.',
    },
    {
      type: 'title',
      text: 'Dyson Surusu, Halka, Kabuk ve Statit Bulutu Karsilastirmasi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dyson surusu:</strong> bircok bagimsiz yorungedeki toplayici. Kademeli olarak insa edilebildigi ve rijit bir yildiz kabugu gerektirmedigi icin en olasi buyuk olcekli mimaridir.',
        '<strong>Ekvatoral halka:</strong> dusuk kapsama verimliligine sahip daha dar bir toplayici bandi. Ilk mega yapi olarak hayal etmesi daha kolaydir, ancak daha genis bir suru haline gelmeden tam yildiz cikisini yakalayamaz.',
        '<strong>Rijit kabuk:</strong> gorsel olarak ikonik ancak mekanik olarak elverissiz. Bir yildizin etrafindaki kabuk ciddi kararlilik ve malzeme sorunlarina sahiptir, bu nedenle simulator ona yuksek kutle ve dusuk kararlilik atar.',
        '<strong>Statit ayna bulutu:</strong> kismen isinim basinciyla tutulan ultra hafif yansiticilar. Malzeme talebini azaltir ancak dusuk isi toleransina ve zorlu kontrol gereksinimlerine sahiptir.',
      ],
    },
    {
      type: 'title',
      text: 'Kardashev Olcegi icin Gereken Kapsama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kardashev olcegi, uygarlik guc kullanimini logaritmik olarak ifade eder. Bu aracta, yakalanan watt, K = (log10(P) - 6) / 10 kullanilarak K derecesine donusturulur. Gunes etrafindaki kismi bir Dyson surusu, tam Tip II durumuna ulasmadan cok once mevcut insan enerji kullanimini bircok buyukluk sirasiyla asabilir. Hedef kapsama sonucu, secilen hedef icin yildiz parlakliginin ne kadarinin yakalanmasi gerektigini gosterir.',
    },
    {
      type: 'table',
      headers: ['Tasarim secimi', 'Ana avantaj', 'Ana dar bogaz'],
      rows: [
        ['Dyson surusu', 'Bagimsiz yorungelerle asamali insa', 'Trafik kontrolu ve guc iletimi'],
        ['Ekvatoral halka', 'Daha dusuk baslangic alani ve basit geometri', 'Sinirli kapsama'],
        ['Rijit kabuk', 'Basit bir diyagramda maksimum yakalama', 'Yapisal kararsizlik ve devasa kutle'],
        ['Statit bulutu', 'Cok dusuk yuzey yogunlugu', 'Hassas durak bakimi ve isi sinirlari'],
      ],
    },
    {
      type: 'title',
      text: 'Malzeme Kutlesi ve Madencilik Gerceklik Kontrolu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Malzeme tahmini, toplayici alanini varsayilan bir yuzey yogunlugu ve tasarim kararlilik faktoruyle carpar. Rakamlar astronomik hale geldiginde kutleyi bilerek Merkur kutlesi cinsinden bildirir, cunku bircok Dyson surusu tartismasi hammadde icin kucuk gezegenlerin veya asteroitlerin sokulmesini hayal eder. Ince toplayicilar bile astronomik birim olceklerine yayildiklarinda kutlesel hale gelir.',
    },
    {
      type: 'paragraph',
      html: 'Sonucu bir plan yerine bir buyukluk sirasi rehberi olarak kullanin. Gercek mega yapi muhendisligi, radyasyon hasari modelleri, termal donguler, carpisma onleme, tutum kontrolu, guc iletimi, uretim verimi ve uzun vadeli yorunge evrimi gerektirirdi. Simulatorun degeri, ilk kisitlamalari hemen gorunur hale getirmesidir.',
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
