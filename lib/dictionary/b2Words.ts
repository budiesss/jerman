import { WordResult } from '../types';

/**
 * Curated High-Frequency German Vocabulary - Level B2
 * Goethe-Institut & telc B2 Curriculum (Zertifikat B2)
 */
export const B2_WORDS: Record<string, WordResult> = {
  verhandlung: {
    word: 'die Verhandlung',
    displayWord: 'die Verhandlung',
    ipa: '/fɛɐ̯ˈhantlʊŋ/',
    translations: ['negosiasi', 'perundingan resmi', 'sidang perkara'],
    meaningSummary: 'Proses komunikasi dua pihak atau lebih untuk mencapai kesepakatan bersama atau proses persidangan di pengadilan.',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Verhandlung',
        plural: 'die Verhandlungen',
        genitivSingular: 'der Verhandlung',
      },
    },
    synonyms: [
      { word: 'die Absprache', article: 'die', wordClass: 'Nomen', translation: 'kesepakatan mufakat' },
      { word: 'das Gespräch', article: 'das', wordClass: 'Nomen', translation: 'pembicaraan perundingan' },
      { word: 'die Konsultation', article: 'die', wordClass: 'Nomen', translation: 'konsultasi musyawarah' },
    ],
    antonyms: [
      { word: 'das Diktat', article: 'das', wordClass: 'Nomen', translation: 'dikte pemaksaan sepihak' },
      { word: 'der Abbruch', article: 'der', wordClass: 'Nomen', translation: 'pemutusan perundingan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Nach zähen Verhandlungen einigten sich die Tarifpartner auf einen neuen Lohnvertrag.',
        indonesian: 'Setelah perundingan yang alot, serikat buruh dan pengusaha menyepakati perjanjian upah baru.',
        contextNote: 'Negosiasi ketenagakerjaan dan upah',
      },
      {
        level: 'B2',
        german: 'Die mündliche Verhandlung vor Gericht wurde auf nächsten Monat vertagt.',
        indonesian: 'Sidang lisan di hadapan majelis hakim ditunda hingga bulan depan.',
        contextNote: 'Proses peradilan hukum',
      },
    ],
    learningTips: 'Kolokasi khas B2: "Verhandlungen führen" (melakukan negosiasi) dan "in Verhandlungen treten" (memasuki meja perundingan).',
  },

  massnahme: {
    word: 'die Maßnahme',
    displayWord: 'die Maßnahme',
    ipa: '/ˈmaːsˌnaːmə/',
    translations: ['tindakan', 'kebijakan langkah penanggulangan', 'upaya intervensi'],
    meaningSummary: 'Langkah terencana yang diputuskan dan dijalankan untuk mencapai tujuan khusus atau mengatasi masalah.',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Maßnahme',
        plural: 'die Maßnahmen',
        genitivSingular: 'der Maßnahme',
      },
    },
    synonyms: [
      { word: 'der Schritt', article: 'der', wordClass: 'Nomen', translation: 'langkah tindakan' },
      { word: 'die Vorkehrung', article: 'die', wordClass: 'Nomen', translation: 'antisipasi pencegahan' },
      { word: 'die Aktion', article: 'die', wordClass: 'Nomen', translation: 'aksi terpadu' },
    ],
    antonyms: [
      { word: 'die Untätigkeit', article: 'die', wordClass: 'Nomen', translation: 'sikap berpangku tangan tanpa aksi' },
      { word: 'die Passivität', article: 'die', wordClass: 'Nomen', translation: 'sikap pasif berdiam diri' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Die Regierung ergreift strenge Maßnahmen zur Eindämmung der Inflation.',
        indonesian: 'Pemerintah mengambil tindakan-tindakan tegas demi meredam laju inflasi.',
        contextNote: 'Kolokasi tetap: Maßnahmen ergreifen',
      },
      {
        level: 'B2',
        german: 'Vorbeugende Sicherheitsmaßnahmen schützen vor Cyberangriffen.',
        indonesian: 'Langkah-langkah keamanan preventif melindungi dari serangan siber.',
        contextNote: 'Keamanan sistem teknologi',
      },
    ],
    learningTips: 'KOLOKASI EMAS B2 (Nomen-Verb-Verbindung): "Maßnahmen ergreifen" (mengambil tindakan langkah tegas) atau "Maßnahmen treffen".',
  },

  konsequenz: {
    word: 'die Konsequenz',
    displayWord: 'die Konsequenz',
    ipa: '/kɔnseˈkvɛnt͡s/',
    translations: ['konsekuensi', 'akibat logis', 'sikap konsisten berprinsip'],
    meaningSummary: 'Hasil yang tak terhindarkan dari suatu perbuatan atau keteguhan memegang prinsip tindakan.',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Konsequenz',
        plural: 'die Konsequenzen',
        genitivSingular: 'der Konsequenz',
      },
    },
    synonyms: [
      { word: 'die Folge', article: 'die', wordClass: 'Nomen', translation: 'akibat imbas buntut' },
      { word: 'die Auswirkung', article: 'die', wordClass: 'Nomen', translation: 'dampak pengaruh' },
      { word: 'das Resultat', article: 'das', wordClass: 'Nomen', translation: 'hasil kesimpulan' },
    ],
    antonyms: [
      { word: 'die Ursache', article: 'die', wordClass: 'Nomen', translation: 'akar penyebab mula' },
      { word: 'der Auslöser', article: 'der', wordClass: 'Nomen', translation: 'pemicu awal' },
      { word: 'die Inkonsequenz', article: 'die', wordClass: 'Nomen', translation: 'sikap inkonsisten plinplan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Unüberlegte Entscheidungen können weitreichende Konsequenzen für die Zukunft haben.',
        indonesian: 'Keputusan yang gegabah dapat menimbulkan konsekuensi berdampak luas bagi masa depan.',
        contextNote: 'Dampak keputusan',
      },
      {
        level: 'B2',
        german: 'Er zog die Konsequenzen und trat von seinem Amt als Vorsitzender zurück.',
        indonesian: 'Dia memikul konsekuensi dan mengundurkan diri dari jabatannya sebagai ketua.',
        contextNote: 'Kolokasi: die Konsequenzen ziehen',
      },
    ],
    learningTips: 'Kolokasi penting B2: "die Konsequenzen ziehen" (mengambil konsekuensi / bersikap jantan menanggung akibat). Kata sifatnya: "konsequent" (konsisten tegas).',
  },

  perspektive: {
    word: 'die Perspektive',
    displayWord: 'die Perspektive',
    ipa: '/pɛʁspɛkˈtiːvə/',
    translations: ['sudut pandang', 'perspektif', 'prospek masa depan'],
    meaningSummary: 'Cara pandang khusus terhadap suatu permasalahan atau peluang perkembangan di masa mendatang.',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Perspektive',
        plural: 'die Perspektiven',
        genitivSingular: 'der Perspektive',
      },
    },
    synonyms: [
      { word: 'der Blickwinkel', article: 'der', wordClass: 'Nomen', translation: 'sudut pandang peninjauan' },
      { word: 'die Zukunftsaussicht', article: 'die', wordClass: 'Nomen', translation: 'prospek masa depan' },
      { word: 'der Standpunkt', article: 'der', wordClass: 'Nomen', translation: 'titik berdiri pandangan' },
    ],
    antonyms: [
      { word: 'die Ausweglosigkeit', article: 'die', wordClass: 'Nomen', translation: 'kebuntuan tanpa prospek' },
      { word: 'die Perspektivlosigkeit', article: 'die', wordClass: 'Nomen', translation: 'ketiadaan harapan masa depan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Aus historischer Perspektive stellt diese Reform einen Meilenstein dar.',
        indonesian: 'Dari sudut pandang historis, reformasi ini mencerminkan sebuah tonggak pencapaian bersejarah.',
        contextNote: 'Analisis perspektif sejarah',
      },
      {
        level: 'B2',
        german: 'Der innovative Studiengang bietet jungen Absolventen hervorragende berufliche Perspektiven.',
        indonesian: 'Program studi inovatif ini menawarkan prospek karier profesional yang cemerlang bagi para lulusan muda.',
        contextNote: 'Prospek peluang kerja',
      },
    ],
    learningTips: 'Dua penggunaan utama: "aus der Perspektive von..." (dari sudut pandang...) dan "berufliche Perspektiven" (prospek karir profesional).',
  },

  begruenden: {
    word: 'begründen',
    displayWord: 'begründen',
    ipa: '/bəˈɡʁʏndn̩/',
    translations: ['memberikan alasan', 'mendukung dengan argumen', 'mendirikan dasar'],
    meaningSummary: 'Memaparkan dalil, alasan, dan fakta yang menjadi dasar pijakan pendapat atau keputusan.',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'begründen',
        praesens: 'begründet',
        praeteritum: 'begründete',
        partizip2: 'begründet',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: false,
        prefix: 'be- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'argumentieren', wordClass: 'Verb', translation: 'berargumen' },
      { word: 'belegen', wordClass: 'Verb', translation: 'membuktikan dengan data' },
      { word: 'fundieren', wordClass: 'Verb', translation: 'melandaskan dasar teori' },
    ],
    antonyms: [
      { word: 'behaupten', wordClass: 'Verb', translation: 'mengklaim sepihak tanpa dasar' },
      { word: 'widersprechen', wordClass: 'Verb', translation: 'membantah bertentangan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Bitte begründen Sie Ihre Meinung mit zwei konkreten Beispielen!',
        indonesian: 'Tolong berikan alasan bagi pendapat Anda dengan dua contoh konkret!',
        contextNote: 'Instruksi esai ujian tulis B2',
      },
      {
        level: 'B2',
        german: 'Der Minister begründete seinen Rücktritt mit gesundheitlichen Problemen.',
        indonesian: 'Menteri tersebut mengemukakan alasan pengunduran dirinya karena gangguan kesehatan.',
        contextNote: 'Pernyataan resmi pejabat',
      },
    ],
    learningTips: 'Kunci lulus ujian Schreiben B2: jangan hanya menyatakan opini ("Ich finde, dass..."), selalu sertakan "Begründung" (alasan kuat pendukung).',
  },

  hervorheben: {
    word: 'hervorheben',
    displayWord: 'hervorheben',
    ipa: '/hɛɐ̯ˈfoːɐ̯ˌheːbn̩/',
    translations: ['menyoroti', 'menekankan secara khusus', 'menggarisbawahi'],
    meaningSummary: 'Memberikan perhatian ekstra dan bobot khusus pada poin penting agar tidak luput dari perhatian.',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'hervorheben',
        praesens: 'hebt hervor',
        praeteritum: 'hob hervor',
        partizip2: 'hervorgehoben',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: true,
        prefix: 'hervor',
      },
    },
    synonyms: [
      { word: 'betonen', wordClass: 'Verb', translation: 'menekankan urgensi' },
      { word: 'unterstreichen', wordClass: 'Verb', translation: 'menggarisbawahi poin' },
      { word: 'akzentuieren', wordClass: 'Verb', translation: 'mengaksentuasi' },
    ],
    antonyms: [
      { word: 'verschweigen', wordClass: 'Verb', translation: 'mendiamkan menyembunyikan' },
      { word: 'herabspielen', wordClass: 'Verb', translation: 'mengecilkan arti meremehkan' },
      { word: 'übergehen', wordClass: 'Verb', translation: 'melangkahi mengabaikan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Der Redner hob hervor, wie wichtig gegenseitiger Respekt für das Betriebsklima ist.',
        indonesian: 'Pembicara menyoroti betapa pentingnya saling menghargai bagi suasana kerja perusahaan.',
        contextNote: 'Pidato formal',
      },
      {
        level: 'B2',
        german: 'Besonders hervorzuheben ist das ehrenamtliche Engagement der Jugendlichen.',
        indonesian: 'Yang patut disoroti secara khusus adalah dedikasi sukarela para generasi muda.',
        contextNote: 'Passiv-Ersatzform: ist hervorzuheben',
      },
    ],
    learningTips: 'Kata kerja terpisah: "hebt hervor". Pola konjugasi kuat: hervorheben - hob hervor - hervorgehoben.',
  },

  effizient: {
    word: 'effizient',
    displayWord: 'effizient',
    ipa: '/ɛfiˈt͡si̯ɛnt/',
    translations: ['efisien', 'berdaya guna tinggi', 'hemat daya tepat hasil'],
    meaningSummary: 'Mampu mencapai hasil optimal dengan mengerahkan sumber daya, waktu, dan biaya seminimal mungkin.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'effizient',
        komparativ: 'effizienter',
        superlativ: 'am effizientesten',
      },
    },
    synonyms: [
      { word: 'wirtschaftlich', wordClass: 'Adjektiv', translation: 'ekonomis hemat biaya' },
      { word: 'produktiv', wordClass: 'Adjektiv', translation: 'produktif berdaya hasil' },
      { word: 'wirkungsvoll', wordClass: 'Adjektiv', translation: 'berkhasiat nyata' },
    ],
    antonyms: [
      { word: 'ineffizient', wordClass: 'Adjektiv', translation: 'tidak efisien boros' },
      { word: 'verschwenderisch', wordClass: 'Adjektiv', translation: 'boros menghambur-hamburkan' },
      { word: 'unwirtschaftlich', wordClass: 'Adjektiv', translation: 'merugikan tidak hemat' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Durch automatisierte Prozesse arbeitet die Abteilung jetzt wesentlich effizienter.',
        indonesian: 'Melalui proses otomatisasi, divisi tersebut kini bekerja secara jauh lebih efisien.',
        contextNote: 'Efisiensi alur kerja bisnis',
      },
      {
        level: 'B2',
        german: 'Eine effiziente Nutzung von Solarenergie senkt die laufenden Stromkosten.',
        indonesian: 'Pemanfaatan energi surya yang efisien menekan biaya listrik rutin.',
        contextNote: 'Efisiensi energi',
      },
    ],
    learningTips: 'Perbedaan konsep penting B2: "effizient" (doing things right / hemat sumber daya) vs "effektiv" (doing the right things / mencapai sasaran).',
  },

  komplex: {
    word: 'komplex',
    displayWord: 'komplex',
    ipa: '/kɔmˈplɛks/',
    translations: ['kompleks', 'rumit bersusun banyak cabang', 'majemuk'],
    meaningSummary: 'Tersusun atas banyak bagian saling terkait sehingga memerlukan pemahaman mendalam untuk mengurainya.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'komplex',
        komparativ: 'komplexer',
        superlativ: 'am komplexesten',
      },
    },
    synonyms: [
      { word: 'vielschichtig', wordClass: 'Adjektiv', translation: 'berlapis-lapis dimensi' },
      { word: 'verflochten', wordClass: 'Adjektiv', translation: 'terkait berkelindan' },
      { word: 'schwierig', wordClass: 'Adjektiv', translation: 'sulit diurai' },
    ],
    antonyms: [
      { word: 'einfach', wordClass: 'Adjektiv', translation: 'sederhana' },
      { word: 'simpel', wordClass: 'Adjektiv', translation: 'simpel tanpa kerumitan' },
      { word: 'unkompliziert', wordClass: 'Adjektiv', translation: 'tidak berbelit-belit' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Der Klimawandel ist ein hochgradig komplexes Phänomen mit globalen Auswirkungen.',
        indonesian: 'Perubahan iklim adalah fenomena yang berderajat sangat kompleks dengan imbas global.',
        contextNote: 'Permasalahan sains global',
      },
      {
        level: 'B2',
        german: 'Wir müssen diese komplexe Fragestellung systematisch analysieren.',
        indonesian: 'Kita harus menganalisis permasalahan yang rumit ini secara sistematis.',
        contextNote: 'Metodologi analisis',
      },
    ],
    learningTips: 'Kata bendanya: "die Komplexität" (kompleksitas kerumitan). Sering berpasangan dengan "Struktur", "System", atau "Zusammenhang".',
  },

  praezise: {
    word: 'präzise',
    displayWord: 'präzise',
    ipa: '/pʁɛˈt͡siːzə/',
    translations: ['presisi', 'tepat sasaran', 'akurat tanpa selisih'],
    meaningSummary: 'Sangat cermat, tepat dan bebas dari kekeliruan atau ketidakpastian.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'präzise',
        komparativ: 'präziser',
        superlativ: 'am präzisesten',
      },
    },
    synonyms: [
      { word: 'exakt', wordClass: 'Adjektiv', translation: 'eksak persis' },
      { word: 'punktgenau', wordClass: 'Adjektiv', translation: 'tepat pada titiknya' },
      { word: 'akkurat', wordClass: 'Adjektiv', translation: 'akurat cermat' },
    ],
    antonyms: [
      { word: 'ungenau', wordClass: 'Adjektiv', translation: 'tidak tepat meleset' },
      { word: 'vage', wordClass: 'Adjektiv', translation: 'kabur mengambang' },
      { word: 'unpräzise', wordClass: 'Adjektiv', translation: 'tidak presisi' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Wissenschaftliche Experimente erfordern präzise Messungen und klare Dokumentation.',
        indonesian: 'Eksperimen ilmiah menuntut pengukuran yang presisi dan dokumentasi yang jelas.',
        contextNote: 'Metode riset ilmiah',
      },
      {
        level: 'B2',
        german: 'Bitte formulieren Sie Ihre Kritik präziser, damit wir Verbesserungen vornehmen können.',
        indonesian: 'Tolong rumuskan kritik Anda secara lebih presisi agar kami dapat melakukan perbaikan.',
        contextNote: 'Umpan balik profesional',
      },
    ],
    learningTips: 'Kata bendanya: "die Präzision" (kepresisian). Di ranah rekayasa teknologi Jerman ("deutsche Ingenieurskunst"), kata ini adalah pilar utama reputasi industri.',
  },

  wesentlich: {
    word: 'wesentlich',
    displayWord: 'wesentlich',
    ipa: '/ˈveːzn̩tlɪç/',
    translations: ['hakiki', 'mendasar', 'esensial', 'jauh (secara signifikan)'],
    meaningSummary: 'Menjadi bagian inti yang paling pokok dari suatu hal, atau menandai perbedaan yang sangat besar.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'wesentlich',
        komparativ: 'wesentlicher',
        superlativ: 'am wesentlichsten',
      },
    },
    synonyms: [
      { word: 'grundlegend', wordClass: 'Adjektiv', translation: 'mendasar fundamental' },
      { word: 'elementar', wordClass: 'Adjektiv', translation: 'elementer pokok' },
      { word: 'hauptsächlich', wordClass: 'Adjektiv', translation: 'terutama' },
    ],
    antonyms: [
      { word: 'unwesentlich', wordClass: 'Adjektiv', translation: 'tidak esensial sepele' },
      { word: 'nebensächlich', wordClass: 'Adjektiv', translation: 'sampingan pelengkap' },
      { word: 'belanglos', wordClass: 'Adjektiv', translation: 'tanpa arti penting' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Gegenseitiges Vertrauen ist ein wesentlicher Bestandteil jeder stabilen Partnerschaft.',
        indonesian: 'Saling percaya adalah komponen esensial yang hakiki dari setiap hubungan kemitraan yang stabil.',
        contextNote: 'Fondasi relasi kemitraan',
      },
      {
        level: 'B2',
        german: 'Die neue Software läuft wesentlich schneller als die alte Version.',
        indonesian: 'Perangkat lunak baru ini berjalan jauh lebih cepat secara signifikan dibanding versi lama.',
        contextNote: 'Sebagai adverb perbandingan (jauh lebih...)',
      },
    ],
    learningTips: 'Berasal dari kata benda "das Wesen" (hakikat intisari). Dua fungsi utama B2: sebagai kata sifat (inti esensial) dan sebagai kata keterangan penegas komparasi ("wesentlich besser/schneller").',
  },
};
