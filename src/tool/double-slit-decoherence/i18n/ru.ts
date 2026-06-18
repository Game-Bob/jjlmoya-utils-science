import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulyator-dvoinoi-shcheli-dekogerentcii';
const title = 'Simulyator dvukhshcelevogo eksperimenta i dekogerentcii';
const description = 'Vklyuchait i vyklyuchait detektory puti, chtoby uvidet, kak kvantovaya interferentciya ugasayet v dve chastichnye polosy v vizualnom simulyatore dvoinoi shcheli.';

const howTo = [
  {
    name: 'Nachnite s vyklyuchennym detektorom',
    text: 'Ostavte detektor puti otklyuchennym i nablyudaite, kak ekran formiruyet svetlye i temnye interferentcionnye polosy iz kogerentnykh amplitud veroyatnosti.',
  },
  {
    name: 'Uvelichte silu detektora',
    text: 'Povyshte regulirovku detektora, chtoby vvesti informaciyu o puti. Po mere usileniya detektora kogerentnost padayet i polosy ischezayut.',
  },
  {
    name: 'Izmenite geometriyu shchelei',
    text: 'Nastroite rasstoyaniye mezhdu shchelyami i shirinu shchelei, chtoby uvidet, kak geometriya menyayet razstoyaniye mezhdu polosami, shirinu ogibayushchey i konechnoye raspredeleniye na ekrane.',
  },
  {
    name: 'Chitayte pokazaniya v realnom vremeni',
    text: 'Ispolzuite vidimost polos, informaciyu o puti i kogerentnost, chtoby svyazat vizualnyi uzor s istoriyey kvantovogo izmereniya.',
  },
];

