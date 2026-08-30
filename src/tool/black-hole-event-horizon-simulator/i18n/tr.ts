import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kara-delik-olay-ufku-simulatoru';
const title = 'Kara Delik Olay Ufku Simülatörü: Schwarzschild Yarıçapı, Foton Küresi ve Zaman Genişlemesi';
const description = 'Bir kara deliğin olay ufkunu; kütle, yörünge mesafesi, zaman genişlemesi, foton küresi, kaçış hızı ve Schwarzschild yarıçapı ile etkileşimli olarak keşfedin.';

const howTo = [
  {
    name: 'Kara deliğin kütlesini seçin',
    text: 'Kütle kaydırıcısını bir yıldız kütleli kara delikten süper kütleli kara deliğe sürükleyin ve Schwarzschild yarıçapının gerçek zamanda ölçeklenmesini izleyin.',
  },
  {
    name: 'Probu ufka yakınlaştırın',
    text: 'Mesafeyi Schwarzschild yarıçapları cinsinden ayarlayarak daha güvenli bir dış yörüngeyi, foton küresi bölgesini ve olay ufkunun kenarını karşılaştırın.',
  },
  {
    name: 'Göreceli etkileri inceleyin',
    text: 'Kaçış hızı, kütle çekimsel zaman genişlemesi, kızıla kayma ve yörünge periyodunu okuyarak sıradan sezgilerin neden ufka yakın bir yerde geçersiz olduğunu görün.',
  },
  {
    name: 'Belirli yarıçapları karşılaştırın',
    text: 'Olay ufku, foton küresi ve ISCO kılavuz halkalarını kullanarak dönmeyen bir kara deliğin etrafındaki farklı sınırları anlayın.',
  },
];

