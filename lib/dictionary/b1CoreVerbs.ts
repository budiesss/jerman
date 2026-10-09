import { WordResult } from '../types';

/**
 * Curated Essential High-Frequency German Verbs & Core Vocabulary (B1/B2)
 * Filling critical communication gaps: verbinden, trennen, untersuchen, etc.
 */
export const B1_CORE_VERBS: Record<string, WordResult> = {
  verbinden: {
    word: 'verbinden',
    displayWord: 'verbinden',
    ipa: '/fɛɐ̯ˈbɪndn̩/',
    translations: ['menghubungkan', 'menyambung', 'membalut luka', 'menyatukan'],
    meaningSummary: 'Menyatukan dua bagian, menghubungkan saluran komunikasi atau perangkat, atau membalut luka dengan perban.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'verbinden',
        praesens3sg: 'verbindet',
        praeteritum: 'verband',
        perfekt: 'hat verbunden',
        hilfsverb: 'haben',
        partizip2: 'verbunden',
        regularitaet: 'unregelmäßig',
      },
    },
    synonyms: [
      { word: 'verknüpfen', wordClass: 'Verb', translation: 'mengaitkan / menghubungkan' },
      { word: 'anschließen', wordClass: 'Verb', translation: 'menyambungkan ke aliran/jaringan' },
      { word: 'bandagieren', wordClass: 'Verb', translation: 'membalut luka perban' },
      { word: 'vereinigen', wordClass: 'Verb', translation: 'menyatukan secara harmonis' },
    ],
    antonyms: [
      { word: 'trennen', wordClass: 'Verb', translation: 'memisahkan / memutus' },
      { word: 'lösen', wordClass: 'Verb', translation: 'melepaskan ikatan' },
      { word: 'abbrechen', wordClass: 'Verb', translation: 'memutuskan koneksi secara tiba-tiba' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich verbinde mein Smartphone mit dem WLAN-Netzwerk.',
        indonesian: 'Saya menghubungkan ponsel cerdas saya ke jaringan Wi-Fi.',
      },
      {
        level: 'B1',
        german: 'Die Krankenschwester verbindet die Schnittwunde am Arm des Patienten sorgfältig.',
        indonesian: 'Perawat itu membalut luka gores di lengan pasien dengan hati-hati.',
      },
      {
        level: 'B2',
        german: 'Eine tiefe Freundschaft verbindet die beiden Familien seit vielen Jahrzehnten.',
        indonesian: 'Persahabatan yang mendalam menyatukan kedua keluarga tersebut selama puluhan tahun.',
      },
    ],
  },

  verbindung: {
    word: 'die Verbindung',
    displayWord: 'die Verbindung',
    ipa: '/fɛɐ̯ˈbɪndʊŋ/',
    translations: ['hubungan', 'koneksi', 'sambungan', 'senyawa kimia'],
    meaningSummary: 'Kaitan atau kontak antara dua hal, relasi transportasi, atau persenyawaan unsur kimia.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Verbindung',
        plural: 'die Verbindungen',
        genitivSingular: 'der Verbindung',
      },
    },
    synonyms: [
      { word: 'der Anschluss', article: 'der', wordClass: 'Nomen', translation: 'sambungan jaringan / kereta transit' },
      { word: 'der Kontakt', article: 'der', wordClass: 'Nomen', translation: 'kontak relasi' },
      { word: 'die Verknüpfung', article: 'die', wordClass: 'Nomen', translation: 'keterkaitan antarsistem' },
    ],
    antonyms: [
      { word: 'die Trennung', article: 'die', wordClass: 'Nomen', translation: 'pemisahan / perpisahan' },
      { word: 'die Isolierung', article: 'die', wordClass: 'Nomen', translation: 'pengisolasian' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Die Internetverbindung ist heute leider sehr langsam.',
        indonesian: 'Koneksi internet hari ini sayangnya sangat lambat.',
      },
      {
        level: 'B1',
        german: 'Ich stehe mit meinen ehemaligen Studienkollegen immer noch in regelmäßiger Verbindung.',
        indonesian: 'Saya masih menjalin hubungan komunikasi rutin dengan mantan rekan kuliah saya.',
      },
    ],
  },

  verbindlich: {
    word: 'verbindlich',
    displayWord: 'verbindlich',
    ipa: '/fɛɐ̯ˈbɪntliç/',
    translations: ['mengikat secara hukum', 'pasti / resmi', 'ramah sopan'],
    meaningSummary: 'Memiliki kekuatan hukum yang harus ditaati, atau bersikap ramah dan menyenangkan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'verbindlich',
        komparativ: 'verbindlicher',
        superlativ: 'am verbindlichsten',
      },
    },
    synonyms: [
      { word: 'verpflichtend', wordClass: 'Adjektiv', translation: 'wajib mengikat' },
      { word: 'rechtskräftig', wordClass: 'Adjektiv', translation: 'berkekuatan hukum' },
      { word: 'zuvorkommend', wordClass: 'Adjektiv', translation: 'ramah membantu' },
    ],
    antonyms: [
      { word: 'unverbindlich', wordClass: 'Adjektiv', translation: 'tidak mengikat / tentatif' },
      { word: 'freiwillig', wordClass: 'Adjektiv', translation: 'sukarela' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Dieses Angebot ist bis zum Ende des Monats verbindlich.',
        indonesian: 'Penawaran ini mengikat secara resmi hingga akhir bulan.',
      },
    ],
  },

  verbieten: {
    word: 'verbieten',
    displayWord: 'verbieten',
    ipa: '/fɛɐ̯ˈbiːtn̩/',
    translations: ['melarang', 'tidak mengizinkan', 'mengharamkan'],
    meaningSummary: 'Menyatakan bahwa suatu tindakan tidak boleh dilakukan berdasarkan hukum, aturan resmi, atau kewenangan.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'verbieten',
        praesens3sg: 'verbietet',
        praeteritum: 'verbot',
        perfekt: 'hat verboten',
        hilfsverb: 'haben',
        partizip2: 'verboten',
        regularitaet: 'unregelmäßig',
      },
    },
    synonyms: [
      { word: 'untersagen', wordClass: 'Verb', translation: 'melarang secara formal' },
      { word: 'sperren', wordClass: 'Verb', translation: 'memblokir izin' },
      { word: 'verwehren', wordClass: 'Verb', translation: 'menolak memberi izin' },
    ],
    antonyms: [
      { word: 'erlauben', wordClass: 'Verb', translation: 'mengizinkan' },
      { word: 'gestatten', wordClass: 'Verb', translation: 'memperbolehkan' },
      { word: 'genehmigen', wordClass: 'Verb', translation: 'menyetujui / mengesahkan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Hier ist das Rauchen streng verboten.',
        indonesian: 'Di sini merokok dilarang keras.',
      },
      {
        level: 'B1',
        german: 'Der Arzt hat dem Patienten verboten, zuckerhaltige Getränke zu trinken.',
        indonesian: 'Dokter melarang pasien minum minuman manis.',
      },
      {
        level: 'B2',
        german: 'Die neue Schulordnung verbietet die Nutzung von Handys während des Unterrichts.',
        indonesian: 'Peraturan sekolah yang baru melarang penggunaan ponsel selama pelajaran.',
      },
    ],
  },

  trennen: {
    word: 'trennen',
    displayWord: 'trennen',
    ipa: '/ˈtʁɛnən/',
    translations: ['memisahkan', 'memutus', 'menceraikan', 'berpisah'],
    meaningSummary: 'Menjauhkan dua hal atau orang yang sebelumnya bersatu atau terhubung.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'trennen',
        praesens3sg: 'trennt',
        praeteritum: 'trennte',
        perfekt: 'hat getrennt',
        hilfsverb: 'haben',
        partizip2: 'getrennt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'spalten', wordClass: 'Verb', translation: 'membelah / memecah' },
      { word: 'absondern', wordClass: 'Verb', translation: 'mengasingkan / memisahkan' },
      { word: 'unterbrechen', wordClass: 'Verb', translation: 'memutus sementara' },
    ],
    antonyms: [
      { word: 'verbinden', wordClass: 'Verb', translation: 'menghubungkan / menyatukan' },
      { word: 'zusammenfügen', wordClass: 'Verb', translation: 'merangkai menyatu' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'In Deutschland muss man den Müll sorgfältig trennen.',
        indonesian: 'Di Jerman orang harus memisahkan sampah dengan cermat.',
      },
      {
        level: 'B1',
        german: 'Das Paar hat sich nach zehn Jahren Ehe einvernehmlich getrennt.',
        indonesian: 'Pasangan itu telah berpisah secara damai setelah sepuluh tahun menikah.',
      },
    ],
  },

  untersuchen: {
    word: 'untersuchen',
    displayWord: 'untersuchen',
    ipa: '/ˌʊntɐˈzuːxn̩/',
    translations: ['memeriksa', 'meneliti', 'menyelidiki', 'menguji'],
    meaningSummary: 'Mengamati secara cermat dari segi medis atau ilmiah untuk menemukan kondisi tertentu.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'untersuchen',
        praesens3sg: 'untersucht',
        praeteritum: 'untersuchte',
        perfekt: 'hat untersucht',
        hilfsverb: 'haben',
        partizip2: 'untersucht',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'prüfen', wordClass: 'Verb', translation: 'menguji / memverifikasi' },
      { word: 'erforschen', wordClass: 'Verb', translation: 'meriset ilmiah' },
      { word: 'analysieren', wordClass: 'Verb', translation: 'menganalisis' },
    ],
    antonyms: [
      { word: 'übersehen', wordClass: 'Verb', translation: 'melewatkan pandang' },
      { word: 'ignorieren', wordClass: 'Verb', translation: 'mengabaikan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Der Arzt untersucht den Patienten gründlich.',
        indonesian: 'Dokter memeriksa pasien tersebut secara menyeluruh.',
      },
      {
        level: 'B1',
        german: 'Wissenschaftler untersuchen die Ursachen des Klimawandels.',
        indonesian: 'Para ilmuwan meneliti penyebab-penyebab perubahan iklim.',
      },
    ],
  },

  unterstützen: {
    word: 'unterstützen',
    displayWord: 'unterstützen',
    ipa: '/ˌʊntɐˈʃtʏtsn̩/',
    translations: ['mendukung', 'membantu', 'mensponsori'],
    meaningSummary: 'Memberikan bantuan moral, fisik, atau finansial agar orang lain berhasil.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'unterstützen',
        praesens3sg: 'unterstützt',
        praeteritum: 'unterstützte',
        perfekt: 'hat unterstützt',
        hilfsverb: 'haben',
        partizip2: 'unterstützt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'helfen', wordClass: 'Verb', translation: 'menolong / membantu' },
      { word: 'fördern', wordClass: 'Verb', translation: 'mendorong / menyokong' },
      { word: 'beistehen', wordClass: 'Verb', translation: 'mendampingi kala susah' },
    ],
    antonyms: [
      { word: 'behindern', wordClass: 'Verb', translation: 'menghalangi' },
      { word: 'sabotieren', wordClass: 'Verb', translation: 'mensabotase' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Meine Eltern unterstützen mich finanziell während meines Studiums.',
        indonesian: 'Orang tua saya mendukung saya secara finansial selama masa kuliah saya.',
      },
    ],
  },

  beschreiben: {
    word: 'beschreiben',
    displayWord: 'beschreiben',
    ipa: '/bəˈʃʁaɪ̯bn̩/',
    translations: ['menggambarkan', 'mendeskripsikan', 'menceritakan ciri-ciri'],
    meaningSummary: 'Menyampaikan rincian atau bentuk suatu hal atau orang secara lisan maupun tulisan.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'beschreiben',
        praesens3sg: 'beschreibt',
        praeteritum: 'beschrieb',
        perfekt: 'hat beschrieben',
        hilfsverb: 'haben',
        partizip2: 'beschrieben',
        regularitaet: 'unregelmäßig',
      },
    },
    synonyms: [
      { word: 'darstellen', wordClass: 'Verb', translation: 'memaparkan' },
      { word: 'schildern', wordClass: 'Verb', translation: 'melukiskan narasi' },
    ],
    antonyms: [
      { word: 'verschweigen', wordClass: 'Verb', translation: 'merahasiakan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Können Sie den Weg zum Bahnhof bitte kurz beschreiben?',
        indonesian: 'Bisakah Anda tolong mendeskripsikan jalan menuju stasiun kereta secara singkat?',
      },
    ],
  },

  beantworten: {
    word: 'beantworten',
    displayWord: 'beantworten',
    ipa: '/bəˈʔantvɔʁtn̩/',
    translations: ['menjawab (pertanyaan/email/surat)'],
    meaningSummary: 'Memberikan respons atau jawaban atas pertanyaan tertulis maupun lisan.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'beantworten',
        praesens3sg: 'beantwortet',
        praeteritum: 'beantwortete',
        perfekt: 'hat beantwortet',
        hilfsverb: 'haben',
        partizip2: 'beantwortet',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'erwidern', wordClass: 'Verb', translation: 'menyahut' },
      { word: 'reagieren', wordClass: 'Verb', translation: 'merespons' },
    ],
    antonyms: [
      { word: 'fragen', wordClass: 'Verb', translation: 'bertanya' },
      { word: 'ignorieren', wordClass: 'Verb', translation: 'mengabaikan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich habe Ihre wichtige E-Mail sofort beantwortet.',
        indonesian: 'Saya telah segera menjawab email penting Anda.',
      },
    ],
  },

  behandeln: {
    word: 'behandeln',
    displayWord: 'behandeln',
    ipa: '/bəˈhandl̩n/',
    translations: ['merawat / mengobati', 'memperlakukan', 'membahas topik'],
    meaningSummary: 'Memberikan terapi medis pada orang sakit, memperlakukan seseorang, atau mengupas suatu topik bahasan.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'behandeln',
        praesens3sg: 'behandelt',
        praeteritum: 'behandelte',
        perfekt: 'hat behandelt',
        hilfsverb: 'haben',
        partizip2: 'behandelt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'therapieren', wordClass: 'Verb', translation: 'menerapi' },
      { word: 'umgehen mit', wordClass: 'Verb', translation: 'bersikap terhadap' },
    ],
    antonyms: [
      { word: 'vernachlässigen', wordClass: 'Verb', translation: 'menelantarkan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Der Arzt behandelt Patienten mit chronischen Schmerzen.',
        indonesian: 'Dokter itu merawat pasien-pasien penderita nyeri kronis.',
      },
      {
        level: 'B1',
        german: 'Man sollte alle Menschen mit Respekt und Freundlichkeit behandeln.',
        indonesian: 'Seseorang seharusnya memperlakukan semua orang dengan rasa hormat dan keramahan.',
      },
    ],
  },

  entdecken: {
    word: 'entdecken',
    displayWord: 'entdecken',
    ipa: '/ɛntˈdɛkn̩/',
    translations: ['menemukan', 'mendeteksi', 'menguak rahasia'],
    meaningSummary: 'Melihat atau menemukan hal yang sebelumnya belum diketahui keberadaannya.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'entdecken',
        praesens3sg: 'entdeckt',
        praeteritum: 'entdeckte',
        perfekt: 'hat entdeckt',
        hilfsverb: 'haben',
        partizip2: 'entdeckt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'auffinden', wordClass: 'Verb', translation: 'menjumpai temuan' },
      { word: 'freilegen', wordClass: 'Verb', translation: 'menyingkap' },
    ],
    antonyms: [
      { word: 'verstecken', wordClass: 'Verb', translation: 'menyembunyikan' },
      { word: 'verbergen', wordClass: 'Verb', translation: 'merahasiakan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Wir haben ein wunderschönes Café in der Altstadt entdeckt.',
        indonesian: 'Kami menemukan sebuah kafe yang sangat indah di kota tua.',
      },
    ],
  },

  entwickeln: {
    word: 'entwickeln',
    displayWord: 'entwickeln',
    ipa: '/ɛntˈvɪkl̩n/',
    translations: ['mengembangkan', 'menciptakan inovasi', 'tumbuh berkembang'],
    meaningSummary: 'Membuat produk baru melalui proses riset, atau berubah menuju kematangan bertahap.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'entwickeln',
        praesens3sg: 'entwickelt',
        praeteritum: 'entwickelte',
        perfekt: 'hat entwickelt',
        hilfsverb: 'haben',
        partizip2: 'entwickelt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'erarbeiten', wordClass: 'Verb', translation: 'merancang tekun' },
      { word: 'konzipieren', wordClass: 'Verb', translation: 'mengonsepkan' },
    ],
    antonyms: [
      { word: 'stagnieren', wordClass: 'Verb', translation: 'mandek / jalan di tempat' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Unser Software-Team entwickelt eine moderne Webanwendung.',
        indonesian: 'Tim perangkat lunak kami mengembangkan aplikasi web yang modern.',
      },
    ],
  },

  erklären: {
    word: 'erklären',
    displayWord: 'erklären',
    ipa: '/ɛɐ̯ˈklɛːʁən/',
    translations: ['menjelaskan', 'menerangkan', 'menyatakan resmi'],
    meaningSummary: 'Membuat suatu konsep menjadi jelas dan mudah dipahami oleh orang lain.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'erklären',
        praesens3sg: 'erklärt',
        praeteritum: 'erklärte',
        perfekt: 'hat erklärt',
        hilfsverb: 'haben',
        partizip2: 'erklärt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'erläutern', wordClass: 'Verb', translation: 'menguraikan rinci' },
      { word: 'verdeutlichen', wordClass: 'Verb', translation: 'memperjelas' },
    ],
    antonyms: [
      { word: 'verwirren', wordClass: 'Verb', translation: 'membingungkan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Die Lehrerin erklärt die Grammatikregel sehr geduldig.',
        indonesian: 'Guru wanita itu menjelaskan aturan tata bahasa dengan sangat sabar.',
      },
    ],
  },

  erzählen: {
    word: 'erzählen',
    displayWord: 'erzählen',
    ipa: '/ɛɐ̯ˈtsɛːlən/',
    translations: ['menceritakan', 'mengisahkan', 'bercerita'],
    meaningSummary: 'Menyampaikan rentetan peristiwa nyata atau fiksi kepada pendengar.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'erzählen',
        praesens3sg: 'erzählt',
        praeteritum: 'erzählte',
        perfekt: 'hat erzählt',
        hilfsverb: 'haben',
        partizip2: 'erzählt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'berichten', wordClass: 'Verb', translation: 'melaporkan berita' },
      { word: 'wiedergeben', wordClass: 'Verb', translation: 'memaparkan ulang' },
    ],
    antonyms: [
      { word: 'schweigen', wordClass: 'Verb', translation: 'bungkam / diam' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Opa erzählt den Kindern eine spannende Geschichte.',
        indonesian: 'Kakek menceritakan sebuah kisah seru kepada anak-anak.',
      },
    ],
  },

  erinnern: {
    word: 'erinnern',
    displayWord: 'erinnern',
    ipa: '/ɛɐ̯ˈʔɪnɐn/',
    translations: ['mengingat (sich erinnern)', 'mengingatkan orang lain'],
    meaningSummary: 'Memanggil kembali ingatan masa lalu ke dalam pikiran, atau mengingatkan seseorang akan tugas.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'erinnern',
        praesens3sg: 'erinnert',
        praeteritum: 'erinnerte',
        perfekt: 'hat erinnert',
        hilfsverb: 'haben',
        partizip2: 'erinnert',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'gedenken', wordClass: 'Verb', translation: 'mengenang jasa' },
      { word: 'mahnen', wordClass: 'Verb', translation: 'mengingatkan waspada' },
    ],
    antonyms: [
      { word: 'vergessen', wordClass: 'Verb', translation: 'melupakan / lupa' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Ich erinnere mich noch sehr gut an unsere Reise nach Berlin.',
        indonesian: 'Saya masih mengingat dengan sangat baik perjalanan kita ke Berlin.',
      },
      {
        level: 'A2',
        german: 'Bitte erinnere mich morgen früh an den Termin.',
        indonesian: 'Tolong ingatkan saya besok pagi tentang janji temu itu.',
      },
    ],
  },

  erreichen: {
    word: 'erreichen',
    displayWord: 'erreichen',
    ipa: '/ɛɐ̯ˈʁaɪ̯çn̩/',
    translations: ['mencapai tujuan', 'meraih target', 'menghubungi lewat telepon'],
    meaningSummary: 'Tiba di tempat tujuan, berhasil meraih target, atau berhasil tersambung kontak dengan seseorang.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'erreichen',
        praesens3sg: 'erreicht',
        praeteritum: 'erreichte',
        perfekt: 'hat erreicht',
        hilfsverb: 'haben',
        partizip2: 'erreicht',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'erzielen', wordClass: 'Verb', translation: 'meraih capaian' },
      { word: 'ankommen bei', wordClass: 'Verb', translation: 'tiba di' },
    ],
    antonyms: [
      { word: 'verfehlen', wordClass: 'Verb', translation: 'meleset / gagal meraih' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Sie können mich telefonisch jederzeit unter dieser Nummer erreichen.',
        indonesian: 'Anda bisa menghubungi saya lewat telepon kapan saja di nomor ini.',
      },
      {
        level: 'B1',
        german: 'Nach monatelangem Lernen hat sie ihr B2-Zertifikat erreicht.',
        indonesian: 'Setelah belajar berbulan-bulan, dia meraih sertifikat B2-nya.',
      },
    ],
  },

  verlassen: {
    word: 'verlassen',
    displayWord: 'verlassen',
    ipa: '/fɛɐ̯ˈlasn̩/',
    translations: ['meninggalkan tempat / pasangan', 'mengandalkan (sich verlassen auf)'],
    meaningSummary: 'Pergi meninggalkan ruangan atau orang, atau percaya dan bersandar pada seseorang.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'verlassen',
        praesens3sg: 'verlässt',
        praeteritum: 'verließ',
        perfekt: 'hat verlassen',
        hilfsverb: 'haben',
        partizip2: 'verlassen',
        regularitaet: 'unregelmäßig',
      },
    },
    synonyms: [
      { word: 'weggehen', wordClass: 'Verb', translation: 'berlalu pergi' },
      { word: 'vertrauen auf', wordClass: 'Verb', translation: 'mengandalkan / percaya' },
    ],
    antonyms: [
      { word: 'bleiben', wordClass: 'Verb', translation: 'tetap tinggal' },
      { word: 'ankommen', wordClass: 'Verb', translation: 'tiba' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Er verlässt das Büro pünktlich um 17 Uhr.',
        indonesian: 'Dia meninggalkan kantor tepat waktu pada pukul 17.00.',
      },
      {
        level: 'B1',
        german: 'Du kannst dich immer auf meine Hilfe verlassen.',
        indonesian: 'Kamu selalu bisa mengandalkan bantuan saya.',
      },
    ],
  },

  verbessern: {
    word: 'verbessern',
    displayWord: 'verbessern',
    ipa: '/fɛɐ̯ˈbɛsɐn/',
    translations: ['memperbaiki', 'meningkatkan kualitas', 'mengoreksi kesalahan'],
    meaningSummary: 'Menjadikan sesuatu lebih baik dari sebelumnya atau membetulkan kekeliruan.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'verbessern',
        praesens3sg: 'verbessert',
        praeteritum: 'verbesserte',
        perfekt: 'hat verbessert',
        hilfsverb: 'haben',
        partizip2: 'verbessert',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'optimieren', wordClass: 'Verb', translation: 'mengoptimalkan' },
      { word: 'korrigieren', wordClass: 'Verb', translation: 'mengoreksi' },
    ],
    antonyms: [
      { word: 'verschlechtern', wordClass: 'Verb', translation: 'memperburuk' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich möchte meine deutschen Sprachkenntnisse täglich verbessern.',
        indonesian: 'Saya ingin meningkatkan kemampuan bahasa Jerman saya setiap hari.',
      },
    ],
  },

  verändern: {
    word: 'verändern',
    displayWord: 'verändern',
    ipa: '/fɛɐ̯ˈʔɛndɐn/',
    translations: ['mengubah', 'memodifikasi', 'berubah (sich verändern)'],
    meaningSummary: 'Membuat perbedaan pada kondisi atau sifat sesuatu hal dari wujud asalnya.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'verändern',
        praesens3sg: 'verändert',
        praeteritum: 'veränderte',
        perfekt: 'hat verändert',
        hilfsverb: 'haben',
        partizip2: 'verändert',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'modifizieren', wordClass: 'Verb', translation: 'memodifikasi' },
      { word: 'wandeln', wordClass: 'Verb', translation: 'bertransformasi' },
    ],
    antonyms: [
      { word: 'bewahren', wordClass: 'Verb', translation: 'mempertahankan aslinya' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Die neue Technologie hat unseren Alltag grundlegend verändert.',
        indonesian: 'Teknologi baru telah mengubah kehidupan sehari-hari kita secara mendasar.',
      },
    ],
  },

  verwenden: {
    word: 'verwenden',
    displayWord: 'verwenden',
    ipa: '/fɛɐ̯ˈvɛndn̩/',
    translations: ['menggunakan', 'memakai', 'menerapkan'],
    meaningSummary: 'Memanfaatkan benda atau metode untuk mencapai maksud dan fungsi tertentu.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'verwenden',
        praesens3sg: 'verwendet',
        praeteritum: 'verwendete',
        perfekt: 'hat verwendet',
        hilfsverb: 'haben',
        partizip2: 'verwendet',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'benutzen', wordClass: 'Verb', translation: 'menggunakan praktis' },
      { word: 'gebrauchen', wordClass: 'Verb', translation: 'memakai sarana' },
      { word: 'anwenden', wordClass: 'Verb', translation: 'mengaplikasikan' },
    ],
    antonyms: [
      { word: 'verschwenden', wordClass: 'Verb', translation: 'menyia-nyiakan' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Für diesen Kuchen sollte man nur frische Zutaten verwenden.',
        indonesian: 'Untuk kue ini orang sebaiknya hanya menggunakan bahan-bahan segar.',
      },
    ],
  },

  vorstellen: {
    word: 'vorstellen',
    displayWord: 'vorstellen',
    ipa: '/ˈfoːɐ̯ˌʃtɛlən/',
    translations: ['memperkenalkan orang', 'membayangkan (sich vorstellen)', 'mempresentasikan'],
    meaningSummary: 'Menyebutkan nama orang kepada hadirin, atau memvisualisasikan ide dalam khayalan.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'vorstellen',
        praesens3sg: 'stellt vor',
        praeteritum: 'stellte vor',
        perfekt: 'hat vorgestellt',
        hilfsverb: 'haben',
        partizip2: 'vorgestellt',
        regularitaet: 'trennbar',
      },
    },
    synonyms: [
      { word: 'bekanntmachen', wordClass: 'Verb', translation: 'mengenalkan' },
      { word: 'präsentieren', wordClass: 'Verb', translation: 'mempresentasikan' },
      { word: 'einbilden', wordClass: 'Verb', translation: 'membayangkan' },
    ],
    antonyms: [
      { word: 'verschweigen', wordClass: 'Verb', translation: 'merahasiakan identitas' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Darf ich Ihnen meinen neuen Kollegen vorstellen?',
        indonesian: 'Bolehkah saya memperkenalkan rekan kerja baru saya kepada Anda?',
      },
      {
        level: 'B1',
        german: 'Ich kann mir ein Leben ohne Musik überhaupt nicht vorstellen.',
        indonesian: 'Saya sama sekali tidak bisa membayangkan hidup tanpa musik.',
      },
    ],
  },

  vorbereiten: {
    word: 'vorbereiten',
    displayWord: 'vorbereiten',
    ipa: '/ˈfoːɐ̯bəˌʁaɪ̯tn̩/',
    translations: ['mempersiapkan', 'menyiapkan perlengkapan'],
    meaningSummary: 'Mengatur dan melengkapi segala hal yang diperlukan menjelang acara atau ujian.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'vorbereiten',
        praesens3sg: 'bereitet vor',
        praeteritum: 'bereitete vor',
        perfekt: 'hat vorbereitet',
        hilfsverb: 'haben',
        partizip2: 'vorbereitet',
        regularitaet: 'trennbar',
      },
    },
    synonyms: [
      { word: 'planen', wordClass: 'Verb', translation: 'merencanakan' },
      { word: 'rüsten', wordClass: 'Verb', translation: 'bersiap diri' },
    ],
    antonyms: [
      { word: 'improvisieren', wordClass: 'Verb', translation: 'berimprovisasi tanpa persiapan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Die Studenten bereiten sich intensiv auf die B1-Prüfung vor.',
        indonesian: 'Para mahasiswa mempersiapkan diri secara intensif untuk ujian B1.',
      },
    ],
  },

  wiederholen: {
    word: 'wiederholen',
    displayWord: 'wiederholen',
    ipa: '/ˌviːdɐˈhoːlən/',
    translations: ['mengulang perkataan / pelajaran', 'melakukan kembali'],
    meaningSummary: 'Mengucapkan atau melakukan sesuatu sekali lagi agar mantap dipahami.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'wiederholen',
        praesens3sg: 'wiederholt',
        praeteritum: 'wiederholte',
        perfekt: 'hat wiederholt',
        hilfsverb: 'haben',
        partizip2: 'wiederholt',
        regularitaet: 'nicht-trennbar',
      },
    },
    synonyms: [
      { word: 'repetieren', wordClass: 'Verb', translation: 'mengulang materi' },
      { word: 'erneuern', wordClass: 'Verb', translation: 'memperbarui tindakan' },
    ],
    antonyms: [
      { word: 'einmalig tun', wordClass: 'Verb', translation: 'hanya melakukan sekali' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Könnten Sie den Satz bitte noch einmal langsam wiederholen?',
        indonesian: 'Bisakah Anda tolong mengulang kalimat tersebut sekali lagi secara perlahan?',
      },
    ],
  },

  überzeugen: {
    word: 'überzeugen',
    displayWord: 'überzeugen',
    ipa: '/ˌyːbɐˈtsɔɪ̯ɡn̩/',
    translations: ['meyakinkan seseorang', 'terbukti memuaskan'],
    meaningSummary: 'Menjadikan orang lain percaya akan kebenaran suatu gagasan lewat argumen kuat.',
    wordClass: 'Verb',
    cefrLevel: 'B1',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'überzeugen',
        praesens3sg: 'überzeugt',
        praeteritum: 'überzeugte',
        perfekt: 'hat überzeugt',
        hilfsverb: 'haben',
        partizip2: 'überzeugt',
        regularitaet: 'regelmäßig',
      },
    },
    synonyms: [
      { word: 'überreden', wordClass: 'Verb', translation: 'membujuk' },
      { word: 'beweisen', wordClass: 'Verb', translation: 'membuktikan kebenaran' },
    ],
    antonyms: [
      { word: 'verunsichern', wordClass: 'Verb', translation: 'membuat ragu' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Seine schlüssigen Argumente haben die gesamte Kommission überzeugt.',
        indonesian: 'Argumen-argumennya yang logis telah meyakinkan seluruh komisi.',
      },
    ],
  },

  teilnehmen: {
    word: 'teilnehmen',
    displayWord: 'teilnehmen',
    ipa: '/ˈtaɪ̯lˌneːmən/',
    translations: ['berpartisipasi', 'mengikuti (acara/kursus)', 'hadir serta'],
    meaningSummary: 'Ikut serta dan hadir dalam suatu kegiatan, seminar, atau lomba.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'teilnehmen',
        praesens3sg: 'nimmt teil',
        praeteritum: 'nahm teil',
        perfekt: 'hat teilgenommen',
        hilfsverb: 'haben',
        partizip2: 'teilgenommen',
        regularitaet: 'trennbar',
      },
    },
    synonyms: [
      { word: 'mitmachen', wordClass: 'Verb', translation: 'ikut serta gaul' },
      { word: 'dabeisein', wordClass: 'Verb', translation: 'berada di lokasi ikut' },
    ],
    antonyms: [
      { word: 'fehlen', wordClass: 'Verb', translation: 'absen / tidak hadir' },
      { word: 'schwänzen', wordClass: 'Verb', translation: 'membolos' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Möchten Sie an unserem Deutsch-Workshop teilnehmen?',
        indonesian: 'Apakah Anda ingin berpartisipasi dalam lokakarya bahasa Jerman kami?',
      },
    ],
  },

  empfehlen: {
    word: 'empfehlen',
    displayWord: 'empfehlen',
    ipa: '/ɛmˈpfeːlən/',
    translations: ['merekomendasikan', 'menganjurkan', 'menyarankan'],
    meaningSummary: 'Menilai sesuatu hal sangat bermutu dan menyarankan orang lain untuk mencobanya.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'empfehlen',
        praesens3sg: 'empfiehlt',
        praeteritum: 'empfahl',
        perfekt: 'hat empfohlen',
        hilfsverb: 'haben',
        partizip2: 'empfohlen',
        regularitaet: 'unregelmäßig',
      },
    },
    synonyms: [
      { word: 'anraten', wordClass: 'Verb', translation: 'menyarankan baik' },
      { word: 'befürworten', wordClass: 'Verb', translation: 'mendukung pilihan' },
    ],
    antonyms: [
      { word: 'abraten', wordClass: 'Verb', translation: 'menganjurkan agar jangan' },
      { word: 'warnen vor', wordClass: 'Verb', translation: 'memperingatkan bahaya' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Welches Restaurant im Stadtzentrum können Sie mir empfehlen?',
        indonesian: 'Restoran mana di pusat kota yang bisa Anda rekomendasikan kepada saya?',
      },
    ],
  },

  gewinnen: {
    word: 'gewinnen',
    displayWord: 'gewinnen',
    ipa: '/ɡəˈvɪnən/',
    translations: ['menang', 'meraih hadiah', 'memperoleh keuntungan'],
    meaningSummary: 'Menjadi pemenang dalam perlombaan atau mendapatkan rezeki undian.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'gewinnen',
        praesens3sg: 'gewinnt',
        praeteritum: 'gewann',
        perfekt: 'hat gewonnen',
        hilfsverb: 'haben',
        partizip2: 'gewonnen',
        regularitaet: 'unregelmäßig',
      },
    },
    synonyms: [
      { word: 'siegen', wordClass: 'Verb', translation: 'berjaya menang' },
      { word: 'erringen', wordClass: 'Verb', translation: 'merengkuh kemenangan' },
    ],
    antonyms: [
      { word: 'verlieren', wordClass: 'Verb', translation: 'kalah / kehilangan' },
      { word: 'unterliegen', wordClass: 'Verb', translation: 'tunduk takluk' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Unsere Mannschaft hat das Meisterschaftsspiel 3:1 gewonnen.',
        indonesian: 'Tim kita memenangkan pertandingan kejuaraan 3-1.',
      },
    ],
  },

  verlieren: {
    word: 'verlieren',
    displayWord: 'verlieren',
    ipa: '/fɛɐ̯ˈliːʁən/',
    translations: ['kehilangan barang', 'kalah pertandingan', 'hilang arah'],
    meaningSummary: 'Tidak lagi memiliki sesuatu yang sebelumnya dipunyai atau gagal dalam pertandingan.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitive: 'verlieren',
        praesens3sg: 'verliert',
        praeteritum: 'verlor',
        perfekt: 'hat verloren',
        hilfsverb: 'haben',
        partizip2: 'verloren',
        regularitaet: 'unregelmäßig',
      },
    },
    synonyms: [
      { word: 'einbüßen', wordClass: 'Verb', translation: 'menderita kerugian' },
      { word: 'unterliegen', wordClass: 'Verb', translation: 'kalah tanding' },
    ],
    antonyms: [
      { word: 'gewinnen', wordClass: 'Verb', translation: 'menang' },
      { word: 'finden', wordClass: 'Verb', translation: 'menemukan kembali' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich habe meinen Wohnungsschlüssel im Park verloren.',
        indonesian: 'Saya kehilangan kunci apartemen saya di taman.',
      },
    ],
  },
};
