import { WordResult } from '../types';

/**
 * Curated High-Frequency German Vocabulary - Level C2
 * Goethe-Institut & telc C2 Curriculum (Großes Deutsches Sprachdiplom C2)
 * Mastery level: nuances, native idiom, literary style, rhetoric
 */
export const C2_WORDS: Record<string, WordResult> = {
  nuance: {
    word: 'die Nuance',
    displayWord: 'die Nuance',
    ipa: '/nyˈãːsə, nyˈaŋsə/',
    translations: ['nuansa pembeda halus', 'gradasi makna tipis', 'perbedaan renik'],
    meaningSummary: 'Perbedaan atau peralihan yang sangat halus, renik, dan terselubung dalam makna, warna, nada suara, atau perasaan.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Nuance',
        plural: 'die Nuancen',
        genitivSingular: 'der Nuance',
      },
    },
    synonyms: [
      { word: 'die Schattierung', article: 'die', wordClass: 'Nomen', translation: 'gradasi bayangan corak' },
      { word: 'die Feinheit', article: 'die', wordClass: 'Nomen', translation: 'kehalusan detail' },
      { word: 'der Zwischenton', article: 'der', wordClass: 'Nomen', translation: 'nada antara tersirat' },
    ],
    antonyms: [
      { word: 'der Holzschnitt', article: 'der', wordClass: 'Nomen', translation: 'gambaran kasar tanpa detail' },
      { word: 'die Verallgemeinerung', article: 'die', wordClass: 'Nomen', translation: 'generalisasi serampangan' },
      { word: 'die Schwarz-Weiß-Malerei', article: 'die', wordClass: 'Nomen', translation: 'polarisasi hitam-putih kaku' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Ein meisterhafter Übersetzer muss die feinsten sprachlichen und kulturellen Nuancen des Originals präzise erfassen.',
        indonesian: 'Seorang penerjemah ulung harus mampu menangkap nuansa linguistik dan kultural paling renik dari naskah asli secara presisi.',
        contextNote: 'Hermeneutika sastra dan penerjemahan profesional',
      },
      {
        level: 'C2',
        german: 'Zwischen Ironie und Zynismus liegt oft nur eine feine Nuance im Tonfall.',
        indonesian: 'Antara ironi dan sinisme kerap kali hanya terbentang satu nuansa pembeda tipis pada intonasi nada bicara.',
        contextNote: 'Analisis retorika komunikasi tingkat mahir',
      },
    ],
    learningTips: 'Kata serapan Prancis (la nuance). Kata sifatnya: "nuanciert" (sangat kaya akan nuansa halus / tidak kaku). Lawan pemikiran: "Schwarz-Weiß-Denken" (berpikir biner tanpa nuansa).',
  },

  quintessenz: {
    word: 'die Quintessenz',
    displayWord: 'die Quintessenz',
    ipa: '/kvɪntʔɛˈsɛnt͡s/',
    translations: ['intisari paling hakiki', 'ekstrak murni gagasan', 'kristalisasi pokok'],
    meaningSummary: 'Hakikat terdalam dan paling murni yang disaring dari keseluruhan perdebatan, karya, atau peristiwa.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Quintessenz',
        plural: '-',
        genitivSingular: 'der Quintessenz',
      },
    },
    synonyms: [
      { word: 'das Wesentliche', article: 'das', wordClass: 'Nomen', translation: 'hal pokok yang hakiki' },
      { word: 'der Kern', article: 'der', wordClass: 'Nomen', translation: 'inti biji persoalan' },
      { word: 'das Destillat', article: 'das', wordClass: 'Nomen', translation: 'destilat sari murni' },
    ],
    antonyms: [
      { word: 'das Beiwerk', article: 'das', wordClass: 'Nomen', translation: 'aksesori tambahan sampingan' },
      { word: 'das Beiwerk', article: 'das', wordClass: 'Nomen', translation: 'dekorasi pelengkap luar' },
      { word: 'die Peripherie', article: 'die', wordClass: 'Nomen', translation: 'wilayah pinggiran' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die Quintessenz seiner jahrzehntelangen Forschungen lässt sich in einer einzigen Formel verdichten.',
        indonesian: 'Intisari paling hakiki dari risetnya selama berpuluh-puluh tahun dapat dipadatkan ke dalam sebuah rumus tunggal.',
        contextNote: 'Sintesis riset akademis mahir',
      },
      {
        level: 'C2',
        german: 'Was ist die politische Quintessenz dieses über fünfhundert Seiten langen Untersuchungsberichts?',
        indonesian: 'Apakah intisari politik hakiki dari laporan investigasi setebal lebih dari lima ratus halaman ini?',
        contextNote: 'Esensi laporan yudisial',
      },
    ],
    learningTips: 'Secara etimologis berasal dari bahasa Latin filosofis Abad Pertengahan: "quinta essentia" (elemen kelima yang menyusun alam semesta di luar tanah, air, udara, api).',
  },

  obsolet: {
    word: 'obsolet',
    displayWord: 'obsolet',
    ipa: '/ɔpzoˈleːt/',
    translations: ['usang', 'kedaluwarsa tak lagi terpakai', 'ditinggalkan perkembangan zaman'],
    meaningSummary: 'Tidak lagi lazim digunakan, sudah tergantikan oleh inovasi yang lebih mutakhir, atau sudah kehilangan relevansinya.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'obsolet',
        komparativ: 'obsoleter',
        superlativ: 'am obsoletesten',
      },
    },
    synonyms: [
      { word: 'überholt', wordClass: 'Adjektiv', translation: 'tertinggal zaman kadaluwarsa' },
      { word: 'hinfällig', wordClass: 'Adjektiv', translation: 'gugur tak berlaku lagi' },
      { word: 'unzeitgemäß', wordClass: 'Adjektiv', translation: 'tak sesuai tuntutan masa kini' },
    ],
    antonyms: [
      { word: 'zeitgemäß', wordClass: 'Adjektiv', translation: 'relevan mutakhir' },
      { word: 'hochaktuell', wordClass: 'Adjektiv', translation: 'sangat aktual terdepan' },
      { word: 'unumgänglich', wordClass: 'Adjektiv', translation: 'mutlak tak tergantikan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Durch den Siegeszug generativer KI-Modelle wurden bisherige Routinemethoden der Datenverarbeitung schlagartig obsolet.',
        indonesian: 'Akibat pesatnya kejayaan model AI generatif, metode rutin pengolahan data terdahulu seketika menjadi usang.',
        contextNote: 'Disrupsi teknologi mutakhir',
      },
      {
        level: 'C2',
        german: 'Diese veraltete Verwaltungsvorschrift ist rechtlich längst obsolet geworden.',
        indonesian: 'Peraturan tata usaha yang kuno ini secara yuridis sudah lama kehilangan dasar keberlakuannya.',
        contextNote: 'Deregulasi administrasi negara',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "obsoletus" (usang terkikis). Sering dipakai dalam frasa predikatif: "etwas ist obsolet geworden" (sesuatu telah menjadi usang).',
  },

  fungieren: {
    word: 'fungieren',
    displayWord: 'fungieren',
    ipa: '/fʊŋˈɡiːʁən/',
    translations: ['berperan resmi', 'bertindak selaku', 'menjalankan fungsi sebagai'],
    meaningSummary: 'Mengemban mandat atau menjalankan tugas kedinasan dalam peran atau kapasitas fungsional tertentu.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'fungieren',
        praesens: 'fungiert',
        praeteritum: 'fungierte',
        partizip2: 'fungiert',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'agieren als', wordClass: 'Verb', translation: 'beraksi selaku' },
      { word: 'dienen als', wordClass: 'Verb', translation: 'berfungsi sebagai' },
      { word: 'ein Amt bekleiden', wordClass: 'Verb', translation: 'menjabat jabatan resmi' },
    ],
    antonyms: [
      { word: 'abdanken', wordClass: 'Verb', translation: 'turun takhta melepaskan jabatan' },
      { word: 'suspendiert sein', wordClass: 'Verb', translation: 'diskors dari tugas' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Der erfahrene Diplomat fungierte bei den Friedensgesprächen als neutraler Vermittler zwischen den Konfliktparteien.',
        indonesian: 'Diplomat kawakan tersebut bertindak sebagai mediator netral di antara pihak-pihak yang bertikai dalam perundingan damai.',
        contextNote: 'Mediasi diplomatik internasional',
      },
      {
        level: 'C2',
        german: 'Das Rathaus fungiert während der Festwoche als Hauptschauplatz für kulturelle Darbietungen.',
        indonesian: 'Balai kota berfungsi sebagai panggung utama bagi pergelaran kebudayaan selama pekan festival.',
        contextNote: 'Peran fungsional gedung',
      },
    ],
    learningTips: 'Selalu berkolokasi dengan preposisi: "fungieren als + Nominativ" (bertindak selaku / bertugas sebagai). Berasal dari bahasa Latin "fungi" (menunaikan tugas).',
  },

  manifestieren: {
    word: 'manifestieren',
    displayWord: 'manifestieren',
    ipa: '/manifɛsˈtiːʁən/',
    translations: ['mengejawantah', 'mewujud nyata secara kasat mata', 'menampakkan diri'],
    meaningSummary: 'Menjadi tampak jelas, nyata, dan terwujud secara lahiriah dari suatu konsep abstrak, gejala, atau niat batin.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'manifestieren',
        praesens: 'manifestiert',
        praeteritum: 'manifestierte',
        partizip2: 'manifestiert',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'sich offenbaren', wordClass: 'Verb', translation: 'menyingkapkan wujud diri' },
      { word: 'Gestalt annehmen', wordClass: 'Verb', translation: 'mengambil rupa wujud kongkret' },
      { word: 'zutage treten', wordClass: 'Verb', translation: 'muncul kasat mata ke permukaan' },
    ],
    antonyms: [
      { word: 'verblassen', wordClass: 'Verb', translation: 'memudar sirna' },
      { word: 'im Verborgenen bleiben', wordClass: 'Verb', translation: 'tetap tersembunyi' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die gesellschaftliche Spaltung manifestiert sich zunehmend in aggressiven Debatten auf digitalen Plattformen.',
        indonesian: 'Keterbelahan sosial kian mengejawantah secara nyata dalam perdebatan agresif di berbagai platform digital.',
        contextNote: 'Sosiologi wacana publik kontemporer',
      },
      {
        level: 'C2',
        german: 'Sein genialer Geist manifestierte sich in revolutionären mathematischen Entdeckungen.',
        indonesian: 'Kecerdasannya yang brilian terwujud nyata dalam penemuan matematika revolusioner.',
        contextNote: 'Manifestasi bakat intelektual',
      },
    ],
    learningTips: 'Hampir selalu digunakan dalam bentuk refleksif: "sich manifestieren in + Dativ" (mengejawantah / mewujud dalam bentuk...). Kata bendanya: "die Manifestation".',
  },

  konterkarieren: {
    word: 'konterkarieren',
    displayWord: 'konterkarieren',
    ipa: '/kɔntɐkaˈʁiːʁən/',
    translations: ['menggagalkan strategi', 'bertolak belakang menggagalkan', 'menetralkan upaya'],
    meaningSummary: 'Bertindak sedemikian rupa sehingga rencana, tujuan, atau kebijakan pihak lain menjadi buyar dan gagal tercapai.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'konterkarieren',
        praesens: 'konterkariert',
        praeteritum: 'konterkarierte',
        partizip2: 'konterkariert',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'durchkreuzen', wordClass: 'Verb', translation: 'menjegal menggagalkan rencana' },
      { word: 'hintertreiben', wordClass: 'Verb', translation: 'menyabotase dari belakang' },
      { word: 'unterlaufen', wordClass: 'Verb', translation: 'mengelabui aturan' },
    ],
    antonyms: [
      { word: 'begünstigen', wordClass: 'Verb', translation: 'menguntungkan memudahkan' },
      { word: 'befördern', wordClass: 'Verb', translation: 'mendorong kemajuan' },
      { word: 'unterstützen', wordClass: 'Verb', translation: 'mendukung sepenuhnya' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die kurzsichtige Subventionspolitik konterkariert die nationalen Klimaziele in eklatanter Weise.',
        indonesian: 'Kebijakan subsidi yang berpandangan sempit itu bertolak belakang dan menggagalkan target iklim nasional secara mencolok.',
        contextNote: 'Kritik tajam kebijakan ekonomi fiskal',
      },
      {
        level: 'C2',
        german: 'Eigenmächtige Alleingänge einzelner Mitgliedsstaaten konterkarieren den mühsam ausgehandelten Konsens.',
        indonesian: 'Tindakan sepihak beberapa negara anggota menjegal konsensus yang telah dinegosiasikan dengan susah payah.',
        contextNote: 'Dinamika perpolitikan Uni Eropa',
      },
    ],
    learningTips: 'Berasal dari bahasa Prancis "contrecarrer" (melawan/menentang). Kosakata eliter tingkat tinggi untuk esai editorial kritis.',
  },

  penibel: {
    word: 'penibel',
    displayWord: 'penibel',
    ipa: '/peˈniːbl̩/',
    translations: ['teramat cermat teliti', 'sangat rinci sampai ke hal terkecil', 'telaten rewel'],
    meaningSummary: 'Sangat memperhatikan ketepatan terkecil dengan ketelitian luar biasa yang kadang terasa berlebihan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'penibel',
        komparativ: 'penibler',
        superlativ: 'am penibelsten',
      },
    },
    synonyms: [
      { word: 'haarklein', wordClass: 'Adjektiv', translation: 'serinci sehelai rambut' },
      { word: 'akribisch', wordClass: 'Adjektiv', translation: 'sangat cermat akurat' },
      { word: 'peinlich genau', wordClass: 'Adjektiv', translation: 'sangat amat teliti' },
    ],
    antonyms: [
      { word: 'nachlässig', wordClass: 'Adjektiv', translation: 'lalai sembrono' },
      { word: 'schlampig', wordClass: 'Adjektiv', translation: 'ceroboh berantakan' },
      { word: 'oberflächlich', wordClass: 'Adjektiv', translation: 'asal-asalan di permukaan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die Forensiker dokumentierten penibel jede noch so unscheinbare Faser am Tatort.',
        indonesian: 'Tim forensik mendokumentasikan setiap serat terkecil di tempat kejadian perkara dengan kecermatan yang luar biasa teliti.',
        contextNote: 'Investigasi forensik kriminal',
      },
      {
        level: 'C2',
        german: 'Er achtet penibel darauf, dass alle Abrechnungen auf den Cent genau übereinstimmen.',
        indonesian: 'Dia mengawasi dengan sangat teliti agar seluruh neraca pembukuan tepat sampai ke pecahan sen terkecil.',
        contextNote: 'Ketelitian audit akuntansi',
      },
    ],
    learningTips: 'Berasal dari bahasa Prancis "pénible" (melelahkan / bersusah payah). Di Jerman bermakna ketelitian perfeksionis tingkat tinggi.',
  },

  fulminant: {
    word: 'fulminant',
    displayWord: 'fulminant',
    ipa: '/fʊlmiˈnant/',
    translations: ['luar biasa dahsyat', 'cemerlang memukau', 'menggelegar mengagumkan'],
    meaningSummary: 'Sangat mengesankan, memikat, bertenaga besar, atau terjadi secara mendadak dengan intensitas luar biasa.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'fulminant',
        komparativ: 'fulminanter',
        superlativ: 'am fulminantesten',
      },
    },
    synonyms: [
      { word: 'brillant', wordClass: 'Adjektiv', translation: 'cemerlang berkilau' },
      { word: 'überwältigend', wordClass: 'Adjektiv', translation: 'memukau menggetarkan' },
      { word: 'furios', wordClass: 'Adjektiv', translation: 'berapi-api penuh gelora' },
    ],
    antonyms: [
      { word: 'glanzlos', wordClass: 'Adjektiv', translation: 'redup tanpa kilau' },
      { word: 'enttäuschend', wordClass: 'Adjektiv', translation: 'mengecewakan hambar' },
      { word: 'mittelmäßig', wordClass: 'Adjektiv', translation: 'medioker rata-rata biasa' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die Pianistin beendete das Konzert mit einer fulminanten Darbietung der Sonate von Beethoven.',
        indonesian: 'Pianis tersebut menutup konser dengan pergelaran yang luar biasa dahsyat dan cemerlang membawakan sonata Beethoven.',
        contextNote: 'Kritik seni musik klasik',
      },
      {
        level: 'C2',
        german: 'Das Start-up feierte einen fulminanten Börsenstart, der alle Erwartungen der Analysten übertraf.',
        indonesian: 'Perusahaan rintisan itu merayakan debut bursa saham yang menggelegar dan melampaui seluruh ekspektasi analis.',
        contextNote: 'Pencapaian pasar modal',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "fulmen" (kilat petir). Kolokasi klasik C2: "ein fulminanter Erfolg" (kesuksesan yang gilang-gemilang) atau "ein fulminanter Auftakt" (pembukaan yang memukau).',
  },
};
