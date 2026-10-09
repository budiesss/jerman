import { WordResult } from '../types';

/**
 * Expanded A1 Vocabulary
 * Sources:
 * - PONS / Duden Bildwörterbuch Deutsch als Fremdsprache (Visual everyday items)
 * - Goethe-Institut Zertifikat A1 Wortliste (Offizielle Prüfungs-Wortliste)
 * - Langenscheidt Grundwortschatz Deutsch als Fremdsprache
 */
export const A1_EXPANDED: Record<string, WordResult> = {
  // --- ZEIT & TAGESABLAUF ---
  tag: {
    word: 'der Tag',
    displayWord: 'der Tag',
    ipa: '/taːk/',
    translations: ['hari', 'siang'],
    meaningSummary: 'Periode waktu 24 jam atau waktu dari matahari terbit hingga terbenam.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Tag',
        plural: 'die Tage',
        genitivSingular: 'des Tages / des Tags',
      },
    },
    synonyms: [
      { word: 'das Datum', article: 'das', wordClass: 'Nomen', translation: 'tanggal' },
      { word: 'der Werktag', article: 'der', wordClass: 'Nomen', translation: 'hari kerja' },
    ],
    antonyms: [
      { word: 'die Nacht', article: 'die', wordClass: 'Nomen', translation: 'malam hari' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Guten Tag, wie geht es Ihnen?',
        indonesian: 'Selamat siang, apa kabar Anda?',
        contextNote: 'Salam formal sehari-hari',
      },
      {
        level: 'A1',
        german: 'Ich arbeite jeden Tag von acht bis siebzehn Uhr.',
        indonesian: 'Saya bekerja setiap hari dari pukul delapan sampai tujuh belas.',
        contextNote: 'Keterangan waktu frekuensi',
      },
    ],
    learningTips: 'Kombinasi penting: "Guten Tag" (selamat siang), "jeden Tag" (setiap hari), "am Tag" (pada siang hari).',
  },

  nacht: {
    word: 'die Nacht',
    displayWord: 'die Nacht',
    ipa: '/naxt/',
    translations: ['malam', 'malam hari'],
    meaningSummary: 'Waktu gelap antara matahari terbenam dan terbit.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Nacht',
        plural: 'die Nächte',
        genitivSingular: 'der Nacht',
      },
    },
    synonyms: [
      { word: 'die Dunkelheit', article: 'die', wordClass: 'Nomen', translation: 'kegelapan' },
      { word: 'die Abenddämmerung', article: 'die', wordClass: 'Nomen', translation: 'senja' },
    ],
    antonyms: [
      { word: 'der Tag', article: 'der', wordClass: 'Nomen', translation: 'siang / hari' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Gute Nacht, schlaf gut!',
        indonesian: 'Selamat malam, tidur nyenyak ya!',
        contextNote: 'Ucapan sebelum tidur (informal)',
      },
      {
        level: 'A1',
        german: 'In der Nacht ist es hier sehr ruhig.',
        indonesian: 'Di malam hari di sini sangat tenang.',
        contextNote: 'Preposisi in + Dativ feminin (in der Nacht)',
      },
    ],
    learningTips: 'Pengecualian preposisi waktu: waktu lain pakai "am" (am Morgen, am Abend), tapi malam hari wajib "in der Nacht"!',
  },

  morgen_zeit: {
    word: 'der Morgen',
    displayWord: 'der Morgen',
    ipa: '/ˈmɔʁɡn̩/',
    translations: ['pagi', 'pagi hari'],
    meaningSummary: 'Bagian awal dari hari dari fajar hingga tengah hari.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Morgen',
        plural: 'die Morgen',
        genitivSingular: 'des Morgens',
      },
    },
    synonyms: [
      { word: 'der Vormittag', article: 'der', wordClass: 'Nomen', translation: 'pagi menjelang siang' },
      { word: 'der Frühling', article: 'der', wordClass: 'Nomen', translation: 'awal fajar' },
    ],
    antonyms: [
      { word: 'der Abend', article: 'der', wordClass: 'Nomen', translation: 'sore / malam' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Guten Morgen! Hast du gut geschlafen?',
        indonesian: 'Selamat pagi! Apakah kamu tidur nyenyak?',
        contextNote: 'Sapaan pagi hari',
      },
      {
        level: 'A1',
        german: 'Am Morgen trinke ich immer einen Kaffee.',
        indonesian: 'Pada pagi hari saya selalu minum kopi.',
        contextNote: 'Keterangan waktu (am Morgen)',
      },
    ],
    learningTips: 'Hati-hati: "der Morgen" (huruf kapital) = pagi hari. Sedangkan "morgen" (huruf kecil) = besok!',
  },

  abend: {
    word: 'der Abend',
    displayWord: 'der Abend',
    ipa: '/ˈaːbn̩t/',
    translations: ['sore', 'malam', 'petang'],
    meaningSummary: 'Waktu peralihan antara siang dan malam hari.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Abend',
        plural: 'die Abende',
        genitivSingular: 'des Abends',
      },
    },
    synonyms: [
      { word: 'der Feierabend', article: 'der', wordClass: 'Nomen', translation: 'waktu selesai kerja di sore hari' },
      { word: 'die Dämmerung', article: 'die', wordClass: 'Nomen', translation: 'senja' },
    ],
    antonyms: [
      { word: 'der Morgen', article: 'der', wordClass: 'Nomen', translation: 'pagi hari' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Guten Abend, meine Damen und Herren!',
        indonesian: 'Selamat malam, para hadirin sekalian!',
        contextNote: 'Salam pembuka formal malam hari',
      },
      {
        level: 'A1',
        german: 'Am Abend koche ich mit meiner Familie.',
        indonesian: 'Di sore/malam hari saya memasak bersama keluarga saya.',
        contextNote: 'Aktivitas rutin sore hari',
      },
    ],
    learningTips: 'Kombinasi penting: "am Abend" (di malam hari), "abends" (setiap malam / waktu malam).',
  },

  woche: {
    word: 'die Woche',
    displayWord: 'die Woche',
    ipa: '/ˈvɔxə/',
    translations: ['minggu', 'pekan'],
    meaningSummary: 'Jangka waktu tujuh hari berturut-turut dari Senin hingga Minggu.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Woche',
        plural: 'die Wochen',
        genitivSingular: 'der Woche',
      },
    },
    synonyms: [
      { word: 'das Wochenbett', article: 'das', wordClass: 'Nomen', translation: 'periode pekan' },
      { word: 'die Siebentagewoche', article: 'die', wordClass: 'Nomen', translation: 'pekan 7 hari' },
    ],
    antonyms: [
      { word: 'das Wochenende', article: 'das', wordClass: 'Nomen', translation: 'akhir pekan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Eine Woche hat sieben Tage.',
        indonesian: 'Satu minggu memiliki tujuh hari.',
        contextNote: 'Pernyataan fakta dasar',
      },
      {
        level: 'A1',
        german: 'Nächste Woche fahre ich nach Berlin.',
        indonesian: 'Minggu depan saya pergi ke Berlin.',
        contextNote: 'Keterangan waktu mendatang',
      },
    ],
    learningTips: 'Kombinasi waktu penting: "diese Woche" (minggu ini), "nächste Woche" (minggu depan), "letzte Woche" (minggu lalu).',
  },

  monat: {
    word: 'der Monat',
    displayWord: 'der Monat',
    ipa: '/ˈmoːnat/',
    translations: ['bulan'],
    meaningSummary: 'Satuan waktu kalender sekitar 30 hari atau seperdua belas tahun.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Monat',
        plural: 'die Monate',
        genitivSingular: 'des Monats',
      },
    },
    synonyms: [
      { word: 'der Kalendermonat', article: 'der', wordClass: 'Nomen', translation: 'bulan kalender' },
      { word: 'der Zeitraum', article: 'der', wordClass: 'Nomen', translation: 'rentang waktu' },
    ],
    antonyms: [
      { word: 'das Jahr', article: 'das', wordClass: 'Nomen', translation: 'tahun' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ein Jahr hat zwölf Monate.',
        indonesian: 'Satu tahun memiliki dua belas bulan.',
        contextNote: 'Struktur dasar angka kalender',
      },
      {
        level: 'A1',
        german: 'Im nächsten Monat beginne ich meinen Deutschkurs.',
        indonesian: 'Di bulan depan saya memulai kursus bahasa Jerman saya.',
        contextNote: 'Preposisi im (in + dem)',
      },
    ],
    learningTips: 'Preposisi untuk bulan selalu "im" (im Januar, im Februar, im nächsten Monat).',
  },

  jahr: {
    word: 'das Jahr',
    displayWord: 'das Jahr',
    ipa: '/jaːɐ̯/',
    translations: ['tahun'],
    meaningSummary: 'Jangka waktu 365 hari (atau 366 hari pada tahun kabisat).',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Jahr',
        plural: 'die Jahre',
        genitivSingular: 'des Jahres',
      },
    },
    synonyms: [
      { word: 'das Kalenderjahr', article: 'das', wordClass: 'Nomen', translation: 'tahun kalender' },
      { word: 'das Lebensjahr', article: 'das', wordClass: 'Nomen', translation: 'usia tahun' },
    ],
    antonyms: [
      { word: 'der Tag', article: 'der', wordClass: 'Nomen', translation: 'hari' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich bin 25 Jahre alt.',
        indonesian: 'Saya berusia 25 tahun.',
        contextNote: 'Menyatakan usia',
      },
      {
        level: 'A1',
        german: 'Frohes neues Jahr!',
        indonesian: 'Selamat tahun baru!',
        contextNote: 'Ucapan selamat tahun baru',
      },
    ],
    learningTips: 'Untuk usia: [Angka] + "Jahre alt". Jangan gunakan preposisi di depannya ("Ich bin 20 Jahre alt", bukan "Ich habe 20 Jahre").',
  },

  uhr: {
    word: 'die Uhr',
    displayWord: 'die Uhr',
    ipa: '/uːɐ̯/',
    translations: ['jam', 'arloji', 'pukul'],
    meaningSummary: 'Alat penunjuk waktu, atau kata penunjuk jam waktu (pukul).',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Uhr',
        plural: 'die Uhren',
        genitivSingular: 'der Uhr',
      },
    },
    synonyms: [
      { word: 'die Armbanduhr', article: 'die', wordClass: 'Nomen', translation: 'jam tangan' },
      { word: 'der Wecker', article: 'der', wordClass: 'Nomen', translation: 'jam beker / alarm' },
    ],
    antonyms: [
      { word: 'die Zeitlosigkeit', article: 'die', wordClass: 'Nomen', translation: 'keabadian / tanpa waktu' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Wie viel Uhr ist es? — Es ist drei Uhr.',
        indonesian: 'Jam berapa sekarang? — Sekarang pukul tiga.',
        contextNote: 'Pertanyaan waktu standar',
      },
      {
        level: 'A1',
        german: 'Der Zug fährt um acht Uhr ab.',
        indonesian: 'Kereta berangkat pada pukul delapan.',
        contextNote: 'Preposisi um + jam (um acht Uhr)',
      },
    ],
    learningTips: 'Bedakan: "die Uhr" (jam dinding/arloji, atau penunjuk waktu: pukul 3 = 3 Uhr), sedangkan durasi waktu = "die Stunde" (selama 3 jam = drei Stunden).',
  },

  stunde: {
    word: 'die Stunde',
    displayWord: 'die Stunde',
    ipa: '/ˈʃtʊndə/',
    translations: ['jam (durasi)', 'pelajaran / sesi kelas'],
    meaningSummary: 'Satuan durasi 60 menit atau satu sesi jam pelajaran.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Stunde',
        plural: 'die Stunden',
        genitivSingular: 'der Stunde',
      },
    },
    synonyms: [
      { word: 'die Unterrichtsstunde', article: 'die', wordClass: 'Nomen', translation: 'jam pelajaran' },
      { word: 'die Zeitspanne', article: 'die', wordClass: 'Nomen', translation: 'rentang waktu' },
    ],
    antonyms: [
      { word: 'die Minute', article: 'die', wordClass: 'Nomen', translation: 'menit' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich lerne jeden Tag zwei Stunden Deutsch.',
        indonesian: 'Saya belajar bahasa Jerman dua jam setiap hari.',
        contextNote: 'Durasi waktu (durasi)',
      },
      {
        level: 'A1',
        german: 'Die Fahrt dauert etwa eine Stunde.',
        indonesian: 'Perjalanannya memakan waktu sekitar satu jam.',
        contextNote: 'Durasi perjalanan',
      },
    ],
    learningTips: 'Kunci penting: "Wie viel Uhr?" (Pukul berapa?), tapi "Wie viele Stunden?" (Berapa jam lamanya?).',
  },

  // --- FAMILIE & BEZIEHUNGEN ---
  vater: {
    word: 'der Vater',
    displayWord: 'der Vater',
    ipa: '/ˈfaːtɐ/',
    translations: ['ayah', 'bapak'],
    meaningSummary: 'Orang tua laki-laki.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Vater',
        plural: 'die Väter',
        genitivSingular: 'des Vaters',
      },
    },
    synonyms: [
      { word: 'der Papa', article: 'der', wordClass: 'Nomen', translation: 'papa / ayah (akrab)' },
      { word: 'der Erzeuger', article: 'der', wordClass: 'Nomen', translation: 'ayah kandung (formal)' },
    ],
    antonyms: [
      { word: 'die Mutter', article: 'die', wordClass: 'Nomen', translation: 'ibu' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Mein Vater arbeitet als Ingenieur.',
        indonesian: 'Ayah saya bekerja sebagai insinyur.',
        contextNote: 'Profesi anggota keluarga',
      },
      {
        level: 'A1',
        german: 'Ich besuche meinen Vater am Wochenende.',
        indonesian: 'Saya mengunjungi ayah saya di akhir pekan.',
        contextNote: 'Objek Akkusativ maskulin (meinen Vater)',
      },
    ],
    learningTips: 'Perhatikan umlaut pada bentuk jamak: "der Vater" -> "die Väter". Bentuk kasualnya adalah "der Papa".',
  },

  mutter: {
    word: 'die Mutter',
    displayWord: 'die Mutter',
    ipa: '/ˈmʊtɐ/',
    translations: ['ibu', 'mama'],
    meaningSummary: 'Orang tua perempuan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Mutter',
        plural: 'die Mütter',
        genitivSingular: 'der Mutter',
      },
    },
    synonyms: [
      { word: 'die Mama', article: 'die', wordClass: 'Nomen', translation: 'mama / ibu (akrab)' },
      { word: 'die Mutti', article: 'die', wordClass: 'Nomen', translation: 'bunda / emak' },
    ],
    antonyms: [
      { word: 'der Vater', article: 'der', wordClass: 'Nomen', translation: 'ayah' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Meine Mutter kocht sehr gut.',
        indonesian: 'Ibu saya memasak dengan sangat lezat.',
        contextNote: 'Subjek kalimat sederhana',
      },
      {
        level: 'A1',
        german: 'Ich telefoniere oft mit meiner Mutter.',
        indonesian: 'Saya sering menelepon ibu saya.',
        contextNote: 'Preposisi mit + Dativ feminin (meiner Mutter)',
      },
    ],
    learningTips: 'Bentuk jamak berubah vokal u -> ü: "die Mutter" -> "die Mütter".',
  },

  eltern: {
    word: 'die Eltern',
    displayWord: 'die Eltern',
    ipa: '/ˈɛltɐn/',
    translations: ['orang tua', 'ibu bapak'],
    meaningSummary: 'Ayah dan ibu (selalu jamak / Pluralwort).',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'plural',
        singular: '-',
        plural: 'die Eltern',
        genitivSingular: 'der Eltern',
      },
    },
    synonyms: [
      { word: 'die Erziehungsberechtigten', article: 'die', wordClass: 'Nomen', translation: 'wali / orang tua sah (resmi)' },
    ],
    antonyms: [
      { word: 'die Kinder', article: 'die', wordClass: 'Nomen', translation: 'anak-anak' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Meine Eltern wohnen in Frankfurt.',
        indonesian: 'Orang tua saya tinggal di Frankfurt.',
        contextNote: 'Subjek jamak dengan kata kerja jamak (wohnen)',
      },
      {
        level: 'A1',
        german: 'Ich helfe meinen Eltern im Garten.',
        indonesian: 'Saya membantu orang tua saya di kebun.',
        contextNote: 'Objek Dativ jamak (meinen Eltern)',
      },
    ],
    learningTips: 'Kata "Eltern" tidak punya bentuk tunggal! Kata kerja selalu berkonjugasi bentuk jamak (pl.): "Meine Eltern sind nett."',
  },

  sohn: {
    word: 'der Sohn',
    displayWord: 'der Sohn',
    ipa: '/zoːn/',
    translations: ['anak laki-laki', 'putra'],
    meaningSummary: 'Keturunan langsung berjenis kelamin laki-laki.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Sohn',
        plural: 'die Söhne',
        genitivSingular: 'des Sohnes',
      },
    },
    synonyms: [
      { word: 'der Stammhalter', article: 'der', wordClass: 'Nomen', translation: 'anak lelaki penerus garis keluarga' },
    ],
    antonyms: [
      { word: 'die Tochter', article: 'die', wordClass: 'Nomen', translation: 'putri / anak perempuan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Mein Sohn geht schon in die Schule.',
        indonesian: 'Putra saya sudah masuk sekolah.',
        contextNote: 'Aktivitas anak',
      },
      {
        level: 'A1',
        german: 'Sie haben einen kleinen Sohn.',
        indonesian: 'Mereka memiliki seorang putra kecil.',
        contextNote: 'Objek Akkusativ maskulin (einen Sohn)',
      },
    ],
    learningTips: 'Bentuk jamak mendapat umlaut: "die Söhne".',
  },

  tochter: {
    word: 'die Tochter',
    displayWord: 'die Tochter',
    ipa: '/ˈtɔxtɐ/',
    translations: ['anak perempuan', 'putri'],
    meaningSummary: 'Keturunan langsung berjenis kelamin perempuan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Tochter',
        plural: 'die Töchter',
        genitivSingular: 'der Tochter',
      },
    },
    synonyms: [
      { word: 'das Mädchen', article: 'das', wordClass: 'Nomen', translation: 'gadis / anak perempuan' },
    ],
    antonyms: [
      { word: 'der Sohn', article: 'der', wordClass: 'Nomen', translation: 'anak laki-laki' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Unsere Tochter ist drei Jahre alt.',
        indonesian: 'Putri kami berusia tiga tahun.',
        contextNote: 'Usia keluarga',
      },
      {
        level: 'A1',
        german: 'Er holt seine Tochter vom Kindergarten ab.',
        indonesian: 'Dia menjemput putrinya dari taman kanak-kanak.',
        contextNote: 'Kata kerja terpisah abholen',
      },
    ],
    learningTips: 'Bentuk jamak: "die Töchter" (huruf o berubah menjadi ö).',
  },

  bruder: {
    word: 'der Bruder',
    displayWord: 'der Bruder',
    ipa: '/ˈbʁuːdɐ/',
    translations: ['saudara laki-laki', 'kakak/adik laki-laki'],
    meaningSummary: 'Saudara sekandung laki-laki.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Bruder',
        plural: 'die Brüder',
        genitivSingular: 'des Bruders',
      },
    },
    synonyms: [
      { word: 'das Geschwisterteil', article: 'das', wordClass: 'Nomen', translation: 'saudara kandung' },
    ],
    antonyms: [
      { word: 'die Schwester', article: 'die', wordClass: 'Nomen', translation: 'saudara perempuan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich habe einen älteren Bruder.',
        indonesian: 'Saya punya seorang kakak laki-laki.',
        contextNote: 'Menyatakan saudara kandung',
      },
      {
        level: 'A1',
        german: 'Mein Bruder studiert Medizin in München.',
        indonesian: 'Saudara laki-laki saya kuliah kedokteran di München.',
        contextNote: 'Aktivitas studi',
      },
    ],
    learningTips: 'Bentuk jamak: "die Brüder" (u -> ü). Dalam bahasa Jerman tidak ada kata khusus kakak/adik, cukup sebut "älterer Bruder" (kakak) atau "jüngerer Bruder" (adik).',
  },

  schwester: {
    word: 'die Schwester',
    displayWord: 'die Schwester',
    ipa: '/ˈʃvɛstɐ/',
    translations: ['saudara perempuan', 'kakak/adik perempuan', 'perawat'],
    meaningSummary: 'Saudara sekandung perempuan; juga dapat berarti perawat rumah sakit (Krankenschwester).',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Schwester',
        plural: 'die Schwestern',
        genitivSingular: 'der Schwester',
      },
    },
    synonyms: [
      { word: 'die Krankenschwester', article: 'die', wordClass: 'Nomen', translation: 'suster perawat' },
    ],
    antonyms: [
      { word: 'der Bruder', article: 'der', wordClass: 'Nomen', translation: 'saudara laki-laki' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Meine Schwester ist Lehrerin von Beruf.',
        indonesian: 'Saudara perempuan saya berprofesi sebagai guru.',
        contextNote: 'Menyatakan profesi saudara',
      },
      {
        level: 'A1',
        german: 'Ich habe zwei Schwestern.',
        indonesian: 'Saya memiliki dua saudara perempuan.',
        contextNote: 'Bentuk jamak die Schwestern',
      },
    ],
    learningTips: 'Bentuk jamak cukup ditambah -n: "die Schwestern".',
  },

  freund: {
    word: 'der Freund',
    displayWord: 'der Freund',
    ipa: '/fʁɔɪ̯nt/',
    translations: ['teman laki-laki', 'sahabat', 'pacar laki-laki'],
    meaningSummary: 'Orang yang memiliki hubungan persahabatan akrab, atau pasangan laki-laki.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Freund',
        plural: 'die Freunde',
        genitivSingular: 'des Freundes',
      },
    },
    synonyms: [
      { word: 'der Kumpel', article: 'der', wordClass: 'Nomen', translation: 'kawan / sob (bahasa santai)' },
      { word: 'der Kollege', article: 'der', wordClass: 'Nomen', translation: 'rekan' },
    ],
    antonyms: [
      { word: 'der Feind', article: 'der', wordClass: 'Nomen', translation: 'musuh' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das ist mein bester Freund Thomas.',
        indonesian: 'Ini adalah sahabat terbaik saya, Thomas.',
        contextNote: 'Memperkenalkan teman',
      },
      {
        level: 'A1',
        german: 'Wir treffen uns mit Freunden im Café.',
        indonesian: 'Kami bertemu dengan teman-teman di kafe.',
        contextNote: 'Dativ jamak mit Freunden',
      },
    ],
    learningTips: 'Nuansa penting Jerman: "ein Freund von mir" = salah satu teman saya. Tapi "mein Freund" sering diartikan pacar saya!',
  },

  // --- KÖRPER & GESUNDHEIT ---
  kopf: {
    word: 'der Kopf',
    displayWord: 'der Kopf',
    ipa: '/kɔpf/',
    translations: ['kepala'],
    meaningSummary: 'Bagian teratas dari tubuh manusia yang memuat otak, mata, hidung, dan mulut.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Kopf',
        plural: 'die Köpfe',
        genitivSingular: 'des Kopfes',
      },
    },
    synonyms: [
      { word: 'das Haupt', article: 'das', wordClass: 'Nomen', translation: 'kepala (sastra/formal)' },
    ],
    antonyms: [
      { word: 'der Fuß', article: 'der', wordClass: 'Nomen', translation: 'kaki' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Mein Kopf tut weh. Ich habe Kopfschmerzen.',
        indonesian: 'Kepala saya sakit. Saya sakit kepala.',
        contextNote: 'Keluhan kesehatan umum',
      },
      {
        level: 'A1',
        german: 'Er schüttelt den Kopf.',
        indonesian: 'Dia menggelengkan kepala.',
        contextNote: 'Gerakan tubuh',
      },
    ],
    learningTips: 'Bentuk frasa medis penting: "Kopfschmerzen" (sakit kepala), "Kopf hoch!" (tetap semangat!).',
  },

  hand: {
    word: 'die Hand',
    displayWord: 'die Hand',
    ipa: '/hant/',
    translations: ['tangan', 'telapak tangan'],
    meaningSummary: 'Bagian ujung lengan yang memiliki jari-jari untuk memegang.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Hand',
        plural: 'die Hände',
        genitivSingular: 'der Hand',
      },
    },
    synonyms: [
      { word: 'die Faust', article: 'die', wordClass: 'Nomen', translation: 'kepalan tangan' },
    ],
    antonyms: [
      { word: 'der Fuß', article: 'der', wordClass: 'Nomen', translation: 'kaki' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Bitte waschen Sie sich vor dem Essen die Hände.',
        indonesian: 'Silakan cuci tangan Anda sebelum makan.',
        contextNote: 'Instruksi kebersihan harian',
      },
      {
        level: 'A1',
        german: 'Er gibt mir die Hand zur Begrüßung.',
        indonesian: 'Dia menjabat tangan saya sebagai salam.',
        contextNote: 'Adat salam jabat tangan',
      },
    ],
    learningTips: 'Bentuk jamak: "die Hände" (a -> ä). Dalam bahasa Jerman "die Hand" hanya dari pergelangan ke jari, sedangkan seluruh lengan disebut "der Arm".',
  },

  auge: {
    word: 'das Auge',
    displayWord: 'das Auge',
    ipa: '/ˈaʊ̯ɡə/',
    translations: ['mata'],
    meaningSummary: 'Organ penglihatan pada manusia dan hewan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Auge',
        plural: 'die Augen',
        genitivSingular: 'des Auges',
      },
    },
    synonyms: [
      { word: 'das Sehorgan', article: 'das', wordClass: 'Nomen', translation: 'organ penglihatan' },
    ],
    antonyms: [
      { word: 'das Ohr', article: 'das', wordClass: 'Nomen', translation: 'telinga' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Sie hat schöne blaue Augen.',
        indonesian: 'Dia memiliki mata biru yang indah.',
        contextNote: 'Deskripsi fisik',
      },
      {
        level: 'A1',
        german: 'Meine Augen tun nach der Arbeit am Computer weh.',
        indonesian: 'Mata saya sakit setelah bekerja di depan komputer.',
        contextNote: 'Keluhan mata lelah',
      },
    ],
    learningTips: 'Bentuk jamak: "die Augen" (tambah -n). Kata turunan penting: "der Augenarzt" (dokter mata).',
  },

  ohr: {
    word: 'das Ohr',
    displayWord: 'das Ohr',
    ipa: '/oːɐ̯/',
    translations: ['telinga'],
    meaningSummary: 'Organ pendengaran dan keseimbangan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Ohr',
        plural: 'die Ohren',
        genitivSingular: 'des Ohres',
      },
    },
    synonyms: [
      { word: 'das Hörorgan', article: 'das', wordClass: 'Nomen', translation: 'organ pendengaran' },
    ],
    antonyms: [
      { word: 'das Auge', article: 'das', wordClass: 'Nomen', translation: 'mata' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Kind hat Ohrenschmerzen.',
        indonesian: 'Anak itu mengalami sakit telinga.',
        contextNote: 'Keluhan medis',
      },
      {
        level: 'A1',
        german: 'Ich bin ganz Ohr.',
        indonesian: 'Saya mendengarkan baik-baik / saya siap menyimak.',
        contextNote: 'Ungkapan percakapan sehari-hari',
      },
    ],
    learningTips: 'Bentuk jamak mendapat akhiran -en: "die Ohren".',
  },

  mund: {
    word: 'der Mund',
    displayWord: 'der Mund',
    ipa: '/mʊnt/',
    translations: ['mulut'],
    meaningSummary: 'Bagian wajah tempat masuknya makanan dan pembentukan suara bicara.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Mund',
        plural: 'die Münder',
        genitivSingular: 'des Mundes',
      },
    },
    synonyms: [
      { word: 'die Lippen', article: 'die', wordClass: 'Nomen', translation: 'bibir' },
    ],
    antonyms: [
      { word: 'die Nase', article: 'die', wordClass: 'Nomen', translation: 'hidung' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Bitte öffnen Sie den Mund beim Zahnarzt.',
        indonesian: 'Silakan buka mulut Anda saat di dokter gigi.',
        contextNote: 'Instruksi dokter',
      },
      {
        level: 'A1',
        german: 'Er hat ein Lächeln auf dem Mund.',
        indonesian: 'Dia tersenyum di bibirnya.',
        contextNote: 'Deskripsi ekspresi',
      },
    ],
    learningTips: 'Bentuk jamak: "die Münder" (u -> ü + er). Frasa umum: "Halt den Mund!" (Diamlah! - agak kasar).',
  },

  fuss: {
    word: 'der Fuß',
    displayWord: 'der Fuß',
    ipa: '/fuːs/',
    translations: ['kaki', 'telapak kaki'],
    meaningSummary: 'Bagian bawah tungkai yang digunakan untuk berdiri dan melangkah.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Fuß',
        plural: 'die Füße',
        genitivSingular: 'des Fußes',
      },
    },
    synonyms: [
      { word: 'die Sohle', article: 'die', wordClass: 'Nomen', translation: 'telapak kaki' },
    ],
    antonyms: [
      { word: 'die Hand', article: 'die', wordClass: 'Nomen', translation: 'tangan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich gehe jeden Morgen zu Fuß zur Schule.',
        indonesian: 'Saya jalan kaki setiap pagi ke sekolah.',
        contextNote: 'Frasa penting zu Fuß (jalan kaki)',
      },
      {
        level: 'A1',
        german: 'Mein rechter Fuß tut weh.',
        indonesian: 'Kaki kanan saya sakit.',
        contextNote: 'Keluhan fisik',
      },
    ],
    learningTips: 'Kombinasi wajib A1: "zu Fuß gehen" (berjalan kaki). Bedakan "der Fuß" (telapak/pergelangan kaki) dan "das Bein" (seluruh kaki/tungkai).',
  },

  // --- ESSEN & TRINKEN ---
  milch: {
    word: 'die Milch',
    displayWord: 'die Milch',
    ipa: '/mɪlç/',
    translations: ['susu'],
    meaningSummary: 'Cairan putih bergizi yang dihasilkan oleh mamalia (terutama sapi).',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Milch',
        plural: '-',
        genitivSingular: 'der Milch',
      },
    },
    synonyms: [
      { word: 'die Vollmilch', article: 'die', wordClass: 'Nomen', translation: 'susu murni' },
      { word: 'die Hafermilch', article: 'die', wordClass: 'Nomen', translation: 'susu oat' },
    ],
    antonyms: [
      { word: 'das Wasser', article: 'das', wordClass: 'Nomen', translation: 'air' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Trinken Sie Ihren Kaffee mit Milch und Zucker?',
        indonesian: 'Apakah Anda minum kopi dengan susu dan gula?',
        contextNote: 'Pertanyaan umum di kafe',
      },
      {
        level: 'A1',
        german: 'Wir brauchen noch eine Packung Milch aus dem Supermarkt.',
        indonesian: 'Kita masih butuh satu kotak susu dari supermarket.',
        contextNote: 'Daftar belanjaan',
      },
    ],
    learningTips: 'Kata benda zat/cairan seperti "Milch" biasanya tidak memiliki bentuk jamak jamak jamak.',
  },

  kaese: {
    word: 'der Käse',
    displayWord: 'der Käse',
    ipa: '/ˈkɛːzə/',
    translations: ['keju'],
    meaningSummary: 'Produk olahan susu yang dipadatkan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Käse',
        plural: 'die Käse',
        genitivSingular: 'des Käses',
      },
    },
    synonyms: [
      { word: 'der Schnittkäse', article: 'der', wordClass: 'Nomen', translation: 'keju iris' },
      { word: 'der Frischkäse', article: 'der', wordClass: 'Nomen', translation: 'keju segar oles' },
    ],
    antonyms: [
      { word: 'die Wurst', article: 'die', wordClass: 'Nomen', translation: 'sosis' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich esse zum Frühstück ein Brot mit Käse.',
        indonesian: 'Untuk sarapan saya makan roti dengan keju.',
        contextNote: 'Menu sarapan Jerman',
      },
      {
        level: 'A1',
        german: 'Dieser Käse schmeckt sehr würzig.',
        indonesian: 'Keju ini rasanya sangat gurih dan kaya rempah.',
        contextNote: 'Mendeskripsikan rasa',
      },
    ],
    learningTips: 'Artikelnya maskulin: "der Käse". Dalam bahasa gaul percakapan: "Das ist doch Käse!" artinya "Itu omong kosong!".',
  },

  fleisch: {
    word: 'das Fleisch',
    displayWord: 'das Fleisch',
    ipa: '/flaɪ̯ʃ/',
    translations: ['daging'],
    meaningSummary: 'Daging hewan yang diolah untuk konsumsi manusia.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Fleisch',
        plural: '-',
        genitivSingular: 'des Fleisches',
      },
    },
    synonyms: [
      { word: 'das Rindfleisch', article: 'das', wordClass: 'Nomen', translation: 'daging sapi' },
      { word: 'das Hähnchenfleisch', article: 'das', wordClass: 'Nomen', translation: 'daging ayam' },
    ],
    antonyms: [
      { word: 'das Gemüse', article: 'das', wordClass: 'Nomen', translation: 'sayuran' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich esse kein Fleisch, ich bin Vegetarier.',
        indonesian: 'Saya tidak makan daging, saya vegetarian.',
        contextNote: 'Pola makan di restoran',
      },
      {
        level: 'A1',
        german: 'Das Fleisch ist frisch und zart.',
        indonesian: 'Daging ini segar dan empuk.',
        contextNote: 'Kualitas makanan',
      },
    ],
    learningTips: 'Kombinasi penting di supermarket Jerman: "Rindfleisch" (sapi), "Geflügel" (unggas/ayam), "Schweinefleisch" (babi).',
  },

  fisch: {
    word: 'der Fisch',
    displayWord: 'der Fisch',
    ipa: '/fɪʃ/',
    translations: ['ikan'],
    meaningSummary: 'Hewan air bertulang belakang yang bernapas dengan insang; juga makanan berupa daging ikan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Fisch',
        plural: 'die Fische',
        genitivSingular: 'des Fisches',
      },
    },
    synonyms: [
      { word: 'das Meeresfrüchte-Gericht', article: 'das', wordClass: 'Nomen', translation: 'hidangan hasil laut' },
    ],
    antonyms: [
      { word: 'das Fleisch', article: 'das', wordClass: 'Nomen', translation: 'daging ternak' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Freitags essen viele Menschen in Deutschland Fisch.',
        indonesian: 'Pada hari Jumat banyak orang di Jerman makan ikan.',
        contextNote: 'Tradisi kuliner',
      },
      {
        level: 'A1',
        german: 'Der gebratene Fisch schmeckt hervorragend.',
        indonesian: 'Ikan goreng itu rasanya luar biasa lezat.',
        contextNote: 'Pujian rasa makanan',
      },
    ],
    learningTips: 'Artikel maskulin: "der Fisch", jamak "die Fische".',
  },

  gemuese: {
    word: 'das Gemüse',
    displayWord: 'das Gemüse',
    ipa: '/ɡəˈmyːzə/',
    translations: ['sayuran', 'sayur-mayur'],
    meaningSummary: 'Bagian tanaman yang dapat dimakan (akar, daun, batang, biji).',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Gemüse',
        plural: 'die Gemüse',
        genitivSingular: 'des Gemüses',
      },
    },
    synonyms: [
      { word: 'die Frischkost', article: 'die', wordClass: 'Nomen', translation: 'makanan segar / lalapan' },
    ],
    antonyms: [
      { word: 'das Fleisch', article: 'das', wordClass: 'Nomen', translation: 'daging' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Frisches Gemüse ist sehr gesund.',
        indonesian: 'Sayuran segar sangat menyehatkan.',
        contextNote: 'Pola hidup sehat',
      },
      {
        level: 'A1',
        german: 'Ich kaufe Tomaten und anderes Gemüse auf dem Markt.',
        indonesian: 'Saya membeli tomat dan sayuran lain di pasar.',
        contextNote: 'Belanja di pasar',
      },
    ],
    learningTips: 'Artikel neutrum: "das Gemüse". Kata kolektif yang hampir selalu dipakai dalam bentuk tunggal.',
  },

  obst: {
    word: 'das Obst',
    displayWord: 'das Obst',
    ipa: '/oːpst/',
    translations: ['buah-buahan', 'buah segar'],
    meaningSummary: 'Buah-buahan segar manis atau asam yang bisa langsung dimakan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Obst',
        plural: '-',
        genitivSingular: 'des Obstes',
      },
    },
    synonyms: [
      { word: 'die Früchte', article: 'die', wordClass: 'Nomen', translation: 'buah-buahan (jamak)' },
    ],
    antonyms: [
      { word: 'das Gemüse', article: 'das', wordClass: 'Nomen', translation: 'sayuran' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Äpfel, Bananen und Orangen sind Obst.',
        indonesian: 'Apel, pisang, dan jeruk adalah buah-buahan.',
        contextNote: 'Klasifikasi makanan',
      },
      {
        level: 'A1',
        german: 'Ich esse jeden Tag frisches Obst zum Nachtisch.',
        indonesian: 'Saya makan buah segar setiap hari untuk hidangan penutup.',
        contextNote: 'Kebiasaan makan',
      },
    ],
    learningTips: '"das Obst" adalah kata kolektif (Sammelname) dan TIDAK memiliki bentuk jamak. Untuk menyebut satuan buah tertentu gunakan "die Frucht" (jamak: die Früchte).',
  },

  // --- WOHNEN & GEGENSTÄNDE ---
  haus: {
    word: 'das Haus',
    displayWord: 'das Haus',
    ipa: '/haʊ̯s/',
    translations: ['rumah', 'gedung'],
    meaningSummary: 'Bangunan untuk tempat tinggal manusia atau gedung kegiatan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Haus',
        plural: 'die Häuser',
        genitivSingular: 'des Hauses',
      },
    },
    synonyms: [
      { word: 'das Gebäude', article: 'das', wordClass: 'Nomen', translation: 'gedung' },
      { word: 'das Heim', article: 'das', wordClass: 'Nomen', translation: 'kediaman' },
    ],
    antonyms: [
      { word: 'die Straße', article: 'die', wordClass: 'Nomen', translation: 'jalan luar' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich bin zu Hause.',
        indonesian: 'Saya sedang berada di rumah.',
        contextNote: 'Frasa posisi keberadaan (zu Hause)',
      },
      {
        level: 'A1',
        german: 'Ich gehe nach Hause.',
        indonesian: 'Saya pulang ke rumah.',
        contextNote: 'Frasa arah pergerakan (nach Hause)',
      },
    ],
    learningTips: 'Kunci mutlak bahasa Jerman A1: "zu Hause" = di rumah (diam di tempat), "nach Hause" = pulang ke rumah (bergerak menuju rumah).',
  },

  tisch: {
    word: 'der Tisch',
    displayWord: 'der Tisch',
    ipa: '/tɪʃ/',
    translations: ['meja'],
    meaningSummary: 'Perabot dengan bidang datar disangga kaki-kaki untuk meletakkan barang, makan, atau menulis.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Tisch',
        plural: 'die Tische',
        genitivSingular: 'des Tisches',
      },
    },
    synonyms: [
      { word: 'der Schreibtisch', article: 'der', wordClass: 'Nomen', translation: 'meja tulis' },
      { word: 'der Esstisch', article: 'der', wordClass: 'Nomen', translation: 'meja makan' },
    ],
    antonyms: [
      { word: 'der Stuhl', article: 'der', wordClass: 'Nomen', translation: 'kursi' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Einen Tisch für zwei Personen, bitte!',
        indonesian: 'Satu meja untuk dua orang, tolong!',
        contextNote: 'Memesan meja di restoran',
      },
      {
        level: 'A1',
        german: 'Die Tasse steht auf dem Tisch.',
        indonesian: 'Cangkir itu berada di atas meja.',
        contextNote: 'Posisi benda (auf + Dativ)',
      },
    ],
    learningTips: 'Artikel maskulin: "der Tisch". Frasa restoran: "einen Tisch reservieren" (memesan meja).',
  },

  bett: {
    word: 'das Bett',
    displayWord: 'das Bett',
    ipa: '/bɛt/',
    translations: ['tempat tidur', 'ranjang'],
    meaningSummary: 'Perabot untuk tidur atau beristirahat.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Bett',
        plural: 'die Betten',
        genitivSingular: 'des Bettes',
      },
    },
    synonyms: [
      { word: 'die Schlafstätte', article: 'die', wordClass: 'Nomen', translation: 'tempat perbaringan' },
    ],
    antonyms: [
      { word: 'der Arbeitsplatz', article: 'der', wordClass: 'Nomen', translation: 'tempat kerja' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich bin müde und gehe ins Bett.',
        indonesian: 'Saya lelah dan mau pergi tidur / ke ranjang.',
        contextNote: 'Frasa tidur (ins Bett gehen)',
      },
      {
        level: 'A1',
        german: 'Das Kind liegt noch im Bett.',
        indonesian: 'Anak itu masih berbaring di tempat tidur.',
        contextNote: 'Posisi diam (im Bett liegen)',
      },
    ],
    learningTips: 'Perhatikan preposisi: "ins Bett gehen" (pergerakan ke ranjang = Akkusativ in das Bett), "im Bett liegen" (diam di tempat tidur = Dativ in dem Bett).',
  },

  tuer: {
    word: 'die Tür',
    displayWord: 'die Tür',
    ipa: '/tyːɐ̯/',
    translations: ['pintu'],
    meaningSummary: 'Bidang penutup lubang masuk ruangan atau bangunan yang dapat dibuka-tutup.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Tür',
        plural: 'die Türen',
        genitivSingular: 'der Tür',
      },
    },
    synonyms: [
      { word: 'das Tor', article: 'das', wordClass: 'Nomen', translation: 'gerbang pintu besar' },
      { word: 'der Eingang', article: 'der', wordClass: 'Nomen', translation: 'pintu masuk' },
    ],
    antonyms: [
      { word: 'das Fenster', article: 'das', wordClass: 'Nomen', translation: 'jendela' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Bitte schließen Sie die Tür leise.',
        indonesian: 'Tolong tutup pintunya pelan-pelan.',
        contextNote: 'Instruksi sopan',
      },
      {
        level: 'A1',
        german: 'Jemand klopft an die Tür.',
        indonesian: 'Seseorang mengetuk pintu.',
        contextNote: 'Aktivitas mengetuk pintu',
      },
    ],
    learningTips: 'Kombinasi penting: "die Tür aufmachen / öffnen" (membuka pintu), "die Tür zumachen / schließen" (menutup pintu).',
  },

  fenster: {
    word: 'das Fenster',
    displayWord: 'das Fenster',
    ipa: '/ˈfɛnstɐ/',
    translations: ['jendela'],
    meaningSummary: 'Bukaan berbingkai dan berkaca pada dinding rumah untuk sirkulasi cahaya dan udara.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Fenster',
        plural: 'die Fenster',
        genitivSingular: 'des Fensters',
      },
    },
    synonyms: [
      { word: 'die Luke', article: 'die', wordClass: 'Nomen', translation: 'lubang jendela kecil' },
    ],
    antonyms: [
      { word: 'die Wand', article: 'die', wordClass: 'Nomen', translation: 'dinding / tembok' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Es ist warm hier, können wir das Fenster öffnen?',
        indonesian: 'Di sini hangat/gerah, bisakah kita membuka jendela?',
        contextNote: 'Permintaan izin sehari-hari',
      },
      {
        level: 'A1',
        german: 'Er schaut aus dem Fenster.',
        indonesian: 'Dia melihat keluar jendela.',
        contextNote: 'Preposisi aus + Dativ',
      },
    ],
    learningTips: 'Bentuk jamak tidak berubah: "das Fenster" -> "die Fenster".',
  },

  // --- WICHTIGE A1 VERBEN ---
  gehen: {
    word: 'gehen',
    displayWord: 'gehen',
    ipa: '/ˈɡeːən/',
    translations: ['pergi', 'berjalan', 'berlangsung / berjalan (keadaan)'],
    meaningSummary: 'Bergerak maju menggunakan kedua kaki; atau berfungsi/berjalan keadaannya.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'gehen',
        praesens: 'geht',
        praeteritum: 'ging',
        partizip2: 'gegangen',
        hilfsverb: 'sein',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'laufen', wordClass: 'Verb', translation: 'berlari / berjalan kaki' },
      { word: 'wandern', wordClass: 'Verb', translation: 'berjalan santai di alam' },
    ],
    antonyms: [
      { word: 'bleiben', wordClass: 'Verb', translation: 'tinggal / menetap' },
      { word: 'stehen', wordClass: 'Verb', translation: 'berdiri diam' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich gehe heute Abend ins Kino.',
        indonesian: 'Saya pergi ke bioskop nanti malam.',
        contextNote: 'Rencana aktivitas',
      },
      {
        level: 'A1',
        german: 'Wie geht es dir? — Es geht mir gut, danke!',
        indonesian: 'Apa kabarmu? — Kabarku baik, terima kasih!',
        contextNote: 'Pertanyaan kabar santai',
      },
    ],
    learningTips: 'Kata kerja perpindahan tempat, sehingga bentuk lampau (Perfekt) menggunakan hilfsverb "sein": "Ich bin gegangen" (BUKAN ich habe gegangen).',
  },

  kommen: {
    word: 'kommen',
    displayWord: 'kommen',
    ipa: '/ˈkɔmən/',
    translations: ['datang', 'berasal (kommen aus)'],
    meaningSummary: 'Tiba atau bergerak menuju tempat pembicara berada; berasal dari suatu daerah.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'kommen',
        praesens: 'kommt',
        praeteritum: 'kam',
        partizip2: 'gekommen',
        hilfsverb: 'sein',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'ankommen', wordClass: 'Verb', translation: 'tiba / sampai' },
      { word: 'erscheinen', wordClass: 'Verb', translation: 'hadir' },
    ],
    antonyms: [
      { word: 'gehen', wordClass: 'Verb', translation: 'pergi' },
      { word: 'wegfahren', wordClass: 'Verb', translation: 'berangkat pergi' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Woher kommen Sie? — Ich komme aus Indonesien.',
        indonesian: 'Dari mana asal Anda? — Saya berasal dari Indonesia.',
        contextNote: 'Asal kewarganegaraan',
      },
      {
        level: 'A1',
        german: 'Der Bus kommt um 14 Uhr.',
        indonesian: 'Busnya datang pukul 14.00.',
        contextNote: 'Kedatangan transportasi',
      },
    ],
    learningTips: 'Kombinasi wajib A1: "kommen aus" (+ negara/kota asal). Bentuk Perfekt menggunakan "sein": "Er ist gestern gekommen".',
  },

  machen: {
    word: 'machen',
    displayWord: 'machen',
    ipa: '/ˈmaxn̩/',
    translations: ['membuat', 'melakukan', 'mengerjakan'],
    meaningSummary: 'Melakukan suatu aktivitas, memproduksi benda, atau menghasilkan akibat.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'machen',
        praesens: 'macht',
        praeteritum: 'machte',
        partizip2: 'gemacht',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'tun', wordClass: 'Verb', translation: 'berbuat / melakukan' },
      { word: 'herstellen', wordClass: 'Verb', translation: 'memproduksi' },
    ],
    antonyms: [
      { word: 'lassen', wordClass: 'Verb', translation: 'membiarkan / tidak berbuat' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Was machst du am Wochenende?',
        indonesian: 'Apa yang kamu lakukan di akhir pekan?',
        contextNote: 'Menanyakan rencana',
      },
      {
        level: 'A1',
        german: 'Das macht fünf Euro, bitte.',
        indonesian: 'Semuanya jadi lima euro, silakan.',
        contextNote: 'Total biaya belanja',
      },
    ],
    learningTips: 'Kata kerja serbaguna: "Hausaufgaben machen" (bikin PR), "Foto machen" (ambil foto), "Pause machen" (istirahat).',
  },

  haben: {
    word: 'haben',
    displayWord: 'haben',
    ipa: '/ˈhaːbn̩/',
    translations: ['mempunyai', 'memiliki', 'ada (telah)'],
    meaningSummary: 'Memiliki sesuatu sebagai milik; juga berfungsi sebagai kata kerja bantu pembentuk masa lampau (Perfekt).',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'haben',
        praesens: 'hat',
        praeteritum: 'hatte',
        partizip2: 'gehabt',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'besitzen', wordClass: 'Verb', translation: 'memiliki hak milik' },
      { word: 'verfügen über', wordClass: 'Verb', translation: 'mempunyai fasilitas' },
    ],
    antonyms: [
      { word: 'fehlen', wordClass: 'Verb', translation: 'kurang / tidak punya' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich habe eine Frage.',
        indonesian: 'Saya punya satu pertanyaan.',
        contextNote: 'Objek Akkusativ feminin (eine Frage)',
      },
      {
        level: 'A1',
        german: 'Hast du Zeit?',
        indonesian: 'Apakah kamu punya waktu / sempat?',
        contextNote: 'Ajakan santai',
      },
    ],
    learningTips: 'Konjugasi Präsens tak beraturan: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie haben. Selalu membutuhkan objek Akkusativ!',
  },

  sein: {
    word: 'sein',
    displayWord: 'sein',
    ipa: '/zaɪ̯n/',
    translations: ['adalah', 'berada', 'ada'],
    meaningSummary: 'Kata kerja penghubung penanda eksistensi atau identitas; juga kata kerja bantu Perfekt.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'sein',
        praesens: 'ist',
        praeteritum: 'war',
        partizip2: 'gewesen',
        hilfsverb: 'sein',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'existieren', wordClass: 'Verb', translation: 'eksis / wujud' },
      { word: 'sich befinden', wordClass: 'Verb', translation: 'berada di suatu lokasi' },
    ],
    antonyms: [
      { word: 'vergehen', wordClass: 'Verb', translation: 'lenyap / berlalu' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich bin Student und wohne in Berlin.',
        indonesian: 'Saya mahasiswa dan tinggal di Berlin.',
        contextNote: 'Identitas diri',
      },
      {
        level: 'A1',
        german: 'Das Wetter ist heute sehr schön.',
        indonesian: 'Cuaca hari ini sangat cerah/indah.',
        contextNote: 'Predikat adjektiva',
      },
    ],
    learningTips: 'Kata kerja paling penting dalam bahasa Jerman. Konjugasi Präsens: ich bin, du bist, er ist, wir sind, ihr seid, sie/Sie sind. Selalu berpasangan dengan kasus Nominativ (tidak ada objek Akkusativ!).',
  },

  kaufen: {
    word: 'kaufen',
    displayWord: 'kaufen',
    ipa: '/ˈkaʊ̯fn̩/',
    translations: ['membeli'],
    meaningSummary: 'Memperoleh barang atau jasa dengan membayarkan sejumlah uang.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'kaufen',
        praesens: 'kauft',
        praeteritum: 'kaufte',
        partizip2: 'gekauft',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'erwerben', wordClass: 'Verb', translation: 'memperoleh (formal)' },
      { word: 'einkaufen', wordClass: 'Verb', translation: 'berbelanja kebutuhan' },
    ],
    antonyms: [
      { word: 'verkaufen', wordClass: 'Verb', translation: 'menjual' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich kaufe im Supermarkt Brot und Käse.',
        indonesian: 'Saya membeli roti dan keju di supermarket.',
        contextNote: 'Aktivitas belanja',
      },
      {
        level: 'A1',
        german: 'Er möchte ein neues Auto kaufen.',
        indonesian: 'Dia ingin membeli mobil baru.',
        contextNote: 'Modalverb möchte + Infinitiv',
      },
    ],
    learningTips: 'Bedakan: "kaufen" (membeli suatu barang spesifik) vs "einkaufen" (kegiatan berbelanja belanjaan sehari-hari).',
  },

  fahren: {
    word: 'fahren',
    displayWord: 'fahren',
    ipa: '/ˈfaːʁən/',
    translations: ['mengemudi', 'naik kendaraan', 'bepergian dengan roda'],
    meaningSummary: 'Bergerak atau bepergian menggunakan kendaraan darat (mobil, kereta, sepeda, bus).',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'fahren',
        praesens: 'fährt',
        praeteritum: 'fuhr',
        partizip2: 'gefahren',
        hilfsverb: 'sein',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'reisen', wordClass: 'Verb', translation: 'bepergian' },
      { word: 'steuern', wordClass: 'Verb', translation: 'mengendalikan setir' },
    ],
    antonyms: [
      { word: 'halten', wordClass: 'Verb', translation: 'berhenti' },
      { word: 'stehen', wordClass: 'Verb', translation: 'diam' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich fahre mit dem Zug zur Arbeit.',
        indonesian: 'Saya naik kereta pergi ke tempat kerja.',
        contextNote: 'Moda transportasi (mit + Dativ)',
      },
      {
        level: 'A1',
        german: 'Fährst du am Wochenende nach Hamburg?',
        indonesian: 'Apakah kamu pergi ke Hamburg di akhir pekan?',
        contextNote: 'Vokalwechsel du fährst',
      },
    ],
    learningTips: 'Mengalami perubahan vokal (Vokalwechsel) pada "du fährst" dan "er fährt". Selalu menggunakan hilfsverb "sein" untuk perjalanan: "Ich bin gefahren".',
  },

  schlafen: {
    word: 'schlafen',
    displayWord: 'schlafen',
    ipa: '/ˈʃlaːfn̩/',
    translations: ['tidur'],
    meaningSummary: 'Beristirahat dalam keadaan tidak sadar untuk memulihkan energi fisik dan mental.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'schlafen',
        praesens: 'schläft',
        praeteritum: 'schlief',
        partizip2: 'geschlafen',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'ruhen', wordClass: 'Verb', translation: 'beristirahat' },
      { word: 'schlummern', wordClass: 'Verb', translation: 'terlelap' },
    ],
    antonyms: [
      { word: 'wachen', wordClass: 'Verb', translation: 'terjaga / melek' },
      { word: 'aufwachen', wordClass: 'Verb', translation: 'bangun tidur' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich schlafe meistens acht Stunden pro Nacht.',
        indonesian: 'Saya biasanya tidur delapan jam per malam.',
        contextNote: 'Pola tidur sehat',
      },
      {
        level: 'A1',
        german: 'Das Baby schläft tief und fest.',
        indonesian: 'Bayi itu tidur dengan nyenyak sekali.',
        contextNote: 'Keadaan tidur',
      },
    ],
    learningTips: 'Vokalwechsel di Präsens: "du schläfst", "er/sie/es schläft". Meskipun tidur adalah keadaan pasif, bentuk Perfekt-nya tetap memakai "haben": "Ich habe geschlafen".',
  },

  // --- ADJEKTIVE A1 ---
  gross: {
    word: 'groß',
    displayWord: 'groß',
    ipa: '/ɡʁoːs/',
    translations: ['besar', 'tinggi (tubuh)'],
    meaningSummary: 'Memiliki ukuran dimensi atau postur fisik di atas rata-rata.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'groß',
        komparativ: 'größer',
        superlativ: 'am größten',
      },
    },
    synonyms: [
      { word: 'riesig', wordClass: 'Adjektiv', translation: 'raksasa / sangat besar' },
      { word: 'geräumig', wordClass: 'Adjektiv', translation: 'lapang / luas' },
    ],
    antonyms: [
      { word: 'klein', wordClass: 'Adjektiv', translation: 'kecil / pendek' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Berlin ist eine sehr große Stadt.',
        indonesian: 'Berlin adalah kota yang sangat besar.',
        contextNote: 'Ukuran geografis kota',
      },
      {
        level: 'A1',
        german: 'Mein Bruder ist 1,90 Meter groß.',
        indonesian: 'Saudara laki-laki saya tingginya 1,90 meter.',
        contextNote: 'Tinggi badan manusia',
      },
    ],
    learningTips: 'Komparatif mendapat umlaut: "groß" -> "größer" -> "am größten". Digunakan untuk ukuran benda maupun tinggi badan orang.',
  },

  klein: {
    word: 'klein',
    displayWord: 'klein',
    ipa: '/klaɪ̯n/',
    translations: ['kecil', 'pendek (badan)'],
    meaningSummary: 'Memiliki dimensi atau ukuran fisik yang relatif sedikit.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'klein',
        komparativ: 'kleiner',
        superlativ: 'am kleinsten',
      },
    },
    synonyms: [
      { word: 'winzig', wordClass: 'Adjektiv', translation: 'mungil / sangat kecil' },
      { word: 'gering', wordClass: 'Adjektiv', translation: 'sedikit / minim' },
    ],
    antonyms: [
      { word: 'groß', wordClass: 'Adjektiv', translation: 'besar' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Die Wohnung ist gemütlich, aber ein bisschen klein.',
        indonesian: 'Apartemennya nyaman, tapi agak kecil.',
        contextNote: 'Deskripsi tempat tinggal',
      },
      {
        level: 'A1',
        german: 'Als ich klein war, lebte ich auf dem Land.',
        indonesian: 'Ketika saya masih kecil, saya tinggal di desa.',
        contextNote: 'Masa kanak-kanak',
      },
    ],
    learningTips: 'Bentuk teratur: "klein" -> "kleiner" -> "am kleinsten".',
  },

  teuer: {
    word: 'teuer',
    displayWord: 'teuer',
    ipa: '/ˈtɔɪ̯ɐ/',
    translations: ['mahal'],
    meaningSummary: 'Membutuhkan biaya atau pengeluaran uang yang banyak.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'teuer',
        komparativ: 'teurer',
        superlativ: 'am teuersten',
      },
    },
    synonyms: [
      { word: 'kostspielig', wordClass: 'Adjektiv', translation: 'berbiaya tinggi' },
      { word: 'hochpreisig', wordClass: 'Adjektiv', translation: 'berharga mahal' },
    ],
    antonyms: [
      { word: 'billig', wordClass: 'Adjektiv', translation: 'murah' },
      { word: 'günstig', wordClass: 'Adjektiv', translation: 'terjangkau / hemat' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Hotelzimmer ist mir zu teuer.',
        indonesian: 'Kamar hotel itu terlalu mahal bagi saya.',
        contextNote: 'Penilaian harga',
      },
      {
        level: 'A1',
        german: 'Mieten in München sind sehr teuer.',
        indonesian: 'Harga sewa rumah di München sangat mahal.',
        contextNote: 'Kondisi biaya hidup',
      },
    ],
    learningTips: 'Perhatikan saat komparatif huruf "e" di tengah hilang: "teuer" -> "teurer" (bukan teuerer!).',
  },

  billig: {
    word: 'billig',
    displayWord: 'billig',
    ipa: '/ˈbɪlɪç/',
    translations: ['murah', 'berkualitas rendah'],
    meaningSummary: 'Berharga rendah; terkadang memiliki konotasi kualitas yang murahan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'billig',
        komparativ: 'billiger',
        superlativ: 'am billigsten',
      },
    },
    synonyms: [
      { word: 'preiswert', wordClass: 'Adjektiv', translation: 'sepadan dengan harga' },
      { word: 'günstig', wordClass: 'Adjektiv', translation: 'terjangkau' },
    ],
    antonyms: [
      { word: 'teuer', wordClass: 'Adjektiv', translation: 'mahal' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Auf dem Flohmarkt kann man billige Bücher finden.',
        indonesian: 'Di pasar loak orang bisa menemukan buku-buku murah.',
        contextNote: 'Belanja barang bekas',
      },
      {
        level: 'A1',
        german: 'Dieses Ticket ist sehr billig.',
        indonesian: 'Tiket ini sangat murah.',
        contextNote: 'Harga tiket',
      },
    ],
    learningTips: 'Nuansa: Orang Jerman lebih suka menggunakan kata "günstig" (ramah kantong/bagus tapi terjangkau) daripada "billig" (yang kadang terkesan murahan/kurang bermutu).',
  },

  schnell: {
    word: 'schnell',
    displayWord: 'schnell',
    ipa: '/ʃnɛl/',
    translations: ['cepat', 'lekas', 'tangkas'],
    meaningSummary: 'Bergerak atau terjadi dengan kelajuan tinggi dalam waktu singkat.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'schnell',
        komparativ: 'schneller',
        superlativ: 'am schnellsten',
      },
    },
    synonyms: [
      { word: 'rasch', wordClass: 'Adjektiv', translation: 'segera / gesit' },
      { word: 'zügig', wordClass: 'Adjektiv', translation: 'lancar kilat' },
    ],
    antonyms: [
      { word: 'langsam', wordClass: 'Adjektiv', translation: 'lambat / pelan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Der ICE-Zug fährt sehr schnell.',
        indonesian: 'Kereta ICE melaju sangat cepat.',
        contextNote: 'Kecepatan kereta cepat',
      },
      {
        level: 'A1',
        german: 'Komm schnell, wir haben keine Zeit mehr!',
        indonesian: 'Ayo cepat, kita sudah kehabisan waktu!',
        contextNote: 'Seruan terburu-buru',
      },
    ],
    learningTips: 'Dapat berfungsi sebagai kata sifat (ein schnelles Auto) maupun kata keterangan adverbia (Er läuft schnell).',
  },

  langsam: {
    word: 'langsam',
    displayWord: 'langsam',
    ipa: '/ˈlaŋzaːm/',
    translations: ['lambat', 'pelan-pelan'],
    meaningSummary: 'Memiliki kelajuan rendah atau membutuhkan waktu lama.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'langsam',
        komparativ: 'langsamer',
        superlativ: 'am langsamsten',
      },
    },
    synonyms: [
      { word: 'träge', wordClass: 'Adjektiv', translation: 'lamban' },
      { word: 'gemächlich', wordClass: 'Adjektiv', translation: 'santai perlahan' },
    ],
    antonyms: [
      { word: 'schnell', wordClass: 'Adjektiv', translation: 'cepat' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Können Sie bitte etwas langsamer sprechen?',
        indonesian: 'Bisakah Anda tolong berbicara sedikit lebih pelan?',
        contextNote: 'Permintaan bantuan bahasa paling berguna di Jerman!',
      },
      {
        level: 'A1',
        german: 'Die Schildkröte bewegt sich sehr langsam.',
        indonesian: 'Kura-kura bergerak dengan sangat lambat.',
        contextNote: 'Perilaku hewan',
      },
    ],
    learningTips: 'Kalimat penyelamat bagi pemula A1 di Jerman: "Bitte sprechen Sie langsamer!" (Tolong bicara lebih lambat!).',
  },
};
