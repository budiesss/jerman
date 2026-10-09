import { WordResult } from '../types';

/**
 * German Idioms, Colloquialisms & Redewendungen
 * Source:
 * - Duden – Redewendungen: Wörterbuch der deutschen Idiomatik (~15.000 Redewendungen)
 * - Modern German Umgangssprache & Alltagsidiome (A2 s/d Native)
 */
export const IDIOMS_EXPANDED: Record<string, WordResult> = {
  daumen_druecken: {
    word: 'die Daumen drücken',
    displayWord: 'die Daumen drücken',
    ipa: '/diː ˈdaʊ̯mən ˈdʁʏkn̩/',
    translations: ['mendoakan semoga sukses / beruntung', 'mengharapkan yang terbaik untuk seseorang'],
    meaningSummary: 'Gestur dan ungkapan kiasan khas Jerman untuk mendoakan keberhasilan seseorang (setara dengan "crossing fingers" dalam bahasa Inggris).',
    wordClass: 'Redewendung',
    cefrLevel: 'A2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Idiom kata kerja: jemanden die Daumen drücken (+ Dativ). Objek orang dalam kasus Dativ.',
      },
    },
    synonyms: [
      { word: 'Erfolg wünschen', wordClass: 'Redewendung', translation: 'mendoakan kesuksesan' },
      { word: 'Gutes hoffen', wordClass: 'Redewendung', translation: 'mengharapkan hal baik' },
    ],
    antonyms: [
      { word: 'Unglück wünschen', wordClass: 'Redewendung', translation: 'mendoakan keburukan' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Du hast morgen deine Deutschprüfung? Ich drücke dir ganz fest die Daumen!',
        indonesian: 'Kamu besok ada ujian bahasa Jerman? Aku mendoakanmu semoga sukses besar!',
        contextNote: 'Ucapan penyemangat sebelum ujian',
      },
      {
        level: 'B1',
        german: 'Wir haben alle die Daumen gedrückt, und er hat die Stelle tatsächlich bekommen.',
        indonesian: 'Kami semua mendoakan keberhasilannya, dan ia benar-benar mendapatkan posisi kerja itu.',
        contextNote: 'Kabar baik hasil doa bersama',
      },
    ],
    learningTips: 'Kultur unik Jerman: orang Jerman mengepalkan tangan dengan jempol dimasukkan atau ditekan ("Daumen drücken"), BUKAN menyilangkan jari telunjuk dan tengah ("crossing fingers")!',
  },

  schwein_haben: {
    word: 'Schwein haben',
    displayWord: 'Schwein haben',
    ipa: '/ʃvaɪ̯n ˈhaːbn̩/',
    translations: ['beruntung besar secara kebetulan', 'mujur tanpa diduga'],
    meaningSummary: 'Mendapatkan keberuntungan tak terduga atau selamat dari bahaya berkat kemujuran belaka.',
    wordClass: 'Redewendung',
    cefrLevel: 'B1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Idiom sehari-hari dengan kata kerja haben (hat Schwein gehabt).',
      },
    },
    synonyms: [
      { word: 'Glück haben', wordClass: 'Redewendung', translation: 'beruntung' },
      { word: 'Dusel haben', wordClass: 'Redewendung', translation: 'mujur kebetulan (slang)' },
    ],
    antonyms: [
      { word: 'Pech haben', wordClass: 'Redewendung', translation: 'bernasib sial / apes' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Da hast du aber echtes Schwein gehabt, dass der Zug Verspätung hatte!',
        indonesian: 'Kamu sungguh mujur sekali untung keretanya tadi terlambat!',
        contextNote: 'Keberuntungan lolos dari ketinggalan kereta',
      },
      {
        level: 'B1',
        german: 'Beim Unfall ist niemandem etwas passiert. Wir hatten unglaubliches Schwein.',
        indonesian: 'Dalam kecelakaan itu tidak ada yang terluka. Kami bernasib sangat mujur.',
        contextNote: 'Selamat dari marabahaya',
      },
    ],
    learningTips: 'Sejarah bahasa: Di abad pertengahan dalam lomba rakyat Jerman, peserta yang finis paling buncit tetap dihibur dengan dihadiahi seekor babi muda (Schwein) sebagai tanda hiburan. Dari situlah lahir kiasan "Schwein haben"!',
  },

  auf_die_nerven_gehen: {
    word: 'auf die Nerven gehen',
    displayWord: 'auf die Nerven gehen',
    ipa: '/aʊ̯f diː ˈnɛʁfn̩ ˈɡeːən/',
    translations: ['sangat menjengkelkan', 'bikin emosi / membuat stres', 'mengganggu ketenangan'],
    meaningSummary: 'Membuat seseorang sangat kesal, terganggu, atau jengkel karena perilaku yang terus berulang.',
    wordClass: 'Redewendung',
    cefrLevel: 'B1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'jemandem (Dativ) auf die Nerven gehen. Bentuk kasualnya: auf den Keks gehen / auf den Wecker gehen.',
      },
    },
    synonyms: [
      { word: 'auf den Keks gehen', wordClass: 'Redewendung', translation: 'bikin kesal (bahasa gaul santai)' },
      { word: 'auf den Wecker gehen', wordClass: 'Redewendung', translation: 'bikin geram (idiom populer)' },
      { word: 'nerven', wordClass: 'Verb', translation: 'mengganggu' },
    ],
    antonyms: [
      { word: 'beruhigen', wordClass: 'Verb', translation: 'menenangkan' },
      { word: 'erfreuen', wordClass: 'Verb', translation: 'menyenangkan hati' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Dieser laute Baulärm geht mir tierisch auf die Nerven!',
        indonesian: 'Suara bising proyek konstruksi ini benar-benar bikin aku luar biasa jengkel!',
        contextNote: 'Kekesalan terhadap kebisingan harian',
      },
      {
        level: 'B1',
        german: 'Hör auf, mich ständig zu unterbrechen! Du gehst mir auf die Nerven.',
        indonesian: 'Berhentilah memotong bicaraku terus-menerus! Kamu membuatku kesal.',
        contextNote: 'Percakapan pertengkaran santai',
      },
    ],
    learningTips: 'Variasi idiom slang Jerman yang searti dan sangat sering didengar di jalanan: "Du gehst mir auf den Keks!" (Kamu bikin aku sebal!). Objek selalu dalam kasus Dativ.',
  },

  nagel_auf_den_kopf: {
    word: 'den Nagel auf den Kopf treffen',
    displayWord: 'den Nagel auf den Kopf treffen',
    ipa: '/deːn ˈnaːɡl̩ aʊ̯f deːn kɔpf ˈtʁɛfn̩/',
    translations: ['tepat sasaran sekali', 'mengutarakan inti masalah dengan sempurna', 'kena pas di titiknya'],
    meaningSummary: 'Menyatakan atau menebak suatu hal persis tepat di titik persoalan tanpa meleset.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Bentuk lampau: traf den Nagel auf den Kopf / hat den Nagel auf den Kopf getroffen.',
      },
    },
    synonyms: [
      { word: 'ins Schwarze treffen', wordClass: 'Redewendung', translation: 'mengenai titik sasaran hitam' },
      { word: 'den Punkt treffen', wordClass: 'Redewendung', translation: 'mengena di titik inti' },
    ],
    antonyms: [
      { word: 'danebenliegen', wordClass: 'Verb', translation: 'meleset tebakannya' },
      { word: 'auf dem Holzweg sein', wordClass: 'Redewendung', translation: 'keliru arah pemikirannya' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Mit Ihrer treffenden Analyse haben Sie den Nagel auf den Kopf getroffen.',
        indonesian: 'Dengan analisis Anda yang tajam, Anda telah mengutarakan inti masalahnya dengan sangat tepat.',
        contextNote: 'Pujian dalam rapat bisnis',
      },
      {
        level: 'B2',
        german: 'Seine Bemerkung traf den Nagel auf den Kopf: Genau daran scheitert das Projekt.',
        indonesian: 'Komentarnya tepat sasaran sekali: Persis di sanalah titik kegagalan proyek tersebut.',
        contextNote: 'Evaluasi masalah',
      },
    ],
    learningTips: 'Metafora tukang kayu: memukul paku tepat di bagian kepalanya membuat paku menancap sempurna tanpa bengkok.',
  },

  aus_allen_wolken_fallen: {
    word: 'aus allen Wolken fallen',
    displayWord: 'aus allen Wolken fallen',
    ipa: '/aʊ̯s ˈalən ˈvɔlkn̩ ˈfalən/',
    translations: ['kaget setengah mati', 'sangat terkejut syok', 'sama sekali tidak menyangka berita buruk'],
    meaningSummary: 'Merasa sangat terperanjat atau syok karena kenyataan pahit yang datang tiba-tiba tak terduga.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Hilfsverb Perfekt: sein (ist aus allen Wolken gefallen).',
      },
    },
    synonyms: [
      { word: 'völlig überrascht sein', wordClass: 'Redewendung', translation: 'amat sangat terkejut' },
      { word: 'wie vom Blitz getroffen sein', wordClass: 'Redewendung', translation: 'bagaikan disambar petir' },
    ],
    antonyms: [
      { word: 'darauf gefasst sein', wordClass: 'Redewendung', translation: 'sudah bersiap mengantisipasinya' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Als er von seiner plötzlichen Kündigung erfuhr, fiel er aus allen Wolken.',
        indonesian: 'Ketika dia mengetahui perihal pemecatan kerjanya yang tiba-tiba, dia kaget setengah mati.',
        contextNote: 'Kejutan buruk tiba-tiba',
      },
      {
        level: 'B2',
        german: 'Die Eltern fielen aus allen Wolken, als die Tochter ihre Auswanderungspläne verkündete.',
        indonesian: 'Orang tua itu sangat terkejut syok saat sang putri mengumumkan rencana pindah ke luar negeri.',
        contextNote: 'Kabar keluarga yang tak terduga',
      },
    ],
    learningTips: 'Kiasan puitis Jerman: merasa seperti jatuh dari kahyangan awan ke tanah keras ketika ilusi mimpi buyar seketika.',
  },

  kirche_im_dorf_lassen: {
    word: 'die Kirche im Dorf lassen',
    displayWord: 'die Kirche im Dorf lassen',
    ipa: '/diː ˈkɪʁçə ɪm dɔʁf ˈlasn̩/',
    translations: ['tidak melebih-lebihkan', 'bersikap realistis terukur', 'jangan bersikap lebay'],
    meaningSummary: 'Menghindari tindakan yang berlebihan atau tidak membesar-besarkan masalah sepele.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Imperativ sering: Lass mal die Kirche im Dorf! / Lasst die Kirche im Dorf!',
      },
    },
    synonyms: [
      { word: 'nicht übertreiben', wordClass: 'Redewendung', translation: 'tidak melebih-lebihkan' },
      { word: 'auf dem Teppich bleiben', wordClass: 'Redewendung', translation: 'tetap membumi berpijak di tanah' },
    ],
    antonyms: [
      { word: 'aus einer Mücke einen Elefanten machen', wordClass: 'Redewendung', translation: 'membesar-besarkan masalah kecil (bikin gajah dari nyamuk)' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Nun lasst doch mal die Kirche im Dorf! Es ist doch überhaupt nichts Schlimmes passiert.',
        indonesian: 'Ayo jangan melebih-lebihkan masalah! Toh sama sekali tidak ada hal buruk yang terjadi.',
        contextNote: 'Menenangkan situasi kepanikan',
      },
      {
        level: 'B2',
        german: 'Wir sollten bei den Ausgaben für das Fest die Kirche im Dorf lassen.',
        indonesian: 'Kita sebaiknya tetap realistis dan tidak boros berlebihan dalam anggaran pesta.',
        contextNote: 'Pengendalian anggaran wajar',
      },
    ],
    learningTips: 'Idiom tradisional khas Jerman: di desa-desa Jerman gereja selalu berada di tengah alun-alun desa. Jangan memindahkannya ke luar desa (jangan bertindak berlebihan di luar batas wajar)!',
  },

  bock_haben: {
    word: 'Bock haben',
    displayWord: 'Bock haben',
    ipa: '/bɔk ˈhaːbn̩/',
    translations: ['punya mood / berniat / berhasrat untuk (slang)', 'mau / kepingin'],
    meaningSummary: 'Ungkapan slang percakapan kasual pemuda dan penutur asli Jerman untuk menyatakan keinginan/mood melakukan sesuatu.',
    wordClass: 'Redewendung',
    cefrLevel: 'A2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Umgangssprachlich (bahasa gaul santai). Konstruksi: Bock haben auf + Akkusativ / Bock haben zu + Infinitiv.',
      },
    },
    synonyms: [
      { word: 'Lust haben', wordClass: 'Redewendung', translation: 'berminat / ingin (bentuk standar netral)' },
      { word: 'Lust verspüren', wordClass: 'Redewendung', translation: 'merasakan hasrat' },
    ],
    antonyms: [
      { word: 'keinen Bock haben', wordClass: 'Redewendung', translation: 'mager / malas / tidak ada mood sama sekali' },
      { word: 'keine Lust haben', wordClass: 'Redewendung', translation: 'tidak berminat' },
    ],
    examples: [
      {
        level: 'A2',
        german: 'Hast du heute Abend Bock auf Kino oder Pizza?',
        indonesian: 'Kamu nanti malam ada mood mau nonton bioskop atau makan pizza?',
        contextNote: 'Ajakan gaul sehari-hari di Jerman',
      },
      {
        level: 'B1',
        german: 'Ich habe heute überhaupt keinen Bock zu lernen, ich will nur chillen.',
        indonesian: 'Hari ini aku benar-benar mager / nggak ada mood belajar sama sekali, aku cuma mau santai santai.',
        contextNote: 'Curhat kasual anak muda',
      },
    ],
    learningTips: 'KATA GAUL PALING POPULER DI JERMAN: Di antara teman sebaya Jerman, orang hampir tidak pernah bilang "Haben Sie Lust?", melainkan selalu: "Hast du Bock drauf?". Lawan katanya yang sangat tenar: "Null Bock" (nol mood / mager total).',
  },

  alles_in_butter: {
    word: 'alles in Butter',
    displayWord: 'alles in Butter',
    ipa: '/ˈaləs ɪn ˈbʊtɐ/',
    translations: ['semuanya beres', 'semua aman terkendali', 'segalanya berjalan lancar'],
    meaningSummary: 'Ungkapan penenang bahwa segala sesuatunya dalam keadaan baik, beres, dan tanpa masalah.',
    wordClass: 'Redewendung',
    cefrLevel: 'B1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Kerap digunakan dalam kalimat pertanyaan: Alles in Butter? (Semuanya aman beres?).',
      },
    },
    synonyms: [
      { word: 'alles in Ordnung', wordClass: 'Redewendung', translation: 'semuanya teratur beres' },
      { word: 'alles bestens', wordClass: 'Redewendung', translation: 'segalanya prima sempurna' },
    ],
    antonyms: [
      { word: 'im Eimer sein', wordClass: 'Redewendung', translation: 'hancur rusak berantakan (slang)' },
      { word: 'schiefgehen', wordClass: 'Verb', translation: 'gagal melenceng' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Keine Sorge, ich habe das Problem gelöst. Jetzt ist wieder alles in Butter!',
        indonesian: 'Jangan khawatir, aku sudah menyelesaikan masalahnya. Sekarang semuanya sudah beres kembali!',
        contextNote: 'Menenteramkan situasi rekan kerja',
      },
      {
        level: 'B1',
        german: 'Na, wie läuft das Projekt? — Alles in Butter bei uns!',
        indonesian: 'Gimana proyeknya berjalan lancar? — Semuanya aman beres di pihak kami!',
        contextNote: 'Tanya kabar kemajuan tugas',
      },
    ],
    learningTips: 'Asal-usul unik abad pertengahan: saat mengangkut gelas kaca mahal dari Italia melintasi pegunungan Alpen, pedagang menyiramkan mentega cair ke dalam tong kaca. Mentega membeku melindungi kaca agar tidak pecah. Saat sampai, "alles in Butter" = semua barang kaca utuh selamat!',
  },

  klartext_reden: {
    word: 'Klartext reden',
    displayWord: 'Klartext reden',
    ipa: '/ˈklaːɐ̯tɛkst ˈʁeːdn̩/',
    translations: ['bicara terus terang', 'bicara to the point tanpa basa-basi', 'bicara gamblang tanpa tedeng aling-aling'],
    meaningSummary: 'Berbicara secara lugas, jelas, dan jujur tanpa menyembunyikan kebenaran di balik kata-kata halus.',
    wordClass: 'Redewendung',
    cefrLevel: 'B2',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Idiom percakapan tegas: Jetzt reden wir mal Klartext!',
      },
    },
    synonyms: [
      { word: 'die Karten auf den Tisch legen', wordClass: 'Redewendung', translation: 'membuka kartu secara jujur' },
      { word: 'offen sprechen', wordClass: 'Redewendung', translation: 'berbicara terbuka' },
    ],
    antonyms: [
      { word: 'um den heißen Brei herumreden', wordClass: 'Redewendung', translation: 'berbelit-belit tak tentu arah' },
      { word: 'etwas beschönigen', wordClass: 'Verb', translation: 'memperhalus hal buruk' },
    ],
    examples: [
      {
        level: 'B2',
        german: 'Hör auf mit den Ausflüchten und rede endlich Klartext mit mir!',
        indonesian: 'Hentikan alasan-alasan berbelit itu dan berbicaralah terus terang padaku sekarang juga!',
        contextNote: 'Tuntutan kejujuran tegas',
      },
      {
        level: 'B2',
        german: 'Der Chef redete in der Betriebsversammlung Klartext über die finanzielle Notlage.',
        indonesian: 'Bos berbicara terus terang dalam rapat umum perusahaan mengenai kondisi krisis keuangan yang dialami.',
        contextNote: 'Transparansi kepemimpinan',
      },
    ],
    learningTips: 'Lawan kata paling populer dari idiom ini adalah "um den heißen Brei herumreden" (berputar-putar seperti bubur panas / bertele-tele).',
  },

  zwei_fliegen_mit_einer_klappe: {
    word: 'zwei Fliegen mit einer Klappe schlagen',
    displayWord: 'zwei Fliegen mit einer Klappe schlagen',
    ipa: '/tsvaɪ̯ ˈfliːɡn̩ mɪt ˈaɪ̯nɐ ˈklapə ˈʃlaːɡn̩/',
    translations: ['sekali mendayung dua tiga pulau terlampaui', 'menyelesaikan dua urusan sekaligus dengan satu tindakan'],
    meaningSummary: 'Mencapai dua tujuan atau keuntungan sekaligus hanya dengan melakukan satu upaya efisien.',
    wordClass: 'Redewendung',
    cefrLevel: 'B1',
    grammar: {
      type: 'general',
      data: {
        hinweis: 'Kiasan pemukul lalat (Fliegenklappe). Perfekt: hat zwei Fliegen mit einer Klappe geschlagen.',
      },
    },
    synonyms: [
      { word: 'doppelten Nutzen erzielen', wordClass: 'Redewendung', translation: 'meraih manfaat ganda' },
      { word: 'Synergieeffekte nutzen', wordClass: 'Redewendung', translation: 'memanfaatkan sinergi (formal)' },
    ],
    antonyms: [
      { word: 'ineffizient handeln', wordClass: 'Redewendung', translation: 'bertindak tidak efisien' },
    ],
    examples: [
      {
        level: 'B1',
        german: 'Wenn ich mit dem Fahrrad zur Arbeit fahre, treibe ich Sport und spare Geld – zwei Fliegen mit einer Klappe!',
        indonesian: 'Jika saya naik sepeda ke tempat kerja, saya berolahraga sekaligus menghemat uang – sekali dayung dua pulau terlampaui!',
        contextNote: 'Gaya hidup praktis efisien',
      },
      {
        level: 'B2',
        german: 'Mit der neuen Software schlagen wir zwei Fliegen mit einer Klappe: Zeitersparnis und Fehlerreduktion.',
        indonesian: 'Dengan perangkat lunak baru kita menyelesaikan dua hal sekaligus: penghematan waktu dan pengurangan eror.',
        contextNote: 'Efisiensi teknologi kerja',
      },
    ],
    learningTips: 'Kiasan lalat: dengan sekali ayunan pemukul lalat (Klappe), dua ekor lalat mati bersamaan! Persis seperti peribahasa Indonesia "sekali mendayung dua tiga pulau terlampaui".',
  },
};
