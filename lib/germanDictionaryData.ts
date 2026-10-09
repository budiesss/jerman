import { WordResult, SentenceResult, SynonymItem, AntonymItem, ExampleSentence, CEFRLevel, CompoundBreakdown } from './types';
import { A1_WORDS } from './dictionary/a1Words';
import { A1_EXPANDED } from './dictionary/a1Expanded';
import { A2_WORDS } from './dictionary/a2Words';
import { A2_EXPANDED } from './dictionary/a2Expanded';
import { B1_WORDS } from './dictionary/b1Words';
import { B1_EXPANDED } from './dictionary/b1Expanded';
import { B1_CORE_VERBS } from './dictionary/b1CoreVerbs';
import { B2_WORDS } from './dictionary/b2Words';
import { B2_EXPANDED } from './dictionary/b2Expanded';
import { C1_WORDS } from './dictionary/c1Words';
import { C1_EXPANDED } from './dictionary/c1Expanded';
import { C2_WORDS } from './dictionary/c2Words';
import { C2_EXPANDED } from './dictionary/c2Expanded';
import { IDIOMS_EXPANDED } from './dictionary/idiomsExpanded';
import { COLLOCATIONS_EXPANDED } from './dictionary/collocationsExpanded';
import { COMPOUND_WORDS } from './dictionary/compoundWords';
import { EXTENDED_ID_TO_DE } from './dictionary/idToDeData';

export interface UmlautMapping {
  withoutUmlaut: string;
  options: Array<{
    word: string;
    translation: string;
    reason: string;
    confidence: number;
    wordClass: string;
    isPrimary?: boolean;
  }>;
}

export const UMLAUT_PAIRS: Record<string, UmlautMapping> = {
  schon: {
    withoutUmlaut: 'schon',
    options: [
      {
        word: 'schön',
        translation: 'indah / cantik / elok',
        reason: 'Penggunaan umum dengan umlaut (ö). Adjektiv yang berarti cantik atau bagus.',
        confidence: 0.95,
        wordClass: 'Adjektiv',
      },
      {
        word: 'schon',
        translation: 'sudah / telah',
        reason: 'Bentuk valid tanpa umlaut. Adverb waktu yang berarti sudah.',
        confidence: 0.9,
        wordClass: 'Adverb',
        isPrimary: true,
      },
    ],
  },
  fur: {
    withoutUmlaut: 'fur',
    options: [
      {
        word: 'für',
        translation: 'untuk / bagi (+ Akkusativ)',
        reason: 'Huruf "ü" sering ditulis "u" karena ketiadaan tombol umlaut. Präposition penting.',
        confidence: 0.98,
        wordClass: 'Präposition',
      },
      {
        word: 'Fur',
        translation: 'Fur / bulu halus hewan (sangat jarang dalam bahasa Jerman modern, biasanya Pelz/Fell)',
        reason: 'Bentuk kapitalisasi jarang atau pinjaman.',
        confidence: 0.2,
        wordClass: 'Nomen',
      },
    ],
  },
  fuer: {
    withoutUmlaut: 'fuer',
    options: [
      {
        word: 'für',
        translation: 'untuk / bagi (+ Akkusativ)',
        reason: '"ue" adalah bentuk alternatif resmi untuk umlaut "ü".',
        confidence: 0.99,
        wordClass: 'Präposition',
      },
    ],
  },
  schoen: {
    withoutUmlaut: 'schoen',
    options: [
      {
        word: 'schön',
        translation: 'indah / cantik / bagus',
        reason: '"oe" adalah bentuk alternatif resmi untuk umlaut "ö".',
        confidence: 0.99,
        wordClass: 'Adjektiv',
      },
    ],
  },
  mochte: {
    withoutUmlaut: 'mochte',
    options: [
      {
        word: 'möchte',
        translation: 'ingin / mau (bentuk sopan)',
        reason: 'Bentuk Konjunktiv II dari "mögen", sangat sering digunakan untuk menyatakan keinginan secara sopan.',
        confidence: 0.95,
        wordClass: 'Modalverb',
      },
      {
        word: 'mochte',
        translation: 'menyukai / gemar (Präteritum/lampau)',
        reason: 'Bentuk Präteritum dari kata kerja "mögen" (dulu menyukai).',
        confidence: 0.85,
        wordClass: 'Verb',
        isPrimary: true,
      },
    ],
  },
  konnen: {
    withoutUmlaut: 'konnen',
    options: [
      {
        word: 'können',
        translation: 'dapat / bisa / mampu',
        reason: '"können" menggunakan umlaut ö untuk Infinitiv dan Präsens jamak.',
        confidence: 0.98,
        wordClass: 'Modalverb',
      },
      {
        word: 'konnten',
        translation: 'bisa / dapat (lampau)',
        reason: 'Bentuk Präteritum jamak dari können.',
        confidence: 0.5,
        wordClass: 'Modalverb',
      },
    ],
  },
  mussen: {
    withoutUmlaut: 'mussen',
    options: [
      {
        word: 'müssen',
        translation: 'harus / wajib',
        reason: '"müssen" menggunakan umlaut ü.',
        confidence: 0.99,
        wordClass: 'Modalverb',
      },
    ],
  },
  uber: {
    withoutUmlaut: 'uber',
    options: [
      {
        word: 'über',
        translation: 'di atas / tentang / lebih dari (+ Akk/Dat)',
        reason: 'Präposition "über" menggunakan umlaut ü.',
        confidence: 0.98,
        wordClass: 'Präposition',
      },
    ],
  },
  spat: {
    withoutUmlaut: 'spat',
    options: [
      {
        word: 'spät',
        translation: 'terlambat / larut (waktu)',
        reason: '"spät" menggunakan umlaut ä.',
        confidence: 0.95,
        wordClass: 'Adjektiv',
      },
    ],
  },
  madchen: {
    withoutUmlaut: 'madchen',
    options: [
      {
        word: 'das Mädchen',
        translation: 'anak perempuan / gadis',
        reason: 'Kata benda "das Mädchen" (diminutif -chen selalu berartikel das) menggunakan ä.',
        confidence: 0.99,
        wordClass: 'Nomen',
      },
    ],
  },
  apfel: {
    withoutUmlaut: 'apfel',
    options: [
      {
        word: 'der Apfel',
        translation: 'apel (tunggal)',
        reason: 'Singular: der Apfel (tanpa umlaut).',
        confidence: 0.95,
        wordClass: 'Nomen',
      },
      {
        word: 'die Äpfel',
        translation: 'apel (jamak/plural)',
        reason: 'Plural dari Apfel menggunakan umlaut: die Äpfel.',
        confidence: 0.85,
        wordClass: 'Nomen',
      },
    ],
  },
  freizeitbeschaftigung: {
    withoutUmlaut: 'freizeitbeschaftigung',
    options: [
      {
        word: 'Freizeitbeschäftigung',
        translation: 'aktivitas waktu luang / hobi / rekreasi',
        reason: 'Kata benda majemuk (die Freizeit + die Beschäftigung). Huruf ä (a-Umlaut) mutlak diperlukan.',
        confidence: 0.99,
        wordClass: 'Nomen',
      },
    ],
  },
  beschaftigung: {
    withoutUmlaut: 'beschaftigung',
    options: [
      {
        word: 'Beschäftigung',
        translation: 'aktivitas / kesibukan / pekerjaan',
        reason: 'Kata benda feminin (die Beschäftigung). Berasal dari kata kerja beschäftigen dan wajib memakai tanda umlaut ä.',
        confidence: 0.99,
        wordClass: 'Nomen',
      },
    ],
  },
  beschaftigt: {
    withoutUmlaut: 'beschaftigt',
    options: [
      {
        word: 'beschäftigt',
        translation: 'sibuk / dipekerjakan',
        reason: 'Kata sifat / partisip dari beschäftigen. Menggunakan huruf ä.',
        confidence: 0.99,
        wordClass: 'Adjektiv',
      },
    ],
  },
};

