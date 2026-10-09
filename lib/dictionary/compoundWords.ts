import { WordResult } from '../types';

/**
 * Curated German Compound Words (Komposita / Wortzusammensetzungen)
 * Features complete compound breakdowns explaining components, articles, meanings, and grammatical head-word rules
 */
export const COMPOUND_WORDS: Record<string, WordResult> = {
  handschuh: {
    word: 'der Handschuh',
    displayWord: 'der Handschuh',
    ipa: '/ˈhantˌʃuː/',
    translations: ['sarung tangan'],
    meaningSummary: 'Penutup pelindung tangan dari hawa dingin, gesekan kerja, atau kotoran.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Handschuh',
        plural: 'die Handschuhe',
        genitivSingular: 'des Handschuhs',
      },
    },
    synonyms: [
      { word: 'der Fäustling', article: 'der', wordClass: 'Nomen', translation: 'sarung tangan tanpa sekat jari' },
      { word: 'der Fingerhandschuh', article: 'der', wordClass: 'Nomen', translation: 'sarung tangan bersekat lima jari' },
    ],
    antonyms: [
      { word: 'die Barhändigkeit', article: 'die', wordClass: 'Nomen', translation: 'tangan telanjang tanpa sarung' },
      { word: 'die bloße Hand', article: 'die', wordClass: 'Nomen', translation: 'tangan terbuka tanpa penutup sarung' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Im Winter trage ich warme Handschuhe aus Wolle.',
        indonesian: 'Pada musim dingin saya mengenakan sarung tangan hangat dari bahan wol.',
        contextNote: 'Pakaian musim dingin',
      },
      {
        level: 'A2',
        german: 'Ärzte tragen bei Operationen sterile Handschuhe.',
        indonesian: 'Dokter mengenakan sarung tangan steril saat melakukan operasi.',
        contextNote: 'Prosedur higienis medis',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'die Hand',
          article: 'die',
          wordClass: 'Nomen',
          meaning: 'tangan',
          role: 'Bestimmungswort (kata penjelas bagian depan)',
        },
        {
          part: 'der Schuh',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'sepatu / alas penutup',
          role: 'Grundwort (kata dasar penentu artikel)',
        },
      ],
      explanation:
        'Kata "Handschuh" merupakan gabungan dari "die Hand" (tangan) dan "der Schuh" (sepatu). Secara harfiah orang Jerman menyebutnya sebagai "sepatu untuk tangan", yang bermakna sarung tangan.',
      headWordRule:
        'Aturan Gender: Gender dan artikel ditentukan oleh kata dasar paling terakhir (Grundwort), yaitu "der Schuh" (maskulin), sehingga menjadi "der Handschuh".',
    },
  },

  krankenhaus: {
    word: 'das Krankenhaus',
    displayWord: 'das Krankenhaus',
    ipa: '/ˈkʁaŋkn̩ˌhaʊ̯s/',
    translations: ['rumah sakit'],
    meaningSummary: 'Institusi pelayanan medis rawat inap dan rawat jalan bagi orang sakit.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Krankenhaus',
        plural: 'die Krankenhäuser',
        genitivSingular: 'des Krankenhauses',
      },
    },
    synonyms: [
      { word: 'die Klinik', article: 'die', wordClass: 'Nomen', translation: 'klinik rawat medis' },
      { word: 'das Hospital', article: 'das', wordClass: 'Nomen', translation: 'rumah sakit formal' },
    ],
    antonyms: [
      { word: 'das Zuhause', article: 'das', wordClass: 'Nomen', translation: 'rumah kediaman sendiri' },
      { word: 'die freie Natur', article: 'die', wordClass: 'Nomen', translation: 'alam bebas di luar fasilitas sakit' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Der Krankenwagen bringt den Patienten schnell ins Krankenhaus.',
        indonesian: 'Mobil ambulans membawa pasien dengan cepat ke rumah sakit.',
        contextNote: 'Kedaruratan medis',
      },
      {
        level: 'A2',
        german: 'Sie arbeitet als Ärztin im städtischen Krankenhaus.',
        indonesian: 'Dia bekerja sebagai dokter di rumah sakit umum daerah.',
        contextNote: 'Tempat bekerja',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'der Kranke / krank',
          article: 'der',
          wordClass: 'Nomen / Adjektiv',
          meaning: 'orang sakit / sakit',
          role: 'Bestimmungswort (kata penjelas depan dengan akhiran jamak -en)',
        },
        {
          part: 'das Haus',
          article: 'das',
          wordClass: 'Nomen',
          meaning: 'rumah / gedung',
          role: 'Grundwort (kata dasar penentu artikel)',
        },
      ],
      explanation:
        'Kata "Krankenhaus" terbentuk dari "Kranken" (orang-orang yang sakit) dan "das Haus" (rumah). Secara harfiah bermakna "rumah bagi orang-orang sakit" (rumah sakit).',
      headWordRule:
        'Aturan Gender: Kata dasar penentu adalah "das Haus" (netral), sehingga artikel gabungannya menjadi "das Krankenhaus".',
    },
  },

  flughafen: {
    word: 'der Flughafen',
    displayWord: 'der Flughafen',
    ipa: '/ˈfluːkˌhaːfn̩/',
    translations: ['bandara', 'lapangan terbang'],
    meaningSummary: 'Kawasan terpadu dengan landasan pacu untuk keberangkatan dan kedatangan pesawat terbang.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Flughafen',
        plural: 'die Flughäfen',
        genitivSingular: 'des Flughafens',
      },
    },
    synonyms: [
      { word: 'der Flugplatz', article: 'der', wordClass: 'Nomen', translation: 'lapangan terbang perintis' },
      { word: 'der Airport', article: 'der', wordClass: 'Nomen', translation: 'bandara internasional' },
    ],
    antonyms: [
      { word: 'der Bahnhof', article: 'der', wordClass: 'Nomen', translation: 'stasiun kereta darat' },
      { word: 'der Seehafen', article: 'der', wordClass: 'Nomen', translation: 'pelabuhan kapal laut' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Wir müssen zwei Stunden vor Abflug am Flughafen sein.',
        indonesian: 'Kita harus berada di bandara dua jam sebelum keberangkatan.',
        contextNote: 'Perjalanan udara',
      },
      {
        level: 'A2',
        german: 'Der Flughafen Frankfurt ist einer der größten in Europa.',
        indonesian: 'Bandara Frankfurt adalah salah satu yang terbesar di Eropa.',
        contextNote: 'Pusat transportasi',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'der Flug',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'penerbangan (dari kata fliegen)',
          role: 'Bestimmungswort (kata penjelas depan)',
        },
        {
          part: 'der Hafen',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'pelabuhan / dermaga sandar',
          role: 'Grundwort (kata dasar)',
        },
      ],
      explanation:
        'Kata "Flughafen" tersusun dari "der Flug" (penerbangan) dan "der Hafen" (pelabuhan). Secara harfiah bermakna "pelabuhan penerbangan" alias bandara udara.',
      headWordRule:
        'Aturan Gender: Mengikuti kata dasar terakhir "der Hafen" (maskulin) -> "der Flughafen".',
    },
  },

  fahrrad: {
    word: 'das Fahrrad',
    displayWord: 'das Fahrrad',
    ipa: '/ˈfaːɐ̯ˌʁaːt/',
    translations: ['sepeda'],
    meaningSummary: 'Kendaraan roda dua yang digerakkan dengan kayuhan pedal kaki.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Fahrrad',
        plural: 'die Fahrräder',
        genitivSingular: 'des Fahrrads / des Fahrrades',
      },
    },
    synonyms: [
      { word: 'das Rad', article: 'das', wordClass: 'Nomen', translation: 'sepeda (singkatan sehari-hari)' },
      { word: 'das Zweirad', article: 'das', wordClass: 'Nomen', translation: 'kendaraan roda dua' },
      { word: 'das Mountainbike', article: 'das', wordClass: 'Nomen', translation: 'sepeda gunung' },
    ],
    antonyms: [
      { word: 'das Auto', article: 'das', wordClass: 'Nomen', translation: 'mobil bermotor' },
      { word: 'das Motorrad', article: 'das', wordClass: 'Nomen', translation: 'sepeda motor' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Viele Menschen in Deutschland fahren mit dem Fahrrad zur Arbeit.',
        indonesian: 'Banyak orang di Jerman pergi bekerja naik sepeda.',
        contextNote: 'Mobilitas ramah lingkungan',
      },
      {
        level: 'A2',
        german: 'Mein Fahrrad hat einen platten Reifen.',
        indonesian: 'Ban sepeda saya kempis.',
        contextNote: 'Kondisi kendaraan',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'fahren',
          wordClass: 'Verb',
          meaning: 'berkendara / berjalan menggelinding',
          role: 'Bestimmungswort (batang kata kerja fahr-)',
        },
        {
          part: 'das Rad',
          article: 'das',
          wordClass: 'Nomen',
          meaning: 'roda',
          role: 'Grundwort (kata dasar)',
        },
      ],
      explanation:
        'Kata "Fahrrad" menggabungkan kata kerja "fahren" (berkendara) dan kata benda "das Rad" (roda). Makna harfiahnya adalah "roda untuk berkendara".',
      headWordRule:
        'Aturan Gender: Mengikuti artikel netral kata "das Rad" -> "das Fahrrad".',
    },
  },

  freizeitbeschaeftigung: {
    word: 'die Freizeitbeschäftigung',
    displayWord: 'die Freizeitbeschäftigung',
    ipa: '/ˈfʁaɪ̯t͡saɪ̯tbəˌʃɛftɪɡʊŋ/',
    translations: ['aktivitas waktu senggang', 'hobi pengisi waktu luang'],
    meaningSummary: 'Kegiatan rekreatif yang dilakukan pada waktu bebas di luar jam dinas kerja.',
    wordClass: 'Nomen',
    cefrLevel: 'B1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Freizeitbeschäftigung',
        plural: 'die Freizeitbeschäftigungen',
        genitivSingular: 'der Freizeitbeschäftigung',
      },
    },
    synonyms: [
      { word: 'das Hobby', article: 'das', wordClass: 'Nomen', translation: 'kegemaran / hobi' },
      { word: 'die Freizeitaktivität', article: 'die', wordClass: 'Nomen', translation: 'aktivitas waktu luang' },
      { word: 'der Zeitvertreib', article: 'der', wordClass: 'Nomen', translation: 'pengisi waktu santai' },
    ],
    antonyms: [
      { word: 'die Erwerbsarbeit', article: 'die', wordClass: 'Nomen', translation: 'pekerjaan mata pencaharian' },
      { word: 'die Pflicht', article: 'die', wordClass: 'Nomen', translation: 'tugas kewajiban' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Sport und Lesen sind beliebte Freizeitbeschäftigungen bei Jugendlichen.',
        indonesian: 'Olahraga dan membaca adalah aktivitas waktu luang yang digemari di kalangan remaja.',
        contextNote: 'Pola kegiatan hobi',
      },
      {
        level: 'B1',
        german: 'Welche Freizeitbeschäftigung hilft Ihnen am besten beim Entspannen?',
        indonesian: 'Aktivitas waktu senggang apa yang paling membantu Anda dalam berelaksasi?',
        contextNote: 'Kesehatan mental dan relaksasi',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'die Freizeit (frei + Zeit)',
          article: 'die',
          wordClass: 'Nomen (Kompositum)',
          meaning: 'waktu luang / waktu bebas',
          role: 'Bestimmungswort',
        },
        {
          part: 'die Beschäftigung',
          article: 'die',
          wordClass: 'Nomen',
          meaning: 'aktivitas / kesibukan (dari kata beschäftigen)',
          role: 'Grundwort',
        },
      ],
      explanation:
        'Kata majemuk bertingkat yang terdiri dari "die Freizeit" (waktu luang: gabungan dari frei + Zeit) dan "die Beschäftigung" (kesibukan/aktivitas). Mengartikan kegiatan pengisi waktu bebas.',
      headWordRule:
        'Aturan Gender: Mengikuti artikel feminin "die Beschäftigung" (karena berakhiran -ung) -> "die Freizeitbeschäftigung".',
    },
  },

  kuehlschrank: {
    word: 'der Kühlschrank',
    displayWord: 'der Kühlschrank',
    ipa: '/ˈkyːlˌʃʁaŋk/',
    translations: ['lemari es', 'kulkas'],
    meaningSummary: 'Peralatan elektronik rumah tangga berpendingin untuk mengawetkan makanan dan minuman.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Kühlschrank',
        plural: 'die Kühlschränke',
        genitivSingular: 'des Kühlschranks',
      },
    },
    synonyms: [
      { word: 'das Kühlgerät', article: 'das', wordClass: 'Nomen', translation: 'perangkat pendingin' },
      { word: 'die Kühlung', article: 'die', wordClass: 'Nomen', translation: 'unit pendingin' },
    ],
    antonyms: [
      { word: 'der Herd', article: 'der', wordClass: 'Nomen', translation: 'kompor pemanas' },
      { word: 'der Backofen', article: 'der', wordClass: 'Nomen', translation: 'oven pemanggang' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Die Milch steht im Kühlschrank.',
        indonesian: 'Susu itu ditaruh di dalam lemari es.',
        contextNote: 'Posisi perabot dapur (in + Dativ)',
      },
      {
        level: 'A2',
        german: 'Vergiss nicht, die Kühlschranktür richtig zu schließen!',
        indonesian: 'Jangan lupa menutup pintu kulkas dengan rapat!',
        contextNote: 'Instruksi rumah tangga',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'kühlen',
          wordClass: 'Verb',
          meaning: 'mendinginkan / sejuk',
          role: 'Bestimmungswort (batang kata kerja kühl-)',
        },
        {
          part: 'der Schrank',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'lemari',
          role: 'Grundwort (kata dasar penentu artikel)',
        },
      ],
      explanation:
        'Kata "Kühlschrank" merupakan gabungan kata kerja "kühlen" (mendinginkan) dan "der Schrank" (lemari). Secara harfiah adalah "lemari pendingin" (kulkas).',
      headWordRule:
        'Aturan Gender: Mengikuti artikel kata "der Schrank" (maskulin) -> "der Kühlschrank".',
    },
  },

  zahnbuerste: {
    word: 'die Zahnbürste',
    displayWord: 'die Zahnbürste',
    ipa: '/ˈt͡saːnˌbʏʁstə/',
    translations: ['sikat gigi'],
    meaningSummary: 'Alat bergagang dengan bulu halus pembersih sela-sela gigi dan gusi.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Zahnbürste',
        plural: 'die Zahnbürsten',
        genitivSingular: 'der Zahnbürste',
      },
    },
    synonyms: [
      { word: 'die Bürste', article: 'die', wordClass: 'Nomen', translation: 'sikat pembersih' },
      { word: 'die Schallzahnbürste', article: 'die', wordClass: 'Nomen', translation: 'sikat gigi sonik elektrik' },
    ],
    antonyms: [
      { word: 'die Zahnseide', article: 'die', wordClass: 'Nomen', translation: 'benang pembersih gigi' },
      { word: 'der Zahnstocher', article: 'der', wordClass: 'Nomen', translation: 'tusuk gigi pembersih manual' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Man sollte die Zahnbürste alle drei Monate wechseln.',
        indonesian: 'Orang sebaiknya mengganti sikat gigi setiap tiga bulan sekali.',
        contextNote: 'Kesehatan gigi higienis',
      },
      {
        level: 'A2',
        german: 'Ich habe meine Zahnbürste für die Reise eingepackt.',
        indonesian: 'Saya telah mengemas sikat gigi saya untuk perjalanan ini.',
        contextNote: 'Perlengkapan mandi bepergian',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'der Zahn',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'gigi',
          role: 'Bestimmungswort (kata penjelas)',
        },
        {
          part: 'die Bürste',
          article: 'die',
          wordClass: 'Nomen',
          meaning: 'sikat',
          role: 'Grundwort (kata dasar penentu artikel)',
        },
      ],
      explanation:
        'Terbentuk dari "der Zahn" (gigi) dan "die Bürste" (sikat). Mengartikan sikat pembersih gigi.',
      headWordRule:
        'Aturan Gender: Mengikuti artikel feminin "die Bürste" -> "die Zahnbürste".',
    },
  },

  woerterbuch: {
    word: 'das Wörterbuch',
    displayWord: 'das Wörterbuch',
    ipa: '/ˈvœʁtɐˌbuːx/',
    translations: ['kamus', 'leksikon kosakata'],
    meaningSummary: 'Buku atau referensi digital rujukan yang memuat perbendaharaan kata beserta arti dan penggunaannya.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Wörterbuch',
        plural: 'die Wörterbücher',
        genitivSingular: 'des Wörterbuchs / des Wörterbuches',
      },
    },
    synonyms: [
      { word: 'das Lexikon', article: 'das', wordClass: 'Nomen', translation: 'leksikon ensiklopedia' },
      { word: 'das Vokabelheft', article: 'das', wordClass: 'Nomen', translation: 'buku catatan kosakata' },
      { word: 'das Diktionär', article: 'das', wordClass: 'Nomen', translation: 'kamus kata' },
    ],
    antonyms: [
      { word: 'der Roman', article: 'der', wordClass: 'Nomen', translation: 'novel fiksi naratif' },
      { word: 'das Bilderbuch', article: 'das', wordClass: 'Nomen', translation: 'buku bergambar tanpa teks leksikon' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Schlage das unbekannte Wort im Wörterbuch nach!',
        indonesian: 'Carilah kata yang belum kamu kenal itu di dalam kamus!',
        contextNote: 'Kolokasi: im Wörterbuch nachschlagen',
      },
      {
        level: 'A2',
        german: 'Ein zweisprachiges Wörterbuch ist nützlich für Anfänger.',
        indonesian: 'Kamus dwibahasa sangat bermanfaat bagi pemula.',
        contextNote: 'Alat belajar bahasa',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'die Wörter',
          article: 'die',
          wordClass: 'Nomen (Plural dari das Wort)',
          meaning: 'kata-kata kosakata terisolasi',
          role: 'Bestimmungswort',
        },
        {
          part: 'das Buch',
          article: 'das',
          wordClass: 'Nomen',
          meaning: 'buku',
          role: 'Grundwort (kata dasar penentu artikel)',
        },
      ],
      explanation:
        'Kata "Wörterbuch" menggabungkan "die Wörter" (kata-kata) dan "das Buch" (buku). Secara harfiah bermakna "buku kata-kata", yaitu kamus.',
      headWordRule:
        'Aturan Gender: Mengikuti artikel netral "das Buch" -> "das Wörterbuch". Jamaknya pun mengikuti jamak Buch: "die Wörterbücher".',
    },
  },

  hauptbahnhof: {
    word: 'der Hauptbahnhof',
    displayWord: 'der Hauptbahnhof',
    ipa: '/ˈhaʊ̯ptbaːnˌhoːf/',
    translations: ['stasiun sentral utama', 'stasiun kereta pusat'],
    meaningSummary: 'Stasiun kereta api paling utama dan terbesar di suatu kota yang menghubungkan rute jarak jauh.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Hauptbahnhof',
        plural: 'die Hauptbahnhöfe',
        genitivSingular: 'des Hauptbahnhofs',
      },
    },
    synonyms: [
      { word: 'der Zentralbahnhof', article: 'der', wordClass: 'Nomen', translation: 'stasiun terminal sentral' },
      { word: 'der Fernbahnhof', article: 'der', wordClass: 'Nomen', translation: 'stasiun kereta jarak jauh' },
    ],
    antonyms: [
      { word: 'der Haltepunkt', article: 'der', wordClass: 'Nomen', translation: 'halte perhentian kecil' },
      { word: 'der Vorortbahnhof', article: 'der', wordClass: 'Nomen', translation: 'stasiun pinggiran kota' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Der Zug nach Hamburg fährt vom Hauptbahnhof ab.',
        indonesian: 'Kereta ke Hamburg berangkat dari stasiun sentral utama.',
        contextNote: 'Titik temu transportasi kereta (Hbf)',
      },
      {
        level: 'A2',
        german: 'Treffen wir uns am Eingang des Berliner Hauptbahnhofs!',
        indonesian: 'Mari kita bertemu di pintu masuk stasiun sentral Berlin!',
        contextNote: 'Lokasi janji temu',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'das Haupt / Haupt-',
          wordClass: 'Präfix / Nomen',
          meaning: 'utama / kepala / primer',
          role: 'Bestimmungswort 1',
        },
        {
          part: 'die Bahn',
          article: 'die',
          wordClass: 'Nomen',
          meaning: 'kereta / jalur rel rel',
          role: 'Bestimmungswort 2',
        },
        {
          part: 'der Hof',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'halaman pelataran / stasiun pangkalan',
          role: 'Grundwort penentu artikel',
        },
      ],
      explanation:
        'Kompositum bersusun tiga: "Haupt-" (utama) + "Bahn" (kereta rel) + "Hof" (pelataran stasiun). Sering disingkat di plang rambu Jerman sebagai "Hbf".',
      headWordRule:
        'Aturan Gender: Mengikuti artikel maskulin kata terakhir "der Hof" -> "der Hauptbahnhof".',
    },
  },

  staubsauger: {
    word: 'der Staubsauger',
    displayWord: 'der Staubsauger',
    ipa: '/ˈʃtaʊ̯pˌzaʊ̯ɡɐ/',
    translations: ['penyedot debu', 'vacuum cleaner'],
    meaningSummary: 'Peralatan elektronik pembersih debu dan kotoran lantai menggunakan daya hisap angin.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Staubsauger',
        plural: 'die Staubsauger',
        genitivSingular: 'des Staubsaugers',
      },
    },
    synonyms: [
      { word: 'der Sauger', article: 'der', wordClass: 'Nomen', translation: 'alat penghisap debu' },
      { word: 'der Saugroboter', article: 'der', wordClass: 'Nomen', translation: 'robot penyedot debu pintar' },
    ],
    antonyms: [
      { word: 'der Besen', article: 'der', wordClass: 'Nomen', translation: 'sapu ijuk manual' },
      { word: 'der Staubwedel', article: 'der', wordClass: 'Nomen', translation: 'kemoceng bulu ayam' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Ich sauge am Samstag die Teppiche mit dem Staubsauger.',
        indonesian: 'Pada hari Sabtu saya menyedot karpet-karpet dengan mesin penyedot debu.',
        contextNote: 'Kebersihan rumah tangga harian',
      },
      {
        level: 'A2',
        german: 'Der Staubsauger ist sehr leise und energieeffizient.',
        indonesian: 'Penyedot debu ini sangat senyap dan hemat daya energi.',
        contextNote: 'Karakteristik perangkat rumah',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'der Staub',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'debu',
          role: 'Bestimmungswort',
        },
        {
          part: 'der Sauger',
          article: 'der',
          wordClass: 'Nomen (dari kata saugen)',
          meaning: 'alat penghisap / penyedot',
          role: 'Grundwort penentu artikel',
        },
      ],
      explanation:
        'Terbentuk dari "der Staub" (debu) dan "der Sauger" (penghisap/penyedot dari kata saugen). Makna harfiah: penyedot debu.',
      headWordRule:
        'Aturan Gender: Mengikuti artikel maskulin "der Sauger" -> "der Staubsauger".',
    },
  },

  schildkroete: {
    word: 'die Schildkröte',
    displayWord: 'die Schildkröte',
    ipa: '/ˈʃɪltˌkʁøːtə/',
    translations: ['kura-kura', 'penyu'],
    meaningSummary: 'Reptil berkaki empat yang tubuhnya terlindung di dalam cangkang keras bertempurung.',
    wordClass: 'Nomen',
    cefrLevel: 'A2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Schildkröte',
        plural: 'die Schildkröten',
        genitivSingular: 'der Schildkröte',
      },
    },
    synonyms: [
      { word: 'das Panzertier', article: 'das', wordClass: 'Nomen', translation: 'hewan bertempurung perisai' },
      { word: 'die Landschildkröte', article: 'die', wordClass: 'Nomen', translation: 'kura-kura darat' },
      { word: 'die Meeresschildkröte', article: 'die', wordClass: 'Nomen', translation: 'penyu laut' },
    ],
    antonyms: [
      { word: 'der Hase', article: 'der', wordClass: 'Nomen', translation: 'kelinci pelari cepat' },
      { word: 'der Gepard', article: 'der', wordClass: 'Nomen', translation: 'cheetah pelari kencang' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Die Schildkröte bewegt sich sehr langsam vorwärts.',
        indonesian: 'Kura-kura itu bergerak maju dengan sangat lambat.',
        contextNote: 'Ciri gerak fauna',
      },
      {
        level: 'A2',
        german: 'Einige Schildkröten können über hundert Jahre alt werden.',
        indonesian: 'Beberapa jenis kura-kura dapat hidup hingga berusia lebih dari seratus tahun.',
        contextNote: 'Usia hewan',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'der Schild',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'perisai / tameng pelindung',
          role: 'Bestimmungswort',
        },
        {
          part: 'die Kröte',
          article: 'die',
          wordClass: 'Nomen',
          meaning: 'kodok / reptil merayap',
          role: 'Grundwort penentu artikel',
        },
      ],
      explanation:
        'Kata unik khas bahasa Jerman yang menggabungkan "der Schild" (perisai/tameng) dan "die Kröte" (kodok/reptil). Secara harfiah orang Jerman melihat kura-kura sebagai "kodok berpelindung perisai".',
      headWordRule:
        'Aturan Gender: Mengikuti artikel feminin "die Kröte" -> "die Schildkröte".',
    },
  },

  fernseher: {
    word: 'der Fernseher',
    displayWord: 'der Fernseher',
    ipa: '/ˈfɛʁnˌzeːɐ/',
    translations: ['televisi (perangkat pesawat TV)'],
    meaningSummary: 'Pesawat penerima siaran gambar bergerak dan suara dari jarak jauh.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Fernseher',
        plural: 'die Fernseher',
        genitivSingular: 'des Fernsehers',
      },
    },
    synonyms: [
      { word: 'das Fernsehgerät', article: 'das', wordClass: 'Nomen', translation: 'perangkat pesawat televisi' },
      { word: 'der TV', article: 'der', wordClass: 'Nomen', translation: 'pesawat TV' },
      { word: 'die Flimmerkiste', article: 'die', wordClass: 'Nomen', translation: 'kotak layar kaca (bahasa santai)' },
    ],
    antonyms: [
      { word: 'das Radio', article: 'das', wordClass: 'Nomen', translation: 'pesawat radio audio saja' },
      { word: 'das Buch', article: 'das', wordClass: 'Nomen', translation: 'buku bacaan cetak' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Wir schalten abends den Fernseher ein, um einen Film zu sehen.',
        indonesian: 'Kami menyalakan televisi di malam hari untuk menonton film.',
        contextNote: 'Hiburan santai keluarga',
      },
      {
        level: 'A2',
        german: 'Der neue Fernseher hat einen riesigen Bildschirm.',
        indonesian: 'Televisi baru itu memiliki layar yang sangat besar.',
        contextNote: 'Perabot elektronik modern',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'fern',
          wordClass: 'Adjektiv / Adverb',
          meaning: 'jauh (tele-)',
          role: 'Bestimmungswort',
        },
        {
          part: 'sehen / der Seher',
          wordClass: 'Verb / Nomen',
          meaning: 'melihat / penampil gambar visual',
          role: 'Grundwort penentu artikel',
        },
      ],
      explanation:
        'Kombinasi kata "fern" (jauh) dan "Seher" (dari kata dasar sehen = melihat). Padanan murni bahasa Jerman untuk kata pinjaman Yunani-Latin "tele-vision" (melihat dari jauh).',
      headWordRule:
        'Aturan Gender: Berakhiran agentif "-er" sehingga bergender maskulin "der Fernseher". Jangan tertukar dengan proses aktivitasnya: "das Fernsehen" (kegiatan menonton TV).',
    },
  },

  regenschirm: {
    word: 'der Regenschirm',
    displayWord: 'der Regenschirm',
    ipa: '/ˈʁeːɡn̩ˌʃɪʁm/',
    translations: ['payung (pelindung hujan)'],
    meaningSummary: 'Alat pelindung lipat dari kain kedap air yang ditopang rangka untuk melindungi tubuh dari guyuran hujan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Regenschirm',
        plural: 'die Regenschirme',
        genitivSingular: 'des Regenschirms',
      },
    },
    synonyms: [
      { word: 'der Schirm', article: 'der', wordClass: 'Nomen', translation: 'payung singkat' },
      { word: 'der Knirps', article: 'der', wordClass: 'Nomen', translation: 'payung lipat saku portabel' },
    ],
    antonyms: [
      { word: 'der Sonnenschirm', article: 'der', wordClass: 'Nomen', translation: 'payung peneduh terik matahari' },
      { word: 'der Regenmantel', article: 'der', wordClass: 'Nomen', translation: 'jas mantel hujan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Nimm einen Regenschirm mit, es fängt gleich an zu regnen!',
        indonesian: 'Bawalah payung, sebentar lagi akan mulai turun hujan!',
        contextNote: 'Kesiapsiagaan cuaca hujan',
      },
      {
        level: 'A2',
        german: 'Ich habe meinen Regenschirm in der U-Bahn vergessen.',
        indonesian: 'Saya ketinggalan payung saya di dalam kereta bawah tanah.',
        contextNote: 'Barang tertinggal',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'der Regen',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'hujan',
          role: 'Bestimmungswort',
        },
        {
          part: 'der Schirm',
          article: 'der',
          wordClass: 'Nomen',
          meaning: 'pelindung / naungan perisai',
          role: 'Grundwort penentu artikel',
        },
      ],
      explanation:
        'Terbentuk dari "der Regen" (hujan) dan "der Schirm" (pelindung naungan). Secara harfiah bermakna naungan pelindung dari hujan.',
      headWordRule:
        'Aturan Gender: Mengikuti kata dasar terakhir "der Schirm" (maskulin) -> "der Regenschirm".',
    },
  },

  sonnenbrille: {
    word: 'die Sonnenbrille',
    displayWord: 'die Sonnenbrille',
    ipa: '/ˈzɔnənˌbʁɪlə/',
    translations: ['kacamata hitam', 'kacamata peneduh surya'],
    meaningSummary: 'Kacamata berlensa gelap untuk melindungi kornea mata dari radiasi sinar ultraviolet dan silau terik matahari.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Sonnenbrille',
        plural: 'die Sonnenbrillen',
        genitivSingular: 'der Sonnenbrille',
      },
    },
    synonyms: [
      { word: 'die Brille', article: 'die', wordClass: 'Nomen', translation: 'kacamata' },
      { word: 'der Blendschutz', article: 'der', wordClass: 'Nomen', translation: 'pelindung anti-silau' },
    ],
    antonyms: [
      { word: 'die Lesebrille', article: 'die', wordClass: 'Nomen', translation: 'kacamata baca plus' },
      { word: 'die Sehhilfe', article: 'die', wordClass: 'Nomen', translation: 'kacamata koreksi minus' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Bei starkem Sonnenschein setze ich meine Sonnenbrille auf.',
        indonesian: 'Saat sinar matahari terik menyengat, saya mengenakan kacamata hitam saya.',
        contextNote: 'Kolokasi: eine Brille aufsetzen (memakai kacamata)',
      },
      {
        level: 'A2',
        german: 'Vergiss deine Sonnenbrille nicht, wenn wir an den Strand gehen!',
        indonesian: 'Jangan lupa kacamata hitammu saat kita pergi ke pantai!',
        contextNote: 'Liburan pantai musim panas',
      },
    ],
    compoundBreakdown: {
      isCompound: true,
      components: [
        {
          part: 'die Sonne',
          article: 'die',
          wordClass: 'Nomen',
          meaning: 'matahari (dengan sisipan jamak -n-)',
          role: 'Bestimmungswort',
        },
        {
          part: 'die Brille',
          article: 'die',
          wordClass: 'Nomen',
          meaning: 'kacamata',
          role: 'Grundwort penentu artikel',
        },
      ],
      explanation:
        'Terbentuk dari "die Sonne" (matahari) dan "die Brille" (kacamata) dengan huruf penghubung fugenelement "-n-". Bermakna kacamata pelindung matahari.',
      headWordRule:
        'Aturan Gender: Mengikuti artikel kata "die Brille" (feminin) -> "die Sonnenbrille".',
    },
  },
};
