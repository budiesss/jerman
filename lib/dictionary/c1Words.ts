import { WordResult } from '../types';

/**
 * Curated High-Frequency German Vocabulary - Level C1
 * Goethe-Institut & telc C1 Curriculum (Goethe-Zertifikat C1)
 */
export const C1_WORDS: Record<string, WordResult> = {
  rahmenbedingung: {
    word: 'die Rahmenbedingung',
    displayWord: 'die Rahmenbedingung',
    ipa: '/ˈʁaːmənbəˌdɪŋʊŋ/',
    translations: ['kondisi kerangka kerja', 'parameter penentu kebijakan', 'syarat lingkungan struktural'],
    meaningSummary: 'Kondisi umum makroekonomi, hukum, atau sosial yang membatasi dan menentukan jalannya suatu kegiatan atau kebijakan.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Rahmenbedingung',
        plural: 'die Rahmenbedingungen',
        genitivSingular: 'der Rahmenbedingung',
      },
    },
    synonyms: [
      { word: 'die Grundvoraussetzung', article: 'die', wordClass: 'Nomen', translation: 'prasyarat mendasar' },
      { word: 'die Rahmenvorgabe', article: 'die', wordClass: 'Nomen', translation: 'ketentuan pedoman kerangka' },
      { word: 'die Gegebenheiten', article: 'die', wordClass: 'Nomen', translation: 'keadaan-keadaan obyektif lingkungan' },
    ],
    antonyms: [
      { word: 'das Vakuum', article: 'das', wordClass: 'Nomen', translation: 'ruang hampa tanpa aturan' },
      { word: 'die Willkür', article: 'die', wordClass: 'Nomen', translation: 'kesewenang-wenangan tanpa kerangka acuan' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Günstige rechtliche Rahmenbedingungen sind unerlässlich, um ausländische Direktinvestitionen anzulocken.',
        indonesian: 'Kondisi kerangka hukum yang kondusif mutlak diperlukan guna memikat arus investasi langsung asing.',
        contextNote: 'Kebijakan ekonomi makro dan investasi',
      },
      {
        level: 'C1',
        german: 'Die veränderten klimatischen Rahmenbedingungen erfordern ein rasches Umdenken im Städtebau.',
        indonesian: 'Kondisi lingkungan iklim yang berubah menuntut pergeseran paradigma cepat dalam tata ruang perkotaan.',
        contextNote: 'Perencanaan tata ruang wilayah',
      },
    ],
    learningTips: 'Kombinasi kata majemuk: "der Rahmen" (bingkai/kerangka acuan) + "die Bedingung" (kondisi/syarat). Lazim digunakan dalam bentuk jamak: "die Rahmenbedingungen gestalten/verbessern".',
  },

  tragweite: {
    word: 'die Tragweite',
    displayWord: 'die Tragweite',
    ipa: '/ˈtʁaːkˌvaɪ̯tə/',
    translations: ['jangkauan dampak luas', 'implikasi mendalam', 'signifikansi bobot akibat'],
    meaningSummary: 'Luas dan dalamnya dampak jangka panjang dari suatu keputusan politik, hukum, atau peristiwa bersejarah.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Tragweite',
        plural: '-',
        genitivSingular: 'der Tragweite',
      },
    },
    synonyms: [
      { word: 'die Dimension', article: 'die', wordClass: 'Nomen', translation: 'dimensi bobot' },
      { word: 'die Auswirkung', article: 'die', wordClass: 'Nomen', translation: 'imbas dampak luas' },
      { word: 'die Relevanz', article: 'die', wordClass: 'Nomen', translation: 'relevansi bobot kepentingan' },
    ],
    antonyms: [
      { word: 'die Belanglosigkeit', article: 'die', wordClass: 'Nomen', translation: 'ketiadaan dampak arti sepele' },
      { word: 'die Nichtigkeit', article: 'die', wordClass: 'Nomen', translation: 'hal tak bernilai' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die volle Tragweite dieser historischen Weichenstellung wird sich erst in Jahrzehnten ermessen lassen.',
        indonesian: 'Bobot implikasi luas penuh dari peralihan arah bersejarah ini baru akan dapat ditakar puluhan tahun mendatang.',
        contextNote: 'Analisis politik kenegaraan tingkat tinggi',
      },
      {
        level: 'C1',
        german: 'Die Vorstandsmitglieder waren sich der juristischen Tragweite ihres Beschlusses nicht vollends bewusst.',
        indonesian: 'Para anggota dewan direksi tidak sepenuhnya menyadari implikasi dampak hukum dari resolusi keputusan mereka.',
        contextNote: 'Tanggung jawab hukum korporasi',
      },
    ],
    learningTips: 'Kolokasi penting C1: "die Tragweite einer Entscheidung verkennen" (meremehkan luasnya implikasi dampak keputusan) atau "eine Entscheidung von historischer Tragweite" (keputusan berbobot sejarah besar).',
  },

  dilemma: {
    word: 'das Dilemma',
    displayWord: 'das Dilemma',
    ipa: '/diˈlɛma/',
    translations: ['dilema pelik', 'situasi serba salah', 'keadaan terjepit dua pilihan buruk'],
    meaningSummary: 'Situasi terjepit di mana seseorang dihadapkan pada dua pilihan yang sama-sama berat atau membawa risiko kerugian.',
    wordClass: 'Nomen',
    cefrLevel: 'C1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Dilemma',
        plural: 'die Dilemmata / die Dilemmas',
        genitivSingular: 'des Dilemmas',
      },
    },
    synonyms: [
      { word: 'die Zwickmühle', article: 'die', wordClass: 'Nomen', translation: 'posisi terjepit serba salah' },
      { word: 'der Konflikt', article: 'der', wordClass: 'Nomen', translation: 'konflik batin pertentangan' },
      { word: 'die Notlage', article: 'die', wordClass: 'Nomen', translation: 'kondisi genting terjepit' },
    ],
    antonyms: [
      { word: 'die Eindeutigkeit', article: 'die', wordClass: 'Nomen', translation: 'kejelasan mutlak tanpa keraguan' },
      { word: 'die Ideallösung', article: 'die', wordClass: 'Nomen', translation: 'solusi ideal tanpa cela' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die Politik befindet sich im ethischen Dilemma zwischen wirtschaftlichem Wohlstand und kompromisslosem Klimaschutz.',
        indonesian: 'Pemerintah berada dalam dilema etis pelik antara mengejar kemakmuran ekonomi dan perlindungan iklim tanpa kompromi.',
        contextNote: 'Debat etika kebijakan publik',
      },
      {
        level: 'C1',
        german: 'Um aus diesem fatalen Dilemma zu entkommen, bedarf es eines mutigen Paradigmenwechsels.',
        indonesian: 'Guna melepaskan diri dari dilema pelik yang fatal ini, diperlukan perubahan paradigma yang berani.',
        contextNote: 'Penyelesaian sengketa konseptual',
      },
    ],
    learningTips: 'Berasal dari bahasa Yunani "di" (dua) + "lemma" (dalil proposisi). Jamak resmi berkelas sastra: "die Dilemmata". Kolokasi: "vor einem Dilemma stehen" (berada di hadapan dilema).',
  },

  gewaehrleisten: {
    word: 'gewährleisten',
    displayWord: 'gewährleisten',
    ipa: '/ɡəˈveːɐ̯ˌlaɪ̯stn̩/',
    translations: ['menjamin kepastian', 'menggaransi', 'memastikan terwujudnya'],
    meaningSummary: 'Memberikan jaminan hukum atau tindakan nyata bahwa suatu keadaan aman atau standar kualitas pasti terpenuhi.',
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
      { word: 'garantieren', wordClass: 'Verb', translation: 'menggaransi secara formal' },
      { word: 'sicherstellen', wordClass: 'Verb', translation: 'memastikan terwujud aman' },
      { word: 'verbürgen', wordClass: 'Verb', translation: 'menjamin pertanggungan' },
    ],
    antonyms: [
      { word: 'gefährden', wordClass: 'Verb', translation: 'membahayakan kepastian' },
      { word: 'untergraben', wordClass: 'Verb', translation: 'menggerogoti jaminan' },
      { word: 'verunmöglichen', wordClass: 'Verb', translation: 'membuat jadi mustahil terwujud' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Der Staat muss zu jeder Zeit die innere und äußere Sicherheit seiner Bürger gewährleisten.',
        indonesian: 'Negara harus senantiasa menjamin kepastian keamanan internal dan eksternal warganya di setiap waktu.',
        contextNote: 'Kewajiban konstitusi negara',
      },
      {
        level: 'C1',
        german: 'Moderne Verschlüsselungsverfahren gewährleisten einen lückenlosen Schutz sensibler Kundendaten.',
        indonesian: 'Protokol enkripsi modern menjamin perlindungan menyeluruh tanpa celah bagi data sensitif nasabah.',
        contextNote: 'Jaminan keamanan siber perbankan',
      },
    ],
    learningTips: 'Kata kerja tidak terpisah (untrennbar): Partizip II adalah "gewährleistet" (bukan *gewährgeleistet). Kata bendanya: "die Gewährleistung" (garansi perlindungan hukum konsumen).',
  },

  einschaetzen: {
    word: 'einschätzen',
    displayWord: 'einschätzen',
    ipa: '/ˈaɪ̯nˌʃɛt͡sn̩/',
    translations: ['menilai menakar', 'mengukur kapasitas', 'memperkirakan peluang'],
    meaningSummary: 'Membentuk penilaian profesional atau dugaan terukur mengenai karakter, situasi, bobot, atau risiko masa depan.',
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
      { word: 'beurteilen', wordClass: 'Verb', translation: 'menilai mengadili situasi' },
      { word: 'taxieren', wordClass: 'Verb', translation: 'menaksir nilai harga/bobot' },
      { word: 'evaluieren', wordClass: 'Verb', translation: 'mengevaluasi ilmiah' },
    ],
    antonyms: [
      { word: 'fehleinschätzen', wordClass: 'Verb', translation: 'salah menaksir menilai keliru' },
      { word: 'unterschätzen', wordClass: 'Verb', translation: 'meremehkan di bawah nilai asli' },
      { word: 'überschätzen', wordClass: 'Verb', translation: 'menilai terlalu tinggi melampaui batas' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Fachleute schätzen die Wahrscheinlichkeit eines Vulkanausbruchs derzeit als äußerst gering ein.',
        indonesian: 'Para pakar saat ini menakar kemungkinan terjadinya letusan gunung berapi sebagai sangat kecil.',
        contextNote: 'Kajian mitigasi bencana geologi',
      },
      {
        level: 'C1',
        german: 'Es fällt vielen Führungskräften schwer, die eigenen Schwächen realistisch einzuschätzen.',
        indonesian: 'Banyak eksekutif merasa sulit menakar kelemahan diri sendiri secara realistis.',
        contextNote: 'Kepemimpinan dan kesadaran diri',
      },
    ],
    learningTips: 'Trennbares Verb: "schätzt ein". Konstruksi khas: "etwas einschätzen als + Akkusativ/Adjektiv" (menilai sesuatu sebagai...). Kata bendanya: "die Einschätzung" (penaksiran/opini pakar).',
  },

  eroertern: {
    word: 'erörtern',
    displayWord: 'erörtern',
    ipa: '/ɛɐ̯ˈʔœʁtɐn/',
    translations: ['membahas tuntas', 'membedah persoalan secara akademis', 'mendiskusikan multi-segi'],
    meaningSummary: 'Memeriksa, meneliti, dan mendiskusikan suatu pokok permasalahan dari berbagai sudut pandang pro dan kontra secara mendalam.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'erörtern',
        praesens: 'erörtert',
        praeteritum: 'erörterte',
        partizip2: 'erörtert',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
        prefix: 'er- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'diskutieren', wordClass: 'Verb', translation: 'mendiskusikan' },
      { word: 'durchleuchten', wordClass: 'Verb', translation: 'membedah transparan' },
      { word: 'debattieren', wordClass: 'Verb', translation: 'memperdebatkan argumen' },
    ],
    antonyms: [
      { word: 'totschweigen', wordClass: 'Verb', translation: 'membungkam isu rapat-rapat' },
      { word: 'übergehen', wordClass: 'Verb', translation: 'melewatkan tanpa pembahasan' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'In der wissenschaftlichen Abhandlung werden die sozioökonomischen Ursachen der Landflucht ausführlich erörtert.',
        indonesian: 'Dalam riset ilmiah tersebut, penyebab sosioekonomi urbanisasi dibahas secara tuntas dan mendalam.',
        contextNote: 'Penulisan karya ilmiah universitas',
      },
      {
        level: 'C1',
        german: 'Wir müssen diese Kontroverse sachlich und ohne persönliche Ressentiments erörtern.',
        indonesian: 'Kita harus membahas kontroversi ini secara obyektif dan tanpa prasangka pribadi.',
        contextNote: 'Diskusi panel diplomatik',
      },
    ],
    learningTips: 'Kata bendanya adalah "die Erörterung" (esai pembahasan argumentatif). Dalam kurikulum Jerman, jenis esai "dialektische Erörterung" (esai dialektika pro-kontra) adalah standar kelulusan Abitur.',
  },

  hinterfragen: {
    word: 'hinterfragen',
    displayWord: 'hinterfragen',
    ipa: '/hɪntɐˈfʁaːɡn̩/',
    translations: ['mempertanyakan secara kritis', 'menguji kebenaran asumsi dasar', 'menelaah motif tersembunyi'],
    meaningSummary: 'Tidak begitu saja menelan mentah-mentah suatu klaim atau tradisi, melainkan menelisik motif dan dasar logis di baliknya.',
    wordClass: 'Verb',
    cefrLevel: 'C1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'hinterfragen',
        praesens: 'hinterfragt',
        praeteritum: 'hinterfragte',
        partizip2: 'hinterfragt',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
      },
    },
    synonyms: [
      { word: 'kritisch beleuchten', wordClass: 'Verb', translation: 'menyoroti secara kritis' },
      { word: 'anzweifeln', wordClass: 'Verb', translation: 'meragukan keabsahan' },
      { word: 'infrage stellen', wordClass: 'Verb', translation: 'mempertanyakan keabsahan' },
    ],
    antonyms: [
      { word: 'blindlings hinnehmen', wordClass: 'Verb', translation: 'menerima buta tanpa bantahan' },
      { word: 'unkritisch übernehmen', wordClass: 'Verb', translation: 'mengadopsi tanpa daya kritis' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Mündige Bürger müssen mediale Darstellungen und offizielle Verlautbarungen stets kritisch hinterfragen.',
        indonesian: 'Warga negara yang cerdas dan kritis harus senantiasa mempertanyakan representasi media dan pernyataan resmi.',
        contextNote: 'Literasi media dan demokrasi',
      },
      {
        level: 'C1',
        german: 'Die Studie zwingt uns dazu, bisherige Lehrmeinungen in der Medizin grundlegend zu hinterfragen.',
        indonesian: 'Riset tersebut memaksa kita untuk menguji ulang doktrin medis terdahulu secara fundamental.',
        contextNote: 'Epistemologi dan sains medis',
      },
    ],
    learningTips: 'Kata kerja ini TIDAK terpisah (untrennbar): "er hinterfragt", Partizip II: "hinterfragt". Sangat sering muncul dalam konteks berpikir kritis (kritisches Denken).',
  },

  grundlegend: {
    word: 'grundlegend',
    displayWord: 'grundlegend',
    ipa: '/ˈɡʁʊntˌleːɡn̩t/',
    translations: ['mendasar', 'fundamental', 'radikal menyeluruh'],
    meaningSummary: 'Menyangkut fondasi terdalam yang menjadi pijakan atau memicu perombakan menyeluruh dari akar.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'grundlegend',
        komparativ: 'grundlegender',
        superlativ: 'am grundlegendsten',
      },
    },
    synonyms: [
      { word: 'fundamental', wordClass: 'Adjektiv', translation: 'fundamental berakar pokok' },
      { word: 'elementar', wordClass: 'Adjektiv', translation: 'elementer primer' },
      { word: 'basal', wordClass: 'Adjektiv', translation: 'di tingkat dasar' },
    ],
    antonyms: [
      { word: 'oberflächlich', wordClass: 'Adjektiv', translation: 'dangkal di permukaan saja' },
      { word: 'sekundär', wordClass: 'Adjektiv', translation: 'sekunder sampingan' },
      { word: 'marginal', wordClass: 'Adjektiv', translation: 'marginal sepele di pinggiran' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Die Entdeckung der Kernspaltung führte zu einer grundlegenden Wandlung unseres physikalischen Weltbildes.',
        indonesian: 'Penemuan fisi nuklir memicu perubahan mendasar terhadap paradigma fisika dunia kita.',
        contextNote: 'Revolusi ilmiah paradigma fisika',
      },
      {
        level: 'C1',
        german: 'Es besteht ein grundlegender Dissens über die Finanzierung des Projekts.',
        indonesian: 'Terdapat perselisihan mendasar mengenai skema pembiayaan proyek tersebut.',
        contextNote: 'Negosiasi pendanaan anggaran',
      },
    ],
    learningTips: 'Berasal dari "den Grund legen" (meletakkan pondasi fondasi). Kolokasi C1: "eine grundlegende Veränderung" (perubahan mendasar/radikal).',
  },

  plausibel: {
    word: 'plausibel',
    displayWord: 'plausibel',
    ipa: '/plaʊ̯ˈziːbl̩/',
    translations: ['masuk akal', 'dapat diterima akal sehat', 'meyakinkan'],
    meaningSummary: 'Argumen, bukti, atau hipotesis yang runtut dan logis sehingga mudah dipercaya kebenarannya.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'plausibel',
        komparativ: 'plausibler',
        superlativ: 'am plausibelsten',
      },
    },
    synonyms: [
      { word: 'einleuchtend', wordClass: 'Adjektiv', translation: 'gamblang masuk akal' },
      { word: 'nachvollziehbar', wordClass: 'Adjektiv', translation: 'dapat dipahami alurnya' },
      { word: 'stichhaltig', wordClass: 'Adjektiv', translation: 'sahih beralasan kuat' },
    ],
    antonyms: [
      { word: 'unplausibel', wordClass: 'Adjektiv', translation: 'tak masuk akal' },
      { word: 'widersinnig', wordClass: 'Adjektiv', translation: 'tidak masuk akal dan konyol' },
      { word: 'an den Haaren herbeigezogen', wordClass: 'Adjektiv', translation: 'dibuat-buat mengada-ada' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Der Angeklagte konnte kein plausibles Alibi für die Tatnacht vorweisen.',
        indonesian: 'Terdakwa tidak mampu menunjukkan alibi yang masuk akal untuk malam kejadian perkara.',
        contextNote: 'Hukum pidana dan persidangan',
      },
      {
        level: 'C1',
        german: 'Diese wissenschaftliche Hypothese klingt plausibel, muss jedoch erst empirisch verifiziert werden.',
        indonesian: 'Hipotesis ilmiah ini terdengar masuk akal, namun harus diverifikasi secara empiris terlebih dahulu.',
        contextNote: 'Metodologi pembuktian sains',
      },
    ],
    learningTips: 'Kata bendanya: "die Plausibilität" (kemasukakalan logis). Ujian C1 sering menguji: "eine plausible Erklärung liefern" (memberikan penjelasan yang masuk akal).',
  },

  gravierend: {
    word: 'gravierend',
    displayWord: 'gravierend',
    ipa: '/ɡʁaˈviːʁənt/',
    translations: ['sangat parah', 'genting dan berdampak berat', 'serius memprihatinkan'],
    meaningSummary: 'Kekurangan, kesalahan, atau peristiwa yang berbobot sangat berat dan membawa dampak kerugian besar.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'gravierend',
        komparativ: 'gravierender',
        superlativ: 'am gravierendsten',
      },
    },
    synonyms: [
      { word: 'schwerwiegend', wordClass: 'Adjektiv', translation: 'berbobot berat risikonya' },
      { word: 'folgenreich', wordClass: 'Adjektiv', translation: 'berimbas besar buruknya' },
      { word: 'drastisch', wordClass: 'Adjektiv', translation: 'drastis parah' },
    ],
    antonyms: [
      { word: 'harmlos', wordClass: 'Adjektiv', translation: 'tak berbahaya sepele' },
      { word: 'unbedeutend', wordClass: 'Adjektiv', translation: 'tanpa arti kecil' },
      { word: 'marginal', wordClass: 'Adjektiv', translation: 'di batas marjinal kecil' },
    ],
    examples: [
      {
        level: 'C1',
        german: 'Der Bericht deckte gravierende Mängel beim Brandschutz des Neubaus auf.',
        indonesian: 'Laporan tersebut membongkar cacat kekurangan yang sangat parah pada sistem pemadam kebakaran gedung baru itu.',
        contextNote: 'Laporan audit keselamatan konstruksi',
      },
      {
        level: 'C1',
        german: 'Ein Ausfall der IT-Infrastruktur hätte gravierende finanzielle Folgen für das Bankhaus.',
        indonesian: 'Matinya infrastruktur IT akan menimbulkan dampak finansial yang sangat fatal bagi bank tersebut.',
        contextNote: 'Manajemen risiko operasional',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "gravis" (berat). Kolokasi penting C1: "gravierende Fehler" (kesalahan fatal parah), "gravierende Folgen" (dampak teramat parah).',
  },
};