export const GERMAN_DICTIONARY: Record<string, WordResult> = {
  ...A1_WORDS,
  ...A1_EXPANDED,
  ...A2_WORDS,
  ...A2_EXPANDED,
  ...B1_WORDS,
  ...B1_EXPANDED,
  ...B1_CORE_VERBS,
  ...B2_WORDS,
  ...B2_EXPANDED,
  ...C1_WORDS,
  ...C1_EXPANDED,
  ...C2_WORDS,
  ...C2_EXPANDED,
  ...IDIOMS_EXPANDED,
  ...COLLOCATIONS_EXPANDED,
  ...COMPOUND_WORDS,
  schön: {
    word: 'schön',
    displayWord: 'schön',
    ipa: '/ʃøːn/',
    translations: ['indah', 'cantik', 'bagus', 'elok'],
    meaningSummary: 'Menggambarkan penampilan visual yang menyenangkan, cuaca yang baik, atau pengalaman yang memuaskan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'schön',
        komparativ: 'schöner',
        superlativ: 'am schönsten',
      },
    },
    synonyms: [
      { word: 'hübsch', wordClass: 'Adjektiv', translation: 'manis, cantik' },
      { word: 'attraktiv', wordClass: 'Adjektiv', translation: 'menarik' },
      { word: 'wunderschön', wordClass: 'Adjektiv', translation: 'sangat indah' },
      { word: 'herrlich', wordClass: 'Adjektiv', translation: 'menakjubkan' },
      { word: 'ansprechend', wordClass: 'Adjektiv', translation: 'menawan' },
    ],
    antonyms: [
      { word: 'hässlich', wordClass: 'Adjektiv', translation: 'jelek, buruk rupa' },
      { word: 'furchtbar', wordClass: 'Adjektiv', translation: 'mengerikan' },
      { word: 'unattraktiv', wordClass: 'Adjektiv', translation: 'tidak menarik' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Wetter heute ist sehr schön.',
        indonesian: 'Cuaca hari ini sangat bagus.',
        contextNote: 'Membicarakan cuaca',
      },
      {
        level: 'A1',
        german: 'Sie hat eine schöne Wohnung.',
        indonesian: 'Dia memiliki apartemen yang indah.',
        contextNote: 'Mendeskripsikan tempat tinggal',
      },
      {
        level: 'A2',
        german: 'Ich wünsche dir einen schönen Tag!',
        indonesian: 'Semoga harimu menyenangkan!',
        contextNote: 'Ucapan salam sehari-hari',
      },
      {
        level: 'B1',
        german: 'Es wäre schön, wenn wir uns bald wiedersehen könnten.',
        indonesian: 'Alangkah baiknya jika kita bisa segera bertemu kembali.',
        contextNote: 'Penggunaan Konjunktiv II (harapan sopan)',
      },
    ],
    learningTips: 'Perhatikan pengucapan umlaut "ö" (bibir membulat seperti mengucap "o", lidah diposisikan seperti mengucap "e").',
  },

  schon: {
    word: 'schon',
    displayWord: 'schon',
    ipa: '/ʃoːn/',
    translations: ['sudah', 'telah', 'memang'],
    meaningSummary: 'Menyatakan bahwa suatu peristiwa telah terjadi lebih awal dari dugaan, atau digunakan sebagai partikel penegas.',
    wordClass: 'Adverb',
    cefrLevel: 'A1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Temporaladverb / Modalpartikel. Tidak mengalami deklinasi (bentuk tetap).',
      },
    },
    synonyms: [
      { word: 'bereits', wordClass: 'Adverb', translation: 'sudah, telah (lebih formal)' },
    ],
    antonyms: [
      { word: 'noch nicht', wordClass: 'Adverb', translation: 'belum' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Bist du schon fertig?',
        indonesian: 'Apakah kamu sudah selesai?',
        contextNote: 'Pertanyaan waktu/progres',
      },
      {
        level: 'A2',
        german: 'Ich war schon dreimal in Deutschland.',
        indonesian: 'Saya sudah tiga kali ke Jerman.',
        contextNote: 'Pengalaman waktu lampau',
      },
      {
        level: 'B1',
        german: 'Das stimmt schon, aber es ist kompliziert.',
        indonesian: 'Itu memang benar, tetapi itu rumit.',
        contextNote: 'Penggunaan sebagai Modalpartikel (penegas)',
      },
    ],
    learningTips: 'Hati-hati! "schon" (tanpa titik dua) berarti "sudah", sedangkan "schön" (dengan umlaut) berarti "indah/cantik". Maknanya sangat berbeda!',
  },

  tisch: {
    word: 'der Tisch',
    displayWord: 'der Tisch',
    ipa: '/tɪʃ/',
    translations: ['meja'],
    meaningSummary: 'Perabotan dengan permukaan datar yang ditopang oleh satu atau lebih kaki.',
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
      { word: 'der Schreibtisch', article: 'der', wordClass: 'Nomen', translation: 'meja tulis / meja kerja' },
      { word: 'der Esstisch', article: 'der', wordClass: 'Nomen', translation: 'meja makan' },
      { word: 'die Tafel', article: 'die', wordClass: 'Nomen', translation: 'meja panjang / meja perjamuan' },
    ],
    antonyms: [
      { word: 'der Stuhl', article: 'der', wordClass: 'Nomen', translation: 'kursi (lawan perabot/tempat duduk)' },
      { word: 'der Boden', article: 'der', wordClass: 'Nomen', translation: 'lantai (alas bawah)' },
      { word: 'die Bank', article: 'die', wordClass: 'Nomen', translation: 'bangku duduk' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Buch liegt auf dem Tisch.',
        indonesian: 'Buku itu terletak di atas meja.',
        contextNote: 'Dativ (posisi diam: auf + Dativ -> dem Tisch)',
      },
      {
        level: 'A2',
        german: 'Wir brauchen einen größeren Tisch für sechs Personen.',
        indonesian: 'Kita membutuhkan meja yang lebih besar untuk enam orang.',
        contextNote: 'Akkusativ (einen Tisch)',
      },
      {
        level: 'B1',
        german: 'Bitte nehmen Sie Platz am runden Tisch.',
        indonesian: 'Silakan duduk di meja bundar.',
        contextNote: 'Penggunaan ungkapan formal',
      },
    ],
    learningTips: 'Dalam bahasa Jerman, Tisch bertulang maskulin ("der Tisch"). Jangan hafalkan kata benda tanpa artikelnya!',
  },

  gehen: {
    word: 'gehen',
    displayWord: 'gehen',
    ipa: '/ˈɡeːən/',
    translations: ['berjalan', 'pergi', 'berjalan lancar (ungkapan)'],
    meaningSummary: 'Bergerak dengan kaki, meninggalkan suatu tempat, atau menyatakan kabar seseorang (Wie geht es dir?).',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'gehen',
        praesens: 'geht (er/sie/es geht)',
        praeteritum: 'ging',
        partizip2: 'gegangen',
        hilfsverb: 'sein',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'laufen', wordClass: 'Verb', translation: 'berlari / berjalan kaki' },
      { word: 'schreiten', wordClass: 'Verb', translation: 'melangkah (formal)' },
      { word: 'sich fortbewegen', wordClass: 'Verb', translation: 'bergerak maju' },
    ],
    antonyms: [
      { word: 'bleiben', wordClass: 'Verb', translation: 'tinggal / menetap' },
      { word: 'stehen', wordClass: 'Verb', translation: 'berdiri' },
      { word: 'anhalten', wordClass: 'Verb', translation: 'berhenti' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich gehe jetzt nach Hause.',
        indonesian: 'Saya pergi pulang sekarang.',
        contextNote: 'Arah tujuan (nach Hause)',
      },
      {
        level: 'A1',
        german: 'Wie geht es dir?',
        indonesian: 'Bagaimana kabarmu?',
        contextNote: 'Ungkapan menanyakan kabar',
      },
      {
        level: 'A2',
        german: 'Gestern bin ich um 22 Uhr ins Bett gegangen.',
        indonesian: 'Kemarin saya pergi tidur jam 10 malam.',
        contextNote: 'Perfekt dengan hilfsverb sein (bin gegangen)',
      },
      {
        level: 'B1',
        german: 'Es geht darum, eine Lösung für alle zu finden.',
        indonesian: 'Ini tentang menemukan solusi bagi semua orang.',
        contextNote: 'Ungkapan "es geht um..." (membahas/mengenai)',
      },
    ],
    learningTips: 'Perhatikan! Kata kerja "gehen" membentuk masa lampau (Perfekt) dengan kata bantu "sein" (bukan haben): "Ich bin gegangen" karena menunjukkan perpindahan tempat.',
  },

  bekommen: {
    word: 'bekommen',
    displayWord: 'bekommen',
    ipa: '/bəˈkɔmən/',
    translations: ['mendapatkan', 'menerima', 'memperoleh'],
    meaningSummary: 'Menerima sesuatu dari orang lain atau memperoleh sesuatu (hadiah, surat, penyakit, dll).',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'bekommen',
        praesens: 'bekommt (er/sie/es bekommt)',
        praeteritum: 'bekam',
        partizip2: 'bekommen',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: false,
        prefix: 'be- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'erhalten', wordClass: 'Verb', translation: 'menerima (lebih formal)' },
      { word: 'kriegen', wordClass: 'Verb', translation: 'mendapat (bahasa percakapan/umgangssprachlich)' },
      { word: 'empfangen', wordClass: 'Verb', translation: 'menerima (tamu/sinyal/pesan)' },
    ],
    antonyms: [
      { word: 'geben', wordClass: 'Verb', translation: 'memberikan' },
      { word: 'verlieren', wordClass: 'Verb', translation: 'kehilangan' },
      { word: 'verschenken', wordClass: 'Verb', translation: 'menghadiahkan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich bekomme ein Geschenk zum Geburtstag.',
        indonesian: 'Saya mendapatkan hadiah untuk ulang tahun saya.',
        contextNote: 'Menerima hadiah',
      },
      {
        level: 'A2',
        german: 'Hast du meine E-Mail bekommen?',
        indonesian: 'Apakah kamu sudah menerima email saya?',
        contextNote: 'Perfekt: hat bekommen',
      },
      {
        level: 'B1',
        german: 'Plötzlich bekam er hohes Fieber.',
        indonesian: 'Tiba-tiba dia mengalami demam tinggi.',
        contextNote: 'Präteritum dalam tulisan naratif',
      },
    ],
    falseFriendsWarning: 'PERINGATAN FALSE FRIEND! "bekommen" BUKAN berarti "menjadi" (seperti bahasa Inggris "become"). Untuk "menjadi" dalam bahasa Jerman gunakan kata kerja "werden". Contoh: "Ich werde Arzt" (Saya menjadi dokter), bukan "Ich bekomme Arzt"!',
    learningTips: 'Awalan "be-" tidak dapat dipisahkan (untrennbar), sehingga Partizip II tidak menambahkan "ge-": tetap "bekommen".',
  },

  haus: {
    word: 'das Haus',
    displayWord: 'das Haus',
    ipa: '/haʊ̯s/',
    translations: ['rumah', 'gedung'],
    meaningSummary: 'Bangunan untuk tempat tinggal atau kegiatan kerja.',
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
      { word: 'das Gebäude', article: 'das', wordClass: 'Nomen', translation: 'bangunan, gedung' },
      { word: 'das Heim', article: 'das', wordClass: 'Nomen', translation: 'kediaman, rumah kediaman' },
      { word: 'die Wohnung', article: 'die', wordClass: 'Nomen', translation: 'apartemen, tempat tinggal' },
      { word: 'die Unterkunft', article: 'die', wordClass: 'Nomen', translation: 'tempat berteduh / akomodasi' },
    ],
    antonyms: [
      { word: 'das Freie', article: 'das', wordClass: 'Nomen', translation: 'alam terbuka / ruang luar' },
      { word: 'die Straße', article: 'die', wordClass: 'Nomen', translation: 'jalanan / tempat tanpa naungan' },
      { word: 'die Wildnis', article: 'die', wordClass: 'Nomen', translation: 'alam liar' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Haus ist sehr groß und modern.',
        indonesian: 'Rumah itu sangat besar dan modern.',
        contextNote: 'Deskripsi fisik',
      },
      {
        level: 'A1',
        german: 'Ich bin zu Hause.',
        indonesian: 'Saya ada di rumah.',
        contextNote: 'Frasa tetap: "zu Hause" (berada di rumah)',
      },
      {
        level: 'A1',
        german: 'Ich gehe nach Hause.',
        indonesian: 'Saya pergi ke rumah / pulang.',
        contextNote: 'Frasa tetap: "nach Hause" (menuju rumah/pulang)',
      },
    ],
    learningTips: 'Ingat perbedaan frasa: "zu Hause" (sedang di rumah - statis) vs "nach Hause" (pulang ke rumah - gerakan).',
  },

  frau: {
    word: 'die Frau',
    displayWord: 'die Frau',
    ipa: '/fʁaʊ̯/',
    translations: ['wanita', 'perempuan', 'istri', 'nyonya'],
    meaningSummary: 'Orang dewasa berjenis kelamin perempuan, pasangan hidup (istri), atau sapaan hormat Ny./Ibu.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Frau',
        plural: 'die Frauen',
        genitivSingular: 'der Frau',
      },
    },
    synonyms: [
      { word: 'die Dame', article: 'die', wordClass: 'Nomen', translation: 'wanita terhormat, nyonya' },
      { word: 'die Ehefrau', article: 'die', wordClass: 'Nomen', translation: 'istri yang sah' },
    ],
    antonyms: [
      { word: 'der Mann', article: 'der', wordClass: 'Nomen', translation: 'pria, suami' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Frau Müller kommt aus Berlin.',
        indonesian: 'Ibu Müller berasal dari Berlin.',
        contextNote: 'Sapaan formal',
      },
      {
        level: 'A1',
        german: 'Das ist meine Frau.',
        indonesian: 'Ini adalah istri saya.',
        contextNote: 'Menunjukkan pasangan',
      },
    ],
  },

  mann: {
    word: 'der Mann',
    displayWord: 'der Mann',
    ipa: '/man/',
    translations: ['pria', 'laki-laki', 'suami'],
    meaningSummary: 'Orang dewasa berjenis kelamin laki-laki atau suami.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Mann',
        plural: 'die Männer',
        genitivSingular: 'des Mannes',
      },
    },
    synonyms: [
      { word: 'der Herr', article: 'der', wordClass: 'Nomen', translation: 'tuan, bapak' },
      { word: 'der Ehemann', article: 'der', wordClass: 'Nomen', translation: 'suami' },
    ],
    antonyms: [
      { word: 'die Frau', article: 'die', wordClass: 'Nomen', translation: 'wanita, istri' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Der Mann arbeitet in einer Bank.',
        indonesian: 'Pria itu bekerja di sebuah bank.',
        contextNote: 'Subjek tunggal',
      },
      {
        level: 'A2',
        german: 'Mein Mann kocht sehr gerne.',
        indonesian: 'Suami saya sangat suka memasak.',
        contextNote: 'Hubungan keluarga',
      },
    ],
  },

  fahren: {
    word: 'fahren',
    displayWord: 'fahren',
    ipa: '/ˈfaːʁən/',
    translations: ['berkendara', 'mengemudi', 'bepergian (dengan kendaraan)'],
    meaningSummary: 'Bepergian atau berpindah tempat dengan menggunakan kendaraan darat, laut, atau rel.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'fahren',
        praesens: 'fährt (du fährst, er fährt - Vokalwechsel a->ä)',
        praeteritum: 'fuhr',
        partizip2: 'gefahren',
        hilfsverb: 'sein',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'reisen', wordClass: 'Verb', translation: 'bepergian / berwisata' },
      { word: 'steuern', wordClass: 'Verb', translation: 'mengemudikan / mengendalikan' },
    ],
    antonyms: [
      { word: 'stehen', wordClass: 'Verb', translation: 'berhenti / berdiri' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich fahre morgen mit dem Zug nach Berlin.',
        indonesian: 'Saya pergi naik kereta ke Berlin besok.',
        contextNote: 'Dengan kendaraan (mit + Dativ)',
      },
      {
        level: 'A2',
        german: 'Er fährt vorsichtig Auto.',
        indonesian: 'Dia mengemudikan mobil dengan hati-hati.',
        contextNote: 'Kecakapan mengemudi',
      },
    ],
    learningTips: 'Perubahan vokal (Vokalwechsel) terjadi pada orang ke-2 dan ke-3 tunggal di waktu kini: du fährst, er/sie/es fährt.',
  },

  fuer: {
    word: 'für',
    displayWord: 'für',
    ipa: '/fyːɐ̯/',
    translations: ['untuk', 'bagi', 'demi', 'selama (durasi waktu)'],
    meaningSummary: 'Kata depan (Präposition) yang menyatakan penerima manfaat, tujuan, atau durasi tertentu.',
    wordClass: 'Präposition',
    cefrLevel: 'A1',
    grammar: {
      type: 'praeposition',
      data: {
        kasus: 'Akkusativ',
        exampleUsage: 'Selalu diikuti kasus Akkusativ (für mich, für den Freund, für das Kind).',
      },
    },
    synonyms: [
      { word: 'zugunsten', wordClass: 'Präposition', translation: 'demi keuntungan / untuk (+ Genitiv)' },
      { word: 'pro', wordClass: 'Präposition', translation: 'untuk / per (+ Akkusativ)' },
      { word: 'zwecks', wordClass: 'Präposition', translation: 'guna / bertujuan untuk (+ Genitiv)' },
    ],
    antonyms: [
      { word: 'gegen', wordClass: 'Präposition', translation: 'melawan, terhadap (+ Akkusativ)' },
      { word: 'wider', wordClass: 'Präposition', translation: 'menentang (+ Akkusativ)' },
      { word: 'ohne', wordClass: 'Präposition', translation: 'tanpa (+ Akkusativ)' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Geschenk ist für dich.',
        indonesian: 'Hadiah ini untukmu.',
        contextNote: 'Akkusativ objek pribadi (dich)',
      },
      {
        level: 'A2',
        german: 'Ich bleibe für zwei Wochen in München.',
        indonesian: 'Saya tinggal selama dua minggu di Munich.',
        contextNote: 'Durasi waktu',
      },
    ],
    learningTips: 'Präposition "für" SELALU menuntut kasus Akkusativ (Akkusativ-Präposition: durch, für, gegen, ohne, um).',
  },

  moechte: {
    word: 'möchte',
    displayWord: 'möchte',
    ipa: '/ˈmœçtə/',
    translations: ['ingin', 'mau (sopan)', 'hendak'],
    meaningSummary: 'Bentuk Konjunktiv II dari "mögen" yang lazim dipakai untuk menyatakan keinginan atau pesanan secara santun.',
    wordClass: 'Modalverb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'mögen (Konjunktiv II)',
        praesens: 'möchte (ich möchte, er/sie/es möchte)',
        praeteritum: 'wollte (pengganti lampau)',
        partizip2: 'gemocht',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'wollen', wordClass: 'Modalverb', translation: 'ingin, mau (lebih tegas/kuat)' },
      { word: 'wünschen', wordClass: 'Verb', translation: 'mengharapkan, mendambakan' },
      { word: 'begehren', wordClass: 'Verb', translation: 'menginginkan secara mendalam' },
    ],
    antonyms: [
      { word: 'ablehnen', wordClass: 'Verb', translation: 'menolak / enggan' },
      { word: 'verzichten', wordClass: 'Verb', translation: 'merelakan untuk tidak / berpantang' },
      { word: 'verschmähen', wordClass: 'Verb', translation: 'menampik / tidak sudi' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich möchte bitte einen Kaffee.',
        indonesian: 'Saya mau secangkir kopi, tolong.',
        contextNote: 'Memesan minuman dengan sopan',
      },
      {
        level: 'A1',
        german: 'Ich möchte Deutsch lernen.',
        indonesian: 'Saya ingin belajar bahasa Jerman.',
        contextNote: 'Diikuti kata kerja di akhir (lernen)',
      },
      {
        level: 'A2',
        german: 'Möchten Sie noch etwas trinken?',
        indonesian: 'Apakah Anda ingin minum sesuatu lagi?',
        contextNote: 'Pertanyaan sopan untuk tamu',
      },
    ],
    learningTips: 'Perhatikan konjugasi orang ke-1 (ich) dan orang ke-3 (er/sie/es) SAMA: "ich möchte", "er möchte" (tanpa akhiran -t). Kata kerja utama diletakkan di akhir kalimat dalam bentuk infinitiv.',
  },

  deutschland: {
    word: 'Deutschland',
    displayWord: 'das Deutschland',
    ipa: '/ˈdɔʏ̯tʃlant/',
    translations: ['Jerman', 'Republik Federal Jerman'],
    meaningSummary: 'Nama negara di Eropa Tengah (Federal Republic of Germany).',
    wordClass: 'Eigenname',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: '-',
        gender: 'neutral',
        singular: 'Deutschland',
        plural: '-',
      },
    },
    synonyms: [
      { word: 'die Bundesrepublik Deutschland', article: 'die', wordClass: 'Nomen', translation: 'Republik Federal Jerman' },
      { word: 'die BRD', article: 'die', wordClass: 'Nomen', translation: 'Federasi Jerman (singkatan)' },
    ],
    antonyms: [
      { word: 'das Ausland', article: 'das', wordClass: 'Nomen', translation: 'luar negeri / mancanegara' },
      { word: 'die Fremde', article: 'die', wordClass: 'Nomen', translation: 'rantau / negeri asing' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich möchte nach Deutschland fliegen.',
        indonesian: 'Saya ingin terbang ke Jerman.',
        contextNote: 'Arah ke negara tanpa artikel memakai "nach" (nach Deutschland)',
      },
      {
        level: 'A1',
        german: 'Deutschland liegt in Europa.',
        indonesian: 'Jerman terletak di Eropa.',
        contextNote: 'Informasi geografis',
      },
    ],
  },

  essen: {
    word: 'essen',
    displayWord: 'essen',
    ipa: '/ˈʔɛsn̩/',
    translations: ['makan', 'menyantap'],
    meaningSummary: 'Memasukkan makanan padat ke dalam mulut dan menelannya.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'essen',
        praesens: 'isst (du isst, er/sie/es isst - Vokalwechsel e->i)',
        praeteritum: 'aß',
        partizip2: 'gegessen',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'speisen', wordClass: 'Verb', translation: 'bersantap (formal)' },
      { word: 'zu sich nehmen', wordClass: 'Verb', translation: 'mengonsumsi makanan' },
    ],
    antonyms: [
      { word: 'fasten', wordClass: 'Verb', translation: 'berpuasa' },
      { word: 'hungern', wordClass: 'Verb', translation: 'kelaparan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich esse gerne Pizza.',
        indonesian: 'Saya suka makan pizza.',
        contextNote: '"gerne" menyatakan kesukaan',
      },
      {
        level: 'A1',
        german: 'Was isst du zum Frühstück?',
        indonesian: 'Apa yang kamu makan untuk sarapan?',
        contextNote: 'Vokalwechsel: du isst',
      },
      {
        level: 'A2',
        german: 'Wir haben gestern zusammen gegessen.',
        indonesian: 'Kemarin kita makan bersama.',
        contextNote: 'Perfekt: haben gegessen',
      },
    ],
    learningTips: 'Sebagai kata benda: "das Essen" (huruf kapital) berarti "makanan" atau "acara makan".',
  },

  gut: {
    word: 'gut',
    displayWord: 'gut',
    ipa: '/ɡuːt/',
    translations: ['baik', 'bagus', 'enak', 'sehat'],
    meaningSummary: 'Memenuhi standar yang diharapkan, bernilai positif, atau terasa lezat.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'gut',
        komparativ: 'besser',
        superlativ: 'am besten',
      },
    },
    synonyms: [
      { word: 'prima', wordClass: 'Adjektiv', translation: 'bagus sekali, hebat' },
      { word: 'ausgezeichnet', wordClass: 'Adjektiv', translation: 'luar biasa, unggul' },
      { word: 'toll', wordClass: 'Adjektiv', translation: 'hebat, keren' },
    ],
    antonyms: [
      { word: 'schlecht', wordClass: 'Adjektiv', translation: 'buruk, jelek' },
      { word: 'furchtbar', wordClass: 'Adjektiv', translation: 'mengerikan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Guten Morgen!',
        indonesian: 'Selamat pagi!',
        contextNote: 'Deklinasi Akkusativ maskulin: einen guten Morgen',
      },
      {
        level: 'A1',
        german: 'Das schmeckt sehr gut.',
        indonesian: 'Ini rasanya sangat enak.',
        contextNote: 'Mendeskripsikan rasa makanan',
      },
      {
        level: 'A2',
        german: 'Sein Deutsch wird immer besser.',
        indonesian: 'Bahasa Jermannya menjadi semakin baik.',
        contextNote: 'Komparativ tidak beraturan: gut -> besser',
      },
    ],
    learningTips: 'Komparasi kata "gut" bersifat tidak beraturan: gut -> besser -> am besten (bukan gut -> guter).',
  },

  freizeit: {
    word: 'Freizeit',
    displayWord: 'die Freizeit',
    ipa: '/ˈfʁaɪ̯ˌt͡saɪ̯t/',
    translations: ['waktu luang', 'waktu senggang', 'waktu santai / bebas'],
    meaningSummary: 'Waktu ketika seseorang terbebas dari tugas pekerjaan profesional, jam sekolah, atau kewajiban formal.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Freizeit',
        plural: 'die Freizeiten',
        genitivSingular: 'der Freizeit',
      },
    },
    synonyms: [
      { word: 'die Erholung', article: 'die', wordClass: 'Nomen', translation: 'pemulihan / istirahat' },
      { word: 'die Muße', article: 'die', wordClass: 'Nomen', translation: 'waktu senggang penuh ketenangan' },
      { word: 'die Entspannung', article: 'die', wordClass: 'Nomen', translation: 'relaksasi santai' },
      { word: 'der Feierabend', article: 'der', wordClass: 'Nomen', translation: 'waktu bebas seusai jam kerja' },
    ],
    antonyms: [
      { word: 'die Arbeit', article: 'die', wordClass: 'Nomen', translation: 'pekerjaan' },
      { word: 'der Beruf', article: 'der', wordClass: 'Nomen', translation: 'profesi / dinas kerja' },
      { word: 'die Arbeitszeit', article: 'die', wordClass: 'Nomen', translation: 'jam kerja' },
      { word: 'die Pflicht', article: 'die', wordClass: 'Nomen', translation: 'kewajiban / tugas' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Was machst du am liebsten in deiner Freizeit?',
        indonesian: 'Apa yang paling suka kamu lakukan di waktu luangmu?',
        contextNote: 'Pertanyaan percakapan dasar A1 tentang hobi',
      },
      {
        level: 'A2',
        german: 'In meiner Freizeit lese ich gerne Romane und fahre Fahrrad.',
        indonesian: 'Di waktu luang saya, saya gemar membaca novel dan bersepeda.',
        contextNote: 'Menyatakan kegemaran sehari-hari',
      },
      {
        level: 'B1',
        german: 'Eine ausgewogene Balance zwischen Arbeit und Freizeit ist wichtig für die Gesundheit.',
        indonesian: 'Keseimbangan yang seimbang antara pekerjaan dan waktu luang sangat penting bagi kesehatan.',
        contextNote: 'Diskusi seputar Work-Life-Balance',
      },
    ],
    learningTips: 'Kata majemuk (Kompositum): "frei" (bebas/luang) + "die Zeit" (waktu). Gender feminin ditentukan oleh kata dasar penentu terakhir (das Grundwort) yaitu "die Zeit". Frasa kolokasi penting: "in der Freizeit" (pada waktu luang - menggunakan kasus Dativ).',
    compoundBreakdown: {
      isCompound: true,
      components: [
        { part: 'frei', wordClass: 'Adjektiv', meaning: 'bebas / lepas dari ikatan tugas', role: 'Bestimmungswort (Penjelas Depan)' },
        { part: 'die Zeit', article: 'die', wordClass: 'Nomen', meaning: 'waktu / masa', role: 'Grundwort (Kata Dasar Penentu)' },
      ],
      explanation: 'Freizeit adalah gabungan kata sifat "frei" (bebas) dan kata benda "die Zeit" (waktu). Makna harfiahnya adalah "waktu yang bebas", yakni kurun waktu yang dapat digunakan sesuka hati tanpa keterikatan kewajiban kerja.',
      headWordRule: 'Kaidah Tata Bahasa Jerman: Artikel dan gender kata majemuk selalu ditentukan oleh kata benda terakhir (das Grundwort). Karena "die Zeit" berartikel "die" (feminin), maka "die Freizeit" juga mutlak berartikel "die".',
    } as CompoundBreakdown,
  },

  arbeit: {
    word: 'Arbeit',
    displayWord: 'die Arbeit',
    ipa: '/ˈʔaʁbaɪ̯t/',
    translations: ['pekerjaan', 'kegiatan kerja', 'tugas karya'],
    meaningSummary: 'Aktivitas fisik atau mental yang dilakukan untuk mencari nafkah, menghasilkan karya, atau menuntaskan kewajiban.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Arbeit',
        plural: 'die Arbeiten',
        genitivSingular: 'der Arbeit',
      },
    },
    synonyms: [
      { word: 'der Beruf', article: 'der', wordClass: 'Nomen', translation: 'profesi / mata pencaharian' },
      { word: 'die Beschäftigung', article: 'die', wordClass: 'Nomen', translation: 'kesibukan / aktivitas kerja' },
      { word: 'die Tätigkeit', article: 'die', wordClass: 'Nomen', translation: 'aktivitas karya' },
      { word: 'der Job', article: 'der', wordClass: 'Nomen', translation: 'pekerjaan sehari-hari' },
    ],
    antonyms: [
      { word: 'die Freizeit', article: 'die', wordClass: 'Nomen', translation: 'waktu luang' },
      { word: 'die Erholung', article: 'die', wordClass: 'Nomen', translation: 'istirahat / relaksasi' },
      { word: 'die Ruhe', article: 'die', wordClass: 'Nomen', translation: 'ketenangan / jeda' },
      { word: 'der Feierabend', article: 'der', wordClass: 'Nomen', translation: 'waktu usai jam kerja' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich gehe jeden Morgen pünktlich zur Arbeit.',
        indonesian: 'Saya berangkat bekerja setiap pagi tepat waktu.',
        contextNote: 'Frasa tetap: "zur Arbeit gehen"',
      },
      {
        level: 'A2',
        german: 'Die Arbeit im Krankenhaus ist anstrengend, aber sehr sinnvoll.',
        indonesian: 'Pekerjaan di rumah sakit melelahkan, namun sangat bermakna.',
        contextNote: 'Mendeskripsikan profesi',
      },
      {
        level: 'B1',
        german: 'Er hat nach dem Studium schnell eine feste Arbeit gefunden.',
        indonesian: 'Setelah menyelesaikan studi, ia lekas menemukan pekerjaan tetap.',
        contextNote: 'Karier dan ketenagakerjaan',
      },
    ],
    learningTips: 'Frasa idiomatik Jerman yang sangat sering dipakai: "zur Arbeit gehen" (berangkat kerja), "an der Arbeit sein" (sedang sibuk bekerja), "bei der Arbeit" (saat sedang bekerja). Lawan kata langsungnya adalah "die Freizeit".',
  },

  freizeitbeschäftigung: {
    word: 'Freizeitbeschäftigung',
    displayWord: 'die Freizeitbeschäftigung',
    ipa: '/ˈfʁaɪ̯tsaɪ̯tbəˌʃɛftɪɡʊŋ/',
    translations: ['kegiatan waktu luang', 'hobi', 'aktivitas santai', 'rekreasi'],
    meaningSummary: 'Aktivitas, kegiatan menyenangkan, atau hobi yang dilakukan seseorang pada waktu luang untuk bersantai dan mengisi waktu.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Freizeitbeschäftigung',
        plural: 'die Freizeitbeschäftigungen',
      },
    },
    synonyms: [
      { word: 'das Hobby', wordClass: 'Nomen', translation: 'hobi' },
      { word: 'die Freizeitaktivität', wordClass: 'Nomen', translation: 'aktivitas waktu luang' },
      { word: 'der Zeitvertreib', wordClass: 'Nomen', translation: 'pengisi waktu luang' },
    ],
    antonyms: [
      { word: 'die Arbeit', wordClass: 'Nomen', translation: 'pekerjaan' },
      { word: 'der Beruf', wordClass: 'Nomen', translation: 'profesi' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Lesen ist meine liebste Freizeitbeschäftigung.',
        indonesian: 'Membaca adalah kegiatan waktu luang favorit saya.',
        contextNote: 'Menceritakan hobi dan kegiatan santai',
      },
      {
        level: 'B1',
        german: 'Welche Freizeitbeschäftigung macht Ihnen am meisten Spaß?',
        indonesian: 'Kegiatan waktu luang apa yang paling menyenangkan bagi Anda?',
        contextNote: 'Pertanyaan seputar minat dan rekreasi',
      },
      {
        level: 'B2',
        german: 'Sport bietet eine gesunde Freizeitbeschäftigung nach einem langen Arbeitstag.',
        indonesian: 'Olahraga menjadi aktivitas waktu luang yang sehat setelah hari kerja yang panjang.',
        contextNote: 'Konteks gaya hidup dan kesehatan',
      },
    ],
    learningTips: 'Kata majemuk (Kompositum): die Freizeit (waktu luang) + die Beschäftigung (aktivitas/pekerjaan). Selalu gunakan huruf Umlaut "ä" pada kata dasar "-beschäftigung". Akhiran "-ung" otomatis membuat kata benda bergender feminin (die), dengan bentuk jamak berakhiran "-en" (die Freizeitbeschäftigungen).',
    compoundBreakdown: {
      isCompound: true,
      components: [
        { part: 'frei', wordClass: 'Adjektiv', meaning: 'bebas / luang', role: 'Bestimmungswort (Penjelas Depan)' },
        { part: 'die Zeit', article: 'die', wordClass: 'Nomen', meaning: 'waktu', role: 'Bestimmungswort (Penjelas Depan)' },
        { part: 'die Beschäftigung', article: 'die', wordClass: 'Nomen', meaning: 'aktivitas / kesibukan / pekerjaan', role: 'Grundwort (Kata Dasar Penentu)' },
      ],
      explanation: 'Freizeitbeschäftigung merupakan kata majemuk tiga susun: "frei" (bebas/luang) + "die Zeit" (waktu) → "die Freizeit" (waktu luang), lalu digabung dengan "die Beschäftigung" (aktivitas). Secara harfiah berarti "aktivitas pada waktu luang" — yang dalam bahasa Indonesia padanannya adalah "hobi" atau "kegiatan santai".',
      headWordRule: 'Kaidah Tata Bahasa Jerman: Artikel dan gender kata majemuk selalu ditentukan oleh kata dasar paling terakhir (das Grundwort). Karena "die Beschäftigung" berartikel "die" (feminin), maka "die Freizeitbeschäftigung" juga berartikel "die".',
    } as CompoundBreakdown,
  },

  beschäftigung: {
    word: 'Beschäftigung',
    displayWord: 'die Beschäftigung',
    ipa: '/bəˈʃɛftɪɡʊŋ/',
    translations: ['kesibukan', 'aktivitas', 'pekerjaan', 'kegiatan'],
    meaningSummary: 'Kegiatan, kesibukan, atau pekerjaan yang sedang dijalankan atau ditekuni seseorang.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Beschäftigung',
        plural: 'die Beschäftigungen',
      },
    },
    synonyms: [
      { word: 'die Tätigkeit', wordClass: 'Nomen', translation: 'aktivitas / pekerjaan' },
      { word: 'die Arbeit', wordClass: 'Nomen', translation: 'pekerjaan' },
    ],
    antonyms: [
      { word: 'die Untätigkeit', wordClass: 'Nomen', translation: 'ketiadaan aktivitas / kelambanan' },
      { word: 'die Arbeitslosigkeit', wordClass: 'Nomen', translation: 'pengangguran' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Er sucht eine sinnvolle Beschäftigung.',
        indonesian: 'Dia sedang mencari kesibukan yang bermanfaat.',
        contextNote: 'Membicarakan kesibukan/pekerjaan',
      },
      {
        level: 'B1',
        german: 'Die Kinder brauchen eine Beschäftigung für den Nachmittag.',
        indonesian: 'Anak-anak membutuhkan kegiatan untuk sore hari.',
        contextNote: 'Aktivitas pengisi waktu untuk anak-anak',
      },
    ],
    learningTips: 'Berasal dari kata kerja "beschäftigen" (mempekerjakan/menyibukkan). Wajib menggunakan huruf Umlaut "ä". Akhiran "-ung" selalu feminin (die Beschäftigung).',
  },

  // ==========================================
  // LEVEL C1 (FORTGESCHRITTENE KENNTNISSE)
  // ==========================================
  voraussetzung: {
    word: 'Voraussetzung',
    displayWord: 'die Voraussetzung',
    ipa: '/foːɐ̯ˈʔaʊ̯szɛtsʊŋ/',
    translations: ['prasyarat', 'ketentuan mutlak', 'asumsi dasar'],
    meaningSummary: 'Kondisi, kualifikasi, atau keadaan yang mutlak harus dipenuhi sebelum hal lain dapat disetujui atau dilaksanakan.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Voraussetzung',
        plural: 'die Voraussetzungen',
        genitivSingular: 'der Voraussetzung',
      },
    },
    synonyms: [
      { word: 'die Bedingung', article: 'die', wordClass: 'Nomen', translation: 'syarat / ketentuan' },
      { word: 'das Erfordernis', article: 'das', wordClass: 'Nomen', translation: 'keharusan / tuntutan' },
      { word: 'die Annahme', article: 'die', wordClass: 'Nomen', translation: 'asumsi / anggapan dasar' },
      { word: 'die Prämisse', article: 'die', wordClass: 'Nomen', translation: 'premis / landasan berpikir' },
    ],
    antonyms: [
      { word: 'die Folge', article: 'die', wordClass: 'Nomen', translation: 'akibat / konsekuensi' },
      { word: 'das Resultat', article: 'das', wordClass: 'Nomen', translation: 'hasil akhir' },
      { word: 'die Nachwirkung', article: 'die', wordClass: 'Nomen', translation: 'efek lanjutan' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Fundierte Sprachkenntnisse auf C1-Niveau sind eine unabdingbare Voraussetzung für die Immatrikulation an einer deutschen Universität.',
        indonesian: 'Kemahiran bahasa yang mendalam pada tingkat C1 merupakan prasyarat mutlak untuk pendaftaran masuk universitas di Jerman.',
        contextNote: 'Persyaratan akademis perguruan tinggi',
      },
      {
        level: 'C1',
        german: 'Unter der Voraussetzung, dass alle Auflagen fristgerecht erfüllt werden, bewilligt das Ministerium die Fördermittel.',
        indonesian: 'Dengan ketentuan bahwa semua syarat dipenuhi tepat waktu, kementerian akan mengucurkan dana hibah tersebut.',
        contextNote: 'Klausul perjanjian hukum dan administrasi formal',
      },
    ],
    learningTips: 'Berasal dari kata kerja "voraussetzen". Sering digunakan dalam frasa tetap: "eine Voraussetzung erfüllen" (memenuhi syarat) atau "unter der Voraussetzung, dass..." (dengan syarat bahwa...). Akhiran "-ung" selalu feminin.',
    compoundBreakdown: {
      isCompound: true,
      components: [
        { part: 'voraus', wordClass: 'Adverb', meaning: 'di depan / terlebih dahulu / mendahului', role: 'Bestimmungswort (Penjelas Depan)' },
        { part: 'setzen', wordClass: 'Verb', meaning: 'menetapkan / menempatkan', role: 'Bestimmungswort (Penjelas Depan)' },
        { part: 'die Setzung / -ung', wordClass: 'Suffix Nomen', meaning: 'proses peletakan/penetapan (akhiran pembentuk kata benda feminin)', role: 'Grundwort (Kata Dasar Penentu)' },
      ],
      explanation: 'Voraussetzung berasal dari kata kerja "voraussetzen" (mempraanggapkan / menjadikan syarat mutlak), yang terdiri dari "voraus-" (mendahului/di depan) + "setzen" (menetapkan). Penambahan akhiran "-ung" mengubahnya menjadi kata benda feminin. Arti harfiahnya adalah "penetapan di depan/lebih dulu" — yang dalam konteks nyata berarti "prasyarat mutlak".',
      headWordRule: 'Kaidah Tata Bahasa Jerman: Akhiran "-ung" selalu menghasilkan kata benda feminin (die). Dengan demikian, "die Voraussetzung" berartikel "die". Bentuk jamak: "die Voraussetzungen" (+ en).',
    } as CompoundBreakdown,
  },

  herausforderung: {
    word: 'Herausforderung',
    displayWord: 'die Herausforderung',
    ipa: '/hɛˈʁaʊ̯sˌfɔʁdəʁʊŋ/',
    translations: ['tantangan besar', 'tugas berat yang memotivasi'],
    meaningSummary: 'Tugas yang menuntut kecakapan, ketahanan, atau keberanian luar biasa dari seseorang atau suatu institusi.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Herausforderung',
        plural: 'die Herausforderungen',
        genitivSingular: 'der Herausforderung',
      },
    },
    synonyms: [
      { word: 'die Hürde', article: 'die', wordClass: 'Nomen', translation: 'rintangan / halangan' },
      { word: 'die Bewährungsprobe', article: 'die', wordClass: 'Nomen', translation: 'ujian ketahanan / pembuktian' },
      { word: 'die Erschwernis', article: 'die', wordClass: 'Nomen', translation: 'kondisi yang menyulitkan' },
      { word: 'das Wagnis', article: 'das', wordClass: 'Nomen', translation: 'keberanian menghadapi risiko' },
    ],
    antonyms: [
      { word: 'das Kinderspiel', article: 'das', wordClass: 'Nomen', translation: 'hal sepele / sangat mudah' },
      { word: 'die Routine', article: 'die', wordClass: 'Nomen', translation: 'rutinitas harian biasa' },
      { word: 'die Leichtigkeit', article: 'die', wordClass: 'Nomen', translation: 'kemudahan tanpa beban' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die Dekarbonisierung der Industrie stellt Ingenieure weltweit vor eine beispiellose technologische Herausforderung.',
        indonesian: 'Dekarbonisasi sektor industri menghadapkan para insinyur di seluruh dunia pada tantangan teknologi yang belum pernah ada sebelumnya.',
        contextNote: 'Kolokasi: "jemanden vor eine Herausforderung stellen"',
      },
      {
        level: 'C1',
        german: 'Sie nahm die neue Führungsposition im Konzern als persönliche Herausforderung mit Entschlossenheit an.',
        indonesian: 'Ia menerima posisi kepemimpinan baru di konglomerat tersebut sebagai tantangan pribadi dengan tekad membaja.',
        contextNote: 'Pengembangan karier eksekutif',
      },
    ],
    learningTips: 'Kolokasi C1 yang sangat penting: "sich einer Herausforderung stellen" (menghadapi tantangan) dan "eine Herausforderung meistern" (berhasil menaklukkan tantangan).',
    compoundBreakdown: {
      isCompound: true,
      components: [
        { part: 'heraus', wordClass: 'Adverb / Partikel', meaning: 'ke luar / tampil ke depan / mengundang', role: 'Bestimmungswort (Penjelas Depan)' },
        { part: 'fordern', wordClass: 'Verb', meaning: 'menuntut / menantang / meminta', role: 'Bestimmungswort (Penjelas Depan)' },
        { part: 'die Forderung / -ung', wordClass: 'Suffix Nomen', meaning: 'tuntutan (akhiran feminin -ung)', role: 'Grundwort (Kata Dasar Penentu)' },
      ],
      explanation: 'Herausforderung berasal dari kata kerja "herausfordern" (menantang / mengundang bertarung). Komponen "heraus-" memberi nuansa "tampil ke depan / terbuka", sedangkan "fordern" berarti "menuntut". Penambahan "-ung" membentuk kata benda feminin. Arti harfiahnya adalah "tuntutan untuk tampil ke luar" — dalam arti kiasan: "tantangan besar yang mengundang kemampuan terbaik seseorang".',
      headWordRule: 'Kaidah Tata Bahasa Jerman: Akhiran "-ung" selalu menghasilkan kata benda feminin (die). Bentuk jamak: "die Herausforderungen" (+ en).',
    } as CompoundBreakdown,
  },

  nachhaltig: {
    word: 'nachhaltig',
    displayWord: 'nachhaltig',
    ipa: '/ˈnaːxˌhaltɪç/',
    translations: ['berkelanjutan', 'lestari', 'berdampak panjang dan mendalam'],
    meaningSummary: 'Berorientasi pada pelestarian jangka panjang tanpa merusak masa depan, atau memberikan pengaruh yang berbekas lama.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'nachhaltig',
        komparativ: 'nachhaltiger',
        superlativ: 'am nachhaltigsten',
      },
    },
    synonyms: [
      { word: 'zukunftsfähig', wordClass: 'Adjektiv', translation: 'layak untuk masa depan' },
      { word: 'dauerhaft', wordClass: 'Adjektiv', translation: 'tahan lama / permanen' },
      { word: 'umweltverträglich', wordClass: 'Adjektiv', translation: 'ramah lingkungan / selaras alam' },
      { word: 'fundiert', wordClass: 'Adjektiv', translation: 'kokoh berakar' },
    ],
    antonyms: [
      { word: 'kurzlebig', wordClass: 'Adjektiv', translation: 'berumur pendek / sesaat' },
      { word: 'verschwenderisch', wordClass: 'Adjektiv', translation: 'boros / mengeksploitasi' },
      { word: 'flüchtig', wordClass: 'Adjektiv', translation: 'singkat cepat lenyap' },
      { word: 'oberflächlich', wordClass: 'Adjektiv', translation: 'dangkal tanpa bekas' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Wirtschaftliches Handeln muss künftig mit ökologisch nachhaltigen Prinzipien in Einklang gebracht werden.',
        indonesian: 'Aktivitas perekonomian di masa depan wajib diselaraskan dengan prinsip-prinsip yang berkelanjutan secara ekologis.',
        contextNote: 'Diskursus pembangunan ekonomi dan ekologi C1',
      },
      {
        level: 'C1',
        german: 'Diese bahnbrechende Reform hat die Bildungslandschaft des Landes nachhaltig geprägt.',
        indonesian: 'Reformasi terobosan ini telah meninggalkan jejak pengaruh yang mendalam dan berjangka panjang pada dunia pendidikan negeri tersebut.',
        contextNote: 'Makna "memberi dampak jangka panjang"',
      },
    ],
    learningTips: 'Perhatikan 2 makna utama: 1) Ekologis/Sustainability (berkelanjutan), 2) Pengaruh mendalam yang berlangsung lama (lasting impact). Bentuk nominanya adalah "die Nachhaltigkeit".',
  },

  beeinträchtigen: {
    word: 'beeinträchtigen',
    displayWord: 'beeinträchtigen',
    ipa: '/bəˈʔaɪ̯nˌtʁɛçtɪɡn̩/',
    translations: ['merugikan', 'mengganggu', 'memberi dampak buruk', 'memperlemah'],
    meaningSummary: 'Mengurangi kualitas, kinerja, kenyamanan, atau kebebasan sesuatu secara negatif.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'beeinträchtigen',
        praesens: 'beeinträchtigt',
        praeteritum: 'beeinträchtigte',
        partizip2: 'beeinträchtigt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'schmälern', wordClass: 'Verb', translation: 'mengurangi / mereduksi' },
      { word: 'stören', wordClass: 'Verb', translation: 'mengganggu' },
      { word: 'hemmen', wordClass: 'Verb', translation: 'menghambat pergerakan' },
      { word: 'negativ beeinflussen', wordClass: 'Verb', translation: 'mempengaruhi secara buruk' },
    ],
    antonyms: [
      { word: 'fördern', wordClass: 'Verb', translation: 'mendorong kemajuan' },
      { word: 'begünstigen', wordClass: 'Verb', translation: 'menguntungkan / mempermudah' },
      { word: 'verbessern', wordClass: 'Verb', translation: 'memperbaiki mutu' },
      { word: 'stärken', wordClass: 'Verb', translation: 'memperkuat' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Chronischer Schlafmangel beeinträchtigt die kognitive Leistungsfähigkeit und Entscheidungsfindung erheblich.',
        indonesian: 'Kurang tidur kronis merugikan dan mengganggu kapasitas performa kognitif serta proses pengambilan keputusan secara signifikan.',
        contextNote: 'Analisis medis dan psikologi kognitif',
      },
      {
        level: 'C1',
        german: 'Unerwartete Lieferengpässe haben den termingerechten Produktionsablauf empfindlich beeinträchtigt.',
        indonesian: 'Kemacetan pasokan yang tak terduga telah sangat mengganggu kelancaran jadwal produksi.',
        contextNote: 'Konteks manajemen rantai pasok industri',
      },
    ],
    learningTips: 'Kata kerja transitif yang menuntut objek Akkusativ langsung: "etwas [Akk] beeinträchtigen". Prefiks "be-" tidak terpisahkan, sehingga Partizip II tetap "beeinträchtigt" (tanpa ge-).',
  },

  angemessen: {
    word: 'angemessen',
    displayWord: 'angemessen',
    ipa: '/ˈanɡəˌmɛsn̩/' ,
    translations: ['layak', 'pantas', 'proporsional', 'memadai'],
    meaningSummary: 'Sesuai dengan situasi, kebutuhan, atau standar kepatutan yang adil.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'angemessen',
        komparativ: 'angemessener',
        superlativ: 'am angemessensten',
      },
    },
    synonyms: [
      { word: 'adäquat', wordClass: 'Adjektiv', translation: 'memadai / adekuat' },
      { word: 'angebracht', wordClass: 'Adjektiv', translation: 'tepat pada tempatnya' },
      { word: 'verhältnismäßig', wordClass: 'Adjektiv', translation: 'proporsional' },
      { word: 'gebührend', wordClass: 'Adjektiv', translation: 'sebagaimana mestinya' },
    ],
    antonyms: [
      { word: 'unangemessen', wordClass: 'Adjektiv', translation: 'tidak pantas / tidak layak' },
      { word: 'übertrieben', wordClass: 'Adjektiv', translation: 'berlebihan' },
      { word: 'unverhältnismäßig', wordClass: 'Adjektiv', translation: 'tidak proporsional' },
      { word: 'deplatziert', wordClass: 'Adjektiv', translation: 'salah tempat / canggung' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Für eine derart verantwortungsvolle Position ist eine angemessene Vergütung unumgänglich.',
        indonesian: 'Untuk posisi yang sarat tanggung jawab seperti ini, kompensasi gaji yang layak mutlak diperlukan.',
        contextNote: 'Perundingan kontrak kerja profesional',
      },
      {
        level: 'C1',
        german: 'Der Sicherheitsrat forderte alle Parteien auf, mit angemessener Zurückhaltung zu reagieren.',
        indonesian: 'Dewan Keamanan mendesak semua pihak untuk merespons dengan menahan diri secara proporsional.',
        contextNote: 'Pernyataan resolusi diplomatik',
      },
    ],
    learningTips: 'Sering dikonstruksikan dengan Dativ: "einer Sache [Dat] angemessen sein" (layak/sesuai dengan suatu hal). Lawan katanya sangat produktif dengan prefiks un-: "unangemessen".',
  },

  widerspiegeln: {
    word: 'widerspiegeln',
    displayWord: 'widerspiegeln',
    ipa: '/ˈviːdɐˌʃpiːɡl̩n/',
    translations: ['mencerminkan', 'merefleksikan', 'menggambarkan kembali'],
    meaningSummary: 'Memperlihatkan atau menjadi cerminan dari kondisi batiniah, sosial, atau fakta tertentu.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'widerspiegeln',
        praesens: 'spiegelt wider',
        praeteritum: 'spiegelte wider',
        partizip2: 'widergespiegelt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: true,
        prefix: 'wider',
      },
    },
    synonyms: [
      { word: 'reflektieren', wordClass: 'Verb', translation: 'merefleksikan' },
      { word: 'abbilden', wordClass: 'Verb', translation: 'menggambarkan' },
      { word: 'zum Ausdruck bringen', wordClass: 'Verb', translation: 'mengekspresikan / menyuarakan' },
      { word: 'repräsentieren', wordClass: 'Verb', translation: 'mewakili representasi' },
    ],
    antonyms: [
      { word: 'verzerren', wordClass: 'Verb', translation: 'mendistorsi citra' },
      { word: 'verfälschen', wordClass: 'Verb', translation: 'memalsukan fakta' },
      { word: 'verbergen', wordClass: 'Verb', translation: 'menyembunyikan' },
      { word: 'verschleiern', wordClass: 'Verb', translation: 'menutup-nutupi' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die jüngsten Umfrageergebnisse spiegeln die tiefe Skepsis der Bürger gegenüber den Reformen wider.',
        indonesian: 'Hasil jajak pendapat terbaru mencerminkan skeptisisme mendalam warga terhadap rencana reformasi tersebut.',
        contextNote: 'Analisis sosiopolitik',
      },
      {
        level: 'C1',
        german: 'In der Architektur des neuen Museums spiegelt sich die reiche Kulturgeschichte der Region wider.',
        indonesian: 'Dalam arsitektur museum baru tersebut, tercermin kekayaan sejarah budaya kawasan itu.',
        contextNote: 'Bentuk refleksif: "sich widerspiegeln"',
      },
    ],
    learningTips: 'Kata kerja terpisah (trennbar): pada klausa utama (Hauptsatz) prefiks "wider" diletakkan di akhir kalimat ("...spiegelt wider"). Partizip II: "widergespiegelt".',
  },

  sachverhalt: {
    word: 'Sachverhalt',
    displayWord: 'der Sachverhalt',
    ipa: '/ˈzaxfɛɐ̯ˌhalt/',
    translations: ['duduk perkara', 'fakta keadaan sebenarnya', 'kronologi fakta kejadian'],
    meaningSummary: 'Rangkaian fakta obyektif yang menyusun suatu peristiwa atau perkara faktual.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Sachverhalt',
        plural: 'die Sachverhalte',
        genitivSingular: 'des Sachverhaltes / des Sachverhalts',
      },
    },
    synonyms: [
      { word: 'die Faktenlage', article: 'die', wordClass: 'Nomen', translation: 'situasi fakta sebenarnya' },
      { word: 'die Gegebenheiten', article: 'die', wordClass: 'Nomen', translation: 'keadaan-keadaan obyektif' },
      { word: 'der Tatbestand', article: 'der', wordClass: 'Nomen', translation: 'unsur perbuatan hukum' },
    ],
    antonyms: [
      { word: 'die Fiktion', article: 'die', wordClass: 'Nomen', translation: 'fiksi / karangan' },
      { word: 'das Gerücht', article: 'das', wordClass: 'Nomen', translation: 'desas-desus / rumor' },
      { word: 'die Mutmaßung', article: 'die', wordClass: 'Nomen', translation: 'dugaan tanpa bukti' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Um Fehlentscheidungen auszuschließen, muss das Gericht den zugrunde liegenden Sachverhalt akribisch prüfen.',
        indonesian: 'Guna mencegah kekeliruan vonis, pengadilan harus memeriksa duduk perkara yang mendasarinya secara amat teliti.',
        contextNote: 'Proses peradilan hukum formal',
      },
      {
        level: 'C1',
        german: 'Der Untersuchungsbericht stellt den Sachverhalt sachlich und ohne ideologische Färbung dar.',
        indonesian: 'Laporan penyelidikan tersebut memaparkan fakta kejadian secara obyektif dan tanpa bias ideologis.',
        contextNote: 'Jurnalisme investigatif dan laporan forensik',
      },
    ],
    learningTips: 'Kombinasi kata: "die Sache" (hal/perkara) + "das Verhalten" (keadaan berlangsung). Kolokasi penting C1: "den Sachverhalt aufklären" (mengungkap duduk perkara).',
  },

  berücksichtigen: {
    word: 'berücksichtigen',
    displayWord: 'berücksichtigen',
    ipa: '/bəˈʁʏkˌzɪçtɪɡn̩/',
    translations: ['mempertimbangkan', 'memperhitungkan', 'mengindahkan'],
    meaningSummary: 'Memasukkan suatu faktor atau keadaan ke dalam pertimbangan saat mengambil keputusan atau menarik simpulan.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'berücksichtigen',
        praesens: 'berücksichtigt',
        praeteritum: 'berücksichtigte',
        partizip2: 'berücksichtigt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'in Betracht ziehen', wordClass: 'Verb', translation: 'mempertimbangkan' },
      { word: 'beachten', wordClass: 'Verb', translation: 'memperhatikan dengan seksama' },
      { word: 'einbeziehen', wordClass: 'Verb', translation: 'mengikutsertakan dalam kalkulasi' },
    ],
    antonyms: [
      { word: 'ignorieren', wordClass: 'Verb', translation: 'mengabaikan sepenuhnya' },
      { word: 'übergehen', wordClass: 'Verb', translation: 'melangkahi / melewatkan' },
      { word: 'vernachlässigen', wordClass: 'Verb', translation: 'menelantarkan' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Bei der Vergabe öffentlicher Aufträge müssen ökologische Kriterien zwingend berücksichtigt werden.',
        indonesian: 'Dalam tender proyek publik, kriteria ekologis wajib dipertimbangkan secara mengikat.',
        contextNote: 'Pengadaan barang dan jasa pemerintah',
      },
      {
        level: 'C1',
        german: 'Wir haben alle denkbaren Risikofaktoren in unserem Prognosemodell berücksichtigt.',
        indonesian: 'Kami telah memperhitungkan seluruh faktor risiko yang terbayangkan ke dalam model proyeksi kami.',
        contextNote: 'Model statistik dan analisa risiko kuantitatif',
      },
    ],
    learningTips: 'Memerlukan objek Akkusativ: "etwas [Akk] berücksichtigen". Bentuk kata bendanya adalah "die Berücksichtigung".',
  },

  gewährleisten: {
    word: 'gewährleisten',
    displayWord: 'gewährleisten',
    ipa: '/ɡəˈveːɐ̯ˌlaɪ̯stn̩/',
    translations: ['menjamin', 'memastikan kepastian', 'memberikan garansi keandalan'],
    meaningSummary: 'Memberikan jaminan pasti bahwa sesuatu akan berfungsi aman atau terlaksana dengan sempurna.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'gewährleisten',
        praesens: 'gewährleistet',
        praeteritum: 'gewährleistete',
        partizip2: 'gewährleistet',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'sicherstellen', wordClass: 'Verb', translation: 'memastikan / mengamankan' },
      { word: 'garantieren', wordClass: 'Verb', translation: 'menggaransi / menjamin' },
      { word: 'verbürgen', wordClass: 'Verb', translation: 'menjadi penjamin' },
    ],
    antonyms: [
      { word: 'gefährden', wordClass: 'Verb', translation: 'membahayakan kepastian' },
      { word: 'aufs Spiel setzen', wordClass: 'Verb', translation: 'mempertaruhkan dengan ceroboh' },
      { word: 'untergraben', wordClass: 'Verb', translation: 'merongrong stabilitas' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Strikte Qualitätskontrollen gewährleisten die Zuverlässigkeit unserer medizinischen Geräte.',
        indonesian: 'Kontrol mutu yang ketat menjamin keandalan perangkat medis produksi kami.',
        contextNote: 'Sertifikasi industri medis',
      },
      {
        level: 'C1',
        german: 'Der Staat muss die Meinungsfreiheit aller Bürger bedingungslos gewährleisten.',
        indonesian: 'Negara harus menjamin kebebasan berpendapat seluruh warga negaranya tanpa syarat.',
        contextNote: 'Hukum tata negara dan hak asasi',
      },
    ],
    learningTips: 'Dalam bahasa Jerman baku kontemporer, kata kerja ini TIDAK dipisah: "er gewährleistet" (bukan "er leistet Gewähr"). Partizip II: "gewährleistet".',
  },

  einschätzen: {
    word: 'einschätzen',
    displayWord: 'einschätzen',
    ipa: '/ˈaɪ̯nˌʃɛtsn̩/',
    translations: ['menilai', 'memperkirakan', 'menaksir kapasitas'],
    meaningSummary: 'Membentuk pertimbangan atau estimasi terukur tentang kualitas, nilai, atau kemungkinan suatu hal.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'einschätzen',
        praesens: 'schätzt ein',
        praeteritum: 'schätzte ein',
        partizip2: 'eingeschätzt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: true,
        prefix: 'ein',
      },
    },
    synonyms: [
      { word: 'beurteilen', wordClass: 'Verb', translation: 'menilai / mengadili' },
      { word: 'bewerten', wordClass: 'Verb', translation: 'mengevaluasi' },
      { word: 'taxieren', wordClass: 'Verb', translation: 'menaksir taksiran' },
    ],
    antonyms: [
      { word: 'verkennen', wordClass: 'Verb', translation: 'salah menilai sama sekali' },
      { word: 'unterschätzen', wordClass: 'Verb', translation: 'meremehkan' },
      { word: 'überschätzen', wordClass: 'Verb', translation: 'menaksir terlalu tinggi' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Führende Wirtschaftswissenschaftler schätzen die Rezessionsgefahr als überaus hoch ein.',
        indonesian: 'Pakar ekonomi terkemuka menilai bahaya resesi berada pada tingkat yang teramat tinggi.',
        contextNote: 'Prediksi makroekonomi',
      },
      {
        level: 'C1',
        german: 'Es fällt Außenstehenden schwer, die tatsächlichen Kompetenzen des Teams realistisch einzuschätzen.',
        indonesian: 'Pihak luar merasa sulit untuk menaksir kompetensi nyata dari tim tersebut secara realistis.',
        contextNote: 'Evaluasi sumber daya manusia',
      },
    ],
    learningTips: 'Trennbares Verb dengan huruf Umlaut "ä". Kata bendanya adalah "die Einschätzung" (estimasi/penilaian).',
  },

  // ==========================================
  // LEVEL C2 (ANNÄHERND MUTTERSPRACHLICH)
  // ==========================================
  unumgänglich: {
    word: 'unumgänglich',
    displayWord: 'unumgänglich',
    ipa: '/ˈʊnʔʊmˌɡɛŋlɪç/',
    translations: ['tak terelakkan', 'mutlak diperlukan', 'tak dapat disangkal keharusannya'],
    meaningSummary: 'Kondisi atau tindakan yang mutlak tak dapat dihindari atau dikesampingkan dengan cara apa pun.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'unumgänglich',
        komparativ: 'unumgänglicher',
        superlativ: 'am unumgänglichsten',
      },
    },
    synonyms: [
      { word: 'unvermeidlich', wordClass: 'Adjektiv', translation: 'tak terhindarkan' },
      { word: 'zwingend erforderlich', wordClass: 'Adjektiv', translation: 'wajib mutlak diperlukan' },
      { word: 'unabdingbar', wordClass: 'Adjektiv', translation: 'tidak dapat ditiadakan' },
      { word: 'essenziell', wordClass: 'Adjektiv', translation: 'sangat esensial' },
    ],
    antonyms: [
      { word: 'vermeidbar', wordClass: 'Adjektiv', translation: 'dapat dihindari' },
      { word: 'entbehrlich', wordClass: 'Adjektiv', translation: 'dapat ditiadakan' },
      { word: 'fakultativ', wordClass: 'Adjektiv', translation: 'opsional / pilihan suka rela' },
      { word: 'verzichtbar', wordClass: 'Adjektiv', translation: 'bisa dilewati' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Angesichts der dramatisch schrumpfenden Finanzreserven ist eine tiefgreifende Haushaltskonsolidierung unumgänglich geworden.',
        indonesian: 'Mengingat cadangan keuangan yang menyusut secara dramatis, konsolidasi anggaran yang mendalam telah menjadi tak terelakkan.',
        contextNote: 'Kebijakan makrofinansial negara',
      },
      {
        level: 'C2',
        german: 'Echte Kompromissbereitschaft ist eine unumgängliche Voraussetzung für den Erfolg multilateraler Verhandlungen.',
        indonesian: 'Kesediaan berkompromi yang tulus merupakan prasyarat mutlak yang tak terelakkan bagi keberhasilan perundingan multilateral.',
        contextNote: 'Diplomasi internasional puncak',
      },
    ],
    learningTips: 'Karakteristik tingkat C2: turunan dari "umgehen" (menghindari) dengan prefiks un- dan sufiks -lich. Menunjukkan keniscayaan yang mutlak.',
  },

  akribisch: {
    word: 'akribisch',
    displayWord: 'akribisch',
    ipa: '/aˈkʁiːbɪʃ/',
    translations: ['amat sangat cermat', 'teliti hingga detail terkecil', 'tanpa celah kekeliruan'],
    meaningSummary: 'Bekerja atau memeriksa sesuatu dengan perhatian luar biasa mendalam terhadap rincian sekecil apa pun.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'akribisch',
        komparativ: 'akribischer',
        superlativ: 'am akribischsten',
      },
    },
    synonyms: [
      { word: 'minuziös', wordClass: 'Adjektiv', translation: 'amat sangat terperinci' },
      { word: 'peinlich genau', wordClass: 'Adjektiv', translation: 'sangat teliti tanpa toleransi eror' },
      { word: 'haarklein', wordClass: 'Adjektiv', translation: 'sampai ke rincian sehelai rambut' },
      { word: 'penibel', wordClass: 'Adjektiv', translation: 'sangat ketat dalam ketelitian' },
    ],
    antonyms: [
      { word: 'oberflächlich', wordClass: 'Adjektiv', translation: 'dangkal / sepintas lalu' },
      { word: 'schlampig', wordClass: 'Adjektiv', translation: 'serampangan / acak-acakan' },
      { word: 'nachlässig', wordClass: 'Adjektiv', translation: 'lalai / ceroboh' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die Historikerin rekonstruierte das Manuskript anhand akribischer paläografischer Untersuchungen.',
        indonesian: 'Sejarawan tersebut merekonstruksi manuskrip kuno itu berlandaskan penelitian paleografi yang amat sangat cermat.',
        contextNote: 'Kajian filologi dan manuskrip sejarah C2',
      },
      {
        level: 'C2',
        german: 'Seine akribische Beweisführung überzeugte selbst die skeptischsten Geschworenen im Saal.',
        indonesian: 'Pembuktiannya yang tersusun amat teliti hingga ke rincian terkecil meyakinkan bahkan juri yang paling skeptis di ruang sidang.',
        contextNote: 'Sidang peradilan yudisial',
      },
    ],
    learningTips: 'Berasal dari bahasa Yunani "akribeia" (ketepatan dan kecermatan mutlak). Sangat dihargai dalam penulisan esai akademis dan laporan penyelidikan resmi.',
  },

  diskrepanz: {
    word: 'Diskrepanz',
    displayWord: 'die Diskrepanz',
    ipa: '/dɪskʁeˈpant͡s/',
    translations: ['kesenjangan mencolok', 'ketidaksesuaian tajam', 'diskrepansi jurang pemisah'],
    meaningSummary: 'Perbedaan atau ketidakharmonisan yang tajam dan kontras antara dua fakta, klaim, atau kenyataan.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Diskrepanz',
        plural: 'die Diskrepanzen',
        genitivSingular: 'der Diskrepanz',
      },
    },
    synonyms: [
      { word: 'die Kluft', article: 'die', wordClass: 'Nomen', translation: 'jurang pemisah yang dalam' },
      { word: 'die Abweichung', article: 'die', wordClass: 'Nomen', translation: 'deviasi / penyimpangan' },
      { word: 'der Widerspruch', article: 'der', wordClass: 'Nomen', translation: 'kontradiksi' },
      { word: 'die Inkongruenz', article: 'die', wordClass: 'Nomen', translation: 'ketidaksesuaian logis' },
    ],
    antonyms: [
      { word: 'die Übereinstimmung', article: 'die', wordClass: 'Nomen', translation: 'kesesuaian / keselarasan' },
      { word: 'der Einklang', article: 'der', wordClass: 'Nomen', translation: 'keharmonisan utuh' },
      { word: 'die Kongruenz', article: 'die', wordClass: 'Nomen', translation: 'kesebangunan sempurna' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Zwischen den hehren Absichtserklärungen der Regierung und deren realpolitischem Handeln klafft eine eklatante Diskrepanz.',
        indonesian: 'Antara deklarasi niat mulia pemerintah dan implementasi kebijakan riil mereka terbentang jurang kesenjangan yang teramat mencolok.',
        contextNote: 'Kolokasi khas C2: "eine Diskrepanz klafft"',
      },
      {
        level: 'C2',
        german: 'Die Wirtschaftsprüfer deckten eine gravierende Diskrepanz zwischen Inventurdaten und Bilanzposten auf.',
        indonesian: 'Auditor independen membongkar kesenjangan serius antara data inventaris fisik dan pos-pos neraca keuangan.',
        contextNote: 'Audit forensik korporat',
      },
    ],
    learningTips: 'Kolokasi idiomatik C2 tingkat tinggi yang wajib dihafal: "eine Diskrepanz klafft" (jurang kesenjangan menganga/terbentang).',
  },

  sukzessive: {
    word: 'sukzessive',
    displayWord: 'sukzessive',
    ipa: '/zʊkt͡sɛˈsiːvə/',
    translations: ['berangsur-angsur', 'bertahap langkah demi langkah', 'sedikit demi sedikit secara beruntun'],
    meaningSummary: 'Terjadi atau dilaksanakan berturut-turut secara bertahap dalam kurun waktu tertentu tanpa lompatan drastis.',
    wordClass: 'Adverb',
    cefrLevel: 'C2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Adverb waktu dan modalitas (dapat pula difungsikan sebagai adjektiv atributif).',
      },
    },
    synonyms: [
      { word: 'allmählich', wordClass: 'Adverb', translation: 'perlahan-lahan' },
      { word: 'schrittweise', wordClass: 'Adverb', translation: 'langkah demi langkah' },
      { word: 'fortlaufend', wordClass: 'Adverb', translation: 'berkelanjutan teratur' },
      { word: 'graduell', wordClass: 'Adverb', translation: 'gradual' },
    ],
    antonyms: [
      { word: 'schlagartig', wordClass: 'Adverb', translation: 'seketika kilat / mendadak serentak' },
      { word: 'abrupt', wordClass: 'Adverb', translation: 'tiba-tiba dan mendadak' },
      { word: 'auf einen Schlag', wordClass: 'Adverb', translation: 'dalam satu dobrakan instan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die alten Atomkraftwerke wurden im Zuge der Energiewende über mehrere Jahre hinweg sukzessive stillgelegt.',
        indonesian: 'Pembangkit listrik tenaga nuklir lama dipadamkan dan dinonaktifkan secara bertahap berangsur-angsur selama beberapa tahun dalam kerangka transisi energi.',
        contextNote: 'Transformasi energi nasional',
      },
      {
        level: 'C2',
        german: 'Durch konsequentes Mentoring eignete sich die Nachwuchskraft sukzessive alle unternehmerischen Kernkompetenzen an.',
        indonesian: 'Melalui bimbingan mentor yang konsisten, staf muda itu menguasai seluruh kompetensi inti kepemimpinan bisnis secara bertahap.',
        contextNote: 'Regenerasi manajemen eksekutif',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "succedere" (mengikuti berikutnya). Kata ini memberikan nuansa formal, elegan, dan intelektual dalam teks eksposisi.',
  },

  fadenscheinig: {
    word: 'fadenscheinig',
    displayWord: 'fadenscheinig',
    ipa: '/ˈfaːdn̩ˌʃaɪ̯nɪç/',
    translations: ['dibuat-buat', 'rapuh / tidak meyakinkan', 'terlalu kentara kepalsuannya'],
    meaningSummary: 'Argumen atau dalih yang begitu lemah dan dangkal sehingga mudah dipatahkan dan disingkap kepalsuannya.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'fadenscheinig',
        komparativ: 'fadenscheiniger',
        superlativ: 'am fadenscheinigsten',
      },
    },
    synonyms: [
      { word: 'haltlos', wordClass: 'Adjektiv', translation: 'tanpa dasar pijakan kuat' },
      { word: 'durchschaubar', wordClass: 'Adjektiv', translation: 'mudah ditebak akal-akalannya' },
      { word: 'vorgeschoben', wordClass: 'Adjektiv', translation: 'dicari-cari / dalih belaka' },
      { word: 'unhaltbar', wordClass: 'Adjektiv', translation: 'tak dapat dipertahankan' },
    ],
    antonyms: [
      { word: 'stichhaltig', wordClass: 'Adjektiv', translation: 'sahih / berbobot kuat' },
      { word: 'plausibel', wordClass: 'Adjektiv', translation: 'masuk akal dan meyakinkan' },
      { word: 'fundiert', wordClass: 'Adjektiv', translation: 'berlandaskan kuat' },
      { word: 'unwiderlegbar', wordClass: 'Adjektiv', translation: 'tak terbantahkan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Der Sprecher versuchte die Vertragsbrüche mit fadenscheinigen Argumenten zu rechtfertigen, stieß jedoch auf eisige Ablehnung.',
        indonesian: 'Juru bicara berusaha membenarkan pelanggaran kontrak itu dengan argumen yang dibuat-buat dan rapuh, namun menuai penolakan dingin.',
        contextNote: 'Konflik negosiasi dagang',
      },
      {
        level: 'C2',
        german: 'Eine derart fadenscheinige Begründung hält vor keinem unabhängigen Schiedsgericht stand.',
        indonesian: 'Dalih yang sedemikian rapuh tidak akan mampu bertahan di hadapan majelis arbitrase independen mana pun.',
        contextNote: 'Sengketa peradilan arbitrase',
      },
    ],
    learningTips: 'Kiasan puitis Jerman: kain yang begitu aus sehingga benang dasarnya (Faden) tembus pandang (scheinen). Dipakai untuk alasan yang tipis kebenarannya.',
  },

  eloquenz: {
    word: 'Eloquenz',
    displayWord: 'die Eloquenz',
    ipa: '/eloˈkvɛnt͡s/',
    translations: ['kefasihan bertutur kata', 'kemahiran retorika', 'kelancaran berbahasa yang memikat'],
    meaningSummary: 'Kemahiran dan kecakapan luar biasa dalam menyusun ungkapan kata-kata secara indah, persuasif, dan memukau.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Eloquenz',
        plural: '-',
        genitivSingular: 'der Eloquenz',
      },
    },
    synonyms: [
      { word: 'die Beredsamkeit', article: 'die', wordClass: 'Nomen', translation: 'kemahiran bertutur kata' },
      { word: 'die Sprachgewandtheit', article: 'die', wordClass: 'Nomen', translation: 'kelincahan dan kecakapan berbahasa' },
      { word: 'die Redegewandtheit', article: 'die', wordClass: 'Nomen', translation: 'kelancaran seni berpidato' },
    ],
    antonyms: [
      { word: 'die Sprachlosigkeit', article: 'die', wordClass: 'Nomen', translation: 'kekelu-an / ketiadaan kata' },
      { word: 'die Wortkargheit', article: 'die', wordClass: 'Nomen', translation: 'kehematan bicara / sifat pendiam' },
      { word: 'das Schweigen', article: 'das', wordClass: 'Nomen', translation: 'kebisuan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Mit bestechender Eloquenz und rhetorischer Finesse zog die Festrednerin das anspruchsvolle Publikum in ihren Bann.',
        indonesian: 'Dengan kefasihan bertutur kata yang memukau dan kehalusan retorika, orator utama itu menghipnotis para hadirin yang berkelas.',
        contextNote: 'Pidato kehormatan kenegaraan',
      },
      {
        level: 'C2',
        german: 'Seine schriftliche Eloquenz manifestiert sich in einer Fülle stilistisch makelloser Abhandlungen.',
        indonesian: 'Kefasihan bertuturnya secara tertulis mewujud dalam limpahan risalah ilmiah yang secara gaya bahasa tanpa cela.',
        contextNote: 'Ulasan kritik sastra dan filsafat',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "eloquentia". Kata sifatnya adalah "eloquent" (fasih/pandai berbicara). Singular murni (Singularetantum - tanpa bentuk jamak).',
  },

  übervorteilen: {
    word: 'übervorteilen',
    displayWord: 'übervorteilen',
    ipa: '/ˈyːbɐˌfoːɐ̯taɪ̯ln̩/',
    translations: ['mencurangi', 'memanfaatkan kelengahan pihak lain', 'memperdaya demi laba sepihak'],
    meaningSummary: 'Mendapatkan keuntungan sepihak secara tidak adil dengan mengecoh atau memanfaatkan kelemahan mitra kontrak.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'übervorteilen',
        praesens: 'übervorteilt',
        praeteritum: 'übervorteilte',
        partizip2: 'übervorteilt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'benachteiligen', wordClass: 'Verb', translation: 'merugikan pihak lain' },
      { word: 'hintergehen', wordClass: 'Verb', translation: 'mengelabui di belakang layar' },
      { word: 'ausnutzen', wordClass: 'Verb', translation: 'memanfaatkan secara licik' },
      { word: 'betrügen', wordClass: 'Verb', translation: 'menipu secara langsung' },
    ],
    antonyms: [
      { word: 'fair behandeln', wordClass: 'Verb', translation: 'memperlakukan secara adil' },
      { word: 'begünstigen', wordClass: 'Verb', translation: 'memberi faedah keuntungan' },
      { word: 'unterstützen', wordClass: 'Verb', translation: 'mendukung secara transparan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Rechtliche Rahmenbedingungen müssen verhindern, dass marktbeherrschende Konzerne schwächere Zulieferer skrupellos übervorteilen.',
        indonesian: 'Kerangka regulasi hukum harus mencegah konglomerat penguasa pasar mencurangi para pemasok kecil tanpa nurani demi keuntungan sepihak.',
        contextNote: 'Hukum persaingan usaha dan antimonopoli',
      },
      {
        level: 'C2',
        german: 'Er fühlte sich beim Notartermin vom Käufer übervorteilt, da wesentliche Klauseln verschwiegen worden waren.',
        indonesian: 'Ia merasa dicurangi oleh pembeli saat janji temu di hadapan notaris karena klausul-klausul esensial sempat disembunyikan.',
        contextNote: 'Transaksi perdata akta notaris',
      },
    ],
    learningTips: 'Untrennbar (tidak dapat dipisah): prefiks "über-" melekat tetap, Partizip II adalah "übervorteilt" (tanpa awalan ge-). Memerlukan Akkusativ: "jemanden [Akk] übervorteilen".',
  },

  prägnant: {
    word: 'prägnant',
    displayWord: 'prägnant',
    ipa: '/pʁɛˈɡnant/',
    translations: ['padat dan tepat sasaran', 'ringkas bernas', 'mengena pada inti masalah'],
    meaningSummary: 'Disampaikan secara singkat, lugas, dan mengena tanpa bertele-tele namun sarat substansi penting.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'prägnant',
        komparativ: 'prägnanter',
        superlativ: 'am prägnantesten',
      },
    },
    synonyms: [
      { word: 'treffend', wordClass: 'Adjektiv', translation: 'tepat sasaran' },
      { word: 'bündig', wordClass: 'Adjektiv', translation: 'ringkas padat' },
      { word: 'pointiert', wordClass: 'Adjektiv', translation: 'tajam dan terarah' },
      { word: 'auf den Punkt gebracht', wordClass: 'Adjektiv', translation: 'langsung menyasar pokok masalah' },
    ],
    antonyms: [
      { word: 'weitschweifig', wordClass: 'Adjektiv', translation: 'bertele-tele / berpanjang kata' },
      { word: 'ausufernd', wordClass: 'Adjektiv', translation: 'melebar ke mana-mana' },
      { word: 'langatmig', wordClass: 'Adjektiv', translation: 'menjemukan dan berlarut-larut' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die Kernaussage der komplexen Studie wurde in drei prägnanten Leitsätzen zusammengefasst.',
        indonesian: 'Pernyataan inti dari riset yang rumit tersebut dirangkum ke dalam tiga butir pedoman yang padat dan tepat sasaran.',
        contextNote: 'Publikasi ringkasan eksekutif penelitian',
      },
      {
        level: 'C2',
        german: 'Ihre prägnante Formulierung verhinderte jegliche missverständliche Auslegung des Vertragstextes.',
        indonesian: 'Perumusannya yang ringkas dan bernas mencegah penafsiran keliru apa pun terhadap naskah perjanjian itu.',
        contextNote: 'Penyusunan naskah hukum kontrak',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "praegnans" (sarat/penuh isi). Kata bendanya adalah "die Prägnanz". Ciri penulisan bahasa Jerman tingkat tinggi.',
  },

  abwägen: {
    word: 'abwägen',
    displayWord: 'abwägen',
    ipa: '/ˈapˌvɛːɡn̩/',
    translations: ['menimbang-nimbang secara matang', 'membandingkan untung-rugi seksama'],
    meaningSummary: 'Mempertimbangkan dan menilai berbagai argumen atau risiko sebelum mengambil keputusan krusial.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'abwägen',
        praesens: 'wägt ab',
        praeteritum: 'wog ab / wägte ab',
        partizip2: 'abgewogen / abgewägt',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: true,
        prefix: 'ab',
      },
    },
    synonyms: [
      { word: 'austarieren', wordClass: 'Verb', translation: 'menyeimbangkan takaran' },
      { word: 'gegeneinander halten', wordClass: 'Verb', translation: 'membandingkan satu sama lain' },
      { word: 'überdenken', wordClass: 'Verb', translation: 'merenungkan secara matang' },
    ],
    antonyms: [
      { word: 'überstürzen', wordClass: 'Verb', translation: 'terburu-buru / gegabah mengambil keputusan' },
      { word: 'vorschnell handeln', wordClass: 'Verb', translation: 'bertindak tergesa tanpa perhitungan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Das Bundesverfassungsgericht wog das Recht auf informationelle Selbstbestimmung gegen staatliche Sicherheitsinteressen penibel ab.',
        indonesian: 'Mahkamah Konstitusi menimbang hak privasi data pribadi melawan kepentingan keamanan negara dengan kecermatan yudisial tertinggi.',
        contextNote: 'Yurisprudensi hukum tata negara',
      },
      {
        level: 'C2',
        german: 'Vor einer Akquisition dieser Größenordnung müssen Chancen und Risiken akribisch abgewogen werden.',
        indonesian: 'Sebelum melakukan akuisisi sebesar ini, seluruh peluang dan risiko harus ditimbang secara seksama.',
        contextNote: 'Keputusan merger dan akuisisi bisnis',
      },
    ],
    learningTips: 'Trennbares Verb. Bentuk klasik konjugasi: wog ab, hat abgewogen. Kolokasi tetap C2: "Chancen und Risiken sorgfältig abwägen".',
  },

  plädieren: {
    word: 'plädieren',
    displayWord: 'plädieren',
    ipa: '/plɛˈdiːʁən/',
    translations: ['menganjurkan dengan tegas', 'berpihak membela', 'mengajukan pledoi'],
    meaningSummary: 'Menyampaikan argumen persuasif yang kuat dan berpihak demi terwujudnya suatu keputusan atau tindakan.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'plädieren',
        praesens: 'plädiert',
        praeteritum: 'plädierte',
        partizip2: 'plädiert',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'befürworten', wordClass: 'Verb', translation: 'mendukung usulan' },
      { word: 'sich einsetzen für', wordClass: 'Verb', translation: 'memperjuangkan demi' },
      { word: 'eintreten für', wordClass: 'Verb', translation: 'membela pendirian teguh' },
    ],
    antonyms: [
      { word: 'ablehnen', wordClass: 'Verb', translation: 'menolak usulan' },
      { word: 'bekämpfen', wordClass: 'Verb', translation: 'menentang keras / memerangi' },
      { word: 'verwerfen', wordClass: 'Verb', translation: 'mengesampingkan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Führende Umweltökonomen plädieren vehement für eine weltweite Bepreisung von CO2-Emissionen.',
        indonesian: 'Ekonom lingkungan terkemuka menganjurkan dengan amat gigih penetapan harga global atas emisi karbon.',
        contextNote: 'Kebijakan mitigasi perubahan iklim global',
      },
      {
        level: 'C2',
        german: 'Die Verteidigung plädierte in ihrem fulminanten Schlussvortrag auf vollständigen Freispruch.',
        indonesian: 'Tim pembela dalam pledoi akhirnya yang memukau menuntut pembebasan penuh bagi terdakwa.',
        contextNote: 'Pledoi sidang pidana pengadilan',
      },
    ],
    learningTips: 'Selalu berkolokasi dengan preposisi: "plädieren für + Akkusativ" (membela/menganjurkan sesuatu). Di ranah pengadilan: "plädieren auf + Akkusativ" (menuntut putusan tertentu).',
  },
};

