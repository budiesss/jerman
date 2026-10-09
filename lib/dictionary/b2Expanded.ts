import { WordResult } from '../types';

/**
 * Expanded B2 Vocabulary
 * Source:
 * - Langenscheidt Großwörterbuch Deutsch als Fremdsprache (~120.000 Einträge)
 * Focus:
 * - Differentiated verbs, professional discourse, abstract concepts, academic & economic argumentation
 */
export const B2_EXPANDED: Record<string, WordResult> = {
  // --- WIRTSCHAFT & BERUFLICHE KOMMUNIKATION ---
  unternehmen: {
    word: 'das Unternehmen',
    displayWord: 'das Unternehmen',
    ipa: '/ʊntɐˈneːmən/',
    translations: ['perusahaan', 'korporasi', 'usaha / proyek petualangan'],
    meaningSummary: 'Organisasi ekonomi berorientasi komersial; atau aksi usaha berani.',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Unternehmen',
        plural: 'die Unternehmen',
        genitivSingular: 'des Unternehmens',
      },
    },
    synonyms: [
      { word: 'der Betrieb', article: 'der', wordClass: 'Nomen', translation: 'unit usaha operasional' },
      { word: 'die Firma', article: 'die', wordClass: 'Nomen', translation: 'firma bisnis' },
      { word: 'der Konzern', article: 'der', wordClass: 'Nomen', translation: 'konglomerat / korporasi besar' },
    ],
    antonyms: [
      { word: 'die Behörde', article: 'die', wordClass: 'Nomen', translation: 'instansi pemerintah' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Das mittelständische Unternehmen investiert verstärkt in erneuerbare Energien.',
        indonesian: 'Perusahaan skala menengah tersebut berinvestasi secara intensif dalam energi terbarukan.',
        contextNote: 'Wacana bisnis Jerman (Mittelstand)',
      },
      {
        level: 'B2',
        german: 'Die Fusion der beiden Unternehmen stieß auf behördliche Bedenken.',
        indonesian: 'Merger kedua perusahaan tersebut menghadapi kekhawatiran regulasi otoritas.',
        contextNote: 'Konteks ekonomi korporat',
      },
    ],
    learningTips: 'Di Jerman, "mittelständische Unternehmen" (perusahaan menengah keluarga) adalah tulang punggung ekonomi nasional. Bentuk jamak tidak berubah: die Unternehmen.',
  },

  branche: {
    word: 'die Branche',
    displayWord: 'die Branche',
    ipa: '/ˈbʁɑ̃ːʃə/',
    translations: ['bidang industri', 'sektor usaha', 'cabang bisnis'],
    meaningSummary: 'Sektor kegiatan ekonomi atau perdagangan tertentu (misal otomotif, IT, pariwisata).',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Branche',
        plural: 'die Branchen',
        genitivSingular: 'der Branche',
      },
    },
    synonyms: [
      { word: 'der Wirtschaftszweig', article: 'der', wordClass: 'Nomen', translation: 'cabang ekonomi' },
      { word: 'der Sektor', article: 'der', wordClass: 'Nomen', translation: 'sektor usaha' },
    ],
    antonyms: [
      { word: 'der Gesamtmarkt', article: 'der', wordClass: 'Nomen', translation: 'pasar keseluruhan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Die IT-Branche leidet seit Jahren unter einem gravierenden Fachkräftemangel.',
        indonesian: 'Sektor industri IT telah bertahun-tahun menderita krisis kekurangan tenaga ahli yang parah.',
        contextNote: 'Laporan ekonomi ketenagakerjaan',
      },
      {
        level: 'B2',
        german: 'In welcher Branche möchten Sie nach Ihrem Abschluss tätig sein?',
        indonesian: 'Di sektor industri apa Anda ingin berkiprah setelah kelulusan Anda?',
        contextNote: 'Pertanyaan wawancara karier B2',
      },
    ],
    learningTips: 'Kata serapan dari bahasa Prancis: dilafalkan dengan nasal "Brong-sye" (/ˈbʁɑ̃ːʃə/).',
  },

  kompromiss: {
    word: 'der Kompromiss',
    displayWord: 'der Kompromiss',
    ipa: '/kɔmpʁoˈmɪs/',
    translations: ['kompromi', 'titik temu kesepakatan bersama'],
    meaningSummary: 'Penyelesaian sengketa di mana kedua belah pihak sama-sama mengalah demi mencapai jalan tengah.',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Kompromiss',
        plural: 'die Kompromisse',
        genitivSingular: 'des Kompromisses',
      },
    },
    synonyms: [
      { word: 'die Einigung', article: 'die', wordClass: 'Nomen', translation: 'kesepakatan mufakat' },
      { word: 'der Mittelweg', article: 'der', wordClass: 'Nomen', translation: 'jalan tengah' },
    ],
    antonyms: [
      { word: 'die Konfrontation', article: 'die', wordClass: 'Nomen', translation: 'konfrontasi perpecahan' },
      { word: 'die Kompromisslosigkeit', article: 'die', wordClass: 'Nomen', translation: 'sikap pantang kompromi' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Nach zähen Verhandlungen schlossen die Tarifpartner einen faulen Kompromiss.',
        indonesian: 'Setelah perundingan yang alot, pihak-pihak serikat kerja menyepakati kompromi darurat yang kurang memuaskan.',
        contextNote: 'Dinamika perundingan upah kerja',
      },
      {
        level: 'B2',
        german: 'Man muss im Leben oft Kompromisse eingehen, um Konflikte zu vermeiden.',
        indonesian: 'Orang sering kali harus membuat kompromi dalam hidup untuk menghindari konflik.',
        contextNote: 'Kolokasi wichtig: Kompromisse eingehen',
      },
    ],
    learningTips: 'Nomen-Verb-Verbindung wajib level B2: "einen Kompromiss schließen / eingehen" (mengambil/menyepakati kompromi).',
  },

  einwand: {
    word: 'der Einwand',
    displayWord: 'der Einwand',
    ipa: '/ˈaɪ̯nˌvant/',
    translations: ['sanggahan', 'keberatan', 'eksepsi'],
    meaningSummary: 'Alasan atau argumen yang diajukan untuk menolak atau meragukan suatu pernyataan.',
    wordClass: 'Nomen',
    cefrLevel: 'B2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Einwand',
        plural: 'die Einwände',
        genitivSingular: 'des Einwandes',
      },
    },
    synonyms: [
      { word: 'der Widerspruch', article: 'der', wordClass: 'Nomen', translation: 'bantahan' },
      { word: 'das Bedenken', article: 'das', wordClass: 'Nomen', translation: 'keraguan' },
    ],
    antonyms: [
      { word: 'die Zustimmung', article: 'die', wordClass: 'Nomen', translation: 'persetujuan' },
      { word: 'der Konsens', article: 'der', wordClass: 'Nomen', translation: 'kesepakatan mufakat' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Gegen diesen Vorschlag habe ich prinzipiell keine Einwände.',
        indonesian: 'Terhadap usulan ini saya pada prinsipnya tidak memiliki keberatan.',
        contextNote: 'Frasa rapat bisnis formal',
      },
      {
        level: 'B2',
        german: 'Der Anwalt erhob einen berechtigten Einwand gegen die Zeugenaussage.',
        indonesian: 'Pengacara tersebut mengajukan sanggahan yang beralasan terhadap kesaksian saksi.',
        contextNote: 'Wacana hukum',
      },
    ],
    learningTips: 'Kombinasi kolokasi B2: "Einwände erheben gegen + Akkusativ" (mengajukan keberatan terhadap...).',
  },

  // --- DIFFERENZIERTE B2 VERBEN ---
  bewaeltigen: {
    word: 'bewältigen',
    displayWord: 'bewältigen',
    ipa: '/bəˈvɛltɪɡn̩/',
    translations: ['mengatasi', 'merampungkan kesulitan', 'menanggulangi masalah berat'],
    meaningSummary: 'Berhasil menyelesaikan tugas yang sukar atau menuntaskan krisis emosional/finansial.',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'bewältigen',
        praesens: 'bewältigt',
        praeteritum: 'bewältigte',
        partizip2: 'bewältigt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'meistern', wordClass: 'Verb', translation: 'menguasai dengan gemilang' },
      { word: 'überwinden', wordClass: 'Verb', translation: 'melampaui rintangan' },
      { word: 'hinkriegen', wordClass: 'Verb', translation: 'berhasil bereskan (informal)' },
    ],
    antonyms: [
      { word: 'scheitern an', wordClass: 'Verb', translation: 'gagal di tengah jalan' },
      { word: 'kapitulieren', wordClass: 'Verb', translation: 'menyerah kalah' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Mit vereinten Kräften können wir diese beispiellose Krise bewältigen.',
        indonesian: 'Dengan kekuatan bersama kita dapat menanggulangi krisis tanpa preseden ini.',
        contextNote: 'Pidato kepemimpinan',
      },
      {
        level: 'B2',
        german: 'Er brauchte professionelle Hilfe, um das Trauma zu bewältigen.',
        indonesian: 'Dia membutuhkan bantuan profesional untuk mengatasi trauma tersebut.',
        contextNote: 'Aspek psikologis',
      },
    ],
    learningTips: 'Berasal dari kata "walten" (berkuasa/mengelola) -> "überwinden durch Gewalt/Macht". Kata bendanya: "die Krisenbewältigung".',
  },

  scheitern: {
    word: 'scheitern',
    displayWord: 'scheitern',
    ipa: '/ˈʃaɪ̯tɐn/',
    translations: ['gagal', 'kandas', 'tidak berhasil mencapai target (+ an)'],
    meaningSummary: 'Tidak berhasil mewujudkan rencana atau hancur di tengah proses.',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'scheitern',
        praesens: 'scheitert',
        praeteritum: 'scheiterte',
        partizip2: 'gescheitert',
        hilfsverb: 'sein',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'fehlschlagen', wordClass: 'Verb', translation: 'berakhir gagal' },
      { word: 'missglücken', wordClass: 'Verb', translation: 'tidak sukses' },
    ],
    antonyms: [
      { word: 'gelingen', wordClass: 'Verb', translation: 'berhasil mulus' },
      { word: 'Erfolg haben', wordClass: 'Verb', translation: 'meraih kesuksesan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Das ehrgeizige Projekt ist an fehlenden finanziellen Mitteln gescheitert.',
        indonesian: 'Proyek ambisius tersebut kandas akibat ketiadaan dana finansial.',
        contextNote: 'Analisis penyebab kegagalan (scheitern an + Dativ)',
      },
      {
        level: 'B2',
        german: 'Scheitern gehört zum Lernprozess eines jeden Unternehmers.',
        indonesian: 'Kegagalan adalah bagian dari proses belajar setiap wirausahawan.',
        contextNote: 'Mentalitas bisnis',
      },
    ],
    learningTips: 'Preposisi wajib B2: "scheitern an + Dativ" (gagal karena suatu hal). Perfekt menggunakan hilfsverb "sein": "Er ist gescheitert" (BUKAN hat gescheitert).',
  },

  erzielen: {
    word: 'erzielen',
    displayWord: 'erzielen',
    ipa: '/ɛɐ̯ˈtsiːlən/',
    translations: ['memperoleh', 'meraih hasil / capaian', 'mencetak gol/keuntungan'],
    meaningSummary: 'Mencapai hasil tertentu berkat usaha terencana (keuntungan, kesepakatan, skor).',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'erzielen',
        praesens: 'erzielt',
        praeteritum: 'erzielte',
        partizip2: 'erzielt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'erreichen', wordClass: 'Verb', translation: 'mencapai' },
      { word: 'erwirtschaften', wordClass: 'Verb', translation: 'menghasilkan laba ekonomi' },
    ],
    antonyms: [
      { word: 'verlieren', wordClass: 'Verb', translation: 'kehilangan' },
      { word: 'einbüßen', wordClass: 'Verb', translation: 'menderita kerugian' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Das Unternehmen konnte im letzten Quartal einen beachtlichen Gewinn erzielen.',
        indonesian: 'Perusahaan tersebut mampu meraih laba yang signifikan pada kuartal terakhir.',
        contextNote: 'Laporan keuangan B2',
      },
      {
        level: 'B2',
        german: 'Die Delegierten erzielten in den Kernfragen eine grundlegende Einigung.',
        indonesian: 'Para delegasi mencapai kesepakatan mendasar dalam isu-isu inti.',
        contextNote: 'Hasil diplomasi',
      },
    ],
    learningTips: 'Kombinasi kolokasi khas: "Gewinn erzielen" (meraup laba), "Einigung erzielen" (mencapai mufakat), "Erfolg erzielen" (meraih sukses).',
  },

  beruecksichtigen: {
    word: 'berücksichtigen',
    displayWord: 'berücksichtigen',
    ipa: '/bəˈʁʏkˌzɪçtɪɡn̩/',
    translations: ['memperhitungkan', 'mempertimbangkan faktor', 'mengakomodasi'],
    meaningSummary: 'Memasukkan aspek atau kepentingan tertentu ke dalam pertimbangan keputusan.',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'berücksichtigen',
        praesens: 'berücksichtigt',
        praeteritum: 'berücksichtigte',
        partizip2: 'berücksichtigt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'einbeziehen', wordClass: 'Verb', translation: 'mengikutsertakan' },
      { word: 'in Betracht ziehen', wordClass: 'Verb', translation: 'mempertimbangkan' },
    ],
    antonyms: [
      { word: 'vernachlässigen', wordClass: 'Verb', translation: 'mengabaikan / menyepelekan' },
      { word: 'außer Acht lassen', wordClass: 'Verb', translation: 'tidak mengindahkan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Bei der Planung müssen wir die Wünsche aller Teammitglieder berücksichtigen.',
        indonesian: 'Dalam perencanaan kita harus memperhitungkan keinginan seluruh anggota tim.',
        contextNote: 'Manajemen proyek inklusif',
      },
      {
        level: 'B2',
        german: 'Spät eingereichte Unterlagen können leider nicht mehr berücksichtigt werden.',
        indonesian: 'Berkas yang terlambat diajukan sayangnya tidak dapat lagi dipertimbangkan.',
        contextNote: 'Pemberitahuan administratif resmi',
      },
    ],
    learningTips: 'Kata kunci mutlak dalam penulisan esai argumen B2/C1. Lawan katanya yang sangat elegan adalah idiom "außer Acht lassen" (mengabaikan).',
  },

  befuerworten: {
    word: 'befürworten',
    displayWord: 'befürworten',
    ipa: '/bəˈfyːɐ̯ˌvɔʁtn̩/',
    translations: ['mendukung usulan', 'menganjurkan secara resmi', 'pro terhadap suatu kebijakan'],
    meaningSummary: 'Menyatakan sokongan terbuka terhadap gagasan, permohonan, atau undang-undang.',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'befürworten',
        praesens: 'befürwortet',
        praeteritum: 'befürwortete',
        partizip2: 'befürwortet',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'plädieren für', wordClass: 'Verb', translation: 'berargumen memihak pada' },
      { word: 'gutheißen', wordClass: 'Verb', translation: 'merestui' },
    ],
    antonyms: [
      { word: 'ablehnen', wordClass: 'Verb', translation: 'menolak usulan' },
      { word: 'missbilligen', wordClass: 'Verb', translation: 'mencela' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Die Mehrheit der Bürger befürwortet den Ausbau der öffentlichen Verkehrsmittel.',
        indonesian: 'Mayoritas warga mendukung perluasan fasilitas transportasi umum.',
        contextNote: 'Opini publik politik',
      },
      {
        level: 'B2',
        german: 'Der Professor befürwortete meinen Antrag auf ein Stipendium.',
        indonesian: 'Profesor itu memberikan rekomendasi dukungan atas permohonan beasiswa saya.',
        contextNote: 'Rekomendasi akademik',
      },
    ],
    learningTips: 'Kata kerja formal yang sangat disukai dalam ujian debat B2 (Schreiben/Sprechen). "Für ein Wort einlegen" -> mendukung!',
  },

  rechtfertigen: {
    word: 'rechtfertigen',
    displayWord: 'rechtfertigen',
    ipa: '/ˈʁɛçtˌfɛʁtɪɡn̩/',
    translations: ['membenarkan', 'menjustifikasi perbuatan', 'memberikan alasan logis'],
    meaningSummary: 'Menunjukkan alasan masuk akal bahwa tindakan atau keputusan tertentu adalah sah dan patut.',
    wordClass: 'Verb',
    cefrLevel: 'B2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'rechtfertigen',
        praesens: 'rechtfertigt',
        praeteritum: 'rechtfertigte',
        partizip2: 'gerechtfertigt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'begründen', wordClass: 'Verb', translation: 'memberi argumen dasar' },
      { word: 'verteidigen', wordClass: 'Verb', translation: 'membela argumen' },
    ],
    antonyms: [
      { word: 'verurteilen', wordClass: 'Verb', translation: 'mengecam' },
      { word: 'anklagen', wordClass: 'Verb', translation: 'mendakwa' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Nichts kann eine derart rücksichtslose Handlungsweise rechtfertigen.',
        indonesian: 'Tidak ada hal apa pun yang bisa menjustifikasi pola tindakan yang segegabah itu.',
        contextNote: 'Kritik etika tajam',
      },
      {
        level: 'B2',
        german: 'Der hohe Preis lässt sich durch die exzellente Qualität rechtfertigen.',
        indonesian: 'Harga yang tinggi dapat dijustifikasi oleh kualitasnya yang prima.',
        contextNote: 'Justifikasi harga produk',
      },
    ],
    learningTips: 'Partizip II: "gerechtfertigt" (sering dipakai sebagai adjektiva: "eine gerechtfertigte Kritik" = kritik yang beralasan sah).',
  },

  // --- ADJEKTIVE B2 ---
  ausschlaggebend: {
    word: 'ausschlaggebend',
    displayWord: 'ausschlaggebend',
    ipa: '/ˈaʊ̯sˌʃlaːkˌɡeːbn̩t/',
    translations: ['penentu', 'faktor krusial penentu hasil'],
    meaningSummary: 'Menjadi faktor paling dominan yang menentukan akhir dari sebuah perkara.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'ausschlaggebend',
        komparativ: 'ausschlaggebender',
        superlativ: 'am ausschlaggebendsten',
      },
    },
    synonyms: [
      { word: 'entscheidend', wordClass: 'Adjektiv', translation: 'sangat menentukan' },
      { word: 'maßgeblich', wordClass: 'Adjektiv', translation: 'berpengaruh signifikan' },
    ],
    antonyms: [
      { word: 'nebensächlich', wordClass: 'Adjektiv', translation: 'sekunder / sampingan' },
      { word: 'irrelevant', wordClass: 'Adjektiv', translation: 'tidak relevan' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Ihre hervorragenden Deutschkenntnisse gaben den ausschlaggebenden Impuls für die Einstellung.',
        indonesian: 'Kemahiran bahasa Jermannya yang prima memberikan dorongan penentu bagi penerimaan kerjanya.',
        contextNote: 'Keputusan perekrutan B2',
      },
      {
        level: 'B2',
        german: 'Dieser Punkt war für das Scheitern der Koalition ausschlaggebend.',
        indonesian: 'Poin inilah yang menjadi penentu utama kandasnya koalisi tersebut.',
        contextNote: 'Analisis politik',
      },
    ],
    learningTips: 'Metafora dari timbangan: jarum timbangan yang condong ke satu arah ("ausschlagen") menentukan siapa pemenangnya!',
  },

  differenziert: {
    word: 'differenziert',
    displayWord: 'differenziert',
    ipa: '/dɪfəʁɛnˈtsiːɐ̯t/',
    translations: ['bernuansa detail', 'objektif tidak hitam-putih', 'beragam terperinci'],
    meaningSummary: 'Melihat suatu masalah dari berbagai perspektif mendalam tanpa penyederhanaan yang gegabah.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'differenziert',
        komparativ: 'differenzierter',
        superlativ: 'am differenziertesten',
      },
    },
    synonyms: [
      { word: 'abgewogen', wordClass: 'Adjektiv', translation: 'ditimbang matang-matang' },
      { word: 'nuanciert', wordClass: 'Adjektiv', translation: 'bernuansa halus' },
    ],
    antonyms: [
      { word: 'pauschal', wordClass: 'Adjektiv', translation: 'generalisasi / gebyah-uyah' },
      { word: 'einseitig', wordClass: 'Adjektiv', translation: 'berat sebelah / sepihak' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Wir brauchen eine differenzierte Betrachtung dieses komplexen Phänomens.',
        indonesian: 'Kita membutuhkan telaah yang objektif bernuansa terperinci terhadap fenomena yang rumit ini.',
        contextNote: 'Analisis akademis B2',
      },
      {
        level: 'B2',
        german: 'Der Journalist berichtete sehr differenziert über die politischen Spannungen.',
        indonesian: 'Jurnalis itu melaporkan ketegangan politik dengan sangat berimbang dan mendalam.',
        contextNote: 'Penilaian liputan pers',
      },
    ],
    learningTips: 'Karakteristik esai tingkat tinggi di Jerman: penguji sangat menghargai "eine differenzierte Argumentation" (argumen yang menimbang kedua sisi pro dan kontra).',
  },

  nachhaltig: {
    word: 'nachhaltig',
    displayWord: 'nachhaltig',
    ipa: '/ˈnaːxˌhaltɪç/',
    translations: ['berkelanjutan (sustainable)', 'berdampak jangka panjang membekas'],
    meaningSummary: 'Dapat bertahan lama tanpa merusak sumber daya alam; atau memberikan dampak mendalam jangka panjang.',
    wordClass: 'Adjektiv',
    cefrLevel: 'B2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'nachhaltig',
        komparativ: 'nachhaltiger',
        superlativ: 'am nachhaltigsten',
      },
    },
    synonyms: [
      { word: 'zukunftsfähig', wordClass: 'Adjektiv', translation: 'siap masa depan' },
      { word: 'dauerhaft', wordClass: 'Adjektiv', translation: 'tahan lama abadi' },
    ],
    antonyms: [
      { word: 'kurzlebig', wordClass: 'Adjektiv', translation: 'berumur pendek' },
      { word: 'ausbeuterisch', wordClass: 'Adjektiv', translation: 'eksploitatif' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Nachhaltige Entwicklung erfordert einen schonenden Umgang mit natürlichen Ressourcen.',
        indonesian: 'Pembangunan berkelanjutan menuntut pengelolaan sumber daya alam yang bijaksana dan hemat.',
        contextNote: 'Isu lingkungan global',
      },
      {
        level: 'B2',
        german: 'Die Konferenz hat bei den Teilnehmern einen nachhaltigen Eindruck hinterlassen.',
        indonesian: 'Konferensi itu meninggalkan kesan mendalam yang membekas jangka panjang bagi para peserta.',
        contextNote: 'Efek psikologis mendalam',
      },
    ],
    learningTips: 'Salah satu kata paling populer dalam debat sosiopolitik modern Jerman: "Nachhaltigkeit" (prinsip kelestarian/sustainability). Berasal dari konsep kehutanan Jerman abad ke-18.',
  },
};
