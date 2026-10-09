import { WordResult } from '../types';

/**
 * Expanded C2 & Native Mastery Vocabulary
 * Sources:
 * - Duden – Deutsches Universalwörterbuch (~250.000 Stichwörter, größte Einzelausgabe)
 * - Duden – Das Stilwörterbuch (Höchste Stilebene, gehobenes Deutsch & literarische Präzision)
 * Focus:
 * - Elevated literary register, philosophical and juristic nuances, rare classical terms
 */
export const C2_EXPANDED: Record<string, WordResult> = {
  // --- GEHOBENE NOMEN C2 ---
  koinzidenz: {
    word: 'die Koinzidenz',
    displayWord: 'die Koinzidenz',
    ipa: '/koɪntsiˈdɛnt͡s/',
    translations: ['koinsidensi', 'kebetulan waktu yang bersamaan', 'peristiwa berbarengan tanpa disengaja'],
    meaningSummary: 'Peristiwa di mana dua atau lebih kejadian terjadi pada saat bersamaan secara kebetulan yang mengejutkan.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Koinzidenz',
        plural: 'die Koinzidenzen',
        genitivSingular: 'der Koinzidenz',
      },
    },
    synonyms: [
      { word: 'der Zufall', article: 'der', wordClass: 'Nomen', translation: 'kebetulan biasa' },
      { word: 'das Zusammentreffen', article: 'das', wordClass: 'Nomen', translation: 'pertemuan bersamaan' },
    ],
    antonyms: [
      { word: 'die Kausalität', article: 'die', wordClass: 'Nomen', translation: 'hubungan sebab-akibat terencana' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Dass beide Autoren denselben Gedanken zur gleichen Zeit formulierten, war eine bemerkenswerte Koinzidenz.',
        indonesian: 'Bahwa kedua penulis merumuskan gagasan yang sama pada saat bersamaan merupakan sebuah koinsidensi yang luar biasa.',
        contextNote: 'Sejarah pemikiran intelektual C2',
      },
      {
        level: 'C2',
        german: 'Man darf eine zeitliche Koinzidenz keinesfalls mit einem kausalen Wirkungsgefüge verwechseln.',
        indonesian: 'Orang sama sekali tidak boleh mengacaukan koinsidensi waktu dengan relasi sebab-akibat kausal.',
        contextNote: 'Epistemologi ilmiah',
      },
    ],
    learningTips: 'Register C2 gehoben: dalam percakapan kasual orang hanya berkata "Was für ein Zufall!". Namun dalam wacana sains/filsafat, istilah "Koinzidenz" mutlak digunakan.',
  },

  animositaet: {
    word: 'die Animosität',
    displayWord: 'die Animosität',
    ipa: '/animoziˈtɛːt/',
    translations: ['animositas', 'rasa permusuhan terselubung', 'kebencian dendam halus'],
    meaningSummary: 'Sikap permusuhan atau rasa tidak suka yang dingin dan tajam terhadap seseorang.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Animosität',
        plural: 'die Animositäten',
        genitivSingular: 'der Animosität',
      },
    },
    synonyms: [
      { word: 'die Feindseligkeit', article: 'die', wordClass: 'Nomen', translation: 'sikap bermusuhan' },
      { word: 'der Groll', article: 'der', wordClass: 'Nomen', translation: 'dendam kesumat' },
      { word: 'die Abneigung', article: 'die', wordClass: 'Nomen', translation: 'keengganan rasa tidak suka' },
    ],
    antonyms: [
      { word: 'die Sympathie', article: 'die', wordClass: 'Nomen', translation: 'simpati kehangatan' },
      { word: 'die Zuneigung', article: 'die', wordClass: 'Nomen', translation: 'kasih sayang' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Trotz offizieller Höflichkeit waren die persönlichen Animositäten zwischen den Ministerpräsidenten spürbar.',
        indonesian: 'Terlepas dari kesopanan protokoler resmi, rasa permusuhan dingin (Animositäten) antara kedua perdana menteri sangat terasa.',
        contextNote: 'Diplomasi tingkat tinggi',
      },
      {
        level: 'C2',
        german: 'Alte Animositäten sollten in diesem gemeinsamen Hilfsprojekt hintangestellt werden.',
        indonesian: 'Rasa dendam lama sebaiknya dikesampingkan dalam proyek kemanusiaan bersama ini.',
        contextNote: 'Resolusi konflik C2',
      },
    ],
    learningTips: 'Sering dipakai dalam bentuk jamak: "persönliche Animositäten pflegen / beilegen" (memelihara / mengubur rasa tidak suka pribadi).',
  },

  hybris: {
    word: 'die Hybris',
    displayWord: 'die Hybris',
    ipa: '/ˈhyːbʁɪs/',
    translations: ['hibris', 'kecongkakan tak terhingga', 'kesombongan fatal yang menantang batas'],
    meaningSummary: 'Keangkuhan ekstrem dan rasa terlalu percaya diri berlebihan yang berujung pada kejatuhan tragis.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Hybris',
        plural: '-',
        genitivSingular: 'der Hybris',
      },
    },
    synonyms: [
      { word: 'der Hochmut', article: 'der', wordClass: 'Nomen', translation: 'kesombongan tinggi hati' },
      { word: 'die Vermessenheit', article: 'die', wordClass: 'Nomen', translation: 'kelancangan melampaui batas' },
      { word: 'die Selbstüberhebung', article: 'die', wordClass: 'Nomen', translation: 'sikap mengagungkan diri sendiri' },
    ],
    antonyms: [
      { word: 'die Demut', article: 'die', wordClass: 'Nomen', translation: 'kerendahhatian bersahaja' },
      { word: 'die Bescheidenheit', article: 'die', wordClass: 'Nomen', translation: 'kesederhanaan moral' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die menschliche Hybris, die Natur gänzlich beherrschen zu wollen, rächt sich im Klimawandel.',
        indonesian: 'Kecongkakan fatal (Hybris) manusia yang berhasrat menguasai alam secara mutlak kini membalas dalam bentuk krisis iklim.',
        contextNote: 'Esai etika lingkungan kontemporer',
      },
      {
        level: 'C2',
        german: 'Im antiken Drama stürzt die Hybris des Helden ihn unweigerlich ins Verderben.',
        indonesian: 'Dalam drama klasik antik, keangkuhan tragis (Hybris) sang protagonis tak terelakkan menjerumuskannya ke dalam kehancuran.',
        contextNote: 'Kajian drama klasik Jerman',
      },
    ],
    learningTips: 'Istilah mitologi Yunani kuno yang sangat dijunjung dalam karya tulis sastra dan kritik politik Jerman. Selalu feminin: "die Hybris". Lawan kata paling luhur adalah "die Demut".',
  },

  chuzpe: {
    word: 'die Chuzpe',
    displayWord: 'die Chuzpe',
    ipa: '/ˈxʊtspə/',
    translations: ['chutzpah', 'keberanian luar biasa kurang ajar', 'kenekatan yang bikin geleng-geleng'],
    meaningSummary: 'Kombinasi antara keberanian berani mati yang memukau dan ketidaksopanan yang mencengangkan.',
    wordClass: 'Nomen',
    cefrLevel: 'C2',
    grammar: {
      type: 'nomen',
      data: {
        artikel: 'die',
        gender: 'feminin',
        singular: 'die Chuzpe',
        plural: '-',
        genitivSingular: 'der Chuzpe',
      },
    },
    synonyms: [
      { word: 'die Dreistigkeit', article: 'die', wordClass: 'Nomen', translation: 'sikap kurang ajar berani' },
      { word: 'die Unverfrorenheit', article: 'die', wordClass: 'Nomen', translation: 'muka tebal tanpa malu' },
    ],
    antonyms: [
      { word: 'die Schüchternheit', article: 'die', wordClass: 'Nomen', translation: 'sifat pemalu ragu-ragu' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Man muss schon eine gehörige Portion Chuzpe besitzen, um sich nach diesem Skandal wieder zur Wahl zu stellen.',
        indonesian: 'Seseorang harus memiliki porsi kenekatan muka tebal (Chuzpe) yang luar biasa untuk mencalonkan diri lagi setelah skandal tersebut.',
        contextNote: 'Komentar politik tajam',
      },
      {
        level: 'C2',
        german: 'Mit erstaunlicher Chuzpe handelte der junge Gründer Millionenverträge aus.',
        indonesian: 'Dengan kenekatan yang menakjubkan, pendiri startup muda itu menegosiasikan kontrak bernilai jutaan.',
        contextNote: 'Kisah wirausaha agresif',
      },
    ],
    learningTips: 'Berasal dari bahasa Yiddi (Yiddish) yang diserap sempurna ke bahasa Jerman penutur asli. Lafal huruf Ch seperti "kh" serak: /ˈxʊtspə/.',
  },

  // --- GEHOBENE VERBEN C2 ---
  evozieren: {
    word: 'evozieren',
    displayWord: 'evozieren',
    ipa: '/evoˈtsiːʁən/',
    translations: ['membangkitkan kenangan / asosiasi', 'memunculkan rasa di benak'],
    meaningSummary: 'Memanggil kembali ingatan, emosi, atau asosiasi tertentu ke dalam kesadaran pikiran.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'evozieren',
        praesens: 'evoziert',
        praeteritum: 'evozierte',
        partizip2: 'evoziert',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'hervorrufen', wordClass: 'Verb', translation: 'memicu timbul' },
      { word: 'wachrufen', wordClass: 'Verb', translation: 'membangunkan ingatan' },
      { word: 'beschwören', wordClass: 'Verb', translation: 'mengundang bayangan' },
    ],
    antonyms: [
      { word: 'unterdrücken', wordClass: 'Verb', translation: 'menekan / meredam ingatan' },
      { word: 'verdrängen', wordClass: 'Verb', translation: 'mengubur ingatan' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Der Duft von feuchtem Herbstlaub evoziert in mir wehmütige Kindheitserinnerungen.',
        indonesian: 'Aroma dedaunan musim gugur yang basah membangkitkan (evoziert) kenangan masa kecil yang syahdu dalam diri saya.',
        contextNote: 'Prosa literatur tingkat tinggi C2',
      },
      {
        level: 'C2',
        german: 'Die melancholischen Melodien des Cellos evozieren ein Gefühl tiefer Einsamkeit.',
        indonesian: 'Melodi selo yang melankolis memunculkan sensasi kesunyian yang mendalam.',
        contextNote: 'Resensi musik artistik',
      },
    ],
    learningTips: 'Kata serapan Latin "evocare" (memanggil keluar). Khas dalam resensi seni, sastra, dan tulisan puitis kelas atas.',
  },

  desavouieren: {
    word: 'desavouieren',
    displayWord: 'desavouieren',
    ipa: '/dezawoˈviːʁən/',
    translations: ['mendiskreditkan', 'mempermalukan dengan menyangkal wewenang', 'menelanjangi kelemahan di muka umum'],
    meaningSummary: 'Membantah wewenang seseorang secara terbuka atau meruntuhkan kredibilitasnya di depan umum.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'desavouieren',
        praesens: 'desavouiert',
        praeteritum: 'desavouierte',
        partizip2: 'desavouiert',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'bloßstellen', wordClass: 'Verb', translation: 'mempermalukan terang-terangan' },
      { word: 'diskreditieren', wordClass: 'Verb', translation: 'menjatuhkan martabat' },
      { word: 'im Stich lassen', wordClass: 'Verb', translation: 'meninggalkan tanpa pembelaan' },
    ],
    antonyms: [
      { word: 'den Rücken stärken', wordClass: 'Verb', translation: 'memberikan sokongan moril penuh' },
      { word: 'rehabilitieren', wordClass: 'Verb', translation: 'memulihkan nama baik' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Mit ihrer unabgestimmten Äußerung desavouierte die Ministerin ihren eigenen Staatssekretär.',
        indonesian: 'Dengan pernyataannya yang tanpa koordinasi, sang menteri mempermalukan dan mendiskreditkan sekretaris negaranya sendiri di depan publik.',
        contextNote: 'Dinamika kabinet pemerintahan',
      },
      {
        level: 'C2',
        german: 'Er fühlte sich durch die scharfe Rüge vor versammelter Mannschaft zutiefst desavouiert.',
        indonesian: 'Ia merasa martabat kepemimpinannya sepenuhnya runtuh akibat teguran keras di hadapan seluruh anggota tim.',
        contextNote: 'Psikologi organisasi C2',
      },
    ],
    learningTips: 'Kosa kata register diplomatik dan editorial koran bergengsi Jerman (seperti FAZ, Die Zeit). Berasal dari Prancis "désavouer".',
  },

  transzendieren: {
    word: 'transzendieren',
    displayWord: 'transzendieren',
    ipa: '/tʁanstsɛnˈdiːʁən/',
    translations: ['mentransendensikan', 'melampaui batas batas indrawi / konvensional'],
    meaningSummary: 'Melewati atau mengatasi batas pengalaman indrawi, batas materi, atau norma batas yang ada.',
    wordClass: 'Verb',
    cefrLevel: 'C2',
    grammar: {
      type: 'verb',
      data: {
        infinitiv: 'transzendieren',
        praesens: 'transzendiert',
        praeteritum: 'transzendierte',
        partizip2: 'transzendiert',
        hilfsverb: 'haben',
        isIrregular: false,
      },
    },
    synonyms: [
      { word: 'überschreiten', wordClass: 'Verb', translation: 'melangkahi batas' },
      { word: 'übersteigen', wordClass: 'Verb', translation: 'melampaui tingkatan' },
    ],
    antonyms: [
      { word: 'immanent bleiben', wordClass: 'Verb', translation: 'tetap terkurung di dalam batas' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Große Kunstwerke besitzen die Fähigkeit, nationale und epochale Grenzen zu transzendieren.',
        indonesian: 'Karya seni agung memiliki kemampuan untuk melampaui batas-batas nasional maupun batas zaman.',
        contextNote: 'Filsafat estetika seni',
      },
      {
        level: 'C2',
        german: 'Sein Denken transzendiert die herkömmlichen Denkmuster der Parteipolitik.',
        indonesian: 'Pemikirannya melampaui pola-pola pikir konvensional politik kepartaian.',
        contextNote: 'Analisis kepemimpinan visioner',
      },
    ],
    learningTips: 'Kata sifatnya adalah "transzendent" (bersifat melampaui batas duniawi), lawannya adalah "immanent".',
  },

  // --- GEHOBENE ADJEKTIVE C2 ---
  diametral: {
    word: 'diametral',
    displayWord: 'diametral',
    ipa: '/diameˈtʁaːl/',
    translations: ['diametral', 'bertolak belakang 180 derajat', 'berlawanan kutub secara total'],
    meaningSummary: 'Berada pada posisi yang berseberangan secara mutlak layaknya ujung garis tengah lingkaran.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'diametral',
        komparativ: '-',
        superlativ: '-',
      },
    },
    synonyms: [
      { word: 'grundverschieden', wordClass: 'Adjektiv', translation: 'berbeda secara fundamental' },
      { word: 'entgegengesetzt', wordClass: 'Adjektiv', translation: 'berlawanan arah' },
      { word: 'polar', wordClass: 'Adjektiv', translation: 'berkutub berlawanan' },
    ],
    antonyms: [
      { word: 'identisch', wordClass: 'Adjektiv', translation: 'identik sama persis' },
      { word: 'deckungsgleich', wordClass: 'Adjektiv', translation: 'kongruen selaras tumpang-tindih' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Die beiden Parteien vertreten in dieser Frage diametral entgegengesetzte Positionen.',
        indonesian: 'Kedua partai mengusung posisi yang bertolak belakang secara diametral dalam persoalan ini.',
        contextNote: 'Kolokasi wajib C2: diametral entgegengesetzt',
      },
      {
        level: 'C2',
        german: 'Seine tatsächlichen Handlungen stehen im diametralen Widerspruch zu seinen noblen Reden.',
        indonesian: 'Tindakan nyatanya bertentangan secara diametral dengan pidato-pidatonya yang mulia.',
        contextNote: 'Kritik kemunafikan moral',
      },
    ],
    learningTips: 'Hampir selalu berpasangan dengan "entgegengesetzt" membentuk kolokasi paten: "diametral entgegengesetzt" (bertentangan 180 derajat). Kata sifat absolut (tidak ada bentuk komparatif/superlatif).',
  },

  lapidar: {
    word: 'lapidar',
    displayWord: 'lapidar',
    ipa: '/lapiˈdaːɐ̯/',
    translations: ['lapidar', 'singkat padat tanpa basa-basi', 'ringkas tegas berbobot'],
    meaningSummary: 'Diungkapkan dengan sangat singkat dan padat tanpa hiasan kata yang bertele-tele namun sarat ketegasan.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'lapidar',
        komparativ: 'lapidarer',
        superlativ: 'am lapidarsten',
      },
    },
    synonyms: [
      { word: 'lakonisch', wordClass: 'Adjektiv', translation: 'singkat datar' },
      { word: 'prägnant', wordClass: 'Adjektiv', translation: 'padat jelas mengena' },
      { word: 'kurz und bündig', wordClass: 'Adjektiv', translation: 'singkat padat' },
    ],
    antonyms: [
      { word: 'weitschweifig', wordClass: 'Adjektiv', translation: 'bertele-tele panjang lebar' },
      { word: 'geschwätzig', wordClass: 'Adjektiv', translation: 'cerewet banyak omong' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Auf die komplexe Frage antwortete er mit einem lapidaren: „Vielleicht.“',
        indonesian: 'Atas pertanyaan rumit itu ia hanya menjawab secara lapidar dengan satu kata: "Mungkin."',
        contextNote: 'Gaya bicara ringkas dingin',
      },
      {
        level: 'C2',
        german: 'Der Bericht kommentierte die historische Katastrophe mit fast schon zynischer, lapidarer Kürze.',
        indonesian: 'Laporan tersebut mengomentari bencana bersejarah itu dengan keringkasan lapidar yang nyaris terdengar sinis.',
        contextNote: 'Gaya bahasa jurnalistik sastra',
      },
    ],
    learningTips: 'Berasal dari bahasa Latin "lapis" (batu), merujuk pada prasasti batu kuno yang tulisannya harus sangat singkat padat karena memahat batu sangat sulit.',
  },

  pejorativ: {
    word: 'pejorativ',
    displayWord: 'pejorativ',
    ipa: '/pejoʁaˈtiːf/',
    translations: ['peyoratif', 'berkonotasi merendahkan / menghina', 'bermuatan celaan'],
    meaningSummary: 'Memiliki nilai rasa atau arti kata yang meremehkan, mencemooh, atau merendahkan martabat.',
    wordClass: 'Adjektiv',
    cefrLevel: 'C2',
    grammar: {
      type: 'adjektiv',
      data: {
        positiv: 'pejorativ',
        komparativ: 'pejorativer',
        superlativ: 'am pejorativsten',
      },
    },
    synonyms: [
      { word: 'abwertend', wordClass: 'Adjektiv', translation: 'merendahkan' },
      { word: 'abfällig', wordClass: 'Adjektiv', translation: 'menghina mencemooh' },
      { word: 'entwürdigend', wordClass: 'Adjektiv', translation: 'merendahkan martabat' },
    ],
    antonyms: [
      { word: 'meliorativ', wordClass: 'Adjektiv', translation: 'meninggikan / berkonotasi mulia' },
      { word: 'anerkennend', wordClass: 'Adjektiv', translation: 'memuji mengapresiasi' },
    ],
    examples: [
      {
        level: 'C2',
        german: 'Dieser Begriff wird in der heutigen Debatte meist in einem pejorativen Sinne gebraucht.',
        indonesian: 'Istilah ini dalam perdebatan zaman sekarang kebanyakan digunakan dalam makna peyoratif (merendahkan).',
        contextNote: 'Linguistik semantik C2',
      },
      {
        level: 'C2',
        german: 'Man sollte pejorative Zuschreibungen im professionellen Diskurs tunlichst vermeiden.',
        indonesian: 'Orang sebaiknya sedapat mungkin menghindari pelabelan yang peyoratif dalam diskursus profesional.',
        contextNote: 'Etika komunikasi ilmiah',
      },
    ],
    learningTips: 'Lawan kata semantiknya adalah "meliorativ" (menaikkan nilai konotasi). Digunakan ketika menganalisis pilihan kata dalam media atau politik.',
  },
};