// Common Indonesian to German translations
export const ID_TO_DE_WORDS: Record<string, string> = {
  ...EXTENDED_ID_TO_DE,
  cantik: 'schön',
  indah: 'schön',
  bagus: 'gut',
  baik: 'gut',
  meja: 'tisch',
  pergi: 'gehen',
  berjalan: 'gehen',
  berkendara: 'fahren',
  rumah: 'haus',
  makan: 'essen',
  wanita: 'frau',
  perempuan: 'frau',
  pria: 'mann',
  laki: 'mann',
  dapat: 'bekommen',
  mendapatkan: 'bekommen',
  menerima: 'bekommen',
  ingin: 'moechte',
  jerman: 'deutschland',
  prasyarat: 'voraussetzung',
  ketentuan: 'voraussetzung',
  tantangan: 'herausforderung',
  berkelanjutan: 'nachhaltig',
  lestari: 'nachhaltig',
  merugikan: 'beeinträchtigen',
  mengganggu: 'beeinträchtigen',
  pantas: 'angemessen',
  layak: 'angemessen',
  mencerminkan: 'widerspiegeln',
  fakta: 'sachverhalt',
  dudukperkara: 'sachverhalt',
  mempertimbangkan: 'berücksichtigen',
  menjamin: 'gewährleisten',
  menilai: 'einschätzen',
  takterelakkan: 'unumgänglich',
  teliti: 'akribisch',
  cermat: 'akribisch',
  kesenjangan: 'diskrepanz',
  diskrepansi: 'diskrepanz',
  bertahap: 'sukzessive',
  rapuh: 'fadenscheinig',
  kefasihan: 'eloquenz',
  mencurangi: 'übervorteilen',
  padat: 'prägnant',
  ringkas: 'prägnant',
  menimbang: 'abwägen',
  menganjurkan: 'plädieren',
};

