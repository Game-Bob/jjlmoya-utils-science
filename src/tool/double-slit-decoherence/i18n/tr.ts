import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cift-yarik-dekoherans-simulatoru';
const title = 'Cift Yarik Deneyi ve Dekoherans Simulatoru';
const description = 'Hangi-yol dedektorlerini acip kapatarak kuantum girisiminin iki parcacik bandina nasil donustugunu gorsel bir cift yarik simulatorunde izleyin.';

const howTo = [
  {
    name: 'Dedektoru kapali halde baslayin',
    text: 'Hangi-yol dedektorunu devre disi birakin ve ekranin, koherent olasilik genliklerinden aydinlik ve karanlik girisim sacaklari olusturmasini izleyin.',
  },
  {
    name: 'Dedektor guclendirmesini artirin',
    text: 'Hangi-yol bilgisi eklemek icin dedektor kontrolunu yukseltin. Dedektor guclendikce koherens duser ve sacaklar kaybolur.',
  },
  {
    name: 'Yarik geometrisini degistirin',
    text: 'Yarik araligini ve yarik genisligini ayarlayarak geometrinin sacak araligini, zarf genisligini ve ekrandaki son dagilimi nasil degistirdigini gorun.',
  },
  {
    name: 'Canli metrikleri okuyun',
    text: 'Sacak gorunurlugu, hangi-yol bilgisi ve koherens kullanarak gorsel deseni kuantum olcum hikayesine baglayin.',
  },
];

