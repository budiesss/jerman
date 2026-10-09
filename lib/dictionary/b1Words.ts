import { WordResult } from '../types';

/**
 * Curated High-Frequency German Vocabulary - Level B1
 * Goethe-Institut & telc B1 Curriculum (Zertifikat Deutsch)
 */
export const B1_WORDS: Record<string, WordResult> = {
  gesellschaft: {
    word: 'die Gesellschaft',
    displayWord: 'die Gesellschaft',
    ipa: '/ɡəˈzɛlʃaft/',
    translations: ['masyarakat', 'perusahaan perseroan', 'pergaulan'],
    meaningSummary: 'Keseluruhan tatanan warga manusia yang hidup bersama dalam satu wadah pranata sosial atau badan hukum usaha.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Gesellschaft',
        plural: 'die Gesellschaften',
        genitivSingular: 'der Gesellschaft',
      },
    },
    synonyms: [
      { word: 'die Gemeinschaft', article: 'die', wordClass: 'Nomen', translation: 'komunitas rukun' },
      { word: 'die Bevölkerung', article: 'die', wordClass: 'Nomen', translation: 'populasi penduduk warga' },
      { word: 'das Unternehmen', article: 'das', wordClass: 'Nomen', translation: 'badan usaha komersial' },
    ],
    antonyms: [
      { word: 'das Individuum', article: 'das', wordClass: 'Nomen', translation: 'individu perorangan' },
      { word: 'die Einsamkeit', article: 'die', wordClass: 'Nomen', translation: 'kesendirian mengasingkan diri' },
      { word: 'die Isolation', article: 'die', wordClass: 'Nomen', translation: 'keterkucilan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'In einer demokratischen Gesellschaft hat jeder Bürger das Recht auf freie Meinungsäußerung.',
        indonesian: 'Dalam masyarakat yang demokratis, setiap warga negara memiliki hak kebebasan mengemukakan pendapat.',
        contextNote: 'Tatanan pranata sosial',
      },
      {
        level: 'B1',
        german: 'Er arbeitet bei einer bekannten Gesellschaft mit beschränkter Haftung (GmbH).',
        indonesian: 'Dia bekerja di sebuah perseroan terbatas (GmbH) yang terkenal.',
        contextNote: 'Bentuk badan hukum bisnis',
      },
    ],
    learningTips: 'Singkatan bisnis Jerman yang sangat tenar: "GmbH" berasal dari "Gesellschaft mit beschränkter Haftung" (Perseroan Terbatas / PT).',
  },

  wirtschaft: {
    word: 'die Wirtschaft',
    displayWord: 'die Wirtschaft',
    ipa: '/ˈvɪʁtʃaft/',
    translations: ['perekonomian', 'ekonomi', 'kedai bar tradisional'],
    meaningSummary: 'Keseluruhan sistem produksi, distribusi, konsumsi barang dan jasa dalam suatu kawasan negara.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Wirtschaft',
        plural: 'die Wirtschaften',
        genitivSingular: 'der Wirtschaft',
      },
    },
    synonyms: [
      { word: 'die Ökonomie', article: 'die', wordClass: 'Nomen', translation: 'ilmu dan sistem ekonomi' },
      { word: 'der Handel', article: 'der', wordClass: 'Nomen', translation: 'sektor perniagaan pasar' },
      { word: 'das Finanzwesen', article: 'das', wordClass: 'Nomen', translation: 'sektor keuangan negara' },
    ],
    antonyms: [
      { word: 'die Rezession', article: 'die', wordClass: 'Nomen', translation: 'resesi kelesuan ekonomi' },
      { word: 'der Stillstand', article: 'der', wordClass: 'Nomen', translation: 'stagnasi kemacetan total' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Die deutsche Wirtschaft ist stark exportorientiert.',
        indonesian: 'Perekonomian Jerman sangat berorientasi pada ekspor.',
        contextNote: 'Analisis ekonomi nasional',
      },
      {
        level: 'B1',
        german: 'Kleine und mittlere Unternehmen bilden das Rückgrat der Wirtschaft.',
        indonesian: 'Usaha kecil dan menengah (UKM) membentuk tulang punggung perekonomian.',
        contextNote: 'Peran sektor swasta',
      },
    ],
    learningTips: 'Kata sifat turunannya: "wirtschaftlich" (ekonomis / berkaitan dengan ekonomi). Kata majemuk tenar: "das Wirtschaftswachstum" (pertumbuhan ekonomi).',
  },

  verantwortung: {
    word: 'die Verantwortung',
    displayWord: 'die Verantwortung',
    ipa: '/fɛɐ̯ˈantvɔʁtʊŋ/',
    translations: ['tanggung jawab', 'akuntabilitas'],
    meaningSummary: 'Kewajiban moral atau hukum untuk menanggung konsekuensi atas tindakan atau keputusan yang diambil.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Verantwortung',
        plural: '-',
        genitivSingular: 'der Verantwortung',
      },
    },
    synonyms: [
      { word: 'die Zuständigkeit', article: 'die', wordClass: 'Nomen', translation: 'wewenang tanggung jawab' },
      { word: 'die Pflicht', article: 'die', wordClass: 'Nomen', translation: 'kewajiban amanat' },
      { word: 'die Rechenschaft', article: 'die', wordClass: 'Nomen', translation: 'pertanggungjawaban formal' },
    ],
    antonyms: [
      { word: 'die Verantwortungslosigkeit', article: 'die', wordClass: 'Nomen', translation: 'sikap tidak bertanggung jawab' },
      { word: 'die Fahrlässigkeit', article: 'die', wordClass: 'Nomen', translation: 'kelalaian sembrono' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Als Gruppenleiter trage ich die Verantwortung für das gesamte Projekt.',
        indonesian: 'Sebagai ketua tim, saya memikul tanggung jawab atas keseluruhan proyek.',
        contextNote: 'Kolokasi tetap: Verantwortung tragen',
      },
      {
        level: 'B1',
        german: 'Jeder Mensch muss die Verantwortung für sein eigenes Handeln übernehmen.',
        indonesian: 'Setiap manusia harus mengambil tanggung jawab atas tindakannya sendiri.',
        contextNote: 'Kolokasi tetap: Verantwortung übernehmen',
      },
    ],
    learningTips: 'Kolokasi B1 penting yang sering keluar di ujian Goethe B1: "Verantwortung übernehmen für + Akkusativ" (mengambil tanggung jawab atas) dan "Verantwortung tragen" (memikul tanggung jawab).',
  },

  entscheidung: {
    word: 'die Entscheidung',
    displayWord: 'die Entscheidung',
    ipa: '/ɛntˈʃaɪ̯dʊŋ/',
    translations: ['keputusan', 'resolusi ketetapan'],
    meaningSummary: 'Pilihan yang diambil setelah menimbang berbagai kemungkinan alternatif solusi.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Entscheidung',
        plural: 'die Entscheidungen',
        genitivSingular: 'der Entscheidung',
      },
    },
    synonyms: [
      { word: 'der Beschluss', article: 'der', wordClass: 'Nomen', translation: 'keputusan ketetapan rapat' },
      { word: 'das Urteil', article: 'das', wordClass: 'Nomen', translation: 'vonis putusan yudisial' },
      { word: 'der Entschluss', article: 'der', wordClass: 'Nomen', translation: 'tekad keputusan bulat' },
    ],
    antonyms: [
      { word: 'die Unentschlossenheit', article: 'die', wordClass: 'Nomen', translation: 'keragu-raguan tanpa keputusan' },
      { word: 'das Zögern', article: 'das', wordClass: 'Nomen', translation: 'sikap bimbang menunda-nunda' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Wir müssen bis morgen eine wichtige Entscheidung treffen.',
        indonesian: 'Kita harus mengambil sebuah keputusan penting paling lambat besok.',
        contextNote: 'Nomen-Verb-Verbindung: eine Entscheidung treffen',
      },
      {
        level: 'B1',
        german: 'Das war die beste Entscheidung meines Lebens.',
        indonesian: 'Itu adalah keputusan terbaik dalam hidup saya.',
        contextNote: 'Pilihan hidup',
      },
    ],
    learningTips: 'KOLOKASI EMAS B1 (Nomen-Verb-Verbindung): "eine Entscheidung treffen" (mengambil keputusan - BUKAN *eine Entscheidung machen!).',
  },

  zukunft: {
    word: 'die Zukunft',
    displayWord: 'die Zukunft',
    ipa: '/ˈt͡suːˌkʊnft/',
    translations: ['masa depan', 'hari esok yang akan datang'],
    meaningSummary: 'Kurun waktu yang belum terjadi dan akan berlangsung setelah masa sekarang.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Zukunft',
        plural: '-',
        genitivSingular: 'der Zukunft',
      },
    },
    synonyms: [
      { word: 'die Kommende', article: 'die', wordClass: 'Nomen', translation: 'masa yang akan datang' },
      { word: 'die Perspektive', article: 'die', wordClass: 'Nomen', translation: 'prospek masa depan cerah' },
    ],
    antonyms: [
      { word: 'die Vergangenheit', article: 'die', wordClass: 'Nomen', translation: 'masa lalu silam' },
      { word: 'die Gegenwart', article: 'die', wordClass: 'Nomen', translation: 'masa kini sekarang' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Erneuerbare Energien sind die Zukunft unserer Energieversorgung.',
        indonesian: 'Energi terbarukan adalah masa depan pasokan energi kita.',
        contextNote: 'Prospek teknologi',
      },
      {
        level: 'B1',
        german: 'In Zukunft möchte ich in einem internationalen Unternehmen arbeiten.',
        indonesian: 'Di masa mendatang saya ingin bekerja di perusahaan internasional.',
        contextNote: 'Frasa waktu: in Zukunft (ke depannya)',
      },
    ],
    learningTips: 'Frasa preposisi: "in Zukunft" (di masa depan / ke depannya). Kata sifatnya: "zukünftig" (di masa mendatang).',
  },

  unterschied: {
    word: 'der Unterschied',
    displayWord: 'der Unterschied',
    ipa: '/ˈʊntɐˌʃiːt/',
    translations: ['perbedaan', 'distingsi pembeda'],
    meaningSummary: 'Ciri atau sifat yang membuat dua hal atau lebih tidak identik satu sama lain.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Unterschied',
        plural: 'die Unterschiede',
        genitivSingular: 'des Unterschieds / des Unterschiedes',
      },
    },
    synonyms: [
      { word: 'die Differenz', article: 'die', wordClass: 'Nomen', translation: 'selisih perbedaan nilai' },
      { word: 'die Abweichung', article: 'die', wordClass: 'Nomen', translation: 'deviasi variasi' },
      { word: 'der Kontrast', article: 'der', wordClass: 'Nomen', translation: 'kontras tajam' },
    ],
    antonyms: [
      { word: 'die Ähnlichkeit', article: 'die', wordClass: 'Nomen', translation: 'kemiripan keserupaan' },
      { word: 'die Übereinstimmung', article: 'die', wordClass: 'Nomen', translation: 'kesesuaian identik' },
      { word: 'die Gleichheit', article: 'die', wordClass: 'Nomen', translation: 'kesamaan persis' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Was ist der Unterschied zwischen "kennen" und "wissen"?',
        indonesian: 'Apa perbedaan antara "kennen" dan "wissen"?',
        contextNote: 'Preposisi: Unterschied zwischen + Dativ',
      },
      {
        level: 'B1',
        german: 'Im Unterschied zu gestern ist es heute deutlich kühler.',
        indonesian: 'Berbeda dengan kemarin, hari ini jauh lebih sejuk.',
        contextNote: 'Frasa idiomatis: im Unterschied zu + Dativ',
      },
    ],
    learningTips: 'Kata sifat turunannya: "unterschiedlich" (berbeda-beda / bermacam-macam). Kata kerjanya: "unterscheiden" (membedakan).',
  },

  gelegenheit: {
    word: 'die Gelegenheit',
    displayWord: 'die Gelegenheit',
    ipa: '/ɡəˈleːɡn̩haɪ̯t/',
    translations: ['kesempatan', 'peluang', 'momen yang tepat'],
    meaningSummary: 'Keadaan atau waktu yang menguntungkan untuk mewujudkan suatu tujuan.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Gelegenheit',
        plural: 'die Gelegenheiten',
        genitivSingular: 'der Gelegenheit',
      },
    },
    synonyms: [
      { word: 'die Chance', article: 'die', wordClass: 'Nomen', translation: 'peluang kans emas' },
      { word: 'die Möglichkeit', article: 'die', wordClass: 'Nomen', translation: 'kemungkinan opsi' },
      { word: 'der Anlass', article: 'der', wordClass: 'Nomen', translation: 'ajang kesempatan momen' },
    ],
    antonyms: [
      { word: 'das Hindernis', article: 'das', wordClass: 'Nomen', translation: 'rintangan penghalang' },
      { word: 'die Unmöglichkeit', article: 'die', wordClass: 'Nomen', translation: 'ketidakmungkinan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ich nutze jede Gelegenheit, um mein Deutsch zu verbessern.',
        indonesian: 'Saya memanfaatkan setiap kesempatan untuk meningkatkan kemampuan bahasa Jerman saya.',
        contextNote: 'Kolokasi: eine Gelegenheit nutzen',
      },
      {
        level: 'B1',
        german: 'Bei dieser Gelegenheit möchte ich mich herzlich bei Ihnen bedanken.',
        indonesian: 'Pada kesempatan ini saya ingin mengucapkan terima kasih tulus kepada Anda.',
        contextNote: 'Frasa sopan pidato/surat B1',
      },
    ],
    learningTips: 'Kolokasi penting B1: "eine Gelegenheit nutzen" (memanfaatkan kesempatan) dan "bei Gelegenheit" (jika ada kesempatan luang).',
  },

  entscheiden: {
    word: 'entscheiden',
    displayWord: 'entscheiden',
    ipa: '/ɛntˈʃaɪ̯dn̩/',
    translations: ['memutuskan', 'menetapkan pilihan'],
    meaningSummary: 'Memilih satu opsi dari sekian alternatif setelah melalui proses pertimbangan akal.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'entscheiden',
        praesens: 'entscheidet',
        praeteritum: 'entschied',
        partizip2: 'entschieden',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: false,
        prefix: 'ent- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'beschließen', wordClass: 'Verb', translation: 'memutuskan dalam rapat musyawarah' },
      { word: 'festlegen', wordClass: 'Verb', translation: 'menetapkan bulat' },
      { word: 'wählen', wordClass: 'Verb', translation: 'memilih opsi' },
    ],
    antonyms: [
      { word: 'schwanken', wordClass: 'Verb', translation: 'ragu terombang-ambing' },
      { word: 'hinauszögern', wordClass: 'Verb', translation: 'mengulur-ulur keputusan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ich habe mich entschieden, ab Herbst in Heidelberg zu studieren.',
        indonesian: 'Saya telah memutuskan untuk berkuliah di Heidelberg mulai musim gugur.',
        contextNote: 'Bentuk refleksif: sich entscheiden für + Akkusativ',
      },
      {
        level: 'B1',
        german: 'Der Schiedsrichter entschied auf Elfmeter.',
        indonesian: 'Wasit memutuskan tendangan penalti.',
        contextNote: 'Keputusan dalam olahraga',
      },
    ],
    learningTips: 'Pola tak beraturan ei - ie - ie: entscheiden - entschied - entschieden. Bentuk refleksif: "sich entscheiden FÜR + Akkusativ" (memutuskan memilih sesuatu) atau "GEGEN + Akkusativ" (memutuskan menolak).',
  },

  entwickeln: {
    word: 'entwickeln',
    displayWord: 'entwickeln',
    ipa: '/ɛntˈvɪkln̩/',
    translations: ['mengembangkan', 'menciptakan produk baru', 'berkembang'],
    meaningSummary: 'Membimbing proses kemajuan bertahap atau merekayasa produk teknologi dari awal.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'entwickeln',
        praesens: 'entwickelt',
        praeteritum: 'entwickelte',
        partizip2: 'entwickelt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
        prefix: 'ent- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'ausbauen', wordClass: 'Verb', translation: 'memperluas pengembangan' },
      { word: 'fördern', wordClass: 'Verb', translation: 'memajukan mendukung potensi' },
      { word: 'kreieren', wordClass: 'Verb', translation: 'menciptakan kreasi' },
    ],
    antonyms: [
      { word: 'stagnieren', wordClass: 'Verb', translation: 'berhenti berkembang mandek' },
      { word: 'zurückfallen', wordClass: 'Verb', translation: 'merosot mundur' },
      { word: 'zerstören', wordClass: 'Verb', translation: 'menghancurkan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Das IT-Team entwickelt eine benutzerfreundliche App für Deutschlerner.',
        indonesian: 'Tim IT sedang mengembangkan aplikasi yang ramah pengguna untuk pembelajar bahasa Jerman.',
        contextNote: 'Pengembangan piranti lunak',
      },
      {
        level: 'B1',
        german: 'Die Stadt hat sich in den letzten zehn Jahren rasant entwickelt.',
        indonesian: 'Kota ini telah berkembang dengan sangat pesat dalam sepuluh tahun terakhir.',
        contextNote: 'Refleksif: sich entwickeln (berkembang)',
      },
    ],
    learningTips: 'Kata bendanya: "die Entwicklung" (perkembangan). Dalam dunia sains dan teknologi selalu digunakan untuk proses RnD.',
  },

  erreichen: {
    word: 'erreichen',
    displayWord: 'erreichen',
    ipa: '/ɛɐ̯ˈʁaɪ̯çn̩/',
    translations: ['mencapai', 'meraih target', 'menghubungi'],
    meaningSummary: 'Tiba di tempat tujuan, mewujudkan cita-cita capaian, atau berhasil menyambungkan kontak.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'erreichen',
        praesens: 'erreicht',
        praeteritum: 'erreichte',
        partizip2: 'erreicht',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
        prefix: 'er- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'erzielen', wordClass: 'Verb', translation: 'mencapai hasil gol' },
      { word: 'erlangen', wordClass: 'Verb', translation: 'memperoleh raihan' },
      { word: 'kontaktieren', wordClass: 'Verb', translation: 'menghubungi kontak' },
    ],
    antonyms: [
      { word: 'verfehlen', wordClass: 'Verb', translation: 'melenceng dari sasaran' },
      { word: 'verpassen', wordClass: 'Verb', translation: 'ketinggalan melewatkan' },
      { word: 'scheitern an', wordClass: 'Verb', translation: 'kandas gagal' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Durch fleißiges Üben hat sie ihr B1-Zertifikat erreicht.',
        indonesian: 'Melalui latihan yang tekun dia telah meraih sertifikat B1-nya.',
        contextNote: 'Pencapaian target belajar',
      },
      {
        level: 'B1',
        german: 'Unter welcher Telefonnummer kann ich Sie am besten erreichen?',
        indonesian: 'Di nomor telepon manakah saya bisa paling mudah menghubungi Anda?',
        contextNote: 'Komunikasi kantor / janji temu',
      },
    ],
    learningTips: 'Dua arti utama B1: 1) Meraih target ("Ziele erreichen"), 2) Menghubungi orang via telepon/email ("jemanden erreichen").',
  },

  vergleichen: {
    word: 'vergleichen',
    displayWord: 'vergleichen',
    ipa: '/fɛɐ̯ˈɡlaɪ̯çn̩/',
    translations: ['membandingkan', 'mengomparasikan'],
    meaningSummary: 'Menjajarkan dua hal atau lebih untuk memeriksa persamaan dan perbedaannya.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'vergleichen',
        praesens: 'vergleicht',
        praeteritum: 'verglich',
        partizip2: 'verglichen',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: false,
        prefix: 'ver- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'gegenüberstellen', wordClass: 'Verb', translation: 'menjajarkan berhadap-hadapan' },
      { word: 'abgleichen', wordClass: 'Verb', translation: 'mencocokkan komparasi' },
      { word: 'kontrastieren', wordClass: 'Verb', translation: 'mengontraskan' },
    ],
    antonyms: [
      { word: 'gleichsetzen', wordClass: 'Verb', translation: 'menyamaratakan keliru' },
      { word: 'isolieren', wordClass: 'Verb', translation: 'memisahkan tanpa pembanding' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Vor dem Kauf sollte man die Preise verschiedener Anbieter gründlich vergleichen.',
        indonesian: 'Sebelum membeli sebaiknya orang membandingkan harga dari berbagai penyedia secara saksama.',
        contextNote: 'Komparasi belanja',
      },
      {
        level: 'B1',
        german: 'Man kann das Leben auf dem Land nicht direkt mit dem Leben in der Großstadt vergleichen.',
        indonesian: 'Orang tidak bisa membandingkan secara langsung kehidupan di desa dengan kehidupan di kota metropolitan.',
        contextNote: 'Preposisi: vergleichen mit + Dativ',
      },
    ],
    learningTips: 'Preposisi tetap: "vergleichen mit + DATIV" (membandingkan dengan). Bentuk konjugasi tak beraturan: vergleichen - verglich - verglichen.',
  },

  ueberzeugen: {
    word: 'überzeugen',
    displayWord: 'überzeugen',
    ipa: '/yːbɐˈt͡sɔɪ̯ɡn̩/',
    translations: ['meyakinkan', 'membuat orang percaya'],
    meaningSummary: 'Menggunakan argumen logis dan bukti nyata sehingga orang lain menyetujui pendapat kita.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'überzeugen',
        praesens: 'überzeugt',
        praeteritum: 'überzeugte',
        partizip2: 'überzeugt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'bereden', wordClass: 'Verb', translation: 'membujuk persuasif' },
      { word: 'umstimmen', wordClass: 'Verb', translation: 'mengubah pendirian orang' },
    ],
    antonyms: [
      { word: 'verunsichern', wordClass: 'Verb', translation: 'membuat ragu dan gamang' },
      { word: 'enttäuschen', wordClass: 'Verb', translation: 'mengecewakan keyakinan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ihre klaren Argumente haben die Jury vollkommen überzeugt.',
        indonesian: 'Argumen-argumennya yang jelas telah meyakinkan dewan juri sepenuhnya.',
        contextNote: 'Kemenangan debat / presentasi',
      },
      {
        level: 'B1',
        german: 'Ich bin fest davon überzeugt, dass wir eine faire Lösung finden.',
        indonesian: 'Saya sangat yakin teguh bahwa kita akan menemukan solusi yang adil.',
        contextNote: 'Refleksif/keadaan: überzeugt sein von + Dativ',
      },
    ],
    learningTips: 'Preposisi penting: "überzeugen VON + Dativ" (meyakinkan tentang sesuatu). Kata bendanya: "die Überzeugung" (keyakinan teguh).',
  },

  vorschlagen: {
    word: 'vorschlagen',
    displayWord: 'vorschlagen',
    ipa: '/ˈfoːɐ̯ˌʃlaːɡn̩/',
    translations: ['mengusulkan', 'menyarankan'],
    meaningSummary: 'Mengajukan ide, gagasan, atau rencana untuk dipertimbangkan bersama.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'vorschlagen',
        praesens: 'schlägt vor (du schlägst vor, er schlägt vor - a->ä)',
        praeteritum: 'schlug vor',
        partizip2: 'vorgeschlagen',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: true,
        prefix: 'vor',
      },
    },
    synonyms: [
      { word: 'anregen', wordClass: 'Verb', translation: 'memberikan usulan gagasan' },
      { word: 'empfehlen', wordClass: 'Verb', translation: 'merekomendasikan' },
      { word: 'zur Diskussion stellen', wordClass: 'Verb', translation: 'mengajukan ke meja diskusi' },
    ],
    antonyms: [
      { word: 'ablehnen', wordClass: 'Verb', translation: 'menolak usulan' },
      { word: 'verwerfen', wordClass: 'Verb', translation: 'mengesampingkan ide' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ich schlage vor, dass wir uns morgen um 15 Uhr im Café treffen.',
        indonesian: 'Saya mengusulkan agar kita bertemu besok jam 3 sore di kafe.',
        contextNote: 'Usulan kegiatan dengan anak kalimat dass',
      },
      {
        level: 'B1',
        german: 'Welches Restaurant kannst du uns vorschlagen?',
        indonesian: 'Restoran mana yang bisa kamu sarankan kepada kami?',
        contextNote: 'Rekomendasi tempat',
      },
    ],
    learningTips: 'Kata bendanya: "der Vorschlag" (usulan). Sering dipakai dalam modul ujian berbicara (Sprechen B1: Gemeinsam etwas planen): "Ich schlage vor, dass...".',
  },

  verantwortlich: {
    word: 'verantwortlich',
    displayWord: 'verantwortlich',
    ipa: '/fɛɐ̯ˈantvɔʁtlɪç/',
    translations: ['bertanggung jawab', 'mengemban amanat'],
    meaningSummary: 'Memiliki kewajiban moral atau tugas dinas untuk memastikan keberhasilan dan menanggung konsekuensi.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'verantwortlich',
        komparativ: 'verantwortlicher',
        superlativ: 'am verantwortlichsten',
      },
    },
    synonyms: [
      { word: 'zuständig', wordClass: 'Adjektiv', translation: 'berwenang menangani' },
      { word: 'haftbar', wordClass: 'Adjektiv', translation: 'dapat dimintai ganti rugi hukum' },
      { word: 'pflichtbewusst', wordClass: 'Adjektiv', translation: 'sadar akan kewajiban' },
    ],
    antonyms: [
      { word: 'unverantwortlich', wordClass: 'Adjektiv', translation: 'tidak bertanggung jawab sama sekali' },
      { word: 'fahrlässig', wordClass: 'Adjektiv', translation: 'lalai teledor' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Wer ist für die Organisation der Konferenz verantwortlich?',
        indonesian: 'Siapa yang bertanggung jawab atas pengorganisasian konferensi tersebut?',
        contextNote: 'Preposisi tetap: verantwortlich für + Akkusativ',
      },
      {
        level: 'B1',
        german: 'Wir brauchen einen verantwortlichen Umgang mit natürlichen Ressourcen.',
        indonesian: 'Kita membutuhkan penanganan yang bertanggung jawab terhadap sumber daya alam.',
        contextNote: 'Penggunaan atributif',
      },
    ],
    learningTips: 'Preposisi wajib: "verantwortlich sein FÜR + Akkusativ" (bertanggung jawab atas).',
  },

  unabhaengig: {
    word: 'unabhängig',
    displayWord: 'unabhängig',
    ipa: '/ˈʊnʔapˌhɛŋɪç/',
    translations: ['mandiri', 'independen', 'bebas tanpa terikat'],
    meaningSummary: 'Bebas dari pengaruh, kekuasaan, atau ketergantungan pada pihak lain.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'unabhängig',
        komparativ: 'unabhängiger',
        superlativ: 'am unabhängigsten',
      },
    },
    synonyms: [
      { word: 'selbstständig', wordClass: 'Adjektiv', translation: 'mandiri berdiri sendiri' },
      { word: 'autonom', wordClass: 'Adjektiv', translation: 'otonom berswasembada' },
      { word: 'frei', wordClass: 'Adjektiv', translation: 'merdeka leluasa' },
    ],
    antonyms: [
      { word: 'abhängig', wordClass: 'Adjektiv', translation: 'tergantung bersandar pada' },
      { word: 'hörig', wordClass: 'Adjektiv', translation: 'tunduk buta' },
      { word: 'gebunden', wordClass: 'Adjektiv', translation: 'terikat komitmen' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Nach dem Studium möchte er finanziell unabhängig von seinen Eltern sein.',
        indonesian: 'Setelah lulus kuliah dia ingin mandiri secara finansial tanpa bergantung pada orang tuanya.',
        contextNote: 'Kemandirian finansial: unabhängig von + Dativ',
      },
      {
        level: 'B1',
        german: 'Die Gerichte in einer Demokratie müssen unabhängig arbeiten.',
        indonesian: 'Pengadilan dalam sistem demokrasi harus bekerja secara independen.',
        contextNote: 'Kemandirian yudikatif',
      },
    ],
    learningTips: 'Preposisi tetap: "unabhängig VON + Dativ" (independen dari / tanpa memandang). Frasa konjungtif: "unabhängig davon, ob..." (terlepas dari apakah...).',
  },

  erfolgreich: {
    word: 'erfolgreich',
    displayWord: 'erfolgreich',
    ipa: '/ɛɐ̯ˈfɔlkˌʁaɪ̯ç/',
    translations: ['sukses', 'berhasil', 'membawa hasil gemilang'],
    meaningSummary: 'Mencapai hasil positif yang memuaskan dan mencapai sasaran yang diharapkan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'erfolgreich',
        komparativ: 'erfolgreicher',
        superlativ: 'am erfolgreichsten',
      },
    },
    synonyms: [
      { word: 'siegreich', wordClass: 'Adjektiv', translation: 'menang jaya' },
      { word: 'wirksam', wordClass: 'Adjektiv', translation: 'berkhasiat manjur' },
      { word: 'produktiv', wordClass: 'Adjektiv', translation: 'produktif berbuah hasil' },
    ],
    antonyms: [
      { word: 'erfolglos', wordClass: 'Adjektiv', translation: 'gagal tanpa hasil' },
      { word: 'gescheitert', wordClass: 'Adjektiv', translation: 'kandas bangkrut' },
      { word: 'vergeblich', wordClass: 'Adjektiv', translation: 'sia-sia percuma' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Sie hat die B1-Prüfung sehr erfolgreich bestanden.',
        indonesian: 'Dia telah lulus ujian B1 dengan sangat sukses.',
        contextNote: 'Kelulusan ujian',
      },
      {
        level: 'B1',
        german: 'Das Unternehmen blickt auf ein erfolgreiches Geschäftsjahr zurück.',
        indonesian: 'Perusahaan tersebut menengok kembali tahun buku bisnis yang sukses.',
        contextNote: 'Kinerja komersial',
      },
    ],
    learningTips: 'Lawan kata langsung memakai sufiks -los: "erfolglos" (tanpa hasil / gagal). Kata bendanya: "der Erfolg" (kesuksesan).',
  },

  ehrlich: {
    word: 'ehrlich',
    displayWord: 'ehrlich',
    ipa: '/ˈeːɐ̯lɪç/',
    translations: ['jujur', 'tulus', 'terusterang'],
    meaningSummary: 'Menyatakan kebenaran tanpa kebohongan, manipulasi, atau maksud tersembunyi.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'ehrlich',
        komparativ: 'ehrlicher',
        superlativ: 'am ehrlichsten',
      },
    },
    synonyms: [
      { word: 'aufrichtig', wordClass: 'Adjektiv', translation: 'tulus ikhlas dari hati' },
      { word: 'wahrhaftig', wordClass: 'Adjektiv', translation: 'berpegang pada kebenaran' },
      { word: 'loyal', wordClass: 'Adjektiv', translation: 'setia setia' },
    ],
    antonyms: [
      { word: 'unehrlich', wordClass: 'Adjektiv', translation: 'tidak jujur curang' },
      { word: 'verlogen', wordClass: 'Adjektiv', translation: 'penuh kepalsuan dusta' },
      { word: 'hinterhältig', wordClass: 'Adjektiv', translation: 'licik menusuk dari belakang' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Um ehrlich zu sein, gefällt mir dieser Vorschlag überhaupt nicht.',
        indonesian: 'Sejujurnya, saya sama sekali tidak menyukai usulan ini.',
        contextNote: 'Frasa idiomatis: um ehrlich zu sein (sejujurnya)',
      },
      {
        level: 'B1',
        german: 'Ehrlichkeit ist das wichtigste Fundament einer guten Freundschaft.',
        indonesian: 'Kejujuran adalah pondasi paling penting dalam sebuah persahabatan yang baik.',
        contextNote: 'Nilai moral kejujuran',
      },
    ],
    learningTips: 'Frasa pembicaraan B1 yang amat sering digunakan: "Um ehrlich zu sein, ..." (Sejujurnya,...). Kata bendanya: "die Ehrlichkeit" (kejujuran).',
  },

  deutlich: {
    word: 'deutlich',
    displayWord: 'deutlich',
    ipa: '/ˈdɔɪ̯tlɪç/',
    translations: ['jelas', 'gamblang', 'mencolok nyata'],
    meaningSummary: 'Mudah dipahami, didengar, atau dilihat tanpa kekaburan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'deutlich',
        komparativ: 'deutlicher',
        superlativ: 'am deutlichsten',
      },
    },
    synonyms: [
      { word: 'klar', wordClass: 'Adjektiv', translation: 'terang benderang' },
      { word: 'verständlich', wordClass: 'Adjektiv', translation: 'mudah dimengerti' },
      { word: 'ausdrücklich', wordClass: 'Adjektiv', translation: 'eksplisit tegas' },
    ],
    antonyms: [
      { word: 'undeutlich', wordClass: 'Adjektiv', translation: 'samar-samar tidak jelas' },
      { word: 'vage', wordClass: 'Adjektiv', translation: 'mengambang kabur' },
      { word: 'unklar', wordClass: 'Adjektiv', translation: 'rancu gelap' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Sprechen Sie bitte etwas lauter und deutlicher!',
        indonesian: 'Tolong bicaralah sedikit lebih keras dan lebih jelas!',
        contextNote: 'Pengucapan lafal suara',
      },
      {
        level: 'B1',
        german: 'Die Ergebnisse zeigen einen deutlichen Unterschied zwischen beiden Gruppen.',
        indonesian: 'Hasil-hasil tersebut memperlihatkan perbedaan yang nyata antara kedua kelompok.',
        contextNote: 'Signifikansi data',
      },
    ],
    learningTips: 'Sering dipakai sebagai kata keterangan (Adverb) untuk penekanan: "deutlich besser" (jauh lebih baik secara nyata). Kata kerjanya: "verdeutlichen" (memperjelas).',
  },
};