/**
 * Comprehensive German Thesaurus (Synonyms & Antonyms Database)
 * Powers dynamic lookup for any German words across A1 - C2
 */
const RAW_THESAURUS: Record<string, {
  synonyms: SynonymItem[];
  antonyms: AntonymItem[];
  wordClass?: string;
  defaultLevel?: CEFRLevel;
}> = {
  // Verbs
  sprechen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'reden', wordClass: 'Verb', translation: 'berbicara' },
      { word: 'plaudern', wordClass: 'Verb', translation: 'mengobrol santai' },
      { word: 'äußern', wordClass: 'Verb', translation: 'mengutarakan kata' },
    ],
    antonyms: [
      { word: 'schweigen', wordClass: 'Verb', translation: 'diam / membisu' },
      { word: 'verstummen', wordClass: 'Verb', translation: 'menjadi bisu' },
    ],
  },
  schweigen: {
    wordClass: 'Verb',
    defaultLevel: 'B1',
    synonyms: [
      { word: 'still sein', wordClass: 'Verb', translation: 'tetap diam' },
      { word: 'verstummen', wordClass: 'Verb', translation: 'berhenti bersuara' },
    ],
    antonyms: [
      { word: 'sprechen', wordClass: 'Verb', translation: 'berbicara' },
      { word: 'reden', wordClass: 'Verb', translation: 'berkata-kata' },
    ],
  },
  kaufen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'erwerben', wordClass: 'Verb', translation: 'memperoleh / membeli' },
      { word: 'besorgen', wordClass: 'Verb', translation: 'mengadakan / membeli' },
    ],
    antonyms: [
      { word: 'verkaufen', wordClass: 'Verb', translation: 'menjual' },
      { word: 'veräußern', wordClass: 'Verb', translation: 'melepas aset' },
    ],
  },
  verkaufen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'veräußern', wordClass: 'Verb', translation: 'melego / menjual' },
      { word: 'anbieten', wordClass: 'Verb', translation: 'menjajakan' },
    ],
    antonyms: [
      { word: 'kaufen', wordClass: 'Verb', translation: 'membeli' },
      { word: 'erwerben', wordClass: 'Verb', translation: 'membeli / mengakuisisi' },
    ],
  },
  anfangen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'beginnen', wordClass: 'Verb', translation: 'mengawali / mulai' },
      { word: 'starten', wordClass: 'Verb', translation: 'memulai start' },
    ],
    antonyms: [
      { word: 'beenden', wordClass: 'Verb', translation: 'mengakhiri' },
      { word: 'aufhören', wordClass: 'Verb', translation: 'berhenti' },
      { word: 'abschließen', wordClass: 'Verb', translation: 'menuntaskan' },
    ],
  },
  beginnen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'anfangen', wordClass: 'Verb', translation: 'memulai' },
      { word: 'einleiten', wordClass: 'Verb', translation: 'mengawali' },
    ],
    antonyms: [
      { word: 'beenden', wordClass: 'Verb', translation: 'mengakhiri' },
      { word: 'abschließen', wordClass: 'Verb', translation: 'merampungkan' },
    ],
  },
  beenden: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'abschließen', wordClass: 'Verb', translation: 'merampungkan' },
      { word: 'aufhören', wordClass: 'Verb', translation: 'menyudahi' },
    ],
    antonyms: [
      { word: 'anfangen', wordClass: 'Verb', translation: 'memulai' },
      { word: 'beginnen', wordClass: 'Verb', translation: 'mengawali' },
    ],
  },
  gewinnen: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'siegen', wordClass: 'Verb', translation: 'meraih kemenangan' },
      { word: 'erringen', wordClass: 'Verb', translation: 'memperoleh kemenangan' },
    ],
    antonyms: [
      { word: 'verlieren', wordClass: 'Verb', translation: 'kalah / kehilangan' },
      { word: 'unterliegen', wordClass: 'Verb', translation: 'tunduk kalah' },
    ],
  },
  verlieren: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'einbüßen', wordClass: 'Verb', translation: 'kehilangan hal berharga' },
      { word: 'unterliegen', wordClass: 'Verb', translation: 'kalah bertanding' },
    ],
    antonyms: [
      { word: 'gewinnen', wordClass: 'Verb', translation: 'menang' },
      { word: 'finden', wordClass: 'Verb', translation: 'menemukan barang hilang' },
    ],
  },
  lieben: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'verehren', wordClass: 'Verb', translation: 'memuja / mencintai' },
      { word: 'schätzen', wordClass: 'Verb', translation: 'sangat menghargai' },
    ],
    antonyms: [
      { word: 'hassen', wordClass: 'Verb', translation: 'membenci' },
      { word: 'verabscheuen', wordClass: 'Verb', translation: 'muak / membenci mendalam' },
    ],
  },
  hassen: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'verabscheuen', wordClass: 'Verb', translation: 'membenci amat sangat' },
      { word: 'missbilligen', wordClass: 'Verb', translation: 'tidak menyetujui' },
    ],
    antonyms: [
      { word: 'lieben', wordClass: 'Verb', translation: 'mencintai' },
      { word: 'mögen', wordClass: 'Verb', translation: 'menyukai' },
    ],
  },
  fragen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'sich erkundigen', wordClass: 'Verb', translation: 'mencari tahu info' },
      { word: 'befragen', wordClass: 'Verb', translation: 'menanyai / menginterogasi' },
    ],
    antonyms: [
      { word: 'antworten', wordClass: 'Verb', translation: 'menjawab' },
      { word: 'erwidern', wordClass: 'Verb', translation: 'menyahut balik' },
    ],
  },
  antworten: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'erwidern', wordClass: 'Verb', translation: 'menyahut' },
      { word: 'reagieren', wordClass: 'Verb', translation: 'merespons' },
    ],
    antonyms: [
      { word: 'fragen', wordClass: 'Verb', translation: 'bertanya' },
      { word: 'schweigen', wordClass: 'Verb', translation: 'diam membisu' },
    ],
  },
  öffnen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'aufmachen', wordClass: 'Verb', translation: 'membuka' },
      { word: 'aufschließen', wordClass: 'Verb', translation: 'membuka kunci' },
    ],
    antonyms: [
      { word: 'schließen', wordClass: 'Verb', translation: 'menutup' },
      { word: 'zumachen', wordClass: 'Verb', translation: 'menutup rapat' },
    ],
  },
  schließen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'zumachen', wordClass: 'Verb', translation: 'menutup' },
      { word: 'zusperren', wordClass: 'Verb', translation: 'mengunci rapat' },
    ],
    antonyms: [
      { word: 'öffnen', wordClass: 'Verb', translation: 'membuka' },
      { word: 'aufmachen', wordClass: 'Verb', translation: 'membuka' },
    ],
  },
  lernen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'studieren', wordClass: 'Verb', translation: 'kuliah / mendalami studi' },
      { word: 'sich aneignen', wordClass: 'Verb', translation: 'menguasai ilmu' },
    ],
    antonyms: [
      { word: 'lehren', wordClass: 'Verb', translation: 'mengajar' },
      { word: 'vergessen', wordClass: 'Verb', translation: 'melupakan ilmu' },
    ],
  },
  arbeiten: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'tätig sein', wordClass: 'Verb', translation: 'beraktivitas kerja' },
      { word: 'wirken', wordClass: 'Verb', translation: 'berkarya' },
    ],
    antonyms: [
      { word: 'faulenzen', wordClass: 'Verb', translation: 'bermalas-malasan' },
      { word: 'ausruhen', wordClass: 'Verb', translation: 'beristirahat' },
    ],
  },
  schlafen: {
    wordClass: 'Verb',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'ruhen', wordClass: 'Verb', translation: 'beristirahat lelap' },
      { word: 'schlummern', wordClass: 'Verb', translation: 'tertidur pulas' },
    ],
    antonyms: [
      { word: 'wachen', wordClass: 'Verb', translation: 'terjaga / tidak tidur' },
      { word: 'aufstehen', wordClass: 'Verb', translation: 'bangun dari tidur' },
    ],
  },
  erinnern: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'gedenken', wordClass: 'Verb', translation: 'mengenang' },
      { word: 'ins Gedächtnis rufen', wordClass: 'Verb', translation: 'mengingat kembali' },
    ],
    antonyms: [
      { word: 'vergessen', wordClass: 'Verb', translation: 'melupakan' },
      { word: 'verdrängen', wordClass: 'Verb', translation: 'menyingkirkan dari ingatan' },
    ],
  },
  vergessen: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'übersehen', wordClass: 'Verb', translation: 'melewatkan' },
      { word: 'verabsäumen', wordClass: 'Verb', translation: 'melalaikan' },
    ],
    antonyms: [
      { word: 'erinnern', wordClass: 'Verb', translation: 'mengingat' },
      { word: 'behalten', wordClass: 'Verb', translation: 'mengingat di benak' },
    ],
  },
  verbessern: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'optimieren', wordClass: 'Verb', translation: 'mengoptimalkan' },
      { word: 'steigern', wordClass: 'Verb', translation: 'meningkatkan mutu' },
    ],
    antonyms: [
      { word: 'verschlechtern', wordClass: 'Verb', translation: 'memperburuk' },
      { word: 'schädigen', wordClass: 'Verb', translation: 'merusak kualitas' },
    ],
  },
  verschlechtern: {
    wordClass: 'Verb',
    defaultLevel: 'B1',
    synonyms: [
      { word: 'abwerten', wordClass: 'Verb', translation: 'mendegradasi' },
      { word: 'schwächen', wordClass: 'Verb', translation: 'memperlemah' },
    ],
    antonyms: [
      { word: 'verbessern', wordClass: 'Verb', translation: 'memperbaiki' },
      { word: 'optimieren', wordClass: 'Verb', translation: 'mengoptimalkan' },
    ],
  },
  erlauben: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'gestatten', wordClass: 'Verb', translation: 'mengizinkan' },
      { word: 'bewilligen', wordClass: 'Verb', translation: 'menyetujui permohonan' },
    ],
    antonyms: [
      { word: 'verbieten', wordClass: 'Verb', translation: 'melarang' },
      { word: 'untersagen', wordClass: 'Verb', translation: 'melarang keras' },
    ],
  },
  verbieten: {
    wordClass: 'Verb',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'untersagen', wordClass: 'Verb', translation: 'melarang secara formal' },
      { word: 'sperren', wordClass: 'Verb', translation: 'memblokir izin' },
    ],
    antonyms: [
      { word: 'erlauben', wordClass: 'Verb', translation: 'mengizinkan' },
      { word: 'gestatten', wordClass: 'Verb', translation: 'memperbolehkan' },
    ],
  },

  // Adjectives
  groß: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'riesig', wordClass: 'Adjektiv', translation: 'sangat besar / raksasa' },
      { word: 'enorm', wordClass: 'Adjektiv', translation: 'luar biasa besar' },
      { word: 'weitläufig', wordClass: 'Adjektiv', translation: 'luas lapang' },
    ],
    antonyms: [
      { word: 'klein', wordClass: 'Adjektiv', translation: 'kecil' },
      { word: 'winzig', wordClass: 'Adjektiv', translation: 'amat kecil / mungil' },
      { word: 'gering', wordClass: 'Adjektiv', translation: 'sedikit / sepele' },
    ],
  },
  klein: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'winzig', wordClass: 'Adjektiv', translation: 'mungil / sangat kecil' },
      { word: 'gering', wordClass: 'Adjektiv', translation: 'sedikit' },
    ],
    antonyms: [
      { word: 'groß', wordClass: 'Adjektiv', translation: 'besar' },
      { word: 'riesig', wordClass: 'Adjektiv', translation: 'raksasa' },
    ],
  },
  schnell: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'rasch', wordClass: 'Adjektiv', translation: 'lekas / cepat' },
      { word: 'flink', wordClass: 'Adjektiv', translation: 'tangkas / gesit' },
      { word: 'zügig', wordClass: 'Adjektiv', translation: 'lancar kilat' },
    ],
    antonyms: [
      { word: 'langsam', wordClass: 'Adjektiv', translation: 'lambat' },
      { word: 'träge', wordClass: 'Adjektiv', translation: 'lamban / malas gerak' },
    ],
  },
  langsam: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'träge', wordClass: 'Adjektiv', translation: 'lamban' },
      { word: 'gemächlich', wordClass: 'Adjektiv', translation: 'santai perlahan' },
    ],
    antonyms: [
      { word: 'schnell', wordClass: 'Adjektiv', translation: 'cepat' },
      { word: 'rasch', wordClass: 'Adjektiv', translation: 'lekas' },
    ],
  },
  schwer: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'kompliziert', wordClass: 'Adjektiv', translation: 'rumit' },
      { word: 'schwierig', wordClass: 'Adjektiv', translation: 'sulit' },
      { word: 'massiv', wordClass: 'Adjektiv', translation: 'berat berbobot' },
    ],
    antonyms: [
      { word: 'leicht', wordClass: 'Adjektiv', translation: 'ringan / mudah' },
      { word: 'einfach', wordClass: 'Adjektiv', translation: 'sederhana' },
    ],
  },
  leicht: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'einfach', wordClass: 'Adjektiv', translation: 'mudah / sederhana' },
      { word: 'mühelos', wordClass: 'Adjektiv', translation: 'tanpa susah payah' },
    ],
    antonyms: [
      { word: 'schwer', wordClass: 'Adjektiv', translation: 'berat / sulit' },
      { word: 'schwierig', wordClass: 'Adjektiv', translation: 'rumit' },
    ],
  },
  einfach: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'simpel', wordClass: 'Adjektiv', translation: 'sederhana' },
      { word: 'unkompliziert', wordClass: 'Adjektiv', translation: 'tidak rumit' },
    ],
    antonyms: [
      { word: 'kompliziert', wordClass: 'Adjektiv', translation: 'rumit' },
      { word: 'schwierig', wordClass: 'Adjektiv', translation: 'sulit' },
    ],
  },
  schwierig: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'kompliziert', wordClass: 'Adjektiv', translation: 'rumit' },
      { word: 'anspruchsvoll', wordClass: 'Adjektiv', translation: 'menuntut keahlian' },
    ],
    antonyms: [
      { word: 'einfach', wordClass: 'Adjektiv', translation: 'mudah' },
      { word: 'leicht', wordClass: 'Adjektiv', translation: 'ringan' },
    ],
  },
  teuer: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'kostspielig', wordClass: 'Adjektiv', translation: 'berbiaya tinggi' },
      { word: 'wertvoll', wordClass: 'Adjektiv', translation: 'berharga mahal' },
    ],
    antonyms: [
      { word: 'billig', wordClass: 'Adjektiv', translation: 'murah' },
      { word: 'günstig', wordClass: 'Adjektiv', translation: 'terjangkau hemat' },
      { word: 'preiswert', wordClass: 'Adjektiv', translation: 'sebanding harganya' },
    ],
  },
  billig: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'günstig', wordClass: 'Adjektiv', translation: 'terjangkau' },
      { word: 'preiswert', wordClass: 'Adjektiv', translation: 'hemat' },
    ],
    antonyms: [
      { word: 'teuer', wordClass: 'Adjektiv', translation: 'mahal' },
      { word: 'kostspielig', wordClass: 'Adjektiv', translation: 'berbiaya tinggi' },
    ],
  },
  warm: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'heiß', wordClass: 'Adjektiv', translation: 'panas' },
      { word: 'mild', wordClass: 'Adjektiv', translation: 'hangat sejuk' },
    ],
    antonyms: [
      { word: 'kalt', wordClass: 'Adjektiv', translation: 'dingin' },
      { word: 'kühl', wordClass: 'Adjektiv', translation: 'sejuk dingin' },
      { word: 'frostig', wordClass: 'Adjektiv', translation: 'membeku' },
    ],
  },
  kalt: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'kühl', wordClass: 'Adjektiv', translation: 'dingin sejuk' },
      { word: 'frostig', wordClass: 'Adjektiv', translation: 'sangat dingin' },
    ],
    antonyms: [
      { word: 'warm', wordClass: 'Adjektiv', translation: 'hangat' },
      { word: 'heiß', wordClass: 'Adjektiv', translation: 'panas' },
    ],
  },
  hell: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'leuchtend', wordClass: 'Adjektiv', translation: 'bercahaya terang' },
      { word: 'strahlend', wordClass: 'Adjektiv', translation: 'berkilau' },
    ],
    antonyms: [
      { word: 'dunkel', wordClass: 'Adjektiv', translation: 'gelap' },
      { word: 'düster', wordClass: 'Adjektiv', translation: 'suram / remang' },
    ],
  },
  dunkel: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'düster', wordClass: 'Adjektiv', translation: 'suram / gelap gulita' },
      { word: 'finster', wordClass: 'Adjektiv', translation: 'pekat' },
    ],
    antonyms: [
      { word: 'hell', wordClass: 'Adjektiv', translation: 'terang' },
      { word: 'licht', wordClass: 'Adjektiv', translation: 'bercahaya' },
    ],
  },
  stark: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'kräftig', wordClass: 'Adjektiv', translation: 'bertenaga perkasa' },
      { word: 'robust', wordClass: 'Adjektiv', translation: 'tangguh / kokoh' },
      { word: 'mächtig', wordClass: 'Adjektiv', translation: 'berkuasa' },
    ],
    antonyms: [
      { word: 'schwach', wordClass: 'Adjektiv', translation: 'lemah' },
      { word: 'kraftlos', wordClass: 'Adjektiv', translation: 'tidak bertenaga' },
      { word: 'fragil', wordClass: 'Adjektiv', translation: 'rapuh' },
    ],
  },
  schwach: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'kraftlos', wordClass: 'Adjektiv', translation: 'lemas' },
      { word: 'fragil', wordClass: 'Adjektiv', translation: 'ringkih' },
    ],
    antonyms: [
      { word: 'stark', wordClass: 'Adjektiv', translation: 'kuat' },
      { word: 'kräftig', wordClass: 'Adjektiv', translation: 'bertenaga' },
    ],
  },
  glücklich: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'froh', wordClass: 'Adjektiv', translation: 'gembira' },
      { word: 'zufrieden', wordClass: 'Adjektiv', translation: 'puas bahagia' },
      { word: 'selig', wordClass: 'Adjektiv', translation: 'sukacita' },
    ],
    antonyms: [
      { word: 'unglücklich', wordClass: 'Adjektiv', translation: 'tidak bahagia' },
      { word: 'traurig', wordClass: 'Adjektiv', translation: 'sedih' },
      { word: 'betrübt', wordClass: 'Adjektiv', translation: 'murung' },
    ],
  },
  traurig: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'betrübt', wordClass: 'Adjektiv', translation: 'murung' },
      { word: 'kummererfüllt', wordClass: 'Adjektiv', translation: 'berduka' },
    ],
    antonyms: [
      { word: 'fröhlich', wordClass: 'Adjektiv', translation: 'ceria' },
      { word: 'glücklich', wordClass: 'Adjektiv', translation: 'bahagia' },
    ],
  },
  höflich: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'zuvorkommend', wordClass: 'Adjektiv', translation: 'ramah penuh perhatian' },
      { word: 'anständig', wordClass: 'Adjektiv', translation: 'santun terhormat' },
    ],
    antonyms: [
      { word: 'unhöflich', wordClass: 'Adjektiv', translation: 'tidak sopan' },
      { word: 'frech', wordClass: 'Adjektiv', translation: 'kurang ajar / lancang' },
      { word: 'unverschämt', wordClass: 'Adjektiv', translation: 'tidak tahu malu' },
    ],
  },
  wichtig: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'bedeutend', wordClass: 'Adjektiv', translation: 'bermakna besar' },
      { word: 'wesentlich', wordClass: 'Adjektiv', translation: 'esensial' },
      { word: 'relevant', wordClass: 'Adjektiv', translation: 'relevan' },
    ],
    antonyms: [
      { word: 'unwichtig', wordClass: 'Adjektiv', translation: 'tidak penting' },
      { word: 'belanglos', wordClass: 'Adjektiv', translation: 'sepele / tanpa arti' },
      { word: 'nebensächlich', wordClass: 'Adjektiv', translation: 'sampingan' },
    ],
  },
  richtig: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'korrekt', wordClass: 'Adjektiv', translation: 'tepat benar' },
      { word: 'wahr', wordClass: 'Adjektiv', translation: 'sesuai kenyataan' },
    ],
    antonyms: [
      { word: 'falsch', wordClass: 'Adjektiv', translation: 'salah / keliru' },
      { word: 'fehlerhaft', wordClass: 'Adjektiv', translation: 'mengandung eror' },
    ],
  },
  falsch: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'fehlerhaft', wordClass: 'Adjektiv', translation: 'keliru' },
      { word: 'inkorrekt', wordClass: 'Adjektiv', translation: 'tidak benar' },
    ],
    antonyms: [
      { word: 'richtig', wordClass: 'Adjektiv', translation: 'benar' },
      { word: 'korrekt', wordClass: 'Adjektiv', translation: 'tepat' },
    ],
  },
  gesund: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'fit', wordClass: 'Adjektiv', translation: 'bugar' },
      { word: 'wohlauf', wordClass: 'Adjektiv', translation: 'sehat walafiat' },
    ],
    antonyms: [
      { word: 'krank', wordClass: 'Adjektiv', translation: 'sakit' },
      { word: 'ungesund', wordClass: 'Adjektiv', translation: 'tidak sehat' },
    ],
  },
  krank: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'unpässlich', wordClass: 'Adjektiv', translation: 'kurang enak badan' },
      { word: 'leidend', wordClass: 'Adjektiv', translation: 'menderita sakit' },
    ],
    antonyms: [
      { word: 'gesund', wordClass: 'Adjektiv', translation: 'sehat' },
      { word: 'genesen', wordClass: 'Adjektiv', translation: 'sembuh' },
    ],
  },
  voll: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'gefüllt', wordClass: 'Adjektiv', translation: 'terisi penuh' },
      { word: 'überfüllt', wordClass: 'Adjektiv', translation: 'padat berjejal' },
    ],
    antonyms: [
      { word: 'leer', wordClass: 'Adjektiv', translation: 'kosong' },
      { word: 'hohl', wordClass: 'Adjektiv', translation: 'kopong' },
    ],
  },
  leer: {
    wordClass: 'Adjektiv',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'unbesetzt', wordClass: 'Adjektiv', translation: 'tak berpenghuni / luang' },
      { word: 'hohl', wordClass: 'Adjektiv', translation: 'hampa' },
    ],
    antonyms: [
      { word: 'voll', wordClass: 'Adjektiv', translation: 'penuh' },
      { word: 'besetzt', wordClass: 'Adjektiv', translation: 'terisi' },
    ],
  },

  // Nouns
  liebe: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'die Zuneigung', article: 'die', wordClass: 'Nomen', translation: 'kasih sayang' },
      { word: 'die Hingabe', article: 'die', wordClass: 'Nomen', translation: 'pengabdian cinta' },
    ],
    antonyms: [
      { word: 'der Hass', article: 'der', wordClass: 'Nomen', translation: 'kebencian' },
      { word: 'die Abneigung', article: 'die', wordClass: 'Nomen', translation: 'keengganan mendalam' },
    ],
  },
  hass: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'die Feindschaft', article: 'die', wordClass: 'Nomen', translation: 'permusuhan' },
      { word: 'die Verachtung', article: 'die', wordClass: 'Nomen', translation: 'penghinaan kebencian' },
    ],
    antonyms: [
      { word: 'die Liebe', article: 'die', wordClass: 'Nomen', translation: 'cinta' },
      { word: 'die Zuneigung', article: 'die', wordClass: 'Nomen', translation: 'kasih sayang' },
    ],
  },
  frieden: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'die Eintracht', article: 'die', wordClass: 'Nomen', translation: 'kerukunan' },
      { word: 'die Ruhe', article: 'die', wordClass: 'Nomen', translation: 'ketenteraman' },
    ],
    antonyms: [
      { word: 'der Krieg', article: 'der', wordClass: 'Nomen', translation: 'perang' },
      { word: 'der Konflikt', article: 'der', wordClass: 'Nomen', translation: 'konflik sengketa' },
    ],
  },
  krieg: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'der Konflikt', article: 'der', wordClass: 'Nomen', translation: 'konflik bersenjata' },
      { word: 'die Auseinandersetzung', article: 'die', wordClass: 'Nomen', translation: 'pertikaian' },
    ],
    antonyms: [
      { word: 'der Frieden', article: 'der', wordClass: 'Nomen', translation: 'perdamaian' },
      { word: 'die Waffenruhe', article: 'die', wordClass: 'Nomen', translation: 'gencatan senjata' },
    ],
  },
  tag: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'das Tageslicht', article: 'das', wordClass: 'Nomen', translation: 'siang hari / cahaya siang' },
    ],
    antonyms: [
      { word: 'die Nacht', article: 'die', wordClass: 'Nomen', translation: 'malam hari' },
      { word: 'die Dunkelheit', article: 'die', wordClass: 'Nomen', translation: 'kegelapan' },
    ],
  },
  nacht: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'die Dunkelheit', article: 'die', wordClass: 'Nomen', translation: 'kegelapan malam' },
    ],
    antonyms: [
      { word: 'der Tag', article: 'der', wordClass: 'Nomen', translation: 'siang hari' },
      { word: 'das Tageslicht', article: 'das', wordClass: 'Nomen', translation: 'cahaya siang' },
    ],
  },
  problem: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'die Schwierigkeit', article: 'die', wordClass: 'Nomen', translation: 'kesulitan' },
      { word: 'die Herausforderung', article: 'die', wordClass: 'Nomen', translation: 'tantangan' },
      { word: 'die Hürde', article: 'die', wordClass: 'Nomen', translation: 'rintangan' },
    ],
    antonyms: [
      { word: 'die Lösung', article: 'die', wordClass: 'Nomen', translation: 'solusi / pemecahan masalah' },
      { word: 'der Ausweg', article: 'der', wordClass: 'Nomen', translation: 'jalan keluar' },
    ],
  },
  lösung: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'der Ausweg', article: 'der', wordClass: 'Nomen', translation: 'jalan keluar' },
      { word: 'die Behebung', article: 'die', wordClass: 'Nomen', translation: 'penuntasan masalah' },
    ],
    antonyms: [
      { word: 'das Problem', article: 'das', wordClass: 'Nomen', translation: 'masalah' },
      { word: 'die Schwierigkeit', article: 'die', wordClass: 'Nomen', translation: 'kesulitan' },
    ],
  },
  anfang: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'der Beginn', article: 'der', wordClass: 'Nomen', translation: 'permulaan' },
      { word: 'der Start', article: 'der', wordClass: 'Nomen', translation: 'awal keberangkatan' },
    ],
    antonyms: [
      { word: 'das Ende', article: 'das', wordClass: 'Nomen', translation: 'akhir' },
      { word: 'der Schluss', article: 'der', wordClass: 'Nomen', translation: 'penutup' },
    ],
  },
  ende: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'der Schluss', article: 'der', wordClass: 'Nomen', translation: 'penutup' },
      { word: 'das Finale', article: 'das', wordClass: 'Nomen', translation: 'babak akhir' },
    ],
    antonyms: [
      { word: 'der Anfang', article: 'der', wordClass: 'Nomen', translation: 'permulaan' },
      { word: 'der Beginn', article: 'der', wordClass: 'Nomen', translation: 'awal' },
    ],
  },
  erfolg: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'der Triumph', article: 'der', wordClass: 'Nomen', translation: 'kemenangan gemilang' },
      { word: 'der Durchbruch', article: 'der', wordClass: 'Nomen', translation: 'terobosan sukses' },
    ],
    antonyms: [
      { word: 'der Misserfolg', article: 'der', wordClass: 'Nomen', translation: 'kegagalan' },
      { word: 'die Niederlage', article: 'die', wordClass: 'Nomen', translation: 'kekalahan' },
      { word: 'das Scheitern', article: 'das', wordClass: 'Nomen', translation: 'keruntuhan usaha' },
    ],
  },
  wahrheit: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'die Tatsache', article: 'die', wordClass: 'Nomen', translation: 'fakta kenyataan' },
      { word: 'die Realität', article: 'die', wordClass: 'Nomen', translation: 'realitas' },
    ],
    antonyms: [
      { word: 'die Lüge', article: 'die', wordClass: 'Nomen', translation: 'kebohongan' },
      { word: 'die Täuschung', article: 'die', wordClass: 'Nomen', translation: 'tipu daya' },
    ],
  },
  lüge: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'die Täuschung', article: 'die', wordClass: 'Nomen', translation: 'penipuan' },
      { word: 'die Unwahrheit', article: 'die', wordClass: 'Nomen', translation: 'ketidakbenaran' },
    ],
    antonyms: [
      { word: 'die Wahrheit', article: 'die', wordClass: 'Nomen', translation: 'kebenaran' },
      { word: 'die Aufrichtigkeit', article: 'die', wordClass: 'Nomen', translation: 'kejujuran' },
    ],
  },
  frage: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'die Erkundigung', article: 'die', wordClass: 'Nomen', translation: 'pertanyaan penyelidikan' },
      { word: 'das Rätsel', article: 'das', wordClass: 'Nomen', translation: 'teka-teki tanda tanya' },
    ],
    antonyms: [
      { word: 'die Antwort', article: 'die', wordClass: 'Nomen', translation: 'jawaban' },
      { word: 'die Entgegnung', article: 'die', wordClass: 'Nomen', translation: 'sanggahan balik' },
    ],
  },
  antwort: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'die Erwiderung', article: 'die', wordClass: 'Nomen', translation: 'sahutan' },
      { word: 'die Reaktion', article: 'die', wordClass: 'Nomen', translation: 'tanggapan' },
    ],
    antonyms: [
      { word: 'die Frage', article: 'die', wordClass: 'Nomen', translation: 'pertanyaan' },
    ],
  },
  vorteil: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'der Nutzen', article: 'der', wordClass: 'Nomen', translation: 'kegunaan faedah' },
      { word: 'der Vorzug', article: 'der', wordClass: 'Nomen', translation: 'keistimewaan keunggulan' },
    ],
    antonyms: [
      { word: 'der Nachteil', article: 'der', wordClass: 'Nomen', translation: 'kerugian / kelemahan' },
      { word: 'das Manko', article: 'das', wordClass: 'Nomen', translation: 'kekurangan cacat' },
    ],
  },
  nachteil: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'der Schaden', article: 'der', wordClass: 'Nomen', translation: 'kerugian' },
      { word: 'die Schwachstelle', article: 'die', wordClass: 'Nomen', translation: 'titik lemah' },
    ],
    antonyms: [
      { word: 'der Vorteil', article: 'der', wordClass: 'Nomen', translation: 'keuntungan' },
      { word: 'der Vorzug', article: 'der', wordClass: 'Nomen', translation: 'keunggulan' },
    ],
  },
  freizeit: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Erholung', article: 'die', wordClass: 'Nomen', translation: 'pemulihan / istirahat' },
      { word: 'Muße', article: 'die', wordClass: 'Nomen', translation: 'waktu santai tanpa beban' },
      { word: 'Entspannung', article: 'die', wordClass: 'Nomen', translation: 'relaksasi' },
      { word: 'Feierabend', article: 'der', wordClass: 'Nomen', translation: 'waktu bebas usai kerja' },
    ],
    antonyms: [
      { word: 'Arbeit', article: 'die', wordClass: 'Nomen', translation: 'pekerjaan' },
      { word: 'Beruf', article: 'der', wordClass: 'Nomen', translation: 'profesi / dinas' },
      { word: 'Arbeitszeit', article: 'die', wordClass: 'Nomen', translation: 'jam kerja' },
      { word: 'Pflicht', article: 'die', wordClass: 'Nomen', translation: 'kewajiban / tugas' },
    ],
  },
  arbeit: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Beruf', article: 'der', wordClass: 'Nomen', translation: 'profesi / mata pencaharian' },
      { word: 'Beschäftigung', article: 'die', wordClass: 'Nomen', translation: 'kesibukan / kegiatan' },
      { word: 'Tätigkeit', article: 'die', wordClass: 'Nomen', translation: 'aktivitas kerja' },
      { word: 'Job', article: 'der', wordClass: 'Nomen', translation: 'pekerjaan sehari-hari' },
    ],
    antonyms: [
      { word: 'Freizeit', article: 'die', wordClass: 'Nomen', translation: 'waktu luang' },
      { word: 'Erholung', article: 'die', wordClass: 'Nomen', translation: 'istirahat / pemulihan' },
      { word: 'Ruhe', article: 'die', wordClass: 'Nomen', translation: 'ketenangan jeda' },
      { word: 'Feierabend', article: 'der', wordClass: 'Nomen', translation: 'waktu bebas usai jam kerja' },
    ],
  },
  beruf: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Arbeit', article: 'die', wordClass: 'Nomen', translation: 'pekerjaan' },
      { word: 'Profession', article: 'die', wordClass: 'Nomen', translation: 'profesi formal' },
      { word: 'Gewerbe', article: 'das', wordClass: 'Nomen', translation: 'usaha / perniagaan' },
    ],
    antonyms: [
      { word: 'Arbeitslosigkeit', article: 'die', wordClass: 'Nomen', translation: 'pengangguran' },
      { word: 'Ruhestand', article: 'der', wordClass: 'Nomen', translation: 'masa pensiun' },
    ],
  },
  ruhe: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Stille', article: 'die', wordClass: 'Nomen', translation: 'keheningan' },
      { word: 'Frieden', article: 'der', wordClass: 'Nomen', translation: 'kedamaian' },
      { word: 'Gelassenheit', article: 'die', wordClass: 'Nomen', translation: 'ketenangan batin' },
    ],
    antonyms: [
      { word: 'Lärm', article: 'der', wordClass: 'Nomen', translation: 'kebisingan' },
      { word: 'Unruhe', article: 'die', wordClass: 'Nomen', translation: 'kegelisahan' },
      { word: 'Hektik', article: 'die', wordClass: 'Nomen', translation: 'ketergesa-gesaan' },
    ],
  },
  pause: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Unterbrechung', article: 'die', wordClass: 'Nomen', translation: 'jeda / interupsi' },
      { word: 'Auszeit', article: 'die', wordClass: 'Nomen', translation: 'waktu rehat' },
      { word: 'Erholungspause', article: 'die', wordClass: 'Nomen', translation: 'jeda istirahat' },
    ],
    antonyms: [
      { word: 'Fortsetzung', article: 'die', wordClass: 'Nomen', translation: 'kelanjutan' },
      { word: 'Weiterarbeit', article: 'die', wordClass: 'Nomen', translation: 'kelanjutan kerja' },
    ],
  },
  urlaub: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Ferien', article: 'die', wordClass: 'Nomen', translation: 'liburan sekolah / masa libur' },
      { word: 'Auszeit', article: 'die', wordClass: 'Nomen', translation: 'waktu cuti' },
    ],
    antonyms: [
      { word: 'Arbeitstag', article: 'der', wordClass: 'Nomen', translation: 'hari kerja' },
      { word: 'Dienst', article: 'der', wordClass: 'Nomen', translation: 'dinas dinas / tugas kerja' },
    ],
  },
  gesundheit: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Wohlbefinden', article: 'das', wordClass: 'Nomen', translation: 'kesejahteraan tubuh' },
      { word: 'Fitness', article: 'die', wordClass: 'Nomen', translation: 'kebugaran fisik' },
    ],
    antonyms: [
      { word: 'Krankheit', article: 'die', wordClass: 'Nomen', translation: 'penyakit' },
      { word: 'Leiden', article: 'das', wordClass: 'Nomen', translation: 'penderitaan sakit' },
    ],
  },
  krankheit: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Erkrankung', article: 'die', wordClass: 'Nomen', translation: 'kondisi jatuh sakit' },
      { word: 'Leiden', article: 'das', wordClass: 'Nomen', translation: 'keluhan penyakit' },
    ],
    antonyms: [
      { word: 'Gesundheit', article: 'die', wordClass: 'Nomen', translation: 'kesehatan' },
      { word: 'Genesung', article: 'die', wordClass: 'Nomen', translation: 'kesembuhan' },
    ],
  },
  freude: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Glück', article: 'das', wordClass: 'Nomen', translation: 'kebahagiaan' },
      { word: 'Vergnügen', article: 'das', wordClass: 'Nomen', translation: 'kegembiraan suka ria' },
      { word: 'Wonne', article: 'die', wordClass: 'Nomen', translation: 'sukacita mendalam' },
    ],
    antonyms: [
      { word: 'Trauer', article: 'die', wordClass: 'Nomen', translation: 'kesedihan / duka' },
      { word: 'Kummer', article: 'der', wordClass: 'Nomen', translation: 'kesusahan batin' },
      { word: 'Leid', article: 'das', wordClass: 'Nomen', translation: 'derita kemurungan' },
    ],
  },
  trauer: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'Kummer', article: 'der', wordClass: 'Nomen', translation: 'duka cita' },
      { word: 'Gram', article: 'der', wordClass: 'Nomen', translation: 'kepedihan mendalam' },
      { word: 'Betrübnis', article: 'die', wordClass: 'Nomen', translation: 'kemasygulan hati' },
    ],
    antonyms: [
      { word: 'Freude', article: 'die', wordClass: 'Nomen', translation: 'kegembiraan' },
      { word: 'Jubel', article: 'der', wordClass: 'Nomen', translation: 'sorak sukacita' },
    ],
  },
  mut: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'Tapferkeit', article: 'die', wordClass: 'Nomen', translation: 'keberanian' },
      { word: 'Kühnheit', article: 'die', wordClass: 'Nomen', translation: 'keteguhan nyali' },
      { word: 'Courage', article: 'die', wordClass: 'Nomen', translation: 'keberanian moral' },
    ],
    antonyms: [
      { word: 'Angst', article: 'die', wordClass: 'Nomen', translation: 'ketakutan' },
      { word: 'Furcht', article: 'die', wordClass: 'Nomen', translation: 'rasa gentar' },
      { word: 'Feigheit', article: 'die', wordClass: 'Nomen', translation: 'sifat pengecut' },
    ],
  },
  angst: {
    wordClass: 'Nomen',
    defaultLevel: 'A1',
    synonyms: [
      { word: 'Furcht', article: 'die', wordClass: 'Nomen', translation: 'kekhawatiran rasa takut' },
      { word: 'Panik', article: 'die', wordClass: 'Nomen', translation: 'kepanikan' },
      { word: 'Besorgnis', article: 'die', wordClass: 'Nomen', translation: 'kegelisahan' },
    ],
    antonyms: [
      { word: 'Mut', article: 'der', wordClass: 'Nomen', translation: 'keberanian' },
      { word: 'Zuversicht', article: 'die', wordClass: 'Nomen', translation: 'optimisme percaya diri' },
    ],
  },
  fleiß: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'Eifer', article: 'der', wordClass: 'Nomen', translation: 'semangat kegigihan' },
      { word: 'Hingabe', article: 'die', wordClass: 'Nomen', translation: 'dedikasi tekun' },
      { word: 'Ausdauer', article: 'die', wordClass: 'Nomen', translation: 'daya tahan tekun' },
    ],
    antonyms: [
      { word: 'Faulheit', article: 'die', wordClass: 'Nomen', translation: 'kemalasan' },
      { word: 'Trägheit', article: 'die', wordClass: 'Nomen', translation: 'kelambanan / kelembaman' },
    ],
  },
  faulheit: {
    wordClass: 'Nomen',
    defaultLevel: 'A2',
    synonyms: [
      { word: 'Trägheit', article: 'die', wordClass: 'Nomen', translation: 'kelambanan malas' },
      { word: 'Bequemlichkeit', article: 'die', wordClass: 'Nomen', translation: 'mencari enaknya sendiri' },
    ],
    antonyms: [
      { word: 'Fleiß', article: 'der', wordClass: 'Nomen', translation: 'kerajinan ketekunan' },
      { word: 'Eifer', article: 'der', wordClass: 'Nomen', translation: 'kegigihan' },
    ],
  },
};

