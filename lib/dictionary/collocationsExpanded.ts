import { WordResult } from '../types';

/**
 * German Collocations & Nomen-Verb-Verbindungen (NVV)
 * Source:
 * - Duden – Das Stilwörterbuch (Wortverbindungen wirkungsvoll formulieren, ~100.000 Kolokationen)
 * - Essential B2/C1/C2 Funktionsverbgefüge for native fluency
 */
export const COLLOCATIONS_EXPANDED: Record<string, WordResult> = {
  zur_verfuegung_stehen: {
    word: 'zur Verfügung stehen',
    displayWord: 'zur Verfügung stehen / stellen',
    ipa: '/tsuːɐ̯ fɛɐ̯ˈfyːɡʊŋ ˈʃteːən/',
    translations: ['tersedia (stehen)', 'menyediakan / menyiapkan (stellen)'],
    meaningSummary: 'Berada dalam keadaan siap digunakan atau siap membantu (stehen); atau menyerahkan fasilitas agar bisa dipakai orang lain (stellen).',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Funktionsverbgefüge: "zur Verfügung stehen" (+ Dativ = pasif/tersedia); "zur Verfügung stellen" (+ Akkusativ = aktif/menyediakan).',
      },
    },
    synonyms: [
      { word: 'bereitstehen', wordClass: 'Verb', translation: 'siap sedia' },
      { word: 'bereitstellen', wordClass: 'Verb', translation: 'menyediakan' },
      { word: 'anbieten', wordClass: 'Verb', translation: 'menawarkan' },
    ],
    antonyms: [
      { word: 'vorenthalten', wordClass: 'Verb', translation: 'menahan / tidak memberikan akses' },
      { word: 'fehlen', wordClass: 'Verb', translation: 'tidak tersedia' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Für weitere Fragen stehe ich Ihnen jederzeit gerne zur Verfügung.',
        indonesian: 'Untuk pertanyaan lebih lanjut, saya setiap saat dengan senang hati siap membantu Anda.',
        contextNote: 'Penutup email formal bisnis paling standar di Jerman!',
      },
      {
        level: 'B2',
        german: 'Die Universität stellt den Studierenden kostenlose Software zur Verfügung.',
        indonesian: 'Universitas menyediakan perangkat lunak gratis bagi para mahasiswa.',
        contextNote: 'Bentuk aktif (stellen)',
      },
    ],
    learningTips: 'Nomen-Verb-Verbindung paling esensial dalam bahasa korespondensi Jerman. Jika Anda menulis surat lamaran atau email dinas di Jerman, kalimat penutupnya wajib memakai frasa ini!',
  },

  in_betracht_ziehen: {
    word: 'in Betracht ziehen',
    displayWord: 'in Betracht ziehen',
    ipa: '/ɪn bəˈtʁaxt ˈtsiːən/',
    translations: ['mempertimbangkan', 'memasukkan ke dalam kalkulasi pilihan'],
    meaningSummary: 'Memikirkan suatu opsi atau kemungkinan secara serius sebelum mengambil keputusan.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Funktionsverbgefüge sepadan dengan kata kerja "berücksichtigen" atau "erwägen". Objek dalam kasus Akkusativ.',
      },
    },
    synonyms: [
      { word: 'berücksichtigen', wordClass: 'Verb', translation: 'memperhitungkan' },
      { word: 'erwägen', wordClass: 'Verb', translation: 'menimbang-nimbang (formal)' },
      { word: 'bedenken', wordClass: 'Verb', translation: 'memikirkan masak-masak' },
    ],
    antonyms: [
      { word: 'ausschließen', wordClass: 'Verb', translation: 'mengesampingkan sama sekali' },
      { word: 'verwerfen', wordClass: 'Verb', translation: 'menolak mentah-mentah' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Haben Sie alle potenziellen Risiken bei Ihrer Investition in Betracht gezogen?',
        indonesian: 'Apakah Anda telah mempertimbangkan semua potensi risiko dalam investasi Anda?',
        contextNote: 'Pertimbangan bisnis matang',
      },
      {
        level: 'C1',
        german: 'Diese radikale Reformoption kommt für uns ernsthaft in Betracht.',
        indonesian: 'Opsi reformasi radikal ini secara serius masuk dalam pertimbangan bagi kami.',
        contextNote: 'Varian: in Betracht kommen (masuk pertimbangan)',
      },
    ],
    learningTips: 'Kuasai kedua varian bersaudaranya: "etwas in Betracht ZIEHEN" (aktif: kita yang mempertimbangkan sesuatu) vs "etwas kommt in Betracht" (pasif: hal itu layak dipertimbangkan).',
  },

  eine_entscheidung_treffen: {
    word: 'eine Entscheidung treffen',
    displayWord: 'eine Entscheidung treffen',
    ipa: '/ˈaɪ̯nə ɛntˈʃaɪ̯dʊŋ ˈtʁɛfn̩/',
    translations: ['mengambil keputusan', 'menentukan pilihan final'],
    meaningSummary: 'Memutuskan suatu pilihan setelah mempertimbangkan berbagai alternatif.',
    wordClass: 'Redewendung',
    cefrLevel: 'B1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Funktionsverbgefüge sepadan dengan kata kerja "sich entscheiden". Bentuk lampau: traf eine Entscheidung.',
      },
    },
    synonyms: [
      { word: 'sich entscheiden', wordClass: 'Verb', translation: 'memutuskan (kata kerja sederhana)' },
      { word: 'beschließen', wordClass: 'Verb', translation: 'menetapkan ketetapan' },
    ],
    antonyms: [
      { word: 'zögern', wordClass: 'Verb', translation: 'ragu-ragu menunda' },
      { word: 'unentschlossen bleiben', wordClass: 'Redewendung', translation: 'tetap bimbang tanpa keputusan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Wir müssen bis morgen eine endgültige Entscheidung treffen.',
        indonesian: 'Kita harus mengambil keputusan final paling lambat besok.',
        contextNote: 'Tenggat waktu penetapan',
      },
      {
        level: 'B2',
        german: 'Es fällt vielen Menschen schwer, unter hohem Zeitdruck weitreichende Entscheidungen zu treffen.',
        indonesian: 'Banyak orang merasa berat untuk mengambil keputusan berdampak luas di bawah tekanan waktu yang tinggi.',
        contextNote: 'Manajemen kepemimpinan',
      },
    ],
    learningTips: 'Perhatikan kata kerja pasangannya: dalam bahasa Indonesia "MENGAMBIL keputusan", dalam bahasa Inggris "MAKE a decision", tetapi dalam bahasa Jerman BUKAN "nehmen" atau "machen", melainkan wajib: "TREFFEN"!',
  },

  kritik_ueben: {
    word: 'Kritik üben',
    displayWord: 'Kritik üben',
    ipa: '/kʁiˈtiːk ˈyːbn̩/',
    translations: ['melontarkan kritik', 'mengkritik secara formal (+ an)'],
    meaningSummary: 'Menyampaikan penilaian kritis atau teguran terhadap seseorang atau kebijakan.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Preposisi wajib: Kritik üben an + Dativ (mengkritik terhadap...).',
      },
    },
    synonyms: [
      { word: 'kritisieren', wordClass: 'Verb', translation: 'mengkritik (kata kerja dasar)' },
      { word: 'bemängeln', wordClass: 'Verb', translation: 'menunjukkan kekurangan' },
      { word: 'rügen', wordClass: 'Verb', translation: 'menegur keras' },
    ],
    antonyms: [
      { word: 'loben', wordClass: 'Verb', translation: 'memuji' },
      { word: 'anerkennen', wordClass: 'Verb', translation: 'mengakui keunggulan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Die Opposition übte scharfe Kritik an den Sparmaßnahmen der Regierung.',
        indonesian: 'Oposisi melontarkan kritik tajam terhadap kebijakan penghematan pemerintah.',
        contextNote: 'Wacana berita politik B2',
      },
      {
        level: 'C1',
        german: 'Konstruktive Kritik zu üben ist eine Kunst, die gelernt sein will.',
        indonesian: 'Melontarkan kritik yang konstruktif adalah sebuah seni yang menuntut pembelajaran matang.',
        contextNote: 'Budaya umpan balik profesional',
      },
    ],
    learningTips: 'Perhatikan kata kerja "üben": di sini bukan bermakna "berlatih", melainkan "mempraktikkan/menjalankan". Kolokasi indah dari Duden Stilwörterbuch: "scharfe Kritik üben an...".',
  },

  in_frage_kommen: {
    word: 'in Frage kommen',
    displayWord: 'in Frage kommen',
    ipa: '/ɪn ˈfʁaːɡə ˈkɔmən/',
    translations: ['masuk dalam pertimbangan', 'memungkinkan / dapat diterima sebagai opsi'],
    meaningSummary: 'Memenuhi syarat atau layak dipertimbangkan sebagai solusi yang mungkin.',
    wordClass: 'Redewendung',
    cefrLevel: 'B1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Sering digunakan dalam bentuk negasi: "Das kommt nicht in Frage!" (Sama sekali tidak mungkin / jangan harap!).',
      },
    },
    synonyms: [
      { word: 'möglich sein', wordClass: 'Redewendung', translation: 'memungkinkan' },
      { word: 'in Betracht kommen', wordClass: 'Redewendung', translation: 'layak dipertimbangkan' },
      { word: 'denkbar sein', wordClass: 'Redewendung', translation: 'dapat dibayangkan' },
    ],
    antonyms: [
      { word: 'ausgeschlossen sein', wordClass: 'Redewendung', translation: 'mustahil tertutup sama sekali' },
      { word: 'unmöglich sein', wordClass: 'Redewendung', translation: 'tidak mungkin' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Das kommt überhaupt nicht in Frage! Das erlaube ich auf keinen Fall.',
        indonesian: 'Itu sama sekali tidak boleh / jangan harap! Aku tidak akan mengizinkannya dalam kondisi apa pun.',
        contextNote: 'Penolakan tegas orang tua / atasan',
      },
      {
        level: 'B2',
        german: 'Für die neue Stelle kommen nur Bewerber mit verhandlungssicheren Deutschkenntnissen in Frage.',
        indonesian: 'Untuk posisi baru tersebut hanya pelamar dengan kemahiran bahasa Jerman tingkat bisnis yang masuk dalam pertimbangan.',
        contextNote: 'Syarat kualifikasi kerja',
      },
    ],
    learningTips: 'Ungkapan sehari-hari penolakan mutlak paling tegas di Jerman: "Das kommt gar nicht in Frage!" artinya "Jangan mimpi! Tidak ada tawar-menawar!".',
  },

  in_kauf_nehmen: {
    word: 'in Kauf nehmen',
    displayWord: 'in Kauf nehmen',
    ipa: '/ɪn ˈkaʊ̯f ˈneːmən/',
    translations: ['menerima risiko / konsekuensi negatif', 'rela menanggung resiko demi tujuan'],
    meaningSummary: 'Bersedia menerima kerugian, ketidaknyamanan, atau dampak buruk yang menyertai suatu keputusan.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Objek Akkusativ: Nachteile / Risiken / Kosten in Kauf nehmen.',
      },
    },
    synonyms: [
      { word: 'akzeptieren', wordClass: 'Verb', translation: 'menerima' },
      { word: 'hinnehmen', wordClass: 'Verb', translation: 'pasrah menerima' },
      { word: 'verschmerzen', wordClass: 'Verb', translation: 'rela mengikhlaskan kerugian' },
    ],
    antonyms: [
      { word: 'ablehnen', wordClass: 'Verb', translation: 'menolak' },
      { word: 'vermeiden wollen', wordClass: 'Redewendung', translation: 'ingin menghindar' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Wer ein eigenes Unternehmen gründet, muss finanzielle Risiken in Kauf nehmen.',
        indonesian: 'Siapa pun yang mendirikan perusahaan sendiri harus bersedia menanggung risiko finansial.',
        contextNote: 'Realitas wirausaha B2',
      },
      {
        level: 'B2',
        german: 'Um pünktlich anzukommen, nahm er die teurere Reiseroute in Kauf.',
        indonesian: 'Demi tiba tepat waktu, ia rela menerima rute perjalanan yang lebih mahal.',
        contextNote: 'Kompromi praktis',
      },
    ],
    learningTips: 'Kiasan perdagangan lama: saat membeli barang dagangan secara borongan, pembeli menerima kemungkinan adanya beberapa barang cacat kecil ("in Kauf nehmen").',
  },

  zur_kenntnis_nehmen: {
    word: 'zur Kenntnis nehmen',
    displayWord: 'zur Kenntnis nehmen',
    ipa: '/tsuːɐ̯ ˈkɛntnɪs ˈneːmən/',
    translations: ['menyimak dan mencatat', 'mencatat sebagai pemberitahuan resmi', 'mengetahui tanpa membantah'],
    meaningSummary: 'Mendengar atau membaca suatu informasi penting secara sadar dan mencatatnya dalam memori resmi.',
    wordClass: 'Redewendung',
    cefrLevel: 'C1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Sangat sering digunakan dalam protokol rapat, bahasa diplomasi, dan surat dinas resmi.',
      },
    },
    synonyms: [
      { word: 'vernehmen', wordClass: 'Verb', translation: 'mendengar resmi' },
      { word: 'registrieren', wordClass: 'Verb', translation: 'meregistrasi / mencatat' },
      { word: 'wahrnehmen', wordClass: 'Verb', translation: 'menangkap persepsi' },
    ],
    antonyms: [
      { word: 'ignorieren', wordClass: 'Verb', translation: 'mengabaikan acuh' },
      { word: 'überhören', wordClass: 'Verb', translation: 'pura-pura tidak dengar' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Der Vorstand hat den Rücktritt des Finanzchefs mit Bedauern zur Kenntnis genommen.',
        indonesian: 'Dewan direksi telah menyimak dan mencatat pengunduran diri kepala keuangan tersebut dengan rasa sesal.',
        contextNote: 'Pernyataan pers resmi korporat',
      },
      {
        level: 'C1',
        german: 'Ich habe Ihre Ausführungen aufmerksam zur Kenntnis genommen.',
        indonesian: 'Saya telah menyimak dan mencatat seluruh penjelasan Anda dengan penuh perhatian.',
        contextNote: 'Diplomasi kesantunan tingkat C1',
      },
    ],
    learningTips: 'Frasa emas dalam etika birokrasi dan persuratan resmi Jerman. Singkatannya di memo internal Jerman adalah "z.K." (zur Kenntnisnahme).',
  },

  massnahmen_ergreifen: {
    word: 'Maßnahmen ergreifen',
    displayWord: 'Maßnahmen ergreifen',
    ipa: '/ˈmaːsˌnaːmən ɛɐ̯ˈɡʁaɪ̯fn̩/',
    translations: ['mengambil tindakan konkret', 'melakukan langkah penanggulangan terpadu'],
    meaningSummary: 'Memulai serangkaian aksi nyata terencana untuk menangani masalah genting.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Funktionsverbgefüge: Maßnahmen ergreifen / treffen / einleiten gegen + Akkusativ.',
      },
    },
    synonyms: [
      { word: 'handeln', wordClass: 'Verb', translation: 'bertindak' },
      { word: 'Schritte einleiten', wordClass: 'Redewendung', translation: 'memulai langkah konkret' },
      { word: 'aktiv werden', wordClass: 'Redewendung', translation: 'bergerak aktif' },
    ],
    antonyms: [
      { word: 'tatenlos zusehen', wordClass: 'Redewendung', translation: 'hanya menonton berpangku tangan' },
      { word: 'abwarten', wordClass: 'Verb', translation: 'hanya menunggu pasif' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Die Behörden müssen unverzüglich wirksame Maßnahmen gegen die Luftverschmutzung ergreifen.',
        indonesian: 'Otoritas berwenang harus segera mengambil tindakan-tindakan konkret yang efektif melawan polusi udara.',
        contextNote: 'Tuntutan kebijakan publik',
      },
      {
        level: 'C1',
        german: 'Vorbeugende Maßnahmen zu ergreifen ist stets kostengünstiger als die spätere Schadensbehebung.',
        indonesian: 'Mengambil langkah-langkah pencegahan selalu jauh lebih hemat biaya daripada perbaikan kerusakan di kemudian hari.',
        contextNote: 'Prinsip manajemen risiko',
      },
    ],
    learningTips: 'Kata kerja khas pasangan kata "Maßnahme" di Duden Stilwörterbuch adalah "ergreifen" (atau "treffen"). Hindari kalimat harfiah kaku seperti "machen"!',
  },
};
