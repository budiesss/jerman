import { WordResult } from '../types';

/**
 * Expanded C1 Vocabulary
 * Sources:
 * - Langenscheidt Großwörterbuch Deutsch als Fremdsprache
 * - Duden – Das Stilwörterbuch (Gehobener Sprachgebrauch & Stilistische Nuancen)
 * Focus:
 * - Scientific, intellectual, analytical vocabulary, abstract nouns, and high-register verbs/adjectives
 */
export const C1_EXPANDED: Record<string, WordResult> = {
  // --- ABSTRAKTE NOMEN & WISSENSCHAFTLICHES REGISTER ---
  paradigma: {
    word: 'das Paradigma',
    displayWord: 'das Paradigma',
    ipa: '/paʁaˈdɪɡma/',
    translations: ['paradigma', 'kerangka berpikir fundamental', 'contoh pola baku'],
    meaningSummary: 'Kerangka konseptual atau model teoretis yang menjadi dasar pandangan ilmiah dan metodologi suatu zaman.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Paradigma',
        plural: 'die Paradigmen',
        genitivSingular: 'des Paradigmas',
      },
    },
    synonyms: [
      { word: 'das Denkmodell', article: 'das', wordClass: 'Nomen', translation: 'model pemikiran' },
      { word: 'das Leitbild', article: 'das', wordClass: 'Nomen', translation: 'visi pedoman induk' },
    ],
    antonyms: [
      { word: 'die Beliebigkeit', article: 'die', wordClass: 'Nomen', translation: 'keserampangan tanpa dasar' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die Entdeckung der Relativitätstheorie leitete einen epochalen Paradigmenwechsel ein.',
        indonesian: 'Penemuan teori relativitas memulai pergeseran paradigma (Paradigmenwechsel) yang bersejarah.',
        contextNote: 'Diskursus filsafat ilmu C1',
      },
      {
        level: 'C1',
        german: 'Dieses pädagogische Paradigma stellt das autonome Lernen des Individuums in den Mittelpunkt.',
        indonesian: 'Paradigma pedagogis ini menempatkan pembelajaran otonom individu sebagai titik sentral.',
        contextNote: 'Teori pendidikan modern',
      },
    ],
    learningTips: 'Kombinasi kolokasi akademis C1 paling terkenal: "der Paradigmenwechsel" (pergeseran paradigma). Bentuk jamak bahasa Yunani: "die Paradigmen".',
  },

  implikation: {
    word: 'die Implikation',
    displayWord: 'die Implikation',
    ipa: '/ɪmplikaˈtsi̯oːn/',
    translations: ['implikasi', 'dampak tersirat', 'konsekuensi logis yang melekat'],
    meaningSummary: 'Konsekuensi logis atau makna implisit yang timbul dari suatu pernyataan atau kebijakan.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Implikation',
        plural: 'die Implikationen',
        genitivSingular: 'der Implikation',
      },
    },
    synonyms: [
      { word: 'die Folgewirkung', article: 'die', wordClass: 'Nomen', translation: 'efek turunan' },
      { word: 'die Tragweite', article: 'die', wordClass: 'Nomen', translation: 'jangkauan dampak mendalam' },
    ],
    antonyms: [
      { word: 'die Ursache', article: 'die', wordClass: 'Nomen', translation: 'penyebab mula' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die ethischen Implikationen künstlicher Intelligenz müssen interdisziplinär debattiert werden.',
        indonesian: 'Implikasi etis dari kecerdasan buatan harus diperdebatkan secara lintas disiplin ilmu.',
        contextNote: 'Wacana filsafat sains kontemporer',
      },
      {
        level: 'C1',
        german: 'Der Regierungsbeschluss birgt weitreichende ökonomische Implikationen.',
        indonesian: 'Keputusan pemerintah tersebut menyimpan implikasi ekonomi yang berdampak luas.',
        contextNote: 'Analisis kebijakan publik C1',
      },
    ],
    learningTips: 'Kolokasi khas C1: "weitreichende Implikationen bergen / haben" (mengandung implikasi yang luas). Kata kerjanya adalah "implizieren".',
  },

  ambivalenz: {
    word: 'die Ambivalenz',
    displayWord: 'die Ambivalenz',
    ipa: '/ambivaˈlɛnt͡s/',
    translations: ['ambivalensi', 'kondisi mendua rasa', 'pertentangan batin/makna ganda'],
    meaningSummary: 'Keadaan di mana perasaan, pikiran, atau nilai-nilai yang saling berlawanan hadir bersamaan.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Ambivalenz',
        plural: 'die Ambivalenzen',
        genitivSingular: 'der Ambivalenz',
      },
    },
    synonyms: [
      { word: 'die Zerrissenheit', article: 'die', wordClass: 'Nomen', translation: 'keterpecahan batin' },
      { word: 'die Doppelwertigkeit', article: 'die', wordClass: 'Nomen', translation: 'nilai ganda bertentangan' },
    ],
    antonyms: [
      { word: 'die Eindeutigkeit', article: 'die', wordClass: 'Nomen', translation: 'kejelasan tegas tanpa multitafsir' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Viele Bürger spüren eine emotionale Ambivalenz gegenüber dem rasanten technologischen Fortschritt.',
        indonesian: 'Banyak warga merasakan ambivalensi emosional terhadap kemajuan teknologi yang begitu pesat.',
        contextNote: 'Analisis sosiologis',
      },
      {
        level: 'C1',
        german: 'Die Ambivalenz dieser literarischen Figur spiegelt die moralische Krise der Epoche wider.',
        indonesian: 'Ambivalensi tokoh sastra ini mencerminkan krisis moral dari zaman tersebut.',
        contextNote: 'Kritik sastra Jerman C1',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "ambo" (keduanya) + "valere" (bernilai/berkekuatan). Kata sifatnya: "ambivalent" (bersifat mendua).',
  },

  plaedoyer: {
    word: 'das Plädoyer',
    displayWord: 'das Plädoyer',
    ipa: '/plɛdo̯aˈjeː/',
    translations: ['pledoi', 'pembelaan pidato', 'orasi pembelaan yang penuh keyakinan (+ für)'],
    meaningSummary: 'Pidato pembelaan penutup dalam persidangan pengadilan; atau seruan lisan berapi-api membela sebuah gagasan.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Plädoyer',
        plural: 'die Plädoyers',
        genitivSingular: 'des Plädoyers',
      },
    },
    synonyms: [
      { word: 'die Verteidigungsrede', article: 'die', wordClass: 'Nomen', translation: 'pidato pembelaan sidang' },
      { word: 'die Fürsprache', article: 'die', wordClass: 'Nomen', translation: 'rekomendasi pembelaan' },
    ],
    antonyms: [
      { word: 'die Anklagerede', article: 'die', wordClass: 'Nomen', translation: 'pidato tuntutan dakwaan' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Das Buch ist ein leidenschaftliches Plädoyer für mehr Menschlichkeit und soziale Gerechtigkeit.',
        indonesian: 'Buku itu merupakan orasi pembelaan (Plädoyer) yang penuh gairah demi perikemanusiaan dan keadilan sosial.',
        contextNote: 'Ulasan esai kritis',
      },
      {
        level: 'C1',
        german: 'Die Verteidigerin schloss ihr überzeugendes Plädoyer mit der Forderung nach einem Freispruch.',
        indonesian: 'Pengacara pembela menutup pledoinya yang meyakinkan dengan tuntutan vonis bebas.',
        contextNote: 'Wacana persidangan hukum C1',
      },
    ],
    learningTips: 'Serapan Prancis: lafal "ple-do-ye". Nomen-Verb-Verbindung elegan C1: "ein Plädoyer halten für..." (menyampaikan pembelaan atas...).',
  },

  // --- GEHOBENE VERBEN C1 ---
  antizipieren: {
    word: 'antizipieren',
    displayWord: 'antizipieren',
    ipa: '/antitsiˈpiːʁən/',
    translations: ['mengantisipasi', 'memperkirakan dan mendahului waktu', 'menerka lebih awal'],
    meaningSummary: 'Melihat masa depan dalam pikiran dan bersiap bertindak sebelum peristiwa terjadi.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'antizipieren',
        praesens: 'antizipiert',
        praeteritum: 'antizipierte',
        partizip2: 'antizipiert',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'vorwegnehmen', wordClass: 'Verb', translation: 'mendahului kenyataan' },
      { word: 'vorhersehen', wordClass: 'Verb', translation: 'melihat sebelumnya' },
    ],
    antonyms: [
      { word: 'reagieren', wordClass: 'Verb', translation: 'sekadar bereaksi terlambat' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Ein exzellenter Schachspieler antizipiert die Züge seines Gegners mehrere Runden im Voraus.',
        indonesian: 'Pemain catur ulung mengantisipasi langkah lawannya beberapa putaran sebelumnya.',
        contextNote: 'Analogi strategi',
      },
      {
        level: 'C1',
        german: 'Das Management versäumte es, die disruptiven Markttrends rechtzeitig zu antizipieren.',
        indonesian: 'Manajemen gagal mengantisipasi tren pasar disruptif secara tepat waktu.',
        contextNote: 'Manajemen krisis C1',
      },
    ],
    learningTips: 'Register gehoben / akademis. Dalam percakapan kasual orang lebih sering memakai "vorhersehen" atau "einplanen".',
  },

  relativieren: {
    word: 'relativieren',
    displayWord: 'relativieren',
    ipa: '/ʁelatiˈviːʁən/',
    translations: ['merelativisasi', 'menempatkan dalam perspektif seimbang', 'mengurangi kemutlakan'],
    meaningSummary: 'Melihat sesuatu tidak lagi sebagai kebenaran mutlak, melainkan tergantung pada konteks dan faktor lain.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'relativieren',
        praesens: 'relativiert',
        praeteritum: 'relativierte',
        partizip2: 'relativiert',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'in Relation setzen', wordClass: 'Verb', translation: 'membandingkan secara proporsional' },
      { word: 'abschwächen', wordClass: 'Verb', translation: 'melunakkan nada mutlak' },
    ],
    antonyms: [
      { word: 'verabsolutieren', wordClass: 'Verb', translation: 'memutlakkan secara kaku' },
      { word: 'pauschalisieren', wordClass: 'Verb', translation: 'menggeneralisir membabi buta' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Neue statistische Daten relativieren die dramatischen Befürchtungen der Vorwoche.',
        indonesian: 'Data statistik baru merelativisasi kekhawatiran dramatis pada pekan sebelumnya.',
        contextNote: 'Analisis data C1',
      },
      {
        level: 'C1',
        german: 'Man darf historische Ereignisse nicht isoliert betrachten, sondern muss sie im Gesamtkontext relativieren.',
        indonesian: 'Orang tidak boleh memandang peristiwa sejarah secara terisolasi, melainkan harus merelativisasikannya dalam konteks keseluruhan.',
        contextNote: 'Metodologi sejarah',
      },
    ],
    learningTips: 'Karakteristik debat ilmiah Jerman: "etwas relativieren" artinya meluruskan agar tidak dinilai berlebihan atau sepihak.',
  },

  postulieren: {
    word: 'postulieren',
    displayWord: 'postulieren',
    ipa: '/pɔstuˈliːʁən/',
    translations: ['mempostulatkan', 'mengajukan sebagai aksioma / tesis mutlak'],
    meaningSummary: 'Menetapkan sebuah proposisi atau tuntutan dasar yang dianggap benar tanpa perlu dibuktikan lagi.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'postulieren',
        praesens: 'postuliert',
        praeteritum: 'postulierte',
        partizip2: 'postuliert',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'fordern', wordClass: 'Verb', translation: 'menuntut prinsip' },
      { word: 'voraussetzen', wordClass: 'Verb', translation: 'mensyaratkan sebagai dasar' },
    ],
    antonyms: [
      { word: 'verwerfen', wordClass: 'Verb', translation: 'menolak anggapan' },
      { word: 'widerlegen', wordClass: 'Verb', translation: 'membantah kebenaran' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Immanuel Kant postulierte den kategorischen Imperativ als oberstes Sittengesetz.',
        indonesian: 'Immanuel Kant mempostulatkan imperatif kategoris sebagai hukum moral tertinggi.',
        contextNote: 'Filsafat Jerman murni',
      },
      {
        level: 'C1',
        german: 'Die Studie postuliert einen kausalen Zusammenhang zwischen Schlafmangel und Konzentrationsstörungen.',
        indonesian: 'Studi tersebut mempostulatkan adanya hubungan kausal antara kurang tidur dan gangguan konsentrasi.',
        contextNote: 'Metodologi riset empiris',
      },
    ],
    learningTips: 'Kata kerja khas dalam literatur filsafat dan tesis universitas Jerman. Kata bendanya: "das Postulat".',
  },

  verfechten: {
    word: 'verfechten',
    displayWord: 'verfechten',
    ipa: '/fɛɐ̯ˈfɛçtn̩/',
    translations: ['membela mati-matian', 'memperjuangkan pandangan gigih'],
    meaningSummary: 'Mempertahankan atau memperjuangkan suatu keyakinan/pendirian dengan penuh semangat melawan penentang.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'verfechten',
        praesens: 'verficht',
        praeteritum: 'verfocht',
        partizip2: 'verfochten',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'verteidigen', wordClass: 'Verb', translation: 'mempertahankan' },
      { word: 'eintreten für', wordClass: 'Verb', translation: 'membela pendirian' },
    ],
    antonyms: [
      { word: 'aufgeben', wordClass: 'Verb', translation: 'menyerah' },
      { word: 'abschwören', wordClass: 'Verb', translation: 'mengingkari keyakinan' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Sie verficht seit Jahrzehnten unermüdlich die Rechte benachteiligter Minderheiten.',
        indonesian: 'Selama berpuluh-puluh tahun ia memperjuangkan hak-hak kaum minoritas yang termarginalkan secara tak kenal lelah.',
        contextNote: 'Advokasi hak asasi manusia C1',
      },
      {
        level: 'C1',
        german: 'Welche Thesen verficht der Autor in seinem jüngsten Werk?',
        indonesian: 'Tesis-tesis mana yang dipertahankan oleh sang penulis dalam karya terbarunya?',
        contextNote: 'Diskusi akademis buku',
      },
    ],
    learningTips: 'Berasal dari kata "fechten" (berpedang/berkelahi). Vokalwechsel tak beraturan: verfechten -> er verficht -> verfocht -> verfochten.',
  },

  // --- ADJEKTIVE C1 ---
  stringent: {
    word: 'stringent',
    displayWord: 'stringent',
    ipa: '/ʃtʁɪŋˈɡɛnt/',
    translations: ['stringen', 'sangat logis runtut', 'ketat tanpa celah penalaran'],
    meaningSummary: 'Tersusun secara logis rapat dan meyakinkan tanpa kontradiksi internal.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'stringent',
        komparativ: 'stringenter',
        superlativ: 'am stringentesten',
      },
    },
    synonyms: [
      { word: 'schlüssig', wordClass: 'Adjektiv', translation: 'koheren masuk akal' },
      { word: 'konsequent', wordClass: 'Adjektiv', translation: 'konsisten konsekuen' },
      { word: 'stichhaltig', wordClass: 'Adjektiv', translation: 'berbobot tak terbantahkan' },
    ],
    antonyms: [
      { word: 'widersprüchlich', wordClass: 'Adjektiv', translation: 'kontradiktif' },
      { word: 'inkohärent', wordClass: 'Adjektiv', translation: 'rancu terpecah-pecah' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die Argumentation des Forschers war von der ersten bis zur letzten Seite überaus stringent.',
        indonesian: 'Argumentasi sang peneliti dari halaman pertama hingga terakhir amat sangat runtut dan logis.',
        contextNote: 'Pujian karya ilmiah C1',
      },
      {
        level: 'C1',
        german: 'Wir vermissen in dieser Vorlage einen stringenten roten Faden.',
        indonesian: 'Kami melihat ketiadaan benang merah yang runtut (roter Faden) dalam draf usulan ini.',
        contextNote: 'Kritik laporan kerja',
      },
    ],
    learningTips: 'Pujian tertinggi untuk tulisan ilmiah di universitas Jerman: "eine stringente Argumentation" (jalan argumen yang runtut tanpa kontradiksi).',
  },

  subtil: {
    word: 'subtil',
    displayWord: 'subtil',
    ipa: '/zʊpˈtiːl/',
    translations: ['subtil', 'halus lembut tak kasat mata', 'terselubung samar'],
    meaningSummary: 'Memiliki perbedaan atau petunjuk yang amat halus dan membutuhkan kepekaan tajam untuk menyadarinya.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'subtil',
        komparativ: 'subtiler',
        superlativ: 'am subtilsten',
      },
    },
    synonyms: [
      { word: 'feinsinnig', wordClass: 'Adjektiv', translation: 'peka berjiwa halus' },
      { word: 'hintergründig', wordClass: 'Adjektiv', translation: 'sarat makna tersirat' },
    ],
    antonyms: [
      { word: 'plump', wordClass: 'Adjektiv', translation: 'kasar terang-terangan vulgar' },
      { word: 'offensichtlich', wordClass: 'Adjektiv', translation: 'terlihat gamblang' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Der Film übt auf subtile Weise Kritik an den Machtstrukturen der Gesellschaft.',
        indonesian: 'Film itu melancarkan kritik secara terselubung dan halus terhadap struktur kekuasaan masyarakat.',
        contextNote: 'Apresiasi seni sinematik',
      },
      {
        level: 'C1',
        german: 'Es gibt subtile Bedeutungsunterschiede zwischen den beiden Synonymen.',
        indonesian: 'Terdapat perbedaan makna yang sangat halus di antara kedua sinonim tersebut.',
        contextNote: 'Analisis linguistik C1',
      },
    ],
    learningTips: 'Lafal: huruf b diucapkan lembut /zʊpˈtiːl/. Digunakan untuk ironi halus, manipulasi terselubung, atau nuansa makna berkelas.',
  },

  akribisch: {
    word: 'akribisch',
    displayWord: 'akribisch',
    ipa: '/aˈkʁiːbɪʃ/',
    translations: ['sangat teliti', 'cermat sedetail-detailnya', 'seksama tanpa cela'],
    meaningSummary: 'Melakukan sesuatu dengan tingkat kecermatan luar biasa hingga ke hal-hal terkecil.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'akribisch',
        komparativ: 'akribischer',
        superlativ: 'am akribischsten',
      },
    },
    synonyms: [
      { word: 'penibel', wordClass: 'Adjektiv', translation: 'sangat cermat rapi' },
      { word: 'peinlich genau', wordClass: 'Adjektiv', translation: 'teliti luar biasa' },
      { word: 'sorgfältig', wordClass: 'Adjektiv', translation: 'seksama' },
    ],
    antonyms: [
      { word: 'oberflächlich', wordClass: 'Adjektiv', translation: 'dangkal serampangan' },
      { word: 'nachlässig', wordClass: 'Adjektiv', translation: 'lalai teledor' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die Ermittler rekonstruierten den Tathergang mit akribischer Genauigkeit.',
        indonesian: 'Para penyidik merekonstruksi kronologi kejahatan dengan ketelitian yang luar biasa cermat.',
        contextNote: 'Penyelidikan forensik C1',
      },
      {
        level: 'C1',
        german: 'Für eine juristische Dissertation ist eine akribische Quellenarbeit unerlässlich.',
        indonesian: 'Untuk sebuah disertasi hukum, penelaahan sumber secara sangat teliti adalah hal mutlak.',
        contextNote: 'Metodologi penulisan doktoral',
      },
    ],
    learningTips: 'Kolokasi wajib C1: "akribische Genauigkeit" (kecermatan yang luar biasa teliti). Berasal dari bahasa Yunani "akribeia" (ketelitian eksak).',
  },
};