export const GERMAN_THESAURUS: Record<string, {
  synonyms: SynonymItem[];
  antonyms: AntonymItem[];
  wordClass?: string;
  defaultLevel?: CEFRLevel;
}> = (() => {
  const merged: Record<string, {
    synonyms: SynonymItem[];
    antonyms: AntonymItem[];
    wordClass?: string;
    defaultLevel?: CEFRLevel;
  }> = { ...RAW_THESAURUS };

  for (const [key, wordEntry] of Object.entries(GERMAN_DICTIONARY)) {
    if (!merged[key] && wordEntry.synonyms?.length && wordEntry.antonyms?.length) {
      merged[key] = {
        synonyms: wordEntry.synonyms,
        antonyms: wordEntry.antonyms,
        wordClass: wordEntry.wordClass,
        defaultLevel: wordEntry.cefrLevel,
      };
    }
  }

  return merged;
})();


// Common Sentence Translations
export const CURATED_SENTENCES: Record<string, SentenceResult> = {
  'ich moechte morgen nach berlin fahren.': {
    originalSentence: 'Ich möchte morgen nach Berlin fahren.',
    translatedSentence: 'Saya ingin pergi ke Berlin besok.',
    sourceLang: 'de',
    targetLang: 'id',
    literalTranslation: 'Saya ingin besok ke Berlin pergi (berkendara).',
    sentenceStructureExplanation:
      'Kalimat deklaratif utama (Hauptsatz) dengan modal verb "möchte" di posisi ke-2 (V2). Kata kerja penuh "fahren" berada di posisi paling akhir dalam bentuk infinitiv (membentuk Satzklammer / kurung kalimat). Urutan keterangan mengikuti kaidah TeKaMoLo (Temporal: morgen -> Lokal: nach Berlin).',
    grammarHighlights: [
      'Posisi Modalverb di posisi II: "möchte"',
      'Infinitiv di ujung akhir kalimat: "fahren" (Satzklammer)',
      'Präposition "nach" digunakan untuk arah kota dan negara tanpa artikel (+ Dativ)',
      'Adverb waktu "morgen" berada sebelum keterangan arah tempat',
    ],
    alternatives: [
      {
        sentence: 'Morgen möchte ich nach Berlin fahren.',
        nuance: 'Menekankan waktu (besok) di awal kalimat; posisi kata kerja tetap nomor 2 (inversi subjek-predikat).',
      },
      {
        sentence: 'Ich will morgen nach Berlin reisen.',
        nuance: 'Menggunakan "wollen" (niat lebih tegas) dan "reisen" (melakukan perjalanan).',
      },
    ],
    wordByWordAnalysis: [
      {
        token: 'Ich',
        lemma: 'ich',
        translation: 'saya',
        wordClass: 'Personalpronomen',
        grammaticalInfo: 'Nominativ, 1. Person Singular, Subjekt',
        isSearchableWord: true,
      },
      {
        token: 'möchte',
        lemma: 'mögen',
        translation: 'ingin / berniat',
        wordClass: 'Modalverb',
        grammaticalInfo: 'Konjunktiv II, 1. Person Singular, Prädikat (Teil 1)',
        isSearchableWord: true,
      },
      {
        token: 'morgen',
        lemma: 'morgen',
        translation: 'besok',
        wordClass: 'Adverb',
        grammaticalInfo: 'Temporaladverb (keterangan waktu)',
        isSearchableWord: false,
      },
      {
        token: 'nach',
        lemma: 'nach',
        translation: 'ke / menuju',
        wordClass: 'Präposition',
        grammaticalInfo: '+ Dativ (arah ke kota / negara tanpa artikel)',
        isSearchableWord: true,
      },
      {
        token: 'Berlin',
        lemma: 'Berlin',
        translation: 'Berlin (ibukota Jerman)',
        wordClass: 'Eigenname',
        grammaticalInfo: 'Toponym, Dativ',
        isSearchableWord: false,
      },
      {
        token: 'fahren',
        lemma: 'fahren',
        translation: 'pergi / berkendara',
        wordClass: 'Verb',
        grammaticalInfo: 'Infinitiv, Prädikat (Teil 2 am Satzende)',
        isSearchableWord: true,
      },
    ],
    keyVocabulary: [
      { word: 'möchte', wordClass: 'Modalverb', translation: 'ingin (sopan)' },
      { word: 'nach', wordClass: 'Präposition', translation: 'ke (+ Dativ)' },
      { word: 'fahren', wordClass: 'Verb', translation: 'berkendara / bepergian' },
      { word: 'morgen', wordClass: 'Adverb', translation: 'besok' },
    ],
  },

  'saya ingin pergi ke jerman.': {
    originalSentence: 'Saya ingin pergi ke Jerman.',
    translatedSentence: 'Ich möchte nach Deutschland reisen / gehen.',
    sourceLang: 'id',
    targetLang: 'de',
    literalTranslation: 'Ich möchte nach Deutschland gehen.',
    sentenceStructureExplanation:
      'Subjek "Ich" berada di awal kalimat, Modalverb "möchte" di posisi ke-2, keterangan arah "nach Deutschland" di tengah, dan kata kerja dasar "gehen" / "reisen" di akhir kalimat sesuai kaidah Satzklammer bahasa Jerman.',
    grammarHighlights: [
      'Gunakan "nach" untuk negara yang tidak memiliki artikel (Deutschland, Indonesien, Japan).',
      'Jika negara memiliki artikel (misal: die Schweiz, die Türkei), gunakan "in die": "Ich fliege in die Schweiz".',
      'Dalam bahasa Jerman, untuk perjalanan jauh ke luar negeri, orang Jerman lebih lazim menggunakan "reisen" atau "fliegen", namun "gehen" tetap dipahami.',
    ],
    alternatives: [
      {
        sentence: 'Ich möchte nach Deutschland fliegen.',
        nuance: 'Lebih spesifik jika bepergian menggunakan pesawat terbang dari Indonesia.',
      },
      {
        sentence: 'Ich will nach Deutschland reisen.',
        nuance: 'Menggunakan "will" menunjukkan tekad yang lebih bulat dan pasti.',
      },
    ],
    wordByWordAnalysis: [
      {
        token: 'Saya',
        lemma: 'ich',
        translation: 'ich',
        wordClass: 'Personalpronomen',
        grammaticalInfo: 'Nominativ, 1. Person Singular',
        isSearchableWord: true,
      },
      {
        token: 'ingin',
        lemma: 'möchte',
        translation: 'möchte / will',
        wordClass: 'Modalverb',
        grammaticalInfo: 'Prädikat posisi II',
        isSearchableWord: true,
      },
      {
        token: 'ke',
        lemma: 'nach',
        translation: 'nach',
        wordClass: 'Präposition',
        grammaticalInfo: '+ Dativ (arah geografis tanpa artikel)',
        isSearchableWord: true,
      },
      {
        token: 'Jerman',
        lemma: 'Deutschland',
        translation: 'Deutschland',
        wordClass: 'Eigenname',
        grammaticalInfo: 'Neutrum tanpa artikel',
        isSearchableWord: true,
      },
      {
        token: 'pergi',
        lemma: 'gehen / reisen',
        translation: 'gehen / reisen',
        wordClass: 'Verb',
        grammaticalInfo: 'Infinitiv di akhir kalimat',
        isSearchableWord: true,
      },
    ],
    keyVocabulary: [
      { word: 'möchte', wordClass: 'Modalverb', translation: 'ingin' },
      { word: 'nach', wordClass: 'Präposition', translation: 'ke (+ Dativ)' },
      { word: 'Deutschland', wordClass: 'Eigenname', translation: 'Jerman' },
      { word: 'gehen', wordClass: 'Verb', translation: 'pergi' },
    ],
  },

  'saya suka makan.': {
    originalSentence: 'Saya suka makan.',
    translatedSentence: 'Ich esse gerne.',
    sourceLang: 'id',
    targetLang: 'de',
    literalTranslation: 'Saya makan dengan senang hati.',
    sentenceStructureExplanation:
      'Orang Jerman mengekspresikan "suka melakukan sesuatu" dengan menaruh adverb "gerne" (atau "gern") setelah kata kerja terkonjugasi ("Ich esse gerne"), BUKAN menerjemahkan kata "suka" menjadi kata kerja secara kaku.',
    grammarHighlights: [
      'Gunakan konstruksi [Verb + gerne] untuk menyatakan kesukaan beraktivitas.',
      'Konjugasi kata kerja "essen": ich esse, du isst, er isst.',
      'Alternatif: "Ich mag Essen" (Saya menyukai makanan - di sini Essen adalah kata benda).',
    ],
    alternatives: [
      {
        sentence: 'Ich esse sehr gern.',
        nuance: 'Bentuk varian "gern" yang sangat umum dalam percakapan santai sehari-hari.',
      },
      {
        sentence: 'Ich liebe es zu essen.',
        nuance: 'Menyatakan rasa cinta mendalam terhadap kegiatan makan ("Saya cinta makan").',
      },
    ],
    wordByWordAnalysis: [
      {
        token: 'Saya',
        lemma: 'ich',
        translation: 'ich',
        wordClass: 'Personalpronomen',
        grammaticalInfo: 'Nominativ, 1. Person Singular',
        isSearchableWord: true,
      },
      {
        token: 'suka',
        lemma: 'gerne',
        translation: 'gerne / gern',
        wordClass: 'Adverb',
        grammaticalInfo: 'Modaladverb (menunjukkan rasa gemar)',
        isSearchableWord: false,
      },
      {
        token: 'makan',
        lemma: 'essen',
        translation: 'essen',
        wordClass: 'Verb',
        grammaticalInfo: 'Vollverb, 1. Person Singular Präsens',
        isSearchableWord: true,
      },
    ],
    keyVocabulary: [
      { word: 'essen', wordClass: 'Verb', translation: 'makan' },
      { word: 'gerne', wordClass: 'Adverb', translation: 'suka / dengan senang hati' },
    ],
  },
};