const faq = [
  {
    question: 'Kara deliğin olay ufku nedir?',
    answer: 'Olay ufku, kaçış hızının ışık hızına ulaştığı sınırdır. Bir nesne onu geçtiğinde, ışık hızında veya daha yavaş hareket eden hiçbir sinyal dış evrene geri dönemez.',
  },
  {
    question: 'Schwarzschild yarıçapı ne anlama gelir?',
    answer: 'Schwarzschild yarıçapı, dönmeyen ve yüksüz bir kara deliğin olay ufku yarıçapıdır. Kütleyle doğrusal olarak büyür, bu nedenle kütleyi iki katına çıkarmak ufuk yarıçapını da iki katına çıkarır.',
  },
  {
    question: 'Foton küresi nedir?',
    answer: 'Foton küresi, 1,5 Schwarzschild yarıçapı uzaklıkta, ışığın bir kara delik etrafında kararsız bir yörüngede dolanabildiği bölgedir. Küçük bozulmalar fotonların ya dışarı kaçmasına ya da içeri düşmesine neden olur.',
  },
  {
    question: 'ISCO nedir?',
    answer: 'ISCO, en içteki kararlı dairesel yörünge (Innermost Stable Circular Orbit) anlamına gelir. Dönmeyen bir kara delik için 3 Schwarzschild yarıçapında veya 6 kütle çekim yarıçapında bulunur ve kütleli parçacıklar için son kararlı dairesel yörüngeyi belirler.',
  },
  {
    question: 'Zaman genişlemesi neden ufka yakın bir yerde artar?',
    answer: 'Schwarzschild geometrisinde, kütle çekim alanının daha derinlerindeki saatler, uzak gözlemcilere göre daha yavaş çalışır. Görüntülenen faktör, prob olay ufkuna yaklaştıkça sıfıra yaklaşır.',
  },
  {
    question: 'Bu simülatör dönen bir kara deliği modelleyebilir mi?',
    answer: 'Hayır. Dönüş ve elektrik yükü olmadığını varsayan Schwarzschild çözümünü kullanır. Gerçek astrofiziksel kara delikler genellikle döner ve dönüş; ufuk boyutunu, ISCO konumunu ve disk davranışını değiştirir.',
  },
  {
    question: 'Süper kütleli kara delikler ufukta neden daha az gelgitsel olarak şiddetlidir?',
    answer: 'Ufuktaki gelgit gradyanı, kara delik kütlesi arttıkça azalır. Küçük bir yıldız kütleli kara delik, nesneleri ufka yakın bir yerde şiddetle gerebilirken, süper kütleli bir kara delik bu sınırda daha yumuşak bir yerel gradyana sahip olabilir.',
  },
  {
    question: 'Görselleştirme gerçek bir kara delik görüntüsünü mü gösteriyor?',
    answer: 'Bu bir ışın izleme gözlemi değil, eğitsel bir diyagramdır. Halkalar ve disk, fiziksel bölgelerin karşılaştırılması kolay olsun diye basitleştirilmiş Schwarzschild yarıçaplarına ölçeklendirilmiştir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Olay ufku alan haritası',
    visualCaption: 'Prob, ölçeklendirilmiş Schwarzschild geometrisinde hareket eder. Parlak kılavuz halkaları ufku, foton küresini ve en içteki kararlı dairesel yörüngeyi işaretler.',
    controlsTitle: 'Kara delik kontrolleri',
    eventHorizon: 'Olay ufku',
    photonSphere: 'Foton küresi',
    isco: 'ISCO',
    rsLabel: 'Schwarzschild yarıçapı',
    diameterLabel: 'Çap',
    timeLabel: 'Zaman genişlemesi',
    redshiftLabel: 'Kızıla kayma',
    statusSafe: 'Kararlı yörünge bölgesinin dışında',
    statusPhoton: 'Foton küresi bölgesinin içinde',
    statusInside: 'Ufuk sınırında',
    diameter: 'Ufuk çapı',
    lightCrossing: 'Işık geçiş süresi',
    timeDilation: 'Uzak gözlemciye göre saat hızı',
    redshift: 'Kütle çekimsel kızıla kayma',
    mass: 'Kara delik kütlesi',
    distance: 'Prob mesafesi',
    speed: 'Prob yörünge hızı',
    escapeVelocity: 'Kaçış hızı',
    orbitalPeriod: 'Prob yörünge periyodu',
    tidalGradient: 'Gelgit gradyanı',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 'sn',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'güneş kütlesi',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '%0 c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 güneş kütlesi',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '%32 c',
  },
  seo: [
    {
      type: 'title',
      text: 'Schwarzschild Yarıçapı, Foton Küresi ve Zaman Genleşmesi için Kara Delik Olay Ufku Simülatörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu kara delik olay ufku simülatörü, Schwarzschild kara deliklerinin temel fikirlerini etkileşimli bir görsel modele dönüştürür.',
    },
    {
      type: 'paragraph',
      html: 'Simülatör astronomi öğrencileri, fizik öğretmenleri ve meraklı araştırmacılar için tasarlanmıştır.',
    },
    {
      type: 'title',
      text: 'Olay Ufku Yarıçapı Nasıl Hesaplanır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dönmeyen ve yüksüz bir kara delik için yarıçap <strong>Schwarzschild yarıçapıdır</strong>: <strong>Rs = 2GM / c^2</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Yarıçap kütle ile doğru orantılı olarak büyüdüğünden, 10 güneş kütleli bir kara deliğin yarıçapı yaklaşık 29.5 km\'dir.',
    },
    {
      type: 'table',
      headers: ['Bölge', 'Schwarzschild Yarıçapı Cinsinden Yarıçap', 'Anlamı'],
      rows: [
        ['Olay Ufku', '1.0 Rs', 'Kaçış hızının ışık hızına eşit olduğu geri dönüşsüz sınır.'],
        ['Foton Küresi', '1.5 Rs', 'Işık için kararsız dairesel yörünge.'],
        ['Zayıf Alan', '6 Rs ve ötesi', 'Yerçekimi hâlâ güçlüdür ancak dairesel yörüngeleri korumak daha kolaydır.'],
      ],
    },
    {
      type: 'title',
      text: 'Kaçış Hızı ve Neden Ufkun Nedensel Bir Sınır Olduğu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kaçış hızı, bir nesnenin ek itki olmadan sonsuza ulaşmak için ihtiyaç duyduğu hızdır.',
    },
    {
      type: 'paragraph',
      html: 'Kaçış hızı göstergesi faydalı bir sezgi sunar ancak tam bir rölativistik açıklama değildir.',
    },
    {
      type: 'title',
      text: 'Kara Delik Yakınında Zaman Genleşmesi ve Kütleçekimsel Kırmızıya Kayma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kara deliğin dışındaki sabit bir yarıçapta tutulan saat, uzaktaki bir gözlemciye göre daha yavaş çalışır. Basitleştirilmiş çarpan <strong>sqrt(1 - Rs / r)</strong>\'dir.',
    },
    {
      type: 'paragraph',
      html: 'Kütleçekimsel kırmızıya kayma aynı geometriyi izler. Yerçekimi kuyusundan çıkan ışık enerji kaybeder.',
    },
    {
      type: 'title',
      text: 'Foton Küresi ve ISCO Açıklaması',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '1.5 Rs konumundaki foton küresi, ışığın ilkesel olarak kararsız dairesel bir yörüngede dönebileceği yerdir.',
    },
    {
      type: 'paragraph',
      html: '3 Rs konumundaki ISCO, madde için en içteki kararlı dairesel yörüngeyi temsil eder.',
    },
    {
      type: 'title',
      text: 'Yıldız Kütleli ve Süper Kütleli Kara Deliklerin Karşılaştırılması',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Şaşırtıcı bir ders, daha büyük kara deliklerin ufukta daha az şiddetli gelgit kuvvetlerine sahip olabilmesidir.',
    },
    {
      type: 'paragraph',
      html: 'Simülatör, metre başına Dünya yerçekimi cinsinden ifade edilen bir gelgit gradyanı okuması içerir.',
    },
    {
      type: 'title',
      text: 'Bu Simülatörün Sınırlamaları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Spinsiz:</strong> Schwarzschild geometrisi kullanılır.',
        '<strong>Basitleştirilmiş kütle aktarım fiziği:</strong> gösterge niteliğinde disk.',
        '<strong>Işın izleme yok:</strong> eğitici diyagram.',
        '<strong>Sabit saat:</strong> serbest düşüşte değil.',
      ],
    },
    {
      type: 'title',
      text: 'Sıkça Sorulan Sorular',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir kara deliğin parametrelerini tahmin etmek için bu aracı kullanın.',
    },
    { type: 'paragraph', html: 'Bu bölüm simülasyonda kullanılan geometriyi daha ayrıntılı açıklar. Schwarzschild yarıçapı kütleyle birlikte büyür ve ideal Schwarzschild çözümünde olay ufkuyla ilişkili bir koordinat yüzeyini temsil eder. Foton küresi daha dışarıda bulunur ve kararsız dairesel ışık yörüngelerini tanımlar; küçük bir bozulma ışığın sonraki yolunu büyük ölçüde değiştirebilir. Gösterilen zaman genişlemesi seçilen gözlemciye bağlıdır ve yerel bir saatin öz zamanı ile karıştırılmamalıdır. Ölçekleri karşılaştırmak için kütleyi ve uzaklığı ayrı ayrı değiştirin. Model dönmeyi, elektrik yükünü, çevredeki maddeyi, yığılma diskini, manyetik alanları, ışınımı veya belirli bir cismin gelgit kuvvetlerini içermez. Amaç genel görelilik hakkında sezgi oluşturmak ve matematiksel bir tanımı astronomik gözlemden ayırmaktır. Gerçek bir kaynak için kütle, dönme, çevre ve yörünge verileri ile yayımlanmış bir yöntem gerekir. Sayfa operasyonel tahmin veya yoğun bir cisme yaklaşma talimatı vermez. Varsayımları not edin ve değişkenleri tek tek karşılaştırın.' },
    { type: 'paragraph', html: 'Gözlemcinin konumunu da değiştirip zaman gösteriminin nasıl farklılaştığını karşılaştırabilirsiniz. Bu örnek koordinat gösterimi ile yerel saatin ölçümünü ayırt etmeye yardımcı olur. Gerçek bir cisimde dönme ve çevredeki madde ışık yollarını ve gözlenen sinyali etkiler; basit küresel simetrik bir model tüm gözlemleri açıklayamaz. Her parametreyi not edin ve sonucu anlamak için hesabı aynı koşullarda tekrarlayın.' },
    { type: 'paragraph', html: 'Birden fazla bağımsız çalıştırmayı karşılaştırın ve her seferinde yalnızca bir parametreyi değiştirin. Böylece modelin geometrik etkisini seçilen gözlemcinin etkisinden ayırabilirsiniz. Formüller sezgi kazandırır, ancak yorum her zaman referans sistemine ve başlangıç koşullarına bağlıdır.' },
    { type: 'paragraph', html: 'Tekrarlanabilir bir karşılaştırma için aynı ayarları kullanın ve sonra tek bir parametreyi değiştirin. Böylece geometriden kaynaklanan sonucu seçilen referans sistemine bağlı sonuçtan ayırabilirsiniz. Simülasyon eğitsel bir modeldir ve gözlenen bir kara deliğin eksiksiz açıklaması değildir.' },
    { type: 'paragraph', html: 'Her parametreyi kaydedin ve sonucu anlamak için değişkenleri tek tek karşılaştırın; böylece modelin varsayımları daha açık görülür.' },
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
