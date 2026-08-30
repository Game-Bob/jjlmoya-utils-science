import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulator-seleksi-alam-drift-genetik';
const title = 'Simulator seleksi alam dan drift genetik';
const description =
  'Lihat secara real time bagaimana tekanan seleksi, mutasi, drift, dan reproduksi mengubah frekuensi alel.';

const howTo = [
  {
    name: 'Atur ukuran populasi',
    text: 'Pilih populasi kecil atau besar untuk melihat bagaimana ukuran sampel mengubah stabilitas evolusi.',
  },
  {
    name: 'Sesuaikan seleksi dan drift',
    text: 'Tingkatkan tekanan seleksi untuk mendukung satu sifat, atau naikkan intensitas drift agar kebetulan mendominasi.',
  },
  {
    name: 'Amati perkembangan generasi',
    text: 'Jalankan simulasi dan bandingkan sifat dominan, kebugaran, dan keragaman dari waktu ke waktu.',
  },
  {
    name: 'Interpretasikan keseimbangan',
    text: 'Gunakan metrik akhir untuk memahami kapan adaptasi menang dan kapan fluktuasi acak mengambil alih.',
  },
];

const faq = [
  {
    question: 'Apa perbedaan antara seleksi alam dan drift genetik?',
    answer: 'Seleksi alam adalah proses tidak acak di mana sifat yang meningkatkan kelangsungan hidup menjadi lebih umum. Drift genetik adalah perubahan acak frekuensi alel, paling kuat pada populasi kecil.',
  },
  {
    question: 'Mengapa populasi kecil berubah lebih cepat?',
    answer: 'Dengan lebih sedikit individu, pengambilan sampel acak memiliki efek lebih besar. Artinya peristiwa kebetulan mengubah frekuensi alel lebih dramatis.',
  },
  {
    question: 'Bisakah drift mengalahkan seleksi?',
    answer: 'Ya. Jika drift cukup kuat, sifat yang menguntungkan dapat hilang secara acak, terutama ketika populasi kecil.',
  },
  {
    question: 'Apa arti kebugaran dalam simulator ini?',
    answer: 'Kebugaran adalah skor sederhana yang mewakili seberapa baik populasi beradaptasi dengan lingkungan yang dipilih.',
  },
  {
    question: 'Mengapa ukuran populasi sangat penting?',
    answer: 'Ukuran populasi menentukan seberapa kuat pengambilan sampel acak mempengaruhi frekuensi alel. Pada populasi besar, seleksi lebih mudah terlihat.',
  },
  {
    question: 'Kapan saya harus menggunakan simulator ini?',
    answer: 'Gunakan saat Anda ingin memahami intuisi evolusi dan membedakan kekuatan terarah seperti seleksi dan kekuatan stokastik seperti drift.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Ukuran populasi',
    generations: 'Generasi',
    mutationRate: 'Laju mutasi',
    selectionPressure: 'Tekanan seleksi',
    driftIntensity: 'Intensitas drift',
    alleleCount: 'Alel awal',
    innovationRate: 'Laju inovasi',
    run: 'Mulai simulasi',
    dominantTrait: 'Sifat dominan',
    fitness: 'Fitness akhir',
    diversity: 'Keragaman genetik',
    evolutionConsole: 'Konsol evolusi',
    populationLabel: 'Populasi',
    aliveLabel: 'hidup',
    alleleCountsLabel: 'Jumlah alel',
    alleleDefault: 'Alel 1',
    populationValueLabel: 'Populasi',
  },
  seo: [
    {
      type: 'title',
      text: 'Seleksi alam vs drift genetik: pahami evolusi dengan populasi hidup',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simulator ini memberi cara yang jelas dan praktis untuk melihat seleksi dan drift dalam waktu nyata.',
    },
    {
      type: 'title',
      text: 'Arti kontrol dan mengapa itu penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seleksi alam meningkatkan frekuensi sifat yang menguntungkan. Drift genetik mengubah frekuensi secara acak.',
    },
    {
      type: 'paragraph',
      html: 'Kedua kekuatan selalu hadir dan berinteraksi di setiap generasi.',
    },
    {
      type: 'title',
      text: 'Cara membaca hasil simulasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Metrik langsung membantu Anda membaca perubahan sistem.',
    },
    {
      type: 'title',
      text: 'Mengapa ukuran populasi mengubah cerita',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tekanan seleksi:</strong> Seberapa kuat lingkungan mendukung suatu sifat.',
        '<strong>Intensitas drift:</strong> Seberapa banyak sampel acak mengubah populasi.',
        '<strong>Laju mutasi:</strong> Seberapa sering variasi baru muncul.',
        '<strong>Jumlah alel:</strong> Alel awal saat simulasi dimulai.',
        '<strong>Keragaman genetik:</strong> Bahan mentah utama evolusi.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Alat ini menyediakan cara praktis untuk memahami biologi evolusi.',
    },
    {
      type: 'title',
      text: 'Contoh cepat untuk dicoba',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tujuan', 'Apa yang diubah', 'Apa yang harus dilihat'],
      rows: [
        ['Tunjukkan kemenangan seleksi', 'Naikkan tekanan seleksi dan jaga drift rendah', 'Satu alel mendominasi seiring waktu.'],
        ['Tunjukkan drift acak', 'Turunkan ukuran populasi dan naikkan drift', 'Frekuensi alel berfluktuasi tidak menentu.'],
        ['Tunjukkan variasi baru', 'Tingkatkan mutasi dan inovasi', 'Alel baru bermunculan secara kontinyu.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Visualisasi langsung membuat alat ini sangat berguna untuk pembelajaran.',
    },
    { type: 'paragraph', html: 'Penjelasan ini memperjelas asumsi model dan menunjukkan bagaimana parameter mengubah hasil. Ubah satu nilai saja setiap kali lalu bandingkan beberapa percobaan, sehingga setiap perbedaan dapat dikaitkan dengan penyebab yang jelas. Visualisasi ini merupakan pendekatan pembelajaran; sistem nyata memiliki lebih banyak variabel, ketidakpastian pengukuran, dan kondisi batas. Gunakan hasilnya untuk memahami skala, menyusun pertanyaan, dan membandingkan skenario. Untuk keputusan praktis atau analisis ilmiah, periksa kembali data primer, satuan, dan sumber khusus yang relevan. Catat pengaturan agar perhitungan dapat diulang dan keterbatasan model dapat didiskusikan dengan tepat.' },
    { type: 'paragraph', html: 'Bandingkan perubahan pada hasil dengan menjalankan model kembali menggunakan parameter yang sama. Catat nilai awal, aturan perhitungan, dan batas yang digunakan. Dengan cara ini pembaca dapat membedakan pola yang berasal dari model dari variasi numerik atau kebetulan pada satu percobaan. Hasil ini bersifat edukatif dan perlu dipahami bersama penjelasan, asumsi, serta keterbatasan alat.' },
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