const faq = [
  {
    question: 'Dedektorler acildiginda desen neden degisiyor?',
    answer: 'Parcacigin hangi yarigi kullandigini ortaya cikarabilen bir dedektor, iki alternatif arasindaki faz iliskisini yok eder. Bu koherens olmadan, iki olasi yol cubugu daha fazla girisim yapmaz ve ekran iki genis parcacik bandina yaklasir.',
  },
  {
    question: 'Bu simulator bilincin dalga fonksiyonunu cokerttigi anlamina mi geliyor?',
    answer: 'Hayir. Simulator fiziksel hangi-yol bilgisi ve dekoheransa odaklanir. Bir dedektor, cevre veya yolu ayirt edilebilir kilan herhangi bir etkilesim, bilincli bir gozlemci gerektirmeden girisimi bastirabilir.',
  },
  {
    question: 'Sacak gorunurlugu nedir?',
    answer: 'Sacak gorunurlugu, ekrandaki aydinlik ve karanlik bolgeleri karsilastirir. Yuksek gorunurluk guclu girisim kontrasti anlamina gelir. Dusuk gorunurluk, karanlik bosluklarin doldugu ve desenin daha cok iki bagimsiz parcacik akisi gibi davrandigi anlamina gelir.',
  },
  {
    question: 'Bu tam bir kuantum mekanigi cozucu mu?',
    answer: 'Hayir. Bir cift yarik girisim zarfi ile dekoherans kontrolunu birlestiren egitimsel bir modeldir. Olcum etkisini gorsel olarak aciklamak icin yapilmistir, gercek bir duzenek icin Schrodinger denklemi simulatorsinin yerini almak icin degil.',
  },
  {
    question: 'Yarik araligi neden sacak araligini etkiliyor?',
    answer: 'Daha genis aralik, ekran boyunca daha hizli bir faz farki olusturur, bu nedenle aydinlik ve karanlik bantlar birbirine yaklasir. Daha kucuk aralik, sacaklari daha genis yayar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Cift yarik duzenegi',
    controls: 'Cift yarik kontrolleri',
    results: 'Cift yarik sonuclari',
    kicker: 'Olcum kontrolu',
    detectorToggle: 'Hangi-yol dedektorunu etkinlestir',
    detectorStrength: 'Dedektor guclendirmesi',
    slitSeparation: 'Yarik araligi',
    slitWidth: 'Yarik genisligi',
    unobserved: 'Gozlemlenmemis',
    observed: 'Gozlemlenmis',
    waveMode: 'Girisim',
    particleMode: 'Parcacik bantlari',
    fringeVisibility: 'Sacak gorunurlugu',
    whichPath: 'Hangi-yol bilgisi',
    coherence: 'Koherens',
    readoutNote: 'Her iki yol da ayirt edilemez kaldiginda girisim hayatta kalir. Olcum, yol bilgisini kullanilabilir hale getirir ve ekran karanlik sacaklarini kaybeder.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dekoherans ve hangi-yol detektoru ile cift yarik deneyi simulatoru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu cift yarik simulatoru, klasik kuantum deneyini interaktif bir gorsel modele donusturur. Dedektor kapaliyken ekran bir girisim deseni gosterir: iki olasi yol koherent kaldigi icin aydinlik ve karanlik bantlar olusur. Hangi-yol dedektoru eklendiginde, yol alternatifleri ayirt edilebilir hale geldigi icin desen yavas yavas iki genis parcacik bandina donusur.',
    },
    {
      type: 'paragraph',
      html: 'Arac, gozlemin cift yarik sonucunu neden degistirdigine dair net bir aciklama arayan ogrenciler icin tasarlanmistir. "Gozlemci gerceklgi degistirir" gibi belirsiz ifadelerden kacinir ve bunun yerine fiziksel olarak yararli olan fikre odaklanir: girisim, ayirt edilemez alternatifler gerektirirken, olcum ve cevre dolanikligi sacaklar icin gerekli faz iliskisini ortadan kaldirir.',
    },
    {
      type: 'title',
      text: 'Cift yarik deneyinin gosterdigi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gozlemlenmemis duzeneksel kurulumda, tek bir kuantum nesnesi her iki yarikla iliskili olasilik genlikleriyle tanimlanir. Bu genlikler faz ile toplanir. Ekranin bazi konumlarinda birbirlerini guclendirerek aydinlik bantlar olustururlar; diger konumlarda birbirlerini iptal ederek karanlik bantlar olustururlar. Bu degisimli yapi, girisimin imzasidir.',
    },
    {
      type: 'paragraph',
      html: 'Bir dedektor hangi yarigin kullanildigini kaydederse, alternatifler ayirt edilemez olmaktan cikar. Ekran artik koherent bir genlik toplami almaz. Yol kosullu iki sonucun bir karisimini alir, bu nedenle karanlik girisim bosluklari dolar ve sonuc parcanin bir veya diger yariktan geciyormus gibi gorunur.',
    },
    {
      type: 'title',
      text: 'Simulator nasil okunur',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kontrol veya metrik', 'Neyi degistirir', 'Nelere dikkat edilmeli'],
      rows: [
        ['Dedektor guclendirmesi', 'Ne kadar hangi-yol bilgisi mevcut', 'Daha yuksek degerler sacak gorunurlugunu azaltir ve iki bantli parcacik desenini artirir.'],
        ['Yarik araligi', 'Iki aciklik arasindaki mesafe', 'Genis aralik, girisim bantlarini ekranda daha sik hale getirir.'],
        ['Yarik genisligi', 'Her acikligin boyutu', 'Daha genis yariklar kirinim zarfini daraltir ve genel parlakligi yeniden sekillendirir.'],
        ['Sacak gorunurlugu', 'Ekranin aydinlik ve karanlik bolgeleri arasindaki kontrast', 'Yuksek bir sayi, koherent girisimin hala gorunur oldugu anlamina gelir.'],
        ['Koherens', 'Yollar arasinda ne kadar faz iliskisi kalir', 'Dedektor yollari ayirt edilebilir kildikca koherens duser.'],
      ],
    },
    {
      type: 'title',
      text: 'Gizemcilik olmadan dekoherans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekoherans, bir kuantum sisteminin bir dedektor veya cevre ile iliskilendirildiginde kullanilabilir faz koherensinin kaybidir. Bir cift yarik deneyinde bu iliski, hangi-yol bilgisi tasiyabilir. Yol prensipte kaydedildiginde, kimse kaydi okumasa bile, girisim deseni bastirilir.',
    },
    {
      type: 'paragraph',
      html: 'Bu ayrim onemlidir cunku bircok aciklama insan gozleminin rolunu abartir. Onemli fizik, gorme veya bilinc degildir; onemli olan, deney duzeneginin aksi takdirde girisim yapacak alternatiflerin ayirt edilemezligini koruyup korumadigidir.',
    },
    {
      type: 'title',
      text: 'Bu egitim modelinin sinirlari',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulator, kompakt bir optik tarzi cift yarik deseni kullanir ve bunu dekoherans icin bir dedektor guclendirmesi modeliyle birlestirir. Sezgi, sinif gosterimleri ve kavramsal tekrar icin mukemmeldir, ancak dedektor Hilbert uzaylari, gurultu kaynaklari veya laboratuvar kalibrasyonuna sahip tam bir kuantum duzeneginin sayisal cozumu degildir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Kavramlari anlamak icin kullanin:</strong> girisim, hangi-yol bilgisi, koherens ve olcum.',
        '<strong>Deney tasarimi icin kullanmayin:</strong> gercek cift yarik deneyleri hassas dalga boyu, aciklik, dedektor ve yayilim hesaplamalari gerektirir.',
        '<strong>Egilime odaklanin:</strong> ayirt edilebilirlik arttikca, girisim kontrasti azalir.',
      ],
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
