import { WordResult } from '../types';

/**
 * Curated High-Frequency German Vocabulary - Level A1
 * Goethe-Institut & telc A1 Curriculum
 */
export const A1_WORDS: Record<string, WordResult> = {
  buch: {
    word: 'das Buch',
    displayWord: 'das Buch',
    ipa: '/buːx/',
    translations: ['buku', 'kitab'],
    meaningSummary: 'Kumpulan lembaran kertas bertuliskan atau bergambar yang dijilid menjadi satu.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Buch',
        plural: 'die Bücher',
        genitivSingular: 'des Buches / des Buchs',
      },
    },
    synonyms: [
      { word: 'das Werk', article: 'das', wordClass: 'Nomen', translation: 'karya tulis' },
      { word: 'der Band', article: 'der', wordClass: 'Nomen', translation: 'jilid buku' },
      { word: 'die Schrift', article: 'die', wordClass: 'Nomen', translation: 'tulisan / naskah' },
    ],
    antonyms: [
      { word: 'das E-Book', article: 'das', wordClass: 'Nomen', translation: 'buku elektronik' },
      { word: 'der Film', article: 'der', wordClass: 'Nomen', translation: 'film / media visual' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich lese gerne ein interessantes Buch.',
        indonesian: 'Saya suka membaca buku yang menarik.',
        contextNote: 'Objek Akkusativ netral (ein Buch)',
      },
      {
        level: 'A1',
        german: 'Das Buch liegt auf dem Schreibtisch.',
        indonesian: 'Buku itu terletak di atas meja tulis.',
        contextNote: 'Posisi tempat (auf + Dativ)',
      },
    ],
    learningTips: 'Perhatikan jamaknya: "das Buch" -> "die Bücher" (mengalami perubahan vokal u -> ü dan berakhiran -er).',
  },

  kind: {
    word: 'das Kind',
    displayWord: 'das Kind',
    ipa: '/kɪnt/',
    translations: ['anak', 'bocah'],
    meaningSummary: 'Seseorang yang masih dalam masa pertumbuhan sebelum mencapai usia remaja atau dewasa.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Kind',
        plural: 'die Kinder',
        genitivSingular: 'des Kindes',
      },
    },
    synonyms: [
      { word: 'der Nachwuchs', article: 'der', wordClass: 'Nomen', translation: 'keturunan muda' },
      { word: 'der Sprössling', article: 'der', wordClass: 'Nomen', translation: 'anak keturunan' },
    ],
    antonyms: [
      { word: 'der Erwachsene', article: 'der', wordClass: 'Nomen', translation: 'orang dewasa' },
      { word: 'die Eltern', article: 'die', wordClass: 'Nomen', translation: 'orang tua' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Kind spielt fröhlich im Garten.',
        indonesian: 'Anak itu bermain dengan gembira di kebun.',
        contextNote: 'Subjek tunggal netral',
      },
      {
        level: 'A1',
        german: 'Wir haben zwei Kinder.',
        indonesian: 'Kami memiliki dua anak.',
        contextNote: 'Bentuk jamak: Kinder',
      },
    ],
    learningTips: 'Dalam Dativ jamak kata benda ini mendapat akhiran -n: "den Kindern" (kepada anak-anak).',
  },

  stuhl: {
    word: 'der Stuhl',
    displayWord: 'der Stuhl',
    ipa: '/ʃtuːl/',
    translations: ['kursi'],
    meaningSummary: 'Tempat duduk berkaki dengan sandaran untuk satu orang.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Stuhl',
        plural: 'die Stühle',
        genitivSingular: 'des Stuhles / des Stuhls',
      },
    },
    synonyms: [
      { word: 'der Sessel', article: 'der', wordClass: 'Nomen', translation: 'kursi berlengan empuk' },
      { word: 'die Sitzgelegenheit', article: 'die', wordClass: 'Nomen', translation: 'tempat duduk' },
    ],
    antonyms: [
      { word: 'der Tisch', article: 'der', wordClass: 'Nomen', translation: 'meja' },
      { word: 'die Bank', article: 'die', wordClass: 'Nomen', translation: 'bangku panjang' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Bitte setzen Sie sich auf diesen Stuhl.',
        indonesian: 'Silakan Anda duduk di kursi ini.',
        contextNote: 'Gerakan menuju tempat: auf + Akkusativ (diesen Stuhl)',
      },
      {
        level: 'A1',
        german: 'Der Stuhl ist sehr bequem.',
        indonesian: 'Kursi itu sangat nyaman.',
        contextNote: 'Predikat adjektiva',
      },
    ],
    learningTips: 'Kata benda maskulin: "der Stuhl". Jamak memakai umlaut: "die Stühle".',
  },

  wohnung: {
    word: 'die Wohnung',
    displayWord: 'die Wohnung',
    ipa: '/ˈvoːnʊŋ/',
    translations: ['apartemen', 'tempat tinggal', 'hunian'],
    meaningSummary: 'Sekelompok ruangan dalam satu gedung yang dijadikan tempat tinggal mandiri.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Wohnung',
        plural: 'die Wohnungen',
        genitivSingular: 'der Wohnung',
      },
    },
    synonyms: [
      { word: 'das Heim', article: 'das', wordClass: 'Nomen', translation: 'rumah kediaman' },
      { word: 'die Unterkunft', article: 'die', wordClass: 'Nomen', translation: 'akomodasi hunian' },
      { word: 'das Appartement', article: 'das', wordClass: 'Nomen', translation: 'apartemen modern' },
    ],
    antonyms: [
      { word: 'die Straße', article: 'die', wordClass: 'Nomen', translation: 'jalanan / tunawisma' },
      { word: 'der Arbeitsplatz', article: 'der', wordClass: 'Nomen', translation: 'tempat kerja' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Meine Wohnung hat drei Zimmer und einen Balkon.',
        indonesian: 'Apartemen saya memiliki tiga kamar dan satu balkon.',
        contextNote: 'Mendeskripsikan tempat tinggal',
      },
      {
        level: 'A1',
        german: 'Sie sucht eine neue Wohnung in Berlin.',
        indonesian: 'Dia sedang mencari apartemen baru di Berlin.',
        contextNote: 'Objek Akkusativ feminin (eine Wohnung)',
      },
    ],
    learningTips: 'Semua kata benda berakhiran "-ung" SELALU berartikel feminin ("die") dan jamak berakhiran "-en" ("die Wohnungen").',
  },

  zimmer: {
    word: 'das Zimmer',
    displayWord: 'das Zimmer',
    ipa: '/ˈt͡sɪmɐ/',
    translations: ['kamar', 'ruangan'],
    meaningSummary: 'Ruangan tertutup berdinding di dalam rumah atau bangunan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Zimmer',
        plural: 'die Zimmer',
        genitivSingular: 'des Zimmers',
      },
    },
    synonyms: [
      { word: 'der Raum', article: 'der', wordClass: 'Nomen', translation: 'ruangan' },
      { word: 'die Kammer', article: 'die', wordClass: 'Nomen', translation: 'bilik kecil' },
    ],
    antonyms: [
      { word: 'der Flur', article: 'der', wordClass: 'Nomen', translation: 'lorong koridor' },
      { word: 'das Freie', article: 'das', wordClass: 'Nomen', translation: 'alam terbuka' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Hotelzimmer ist sauber und ruhig.',
        indonesian: 'Kamar hotel itu bersih dan tenang.',
        contextNote: 'Kata majemuk: Hotel + Zimmer',
      },
      {
        level: 'A1',
        german: 'Ich bleibe heute in meinem Zimmer.',
        indonesian: 'Saya tinggal di kamar saya hari ini.',
        contextNote: 'Posisi diam: in + Dativ (meinem Zimmer)',
      },
    ],
    learningTips: 'Bentuk jamak sama dengan bentuk tunggalnya: "das Zimmer" -> "die Zimmer".',
  },

  schule: {
    word: 'die Schule',
    displayWord: 'die Schule',
    ipa: '/ˈʃuːlə/',
    translations: ['sekolah'],
    meaningSummary: 'Lembaga pendidikan formal tempat siswa memperoleh pengajaran.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Schule',
        plural: 'die Schulen',
        genitivSingular: 'der Schule',
      },
    },
    synonyms: [
      { word: 'die Bildungsstätte', article: 'die', wordClass: 'Nomen', translation: 'lembaga pendidikan' },
      { word: 'das Lehrinstitut', article: 'das', wordClass: 'Nomen', translation: 'institut pengajaran' },
    ],
    antonyms: [
      { word: 'die Ferien', article: 'die', wordClass: 'Nomen', translation: 'liburan sekolah' },
      { word: 'die Freizeit', article: 'die', wordClass: 'Nomen', translation: 'waktu senggang' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Die Kinder gehen um acht Uhr zur Schule.',
        indonesian: 'Anak-anak pergi ke sekolah pada jam delapan.',
        contextNote: 'Frasa arah: "zur Schule" (zu der Schule)',
      },
      {
        level: 'A1',
        german: 'Meine Schule ist sehr modern.',
        indonesian: 'Sekolah saya sangat modern.',
        contextNote: 'Subjek tunggal feminin',
      },
    ],
    learningTips: 'Frasa penting A1: "in die Schule gehen" / "zur Schule gehen" (berangkat ke sekolah) vs "in der Schule sein" (berada di sekolah).',
  },

  lehrer: {
    word: 'der Lehrer',
    displayWord: 'der Lehrer',
    ipa: '/ˈleːʁɐ/',
    translations: ['guru (laki-laki)', 'pengajar'],
    meaningSummary: 'Pendidik profesional yang mengajar di lembaga pendidikan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Lehrer',
        plural: 'die Lehrer',
        genitivSingular: 'des Lehrers',
      },
    },
    synonyms: [
      { word: 'der Pädagoge', article: 'der', wordClass: 'Nomen', translation: 'ahli pedagogi / pendidik' },
      { word: 'der Dozent', article: 'der', wordClass: 'Nomen', translation: 'dosen pengajar' },
    ],
    antonyms: [
      { word: 'der Schüler', article: 'der', wordClass: 'Nomen', translation: 'murid / siswa' },
      { word: 'der Lernende', article: 'der', wordClass: 'Nomen', translation: 'peserta didik' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Herr Weber ist unser Deutschlehrer.',
        indonesian: 'Pak Weber adalah guru bahasa Jerman kami.',
        contextNote: 'Sebutan profesi',
      },
      {
        level: 'A1',
        german: 'Der Lehrer erklärt die Grammatik geduldig.',
        indonesian: 'Guru itu menjelaskan tata bahasa dengan sabar.',
        contextNote: 'Aktivitas pengajaran',
      },
    ],
    learningTips: 'Bentuk femininnya menambahkan akhiran -in: "die Lehrerin" (guru perempuan), jamak: "die Lehrerinnen".',
  },

  arzt: {
    word: 'der Arzt',
    displayWord: 'der Arzt',
    ipa: '/aːɐ̯t͡st/',
    translations: ['dokter (laki-laki)', 'tabib'],
    meaningSummary: 'Tenaga medis profesional yang mendiagnosis dan mengobati penyakit pasien.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Arzt',
        plural: 'die Ärzte',
        genitivSingular: 'des Arztes',
      },
    },
    synonyms: [
      { word: 'der Mediziner', article: 'der', wordClass: 'Nomen', translation: 'ahli medis' },
      { word: 'der Doktor', article: 'der', wordClass: 'Nomen', translation: 'dokter (sapaan akrab)' },
    ],
    antonyms: [
      { word: 'der Patient', article: 'der', wordClass: 'Nomen', translation: 'pasien / orang yang berobat' },
      { word: 'der Kranke', article: 'der', wordClass: 'Nomen', translation: 'orang sakit' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich muss heute zum Arzt gehen.',
        indonesian: 'Saya harus pergi ke dokter hari ini.',
        contextNote: 'Frasa arah: "zum Arzt" (zu dem Arzt)',
      },
      {
        level: 'A1',
        german: 'Der Arzt untersucht den Patienten gründlich.',
        indonesian: 'Dokter itu memeriksa pasien dengan saksama.',
        contextNote: 'Tindakan medis',
      },
    ],
    learningTips: 'Bentuk jamak berubah vokal menjadi Umlaut: "die Ärzte". Bentuk dokter wanita: "die Ärztin", jamak: "die Ärztinnen".',
  },

  wasser: {
    word: 'das Wasser',
    displayWord: 'das Wasser',
    ipa: '/ˈvasɐ/',
    translations: ['air'],
    meaningSummary: 'Cairan bening tak berbau dan tak berasa yang mutlak dibutuhkan untuk kehidupan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Wasser',
        plural: 'die Wässer (jarang)',
        genitivSingular: 'des Wassers',
      },
    },
    synonyms: [
      { word: 'das Trinkwasser', article: 'das', wordClass: 'Nomen', translation: 'air minum' },
      { word: 'die Flüssigkeit', article: 'die', wordClass: 'Nomen', translation: 'cairan' },
    ],
    antonyms: [
      { word: 'das Feuer', article: 'das', wordClass: 'Nomen', translation: 'api' },
      { word: 'die Trockenheit', article: 'die', wordClass: 'Nomen', translation: 'kekeringan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich trinke jeden Tag zwei Liter Wasser.',
        indonesian: 'Saya minum dua liter air setiap hari.',
        contextNote: 'Kebutuhan konsumsi cairan',
      },
      {
        level: 'A1',
        german: 'Bringen Sie mir bitte ein Glas Wasser!',
        indonesian: 'Tolong bawakan saya segelas air!',
        contextNote: 'Permohonan sopan di restoran',
      },
    ],
    learningTips: 'Di Jerman, jika memesan air putih di restoran, tentukan apakah "mit Kohlensäure" (dengan soda/gas) atau "ohne Kohlensäure / stilles Wasser" (tanpa gas).',
  },

  brot: {
    word: 'das Brot',
    displayWord: 'das Brot',
    ipa: '/bʁoːt/',
    translations: ['roti'],
    meaningSummary: 'Makanan pokok olahan tepung yang dipanggang, bagian tak terpisahkan dari budaya makan Jerman.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Brot',
        plural: 'die Brote',
        genitivSingular: 'des Brotes / des Brots',
      },
    },
    synonyms: [
      { word: 'das Gebäck', article: 'das', wordClass: 'Nomen', translation: 'kue/roti panggang' },
      { word: 'das Laib', article: 'das', wordClass: 'Nomen', translation: 'buku roti' },
    ],
    antonyms: [
      { word: 'der Hunger', article: 'der', wordClass: 'Nomen', translation: 'kelaparan' },
      { word: 'das Fasten', article: 'das', wordClass: 'Nomen', translation: 'puasa tanpa makan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Zum Frühstück esse ich Brot mit Butter und Käse.',
        indonesian: 'Untuk sarapan saya makan roti dengan mentega dan keju.',
        contextNote: 'Menu sarapan khas Jerman',
      },
      {
        level: 'A1',
        german: 'Das deutsche Brot schmeckt hervorragend.',
        indonesian: 'Roti Jerman rasanya sangat lezat.',
        contextNote: 'Kualitas rasa',
      },
    ],
    learningTips: 'Budaya makan malam tradisional orang Jerman sering disebut "Abendbrot" (secara harfiah: roti malam), karena santapan malam biasanya berupa roti dingin dengan keju/daging iris.',
  },

  apfel: {
    word: 'der Apfel',
    displayWord: 'der Apfel',
    ipa: '/ˈapfl̩/',
    translations: ['apel'],
    meaningSummary: 'Buah berkulit merah, kuning, atau hijau dengan daging buah manis dan renyah.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Apfel',
        plural: 'die Äpfel',
        genitivSingular: 'des Apfels',
      },
    },
    synonyms: [
      { word: 'das Obst', article: 'das', wordClass: 'Nomen', translation: 'buah-buahan' },
      { word: 'die Frucht', article: 'die', wordClass: 'Nomen', translation: 'buah' },
    ],
    antonyms: [
      { word: 'das Gemüse', article: 'das', wordClass: 'Nomen', translation: 'sayur-mayur' },
      { word: 'das Fleisch', article: 'das', wordClass: 'Nomen', translation: 'daging' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich esse jeden Morgen einen frischen Apfel.',
        indonesian: 'Saya makan sebuah apel segar setiap pagi.',
        contextNote: 'Objek maskulin Akkusativ (einen Apfel)',
      },
      {
        level: 'A1',
        german: 'Die Äpfel liegen im Korb.',
        indonesian: 'Apel-apel itu tergeletak di dalam keranjang.',
        contextNote: 'Jamak dengan Umlaut: Äpfel',
      },
    ],
    learningTips: 'Jamaknya mendapat tanda Umlaut tanpa akhiran: "der Apfel" -> "die Äpfel".',
  },

  kaffee: {
    word: 'der Kaffee',
    displayWord: 'der Kaffee',
    ipa: '/ˈkafe, kaˈfeː/',
    translations: ['kopi'],
    meaningSummary: 'Minuman hangat berkafein yang diseduh dari biji kopi sangrai.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Kaffee',
        plural: 'die Kaffees',
        genitivSingular: 'des Kaffees',
      },
    },
    synonyms: [
      { word: 'das Heißgetränk', article: 'das', wordClass: 'Nomen', translation: 'minuman panas' },
      { word: 'der Espresso', article: 'der', wordClass: 'Nomen', translation: 'kopi pekat espresso' },
    ],
    antonyms: [
      { word: 'der Tee', article: 'der', wordClass: 'Nomen', translation: 'teh' },
      { word: 'das Wasser', article: 'das', wordClass: 'Nomen', translation: 'air putih' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Trinkst du deinen Kaffee mit Milch oder Zucker?',
        indonesian: 'Apakah kamu minum kopimu dengan susu atau gula?',
        contextNote: 'Akkusativ maskulin: deinen Kaffee',
      },
      {
        level: 'A1',
        german: 'Ich möchte bitte einen Kaffee.',
        indonesian: 'Saya ingin memesan secangkir kopi, tolong.',
        contextNote: 'Pemesanan di kafe',
      },
    ],
    learningTips: 'Jangan tertukar antara "der Kaffee" (minuman kopi) dan "das Café" (kedai/kafe tempat minum kopi)!',
  },

  tee: {
    word: 'der Tee',
    displayWord: 'der Tee',
    ipa: '/teː/',
    translations: ['teh'],
    meaningSummary: 'Minuman seduhan daun teh atau rempah-rempah herbal dalam air panas.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Tee',
        plural: 'die Tees',
        genitivSingular: 'des Tees',
      },
    },
    synonyms: [
      { word: 'der Kräutertee', article: 'der', wordClass: 'Nomen', translation: 'teh herbal' },
      { word: 'der Aufguss', article: 'der', wordClass: 'Nomen', translation: 'seduhan air herbal' },
    ],
    antonyms: [
      { word: 'der Kaffee', article: 'der', wordClass: 'Nomen', translation: 'kopi' },
      { word: 'das Kaltgetränk', article: 'das', wordClass: 'Nomen', translation: 'minuman dingin / es' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Wenn ich krank bin, trinke ich heißen Tee mit Honig.',
        indonesian: 'Saat sakit, saya minum teh panas dengan madu.',
        contextNote: 'Kesehatan dan pemulihan',
      },
      {
        level: 'A1',
        german: 'Möchten Sie lieber Tee oder Kaffee?',
        indonesian: 'Apakah Anda lebih suka teh atau kopi?',
        contextNote: 'Menawarkan pilihan minuman',
      },
    ],
    learningTips: 'Artikel kata benda ini maskulin: "der Tee".',
  },

  auto: {
    word: 'das Auto',
    displayWord: 'das Auto',
    ipa: '/ˈaʊ̯to/',
    translations: ['mobil'],
    meaningSummary: 'Kendaraan bermotor roda empat untuk transportasi darat pribadi.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Auto',
        plural: 'die Autos',
        genitivSingular: 'des Autos',
      },
    },
    synonyms: [
      { word: 'der Wagen', article: 'der', wordClass: 'Nomen', translation: 'mobil / kereta kendaraan' },
      { word: 'das Kraftfahrzeug', article: 'das', wordClass: 'Nomen', translation: 'kendaraan bermotor formal' },
      { word: 'der Pkw', article: 'der', wordClass: 'Nomen', translation: 'mobil penumpang perorangan' },
    ],
    antonyms: [
      { word: 'das Fahrrad', article: 'das', wordClass: 'Nomen', translation: 'sepeda' },
      { word: 'der Fußgänger', article: 'der', wordClass: 'Nomen', translation: 'pejalan kaki' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Er fährt jeden Tag mit dem Auto zur Arbeit.',
        indonesian: 'Dia pergi bekerja naik mobil setiap hari.',
        contextNote: 'Preposisi sarana transportasi: mit + Dativ (dem Auto)',
      },
      {
        level: 'A1',
        german: 'Das neue Auto ist sehr sparsam.',
        indonesian: 'Mobil baru itu sangat hemat bahan bakar.',
        contextNote: 'Deskripsi kendaraan',
      },
    ],
    learningTips: 'Jamak kata pinjaman ini berakhiran -s: "die Autos". Kata sinonim aslinya adalah "der Wagen".',
  },

  stadt: {
    word: 'die Stadt',
    displayWord: 'die Stadt',
    ipa: '/ʃtat/',
    translations: ['kota'],
    meaningSummary: 'Pusat permukiman padat penduduk dengan kegiatan industri, perdagangan, dan administrasi.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Stadt',
        plural: 'die Städte',
        genitivSingular: 'der Stadt',
      },
    },
    synonyms: [
      { word: 'die Großstadt', article: 'die', wordClass: 'Nomen', translation: 'kota metropolitan besar' },
      { word: 'die Metropole', article: 'die', wordClass: 'Nomen', translation: 'metropolis' },
      { word: 'die Siedlung', article: 'die', wordClass: 'Nomen', translation: 'kawasan permukiman' },
    ],
    antonyms: [
      { word: 'das Dorf', article: 'das', wordClass: 'Nomen', translation: 'desa / kampung' },
      { word: 'das Land', article: 'das', wordClass: 'Nomen', translation: 'pedesaan / daerah pinggiran' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Berlin ist die Hauptstadt von Deutschland.',
        indonesian: 'Berlin adalah ibu kota Jerman.',
        contextNote: 'Ibukota negara',
      },
      {
        level: 'A1',
        german: 'Wir machen am Wochenende einen Ausflug in die Stadt.',
        indonesian: 'Kami pergi berwisata ke kota pada akhir pekan.',
        contextNote: 'Arah tujuan: in + Akkusativ (die Stadt)',
      },
    ],
    learningTips: 'Bentuk jamak berubah vokal menjadi Umlaut dan ditambah -e: "die Städte".',
  },

  land: {
    word: 'das Land',
    displayWord: 'das Land',
    ipa: '/lant/',
    translations: ['negara', 'negeri', 'daerah pedesaan'],
    meaningSummary: 'Wilayah geografis berdaulat atau kawasan alam pedesaan di luar hiruk-pikuk kota.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'das',
        gender: 'neutral',
        singular: 'das Land',
        plural: 'die Länder',
        genitivSingular: 'des Landes',
      },
    },
    synonyms: [
      { word: 'der Staat', article: 'der', wordClass: 'Nomen', translation: 'negara berdaulat' },
      { word: 'die Nation', article: 'die', wordClass: 'Nomen', translation: 'bangsa' },
    ],
    antonyms: [
      { word: 'die Stadt', article: 'die', wordClass: 'Nomen', translation: 'kawasan perkotaan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Deutschland ist ein schönes Land in Europa.',
        indonesian: 'Jerman adalah negara yang indah di Eropa.',
        contextNote: 'Arti: negara',
      },
      {
        level: 'A1',
        german: 'Am Wochenende fahre ich aufs Land.',
        indonesian: 'Pada akhir pekan saya pergi ke pedesaan.',
        contextNote: 'Frasa tetap: "aufs Land fahren" (pergi ke pedesaan)',
      },
    ],
    learningTips: 'Perhatikan makna ganda: "das Land" bisa berarti "negara" (Länder = negara-negara) atau "pedesaan" (leben auf dem Land = tinggal di pedesaan).',
  },

  zeit: {
    word: 'die Zeit',
    displayWord: 'die Zeit',
    ipa: '/t͡saɪ̯t/',
    translations: ['waktu', 'masa', 'saat'],
    meaningSummary: 'Dimensi kelangsungan peristiwa yang berkesinambungan dari masa lalu, kini, hingga masa depan.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Zeit',
        plural: 'die Zeiten',
        genitivSingular: 'der Zeit',
      },
    },
    synonyms: [
      { word: 'der Zeitraum', article: 'der', wordClass: 'Nomen', translation: 'rentang kurun waktu' },
      { word: 'die Epoche', article: 'die', wordClass: 'Nomen', translation: 'zaman / era' },
    ],
    antonyms: [
      { word: 'die Ewigkeit', article: 'die', wordClass: 'Nomen', translation: 'keabadian tanpa akhir' },
      { word: 'die Zeitlosigkeit', article: 'die', wordClass: 'Nomen', translation: 'ketiadaan dimensi waktu' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Hast du heute Abend Zeit für mich?',
        indonesian: 'Apakah kamu punya waktu untuk saya malam ini?',
        contextNote: 'Menanyakan ketersediaan waktu luang',
      },
      {
        level: 'A1',
        german: 'Die Zeit vergeht wie im Flug.',
        indonesian: 'Waktu berlalu begitu cepat bagaikan terbang.',
        contextNote: 'Pepatah sehari-hari',
      },
    ],
    learningTips: 'Ungkapan umum A1: "keine Zeit haben" (tidak punya waktu), "pünktlich zur Zeit" (tepat pada waktunya).',
  },

  familie: {
    word: 'die Familie',
    displayWord: 'die Familie',
    ipa: '/faˈmiːli̯ə/',
    translations: ['keluarga'],
    meaningSummary: 'Kelompok sosial terkecil yang terdiri dari orang tua dan anak-anak atau sanak kerabat.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Familie',
        plural: 'die Familien',
        genitivSingular: 'der Familie',
      },
    },
    synonyms: [
      { word: 'die Verwandtschaft', article: 'die', wordClass: 'Nomen', translation: 'sanak kerabat' },
      { word: 'der Haushalt', article: 'der', wordClass: 'Nomen', translation: 'rumah tangga' },
    ],
    antonyms: [
      { word: 'der Single', article: 'der', wordClass: 'Nomen', translation: 'lajang tanpa keluarga' },
      { word: 'der Alleinstehende', article: 'der', wordClass: 'Nomen', translation: 'orang yang hidup sendiri' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Meine Familie wohnt in Jakarta.',
        indonesian: 'Keluarga saya tinggal di Jakarta.',
        contextNote: 'Subjek tunggal feminin',
      },
      {
        level: 'A1',
        german: 'Wir feiern Weihnachten mit der ganzen Familie.',
        indonesian: 'Kami merayakan Natal bersama seluruh keluarga.',
        contextNote: 'mit + Dativ feminin (der Familie)',
      },
    ],
    learningTips: 'Meskipun merujuk banyak orang, kata benda "die Familie" adalah tunggal gramatikal sehingga kata kerjanya konjugasi orang ke-3 tunggal (er/sie/es wohnt).',
  },

  name: {
    word: 'der Name',
    displayWord: 'der Name',
    ipa: '/ˈnaːmə/',
    translations: ['nama'],
    meaningSummary: 'Kata sebutan khusus yang diberikan kepada seseorang, tempat, atau benda untuk membedakannya.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'der',
        gender: 'maskulin',
        singular: 'der Name',
        plural: 'die Namen',
        genitivSingular: 'des Namens',
      },
    },
    synonyms: [
      { word: 'die Bezeichnung', article: 'die', wordClass: 'Nomen', translation: 'sebutan nama resmi' },
      { word: 'der Vorname', article: 'der', wordClass: 'Nomen', translation: 'nama depan' },
      { word: 'der Nachname', article: 'der', wordClass: 'Nomen', translation: 'nama belakang / marga' },
    ],
    antonyms: [
      { word: 'die Anonymität', article: 'die', wordClass: 'Nomen', translation: 'keadaan tanpa nama' },
      { word: 'das Pseudonym', article: 'das', wordClass: 'Nomen', translation: 'nama samaran / alias' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Mein Name ist Anna Schneider.',
        indonesian: 'Nama saya adalah Anna Schneider.',
        contextNote: 'Perkenalan diri A1',
      },
      {
        level: 'A1',
        german: 'Wie ist Ihr Name, bitte?',
        indonesian: 'Siapa nama Anda, tolong?',
        contextNote: 'Pertanyaan sopan formal',
      },
    ],
    learningTips: 'Kata benda maskulin lemah semu (N-Deklination): dalam Akkusativ dan Dativ mendapat tambahan "-n" (den Namen, dem Namen), dan Genitiv "-ns" (des Namens).',
  },

  sprache: {
    word: 'die Sprache',
    displayWord: 'die Sprache',
    ipa: '/ˈʃpʁaːxə/',
    translations: ['bahasa', 'tutur kata'],
    meaningSummary: 'Sistem lambang bunyi arbitrer yang digunakan anggota masyarakat untuk berkomunikasi dan berinteraksi.',
    wordClass: 'Nomen',
    cefrLevel: 'A1',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Sprache',
        plural: 'die Sprachen',
        genitivSingular: 'der Sprache',
      },
    },
    synonyms: [
      { word: 'die Mundart', article: 'die', wordClass: 'Nomen', translation: 'dialek daerah' },
      { word: 'die Zunge', article: 'die', wordClass: 'Nomen', translation: 'lidah / bahasa sastrawi' },
      { word: 'der Dialekt', article: 'der', wordClass: 'Nomen', translation: 'dialek' },
    ],
    antonyms: [
      { word: 'die Sprachlosigkeit', article: 'die', wordClass: 'Nomen', translation: 'kebisuan / ketiadaan kata' },
      { word: 'das Schweigen', article: 'das', wordClass: 'Nomen', translation: 'keheningan / sikap diam' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Deutsch ist eine schöne, aber logische Sprache.',
        indonesian: 'Bahasa Jerman adalah bahasa yang indah tetapi logis.',
        contextNote: 'Deskripsi bahasa',
      },
      {
        level: 'A1',
        german: 'Welche Sprachen sprichst du?',
        indonesian: 'Bahasa apa saja yang kamu kuasai?',
        contextNote: 'Pertanyaan percakapan A1',
      },
    ],
    learningTips: 'Berasal dari kata kerja "sprechen" (berbicara). Kata benda majemuk penting: "die Muttersprache" (bahasa ibu), "die Fremdsprache" (bahasa asing).',
  },

  trinken: {
    word: 'trinken',
    displayWord: 'trinken',
    ipa: '/ˈtʁɪŋkn̩/',
    translations: ['minum', 'meneguk'],
    meaningSummary: 'Memasukkan cairan ke dalam tubuh melalui mulut untuk memuaskan rasa haus.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'trinken',
        praesens: 'trinkt',
        praeteritum: 'trank',
        partizip2: 'getrunken',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'zu sich nehmen', wordClass: 'Verb', translation: 'mengonsumsi cairan' },
      { word: 'schlürfen', wordClass: 'Verb', translation: 'menyeruput' },
    ],
    antonyms: [
      { word: 'dursten', wordClass: 'Verb', translation: 'kehausan tanpa minum' },
      { word: 'verdursten', wordClass: 'Verb', translation: 'mati kehausan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Was möchten Sie trinken?',
        indonesian: 'Apa yang ingin Anda minum?',
        contextNote: 'Menanyakan pesanan minuman di restoran',
      },
      {
        level: 'A1',
        german: 'Er hat gestern Abend zu viel Kaffee getrunken.',
        indonesian: 'Dia minum terlalu banyak kopi kemarin malam.',
        contextNote: 'Bentuk Perfekt: hat getrunken',
      },
    ],
    learningTips: 'Kata kerja tak beraturan pola i - a - u: trinken - trank - getrunken. Hilfsverb Perfekt adalah "haben".',
  },

  essen: {
    word: 'essen',
    displayWord: 'essen',
    ipa: '/ˈɛsn̩/',
    translations: ['makan', 'menyantap'],
    meaningSummary: 'Memasukkan makanan padat ke dalam mulut, mengunyah, dan menelannya.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'essen',
        praesens: 'isst (du isst, er/sie/es isst)',
        praeteritum: 'aß',
        partizip2: 'gegessen',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'speisen', wordClass: 'Verb', translation: 'bersantap (formal)' },
      { word: 'verzehren', wordClass: 'Verb', translation: 'mengonsumsi makanan' },
    ],
    antonyms: [
      { word: 'fasten', wordClass: 'Verb', translation: 'berpuasa / tidak makan' },
      { word: 'hungern', wordClass: 'Verb', translation: 'kelaparan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Was isst du heute zu Mittag?',
        indonesian: 'Apa yang kamu makan untuk makan siang hari ini?',
        contextNote: 'Vokalwechsel: du isst',
      },
      {
        level: 'A1',
        german: 'Wir haben leckere Pizza gegessen.',
        indonesian: 'Kami sudah makan pizza yang lezat.',
        contextNote: 'Perfekt: haben gegessen',
      },
    ],
    learningTips: 'Perubahan vokal penting (e -> i): du isst, er/sie/es isst. Jangan lupa: sebagai Nomen berartikel netral "das Essen" (makanan / santapan).',
  },

  schreiben: {
    word: 'schreiben',
    displayWord: 'schreiben',
    ipa: '/ˈʃʁaɪ̯bn̩/',
    translations: ['menulis', 'mencatat'],
    meaningSummary: 'Menuangkan lambang huruf, angka, atau kata ke atas media kertas atau digital.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'schreiben',
        praesens: 'schreibt',
        praeteritum: 'schrieb',
        partizip2: 'geschrieben',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'verfassen', wordClass: 'Verb', translation: 'mengarang / menyusun naskah' },
      { word: 'notieren', wordClass: 'Verb', translation: 'mencatat singkat' },
    ],
    antonyms: [
      { word: 'lesen', wordClass: 'Verb', translation: 'membaca' },
      { word: 'löschen', wordClass: 'Verb', translation: 'menghapus tulisan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich schreibe eine E-Mail an meinen Kollegen.',
        indonesian: 'Saya sedang menulis email kepada rekan kerja saya.',
        contextNote: 'Objek tulisan Akkusativ (eine E-Mail)',
      },
      {
        level: 'A1',
        german: 'Der Schüler schreibt neue Wörter ins Heft.',
        indonesian: 'Siswa itu mencatat kata-kata baru ke buku tulis.',
        contextNote: 'Mencatat catatan pelajaran',
      },
    ],
    learningTips: 'Kata kerja tak beraturan pola ei - ie - ie: schreiben - schrieb - geschrieben. Awalan penting: "aufschreiben" (mencatat).',
  },

  lesen: {
    word: 'lesen',
    displayWord: 'lesen',
    ipa: '/ˈleːzn̩/',
    translations: ['membaca'],
    meaningSummary: 'Melihat dan memahami isi teks bertuliskan dalam hati atau bersuara.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'lesen',
        praesens: 'liest (du liest, er liest - e->ie)',
        praeteritum: 'las',
        partizip2: 'gelesen',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'durchblättern', wordClass: 'Verb', translation: 'membaca sambil membolak-balik lembaran' },
      { word: 'studieren', wordClass: 'Verb', translation: 'menelaah teks bacaan' },
    ],
    antonyms: [
      { word: 'schreiben', wordClass: 'Verb', translation: 'menulis' },
      { word: 'überblättern', wordClass: 'Verb', translation: 'melewatkan halaman tanpa membaca' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Er liest jeden Abend vor dem Schlafen die Zeitung.',
        indonesian: 'Dia membaca koran setiap malam sebelum tidur.',
        contextNote: 'Vokalwechsel: er liest',
      },
      {
        level: 'A1',
        german: 'Hast du dieses Buch schon gelesen?',
        indonesian: 'Apakah kamu sudah membaca buku ini?',
        contextNote: 'Perfekt: hast gelesen',
      },
    ],
    learningTips: 'Perubahan vokal e -> ie pada du dan er/sie/es: "du liest", "er liest".',
  },

  verstehen: {
    word: 'verstehen',
    displayWord: 'verstehen',
    ipa: '/fɛɐ̯ˈʃteːən/',
    translations: ['mengerti', 'memahami'],
    meaningSummary: 'Menangkap arti atau maksud dari suatu perkataan, tulisan, atau konsep.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'verstehen',
        praesens: 'versteht',
        praeteritum: 'verstand',
        partizip2: 'verstanden',
        hilfsverb: 'haben',
        isIrregular: true,
        isSeparable: false,
        prefix: 'ver- (untrennbar)',
      },
    },
    synonyms: [
      { word: 'begreifen', wordClass: 'Verb', translation: 'menangkap konsep dengan akal budi' },
      { word: 'nachvollziehen', wordClass: 'Verb', translation: 'memahami alur pemikiran' },
    ],
    antonyms: [
      { word: 'missverstehen', wordClass: 'Verb', translation: 'salah paham' },
      { word: 'verkennen', wordClass: 'Verb', translation: 'gagal memahami hakikat' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Entschuldigung, ich verstehe das leider nicht.',
        indonesian: 'Maaf, sayangnya saya tidak mengerti hal itu.',
        contextNote: 'Ungkapan penting pembelajar A1',
      },
      {
        level: 'A1',
        german: 'Verstehst du mich gut?',
        indonesian: 'Apakah kamu mendengar dan mengerti perkataan saya dengan baik?',
        contextNote: 'Komunikasi dua arah',
      },
    ],
    learningTips: 'Awalan "ver-" adalah untrennbar (tak dapat dipisahkan), sehingga Partizip II tidak memakai "ge-": tetap "verstanden".',
  },

  wohnen: {
    word: 'wohnen',
    displayWord: 'wohnen',
    ipa: '/ˈvoːnən/',
    translations: ['tinggal', 'menetap', 'bermukim'],
    meaningSummary: 'Mempunyai tempat kediaman tetap di suatu rumah, apartemen, atau kota.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'wohnen',
        praesens: 'wohnt',
        praeteritum: 'wohnte',
        partizip2: 'gewohnt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'leben', wordClass: 'Verb', translation: 'hidup / tinggal' },
      { word: 'residieren', wordClass: 'Verb', translation: 'bermukim resmi' },
    ],
    antonyms: [
      { word: 'ausziehen', wordClass: 'Verb', translation: 'pindah keluar hunian' },
      { word: 'reisen', wordClass: 'Verb', translation: 'bepergian mengembara' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich wohne seit zwei Jahren in Hamburg.',
        indonesian: 'Saya tinggal di Hamburg sejak dua tahun yang lalu.',
        contextNote: 'Tempat tinggal: in + Dativ',
      },
      {
        level: 'A1',
        german: 'Wo wohnst du genau?',
        indonesian: 'Di mana tepatnya kamu tinggal?',
        contextNote: 'Pertanyaan lokasi tempat tinggal',
      },
    ],
    learningTips: 'Kata kerja beraturan (regelmäßiges Verb). Ingat preposisi lokasinya: "wohnen in + Dativ" (in Berlin, in der Schillerstraße).',
  },

  sehen: {
    word: 'sehen',
    displayWord: 'sehen',
    ipa: '/ˈzeːən/',
    translations: ['melihat', 'memandang', 'menonton'],
    meaningSummary: 'Menangkap rangsangan visual menggunakan indra mata.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'sehen',
        praesens: 'sieht (du siehst, er sieht - e->ie)',
        praeteritum: 'sah',
        partizip2: 'gesehen',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'erblicken', wordClass: 'Verb', translation: 'menatap pandang' },
      { word: 'beobachten', wordClass: 'Verb', translation: 'mengamati saksama' },
    ],
    antonyms: [
      { word: 'übersehen', wordClass: 'Verb', translation: 'luput dari pandangan' },
      { word: 'erblinden', wordClass: 'Verb', translation: 'menjadi buta' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Siehst du das weiße Haus dort drüben?',
        indonesian: 'Apakah kamu melihat rumah putih di seberang sana?',
        contextNote: 'Vokalwechsel: du siehst',
      },
      {
        level: 'A1',
        german: 'Wir sehen uns morgen um neun Uhr.',
        indonesian: 'Kita bertemu besok jam sembilan.',
        contextNote: 'Frasa perpisahan: sich sehen (bertemu)',
      },
    ],
    learningTips: 'Perubahan vokal e -> ie pada orang ke-2 dan ke-3 tunggal kini: "du siehst", "er/sie/es sieht". Ungkapan penting: "Auf Wiedersehen!" (Sampai jumpa lagi!).',
  },

  hoeren: {
    word: 'hören',
    displayWord: 'hören',
    ipa: '/ˈhøːʁən/',
    translations: ['mendengar', 'mendengarkan'],
    meaningSummary: 'Menangkap bunyi atau suara melalui indra telinga.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'hören',
        praesens: 'hört',
        praeteritum: 'hörte',
        partizip2: 'gehört',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'lauschen', wordClass: 'Verb', translation: 'mendengarkan seksama' },
      { word: 'vernehmen', wordClass: 'Verb', translation: 'menangkap bunyi suara' },
    ],
    antonyms: [
      { word: 'überhören', wordClass: 'Verb', translation: 'tidak mendengar / melewatkan bunyi' },
      { word: 'ertauben', wordClass: 'Verb', translation: 'menjadi tuli' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich höre abends gerne klassische Musik.',
        indonesian: 'Saya suka mendengarkan musik klasik di malam hari.',
        contextNote: 'Kegiatan hobi',
      },
      {
        level: 'A1',
        german: 'Hörst du mich gut?',
        indonesian: 'Apakah kamu mendengar suara saya dengan jelas?',
        contextNote: 'Panggilan telepon',
      },
    ],
    learningTips: 'Kata kerja beraturan. Jangan tertukar dengan kata kerja refleksif/dativ "gehören + Dativ" (artinya: milik/kepunyaan seseorang)!',
  },

  helfen: {
    word: 'helfen',
    displayWord: 'helfen',
    ipa: '/ˈhɛlfn̩/',
    translations: ['membantu', 'menolong'],
    meaningSummary: 'Memberikan bantuan atau tenaga untuk mempermudah pekerjaan orang lain.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'helfen',
        praesens: 'hilft (du hilfst, er hilft - e->i)',
        praeteritum: 'half',
        partizip2: 'geholfen',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'unterstützen', wordClass: 'Verb', translation: 'memberi sokongan bantuan' },
      { word: 'beistehen', wordClass: 'Verb', translation: 'mendampingi menolong' },
    ],
    antonyms: [
      { word: 'schaden', wordClass: 'Verb', translation: 'merugikan' },
      { word: 'behindern', wordClass: 'Verb', translation: 'menghalangi / merintangi' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Kann ich Ihnen helfen?',
        indonesian: 'Bisa saya bantu Anda?',
        contextNote: 'Sapaan pelayanan standar: helfen + Dativ (Ihnen)',
      },
      {
        level: 'A1',
        german: 'Er hilft seinem Freund bei den Hausaufgaben.',
        indonesian: 'Dia membantu temannya mengerjakan PR.',
        contextNote: 'helfen + Dativ + bei + Dativ',
      },
    ],
    learningTips: 'ATURAN TATA BAHASA EMAS: kata kerja "helfen" SELALU menuntut objek Dativ (bukan Akkusativ): "Ich helfe DIR" (bukan dich), "Er hilft MIR" (bukan mich).',
  },

  spielen: {
    word: 'spielen',
    displayWord: 'spielen',
    ipa: '/ˈʃpiːlən/',
    translations: ['bermain', 'memainkan (alat musik)'],
    meaningSummary: 'Melakukan kegiatan rekreatif untuk bersenang-senang atau memainkan instrumen musik/olahraga.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'spielen',
        praesens: 'spielt',
        praeteritum: 'spielte',
        partizip2: 'gespielt',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'zocken', wordClass: 'Verb', translation: 'bermain game (bahasa gaul santai)' },
      { word: 'musizieren', wordClass: 'Verb', translation: 'memainkan nada musik' },
    ],
    antonyms: [
      { word: 'arbeiten', wordClass: 'Verb', translation: 'bekerja serius' },
      { word: 'büffeln', wordClass: 'Verb', translation: 'belajar keras' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Die Kinder spielen draußen Fußball.',
        indonesian: 'Anak-anak bermain sepak bola di luar.',
        contextNote: 'Olahraga: bermain sepak bola tanpa preposisi',
      },
      {
        level: 'A1',
        german: 'Sie spielt wunderbar Klavier.',
        indonesian: 'Dia memainkan piano dengan sangat indah.',
        contextNote: 'Alat musik: bermain piano',
      },
    ],
    learningTips: 'Dalam bahasa Jerman, untuk alat musik dan olahraga cukup sebutkan nama alat/cabangnya tanpa artikel atau preposisi: "Gitarre spielen", "Tennis spielen".',
  },

  brauchen: {
    word: 'brauchen',
    displayWord: 'brauchen',
    ipa: '/ˈbʁaʊ̯xn̩/',
    translations: ['membutuhkan', 'memerlukan'],
    meaningSummary: 'Menghendaki keberadaan sesuatu hal yang esensial untuk tujuan tertentu.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'brauchen',
        praesens: 'braucht',
        praeteritum: 'brauchte',
        partizip2: 'gebraucht',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'benötigen', wordClass: 'Verb', translation: 'memerlukan secara formal' },
      { word: 'bedürfen', wordClass: 'Verb', translation: 'menuntut kebutuhan akan' },
    ],
    antonyms: [
      { word: 'verzichten auf', wordClass: 'Verb', translation: 'merelakan tanpa perlu' },
      { word: 'entbehren', wordClass: 'Verb', translation: 'tidak memerlukan' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich brauche dringend deine Hilfe.',
        indonesian: 'Saya sangat membutuhkan bantuanmu.',
        contextNote: 'Objek Akkusativ feminin (deine Hilfe)',
      },
      {
        level: 'A1',
        german: 'Brauchen Sie eine Quittung?',
        indonesian: 'Apakah Anda membutuhkan kuitansi tanda terima?',
        contextNote: 'Pertanyaan kasir di toko',
      },
    ],
    learningTips: 'Selalu menuntut objek Akkusativ: "Ich brauche EINEN Stift" (maskulin: einen).',
  },

  wissen: {
    word: 'wissen',
    displayWord: 'wissen',
    ipa: '/ˈvɪsn̩/',
    translations: ['tahu', 'mengetahui'],
    meaningSummary: 'Memiliki pengetahuan atau informasi mengenai suatu fakta atau kebenaran.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'wissen',
        praesens: 'weiß (ich weiß, du weißt, er weiß)',
        praeteritum: 'wusste',
        partizip2: 'gewusst',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'kennen', wordClass: 'Verb', translation: 'mengenal' },
      { word: 'unterrichtet sein über', wordClass: 'Verb', translation: 'mendapat info tentang' },
    ],
    antonyms: [
      { word: 'nicht wissen', wordClass: 'Verb', translation: 'tidak tahu' },
      { word: 'ahnenlos sein', wordClass: 'Verb', translation: 'tidak punya firasat apapun' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich weiß es nicht.',
        indonesian: 'Saya tidak mengetahuinya.',
        contextNote: 'Frasa percakapan paling umum A1',
      },
      {
        level: 'A1',
        german: 'Weißt du, wie spät es ist?',
        indonesian: 'Apakah kamu tahu jam berapa sekarang?',
        contextNote: 'Pertanyaan waktu',
      },
    ],
    learningTips: 'Pola konjugasi Präteritopräsens khusus: ich weiß, du weißt, er/sie/es weiß (orang pertama dan ketiga tunggal sama dan tanpa akhiran -t).',
  },

  kennen: {
    word: 'kennen',
    displayWord: 'kennen',
    ipa: '/ˈkɛnən/',
    translations: ['mengenal', 'akrab dengan'],
    meaningSummary: 'Pernah melihat, menjumpai, atau memiliki keakraban dengan orang, tempat, atau hal tertentu.',
    wordClass: 'Verb',
    cefrLevel: 'A1',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'kennen',
        praesens: 'kennt',
        praeteritum: 'kannte',
        partizip2: 'gekannt',
        hilfsverb: 'haben',
        isIrregular: true,
      },
    },
    synonyms: [
      { word: 'vertraut sein mit', wordClass: 'Verb', translation: 'akrab dengan suatu hal' },
      { word: 'wiedererkennen', wordClass: 'Verb', translation: 'mengenali kembali' },
    ],
    antonyms: [
      { word: 'fremd sein', wordClass: 'Verb', translation: 'merasa asing' },
      { word: 'verkennen', wordClass: 'Verb', translation: 'salah mengenali' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Kennst du schon meinen Bruder Martin?',
        indonesian: 'Apakah kamu sudah mengenal saudara laki-laki saya, Martin?',
        contextNote: 'Mengenal orang (Akkusativ: meinen Bruder)',
      },
      {
        level: 'A1',
        german: 'Ich kenne diese Stadt sehr gut.',
        indonesian: 'Saya mengenal kota ini dengan sangat baik.',
        contextNote: 'Mengetahui seluk beluk tempat',
      },
    ],
    learningTips: 'Beda "wissen" vs "kennen": "kennen" dipakai untuk orang, kota, lagu, buku (mengenal melalui pengalaman/objek langsung), sedangkan "wissen" dipakai untuk fakta atau anak kalimat "dass/ob/wann/wo".',
  },

  gut: {
    word: 'gut',
    displayWord: 'gut',
    ipa: '/ɡuːt/',
    translations: ['baik', 'bagus', 'hebat', 'sehat'],
    meaningSummary: 'Memiliki mutu atau kualitas yang memuaskan dan positif.',
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
      { word: 'hervorragend', wordClass: 'Adjektiv', translation: 'luar biasa istimewa' },
      { word: 'prima', wordClass: 'Adjektiv', translation: 'bagus sekali' },
      { word: 'ausgezeichnet', wordClass: 'Adjektiv', translation: 'unggul terkemuka' },
    ],
    antonyms: [
      { word: 'schlecht', wordClass: 'Adjektiv', translation: 'buruk / jelek' },
      { word: 'miserabel', wordClass: 'Adjektiv', translation: 'sangat mengenaskan' },
      { word: 'katastrophal', wordClass: 'Adjektiv', translation: 'bencana / amat parah' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Das Essen im Restaurant schmeckt sehr gut.',
        indonesian: 'Makanan di restoran itu rasanya sangat lezat/enak.',
        contextNote: 'Kualitas rasa makanan',
      },
      {
        level: 'A1',
        german: 'Guten Morgen! Wie geht es Ihnen? - Danke, gut!',
        indonesian: 'Selamat pagi! Bagaimana kabar Anda? - Terima kasih, baik!',
        contextNote: 'Salam sapaan harian A1',
      },
    ],
    learningTips: 'Tingkatan komparasi sangat tak beraturan: gut -> besser -> am besten.',
  },

  neu: {
    word: 'neu',
    displayWord: 'neu',
    ipa: '/nɔɪ̯/',
    translations: ['baru', 'anyar'],
    meaningSummary: 'Baru dibuat, baru ada, belum lama dibeli atau belum pernah dipakai sebelumnya.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'neu',
        komparativ: 'neuer',
        superlativ: 'am neusten / am neuesten',
      },
    },
    synonyms: [
      { word: 'modern', wordClass: 'Adjektiv', translation: 'modern' },
      { word: 'frisch', wordClass: 'Adjektiv', translation: 'segar / gres' },
      { word: 'aktuell', wordClass: 'Adjektiv', translation: 'terkini' },
    ],
    antonyms: [
      { word: 'alt', wordClass: 'Adjektiv', translation: 'lama / tua' },
      { word: 'antik', wordClass: 'Adjektiv', translation: 'antik / kuno' },
      { word: 'gebraucht', wordClass: 'Adjektiv', translation: 'bekas pakai' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Ich habe mir ein neues Handy gekauft.',
        indonesian: 'Saya telah membeli sebuah ponsel baru.',
        contextNote: 'Deklinasi adjektiva netral: ein neues Handy',
      },
      {
        level: 'A1',
        german: 'Das neue Schuljahr beginnt im September.',
        indonesian: 'Tahun ajaran baru dimulai pada bulan September.',
        contextNote: 'Waktu baru',
      },
    ],
    learningTips: 'Lawan kata langsung dari "alt". Komparasi: neu -> neuer -> am neuesten.',
  },

  alt: {
    word: 'alt',
    displayWord: 'alt',
    ipa: '/alt/',
    translations: ['tua (usia)', 'lama (benda)', 'kuno'],
    meaningSummary: 'Sudah berusia lanjut (orang/makhluk) atau sudah ada sejak masa lampau (benda).',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'alt',
        komparativ: 'älter',
        superlativ: 'am ältesten',
      },
    },
    synonyms: [
      { word: 'betagt', wordClass: 'Adjektiv', translation: 'lanjut usia' },
      { word: 'antik', wordClass: 'Adjektiv', translation: 'antik kuno' },
      { word: 'historisch', wordClass: 'Adjektiv', translation: 'bersejarah lawas' },
    ],
    antonyms: [
      { word: 'jung', wordClass: 'Adjektiv', translation: 'muda (usia)' },
      { word: 'neu', wordClass: 'Adjektiv', translation: 'baru (benda)' },
      { word: 'frisch', wordClass: 'Adjektiv', translation: 'segar' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Wie alt bist du? - Ich bin zwanzig Jahre alt.',
        indonesian: 'Berapa usiamu? - Saya berusia dua puluh tahun.',
        contextNote: 'Menanyakan usia dalam bahasa Jerman',
      },
      {
        level: 'A1',
        german: 'Das alte Schloss liegt auf einem Hügel.',
        indonesian: 'Kastel kuno itu terletak di atas bukit.',
        contextNote: 'Benda masa lampau',
      },
    ],
    learningTips: 'Komparasi mengalami perubahan Umlaut (a -> ä): alt -> älter -> am ältesten.',
  },

  muede: {
    word: 'müde',
    displayWord: 'müde',
    ipa: '/ˈmyːdə/',
    translations: ['lelah', 'mengantuk', 'letih'],
    meaningSummary: 'Merasa letih dan membutuhkan istirahat atau tidur pulas.',
    wordClass: 'Adjektiv',
    cefrLevel: 'A1',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'müde',
        komparativ: 'müder',
        superlativ: 'am müdesten',
      },
    },
    synonyms: [
      { word: 'erschöpft', wordClass: 'Adjektiv', translation: 'habis tenaga / kelelahan' },
      { word: 'schläfrig', wordClass: 'Adjektiv', translation: 'mengantuk berat' },
      { word: 'matt', wordClass: 'Adjektiv', translation: 'lemas lunglai' },
    ],
    antonyms: [
      { word: 'wach', wordClass: 'Adjektiv', translation: 'terjaga segar' },
      { word: 'ausgeruht', wordClass: 'Adjektiv', translation: 'segar bugar usai istirahat' },
      { word: 'fit', wordClass: 'Adjektiv', translation: 'bugar bertenaga' },
    ],
    examples: [
      {
        level: 'A1',
        german: 'Nach der langen Reise bin ich furchtbar müde.',
        indonesian: 'Setelah perjalanan panjang ini, saya merasa sangat lelah.',
        contextNote: 'Kondisi fisik letih',
      },
      {
        level: 'A1',
        german: 'Geh ins Bett, wenn du müde bist!',
        indonesian: 'Pergilah tidur ke tempat tidur jika kamu mengantuk!',
        contextNote: 'Anjuran istirahat',
      },
    ],
    learningTips: 'Memakai huruf Umlaut "ü". Varian frasa idiomatis: "hundemüde" (sangat lelah luar biasa).',
  },
};
