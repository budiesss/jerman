import { WordResult } from '../types';

/**
 * Curated High-Frequency German Vocabulary - Level A2
 * Goethe-Institut & telc A2 Curriculum
 */
export const A2_WORDS: Record<string, WordResult> = {
  reise: {
    word: 'die Reise',
    displayWord: 'die Reise',
    ipa: '/ˈʁaɪ̯zə/',
    translations: ['perjalanan', 'tur wisata', 'safari'],
    meaningSummary: 'Kegiatan berpindah ke tempat yang jauh untuk tujuan liburan, pekerjaan, atau penelitian.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Reise',
        plural: 'die Reisen',
        genitivSingular: 'der Reise',
      },
    },
    synonyms: [
      { word: 'die Fahrt', article: 'die', wordClass: 'Nomen', translation: 'perjalanan kendaraan' },
      { word: 'der Ausflug', article: 'der', wordClass: 'Nomen', translation: 'karyawisata / piknik singkat' },
      { word: 'der Trip', article: 'der', wordClass: 'Nomen', translation: 'perjalanan santai' },
    ],
    antonyms: [
      { word: 'der Aufenthalt', article: 'der', wordClass: 'Nomen', translation: 'keberdiaman di tempat / masa tinggal' },
      { word: 'die Sesshaftigkeit', article: 'die', wordClass: 'Nomen', translation: 'kehidupan menetap tanpa bepergian' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Gute Reise und viel Spaß in Deutschland!',
        indonesian: 'Selamat jalan dan semoga menyenangkan di Jerman!',
        contextNote: 'Ucapan selamat bepergian A2',
      },
      {
        level: 'A2',
        german: 'Die Reise nach München hat vier Stunden gedauert.',
        indonesian: 'Perjalanan ke Munich memakan waktu empat jam.',
        contextNote: 'Durasi waktu perjalanan',
      },
    ],
    learningTips: 'Kata kerja turunannya: "reisen" (bepergian). Kata majemuk penting: "das Reisebüro" (biro perjalanan), "der Reisepass" (paspor).',
  },

  erfahrung: {
    word: 'die Erfahrung',
    displayWord: 'die Erfahrung',
    ipa: '/ɛɐ̯ˈfaːʁʊŋ/',
    translations: ['pengalaman', 'jam terbang'],
    meaningSummary: 'Pengetahuan atau keterampilan yang diperoleh melalui penghayatan dan praktik langsung sepanjang waktu.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Erfahrung',
        plural: 'die Erfahrungen',
        genitivSingular: 'der Erfahrung',
      },
    },
    synonyms: [
      { word: 'die Praxis', article: 'die', wordClass: 'Nomen', translation: 'praktik nyata' },
      { word: 'die Kenntnis', article: 'die', wordClass: 'Nomen', translation: 'pengetahuan yang dikuasai' },
      { word: 'die Routine', article: 'die', wordClass: 'Nomen', translation: 'rutinitas kemahiran' },
    ],
    antonyms: [
      { word: 'die Unerfahrenheit', article: 'die', wordClass: 'Nomen', translation: 'ketidakberpengalaman / kenaifan' },
      { word: 'die Unwissenheit', article: 'die', wordClass: 'Nomen', translation: 'ketidaktahuan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich habe viele gute Erfahrungen im Ausland gesammelt.',
        indonesian: 'Saya telah mengumpulkan banyak pengalaman berharga di luar negeri.',
        contextNote: 'Kolokasi tetap: "Erfahrungen sammeln"',
      },
      {
        level: 'A2',
        german: 'Sie hat schon drei Jahre Berufserfahrung als Krankenschwester.',
        indonesian: 'Dia sudah memiliki tiga tahun pengalaman kerja sebagai perawat.',
        contextNote: 'Dunia kerja: Berufserfahrung',
      },
    ],
    learningTips: 'Kolokasi khas A2-B1: "Erfahrungen sammeln" (mengumpulkan pengalaman) dan "aus Erfahrung wissen" (mengetahui berdasarkan pengalaman).',
  },

  ausbildung: {
    word: 'die Ausbildung',
    displayWord: 'die Ausbildung',
    ipa: '/ˈaʊ̯sˌbɪldʊŋ/',
    translations: ['pelatihan kejuruan', 'pendidikan profesi', 'magang kerja'],
    meaningSummary: 'Sistem pendidikan vokasi khas Jerman (Duale Ausbildung) yang memadukan teori sekolah dan praktik langsung di perusahaan.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Ausbildung',
        plural: 'die Ausbildungen',
        genitivSingular: 'der Ausbildung',
      },
    },
    synonyms: [
      { word: 'die Lehre', article: 'die', wordClass: 'Nomen', translation: 'magang kejuruan tradisional' },
      { word: 'die Schulung', article: 'die', wordClass: 'Nomen', translation: 'pelatihan kursus' },
      { word: 'die Vorbereitung', article: 'die', wordClass: 'Nomen', translation: 'persiapan keterampilan' },
    ],
    antonyms: [
      { word: 'der Abbruch', article: 'der', wordClass: 'Nomen', translation: 'putus sekolah / berhentinya pelatihan' },
      { word: 'die Arbeitslosigkeit', article: 'die', wordClass: 'Nomen', translation: 'pengangguran tanpa keahlian' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Nach der Schule macht er eine Ausbildung zum Mechatroniker.',
        indonesian: 'Setelah tamat sekolah dia mengambil pelatihan kejuruan mekanik mekatronik.',
        contextNote: 'Jalur karir vokasi Jerman',
      },
      {
        level: 'A2',
        german: 'Die Ausbildung dauert normalerweise drei Jahre.',
        indonesian: 'Pelatihan profesi itu biasanya berlangsung selama tiga tahun.',
        contextNote: 'Durasi program vokasi',
      },
    ],
    learningTips: 'Kultur Jerman: "Ausbildung" sangat dihormati dan menghasilkan tenaga ahli bersertifikat resmi (Azubi = Auszubildende/r).',
  },

  geschaeft: {
    word: 'das Geschäft',
    displayWord: 'das Geschäft',
    ipa: '/ɡəˈʃɛft/',
    translations: ['toko', 'kedai', 'bisnis / transaksi dagang'],
    meaningSummary: 'Tempat perbelanjaan eceran atau aktivitas transaksi perniagaan dan perdagangan.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Geschäft',
        plural: 'die Geschäfte',
        genitivSingular: 'des Geschäfts / des Geschäftes',
      },
    },
    synonyms: [
      { word: 'der Laden', article: 'der', wordClass: 'Nomen', translation: 'toko warung' },
      { word: 'die Handlung', article: 'die', wordClass: 'Nomen', translation: 'gerai toko dagang' },
      { word: 'der Betrieb', article: 'der', wordClass: 'Nomen', translation: 'perusahaan usaha' },
    ],
    antonyms: [
      { word: 'die Pleite', article: 'die', wordClass: 'Nomen', translation: 'kebangkrutan dagang' },
      { word: 'der Ruin', article: 'der', wordClass: 'Nomen', translation: 'keruntuhan bisnis' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Die Geschäfte im Stadtzentrum öffnen um neun Uhr morgens.',
        indonesian: 'Toko-toko di pusat kota buka pada pukul sembilan pagi.',
        contextNote: 'Jam buka pertokoan',
      },
      {
        level: 'A2',
        german: 'Mein Onkel leitet ein erfolgreiches Geschäft.',
        indonesian: 'Paman saya mengelola sebuah bisnis perniagaan yang sukses.',
        contextNote: 'Arti: bisnis/perusahaan',
      },
    ],
    learningTips: 'Jamak: "die Geschäfte". Frasa bisnis: "ein gutes Geschäft machen" (melakukan transaksi bisnis yang menguntungkan).',
  },

  umwelt: {
    word: 'die Umwelt',
    displayWord: 'die Umwelt',
    ipa: '/ˈʊmˌvɛlt/',
    translations: ['lingkungan hidup', 'alam sekitar'],
    meaningSummary: 'Kondisi alam dan ekosistem di sekeliling makhluk hidup yang perlu dijaga kelestariannya.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Umwelt',
        plural: '-',
        genitivSingular: 'der Umwelt',
      },
    },
    synonyms: [
      { word: 'die Natur', article: 'die', wordClass: 'Nomen', translation: 'alam bebas' },
      { word: 'die Umgebung', article: 'die', wordClass: 'Nomen', translation: 'lingkungan sekeliling' },
      { word: 'das Ökosystem', article: 'das', wordClass: 'Nomen', translation: 'ekosistem' },
    ],
    antonyms: [
      { word: 'die Umweltverschmutzung', article: 'die', wordClass: 'Nomen', translation: 'pencemaran lingkungan' },
      { word: 'die Zerstörung', article: 'die', wordClass: 'Nomen', translation: 'kerusakan alam' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Wir müssen die Umwelt besser vor Plastikmüll schützen.',
        indonesian: 'Kita harus melindungi lingkungan hidup dengan lebih baik dari sampah plastik.',
        contextNote: 'Pelestarian lingkungan',
      },
      {
        level: 'A2',
        german: 'Fahrradfahren ist umweltfreundlich und gesund.',
        indonesian: 'Bersepeda itu ramah lingkungan dan menyehatkan tubuh.',
        contextNote: 'Gaya hidup hijau',
      },
    ],
    learningTips: 'Berasal dari kata "um" (sekeliling) + "Welt" (dunia). Kata majemuk sangat produktif: "der Umweltschutz" (perlindungan lingkungan), "umweltfreundlich" (ramah lingkungan).',
  },

  wetter: {
    word: 'das Wetter',
    displayWord: 'das Wetter',
    ipa: '/ˈvɛtɐ/',
    translations: ['cuaca', 'hawa udara'],
    meaningSummary: 'Keadaan fisik atmosfer di tempat dan waktu tertentu (hujan, cerah, mendung, bersalju).',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Wetter',
        plural: '-',
        genitivSingular: 'des Wetters',
      },
    },
    synonyms: [
      { word: 'die Witterung', article: 'die', wordClass: 'Nomen', translation: 'kondisi hawa cuaca musiman' },
      { word: 'das Klima', article: 'das', wordClass: 'Nomen', translation: 'iklim' },
    ],
    antonyms: [
      { word: 'das Unwetter', article: 'das', wordClass: 'Nomen', translation: 'badai cuaca ekstrem' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Wie wird das Wetter am Wochenende?',
        indonesian: 'Bagaimana perkiraan cuaca pada akhir pekan nanti?',
        contextNote: 'Topik percakapan cuaca A2',
      },
      {
        level: 'A2',
        german: 'Bei schönem Wetter machen wir ein Picknick im Park.',
        indonesian: 'Saat cuaca cerah kami mengadakan piknik di taman.',
        contextNote: 'bei + Dativ netral (schönem Wetter)',
      },
    ],
    learningTips: 'Kata majemuk penting: "der Wetterbericht" (laporan ramalan cuaca), "die Wettervorhersage" (prakiraan cuaca).',
  },

  geschenk: {
    word: 'das Geschenk',
    displayWord: 'das Geschenk',
    ipa: '/ɡəˈʃɛŋk/',
    translations: ['hadiah', 'kado', 'bingkisan'],
    meaningSummary: 'Sesuatu yang diberikan kepada orang lain secara cuma-cuma sebagai tanda kasih, penghormatan, atau perayaan.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Geschenk',
        plural: 'die Geschenke',
        genitivSingular: 'des Geschenkes / des Geschenks',
      },
    },
    synonyms: [
      { word: 'die Gabe', article: 'die', wordClass: 'Nomen', translation: 'pemberian / sedekah kado' },
      { word: 'das Präsent', article: 'das', wordClass: 'Nomen', translation: 'hadiah cinderamata formal' },
      { word: 'die Aufmerksamkeit', article: 'die', wordClass: 'Nomen', translation: 'tanda mata perhatian' },
    ],
    antonyms: [
      { word: 'der Kauf', article: 'der', wordClass: 'Nomen', translation: 'pembelian berbayar' },
      { word: 'der Diebstahl', article: 'der', wordClass: 'Nomen', translation: 'pencurian' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Vielen Dank für das tolle Geschenk zum Geburtstag!',
        indonesian: 'Terima kasih banyak atas hadiah ulang tahun yang luar biasa ini!',
        contextNote: 'Ucapan terima kasih kado',
      },
      {
        level: 'A2',
        german: 'Ich suche ein kleines Geschenk für meine Mutter.',
        indonesian: 'Saya sedang mencari hadiah kecil untuk ibu saya.',
        contextNote: 'Objek Akkusativ netral: ein kleines Geschenk',
      },
    ],
    learningTips: 'Berasal dari kata kerja "schenken" (memberikan hadiah/menghadiahkan).',
  },

  einladung: {
    word: 'die Einladung',
    displayWord: 'die Einladung',
    ipa: '/ˈaɪ̯nˌlaːdʊŋ/',
    translations: ['undangan', 'surat ajakan'],
    meaningSummary: 'Permintaan atau ajakan resmi maupun akrab kepada seseorang untuk menghadiri acara.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Einladung',
        plural: 'die Einladungen',
        genitivSingular: 'der Einladung',
      },
    },
    synonyms: [
      { word: 'die Aufforderung', article: 'die', wordClass: 'Nomen', translation: 'ajakan menghadiri' },
      { word: 'die Karte', article: 'die', wordClass: 'Nomen', translation: 'kartu undangan' },
    ],
    antonyms: [
      { word: 'die Absage', article: 'die', wordClass: 'Nomen', translation: 'penolakan undangan' },
      { word: 'die Ausladung', article: 'die', wordClass: 'Nomen', translation: 'pembatalan undangan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich habe eine Einladung zur Hochzeit meiner Schwester bekommen.',
        indonesian: 'Saya telah menerima undangan ke pesta pernikahan adik perempuan saya.',
        contextNote: 'Menerima undangan: Einladung zu + Dativ',
      },
      {
        level: 'A2',
        german: 'Herzlichen Dank für die Einladung!',
        indonesian: 'Terima kasih banyak yang tulus atas undangannya!',
        contextNote: 'Balasan sopan undangan A2',
      },
    ],
    learningTips: 'Berasal dari kata kerja terpisah "einladen" (mengundang). Frasa preposisi: "die Einladung zu + Dativ" (undangan ke suatu acara).',
  },

  nachricht: {
    word: 'die Nachricht',
    displayWord: 'die Nachricht',
    ipa: '/ˈnaːxˌʁɪçt/',
    translations: ['pesan', 'warta', 'berita'],
    meaningSummary: 'Kabar atau pemberitahuan lisan, tertulis, atau digital mengenai suatu peristiwa.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Nachricht',
        plural: 'die Nachrichten',
        genitivSingular: 'der Nachricht',
      },
    },
    synonyms: [
      { word: 'die Mitteilung', article: 'die', wordClass: 'Nomen', translation: 'pemberitahuan tertulis' },
      { word: 'die Botschaft', article: 'die', wordClass: 'Nomen', translation: 'amanat pesan' },
      { word: 'die Neuigkeit', article: 'die', wordClass: 'Nomen', translation: 'kabar baru' },
    ],
    antonyms: [
      { word: 'das Gerücht', article: 'das', wordClass: 'Nomen', translation: 'desas-desus belum jelas' },
      { word: 'das Stillschweigen', article: 'das', wordClass: 'Nomen', translation: 'bungkam tanpa kabar' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Hinterlassen Sie bitte eine Nachricht nach dem Signalton.',
        indonesian: 'Silakan tinggalkan pesan setelah nada bunyi tust.',
        contextNote: 'Pesan mesin penjawab telepon',
      },
      {
        level: 'A2',
        german: 'Im Fernsehen laufen jetzt die Nachrichten um 20 Uhr.',
        indonesian: 'Di televisi sekarang sedang tayang siaran warta berita jam 8 malam.',
        contextNote: 'Plural: siaran warta berita (die Tagesschau)',
      },
    ],
    learningTips: 'Dalam bentuk jamak "die Nachrichten" sering berarti "program warta berita televisi/radio".',
  },

  erzaehlen: {
    word: 'erzählen',
    displayWord: 'erzählen',
    ipa: '/ɛɐ̯ˈt͡sɛːlən/',
    translations: ['menceritakan', 'mengisahkan', 'menuturkan'],
    meaningSummary: 'Menyampaikan urutan cerita, pengalaman, atau peristiwa kepada pendengar.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'erzählen',
        praesens: 'erzählt',
        praeteritum: 'erzählte',
        partizip2: 'erzählt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
        prefix: 'er- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'berichten', wordClass: 'Verb', translation: 'melaporkan berita' },
      { word: 'schildern', wordClass: 'Verb', translation: 'melukiskan gambaran cerita' },
      { word: 'wiedergeben', wordClass: 'Verb', translation: 'menuturkan kembali' },
    ],
    antonyms: [
      { word: 'verschweigen', wordClass: 'Verb', translation: 'merahasiakan cerita' },
      { word: 'geheim halten', wordClass: 'Verb', translation: 'menyimpan rahasia rapat' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Der Großvater erzählt den Kindern eine spannende Geschichte.',
        indonesian: 'Kakek menceritakan kisah yang seru kepada anak-anak.',
        contextNote: 'Dativ (den Kindern) + Akkusativ (eine Geschichte)',
      },
      {
        level: 'A2',
        german: 'Erzähl mir von deiner Reise nach Wien!',
        indonesian: 'Ceritakan kepadaku tentang perjalananmu ke Wina!',
        contextNote: 'Preposisi: erzählen von + Dativ',
      },
    ],
    learningTips: 'Preposisi tetap: "erzählen von + Dativ" (menceritakan tentang sesuatu) atau "erzählen über + Akkusativ".',
  },

  erklaeren: {
    word: 'erklären',
    displayWord: 'erklären',
    ipa: '/ɛɐ̯ˈklɛːʁən/',
    translations: ['menjelaskan', 'menerangkan', 'mendeklarasikan'],
    meaningSummary: 'Memaparkan sesuatu hal secara runtut dan gamblang agar dipahami orang lain.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'erklären',
        praesens: 'erklärt',
        praeteritum: 'erklärte',
        partizip2: 'erklärt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
        prefix: 'er- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'erläutern', wordClass: 'Verb', translation: 'menguraikan jelas' },
      { word: 'verdeutlichen', wordClass: 'Verb', translation: 'memperjelas maksud' },
      { word: 'veranschaulichen', wordClass: 'Verb', translation: 'mengilustrasikan gamblang' },
    ],
    antonyms: [
      { word: 'verkomplizieren', wordClass: 'Verb', translation: 'membuat semakin rumit' },
      { word: 'verschleiern', wordClass: 'Verb', translation: 'mengaburkan penjelasan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Können Sie mir diesen Satz bitte noch einmal erklären?',
        indonesian: 'Bisakah Anda tolong menjelaskan kalimat ini sekali lagi kepada saya?',
        contextNote: 'Permohonan di kelas bahasa Jerman',
      },
      {
        level: 'A2',
        german: 'Die Anleitung erklärt Schritt für Schritt, wie das Gerät funktioniert.',
        indonesian: 'Buku petunjuk itu menjelaskan langkah demi langkah bagaimana alat itu bekerja.',
        contextNote: 'Petunjuk teknis pemakaian',
      },
    ],
    learningTips: 'Kata bendanya adalah "die Erklärung" (penjelasan). Awalan "er-" tidak dapat dipisahkan (Partizip II: erklärt).',
  },

  versuchen: {
    word: 'versuchen',
    displayWord: 'versuchen',
    ipa: '/fɛɐ̯ˈzuːxn̩/',
    translations: ['mencoba', 'berusaha', 'mencicipi'],
    meaningSummary: 'Mengerahkan upaya untuk melakukan atau menguji keberhasilan suatu hal.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'versuchen',
        praesens: 'versucht',
        praeteritum: 'versuchte',
        partizip2: 'versucht',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
        prefix: 'ver- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'probieren', wordClass: 'Verb', translation: 'mencoba rasa / mengetes' },
      { word: 'ausprobieren', wordClass: 'Verb', translation: 'menjajal kinerja' },
      { word: 'sich bemühen', wordClass: 'Verb', translation: 'berikhtiar sungguh-sungguh' },
    ],
    antonyms: [
      { word: 'aufgeben', wordClass: 'Verb', translation: 'menyerah tanpa coba' },
      { word: 'unterlassen', wordClass: 'Verb', translation: 'mengabaikan untuk tidak melakukan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich versuche jeden Tag, zehn neue deutsche Wörter zu lernen.',
        indonesian: 'Saya berusaha setiap hari untuk menghafal sepuluh kata bahasa Jerman baru.',
        contextNote: 'Infinitivkonstruktion: versuchen + zu + Infinitiv',
      },
      {
        level: 'A2',
        german: 'Versuch doch mal diese leckere Suppe!',
        indonesian: 'Cobalah cicipi sup lezat ini!',
        contextNote: 'Imperativ: mencicipi makanan',
      },
    ],
    learningTips: 'Sering dipakai dalam konstruksi Infinitiv dengan zu: "versuchen, ... zu + Infinitiv" (berusaha untuk melakukan sesuatu).',
  },

  anrufen: {
    word: 'anrufen',
    displayWord: 'anrufen',
    ipa: '/ˈanˌʁuːfn̩/',
    translations: ['menelepon', 'menghubungi lewat telepon'],
    meaningSummary: 'Mengontak seseorang menggunakan sambungan pesawat telepon seluler atau rumah.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'anrufen',
        praesens: 'ruft an',
        praeteritum: 'rief an',
        partizip2: 'angerufen',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: true,
        prefix: 'an',
      },
    },
    synonyms: [
      { word: 'telefonieren mit', wordClass: 'Verb', translation: 'berbicara di telepon' },
      { word: 'durchklingeln', wordClass: 'Verb', translation: 'mengontak dering telepon' },
    ],
    antonyms: [
      { word: 'auflegen', wordClass: 'Verb', translation: 'menutup sambungan telepon' },
      { word: 'ignorieren', wordClass: 'Verb', translation: 'mengabaikan panggilan masuk' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich rufe dich heute Abend nach der Arbeit an.',
        indonesian: 'Saya akan meneleponmu nanti malam setelah pulang kerja.',
        contextNote: 'Trennbares Verb: anrufen menuntut Akkusativ (dich)',
      },
      {
        level: 'A2',
        german: 'Hat der Arzt schon zurückgerufen?',
        indonesian: 'Apakah dokter itu sudah menelepon balik?',
        contextNote: 'Perfekt: hat angerufen / zurückgerufen',
      },
    ],
    learningTips: 'PERBEDAAN PENTING: "anrufen + AKKUSATIV" (menelepon seseorang: Ich rufe dich an) vs "telefonieren mit + DATIV" (berbicara di telepon: Ich telefoniere mit dir).',
  },

  einladen: {
    word: 'einladen',
    displayWord: 'einladen',
    ipa: '/ˈaɪ̯nˌlaːdn̩/',
    translations: ['mengundang', 'mentraktir'],
    meaningSummary: 'Meminta seseorang untuk datang ke pesta atau mentraktir makanan/minuman.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'einladen',
        praesens: 'lädt ein (du lädst ein, er lädt ein - a->ä)',
        praeteritum: 'lud ein',
        partizip2: 'eingeladen',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: true,
        prefix: 'ein',
      },
    },
    synonyms: [
      { word: 'bitten zu', wordClass: 'Verb', translation: 'memohon kehadiran di' },
      { word: 'freihalten', wordClass: 'Verb', translation: 'mentraktir biaya makan' },
    ],
    antonyms: [
      { word: 'ausladen', wordClass: 'Verb', translation: 'membatalkan undangan / mendepak' },
      { word: 'ausschließen', wordClass: 'Verb', translation: 'mengecualikan / tidak menyertakan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich möchte dich zu meiner Geburtstagsparty einladen.',
        indonesian: 'Saya ingin mengundangmu ke pesta ulang tahun saya.',
        contextNote: 'einladen + Akkusativ + zu + Dativ',
      },
      {
        level: 'A2',
        german: 'Heute lade ich dich zum Abendessen ein!',
        indonesian: 'Hari ini saya yang mentraktirmu makan malam!',
        contextNote: 'Arti traktiran',
      },
    ],
    learningTips: 'Kata kerja terpisah dan tak beraturan (Vokalwechsel a -> ä): "lädt ein", Präteritum: "lud ein", Partizip II: "eingeladen".',
  },

  bequem: {
    word: 'bequem',
    displayWord: 'bequem',
    ipa: '/bəˈkveːm/',
    translations: ['nyaman', 'enak (dipakai/diduduki)', 'praktis'],
    meaningSummary: 'Memberikan kenyamanan fisik dan tidak melelahkan badan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'bequem',
        komparativ: 'bequemer',
        superlativ: 'am bequemsten',
      },
    },
    synonyms: [
      { word: 'gemütlich', wordClass: 'Adjektiv', translation: 'nyaman bersuasana hangat' },
      { word: 'behaglich', wordClass: 'Adjektiv', translation: 'menyenangkan damai' },
      { word: 'komfortabel', wordClass: 'Adjektiv', translation: 'komprehensif serba ada' },
    ],
    antonyms: [
      { word: 'unbequem', wordClass: 'Adjektiv', translation: 'tidak nyaman / keras' },
      { word: 'anstrengend', wordClass: 'Adjektiv', translation: 'melelahkan payah' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Dieses Sofa im Wohnzimmer ist unglaublich bequem.',
        indonesian: 'Sofa di ruang tamu ini luar biasa nyaman.',
        contextNote: 'Perabot rumah',
      },
      {
        level: 'A2',
        german: 'Zieh bequeme Schuhe für die Stadttour an!',
        indonesian: 'Pakailah sepatu yang nyaman untuk tur keliling kota!',
        contextNote: 'Pakaian dan alas kaki',
      },
    ],
    learningTips: 'Lawan kata langsung dibentuk dengan prefiks un-: "unbequem". Bisa juga bermakna negatif untuk orang pemalas yang suka kenyamanan ("er ist faul und bequem").',
  },

  gefaehrlich: {
    word: 'gefährlich',
    displayWord: 'gefährlich',
    ipa: '/ɡəˈfɛːɐ̯lɪç/',
    translations: ['berbahaya', 'berisiko tinggi', 'mengancam keselamatan'],
    meaningSummary: 'Mengandung potensi ancaman celaka, cedera, atau kerugian fisik dan jiwa.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'gefährlich',
        komparativ: 'gefährlicher',
        superlativ: 'am gefährlichsten',
      },
    },
    synonyms: [
      { word: 'riskant', wordClass: 'Adjektiv', translation: 'berisiko' },
      { word: 'bedrohlich', wordClass: 'Adjektiv', translation: 'mengancam membahayakan' },
      { word: 'brenzlig', wordClass: 'Adjektiv', translation: 'genting rawan bahaya' },
    ],
    antonyms: [
      { word: 'ungefährlich', wordClass: 'Adjektiv', translation: 'tidak berbahaya' },
      { word: 'sicher', wordClass: 'Adjektiv', translation: 'aman terlindungi' },
      { word: 'harmlos', wordClass: 'Adjektiv', translation: 'jinak tanpa ancaman bahaya' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Es ist gefährlich, nachts ohne Licht Fahrrad zu fahren.',
        indonesian: 'Sangat berbahaya bersepeda pada malam hari tanpa lampu penerangan.',
        contextNote: 'Keselamatan lalu lintas',
      },
      {
        level: 'A2',
        german: 'Die Strömung in diesem Fluss ist extrem gefährlich.',
        indonesian: 'Arus di sungai ini sangat berbahaya.',
        contextNote: 'Bahaya alam bebas',
      },
    ],
    learningTips: 'Berasal dari kata benda "die Gefahr" (bahaya). Akhiran "-lich" mengubahnya menjadi kata sifat.',
  },

  sicher: {
    word: 'sicher',
    displayWord: 'sicher',
    ipa: '/ˈzɪçɐ/',
    translations: ['aman', 'pasti', 'yakin'],
    meaningSummary: 'Bebas dari marabahaya atau merasa tidak memiliki keraguan sedikit pun.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'sicher',
        komparativ: 'sicherer',
        superlativ: 'am sichersten',
      },
    },
    synonyms: [
      { word: 'geschützt', wordClass: 'Adjektiv', translation: 'terlindungi aman' },
      { word: 'gewiss', wordClass: 'Adjektiv', translation: 'pasti tanpa ragu' },
      { word: 'überzeugt', wordClass: 'Adjektiv', translation: 'yakin mantap' },
    ],
    antonyms: [
      { word: 'unsicher', wordClass: 'Adjektiv', translation: 'tidak aman / gamang ragu' },
      { word: 'gefährlich', wordClass: 'Adjektiv', translation: 'berbahaya' },
      { word: 'zweifelhaft', wordClass: 'Adjektiv', translation: 'meragukan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'In Deutschland sind öffentliche Verkehrsmittel sehr sicher.',
        indonesian: 'Di Jerman transportasi umum sangat aman.',
        contextNote: 'Arti: aman dari bahaya',
      },
      {
        level: 'A2',
        german: 'Bist du dir ganz sicher? - Ja, absolut!',
        indonesian: 'Apakah kamu benar-benar yakin? - Ya, pasti!',
        contextNote: 'Arti: yakin/pasti (sich sicher sein)',
      },
    ],
    learningTips: 'Kata serbaguna A2: bermakna "aman" (safe) dan bermakna "yakin/pasti" (sure). Frasa: "sicher sein" (merasa yakin).',
  },

  sauber: {
    word: 'sauber',
    displayWord: 'sauber',
    ipa: '/ˈzaʊ̯bɐ/',
    translations: ['bersih', 'higienis', 'rapi'],
    meaningSummary: 'Bebas dari kotoran, debu, noda, atau pencemaran.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'sauber',
        komparativ: 'sauberer',
        superlativ: 'am saubersten',
      },
    },
    synonyms: [
      { word: 'rein', wordClass: 'Adjektiv', translation: 'murni suci tanpa noda' },
      { word: 'hygienisch', wordClass: 'Adjektiv', translation: 'higienis' },
      { word: 'gepflegt', wordClass: 'Adjektiv', translation: 'terawat apik' },
    ],
    antonyms: [
      { word: 'schmutzig', wordClass: 'Adjektiv', translation: 'kotor berdebu' },
      { word: 'dreckig', wordClass: 'Adjektiv', translation: 'dekil jorok' },
      { word: 'unrein', wordClass: 'Adjektiv', translation: 'bernoda kotor' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Das Hotelzimmer war sehr sauber und ordentlich.',
        indonesian: 'Kamar hotel itu sangat bersih dan rapi.',
        contextNote: 'Kebersihan kamar',
      },
      {
        level: 'A2',
        german: 'Wir brauchen saubere Gläser für die Gäste.',
        indonesian: 'Kita membutuhkan gelas-gelas yang bersih untuk para tamu.',
        contextNote: 'Peralatan makan bersih',
      },
    ],
    learningTips: 'Kata kerja pembersihannya adalah "saubermachen" (membersihkan). Kata bendanya adalah "die Sauberkeit" (kebersihan).',
  },

  puenktlich: {
    word: 'pünktlich',
    displayWord: 'pünktlich',
    ipa: '/ˈpʏŋktlɪç/',
    translations: ['tepat waktu', 'disiplin jadwal'],
    meaningSummary: 'Tiba atau terjadi tepat pada jam atau waktu yang telah ditetapkan tanpa keterlambatan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'pünktlich',
        komparativ: 'pünktlicher',
        superlativ: 'am pünktlichsten',
      },
    },
    synonyms: [
      { word: 'zeitgenau', wordClass: 'Adjektiv', translation: 'persis waktunya' },
      { word: 'rechtzeitig', wordClass: 'Adjektiv', translation: 'tepat pada waktunya' },
      { word: 'termingerecht', wordClass: 'Adjektiv', translation: 'sesuai tenggat janji' },
    ],
    antonyms: [
      { word: 'unpünktlich', wordClass: 'Adjektiv', translation: 'tidak tepat waktu / suka telat' },
      { word: 'verspätet', wordClass: 'Adjektiv', translation: 'terlambat tertunda' },
      { word: 'säumig', wordClass: 'Adjektiv', translation: 'molor terlambat' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'In Deutschland ist es sehr wichtig, pünktlich zum Termin zu kommen.',
        indonesian: 'Di Jerman sangatlah penting untuk datang tepat waktu menghadiri janji temu.',
        contextNote: 'Kultur ketepatan waktu Jerman',
      },
      {
        level: 'A2',
        german: 'Der Zug fährt heute ganz pünktlich ab.',
        indonesian: 'Kereta api berangkat tepat waktu hari ini.',
        contextNote: 'Jadwal keberangkatan',
      },
    ],
    learningTips: 'Nilai budaya Jerman yang fundamental: "Pünktlichkeit ist die Höflichkeit der Könige" (Ketepatan waktu adalah kesantunan para raja).',
  },
};