const faq = [
  {
    question: 'Pochemu uzor menyayetsya, kogda detektory vklyuchayut?',
    answer: 'Detektor, kotoryi mozhet raskryt, kakuyu shchel ispolzovala chastica, razrushayet fazovoye sootnosheniye mezhdu dvumya alternativami. Bez etoi kogerentnosti dva veroyatnostnykh puti bolshe ne interferiruyut, i ekrun priblizhayetsya k dvum shirokim chastichnym polosam.',
  },
  {
    question: 'Oznachayet li etot simulyator, chto soznaniye kollapsiruyet volnovuyu funkciyu?',
    answer: 'Net. Simulyator sosredotochen na fizicheskoy informacii o puti i dekogerentcii. Detektor, okruzhayushchaya sreda ili lyuboye vzaimodeistviye, delayushcheye put razlichimym, mozhet podavit interferenciyu bez neobkhodimosti soznatelnogo nablyudatelya.',
  },
  {
    question: 'Chto takoye vidimost polos?',
    answer: 'Vidimost polos sravnivayet svetlye i temnye oblasti na ekrane. Vysokaya vidimost oznachayet silnyi interferentcionnyi kontrast. Nizkaya vidimost oznachayet, chto temnye promezhutki zapolnilis i uzor vedet sebya bolshe kak dva nezavisimykh chastichnykh potoka.',
  },
  {
    question: 'Eto polnyi reshatel kvantovoi mekhaniki?',
    answer: 'Net. Eto obrazovatelnaya model, kotoraya sochetayet interferentcionnuyu ogibayushchuyu dvoinoi shcheli s regulyatorom dekogerentcii. Ona sozdana dlya vizualnogo obyasneniya effekta izmereniya, a ne dlya zameny simulicii uravneniya Shredingera dlya realnoi ustanovki.',
  },
  {
    question: 'Pochemu rasstoyaniye mezhdu shchelyami vliyayet na rasstoyaniye mezhdu polosami?',
    answer: 'Bolsheye rasstoyaniye sozdayet boleye bystruyu fazovuyu raznost po ekranu, poetomu svetlye i temnye polosy stanovatsya blizhe drug k drugu. Mensheye rasstoyaniye razdvigayet polosy dalishe drug ot druga.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Ustanovka s dvoinoi shchelyu',
    controls: 'Regulyatory dvoinoi shcheli',
    results: 'Rezultaty dvoinoi shcheli',
    kicker: 'Regulyator izmereniya',
    detectorToggle: 'Vklyuchit detektor puti',
    detectorStrength: 'Sila detektora',
    slitSeparation: 'Rasstoyaniye mezhdu shchelyami',
    slitWidth: 'Shirina shcheli',
    unobserved: 'Nenablyudayemoye',
    observed: 'Nablyudayemoye',
    waveMode: 'Interferentciya',
    particleMode: 'Chastichnye polosy',
    fringeVisibility: 'Vidimost polos',
    whichPath: 'Informatciya o puti',
    coherence: 'Kogerentnost',
    readoutNote: 'Interferentciya sokhranyayetsya, kogda oba puti ostayutsya nerazlichimymi. Izmereniye delayet informaciyu o puti dostupnoi, i ekun teryayet temnye polosy.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulyator dvukhshchelevogo eksperimenta s dekogerentciyei i detektirovaniyem puti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Etot simulyator dvoinoi shcheli prevrashchayet klassicheskii kvantovyi eksperiment v interaktivnuyu vizualnuyu model. Pri vyklyuchennom detektore ekun pokazyvayet interferentcionnyi uzor: svetlye i temnye polosy voznikayut potomu, chto dva vozmozhnykh puti ostayutsya kogerentnymi. Kogda dobavlyayetsya detektor puti, uzor postepenno prevrashchayetsya v dve shirokiye chastichnye polosy, tak kak alternativy puti stanovatsya razlichimymi.',
    },
    {
      type: 'paragraph',
      html: 'Instrument prednaznachen dlya obuchayushchikhsya, ishchushchikh yasnoye obyasneniye, pochemu nablyudeniye izmenyayet rezultat dvukhshchelevogo eksperimenta. On izbegayet rasplyvchatoi frazy "nablyudatel izmenyayet realnost" i vmesto etogo sosredotachivayetsya na fizicheski poleznoi ideye: interferentciya trebuyet nerazlichimykh alternativ, v to vremya kak izmereniye i okruzhayushchee zaputyvaniye udalyayut fazovoye sootnosheniye, neobkhodimoye dlya polos.',
    },
    {
      type: 'title',
      text: 'Chto demonstriruyet dvukhshchelevoi eksperiment',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'V nenablyudayemoi konfiguratcii odin kvantovyi obyekt opisyvayetsya amplitudami veroyatnosti, svyazannymi s obeimi shchelyami. Eti amplitudy skladyvayutsya s fazoi. V nekotorykh polozheniyakh na ekrane oni usilivayut drug druga, proizvodya svetlye polosy; v drugikh polozheniyakh oni gasyat drug druga, proizvodya temnye polosy. Eta chereduyushchayasya struktura yavlyayetsya priznakom interferentcii.',
    },
    {
      type: 'paragraph',
      html: 'Yesli detektor registriruyet, kakaya shchel byla ispolzovana, alternativy perestayut byt nerazlichimymi. Ekun bolshe ne poluchayet kogerentnoi summy amplitud. On poluchayet smes dvukh obuslovlennykh putem rezultatov, poetomu temnye interferentcionnye promezhutki zapolnyayutsya, i rezultat vyglyadit kak chasticy, prokhodyashchiye cherez odnu ili druguyu shchel.',
    },
    {
      type: 'title',
      text: 'Kak chitat simulyator',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Regulyator ili metrika', 'Chto on izmenyayet', 'Na chto obrashchat vnimaniye'],
      rows: [
        ['Sila detektora', 'Skolko informacii o puti dostupno', 'Boleye vysokie znacheniya umenshayut vidimost polos i usilivayut dvukhpolosnyi chastichnyi uzor.'],
        ['Rasstoyaniye mezhdu shchelyami', 'Rasstoyaniye mezhdu dvumya otverstiyami', 'Boleye shirokoye rasstoyaniye delaet interferentcionnye polosy bolee plotnymi na ekrane.'],
        ['Shirina shcheli', 'Razmer kazhdogo otverstiya', 'Boleye shirokiye shcheli suzhayut difrakcionnuyu ogibayushchuyu i izmenyayut obshchuyu yarkost.'],
        ['Vidimost polos', 'Kontrast mezhdu svetlymi i temnymi oblastyami ekrana', 'Vysokoye chislo oznachayet, chto kogerentnaya interferentciya vse yeshche vidima.'],
        ['Kogerentnost', 'Skolko fazovogo sootnosheniya ostaetsya mezhdu putyami', 'Kogerentnost padayet, kogda detektor delaet puti razlichimymi.'],
      ],
    },
    {
      type: 'title',
      text: 'Dekogerentciya bez mistiki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dekogerentciya eto poterya poleznoi fazovoi kogerentnosti, kogda kvantovaya sistema korreliruyet s detektorom ili okruzhayushchei sredoi. V dvukhshchelevom eksperimente eta korrelyatciya mozhet nesti informaciyu o puti. Kak tolko put v printcipe zaregistrirovan, dazhe yesli nikto ne chitayet zapis, interferentcionnyi uzor podavlyayetsya.',
    },
    {
      type: 'paragraph',
      html: 'Eto razlichiye vazhno, potomu chto mnogiye obyasneniya preuvelichivayut rol chelovecheskogo nablyudeniya. Vazhnaya fizika ne v zrenii ili soznanii; ona v tom, sokhranyayet li eksperimentalnaya ustanovka ili razrushayet nerazlichimost alternativ, kotoryye v protivnom sluchaye interferirovali by.',
    },
    {
      type: 'title',
      text: 'Granitcy etoi obrazovatelnoi modeli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Simulyator ispolzuyet kompaktnyi opticheskii uzor dvoinoi shcheli i sochetayet yego s modelyu sily detektora dlya dekogerentcii. On otlichno podkhodit dlya razvitiya intuicii, demonstratcii v klasse i konceptualnogo povtoreniya, no ne yavlyayetsya chislennym resheniyem polnogo kvantovogo apparata s detektornymi Gilbertovymi prostranstvami, istochnikami shuma ili laboratornoi kalibrovkoi.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ispolzuite dlya ponimaniya konceptov:</strong> interferentciya, informaciya o puti, kogerentnost i izmereniye.',
        '<strong>Ne ispolzuite dlya eksperimentalnogo proektirovaniya:</strong> realnye dvukhshchelevye eksperimenty trebuyut tochnykh raschetov dliny volny, apertury, detektora i rasprostraneniya.',
        '<strong>Sredotochtes na tendencii:</strong> po mere vozrastaniya razlichimosti kontrast interferentcii umenshayetsya.',
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
