import { WordResult } from '../types';

/**
 * Expanded B1 Vocabulary
 * Sources:
 * - Langenscheidt Grundwortschatz Deutsch als Fremdsprache
 * - Goethe-Institut / telc Zertifikat B1 Wortliste (Intermediate Fluency)
 */
export const B1_EXPANDED: Record<string, WordResult> = {
  // --- AUSBILDUNG & BERUFSLEBEN ---
  bewerbung: {
    word: 'die Bewerbung',
    displayWord: 'die Bewerbung',
    ipa: '/bəˈvɛʁbʊŋ/',
    translations: ['surat lamaran kerja', 'pengajuan aplikasi kerja / kuliah'],
    meaningSummary: 'Pengajuan berkas resmi untuk mendapatkan posisi pekerjaan atau tempat kuliah.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Bewerbung',
        plural: 'die Bewerbungen',
        genitivSingular: 'der Bewerbung',
      },
    },
    synonyms: [
      { word: 'die Stellenbewerbung', article: 'die', wordClass: 'Nomen', translation: 'lamaran pekerjaan' },
      { word: 'das Gesuch', article: 'das', wordClass: 'Nomen', translation: 'permohonan tertulis' },
    ],
    antonyms: [
      { word: 'die Kündigung', article: 'die', wordClass: 'Nomen', translation: 'pengunduran diri / pemutusan kerja' },
      { word: 'die Ablehnung', article: 'die', wordClass: 'Nomen', translation: 'penolakan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ich habe gestern meine Bewerbung an die Firma geschickt.',
        indonesian: 'Kemarin saya mengirim surat lamaran saya ke perusahaan tersebut.',
        contextNote: 'Mencari pekerjaan di Jerman',
      },
      {
        level: 'B1',
        german: 'Eine gute Bewerbung enthält ein Anschreiben und einen tabellarischen Lebenslauf.',
        indonesian: 'Lamaran kerja yang baik memuat surat pengantar dan daftar riwayat hidup berformat tabel.',
        contextNote: 'Standar berkas lamaran Jerman',
      },
    ],
    learningTips: 'Kombinasi kata kerja B1: "sich bewerben um + Akkusativ" (melamar posisi kerja). Berkas lamaran di Jerman wajib menyertakan "Lebenslauf" (CV) dan "Zeugnisse" (ijazah/sertifikat).',
  },

  lebenslauf: {
    word: 'der Lebenslauf',
    displayWord: 'der Lebenslauf',
    ipa: '/ˈleːbn̩sˌlaʊ̯f/',
    translations: ['daftar riwayat hidup', 'curriculum vitae (CV)'],
    meaningSummary: 'Ringkasan tertulis mengenai riwayat pendidikan dan pengalaman kerja seseorang.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Lebenslauf',
        plural: 'die Lebensläufe',
        genitivSingular: 'des Lebenslaufes',
      },
    },
    synonyms: [
      { word: 'das Curriculum Vitae', article: 'das', wordClass: 'Nomen', translation: 'CV' },
      { word: 'die Vita', article: 'die', wordClass: 'Nomen', translation: 'biodata riwayat hidup' },
    ],
    antonyms: [
      { word: 'das Arbeitszeugnis', article: 'das', wordClass: 'Nomen', translation: 'surat referensi kerja' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Bitte aktualisieren Sie Ihren Lebenslauf vor dem Vorstellungsgespräch.',
        indonesian: 'Harap perbarui daftar riwayat hidup Anda sebelum wawancara kerja.',
        contextNote: 'Persiapan wawancara kerja',
      },
      {
        level: 'B1',
        german: 'Mein Lebenslauf ist chronologisch aufgebaut.',
        indonesian: 'CV saya disusun secara kronologis.',
        contextNote: 'Format dokumen',
      },
    ],
    learningTips: 'Kata majemuk: "Leben" (kehidupan) + "-s-" (Fugenelement) + "Lauf" (alur/perjalanan) = perjalanan alur hidup.',
  },

  gehalt: {
    word: 'das Gehalt',
    displayWord: 'das Gehalt',
    ipa: '/ɡəˈhalt/',
    translations: ['gaji bulanan', 'isi / kadar kandungan'],
    meaningSummary: 'Imbalan uang tetap bulanan bagi pegawai; atau kandungan zat dalam suatu bahan.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Gehalt',
        plural: 'die Gehälter',
        genitivSingular: 'des Gehaltes',
      },
    },
    synonyms: [
      { word: 'der Lohn', article: 'der', wordClass: 'Nomen', translation: 'upah (pekerja lapangan / per jam)' },
      { word: 'das Einkommen', article: 'das', wordClass: 'Nomen', translation: 'penghasilan total' },
      { word: 'die Vergütung', article: 'die', wordClass: 'Nomen', translation: 'imbalan finansial (formal)' },
    ],
    antonyms: [
      { word: 'der Abzug', article: 'der', wordClass: 'Nomen', translation: 'potongan pajak/gaji' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Das Gehalt wird immer am Ende des Monats auf das Bankkonto überwiesen.',
        indonesian: 'Gaji selalu ditransfer ke rekening bank pada akhir bulan.',
        contextNote: 'Sistem penggajian',
      },
      {
        level: 'B1',
        german: 'In der Verhandlung sprachen wir über meine Gehaltserwartungen.',
        indonesian: 'Dalam negosiasi kami berbicara mengenai ekspektasi gaji saya.',
        contextNote: 'Wawancara negosiasi gaji',
      },
    ],
    learningTips: 'Bedakan: "das Gehalt" (gaji bulanan staf/kantoran) vs "der Lohn" (upah jam-jaman/pekerja pabrik atau bangunan).',
  },

  vertrag: {
    word: 'der Vertrag',
    displayWord: 'der Vertrag',
    ipa: '/fɛɐ̯ˈtʁaːk/',
    translations: ['kontrak', 'perjanjian kerja / sewa'],
    meaningSummary: 'Kesepakatan mengikat secara hukum antara dua pihak atau lebih.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Vertrag',
        plural: 'die Verträge',
        genitivSingular: 'des Vertrages',
      },
    },
    synonyms: [
      { word: 'das Abkommen', article: 'das', wordClass: 'Nomen', translation: 'kesepakatan / pakta' },
      { word: 'die Vereinbarung', article: 'die', wordClass: 'Nomen', translation: 'persetujuan' },
    ],
    antonyms: [
      { word: 'der Vertragsbruch', article: 'der', wordClass: 'Nomen', translation: 'pelanggaran kontrak' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Bevor Sie den Vertrag unterschreiben, sollten Sie ihn genau durchlesen.',
        indonesian: 'Sebelum Anda menandatangani kontrak, Anda sebaiknya membacanya dengan teliti.',
        contextNote: 'Nasihat hukum penting di Jerman',
      },
      {
        level: 'B1',
        german: 'Ich habe einen unbefristeten Arbeitsvertrag bekommen.',
        indonesian: 'Saya mendapatkan kontrak kerja karyawan tetap (tanpa batas waktu).',
        contextNote: 'Status kerja ideal di Jerman',
      },
    ],
    learningTips: 'Kombinasi kata kerja B1: "einen Vertrag unterschreiben" (menandatangani kontrak), "einen Vertrag kündigen" (mengakhiri/memutus kontrak).',
  },

  kuendigung: {
    word: 'die Kündigung',
    displayWord: 'die Kündigung',
    ipa: '/ˈkʏndɪɡʊŋ/',
    translations: ['pemberitahuan pemutusan hubungan kerja', 'pembatalan kontrak langganan'],
    meaningSummary: 'Pemberitahuan tertulis resmi untuk mengakhiri kontrak kerja, sewa rumah, atau langganan.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Kündigung',
        plural: 'die Kündigungen',
        genitivSingular: 'der Kündigung',
      },
    },
    synonyms: [
      { word: 'die Entlassung', article: 'die', wordClass: 'Nomen', translation: 'pemecatan oleh perusahaan' },
      { word: 'der Rücktritt', article: 'der', wordClass: 'Nomen', translation: 'pengunduran diri' },
    ],
    antonyms: [
      { word: 'die Einstellung', article: 'die', wordClass: 'Nomen', translation: 'perekrutan pegawai' },
      { word: 'die Verlängerung', article: 'die', wordClass: 'Nomen', translation: 'perpanjangan kontrak' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Die Kündigungsfrist für meine Wohnung beträgt drei Monate.',
        indonesian: 'Masa tenggang pemberitahuan pindah (pembatalan sewa) apartemen saya adalah tiga bulan.',
        contextNote: 'Aturan sewa rumah di Jerman',
      },
      {
        level: 'B1',
        german: 'Er hat die Kündigung eingereicht, um sich beruflich zu verändern.',
        indonesian: 'Dia mengajukan pengunduran diri untuk mengubah arah kariernya.',
        contextNote: 'Resign mandiri',
      },
    ],
    learningTips: 'Kombinasi penting di Jerman: "die Kündigungsfrist" (jangka waktu tenggang sebelum kontrak benar-benar berhenti berlaku).',
  },

  // --- MEINUNG, GEFÜHLE & KOMMUNIKATION ---
  meinung: {
    word: 'die Meinung',
    displayWord: 'die Meinung',
    ipa: '/ˈmaɪ̯nʊŋ/',
    translations: ['pendapat', 'opini', 'pandangan'],
    meaningSummary: 'Sikap atau penilaian pribadi seseorang terhadap suatu hal.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Meinung',
        plural: 'die Meinungen',
        genitivSingular: 'der Meinung',
      },
    },
    synonyms: [
      { word: 'die Ansicht', article: 'die', wordClass: 'Nomen', translation: 'pandangan' },
      { word: 'der Standpunkt', article: 'der', wordClass: 'Nomen', translation: 'sudut pandang' },
    ],
    antonyms: [
      { word: 'die Tatsache', article: 'die', wordClass: 'Nomen', translation: 'fakta objektif' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Meiner Meinung nach sollten wir mehr für den Umweltschutz tun.',
        indonesian: 'Menurut pendapat saya, kita harus berbuat lebih banyak untuk perlindungan lingkungan.',
        contextNote: 'Frasa diskusi ujian B1 paling wajib!',
      },
      {
        level: 'B1',
        german: 'Was ist deine Meinung zu diesem Thema?',
        indonesian: 'Apa pendapatmu mengenai topik ini?',
        contextNote: 'Menanyakan pandangan lawan bicara',
      },
    ],
    learningTips: 'Frasa wajib lulus ujian B1 (Goethe/telc): "Meiner Meinung nach..." (Menurut pendapat saya...). Kata kerja sesudahnya langsung ditaruh di posisi II!',
  },

  vertrauen: {
    word: 'das Vertrauen',
    displayWord: 'das Vertrauen',
    ipa: '/fɛɐ̯ˈtʁaʊ̯ən/',
    translations: ['kepercayaan', 'rasa percaya'],
    meaningSummary: 'Keyakinan teguh pada kejujuran, kebaikan, atau keandalan orang lain.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Vertrauen',
        plural: '-',
        genitivSingular: 'des Vertrauens',
      },
    },
    synonyms: [
      { word: 'die Zuversicht', article: 'die', wordClass: 'Nomen', translation: 'keyakinan optimis' },
      { word: 'der Glaube', article: 'der', wordClass: 'Nomen', translation: 'kepercayaan / iman' },
    ],
    antonyms: [
      { word: 'das Misstrauen', article: 'das', wordClass: 'Nomen', translation: 'ketidakpercayaan / rasa curiga' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Vertrauen ist die wichtigste Grundlage für eine glückliche Beziehung.',
        indonesian: 'Kepercayaan adalah fondasi terpenting bagi hubungan yang bahagia.',
        contextNote: 'Filsafat hubungan',
      },
      {
        level: 'B1',
        german: 'Ich habe volles Vertrauen zu meinem Arzt.',
        indonesian: 'Saya menaruh kepercayaan penuh pada dokter saya.',
        contextNote: 'Frasa Vertrauen zu + Dativ haben',
      },
    ],
    learningTips: 'Preposisi: "Vertrauen zu jemandem haben" (menaruh percaya pada seseorang), atau kata kerjanya "jemandem vertrauen" (+ Dativ). Lawan katanya: "das Misstrauen".',
  },

  geduld: {
    word: 'die Geduld',
    displayWord: 'die Geduld',
    ipa: '/ɡəˈdʊlt/',
    translations: ['kesabaran'],
    meaningSummary: 'Kemampuan untuk menunggu dengan tenang tanpa mengeluh atau marah.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Geduld',
        plural: '-',
        genitivSingular: 'der Geduld',
      },
    },
    synonyms: [
      { word: 'die Ausdauer', article: 'die', wordClass: 'Nomen', translation: 'daya tahan ketekunan' },
      { word: 'die Langmut', article: 'die', wordClass: 'Nomen', translation: 'kesabaran lapang dada (sastra)' },
    ],
    antonyms: [
      { word: 'die Ungeduld', article: 'die', wordClass: 'Nomen', translation: 'ketidaksabaran' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Beim Deutschlernen braucht man viel Geduld.',
        indonesian: 'Saat belajar bahasa Jerman orang membutuhkan banyak kesabaran.',
        contextNote: 'Proses belajar bahasa',
      },
      {
        level: 'B1',
        german: 'Haben Sie bitte noch etwas Geduld, der Kollege kommt gleich.',
        indonesian: 'Mohon bersabar sedikit lagi, rekan saya segera datang.',
        contextNote: 'Ruang tunggu layanan',
      },
    ],
    learningTips: 'Frasa sehari-hari: "Geduld haben" (bersabar), "die Geduld verlieren" (kehilangan kesabaran). Kata sifatnya: "geduldig" vs "ungeduldig".',
  },

  mut: {
    word: 'der Mut',
    displayWord: 'der Mut',
    ipa: '/muːt/',
    translations: ['keberanian', 'nyali'],
    meaningSummary: 'Sikap mental pantang takut untuk menghadapi bahaya atau kesulitan.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Mut',
        plural: '-',
        genitivSingular: 'des Mutes',
      },
    },
    synonyms: [
      { word: 'die Tapferkeit', article: 'die', wordClass: 'Nomen', translation: 'kegagahan / ketabahan' },
      { word: 'die Zivilcourage', article: 'die', wordClass: 'Nomen', translation: 'keberanian moral sosial' },
    ],
    antonyms: [
      { word: 'die Feigheit', article: 'die', wordClass: 'Nomen', translation: 'kepengecutan' },
      { word: 'die Angst', article: 'die', wordClass: 'Nomen', translation: 'rasa takut' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Es erfordert viel Mut, in ein fremdes Land auszuwandern.',
        indonesian: 'Dibutuhkan banyak keberanian untuk beremigrasi ke negara asing.',
        contextNote: 'Tantangan hidup baru',
      },
      {
        level: 'B1',
        german: 'Nur Mut! Du schaffst die Prüfung ganz bestimmt!',
        indonesian: 'Jangan takut! Kamu pasti bisa lulus ujian itu!',
        contextNote: 'Ungkapan penyemangat (Nur Mut!)',
      },
    ],
    learningTips: 'Ungkapan penyemangat khas Jerman: "Nur Mut!" artinya "Jangan gentar! Maju terus!". Frasa: "jemandem Mut machen" (memberi semangat pada seseorang).',
  },

  // --- WICHTIGE B1 VERBEN ---
  vermuten: {
    word: 'vermuten',
    displayWord: 'vermuten',
    ipa: '/fɛɐ̯ˈmuːtn̩/',
    translations: ['menduga', 'mengira', 'memperkirakan'],
    meaningSummary: 'Menganggap sesuatu mungkin benar berdasarkan tanda-tanda yang ada tanpa kepastian mutlak.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'vermuten',
        praesens: 'vermutet',
        praeteritum: 'vermutete',
        partizip2: 'vermutet',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'annehmen', wordClass: 'Verb', translation: 'mengasumsikan' },
      { word: 'glauben', wordClass: 'Verb', translation: 'mengira' },
      { word: 'schätzen', wordClass: 'Verb', translation: 'menaksir' },
    ],
    antonyms: [
      { word: 'wissen', wordClass: 'Verb', translation: 'mengetahui pasti' },
      { word: 'beweisen', wordClass: 'Verb', translation: 'membuktikan secara sahih' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ich vermute, dass der Zug wegen des Schnees Verspätung hat.',
        indonesian: 'Saya menduga bahwa kereta itu terlambat karena salju.',
        contextNote: 'Perkiraan alasan peristiwa',
      },
      {
        level: 'B1',
        german: 'Die Polizei vermutet, dass der Täter geflohen ist.',
        indonesian: 'Polisi menduga bahwa pelakunya telah melarikan diri.',
        contextNote: 'Laporan berita',
      },
    ],
    learningTips: 'Sangat sering berpasangan dengan anak kalimat "dass": "Ich vermute, dass...". Bentuk kata bendanya adalah "die Vermutung" (dugaan).',
  },

  behaupten: {
    word: 'behaupten',
    displayWord: 'behaupten',
    ipa: '/bəˈhaʊ̯ptn̩/',
    translations: ['mengklaim', 'menegaskan / menyatakan sesuatu sebagai kebenaran'],
    meaningSummary: 'Menyatakan suatu hal sebagai fakta, seringkali tanpa bukti kuat.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'behaupten',
        praesens: 'behauptet',
        praeteritum: 'behauptete',
        partizip2: 'behauptet',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'versichern', wordClass: 'Verb', translation: 'menegaskan meyakinkan' },
      { word: 'erklären', wordClass: 'Verb', translation: 'menyatakan' },
    ],
    antonyms: [
      { word: 'widerrufen', wordClass: 'Verb', translation: 'mencabut pernyataan' },
      { word: 'abstreiten', wordClass: 'Verb', translation: 'menyangkal' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Er behauptet, dass er die Wahrheit sagt.',
        indonesian: 'Dia mengklaim bahwa dia mengatakan kebenaran.',
        contextNote: 'Pernyataan klaim',
      },
      {
        level: 'B1',
        german: 'Manche Leute behaupten, Sprachenlernen sei im Alter zu schwer.',
        indonesian: 'Beberapa orang mengklaim bahwa belajar bahasa di usia tua terlalu sulit.',
        contextNote: 'Konjunktiv I kutipan tidak langsung',
      },
    ],
    learningTips: 'Kata benda: "die Behauptung" (klaim/pernyataan). Menunjukkan skeptisisme pembicara terhadap pernyataan yang belum tentu benar.',
  },

  zustimmen: {
    word: 'zustimmen',
    displayWord: 'zustimmen',
    ipa: '/ˈtsuːˌʃtɪmən/',
    translations: ['setuju', 'sependapat (+ Dativ)'],
    meaningSummary: 'Menyetujui usulan atau pendapat seseorang.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'zustimmen',
        praesens: 'stimmt zu',
        praeteritum: 'stimmte zu',
        partizip2: 'zugestimmt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: true,
        prefix: 'zu',
      },
    },
    synonyms: [
      { word: 'einwilligen', wordClass: 'Verb', translation: 'mengiyakan' },
      { word: 'beipflichten', wordClass: 'Verb', translation: 'mengamini (formal)' },
    ],
    antonyms: [
      { word: 'ablehnen', wordClass: 'Verb', translation: 'menolak' },
      { word: 'widersprechen', wordClass: 'Verb', translation: 'membantah' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ich stimme dir voll und ganz zu.',
        indonesian: 'Saya setuju sepenuhnya denganmu.',
        contextNote: 'Diskusi persetujuan total (Objek Dativ dir)',
      },
      {
        level: 'B1',
        german: 'Der Chef hat dem Vorschlag zugestimmt.',
        indonesian: 'Atasan telah menyetujui usulan tersebut.',
        contextNote: 'Objek Dativ dem Vorschlag',
      },
    ],
    learningTips: 'Kunci tata bahasa: "zustimmen" selalu membutuhkan objek DATIV (Ich stimme DIR zu, BUKAN dich). Trennbares Verb: "stimmt ... zu".',
  },

  ablehnen: {
    word: 'ablehnen',
    displayWord: 'ablehnen',
    ipa: '/ˈapˌleːnən/',
    translations: ['menolak', 'menampik usulan'],
    meaningSummary: 'Menyatakan tidak bersedia menerima tawaran, permohonan, atau gagasan.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'ablehnen',
        praesens: 'lehnt ab',
        praeteritum: 'lehnte ab',
        partizip2: 'abgelehnt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: true,
        prefix: 'ab',
      },
    },
    synonyms: [
      { word: 'zurückweisen', wordClass: 'Verb', translation: 'menolak mentah-mentah' },
      { word: 'verwerfen', wordClass: 'Verb', translation: 'mengabaikan / menolak konsep' },
    ],
    antonyms: [
      { word: 'annehmen', wordClass: 'Verb', translation: 'menerima tawaran' },
      { word: 'akzeptieren', wordClass: 'Verb', translation: 'mengakseptasi / menerima' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Sie hat das Stellenangebot leider abgelehnt, weil das Gehalt zu niedrig war.',
        indonesian: 'Dia sayangnya menolak tawaran pekerjaan itu karena gajinya terlalu rendah.',
        contextNote: 'Keputusan karier',
      },
      {
        level: 'B1',
        german: 'Der Antrag wurde aus formalen Gründen abgelehnt.',
        indonesian: 'Permohonan tersebut ditolak karena alasan prosedural formal.',
        contextNote: 'Bentuk Pasif administratif',
      },
    ],
    learningTips: 'Trennbares Verb: "lehnt ... ab". Kata bendanya: "die Ablehnung" (penolakan). Memerlukan objek Akkusativ.',
  },

  unterstuetzen: {
    word: 'unterstützen',
    displayWord: 'unterstützen',
    ipa: '/ʊntɐˈʃtʏtsn̩/',
    translations: ['mendukung', 'memberi bantuan materiil / moral'],
    meaningSummary: 'Membantu seseorang atau memfasilitasi suatu proyek agar sukses.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'unterstützen',
        praesens: 'unterstützt',
        praeteritum: 'unterstützte',
        partizip2: 'unterstützt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'helfen', wordClass: 'Verb', translation: 'membantu' },
      { word: 'fördern', wordClass: 'Verb', translation: 'mengembangkan / mensponsori' },
      { word: 'beistehen', wordClass: 'Verb', translation: 'mendampingi di masa sulit' },
    ],
    antonyms: [
      { word: 'behindern', wordClass: 'Verb', translation: 'menghambat' },
      { word: 'sabotieren', wordClass: 'Verb', translation: 'menyabotase' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Meine Eltern unterstützen mich finanziell während meines Studiums.',
        indonesian: 'Orang tua saya mendukung saya secara finansial selama masa kuliah saya.',
        contextNote: 'Dukungan pendidikan',
      },
      {
        level: 'B1',
        german: 'Wir unterstützen dieses gemeinnützige Projekt von ganzem Herzen.',
        indonesian: 'Kami mendukung proyek nirlaba ini dengan sepenuh hati.',
        contextNote: 'Dukungan sosial',
      },
    ],
    learningTips: 'Hati-hati: "unterstützen" adalah kata kerja UNTRENNBAR (tidak terpisah). Partizip II adalah "unterstützt" (tanpa ge-). Objeknya AKKUSATIV (bukan Dativ seperti helfen!).',
  },

  vermeiden: {
    word: 'vermeiden',
    displayWord: 'vermeiden',
    ipa: '/fɛɐ̯ˈmaɪ̯dn̩/',
    translations: ['menghindari', 'mencegah agar tidak terjadi'],
    meaningSummary: 'Mengupayakan agar suatu hal yang tidak diinginkan tidak sampai terjadi.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'vermeiden',
        praesens: 'vermeidet',
        praeteritum: 'vermied',
        partizip2: 'vermieden',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'ausweichen', wordClass: 'Verb', translation: 'mengelak' },
      { word: 'umgehen', wordClass: 'Verb', translation: 'menghindari kendala' },
    ],
    antonyms: [
      { word: 'riskieren', wordClass: 'Verb', translation: 'mengambil risiko' },
      { word: 'provozieren', wordClass: 'Verb', translation: 'memicu sengaja' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Man sollte Fehler in der E-Mail durch Korrekturlesen vermeiden.',
        indonesian: 'Orang sebaiknya menghindari kesalahan dalam email melalui pemeriksaan ulang.',
        contextNote: 'Ketelitian kerja',
      },
      {
        level: 'B1',
        german: 'Er vermeidet es, über persönliche Probleme zu sprechen.',
        indonesian: 'Dia menghindari berbicara tentang masalah pribadi.',
        contextNote: 'Konstruksi zu + Infinitiv',
      },
    ],
    learningTips: 'Kata kerja tidak beraturan: vermeiden -> vermied -> vermieden. Kata bendanya: "die Vermeidung" (pencegahan).',
  },

  // --- ADJEKTIVE B1 ---
  notwendig: {
    word: 'notwendig',
    displayWord: 'notwendig',
    ipa: '/ˈnoːtvɛndɪç/',
    translations: ['mutlak diperlukan', 'penting tak terelakkan'],
    meaningSummary: 'Sangat dibutuhkan sehingga tidak bisa ditiadakan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'notwendig',
        komparativ: 'notwendiger',
        superlativ: 'am notwendigsten',
      },
    },
    synonyms: [
      { word: 'erforderlich', wordClass: 'Adjektiv', translation: 'disyaratkan' },
      { word: 'unentbehrlich', wordClass: 'Adjektiv', translation: 'sangat esensial' },
      { word: 'nötig', wordClass: 'Adjektiv', translation: 'perlu' },
    ],
    antonyms: [
      { word: 'überflüssig', wordClass: 'Adjektiv', translation: 'berlebihan / tidak perlu' },
      { word: 'unnötig', wordClass: 'Adjektiv', translation: 'tak berguna' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ein gültiger Reisepass ist für die Auslandsreise notwendig.',
        indonesian: 'Paspor yang masih berlaku mutlak diperlukan untuk perjalanan luar negeri.',
        contextNote: 'Persyaratan perjalanan',
      },
      {
        level: 'B1',
        german: 'Es ist notwendig, regelmäßig Vokabeln zu wiederholen.',
        indonesian: 'Sangat diperlukan untuk mengulang kosakata secara teratur.',
        contextNote: 'Kunci belajar efektif',
      },
    ],
    learningTips: 'Berasal dari kata "Not" (kesusahan) + "wenden" (membalikkan/menangkis) = sesuatu yang menangkis kesusahan sehingga mutlak dibutuhkan!',
  },

  unabhaengig: {
    word: 'unabhängig',
    displayWord: 'unabhängig',
    ipa: '/ˈʊnʔapˌhɛŋɪç/',
    translations: ['mandiri', 'independen', 'bebas terlepas (+ von)'],
    meaningSummary: 'Tidak dipengaruhi atau tidak bergantung pada pihak atau hal lain.',
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
      { word: 'selbstständig', wordClass: 'Adjektiv', translation: 'mandiri berdikari' },
      { word: 'autonom', wordClass: 'Adjektiv', translation: 'otonom' },
    ],
    antonyms: [
      { word: 'abhängig', wordClass: 'Adjektiv', translation: 'bergantung / kecanduan' },
      { word: 'unselbstständig', wordClass: 'Adjektiv', translation: 'tidak mandiri' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Viele junge Menschen möchten finanziell von ihren Eltern unabhängig sein.',
        indonesian: 'Banyak anak muda ingin mandiri secara finansial dari orang tua mereka.',
        contextNote: 'Kemandirian finansial (unabhängig von + Dativ)',
      },
      {
        level: 'B1',
        german: 'Das Gericht traf eine unabhängige Entscheidung.',
        indonesian: 'Pengadilan mengambil keputusan yang independen.',
        contextNote: 'Kebebasan hukum objektif',
      },
    ],
    learningTips: 'Preposisi wajib: "unabhängig von + Dativ" (terlepas dari / tidak bergantung pada).',
  },

  zuverlaessig: {
    word: 'zuverlässig',
    displayWord: 'zuverlässig',
    ipa: '/ˈtsuːfɛɐ̯ˌlɛsɪç/',
    translations: ['dapat diandalkan', 'amanah', 'akurat konsisten'],
    meaningSummary: 'Sifat seseorang atau mesin yang selalu memenuhi janji dan bisa dipercaya kualitasnya.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'zuverlässig',
        komparativ: 'zuverlässiger',
        superlativ: 'am zuverlässigsten',
      },
    },
    synonyms: [
      { word: 'verlässlich', wordClass: 'Adjektiv', translation: 'dapat dipercaya' },
      { word: 'solide', wordClass: 'Adjektiv', translation: 'kokoh mantap' },
    ],
    antonyms: [
      { word: 'unzuverlässig', wordClass: 'Adjektiv', translation: 'tidak dapat diandalkan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Er ist ein sehr zuverlässiger Mitarbeiter, der seine Aufgaben immer pünktlich erledigt.',
        indonesian: 'Dia adalah karyawan yang sangat dapat diandalkan, yang selalu menyelesaikan tugasnya tepat waktu.',
        contextNote: 'Pujian etos kerja Jerman',
      },
      {
        level: 'B1',
        german: 'Dieses alte Auto ist immer noch absolut zuverlässig.',
        indonesian: 'Mobil tua ini masih benar-benar dapat diandalkan.',
        contextNote: 'Keandalan mesin',
      },
    ],
    learningTips: 'Karakteristik kepribadian yang paling dihargai di lingkungan kerja Jerman: "Zuverlässigkeit" (keandalan).',
  },
};
