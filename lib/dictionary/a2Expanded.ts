import { WordResult } from '../types';

/**
 * Expanded A2 Vocabulary
 * Sources:
 * - Langenscheidt Grundwortschatz Deutsch als Fremdsprache (Situational daily themes)
 * - Goethe-Institut Zertifikat A2 Wortliste
 */
export const A2_EXPANDED: Record<string, WordResult> = {
  // --- GESUNDHEIT & ARZTBESUCH ---
  termin: {
    word: 'der Termin',
    displayWord: 'der Termin',
    ipa: '/tɛʁˈmiːn/',
    translations: ['janji temu', 'jadwal pertemuan'],
    meaningSummary: 'Waktu yang telah disepakati untuk bertemu atau melakukan janji penting.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Termin',
        plural: 'die Termine',
        genitivSingular: 'des Termins',
      },
    },
    synonyms: [
      { word: 'die Verabredung', article: 'die', wordClass: 'Nomen', translation: 'janji temu pribadi' },
      { word: 'die Absprache', article: 'die', wordClass: 'Nomen', translation: 'kesepakatan' },
    ],
    antonyms: [
      { word: 'die Absage', article: 'die', wordClass: 'Nomen', translation: 'pembatalan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich möchte gerne einen Termin beim Arzt vereinbaren.',
        indonesian: 'Saya ingin membuat janji temu dengan dokter.',
        contextNote: 'Frasa standar di klinik/kantor Jerman',
      },
      {
        level: 'A2',
        german: 'Können wir den Termin auf nächsten Dienstag verschieben?',
        indonesian: 'Bisakah kita menggeser janji temu ini ke hari Selasa depan?',
        contextNote: 'Mengubah jadwal',
      },
    ],
    learningTips: 'Kombinasi kata kerja wajib A2 Jerman: "einen Termin vereinbaren" (membuat janji), "einen Termin verschieben" (mengundur janji), "einen Termin absagen" (membatalkan janji).',
  },

  rezept: {
    word: 'das Rezept',
    displayWord: 'das Rezept',
    ipa: '/ʁeˈtsɛpt/',
    translations: ['resep dokter', 'resep masakan'],
    meaningSummary: 'Instruksi tertulis dari dokter untuk mengambil obat di apotek, atau panduan memasak makanan.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Rezept',
        plural: 'die Rezepte',
        genitivSingular: 'des Rezepts',
      },
    },
    synonyms: [
      { word: 'die Kochanleitung', article: 'die', wordClass: 'Nomen', translation: 'petunjuk memasak' },
      { word: 'die ärztliche Verordnung', article: 'die', wordClass: 'Nomen', translation: 'instruksi medis dokter' },
    ],
    antonyms: [
      { word: 'die Eigenmedikation', article: 'die', wordClass: 'Nomen', translation: 'pengobatan mandiri tanpa resep' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Der Arzt hat mir ein Rezept für Antibiotika ausgestellt.',
        indonesian: 'Dokter telah menerbitkan resep antibiotik untuk saya.',
        contextNote: 'Urusan medis',
      },
      {
        level: 'A2',
        german: 'Hast du das Rezept für diesen leckeren Kuchen?',
        indonesian: 'Apakah kamu punya resep kue lezat ini?',
        contextNote: 'Memasak sehari-hari',
      },
    ],
    learningTips: 'Mempunyai makna ganda yang sama persis seperti kata "resep" di Indonesia: resep dokter (Medikamente) dan resep makanan (Kochen).',
  },

  medikament: {
    word: 'das Medikament',
    displayWord: 'das Medikament',
    ipa: '/medikaˈmɛnt/',
    translations: ['obat', 'obat-obatan'],
    meaningSummary: 'Zat farmasi yang digunakan untuk menyembuhkan penyakit atau meredakan rasa sakit.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Medikament',
        plural: 'die Medikamente',
        genitivSingular: 'des Medikaments',
      },
    },
    synonyms: [
      { word: 'die Arznei', article: 'die', wordClass: 'Nomen', translation: 'obat (formal)' },
      { word: 'das Arzneimittel', article: 'das', wordClass: 'Nomen', translation: 'bahan obat' },
    ],
    antonyms: [
      { word: 'das Gift', article: 'das', wordClass: 'Nomen', translation: 'racun' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Sie müssen dieses Medikament dreimal täglich nach dem Essen einnehmen.',
        indonesian: 'Anda harus meminum obat ini tiga kali sehari sesudah makan.',
        contextNote: 'Petunjuk apoteker',
      },
      {
        level: 'A2',
        german: 'Dieses Medikament ist rezeptpflichtig.',
        indonesian: 'Obat ini memerlukan resep dokter.',
        contextNote: 'Syarat pembelian di apotek',
      },
    ],
    learningTips: 'Perhatikan kata kerja untuk obat: dalam bahasa Jerman BUKAN "Medikamente trinken", melainkan "Medikamente einnehmen" (meminum/mengonsumsi obat).',
  },

  fieber: {
    word: 'das Fieber',
    displayWord: 'das Fieber',
    ipa: '/ˈfiːbɐ/',
    translations: ['demam'],
    meaningSummary: 'Peningkatan suhu tubuh di atas normal sebagai respons terhadap infeksi penyakit.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Fieber',
        plural: '-',
        genitivSingular: 'des Fiebers',
      },
    },
    synonyms: [
      { word: 'die erhöhte Temperatur', article: 'die', wordClass: 'Nomen', translation: 'suhu badan naik' },
    ],
    antonyms: [
      { word: 'die Unterkühlung', article: 'die', wordClass: 'Nomen', translation: 'hipotermia' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Mein Kind hat hohes Fieber und bleibt im Bett.',
        indonesian: 'Anak saya mengalami demam tinggi dan tetap di tempat tidur.',
        contextNote: 'Kondisi sakit',
      },
      {
        level: 'A2',
        german: 'Ich muss mein Fieber mit dem Thermometer messen.',
        indonesian: 'Saya harus mengukur suhu demam saya dengan termometer.',
        contextNote: 'Pengukuran suhu',
      },
    ],
    learningTips: 'Kombinasi penting: "Fieber haben" (mengalami demam), "hohes Fieber" (demam tinggi), "Fieber messen" (mengukur suhu tubuh).',
  },

  // --- EINKAUFEN & GELD ---
  preis: {
    word: 'der Preis',
    displayWord: 'der Preis',
    ipa: '/pʁaɪ̯s/',
    translations: ['harga', 'hadiah kejuaraan / penghargaan'],
    meaningSummary: 'Jumlah uang yang harus dibayar untuk memperoleh barang; atau penghargaan atas prestasi.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Preis',
        plural: 'die Preise',
        genitivSingular: 'des Preises',
      },
    },
    synonyms: [
      { word: 'die Kosten', article: 'die', wordClass: 'Nomen', translation: 'biaya' },
      { word: 'die Auszeichnung', article: 'die', wordClass: 'Nomen', translation: 'penghargaan / piala' },
    ],
    antonyms: [
      { word: 'die Kostenlosigkeit', article: 'die', wordClass: 'Nomen', translation: 'gratis tanpa biaya' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Der Preis für diesen Laptop ist wirklich günstig.',
        indonesian: 'Harga untuk laptop ini benar-benar terjangkau.',
        contextNote: 'Komentar harga barang',
      },
      {
        level: 'A2',
        german: 'Er hat den ersten Preis im Wettbewerb gewonnen.',
        indonesian: 'Dia memenangkan hadiah juara pertama dalam kompetisi itu.',
        contextNote: 'Makna penghargaan / reward',
      },
    ],
    learningTips: 'Bentuk adjektiva penting: "preiswert" = harganya murah/sepadan dengan nilainya (worth the price).',
  },

  rechnung: {
    word: 'die Rechnung',
    displayWord: 'die Rechnung',
    ipa: '/ˈʁɛçnʊŋ/',
    translations: ['tagihan', 'struk', 'bon pembayaran', 'perhitungan matematika'],
    meaningSummary: 'Dokumen rincian tagihan pembayaran jasa atau barang.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Rechnung',
        plural: 'die Rechnungen',
        genitivSingular: 'der Rechnung',
      },
    },
    synonyms: [
      { word: 'der Beleg', article: 'der', wordClass: 'Nomen', translation: 'bukti bayar / kuitansi' },
      { word: 'die Quittung', article: 'die', wordClass: 'Nomen', translation: 'tanda terima lunas' },
    ],
    antonyms: [
      { word: 'die Gutschrift', article: 'die', wordClass: 'Nomen', translation: 'kredit pengembalian uang' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Die Rechnung, bitte! Wir möchten bezahlen.',
        indonesian: 'Minta bon tagihannya, tolong! Kami ingin membayar.',
        contextNote: 'Frasa standar di restoran Jerman',
      },
      {
        level: 'A2',
        german: 'Ich muss die Stromrechnung bis Ende des Monats bezahlen.',
        indonesian: 'Saya harus membayar tagihan listrik sebelum akhir bulan.',
        contextNote: 'Tagihan bulanan rumah tangga',
      },
    ],
    learningTips: 'Di restoran Jerman, Anda biasanya ditanya: "Zusammen oder getrennt?" (Bayar gabung atau masing-masing?).',
  },

  geld: {
    word: 'das Geld',
    displayWord: 'das Geld',
    ipa: '/ɡɛlt/',
    translations: ['uang', 'duit'],
    meaningSummary: 'Alat tukar resmi yang sah untuk transaksi barang dan jasa.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Geld',
        plural: 'die Gelder',
        genitivSingular: 'des Geldes',
      },
    },
    synonyms: [
      { word: 'das Bargeld', article: 'das', wordClass: 'Nomen', translation: 'uang tunai' },
      { word: 'die Währung', article: 'die', wordClass: 'Nomen', translation: 'mata uang' },
    ],
    antonyms: [
      { word: 'die Schulden', article: 'die', wordClass: 'Nomen', translation: 'utang (jamak)' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Kann ich mit Karte zahlen oder nur mit Bargeld?',
        indonesian: 'Bisakah saya bayar dengan kartu atau hanya uang tunai?',
        contextNote: 'Pertanyaan pembayaran umum di Jerman',
      },
      {
        level: 'A2',
        german: 'Ich hebe Geld am Geldautomaten ab.',
        indonesian: 'Saya menarik uang di mesin ATM.',
        contextNote: 'Kata kerja abheben',
      },
    ],
    learningTips: 'Kombinasi penting: "Geld abheben" (tarik tunai ATM), "Geld überweisen" (transfer uang bank), "Geld sparen" (menabung).',
  },

  // --- REISE & VERKEHR ---
  flugzeug: {
    word: 'das Flugzeug',
    displayWord: 'das Flugzeug',
    ipa: '/ˈfluːkt͡sɔʏ̯k/',
    translations: ['pesawat terbang'],
    meaningSummary: 'Kendaraan udara bermesin yang memiliki sayap untuk mengangkut penumpang.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Flugzeug',
        plural: 'die Flugzeuge',
        genitivSingular: 'des Flugzeugs',
      },
    },
    synonyms: [
      { word: 'der Flieger', article: 'der', wordClass: 'Nomen', translation: 'pesawat (bahasa santai)' },
      { word: 'die Maschine', article: 'die', wordClass: 'Nomen', translation: 'pesawat terbang (istilah bandara)' },
    ],
    antonyms: [
      { word: 'das Schiff', article: 'das', wordClass: 'Nomen', translation: 'kapal' },
      { word: 'der Zug', article: 'der', wordClass: 'Nomen', translation: 'kereta' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Das Flugzeug nach Frankfurt landet pünktlich um zehn Uhr.',
        indonesian: 'Pesawat ke Frankfurt mendarat tepat waktu pada pukul sepuluh.',
        contextNote: 'Jadwal penerbangan',
      },
      {
        level: 'A2',
        german: 'Wir fliegen mit dem Flugzeug nach Bali.',
        indonesian: 'Kami terbang naik pesawat ke Bali.',
        contextNote: 'Perjalanan liburan',
      },
    ],
    learningTips: 'Kata majemuk khas Jerman: "Flug" (terbang) + "Zeug" (alat/perkakas) = alat terbang!',
  },

  koffer: {
    word: 'der Koffer',
    displayWord: 'der Koffer',
    ipa: '/ˈkɔfɐ/',
    translations: ['koper'],
    meaningSummary: 'Tas kaku berbentuk kotak berpegangan untuk membawa pakaian saat bepergian.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Koffer',
        plural: 'die Koffer',
        genitivSingular: 'des Koffers',
      },
    },
    synonyms: [
      { word: 'das Gepäck', article: 'das', wordClass: 'Nomen', translation: 'bagasi' },
      { word: 'die Reisetasche', article: 'die', wordClass: 'Nomen', translation: 'tas perjalanan' },
    ],
    antonyms: [
      { word: 'das Handgepäck', article: 'das', wordClass: 'Nomen', translation: 'tas jinjing kabin' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich muss heute Abend noch meinen Koffer packen.',
        indonesian: 'Saya masih harus berkemas memasukkan barang ke koper nanti malam.',
        contextNote: 'Persiapan bepergian',
      },
      {
        level: 'A2',
        german: 'Mein Koffer wiegt leider mehr als 20 Kilo.',
        indonesian: 'Koper saya sayangnya berbobot lebih dari 20 kilo.',
        contextNote: 'Bagasi bandara',
      },
    ],
    learningTips: 'Kombinasi kata kerja wajib A2: "den Koffer packen" (berkemas/isi koper) vs "den Koffer auspacken" (membongkar isi koper setelah tiba).',
  },

  verspaetung: {
    word: 'die Verspätung',
    displayWord: 'die Verspätung',
    ipa: '/fɛɐ̯ˈʃpɛːtʊŋ/',
    translations: ['keterlambatan', 'delay'],
    meaningSummary: 'Kondisi tiba atau berangkat lebih lambat dari jadwal resmi.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Verspätung',
        plural: 'die Verspätungen',
        genitivSingular: 'der Verspätung',
      },
    },
    synonyms: [
      { word: 'die Verzögerung', article: 'die', wordClass: 'Nomen', translation: 'penundaan' },
      { word: 'der Zeitverzug', article: 'der', wordClass: 'Nomen', translation: 'kelambatan waktu' },
    ],
    antonyms: [
      { word: 'die Pünktlichkeit', article: 'die', wordClass: 'Nomen', translation: 'ketepatan waktu' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Der ICE hat leider 20 Minuten Verspätung.',
        indonesian: 'Kereta ICE sayangnya mengalami keterlambatan 20 menit.',
        contextNote: 'Pengumuman stasiun kereta Deutsche Bahn',
      },
      {
        level: 'A2',
        german: 'Wegen der Verspätung habe ich meinen Anschlusszug verpasst.',
        indonesian: 'Karena keterlambatan itu, saya ketinggalan kereta lanjutan saya.',
        contextNote: 'Masalah transportasi',
      },
    ],
    learningTips: 'Kombinasi frasa stasiun: "Verspätung haben" (mengalami keterlambatan/terlambat). Sangat sering didengar di stasiun kereta Jerman (DB).',
  },

  // --- BERUF & ARBEITSWELT ---
  beruf: {
    word: 'der Beruf',
    displayWord: 'der Beruf',
    ipa: '/bəˈʁuːf/',
    translations: ['profesi', 'pekerjaan', 'karier'],
    meaningSummary: 'Pekerjaan tetap yang ditekuni seseorang dan membutuhkan keahlian atau pendidikan khusus.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Beruf',
        plural: 'die Berufe',
        genitivSingular: 'des Berufes',
      },
    },
    synonyms: [
      { word: 'die Tätigkeit', article: 'die', wordClass: 'Nomen', translation: 'kegiatan profesi' },
      { word: 'der Job', article: 'der', wordClass: 'Nomen', translation: 'pekerjaan (kasual)' },
    ],
    antonyms: [
      { word: 'die Arbeitslosigkeit', article: 'die', wordClass: 'Nomen', translation: 'pengangguran' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Was sind Sie von Beruf? — Ich bin Informatiker.',
        indonesian: 'Apa profesi Anda? — Saya seorang ahli informatika.',
        contextNote: 'Pertanyaan profesi formal standar Jerman',
      },
      {
        level: 'A2',
        german: 'Er übt seinen Beruf mit großer Leidenschaft aus.',
        indonesian: 'Dia menjalankan profesinya dengan penuh semangat.',
        contextNote: 'Dedikasi kerja',
      },
    ],
    learningTips: 'Pola standar menanyakan profesi: "Was bist du von Beruf?" atau "Was machen Sie beruflich?".',
  },

  kollege: {
    word: 'der Kollege',
    displayWord: 'der Kollege',
    ipa: '/kɔˈleːɡə/',
    translations: ['rekan kerja', 'kolega'],
    meaningSummary: 'Orang yang bekerja bersama di instansi atau perusahaan yang sama.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Kollege',
        plural: 'die Kollegen',
        genitivSingular: 'des Kollegen',
      },
    },
    synonyms: [
      { word: 'der Arbeitskollege', article: 'der', wordClass: 'Nomen', translation: 'rekan kerja sekantor' },
      { word: 'der Mitarbeiter', article: 'der', wordClass: 'Nomen', translation: 'karyawan kolega' },
    ],
    antonyms: [
      { word: 'der Chef', article: 'der', wordClass: 'Nomen', translation: 'bos / atasan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Meine Kollegen sind sehr hilfsbereit und freundlich.',
        indonesian: 'Rekan-rekan kerja saya sangat suka membantu dan ramah.',
        contextNote: 'Hubungan kerja positif',
      },
      {
        level: 'A2',
        german: 'Ich gehe mit einem Kollegen in der Kantine essen.',
        indonesian: 'Saya pergi makan siang bersama rekan kerja di kantin.',
        contextNote: 'Aktivitas makan siang kantor',
      },
    ],
    learningTips: 'N-Deklination maskulin: di semua kasus selain Nominativ Singular, mendapat akhiran -n (des Kollegen, dem Kollegen, den Kollegen). Bentuk wanita: "die Kollegin".',
  },

  // --- WICHTIGE A2 VERBEN ---
  anfangen: {
    word: 'anfangen',
    displayWord: 'anfangen',
    ipa: '/ˈanˌfaŋən/',
    translations: ['memulai', 'mulai'],
    meaningSummary: 'Mengawali suatu tindakan, proses, atau kegiatan.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'anfangen',
        praesens: 'fängt an',
        praeteritum: 'fing an',
        partizip2: 'angefangen',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: true,
        prefix: 'an',
      },
    },
    synonyms: [
      { word: 'beginnen', wordClass: 'Verb', translation: 'memulai (sinonim formal)' },
      { word: 'starten', wordClass: 'Verb', translation: 'mengawali / start' },
    ],
    antonyms: [
      { word: 'aufhören', wordClass: 'Verb', translation: 'berhenti / menyudahi' },
      { word: 'beenden', wordClass: 'Verb', translation: 'mengakhiri' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Wann fängt der Deutschkurs an? — Er fängt um neun Uhr an.',
        indonesian: 'Kapan kursus bahasa Jerman mulai? — Mulai pukul sembilan.',
        contextNote: 'Kata kerja terpisah (trennbares Verb)',
      },
      {
        level: 'A2',
        german: 'Ich fange nächsten Monat mit der neuen Arbeit an.',
        indonesian: 'Saya mulai dengan pekerjaan baru bulan depan.',
        contextNote: 'Konstruksi anfangen mit + Dativ',
      },
    ],
    learningTips: 'Trennbares Verb: prefix "an-" pindah ke posisi paling akhir dalam kalimat utama: "Der Film fängt um acht Uhr an."',
  },

  aufhoeren: {
    word: 'aufhören',
    displayWord: 'aufhören',
    ipa: '/ˈaʊ̯fˌhøːʁən/',
    translations: ['berhenti', 'menyudahi'],
    meaningSummary: 'Menghentikan suatu kegiatan yang sedang berlangsung.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'aufhören',
        praesens: 'hört auf',
        praeteritum: 'hörte auf',
        partizip2: 'aufgehört',
        hilfsverb: 'haben',
        isIrregular: false,
        isSeparable: true,
        prefix: 'auf',
      },
    },
    synonyms: [
      { word: 'stoppen', wordClass: 'Verb', translation: 'berhenti' },
      { word: 'beenden', wordClass: 'Verb', translation: 'mengakhiri' },
    ],
    antonyms: [
      { word: 'anfangen', wordClass: 'Verb', translation: 'mulai' },
      { word: 'fortsetzen', wordClass: 'Verb', translation: 'melanjutkan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Hör bitte auf damit! Das stört mich.',
        indonesian: 'Tolong hentikan itu! Itu menggangguku.',
        contextNote: 'Kalimat perintah larangan',
      },
      {
        level: 'A2',
        german: 'Der Regen hat endlich aufgehört.',
        indonesian: 'Hujannya akhirnya sudah berhenti.',
        contextNote: 'Berhentinya cuaca buruk',
      },
    ],
    learningTips: 'Kombinasi penting: "aufhören mit + Dativ" (berhenti dari suatu hal, misal: "Er hat mit dem Rauchen aufgehört" = Dia sudah berhenti merokok).',
  },

  aufstehen: {
    word: 'aufstehen',
    displayWord: 'aufstehen',
    ipa: '/ˈaʊ̯fˌʃteːən/',
    translations: ['bangun tidur', 'berdiri bangkit'],
    meaningSummary: 'Bangkit dari posisi duduk atau tempat tidur ke posisi berdiri tegak.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'aufstehen',
        praesens: 'steht auf',
        praeteritum: 'stand auf',
        partizip2: 'aufgestanden',
        hilfsverb: 'sein',
        isIrregular: true,
        isSeparable: true,
        prefix: 'auf',
      },
    },
    synonyms: [
      { word: 'erwachen', wordClass: 'Verb', translation: 'terbangun sadar' },
      { word: 'sich erheben', wordClass: 'Verb', translation: 'bangkit berdiri (formal)' },
    ],
    antonyms: [
      { word: 'schlafen', wordClass: 'Verb', translation: 'tidur' },
      { word: 'sich hinsetzen', wordClass: 'Verb', translation: 'duduk' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich stehe unter der Woche immer um sechs Uhr auf.',
        indonesian: 'Pada hari kerja saya selalu bangun tidur pukul enam.',
        contextNote: 'Rutinitas harian',
      },
      {
        level: 'A2',
        german: 'Er ist heute sehr früh aufgestanden.',
        indonesian: 'Dia bangun sangat pagi hari ini.',
        contextNote: 'Bentuk Perfekt dengan sein',
      },
    ],
    learningTips: 'Menggunakan hilfsverb "sein" di bentuk Perfekt: "Ich bin aufgestanden" (karena perubahan keadaan/posisi gerak).',
  },

  bestellen: {
    word: 'bestellen',
    displayWord: 'bestellen',
    ipa: '/bəˈʃtɛlən/',
    translations: ['memesan (makanan / barang)', 'order'],
    meaningSummary: 'Meminta barang dikirim atau hidangan dimasak di restoran/toko online.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'bestellen',
        praesens: 'bestellt',
        praeteritum: 'bestellte',
        partizip2: 'bestellt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'ordern', wordClass: 'Verb', translation: 'mengorder' },
      { word: 'anfordern', wordClass: 'Verb', translation: 'meminta pasokan' },
    ],
    antonyms: [
      { word: 'stornieren', wordClass: 'Verb', translation: 'membatalkan pesanan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Wir möchten gerne bestellen: zwei Schnitzel und eine Cola, bitte.',
        indonesian: 'Kami ingin memesan: dua schnitzel dan satu kola, tolong.',
        contextNote: 'Pemesanan di restoran',
      },
      {
        level: 'A2',
        german: 'Ich habe dieses Buch online bestellt.',
        indonesian: 'Saya memesan buku ini secara online.',
        contextNote: 'Belanja online',
      },
    ],
    learningTips: 'Prefix "be-" tidak terpisahkan (untrennbar). Partizip II tidak memakai ge-: "bestellt" (BUKAN gebestellt).',
  },

  bezahlen: {
    word: 'bezahlen',
    displayWord: 'bezahlen',
    ipa: '/bəˈtsaːlən/',
    translations: ['membayar', 'melunasi'],
    meaningSummary: 'Memberikan uang sebagai pembayaran barang atau jasa yang diterima.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'bezahlen',
        praesens: 'bezahlt',
        praeteritum: 'bezahlte',
        partizip2: 'bezahlt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'zahlen', wordClass: 'Verb', translation: 'membayar' },
      { word: 'begleichen', wordClass: 'Verb', translation: 'melunasi tagihan (formal)' },
    ],
    antonyms: [
      { word: 'schulden', wordClass: 'Verb', translation: 'berutang' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Kann ich die Rechnung mit Kreditkarte bezahlen?',
        indonesian: 'Bisakah saya membayar tagihannya dengan kartu kredit?',
        contextNote: 'Metode pembayaran',
      },
      {
        level: 'A2',
        german: 'Ich habe gestern die Miete bezahlt.',
        indonesian: 'Saya kemarin sudah membayar uang sewa rumah.',
        contextNote: 'Kewajiban bulanan',
      },
    ],
    learningTips: 'Kata kerja untrennbar (tidak terpisah). Sering disingkat menjadi "zahlen" di percakapan restoran: "Wir möchten zahlen, bitte!"',
  },

  gefallen: {
    word: 'gefallen',
    displayWord: 'gefallen',
    ipa: '/ɡəˈfalən/',
    translations: ['disukai / menyenangkan bagi seseorang (+ Dativ)'],
    meaningSummary: 'Memberikan kesan positif atau rasa suka kepada seseorang.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'gefallen',
        praesens: 'gefällt',
        praeteritum: 'gefiel',
        partizip2: 'gefallen',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'zusagen', wordClass: 'Verb', translation: 'cocok di hati' },
      { word: 'ansprechen', wordClass: 'Verb', translation: 'menarik minat' },
    ],
    antonyms: [
      { word: 'missfallen', wordClass: 'Verb', translation: 'tidak disukai' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Wie gefällt dir diese Stadt? — Berlin gefällt mir sehr gut!',
        indonesian: 'Bagaimana kamu menyukai kota ini? — Saya sangat suka Berlin!',
        contextNote: 'Menanyakan kesan tempat tinggal',
      },
      {
        level: 'A2',
        german: 'Das neue Kleid gefällt meiner Mutter.',
        indonesian: 'Gaun baru itu disukai oleh ibu saya.',
        contextNote: 'Objek penerima dalam kasus Dativ (meiner Mutter)',
      },
    ],
    learningTips: 'Struktur tata bahasa kunci A2: Benda yang disukai adalah SUBJEK (Nominativ), sedangkan orang yang menyukai adalah OBJEK DATIV: "Das Buch (Subjek) gefällt mir (Dativ)".',
  },

  schmecken: {
    word: 'schmecken',
    displayWord: 'schmecken',
    ipa: '/ˈʃmɛkn̩/',
    translations: ['terasa enak / terasa lezat (+ Dativ)', 'memiliki cita rasa'],
    meaningSummary: 'Menimbulkan sensasi rasa di lidah; terasa lezat bila digunakan berdiri sendiri.',
    wordClass: 'Verb',
    cefrLevel: 'A2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'schmecken',
        praesens: 'schmeckt',
        praeteritum: 'schmeckte',
        partizip2: 'geschmeckt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'munden', wordClass: 'Verb', translation: 'terasa lezat (bahasa halus/kuno)' },
    ],
    antonyms: [
      { word: 'eklig sein', wordClass: 'Verb', translation: 'terasa menjijikkan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Schmeckt es Ihnen? — Ja, das Essen schmeckt ausgezeichnet!',
        indonesian: 'Apakah makanannya enak bagi Anda? — Ya, makanannya luar biasa lezat!',
        contextNote: 'Pertanyaan pelayan restoran di Jerman',
      },
      {
        level: 'A2',
        german: 'Die Suppe schmeckt nach Knoblauch.',
        indonesian: 'Sup ini terasa aroma bawang putih.',
        contextNote: 'Mendeskripsikan rasa spesifik (schmecken nach + Dativ)',
      },
    ],
    learningTips: 'Di Jerman, pelayan selalu bertanya: "Hat es geschmeckt?" (Apakah tadi makanannya enak?). Jawab: "Ja, sehr lecker, danke!"',
  },

  // --- ADJEKTIVE A2 ---
  gesund: {
    word: 'gesund',
    displayWord: 'gesund',
    ipa: '/ɡəˈzʊnt/',
    translations: ['sehat', 'menyehatkan'],
    meaningSummary: 'Bebas dari penyakit dan bugar; atau sesuatu yang baik untuk kesehatan tubuh.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'gesund',
        komparativ: 'gesünder',
        superlativ: 'am gesündesten',
      },
    },
    synonyms: [
      { word: 'fit', wordClass: 'Adjektiv', translation: 'bugar' },
      { word: 'vital', wordClass: 'Adjektiv', translation: 'bertenaga prima' },
    ],
    antonyms: [
      { word: 'krank', wordClass: 'Adjektiv', translation: 'sakit' },
      { word: 'ungesund', wordClass: 'Adjektiv', translation: 'tidak sehat' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Obst und viel Wasser sind sehr gesund für den Körper.',
        indonesian: 'Buah dan banyak air sangat sehat untuk tubuh.',
        contextNote: 'Pola hidup bugar',
      },
      {
        level: 'A2',
        german: 'Ich wünsche Ihnen gute Besserung und werden Sie schnell wieder gesund!',
        indonesian: 'Saya mendoakan kesembuhan Anda dan semoga cepat sehat kembali!',
        contextNote: 'Ucapan lekas sembuh di Jerman',
      },
    ],
    learningTips: 'Komparatif dan superlatif mendapat umlaut: "gesund" -> "gesünder" -> "am gesündesten". Ucapan saat bersin: "Gesundheit!" (Semoga sehat!).',
  },

  krank: {
    word: 'krank',
    displayWord: 'krank',
    ipa: '/kʁaŋk/',
    translations: ['sakit'],
    meaningSummary: 'Mengalami gangguan fisik atau mental sehingga tidak sehat.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'krank',
        komparativ: 'kränker',
        superlativ: 'am kränksten',
      },
    },
    synonyms: [
      { word: 'unwohl', wordClass: 'Adjektiv', translation: 'tidak enak badan' },
      { word: 'leidend', wordClass: 'Adjektiv', translation: 'menderita sakit' },
    ],
    antonyms: [
      { word: 'gesund', wordClass: 'Adjektiv', translation: 'sehat' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich kann heute nicht zur Arbeit kommen, weil ich krank bin.',
        indonesian: 'Saya tidak bisa datang kerja hari ini karena saya sakit.',
        contextNote: 'Izin sakit kerja (kalimat anak kalimat weil)',
      },
      {
        level: 'A2',
        german: 'Er meldet sich beim Chef krank.',
        indonesian: 'Dia mengabarkan izin sakit kepada bosnya.',
        contextNote: 'Frasa sich krankmelden',
      },
    ],
    learningTips: 'Kombinasi penting di Jerman: "die Krankmeldung" (surat keterangan dokter izin sakit), "das Krankenhaus" (rumah sakit), "die Krankenkasse" (asuransi kesehatan).',
  },

  zufrieden: {
    word: 'zufrieden',
    displayWord: 'zufrieden',
    ipa: '/tsuˈfʁiːdn̩/',
    translations: ['puas', 'senang dengan hasilnya'],
    meaningSummary: 'Merasa cukup dan senang karena harapan terpenuhi.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'zufrieden',
        komparativ: 'zufriedener',
        superlativ: 'am zufriedensten',
      },
    },
    synonyms: [
      { word: 'glücklich', wordClass: 'Adjektiv', translation: 'bahagia' },
      { word: 'froh', wordClass: 'Adjektiv', translation: 'gembira / lega' },
    ],
    antonyms: [
      { word: 'unzufrieden', wordClass: 'Adjektiv', translation: 'tidak puas / kecewa' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich bin mit meiner neuen Wohnung sehr zufrieden.',
        indonesian: 'Saya sangat puas dengan apartemen baru saya.',
        contextNote: 'Kepuasan tempat tinggal (zufrieden mit + Dativ)',
      },
      {
        level: 'A2',
        german: 'Der Kunde war mit dem Service vollkommen zufrieden.',
        indonesian: 'Pelanggan itu sepenuhnya puas dengan layanannya.',
        contextNote: 'Kepuasan pelanggan',
      },
    ],
    learningTips: 'Preposisi wajib: "zufrieden mit + Dativ" (puas terhadap sesuatu). Lawan katanya cukup beri prefix un-: "unzufrieden".',
  },
};
