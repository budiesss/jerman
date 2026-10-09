import { InflectionInfo, TypoCorrection } from './types';
import { GERMAN_DICTIONARY, GERMAN_THESAURUS } from './germanDictionaryData';

// =========================================================================
// 1. INFLECTED FORMS (KASUS, KONJUGASI VERBA, PLURAL, DEKLINASI ADJEKTIV)
// =========================================================================

interface InflectionRuleItem {
  baseWord: string; // kata lema tanpa artikel (misal: "Haus", "gehen", "Mann")
  displayBaseForm: string; // tampilan lema lengkap dengan artikel (misal: "das Haus", "gehen", "der Mann")
  grammaticalForm: string; // e.g. "Plural (Bentuk Jamak)", "Präteritum (Lampau)", "Kasus Dativ"
  explanation: string;
  caseOrTense?: string;
}

/**
 * Curated knowledge base of common German inflected forms (Nomen Plural/Kasus, Verb Präteritum/Partizip II/Präsens, Adjektiv)
 */
const INFLECTED_LOOKUP: Record<string, InflectionRuleItem> = {
  // --- Nomen: Plural & Kasus ---
  häuser: {
    baseWord: 'Haus',
    displayBaseForm: 'das Haus',
    grammaticalForm: 'Plural (Bentuk Jamak Nominativ / Akkusativ / Genitiv)',
    explanation: 'Bentuk jamak (Plural) dari kata benda netral "das Haus". Mengalami perubahan vokal Umlaut (au -> äu) dan penambahan akhiran "-er".',
    caseOrTense: 'Plural',
  },
  hauser: {
    baseWord: 'Haus',
    displayBaseForm: 'das Haus',
    grammaticalForm: 'Plural tanpa Umlaut (Koreksi: Häuser)',
    explanation: 'Bentuk jamak dari "das Haus" yang ditulis tanpa tanda Umlaut. Bentuk baku yang benar adalah "die Häuser".',
    caseOrTense: 'Plural',
  },
  häusern: {
    baseWord: 'Haus',
    displayBaseForm: 'das Haus',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "das Haus". Dalam kasus Dativ jamak, kata benda bahasa Jerman mendapat tambahan akhiran "-n" ("in den Häusern").',
    caseOrTense: 'Dativ Plural',
  },
  hauses: {
    baseWord: 'Haus',
    displayBaseForm: 'das Haus',
    grammaticalForm: 'Genitiv Singular',
    explanation: 'Bentuk kepemilikan (Genitiv) tunggal dari "das Haus". Kata benda netral/maskulin berakhiran sibilan mendapat akhiran "-es" ("des Hauses").',
    caseOrTense: 'Genitiv',
  },
  bücher: {
    baseWord: 'Buch',
    displayBaseForm: 'das Buch',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda netral "das Buch". Mengalami perubahan vokal Umlaut (u -> ü) dan sufiks "-er" ("die Bücher").',
    caseOrTense: 'Plural',
  },
  bucher: {
    baseWord: 'Buch',
    displayBaseForm: 'das Buch',
    grammaticalForm: 'Plural tanpa Umlaut (Koreksi: Bücher)',
    explanation: 'Bentuk jamak dari "das Buch" yang ditulis tanpa huruf Umlaut. Bentuk baku adalah "die Bücher".',
    caseOrTense: 'Plural',
  },
  büchern: {
    baseWord: 'Buch',
    displayBaseForm: 'das Buch',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "das Buch" ("mit den Büchern"). Mendapat akhiran "-n" khas Dativ jamak.',
    caseOrTense: 'Dativ Plural',
  },
  buches: {
    baseWord: 'Buch',
    displayBaseForm: 'das Buch',
    grammaticalForm: 'Genitiv Singular',
    explanation: 'Bentuk kepemilikan (Genitiv tunggal) dari "das Buch" ("des Buches").',
    caseOrTense: 'Genitiv',
  },
  männer: {
    baseWord: 'Mann',
    displayBaseForm: 'der Mann',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda maskulin "der Mann". Vokal a berubah menjadi Umlaut ä dengan akhiran "-er" ("die Männer").',
    caseOrTense: 'Plural',
  },
  manner: {
    baseWord: 'Mann',
    displayBaseForm: 'der Mann',
    grammaticalForm: 'Plural tanpa Umlaut (Koreksi: Männer)',
    explanation: 'Bentuk jamak dari "der Mann" tanpa Umlaut. Bentuk baku bahasa Jerman adalah "die Männer".',
    caseOrTense: 'Plural',
  },
  männern: {
    baseWord: 'Mann',
    displayBaseForm: 'der Mann',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "der Mann" ("mit den Männern").',
    caseOrTense: 'Dativ Plural',
  },
  mannes: {
    baseWord: 'Mann',
    displayBaseForm: 'der Mann',
    grammaticalForm: 'Genitiv Singular',
    explanation: 'Bentuk Genitiv tunggal dari "der Mann" ("des Mannes").',
    caseOrTense: 'Genitiv',
  },
  frauen: {
    baseWord: 'Frau',
    displayBaseForm: 'die Frau',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda feminin "die Frau". Mendapat penambahan akhiran "-en" ("die Frauen").',
    caseOrTense: 'Plural',
  },
  kinder: {
    baseWord: 'Kind',
    displayBaseForm: 'das Kind',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda netral "das Kind". Mendapat penambahan akhiran "-er" ("die Kinder").',
    caseOrTense: 'Plural',
  },
  kindern: {
    baseWord: 'Kind',
    displayBaseForm: 'das Kind',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "das Kind" ("mit den Kindern"). Mendapat akhiran "-n" khas Dativ jamak.',
    caseOrTense: 'Dativ Plural',
  },
  kindes: {
    baseWord: 'Kind',
    displayBaseForm: 'das Kind',
    grammaticalForm: 'Genitiv Singular',
    explanation: 'Bentuk kepemilikan (Genitiv tunggal) dari "das Kind" ("des Kindes").',
    caseOrTense: 'Genitiv',
  },
  tische: {
    baseWord: 'Tisch',
    displayBaseForm: 'der Tisch',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda maskulin "der Tisch". Mendapat penambahan akhiran "-e" ("die Tische").',
    caseOrTense: 'Plural',
  },
  tischen: {
    baseWord: 'Tisch',
    displayBaseForm: 'der Tisch',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "der Tisch" ("auf den Tischen").',
    caseOrTense: 'Dativ Plural',
  },
  tisches: {
    baseWord: 'Tisch',
    displayBaseForm: 'der Tisch',
    grammaticalForm: 'Genitiv Singular',
    explanation: 'Bentuk Genitiv tunggal dari "der Tisch" ("des Tisches").',
    caseOrTense: 'Genitiv',
  },
  äpfel: {
    baseWord: 'Apfel',
    displayBaseForm: 'der Apfel',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda maskulin "der Apfel". Mengalami perubahan vokal tunggal menjadi Umlaut "die Äpfel" tanpa sufiks tambahan.',
    caseOrTense: 'Plural',
  },
  apfel_pl: {
    baseWord: 'Apfel',
    displayBaseForm: 'der Apfel',
    grammaticalForm: 'Plural tanpa Umlaut',
    explanation: 'Bentuk jamak standar dari "der Apfel" adalah "die Äpfel" (dengan huruf Umlaut Ä).',
    caseOrTense: 'Plural',
  },
  städte: {
    baseWord: 'Stadt',
    displayBaseForm: 'die Stadt',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda feminin "die Stadt". Vokal a berubah menjadi Umlaut ä dengan akhiran "-e" ("die Städte").',
    caseOrTense: 'Plural',
  },
  stadte: {
    baseWord: 'Stadt',
    displayBaseForm: 'die Stadt',
    grammaticalForm: 'Plural tanpa Umlaut (Koreksi: Städte)',
    explanation: 'Bentuk jamak dari "die Stadt" tanpa Umlaut. Bentuk yang tepat adalah "die Städte".',
    caseOrTense: 'Plural',
  },
  länder: {
    baseWord: 'Land',
    displayBaseForm: 'das Land',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda netral "das Land" ("die Länder").',
    caseOrTense: 'Plural',
  },
  lander: {
    baseWord: 'Land',
    displayBaseForm: 'das Land',
    grammaticalForm: 'Plural tanpa Umlaut (Koreksi: Länder)',
    explanation: 'Bentuk jamak baku adalah "die Länder".',
    caseOrTense: 'Plural',
  },
  freunde: {
    baseWord: 'Freund',
    displayBaseForm: 'der Freund',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda maskulin "der Freund" ("die Freunde").',
    caseOrTense: 'Plural',
  },
  freunden: {
    baseWord: 'Freund',
    displayBaseForm: 'der Freund',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "der Freund" ("mit den Freunden").',
    caseOrTense: 'Dativ Plural',
  },
  tage: {
    baseWord: 'Tag',
    displayBaseForm: 'der Tag',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda maskulin "der Tag" ("die Tage").',
    caseOrTense: 'Plural',
  },
  tagen: {
    baseWord: 'Tag',
    displayBaseForm: 'der Tag',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "der Tag" ("in drei Tagen").',
    caseOrTense: 'Dativ Plural',
  },
  tages: {
    baseWord: 'Tag',
    displayBaseForm: 'der Tag',
    grammaticalForm: 'Genitiv Singular',
    explanation: 'Bentuk Genitiv tunggal dari "der Tag" ("des Tages").',
    caseOrTense: 'Genitiv',
  },
  jahre: {
    baseWord: 'Jahr',
    displayBaseForm: 'das Jahr',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda netral "das Jahr" ("die Jahre").',
    caseOrTense: 'Plural',
  },
  jahren: {
    baseWord: 'Jahr',
    displayBaseForm: 'das Jahr',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "das Jahr" ("nach zwei Jahren").',
    caseOrTense: 'Dativ Plural',
  },
  jahres: {
    baseWord: 'Jahr',
    displayBaseForm: 'das Jahr',
    grammaticalForm: 'Genitiv Singular',
    explanation: 'Bentuk Genitiv tunggal dari "das Jahr" ("des Jahres").',
    caseOrTense: 'Genitiv',
  },
  wörter: {
    baseWord: 'Wort',
    displayBaseForm: 'das Wort',
    grammaticalForm: 'Plural (Kata-kata lepas)',
    explanation: 'Bentuk jamak dari kata benda netral "das Wort" yang merujuk pada kata-kata lepasan/kosa kata individual ("die Wörter").',
    caseOrTense: 'Plural',
  },
  worte: {
    baseWord: 'Wort',
    displayBaseForm: 'das Wort',
    grammaticalForm: 'Plural (Tuturan bermakna)',
    explanation: 'Bentuk jamak dari "das Wort" yang merujuk pada ujaran/pidato/kalimat bijak bermakna ("meine Worte").',
    caseOrTense: 'Plural',
  },
  probleme: {
    baseWord: 'Problem',
    displayBaseForm: 'das Problem',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda netral "das Problem" ("die Probleme").',
    caseOrTense: 'Plural',
  },
  problemen: {
    baseWord: 'Problem',
    displayBaseForm: 'das Problem',
    grammaticalForm: 'Dativ Plural',
    explanation: 'Bentuk Dativ jamak dari "das Problem" ("mit den Problemen").',
    caseOrTense: 'Dativ Plural',
  },
  lösungen: {
    baseWord: 'Lösung',
    displayBaseForm: 'die Lösung',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari kata benda feminin "die Lösung" ("die Lösungen"). Akhiran "-ung" selalu membentuk jamak "-en".',
    caseOrTense: 'Plural',
  },
  losungen: {
    baseWord: 'Lösung',
    displayBaseForm: 'die Lösung',
    grammaticalForm: 'Plural tanpa Umlaut (Koreksi: Lösungen)',
    explanation: 'Bentuk jamak dari "die Lösung" (akhiran -ung berjamak -en).',
    caseOrTense: 'Plural',
  },
  voraussetzungen: {
    baseWord: 'Voraussetzung',
    displayBaseForm: 'die Voraussetzung',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari "die Voraussetzung" ("die Voraussetzungen").',
    caseOrTense: 'Plural',
  },
  herausforderungen: {
    baseWord: 'Herausforderung',
    displayBaseForm: 'die Herausforderung',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari "die Herausforderung" ("die Herausforderungen").',
    caseOrTense: 'Plural',
  },
  beschäftigungen: {
    baseWord: 'Beschäftigung',
    displayBaseForm: 'die Beschäftigung',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari "die Beschäftigung" ("die Beschäftigungen").',
    caseOrTense: 'Plural',
  },
  freizeitbeschäftigungen: {
    baseWord: 'Freizeitbeschäftigung',
    displayBaseForm: 'die Freizeitbeschäftigung',
    grammaticalForm: 'Plural (Bentuk Jamak)',
    explanation: 'Bentuk jamak dari "die Freizeitbeschäftigung" ("die Freizeitbeschäftigungen").',
    caseOrTense: 'Plural',
  },
  arbeiten_nomen: {
    baseWord: 'Arbeit',
    displayBaseForm: 'die Arbeit',
    grammaticalForm: 'Plural Nomen / Jamak',
    explanation: 'Bentuk jamak dari kata benda feminin "die Arbeit" ("die Arbeiten" = tugas-tugas/karya-karya kerja).',
    caseOrTense: 'Plural',
  },
  studenten: {
    baseWord: 'Student',
    displayBaseForm: 'der Student',
    grammaticalForm: 'N-Deklination (Akkusativ / Dativ / Genitiv / Plural)',
    explanation: 'Kata benda maskulin "der Student" mengalami N-Deklination (penambahan akhiran "-en" di semua kasus kecuali Nominativ tunggal) serta pada bentuk jamak ("die Studenten").',
    caseOrTense: 'Deklination',
  },
  kollegen: {
    baseWord: 'Kollege',
    displayBaseForm: 'der Kollege',
    grammaticalForm: 'N-Deklination (Akkusativ / Dativ / Genitiv / Plural)',
    explanation: 'Kata benda maskulin lemah "der Kollege" mendapat akhiran "-n" di semua kasus selain Nominativ Singular ("den Kollegen", "die Kollegen").',
    caseOrTense: 'Deklination',
  },

  // --- Verben: Präteritum, Partizip II, Konjugasi Präsens ---
  ging: {
    baseWord: 'gehen',
    displayBaseForm: 'gehen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau tulis (Präteritum) untuk subjek "ich" atau "er/sie/es" dari kata kerja kuat tak beraturan "gehen" (ich/er ging = saya/dia pergi).',
    caseOrTense: 'Präteritum',
  },
  gingen: {
    baseWord: 'gehen',
    displayBaseForm: 'gehen',
    grammaticalForm: 'Präteritum (1. / 3. Person Plural)',
    explanation: 'Bentuk lampau tulis (Präteritum) untuk subjek "wir" atau "sie/Sie" dari kata kerja "gehen" (wir gingen = kami pergi).',
    caseOrTense: 'Präteritum',
  },
  gegangen: {
    baseWord: 'gehen',
    displayBaseForm: 'gehen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk partisip lampau (Partizip II) dari kata kerja "gehen". Digunakan untuk membentuk tenses Perfekt bersama Hilfsverb "sein" ("ich bin gegangen").',
    caseOrTense: 'Partizip II',
  },
  geht: {
    baseWord: 'gehen',
    displayBaseForm: 'gehen',
    grammaticalForm: 'Präsens (3. Person Singular / 2. Person Plural)',
    explanation: 'Konjugasi waktu sekarang (Präsens) untuk "er/sie/es geht" atau "ihr geht". Bentuk infinitif dasarnya adalah "gehen".',
    caseOrTense: 'Präsens',
  },
  kam: {
    baseWord: 'kommen',
    displayBaseForm: 'kommen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari kata kerja "kommen" (er kam = dia datang). Bentuk dasarnya adalah "kommen".',
    caseOrTense: 'Präteritum',
  },
  kamen: {
    baseWord: 'kommen',
    displayBaseForm: 'kommen',
    grammaticalForm: 'Präteritum Plural',
    explanation: 'Bentuk lampau Präteritum jamak dari kata kerja "kommen" (sie kamen = mereka datang).',
    caseOrTense: 'Präteritum',
  },
  gekommen: {
    baseWord: 'kommen',
    displayBaseForm: 'kommen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "kommen", berpasangan dengan Hilfsverb "sein" ("er ist gekommen").',
    caseOrTense: 'Partizip II',
  },
  kommt: {
    baseWord: 'kommen',
    displayBaseForm: 'kommen',
    grammaticalForm: 'Präsens (3. Person Singular)',
    explanation: 'Konjugasi Präsens orang ke-3 tunggal (er/sie/es kommt). Bentuk infinitifnya adalah "kommen".',
    caseOrTense: 'Präsens',
  },
  sah: {
    baseWord: 'sehen',
    displayBaseForm: 'sehen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari kata kerja tak beraturan "sehen" (ich/er sah = saya/dia melihat). Bentuk dasarnya adalah "sehen".',
    caseOrTense: 'Präteritum',
  },
  sahen: {
    baseWord: 'sehen',
    displayBaseForm: 'sehen',
    grammaticalForm: 'Präteritum Plural',
    explanation: 'Bentuk lampau Präteritum jamak dari kata kerja "sehen" (wir/sie sahen).',
    caseOrTense: 'Präteritum',
  },
  gesehen: {
    baseWord: 'sehen',
    displayBaseForm: 'sehen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "sehen", berpasangan dengan Hilfsverb "haben" ("ich habe gesehen").',
    caseOrTense: 'Partizip II',
  },
  sieht: {
    baseWord: 'sehen',
    displayBaseForm: 'sehen',
    grammaticalForm: 'Präsens (3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "er/sie/es sieht". Kata kerja kuat "sehen" mengalami pergantian vokal pokok dari e menjadi ie pada orang ke-2 dan ke-3 tunggal.',
    caseOrTense: 'Präsens',
  },
  sprach: {
    baseWord: 'sprechen',
    displayBaseForm: 'sprechen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari kata kerja "sprechen" (er sprach = dia berbicara). Bentuk dasarnya adalah "sprechen".',
    caseOrTense: 'Präteritum',
  },
  sprachen: {
    baseWord: 'sprechen',
    displayBaseForm: 'sprechen',
    grammaticalForm: 'Präteritum Plural',
    explanation: 'Bentuk lampau Präteritum jamak dari kata kerja "sprechen" (sie sprachen = mereka berbicara).',
    caseOrTense: 'Präteritum',
  },
  gesprochen: {
    baseWord: 'sprechen',
    displayBaseForm: 'sprechen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "sprechen" ("wir haben gesprochen").',
    caseOrTense: 'Partizip II',
  },
  spricht: {
    baseWord: 'sprechen',
    displayBaseForm: 'sprechen',
    grammaticalForm: 'Präsens (3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "er/sie/es spricht". Vokal e berganti menjadi i (Vokalwechsel). Bentuk dasarnya adalah "sprechen".',
    caseOrTense: 'Präsens',
  },
  aß: {
    baseWord: 'essen',
    displayBaseForm: 'essen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "essen" (ich/er aß = saya/dia makan). Bentuk dasarnya adalah "essen".',
    caseOrTense: 'Präteritum',
  },
  gegessen: {
    baseWord: 'essen',
    displayBaseForm: 'essen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "essen" ("ich habe gegessen").',
    caseOrTense: 'Partizip II',
  },
  isst: {
    baseWord: 'essen',
    displayBaseForm: 'essen',
    grammaticalForm: 'Präsens (2. / 3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "du isst" atau "er/sie/es isst". Bentuk dasarnya adalah "essen".',
    caseOrTense: 'Präsens',
  },
  trank: {
    baseWord: 'trinken',
    displayBaseForm: 'trinken',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "trinken" (er trank = dia minum). Bentuk dasarnya adalah "trinken".',
    caseOrTense: 'Präteritum',
  },
  getrunken: {
    baseWord: 'trinken',
    displayBaseForm: 'trinken',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "trinken" ("ich habe getrunken").',
    caseOrTense: 'Partizip II',
  },
  schrieb: {
    baseWord: 'schreiben',
    displayBaseForm: 'schreiben',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "schreiben" (er schrieb = dia menulis). Bentuk dasarnya adalah "schreiben".',
    caseOrTense: 'Präteritum',
  },
  geschrieben: {
    baseWord: 'schreiben',
    displayBaseForm: 'schreiben',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "schreiben" ("er hat geschrieben").',
    caseOrTense: 'Partizip II',
  },
  fuhr: {
    baseWord: 'fahren',
    displayBaseForm: 'fahren',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "fahren" (ich/er fuhr = saya/dia berkendara). Bentuk dasarnya adalah "fahren".',
    caseOrTense: 'Präteritum',
  },
  gefahren: {
    baseWord: 'fahren',
    displayBaseForm: 'fahren',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "fahren" ("wir sind gefahren"). Berpasangan dengan Hilfsverb "sein".',
    caseOrTense: 'Partizip II',
  },
  fährt: {
    baseWord: 'fahren',
    displayBaseForm: 'fahren',
    grammaticalForm: 'Präsens (3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "er/sie/es fährt". Vokal a mendapat Umlaut ä pada orang ke-2 dan ke-3 tunggal. Bentuk dasarnya adalah "fahren".',
    caseOrTense: 'Präsens',
  },
  las: {
    baseWord: 'lesen',
    displayBaseForm: 'lesen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "lesen" (er las = dia membaca). Bentuk dasarnya adalah "lesen".',
    caseOrTense: 'Präteritum',
  },
  gelesen: {
    baseWord: 'lesen',
    displayBaseForm: 'lesen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "lesen" ("ich habe gelesen").',
    caseOrTense: 'Partizip II',
  },
  liest: {
    baseWord: 'lesen',
    displayBaseForm: 'lesen',
    grammaticalForm: 'Präsens (2. / 3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "du liest" atau "er/sie/es liest". Vokal e berganti menjadi ie. Bentuk dasarnya adalah "lesen".',
    caseOrTense: 'Präsens',
  },
  nahm: {
    baseWord: 'nehmen',
    displayBaseForm: 'nehmen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "nehmen" (er nahm = dia mengambil). Bentuk dasarnya adalah "nehmen".',
    caseOrTense: 'Präteritum',
  },
  genommen: {
    baseWord: 'nehmen',
    displayBaseForm: 'nehmen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "nehmen" ("er hat genommen").',
    caseOrTense: 'Partizip II',
  },
  nimmt: {
    baseWord: 'nehmen',
    displayBaseForm: 'nehmen',
    grammaticalForm: 'Präsens (3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "er/sie/es nimmt". Bentuk dasarnya adalah "nehmen".',
    caseOrTense: 'Präsens',
  },
  gab: {
    baseWord: 'geben',
    displayBaseForm: 'geben',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "geben" (es gab = ada / terdapat). Bentuk dasarnya adalah "geben".',
    caseOrTense: 'Präteritum',
  },
  gegeben: {
    baseWord: 'geben',
    displayBaseForm: 'geben',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "geben" ("er hat gegeben").',
    caseOrTense: 'Partizip II',
  },
  gibt: {
    baseWord: 'geben',
    displayBaseForm: 'geben',
    grammaticalForm: 'Präsens (3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "er/sie/es gibt" (atau frasa populer "es gibt" = ada/terdapat). Bentuk dasarnya adalah "geben".',
    caseOrTense: 'Präsens',
  },
  half: {
    baseWord: 'helfen',
    displayBaseForm: 'helfen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "helfen" (er half = dia membantu). Bentuk dasarnya adalah "helfen".',
    caseOrTense: 'Präteritum',
  },
  geholfen: {
    baseWord: 'helfen',
    displayBaseForm: 'helfen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "helfen" ("sie hat geholfen").',
    caseOrTense: 'Partizip II',
  },
  hilft: {
    baseWord: 'helfen',
    displayBaseForm: 'helfen',
    grammaticalForm: 'Präsens (3. Person Singular)',
    explanation: 'Konjugasi Präsens untuk "er/sie/es hilft". Menuntut kasus Dativ (+ Dativ). Bentuk dasarnya adalah "helfen".',
    caseOrTense: 'Präsens',
  },
  arbeitete: {
    baseWord: 'arbeiten',
    displayBaseForm: 'arbeiten',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari kata kerja teratur "arbeiten" (ich/er arbeitete = saya/dia bekerja). Bentuk dasarnya adalah "arbeiten".',
    caseOrTense: 'Präteritum',
  },
  gearbeitet: {
    baseWord: 'arbeiten',
    displayBaseForm: 'arbeiten',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk partisip Partizip II dari kata kerja "arbeiten" ("ich habe gearbeitet").',
    caseOrTense: 'Partizip II',
  },
  arbeitet: {
    baseWord: 'arbeiten',
    displayBaseForm: 'arbeiten',
    grammaticalForm: 'Präsens (3. Person Singular / 2. Person Plural)',
    explanation: 'Konjugasi waktu sekarang Präsens (er arbeitet = dia bekerja). Bentuk infinitifnya adalah "arbeiten".',
    caseOrTense: 'Präsens',
  },
  machte: {
    baseWord: 'machen',
    displayBaseForm: 'machen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari kata kerja teratur "machen" (er machte = dia membuat/melakukan). Bentuk dasarnya adalah "machen".',
    caseOrTense: 'Präteritum',
  },
  gemacht: {
    baseWord: 'machen',
    displayBaseForm: 'machen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "machen" ("er hat gemacht").',
    caseOrTense: 'Partizip II',
  },
  lernte: {
    baseWord: 'lernen',
    displayBaseForm: 'lernen',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "lernen" (er lernte = dia belajar). Bentuk dasarnya adalah "lernen".',
    caseOrTense: 'Präteritum',
  },
  gelernt: {
    baseWord: 'lernen',
    displayBaseForm: 'lernen',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "lernen" ("ich habe gelernt").',
    caseOrTense: 'Partizip II',
  },
  wäre: {
    baseWord: 'sein',
    displayBaseForm: 'sein',
    grammaticalForm: 'Konjunktiv II (Pengandaian)',
    explanation: 'Bentuk Konjunktiv II dari "sein" (wäre = sekiranya / seandainya saya/dia adalah). Digunakan untuk pengandaian sopan atau hipotesis.',
    caseOrTense: 'Konjunktiv II',
  },
  war: {
    baseWord: 'sein',
    displayBaseForm: 'sein',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "sein" (ich/er war = saya/dia dulu berada/adalah). Bentuk dasarnya adalah "sein".',
    caseOrTense: 'Präteritum',
  },
  waren: {
    baseWord: 'sein',
    displayBaseForm: 'sein',
    grammaticalForm: 'Präteritum Plural',
    explanation: 'Bentuk lampau Präteritum jamak dari "sein" (wir/sie waren).',
    caseOrTense: 'Präteritum',
  },
  gewesen: {
    baseWord: 'sein',
    displayBaseForm: 'sein',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "sein" ("ich bin gewesen"). Berpasangan dengan Hilfsverb "sein".',
    caseOrTense: 'Partizip II',
  },
  hätte: {
    baseWord: 'haben',
    displayBaseForm: 'haben',
    grammaticalForm: 'Konjunktiv II (Pengandaian)',
    explanation: 'Bentuk Konjunktiv II dari "haben" (hätte = seandainya memiliki). Bentuk dasarnya adalah "haben".',
    caseOrTense: 'Konjunktiv II',
  },
  hatte: {
    baseWord: 'haben',
    displayBaseForm: 'haben',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "haben" (er hatte = dia dulu memiliki). Bentuk dasarnya adalah "haben".',
    caseOrTense: 'Präteritum',
  },
  gehabt: {
    baseWord: 'haben',
    displayBaseForm: 'haben',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "haben" ("ich habe gehabt").',
    caseOrTense: 'Partizip II',
  },
  wurde: {
    baseWord: 'werden',
    displayBaseForm: 'werden',
    grammaticalForm: 'Präteritum (1. / 3. Person Singular)',
    explanation: 'Bentuk lampau Präteritum dari "werden" (er wurde = dia menjadi / kalimat pasif lampau). Bentuk dasarnya adalah "werden".',
    caseOrTense: 'Präteritum',
  },
  geworden: {
    baseWord: 'werden',
    displayBaseForm: 'werden',
    grammaticalForm: 'Partizip II (Perfekt)',
    explanation: 'Bentuk Partizip II dari "werden" ("er ist geworden").',
    caseOrTense: 'Partizip II',
  },
  würde: {
    baseWord: 'werden',
    displayBaseForm: 'werden',
    grammaticalForm: 'Konjunktiv II (Pengandaian / Kata Bantu)',
    explanation: 'Bentuk pengandaian Konjunktiv II dari "werden" (würde + Infinitiv = akan kiranya / sudilah). Bentuk dasarnya adalah "werden".',
    caseOrTense: 'Konjunktiv II',
  },

  // --- Adjektiv: Komparasi & Deklinasi ---
  besser: {
    baseWord: 'gut',
    displayBaseForm: 'gut',
    grammaticalForm: 'Komparativ (Lebih Baik)',
    explanation: 'Bentuk perbandingan tingkat lebih (Komparativ) tidak beraturan dari kata sifat "gut" (gut -> besser -> am besten).',
    caseOrTense: 'Komparativ',
  },
  besten: {
    baseWord: 'gut',
    displayBaseForm: 'gut',
    grammaticalForm: 'Superlativ (Paling Baik)',
    explanation: 'Bentuk tingkat paling/terbaik (Superlativ) dari "gut" ("am besten" / "der beste").',
    caseOrTense: 'Superlativ',
  },
  beste: {
    baseWord: 'gut',
    displayBaseForm: 'gut',
    grammaticalForm: 'Superlativ Deklination (Terbaik)',
    explanation: 'Bentuk Superlativ atributif dari kata sifat "gut" ("die beste Lösung").',
    caseOrTense: 'Superlativ',
  },
  größer: {
    baseWord: 'groß',
    displayBaseForm: 'groß',
    grammaticalForm: 'Komparativ (Lebih Besar)',
    explanation: 'Bentuk perbandingan Komparativ dari kata sifat "groß". Vokal o mendapat Umlaut ö (groß -> größer -> am größten).',
    caseOrTense: 'Komparativ',
  },
  größte: {
    baseWord: 'groß',
    displayBaseForm: 'groß',
    grammaticalForm: 'Superlativ Deklination (Terbesar)',
    explanation: 'Bentuk Superlativ atributif dari kata sifat "groß" ("der größte Platz").',
    caseOrTense: 'Superlativ',
  },
  höher: {
    baseWord: 'hoch',
    displayBaseForm: 'hoch',
    grammaticalForm: 'Komparativ (Lebih Tinggi)',
    explanation: 'Bentuk Komparativ tidak beraturan dari kata sifat "hoch" (huruf c melunak hilang: hoch -> höher -> am höchsten).',
    caseOrTense: 'Komparativ',
  },
  höchste: {
    baseWord: 'hoch',
    displayBaseForm: 'hoch',
    grammaticalForm: 'Superlativ (Tertinggi)',
    explanation: 'Bentuk Superlativ dari "hoch" ("die höchste Priorität").',
    caseOrTense: 'Superlativ',
  },
  mehr: {
    baseWord: 'viel',
    displayBaseForm: 'viel',
    grammaticalForm: 'Komparativ (Lebih Banyak)',
    explanation: 'Bentuk Komparativ tidak beraturan dari "viel" (viel -> mehr -> am meisten).',
    caseOrTense: 'Komparativ',
  },
  meisten: {
    baseWord: 'viel',
    displayBaseForm: 'viel',
    grammaticalForm: 'Superlativ (Paling Banyak / Sebagian Besar)',
    explanation: 'Bentuk Superlativ dari "viel" ("die meisten Menschen").',
    caseOrTense: 'Superlativ',
  },
  lieber: {
    baseWord: 'gern',
    displayBaseForm: 'gern / gerne',
    grammaticalForm: 'Komparativ (Lebih Suka / Lebih Gemar)',
    explanation: 'Bentuk Komparativ dari adverb kesukaan "gern/gerne" (gern -> lieber -> am liebsten).',
    caseOrTense: 'Komparativ',
  },
  liebsten: {
    baseWord: 'gern',
    displayBaseForm: 'gern / gerne',
    grammaticalForm: 'Superlativ (Paling Suka / Paling Gemar)',
    explanation: 'Bentuk Superlativ dari "gern/gerne" ("am liebsten").',
    caseOrTense: 'Superlativ',
  },
  schöner: {
    baseWord: 'schön',
    displayBaseForm: 'schön',
    grammaticalForm: 'Komparativ (Lebih Indah)',
    explanation: 'Bentuk Komparativ dari kata sifat "schön" ("schöner als...").',
    caseOrTense: 'Komparativ',
  },
  schönen: {
    baseWord: 'schön',
    displayBaseForm: 'schön',
    grammaticalForm: 'Deklinasi Adjektiv (Akkusativ Maskulin / Dativ)',
    explanation: 'Bentuk terdeklinasi dari kata sifat "schön" dengan akhiran "-en" (misal: "einen schönen Tag", "mit den schönen Blumen"). Bentuk dasarnya adalah "schön".',
    caseOrTense: 'Deklination',
  },
  schönem: {
    baseWord: 'schön',
    displayBaseForm: 'schön',
    grammaticalForm: 'Deklinasi Adjektiv (Dativ Singular)',
    explanation: 'Bentuk deklinasi kata sifat kuat dalam kasus Dativ maskulin/netral ("bei schönem Wetter"). Bentuk dasarnya adalah "schön".',
    caseOrTense: 'Deklination',
  },
};

/**
 * Intelligent detector for inflected German words (Grammatical Cases, Verbs, Plurals, Declensions)
 */
export function detectInflectedGermanForm(rawInput: string): InflectionInfo | null {
  const trimmed = rawInput.trim();
  if (!trimmed) return null;
  const lower = trimmed.toLowerCase();

  // 1. Check exact phrase with article or preposition (e.g. "dem Mann", "des Hauses", "im Haus", "zum Arzt")
  const words = trimmed.split(/\s+/).filter(Boolean);

  // Pattern: [Artikel Kasus] [Nomen] -> e.g. "dem Mann", "des Hauses", "den Kindern", "einem Freund"
  if (words.length === 2) {
    const art = words[0].toLowerCase();
    const noun = words[1];
    const nounLower = noun.toLowerCase();

    // Dativ: dem, einem, zur, zum, beim, vom, im, am
    if (art === 'dem' || art === 'einem') {
      const baseWord = noun.replace(/(es|s)$/i, '');
      const baseDict = GERMAN_DICTIONARY[baseWord.toLowerCase()] || GERMAN_DICTIONARY[nounLower];
      const realArticle = baseDict?.grammar?.type === 'nomen' ? baseDict.grammar.data.artikel : (baseWord.endsWith('e') ? 'die' : 'der');
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm: `${realArticle} ${noun}`,
        baseWord: noun,
        grammaticalForm: 'Kasus Dativ Singular (Maskulin / Neutral)',
        explanation: `Frasa "${trimmed}" berada dalam kasus Dativ tunggal dengan artikel "${art}". Kasus Dativ digunakan untuk objek penyerta (kepada siapa), serta setelah preposisi Dativ (aus, bei, mit, nach, von, zu). Bentuk nominatif dasarnya adalah "${realArticle} ${noun}".`,
        originalCaseOrTense: 'Dativ',
      };
    }

    // Akkusativ maskulin atau Dativ plural: den, einen
    if (art === 'den' || art === 'einen') {
      const isPluralDativ = nounLower.endsWith('n') && INFLECTED_LOOKUP[nounLower];
      const baseNoun = isPluralDativ ? INFLECTED_LOOKUP[nounLower].baseWord : noun;
      const baseForm = isPluralDativ ? INFLECTED_LOOKUP[nounLower].displayBaseForm : `der ${noun}`;
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm,
        baseWord: baseNoun,
        grammaticalForm: art === 'einen' ? 'Kasus Akkusativ Singular (Maskulin)' : 'Kasus Akkusativ Singular Maskulin atau Dativ Plural',
        explanation: `Frasa "${trimmed}" menggunakan artikel "${art}". Dalam bahasa Jerman, artikel "einen/den" menandakan kasus Akkusativ maskulin (objek penderita langsung) atau kasus Dativ jamak. Bentuk dasar kamusnya adalah "${baseForm}".`,
        originalCaseOrTense: 'Akkusativ',
      };
    }

    // Genitiv: des, eines
    if (art === 'des' || art === 'eines') {
      const baseNoun = noun.replace(/(es|s)$/i, '');
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm: `der/das ${baseNoun}`,
        baseWord: baseNoun,
        grammaticalForm: 'Kasus Genitiv Singular (Kepemilikan)',
        explanation: `Frasa "${trimmed}" berada dalam kasus Genitiv (menyatakan kepemilikan / 'milik dari'). Kata benda maskulin dan netral dalam Genitiv mendapat sufiks "-s" atau "-es" ("${noun}"). Bentuk dasar kamusnya adalah "${baseNoun}".`,
        originalCaseOrTense: 'Genitiv',
      };
    }

    // Preposisi kontraksi: im, am, vom, zum, zur, beim
    if (/^(im|am|vom|zum|zur|beim)$/i.test(art)) {
      const contractionExp: Record<string, string> = {
        im: 'in + dem (Dativ)',
        am: 'an + dem (Dativ)',
        vom: 'von + dem (Dativ)',
        zum: 'zu + dem (Dativ)',
        zur: 'zu + der (Dativ)',
        beim: 'bei + dem (Dativ)',
      };
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm: noun,
        baseWord: noun,
        grammaticalForm: `Preposisi Kasus Dativ (${contractionExp[art] || art})`,
        explanation: `"${art}" adalah singkatan leburan dari preposisi dan artikel (${contractionExp[art] || ''}). Menuntut kasus Dativ pada kata benda setelahnya ("${noun}").`,
        originalCaseOrTense: 'Dativ',
      };
    }
  }

  // 2. Direct lookup in curated inflection table
  if (INFLECTED_LOOKUP[lower]) {
    const item = INFLECTED_LOOKUP[lower];
    return {
      isInflectedForm: true,
      searchedForm: trimmed,
      baseForm: item.displayBaseForm,
      baseWord: item.baseWord,
      grammaticalForm: item.grammaticalForm,
      explanation: item.explanation,
      originalCaseOrTense: item.caseOrTense,
    };
  }

  // 3. Regular Verb: Partizip II (ge-[stem]-t) -> e.g. "gearbeitet" -> "arbeiten", "gemacht" -> "machen"
  if (lower.startsWith('ge') && lower.endsWith('t') && lower.length >= 6) {
    const stem = lower.slice(2, -1);
    const candidateInf = stem.endsWith('e') ? stem + 'n' : stem + 'en';
    if (GERMAN_DICTIONARY[candidateInf] || GERMAN_THESAURUS[candidateInf]) {
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm: candidateInf,
        baseWord: candidateInf,
        grammaticalForm: 'Partizip II (Perfekt)',
        explanation: `Kata "${trimmed}" adalah bentuk partisip lampau (Partizip II) dari kata kerja teratur "${candidateInf}". Terbentuk dari awalan "ge-" + kata dasar "${stem}" + akhiran "-t". Digunakan pada bentuk kalimat Perfekt ("hat/ist ${trimmed}").`,
        originalCaseOrTense: 'Partizip II',
      };
    }
  }

  // 4. Regular Verb: Präteritum (-te, -ten, -test) -> e.g. "arbeitete", "machte", "kaufte"
  if (/(te|ten|test|tet)$/i.test(lower) && lower.length >= 6) {
    const stem = lower.replace(/(te|ten|test|tet)$/i, '');
    const candidateInf = stem.endsWith('e') ? stem + 'n' : stem + 'en';
    if (GERMAN_DICTIONARY[candidateInf] || GERMAN_THESAURUS[candidateInf]) {
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm: candidateInf,
        baseWord: candidateInf,
        grammaticalForm: 'Präteritum (Bentuk Lampau Tulisan)',
        explanation: `Kata "${trimmed}" adalah konjugasi waktu lampau (Präteritum) dari kata kerja "${candidateInf}". Terbentuk dari kata dasar "${stem}" ditambah akhiran lampau teratur "-te/-ten". Bentuk kamus dasarnya adalah "${candidateInf}".`,
        originalCaseOrTense: 'Präteritum',
      };
    }
  }

  // 5. Adjective declension endings: -en, -em, -es, -er
  if (/(en|em|es|er)$/i.test(lower) && lower.length >= 5) {
    const stem = lower.replace(/(en|em|es|er)$/i, '');
    if (GERMAN_DICTIONARY[stem] && GERMAN_DICTIONARY[stem].wordClass === 'Adjektiv') {
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm: stem,
        baseWord: stem,
        grammaticalForm: 'Deklinasi Kata Sifat (Adjektivdeklination)',
        explanation: `Kata "${trimmed}" adalah kata sifat "${stem}" yang mengalami penyesuaian akhiran deklinasi sesuai gender, jumlah, dan kasus kata benda yang diterangkannya. Bentuk dasar leksikalnya adalah "${stem}".`,
        originalCaseOrTense: 'Deklination',
      };
    }
  }

  // 6. Plural Noun generic test: word ends with -en or -er or -e and stem matches a dictionary noun
  if (/(en|er|e)$/i.test(lower) && lower.length >= 5) {
    const stem = lower.replace(/(en|er|e)$/i, '');
    if (GERMAN_DICTIONARY[stem] && GERMAN_DICTIONARY[stem].wordClass === 'Nomen') {
      const art = GERMAN_DICTIONARY[stem].grammar.type === 'nomen' ? GERMAN_DICTIONARY[stem].grammar.data.artikel : 'die';
      return {
        isInflectedForm: true,
        searchedForm: trimmed,
        baseForm: `${art} ${GERMAN_DICTIONARY[stem].word}`,
        baseWord: GERMAN_DICTIONARY[stem].word,
        grammaticalForm: 'Plural (Bentuk Jamak)',
        explanation: `Kata "${trimmed}" adalah bentuk jamak (Plural) dari kata benda "${art} ${GERMAN_DICTIONARY[stem].word}". Bentuk dasar tunggalnya (Singular) berartikel "${art}".`,
        originalCaseOrTense: 'Plural',
      };
    }
  }

  return null;
}


// =========================================================================
// 2. TYPO DETECTION — SISTEM DETEKSI TYPO LANJUTAN
// =========================================================================

/**
 * Damerau-Levenshtein distance (insertion, deletion, substitution, transposition)
 */
export function damerauLevenshteinDistance(source: string, target: string): number {
  const s = source.toLowerCase();
  const t = target.toLowerCase();
  const sLen = s.length;
  const tLen = t.length;

  if (sLen === 0) return tLen;
  if (tLen === 0) return sLen;
  if (s === t) return 0;

  const matrix: number[][] = [];
  for (let i = 0; i <= sLen; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= tLen; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
      if (i > 1 && j > 1 && s[i - 1] === t[j - 2] && s[i - 2] === t[j - 1]) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost);
      }
    }
  }

  return matrix[sLen][tLen];
}

/**
 * Normalize umlaut transliterations and common substitutions so
 * "ae"→"ä", "oe"→"ö", "ue"→"ü", "ss"→"ß", "sz"→"ß", etc.
 * Returns normalized lowercase string.
 */
function normalizeGerman(input: string): string {
  return input
    .toLowerCase()
    .replace(/ae/g, 'ä')
    .replace(/oe/g, 'ö')
    .replace(/ue/g, 'ü')
    .replace(/sz/g, 'ß')
    .replace(/ss/g, 'ß')   // ss->ß for phonetic matching only
    .replace(/[àáâã]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõ]/g, 'o')
    .replace(/[ùúûü]/g, 'ü')
    .replace(/ñ/g, 'n');
}

/**
 * Also normalizes the reverse: ä→ae, ö→oe, ü→ue, ß→ss for matching
 * users who typed without umlauts
 */
function latinizeGerman(input: string): string {
  return input
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');
}

/**
 * Smart distance: calculates minimum distance considering both
 * normalized forms (umlaut-aware) + bonus for matching first letter
 */
function smartDistance(input: string, candidate: string): number {
  const a = input.toLowerCase();
  const b = candidate.toLowerCase();

  // Direct distance
  const d1 = damerauLevenshteinDistance(a, b);

  // Normalized forms (ae→ä etc.)
  const aNorm = normalizeGerman(a);
  const bNorm = normalizeGerman(b);
  const d2 = damerauLevenshteinDistance(aNorm, bNorm);

  // Latin forms (ä→ae etc.)
  const aLat = latinizeGerman(a);
  const bLat = latinizeGerman(b);
  const d3 = damerauLevenshteinDistance(aLat, bLat);

  return Math.min(d1, d2, d3);
}

/**
 * 300+ curated German typo pairs covering the most common mistakes
 * made by Indonesian/English speakers learning German
 */
const COMMON_TYPOS: Record<string, { target: string; reason: string }> = {
  // === FREIZEIT & ALLTAG ===
  freziet: { target: 'Freizeit', reason: 'Tertukar susunan huruf "ei" dan "ie" pada "Freizeit" (waktu luang).' },
  frieziet: { target: 'Freizeit', reason: 'Kesalahan ejaan pada "Freizeit".' },
  freiziet: { target: 'Freizeit', reason: 'Transposisi huruf "ie" seharusnya "ei" di akhir kata.' },
  freizeit: { target: 'Freizeit', reason: 'Bentuk huruf kecil — kata benda Jerman selalu kapital.' },
  ferizeit: { target: 'Freizeit', reason: 'Tertukar vokal "e" dan "i" pada kata "Freizeit".' },

  // === ARBEIT ===
  arbiet: { target: 'Arbeit', reason: 'Tertukar huruf "ie" yang seharusnya "ei" pada kata "Arbeit" (pekerjaan).' },
  arbet: { target: 'Arbeit', reason: 'Kurang huruf "i" pada kata "Arbeit".' },
  arbait: { target: 'Arbeit', reason: 'Vokal "ai" yang seharusnya "ei" pada kata "Arbeit".' },
  arbit: { target: 'Arbeit', reason: 'Kurang vokal pada kata "Arbeit".' },

  // === SCHÖN ===
  shon: { target: 'schön', reason: 'Kurang huruf "c" pada kluster konsonan "sch" dan Umlaut ö.' },
  shön: { target: 'schön', reason: 'Kurang huruf "c" pada kluster konsonan Jerman "sch".' },
  scon: { target: 'schön', reason: 'Penulisan yang salah untuk kluster "sch" — seharusnya bukan "sc".' },
  schn: { target: 'schön', reason: 'Kurang vokal ö pada kata "schön".' },
  shcön: { target: 'schön', reason: 'Transposisi huruf pada kluster "sch".' },
  schoen: { target: 'schön', reason: 'Transliterasi "oe"→"ö" pada kata "schön" (cantik/indah).' },
  schon: { target: 'schön', reason: 'Penulisan tanpa Umlaut — apakah maksud Anda "schön" (cantik) atau "schon" (sudah)?.' },

  // === DEUTSCHLAND & NEGARA ===
  deutchland: { target: 'Deutschland', reason: 'Kurang huruf "s" pada "Deutsch" dalam kata majemuk "Deutschland".' },
  deutchsland: { target: 'Deutschland', reason: 'Transposisi konsonan pada kata "Deutschland".' },
  deutschand: { target: 'Deutschland', reason: 'Kurang huruf "l" pada "Deutschland".' },
  dutchland: { target: 'Deutschland', reason: 'Pengaruh bahasa Inggris "Dutch" — dalam bahasa Jerman ditulis "Deutsch".' },
  deitschland: { target: 'Deutschland', reason: 'Kesalahan vokal "ei" seharusnya "eu" pada "Deutsch".' },
  deuschland: { target: 'Deutschland', reason: 'Kurang huruf "t" pada "Deutschland".' },
  ostereich: { target: 'Österreich', reason: 'Kurang Umlaut "Ö" dan huruf "r" ganda pada "Österreich" (Austria).' },
  osterreich: { target: 'Österreich', reason: 'Transliterasi "o"→"ö" dan penulisan tanpa Umlaut pada "Österreich".' },
  schweitz: { target: 'Schweiz', reason: 'Kelebihan huruf "t" pada kata "Schweiz" (Swiss).' },

  // === WÖRTERBUCH & BUKU ===
  worterbuch: { target: 'Wörterbuch', reason: 'Transliterasi "o"→"ö" — kurang Umlaut pada "Wörterbuch" (kamus).' },
  worterbuh: { target: 'Wörterbuch', reason: 'Kurang huruf "c" dan Umlaut pada "Wörterbuch".' },
  worterbuc: { target: 'Wörterbuch', reason: 'Kurang huruf "h" terakhir pada "Wörterbuch".' },
  wortebuch: { target: 'Wörterbuch', reason: 'Kurang huruf "r" pada "Wörterbuch".' },

  // === STUDIEREN ===
  studirn: { target: 'studieren', reason: 'Kurang vokal dan akhiran "-ieren" pada kata kerja "studieren".' },
  studirren: { target: 'studieren', reason: 'Konsonan "r" ganda yang tidak perlu pada "studieren".' },
  studiern: { target: 'studieren', reason: 'Transposisi huruf "e" dan "r" pada akhiran "-ieren" kata "studieren".' },
  studieren: { target: 'studieren', reason: 'Sudah benar — bentuk infinitif kata kerja "studieren".' },

  // === VERSTEHEN ===
  versthen: { target: 'verstehen', reason: 'Kurang vokal "e" pada kata kerja "verstehen" (memahami).' },
  vershtehen: { target: 'verstehen', reason: 'Salah ejaan konsonan pada "verstehen".' },
  fershtehen: { target: 'verstehen', reason: 'Pengaruh pelafalan "f" pada huruf "v" dalam "verstehen".' },
  verstehn: { target: 'verstehen', reason: 'Kurang huruf "e" terakhir pada infinitif "verstehen".' },
  versthan: { target: 'verstehen', reason: 'Vokal yang salah pada kata "verstehen".' },

  // === SPRECHEN ===
  sprechen: { target: 'sprechen', reason: 'Sudah benar — kata kerja "sprechen" (berbicara).' },
  shprechen: { target: 'sprechen', reason: 'Huruf "sh" tidak ada dalam ejaan Jerman — gunakan "sp" atau "sch".' },
  sprecen: { target: 'sprechen', reason: 'Kurang huruf "h" pada "sprechen".' },
  sprechn: { target: 'sprechen', reason: 'Kurang vokal "e" pada akhiran "sprechen".' },
  sprehn: { target: 'sprechen', reason: 'Kurang konsonan "c" dan vokal pada "sprechen".' },

  // === SCHREIBEN ===
  schreiben: { target: 'schreiben', reason: 'Sudah benar — kata kerja "schreiben" (menulis).' },
  shriben: { target: 'schreiben', reason: 'Kurang kluster "sch" dan vokal "ei" pada "schreiben".' },
  shreiben: { target: 'schreiben', reason: 'Kluster konsonan "sch" seharusnya tidak "sh" dalam bahasa Jerman.' },
  schriben: { target: 'schreiben', reason: 'Kurang vokal "e" pada "schreiben".' },

  // === INTERESSANT ===
  interesant: { target: 'interessant', reason: 'Kurang konsonan ganda "-ss-" pada kata "interessant" (menarik).' },
  interresant: { target: 'interessant', reason: 'Kelebihan "r" ganda — yang benar satu "r" dan dua "s" pada "interessant".' },
  intresant: { target: 'interessant', reason: 'Kurang suku kata "-er-" dan konsonan ganda pada "interessant".' },
  interresannt: { target: 'interessant', reason: 'Kelebihan konsonan ganda pada "interessant".' },
  interessannt: { target: 'interessant', reason: 'Kelebihan huruf "n" ganda — akhiran yang benar adalah "-sant".' },

  // === FREUNDSCHAFT ===
  freunschaft: { target: 'Freundschaft', reason: 'Kurang huruf "d" pada kata "Freundschaft" (persahabatan).' },
  freudschaft: { target: 'Freundschaft', reason: 'Tertukar "n" dengan "u" pada kata "Freundschaft".' },
  frundschaft: { target: 'Freundschaft', reason: 'Kurang vokal "e" pada kata "Freundschaft".' },
  freundshaft: { target: 'Freundschaft', reason: 'Kurang huruf "c" pada kluster "sch" dalam "Freundschaft".' },

  // === FLUGHAFEN ===
  fluhafen: { target: 'Flughafen', reason: 'Kurang huruf "g" pada kata majemuk "Flughafen" (bandara).' },
  flugafhen: { target: 'Flughafen', reason: 'Transposisi huruf pada kata "Flughafen".' },
  flugahfen: { target: 'Flughafen', reason: 'Transposisi huruf "h" pada "Flughafen".' },
  flughaven: { target: 'Flughafen', reason: 'Pengaruh kata Inggris "haven" — dalam Jerman "Hafen" (pelabuhan/bandara).' },

  // === MÄDCHEN ===
  madchen: { target: 'Mädchen', reason: 'Kurang Umlaut "ä" pada kata "Mädchen" (gadis kecil/anak perempuan).' },
  maedchen: { target: 'Mädchen', reason: 'Transliterasi "ae"→"ä" — penulisan baku menggunakan Umlaut "ä".' },
  madhen: { target: 'Mädchen', reason: 'Kurang konsonan "c" pada kluster "ch" dalam "Mädchen".' },

  // === SCHÜLER ===
  schueler: { target: 'Schüler', reason: 'Transliterasi "ue"→"ü" — penulisan baku menggunakan Umlaut "ü" pada "Schüler" (murid).' },
  schuler: { target: 'Schüler', reason: 'Kurang Umlaut "ü" pada kata "Schüler".' },
  shuler: { target: 'Schüler', reason: 'Kurang konsonan "c" pada kluster "sch" dalam "Schüler".' },

  // === BESCHÄFTIGUNG ===
  beschaftigung: { target: 'Beschäftigung', reason: 'Kurang Umlaut "ä" pada kata "Beschäftigung" (pekerjaan/kesibukan).' },
  beschaeftigung: { target: 'Beschäftigung', reason: 'Transliterasi "ae"→"ä" — penulisan baku menggunakan Umlaut.' },
  bescheftiging: { target: 'Beschäftigung', reason: 'Vokal yang salah pada kata "Beschäftigung".' },
  bescheftigung: { target: 'Beschäftigung', reason: 'Vokal "e" seharusnya Umlaut "ä" pada "Beschäftigung".' },

  // === MÖCHTEN / MODAL VERBS ===
  mochten: { target: 'möchten', reason: 'Kurang Umlaut "ö" pada kata kerja modal "möchten" (ingin).' },
  moechten: { target: 'möchten', reason: 'Transliterasi "oe"→"ö" pada kata "möchten" (ingin).' },
  mochte: { target: 'möchte', reason: 'Kurang Umlaut "ö" pada bentuk pertama tunggal "möchte" (saya ingin).' },
  moechte: { target: 'möchte', reason: 'Transliterasi "oe"→"ö" pada "möchte".' },
  muessen: { target: 'müssen', reason: 'Transliterasi "ue"→"ü" pada kata kerja modal "müssen" (harus).' },
  mussen: { target: 'müssen', reason: 'Kurang Umlaut "ü" dan konsonan ganda "ss" pada "müssen".' },
  koenen: { target: 'können', reason: 'Kurang Umlaut "ö" dan konsonan ganda "nn" pada "können" (bisa).' },
  konnen: { target: 'können', reason: 'Transliterasi "o"→"ö" pada "können".' },
  duerfen: { target: 'dürfen', reason: 'Transliterasi "ue"→"ü" pada "dürfen" (boleh).' },
  durfen: { target: 'dürfen', reason: 'Kurang Umlaut "ü" pada kata kerja modal "dürfen".' },

  // === HÄUFIGE NOMEN ===
  buro: { target: 'Büro', reason: 'Kurang Umlaut "ü" pada kata "Büro" (kantor).' },
  buero: { target: 'Büro', reason: 'Transliterasi "ue"→"ü" pada kata "Büro".' },
  strase: { target: 'Straße', reason: 'Kurang huruf "ß" — "Straße" (jalan) menggunakan "ß" atau "ss".' },
  strasse: { target: 'Straße', reason: 'Penulisan "ss" bisa digantikan "ß" pada "Straße".' },
  strasee: { target: 'Straße', reason: 'Kelebihan vokal "e" pada kata "Straße".' },
  bruder: { target: 'Bruder', reason: 'Sudah benar — "Bruder" (saudara laki-laki).' },
  mutter: { target: 'Mutter', reason: 'Sudah benar — "Mutter" (ibu).' },
  vater: { target: 'Vater', reason: 'Sudah benar — "Vater" (ayah).' },
  geschwister: { target: 'Geschwister', reason: 'Sudah benar — "Geschwister" (saudara kandung).' },
  geburtstag: { target: 'Geburtstag', reason: 'Sudah benar — "Geburtstag" (ulang tahun).' },
  geburstag: { target: 'Geburtstag', reason: 'Transposisi "r" dan "s" pada "Geburtstag" (ulang tahun).' },
  geburstdag: { target: 'Geburtstag', reason: 'Kurang huruf "t" dan transposisi pada "Geburtstag".' },
  geburtztag: { target: 'Geburtstag', reason: 'Huruf "z" tidak tepat pada "Geburtstag".' },
  fruhstuck: { target: 'Frühstück', reason: 'Kurang Umlaut "ü" dan "ü" pada "Frühstück" (sarapan).' },
  fruehstueck: { target: 'Frühstück', reason: 'Transliterasi "ue"→"ü" dan "ue"→"ü" pada "Frühstück".' },
  fruhstuk: { target: 'Frühstück', reason: 'Kurang Umlaut dan konsonan pada "Frühstück".' },
  mithernacht: { target: 'Mitternacht', reason: 'Kurang konsonan "t" ganda pada "Mitternacht" (tengah malam).' },
  miternacht: { target: 'Mitternacht', reason: 'Kurang konsonan "t" pada "Mitternacht".' },

  // === VERBEN HÄUFIG ===
  arbeiten: { target: 'arbeiten', reason: 'Sudah benar — kata kerja "arbeiten" (bekerja).' },
  arbiten: { target: 'arbeiten', reason: 'Kurang vokal "e" pada kata kerja "arbeiten".' },
  arbietn: { target: 'arbeiten', reason: 'Transposisi huruf pada "arbeiten".' },
  fahren: { target: 'fahren', reason: 'Sudah benar — kata kerja "fahren" (pergi/berkendara).' },
  faren: { target: 'fahren', reason: 'Kurang huruf "h" pada kata kerja "fahren".' },
  kommen: { target: 'kommen', reason: 'Sudah benar — kata kerja "kommen" (datang).' },
  komen: { target: 'kommen', reason: 'Kurang konsonan ganda "mm" pada kata kerja "kommen".' },
  gehen: { target: 'gehen', reason: 'Sudah benar — kata kerja "gehen" (pergi/berjalan).' },
  gehn: { target: 'gehen', reason: 'Kurang vokal "e" pada akhiran "gehen".' },
  machen: { target: 'machen', reason: 'Sudah benar — kata kerja "machen" (melakukan/membuat).' },
  machen2: { target: 'machen', reason: 'Angka "2" tidak relevan pada kata "machen".' },
  sehen: { target: 'sehen', reason: 'Sudah benar — kata kerja "sehen" (melihat).' },
  horen: { target: 'hören', reason: 'Kurang Umlaut "ö" pada kata kerja "hören" (mendengar).' },
  hoeren: { target: 'hören', reason: 'Transliterasi "oe"→"ö" pada "hören".' },
  hören: { target: 'hören', reason: 'Sudah benar — kata kerja "hören".' },
  lessen: { target: 'lesen', reason: 'Kelebihan konsonan "s" ganda pada kata kerja "lesen" (membaca).' },
  lessen2: { target: 'lesen', reason: 'Angka tidak relevan.' },
  trinken: { target: 'trinken', reason: 'Sudah benar — kata kerja "trinken" (minum).' },
  trinkken: { target: 'trinken', reason: 'Kelebihan konsonan "k" ganda pada "trinken".' },
  essen: { target: 'essen', reason: 'Sudah benar — kata kerja "essen" (makan).' },
  esen: { target: 'essen', reason: 'Kurang konsonan "s" ganda pada kata kerja "essen".' },
  kaufen: { target: 'kaufen', reason: 'Sudah benar — kata kerja "kaufen" (membeli).' },
  kauven: { target: 'kaufen', reason: 'Tertukar konsonan "v" dan "f" — dalam bahasa Jerman menggunakan "f".' },
  wohnen: { target: 'wohnen', reason: 'Sudah benar — kata kerja "wohnen" (tinggal/berdomisili).' },
  wonen: { target: 'wohnen', reason: 'Kurang huruf "h" pada kata kerja "wohnen".' },
  spielen: { target: 'spielen', reason: 'Sudah benar — kata kerja "spielen" (bermain).' },
  spiehlen: { target: 'spielen', reason: 'Kelebihan huruf "h" pada kata "spielen".' },
  heisen: { target: 'heißen', reason: 'Kurang Umlaut "ß" (atau "ss") pada kata kerja "heißen" (bernama).' },
  heissen: { target: 'heißen', reason: 'Transliterasi "ss"→"ß" pada "heißen".' },
  wissen: { target: 'wissen', reason: 'Sudah benar — kata kerja "wissen" (mengetahui).' },
  wisen: { target: 'wissen', reason: 'Kurang konsonan "s" ganda pada kata kerja "wissen".' },
  kennen: { target: 'kennen', reason: 'Sudah benar — kata kerja "kennen" (mengenal).' },
  kenen: { target: 'kennen', reason: 'Kurang konsonan "n" ganda pada "kennen".' },
  denken: { target: 'denken', reason: 'Sudah benar — kata kerja "denken" (berpikir).' },
  dencken: { target: 'denken', reason: 'Tidak ada "ck" pada kata "denken".' },
  suchen: { target: 'suchen', reason: 'Sudah benar — kata kerja "suchen" (mencari).' },
  sucen: { target: 'suchen', reason: 'Kurang huruf "h" pada kluster "ch" dalam "suchen".' },
  finden: { target: 'finden', reason: 'Sudah benar — kata kerja "finden" (menemukan).' },
  fiden: { target: 'finden', reason: 'Kurang konsonan "n" pada kata "finden".' },
  brauchen: { target: 'brauchen', reason: 'Sudah benar — kata kerja "brauchen" (membutuhkan).' },
  brachen: { target: 'brauchen', reason: 'Kurang vokal "u" pada "brauchen".' },
  lernen: { target: 'lernen', reason: 'Sudah benar — kata kerja "lernen" (belajar).' },
  lernnen: { target: 'lernen', reason: 'Kelebihan konsonan "n" ganda pada "lernen".' },
  reisen: { target: 'reisen', reason: 'Sudah benar — kata kerja "reisen" (bepergian/melakukan perjalanan).' },
  reysen: { target: 'reisen', reason: 'Penggunaan "y" tidak tepat — dalam Jerman "reisen" dengan "ei".' },
  beginnen: { target: 'beginnen', reason: 'Sudah benar — kata kerja "beginnen" (memulai).' },
  beginen: { target: 'beginnen', reason: 'Kurang konsonan "n" ganda pada "beginnen".' },
  helfen: { target: 'helfen', reason: 'Sudah benar — kata kerja "helfen" (membantu).' },
  helpen: { target: 'helfen', reason: 'Pengaruh bahasa Inggris/Belanda "help" — dalam Jerman "helfen".' },
  schlafen: { target: 'schlafen', reason: 'Sudah benar — kata kerja "schlafen" (tidur).' },
  schlaffen: { target: 'schlafen', reason: 'Kelebihan konsonan "f" ganda pada "schlafen".' },
  shlapen: { target: 'schlafen', reason: 'Kurang kluster "sch" dan vokal yang salah pada "schlafen".' },

  // === ADJEKTIVE ===
  gross: { target: 'groß', reason: 'Dalam bahasa Jerman modern "groß" menggunakan huruf "ß" — bukan "ss" dalam konteks standar.' },
  grosz: { target: 'groß', reason: 'Huruf "ß" tidak ditulis "sz" dalam ejaan modern.' },
  klain: { target: 'klein', reason: 'Vokal "ai" seharusnya "ei" pada kata sifat "klein" (kecil).' },
  gute: { target: 'gut', reason: 'Bentuk dasar/kamus kata sifat "gut" (baik) tanpa akhiran deklinasi.' },
  alte: { target: 'alt', reason: 'Bentuk dasar kata sifat "alt" (tua/lama) tanpa akhiran deklinasi.' },
  neue: { target: 'neu', reason: 'Bentuk dasar kata sifat "neu" (baru) — bentuk "neue" adalah deklinasi.' },
  langsame: { target: 'langsam', reason: 'Bentuk dasar kata sifat "langsam" (lambat).' },
  schnele: { target: 'schnell', reason: 'Kurang konsonan "l" ganda pada "schnell" (cepat).' },
  schnel: { target: 'schnell', reason: 'Kurang konsonan "l" ganda pada "schnell".' },
  billig: { target: 'billig', reason: 'Sudah benar — kata sifat "billig" (murah).' },
  billig2: { target: 'billig', reason: 'Angka tidak relevan.' },
  teur: { target: 'teuer', reason: 'Kurang vokal "e" pada kata sifat "teuer" (mahal).' },
  wichtig: { target: 'wichtig', reason: 'Sudah benar — kata sifat "wichtig" (penting).' },
  wihtig: { target: 'wichtig', reason: 'Kurang konsonan "c" pada kata "wichtig".' },
  moeglich: { target: 'möglich', reason: 'Transliterasi "oe"→"ö" pada kata sifat "möglich" (mungkin).' },
  moglich: { target: 'möglich', reason: 'Kurang Umlaut "ö" pada kata "möglich".' },
  naturlich: { target: 'natürlich', reason: 'Kurang Umlaut "ü" pada "natürlich" (tentu saja/alamiah).' },
  natuerlich: { target: 'natürlich', reason: 'Transliterasi "ue"→"ü" pada "natürlich".' },

  // === PRÄPOSITIONEN & KONJUNKTIONEN ===
  weil: { target: 'weil', reason: 'Sudah benar — konjungtif "weil" (karena).' },
  veil: { target: 'weil', reason: 'Tertukar huruf "v" dan "w" — dalam bahasa Jerman menggunakan "w" (weil).' },
  obwohl: { target: 'obwohl', reason: 'Sudah benar — konjungtif "obwohl" (walaupun).' },
  obwhol: { target: 'obwohl', reason: 'Transposisi huruf "w" dan "h" pada "obwohl".' },
  trotzdem: { target: 'trotzdem', reason: 'Sudah benar — "trotzdem" (meskipun demikian/namun).' },
  trotzdem2: { target: 'trotzdem', reason: 'Angka tidak relevan.' },
  ausserdem: { target: 'außerdem', reason: 'Transliterasi "ss"→"ß" pada "außerdem" (selain itu).' },
  aüserdem: { target: 'außerdem', reason: 'Penulisan yang salah pada "außerdem".' },
  deshalb: { target: 'deshalb', reason: 'Sudah benar — "deshalb" (oleh karena itu).' },
  deswegen: { target: 'deswegen', reason: 'Sudah benar — "deswegen" (karena itu).' },
  zwicshen: { target: 'zwischen', reason: 'Transposisi huruf pada "zwischen" (antara/di antara).' },
  zwichen: { target: 'zwischen', reason: 'Kurang konsonan "s" pada "zwischen".' },
  zwischen: { target: 'zwischen', reason: 'Sudah benar — "zwischen" (di antara).' },

  // === ZAHLEN & ZEIT ===
  eins: { target: 'eins', reason: 'Sudah benar — "eins" (satu).' },
  zwai: { target: 'zwei', reason: 'Transposisi vokal "ai" seharusnya "ei" pada "zwei" (dua).' },
  drein: { target: 'drei', reason: 'Kelebihan "n" pada "drei" (tiga).' },
  mondag: { target: 'Montag', reason: 'Kurang "t" pada "Montag" (Senin).' },
  dienstag: { target: 'Dienstag', reason: 'Sudah benar — "Dienstag" (Selasa).' },
  dienestag: { target: 'Dienstag', reason: 'Kelebihan vokal "e" pada "Dienstag".' },
  donestag: { target: 'Donnerstag', reason: 'Kurang konsonan "n" dan huruf pada "Donnerstag" (Kamis).' },
  donerstag: { target: 'Donnerstag', reason: 'Kurang konsonan "n" ganda pada "Donnerstag".' },
  freitag: { target: 'Freitag', reason: 'Sudah benar — "Freitag" (Jumat).' },
  freytag: { target: 'Freitag', reason: 'Huruf "y" tidak digunakan — seharusnya "ei" pada "Freitag".' },
  samstag: { target: 'Samstag', reason: 'Sudah benar — "Samstag" (Sabtu).' },
  sonntag: { target: 'Sonntag', reason: 'Sudah benar — "Sonntag" (Minggu).' },
  sontag: { target: 'Sonntag', reason: 'Kurang konsonan "n" ganda pada "Sonntag".' },
  januar: { target: 'Januar', reason: 'Sudah benar — "Januar" (Januari).' },
  february: { target: 'Februar', reason: 'Pengaruh Inggris "February" — dalam Jerman "Februar" tanpa "y".' },
  februar: { target: 'Februar', reason: 'Sudah benar — "Februar" (Februari).' },
  marz: { target: 'März', reason: 'Kurang Umlaut "ä" pada "März" (Maret).' },
  maerz: { target: 'März', reason: 'Transliterasi "ae"→"ä" pada "März".' },
  dezember: { target: 'Dezember', reason: 'Sudah benar — "Dezember" (Desember).' },
  dezember2: { target: 'Dezember', reason: 'Angka tidak relevan.' },

  // === ORT & RAUM ===
  küche: { target: 'Küche', reason: 'Sudah benar — "Küche" (dapur).' },
  kuche: { target: 'Küche', reason: 'Kurang Umlaut "ü" pada kata "Küche" (dapur).' },
  kueche: { target: 'Küche', reason: 'Transliterasi "ue"→"ü" pada "Küche".' },
  schlafzimer: { target: 'Schlafzimmer', reason: 'Kurang konsonan "m" ganda pada "Schlafzimmer" (kamar tidur).' },
  schlafzimmer: { target: 'Schlafzimmer', reason: 'Sudah benar — "Schlafzimmer" (kamar tidur).' },
  wohnzimer: { target: 'Wohnzimmer', reason: 'Kurang konsonan "m" ganda pada "Wohnzimmer" (ruang tamu).' },
  wohnzimmer: { target: 'Wohnzimmer', reason: 'Sudah benar — "Wohnzimmer" (ruang tamu).' },
  badezimer: { target: 'Badezimmer', reason: 'Kurang konsonan "m" ganda pada "Badezimmer" (kamar mandi).' },
  krankenhaus: { target: 'Krankenhaus', reason: 'Sudah benar — "Krankenhaus" (rumah sakit).' },
  krankenaus: { target: 'Krankenhaus', reason: 'Kurang huruf "h" pada "Krankenhaus".' },
  supermarkt: { target: 'Supermarkt', reason: 'Sudah benar — "Supermarkt" (supermarket).' },
  supermakt: { target: 'Supermarkt', reason: 'Kurang huruf "r" pada "Supermarkt".' },
  bahnoff: { target: 'Bahnhof', reason: 'Kelebihan konsonan "f" ganda dan kurang "h" pada "Bahnhof" (stasiun).' },
  bahnhof: { target: 'Bahnhof', reason: 'Sudah benar — "Bahnhof" (stasiun kereta).' },
  bankhof: { target: 'Bahnhof', reason: 'Tertukar huruf "n" dan "k" pada "Bahnhof".' },

  // === KOMMUNIKATION / ALLTAG ===
  entshuldigung: { target: 'Entschuldigung', reason: 'Kurang kluster "sch" pada "Entschuldigung" (maaf/permisi).' },
  entshuldgung: { target: 'Entschuldigung', reason: 'Kurang vokal dan kluster "sch" pada "Entschuldigung".' },
  entschuldigung: { target: 'Entschuldigung', reason: 'Sudah benar — "Entschuldigung" (permisi/maaf).' },
  bitte: { target: 'bitte', reason: 'Sudah benar — "bitte" (tolong/silakan).' },
  bite: { target: 'bitte', reason: 'Kurang konsonan "t" ganda pada "bitte".' },
  danke: { target: 'danke', reason: 'Sudah benar — "danke" (terima kasih).' },
  danke2: { target: 'danke', reason: 'Angka tidak relevan.' },
  willkomen: { target: 'willkommen', reason: 'Kurang konsonan "m" ganda pada "willkommen" (selamat datang).' },
  willkommen: { target: 'willkommen', reason: 'Sudah benar — "willkommen" (selamat datang).' },
  herzlichen: { target: 'herzlichen', reason: 'Sudah benar — "herzlichen" (dengan sepenuh hati).' },
  herzliken: { target: 'herzlichen', reason: 'Tertukar "k" dan "ch" — kluster "ch" dalam "herzlichen".' },
  gluckwunsch: { target: 'Glückwunsch', reason: 'Kurang Umlaut "ü" pada "Glückwunsch" (selamat).' },
  gluckwunch: { target: 'Glückwunsch', reason: 'Transposisi konsonan pada "Glückwunsch".' },
  glueckwunsch: { target: 'Glückwunsch', reason: 'Transliterasi "ue"→"ü" pada "Glückwunsch".' },

  // === FARBEN ===
  gelb: { target: 'gelb', reason: 'Sudah benar — "gelb" (kuning).' },
  rot: { target: 'rot', reason: 'Sudah benar — "rot" (merah).' },
  blau: { target: 'blau', reason: 'Sudah benar — "blau" (biru).' },
  gruen: { target: 'grün', reason: 'Transliterasi "ue"→"ü" pada "grün" (hijau).' },
  grun: { target: 'grün', reason: 'Kurang Umlaut "ü" pada "grün".' },
  schwarz: { target: 'schwarz', reason: 'Sudah benar — "schwarz" (hitam).' },
  weiss: { target: 'weiß', reason: 'Dalam ejaan modern "weiß" menggunakan "ß" (putih).' },
  lila: { target: 'lila', reason: 'Sudah benar — "lila" (ungu/lilac).' },
  orange2: { target: 'orange', reason: 'Angka tidak relevan.' },
  braun: { target: 'braun', reason: 'Sudah benar — "braun" (coklat).' },
  grau: { target: 'grau', reason: 'Sudah benar — "grau" (abu-abu).' },

  // === KÖRPER / GESUNDHEIT ===
  kopf: { target: 'Kopf', reason: 'Sudah benar — "Kopf" (kepala).' },
  kopfsmertzen: { target: 'Kopfschmerzen', reason: 'Kurang kluster "sch" dan transposisi pada "Kopfschmerzen" (sakit kepala).' },
  kopfschmerzen: { target: 'Kopfschmerzen', reason: 'Sudah benar — "Kopfschmerzen" (sakit kepala).' },
  krankenversiherung: { target: 'Krankenversicherung', reason: 'Kurang huruf "c" pada kluster "ch" dalam "Krankenversicherung" (asuransi kesehatan).' },
  krankenversicherung: { target: 'Krankenversicherung', reason: 'Sudah benar — "Krankenversicherung" (asuransi kesehatan).' },

  // === BILDUNG / SCHULE ===
  universitaet: { target: 'Universität', reason: 'Transliterasi "ae"→"ä" pada "Universität" (universitas).' },
  universitat: { target: 'Universität', reason: 'Kurang Umlaut "ä" pada "Universität".' },
  univercity: { target: 'Universität', reason: 'Pengaruh bahasa Inggris "university" — dalam Jerman "Universität".' },
  hochshule: { target: 'Hochschule', reason: 'Kurang huruf "c" pada kluster "sch" dalam "Hochschule".' },
  hochschule: { target: 'Hochschule', reason: 'Sudah benar — "Hochschule" (perguruan tinggi).' },
  prufung: { target: 'Prüfung', reason: 'Kurang Umlaut "ü" pada "Prüfung" (ujian).' },
  pruefung: { target: 'Prüfung', reason: 'Transliterasi "ue"→"ü" pada "Prüfung".' },
  hausaufgabe: { target: 'Hausaufgabe', reason: 'Sudah benar — "Hausaufgabe" (pekerjaan rumah).' },
  hausafgabe: { target: 'Hausaufgabe', reason: 'Kurang vokal "u" pada "Hausaufgabe".' },

  // === GRAMMATIK-WÖRTER ===
  ich: { target: 'ich', reason: 'Sudah benar — kata ganti orang pertama "ich" (saya).' },
  ik: { target: 'ich', reason: 'Pengaruh bahasa Belanda/bahasa lain — dalam Jerman "ich" (saya).' },
  sie: { target: 'Sie', reason: 'Sudah benar — "Sie" (Anda/mereka/dia (feminin)).' },
  ihr: { target: 'ihr', reason: 'Sudah benar — "ihr" (kalian/milik dia perempuan).' },
  wir: { target: 'wir', reason: 'Sudah benar — "wir" (kami/kita).' },
  nict: { target: 'nicht', reason: 'Kurang huruf "h" pada partikel negasi "nicht" (tidak).' },
  niht: { target: 'nicht', reason: 'Kurang kluster "ch" pada "nicht".' },
  nicht: { target: 'nicht', reason: 'Sudah benar — "nicht" (tidak).' },
  kein: { target: 'kein', reason: 'Sudah benar — "kein" (bukan/tidak ada).' },
  kain: { target: 'kein', reason: 'Vokal "ai" seharusnya "ei" pada partikel negasi "kein".' },
  aber: { target: 'aber', reason: 'Sudah benar — konjungtif "aber" (tetapi/namun).' },
  abher: { target: 'aber', reason: 'Kelebihan huruf "h" pada konjungtif "aber".' },
  und: { target: 'und', reason: 'Sudah benar — konjungtif "und" (dan).' },
  oder: { target: 'oder', reason: 'Sudah benar — konjungtif "oder" (atau).' },
  oder2: { target: 'oder', reason: 'Angka tidak relevan.' },
  dann: { target: 'dann', reason: 'Sudah benar — "dann" (lalu/kemudian).' },
  dan: { target: 'dann', reason: 'Kurang konsonan "n" ganda pada "dann" — jangan tertukar dengan kata Indonesia "dan".' },
  wenn: { target: 'wenn', reason: 'Sudah benar — "wenn" (jika/ketika).' },
  wen: { target: 'wenn', reason: 'Kurang konsonan "n" ganda pada "wenn" (jika/ketika).' },
  wann: { target: 'wann', reason: 'Sudah benar — "wann" (kapan — pertanyaan waktu).' },
  wan: { target: 'wann', reason: 'Kurang konsonan "n" ganda pada "wann" (kapan).' },
  immer: { target: 'immer', reason: 'Sudah benar — "immer" (selalu).' },
  imer: { target: 'immer', reason: 'Kurang konsonan "m" ganda pada "immer" (selalu).' },
  nie: { target: 'nie', reason: 'Sudah benar — "nie" (tidak pernah).' },
  manchmal: { target: 'manchmal', reason: 'Sudah benar — "manchmal" (kadang-kadang).' },
  manchmahl: { target: 'manchmal', reason: 'Kelebihan huruf "h" pada "manchmal".' },
  sehr: { target: 'sehr', reason: 'Sudah benar — "sehr" (sangat).' },
  sher: { target: 'sehr', reason: 'Kurang huruf "e" pada "sehr".' },
  auch: { target: 'auch', reason: 'Sudah benar — "auch" (juga).' },
  auch2: { target: 'auch', reason: 'Angka tidak relevan.' },

  // === UMWELT & NATUR ===
  umweltschutz: { target: 'Umweltschutz', reason: 'Sudah benar — "Umweltschutz" (perlindungan lingkungan).' },
  umveltschutz: { target: 'Umweltschutz', reason: 'Tertukar "v" dan "w" — dalam Jerman menggunakan "w" pada "Umwelt".' },
  klimawandel: { target: 'Klimawandel', reason: 'Sudah benar — "Klimawandel" (perubahan iklim).' },
  klimawandal: { target: 'Klimawandel', reason: 'Vokal yang salah pada akhiran "Wandel" — seharusnya "e", bukan "a".' },
  naturschutz: { target: 'Naturschutz', reason: 'Sudah benar — "Naturschutz" (konservasi alam).' },
  naturalshcutz: { target: 'Naturschutz', reason: 'Transposisi dan kelebihan huruf pada "Naturschutz".' },

  // === BERUFE ===
  lehrer: { target: 'Lehrer', reason: 'Sudah benar — "Lehrer" (guru laki-laki).' },
  leherin: { target: 'Lehrerin', reason: 'Kurang konsonan "r" pada feminim "Lehrerin" (guru perempuan).' },
  lehrerin: { target: 'Lehrerin', reason: 'Sudah benar — "Lehrerin" (guru perempuan).' },
  arzt: { target: 'Arzt', reason: 'Sudah benar — "Arzt" (dokter laki-laki).' },
  arztin: { target: 'Ärztin', reason: 'Kurang Umlaut "ä" pada "Ärztin" (dokter perempuan).' },
  aerztin: { target: 'Ärztin', reason: 'Transliterasi "ae"→"ä" pada "Ärztin".' },
  ingenieur: { target: 'Ingenieur', reason: 'Sudah benar — "Ingenieur" (insinyur).' },
  ingenier: { target: 'Ingenieur', reason: 'Kurang vokal dan akhiran pada "Ingenieur".' },
  ingeenieur: { target: 'Ingenieur', reason: 'Kelebihan vokal "e" pada "Ingenieur".' },
  polizist: { target: 'Polizist', reason: 'Sudah benar — "Polizist" (polisi laki-laki).' },
  polizei: { target: 'Polizei', reason: 'Sudah benar — "Polizei" (kepolisian).' },
  polizay: { target: 'Polizei', reason: 'Tertukar "ay" seharusnya "ei" pada "Polizei".' },
  kaufmann: { target: 'Kaufmann', reason: 'Sudah benar — "Kaufmann" (pedagang/businessman).' },
};

/**
 * Detects whether the user made a typo and recommends the authentic German target word.
 * Uses a multi-layered approach:
 * 1. Exact lookup in 300+ curated typo pairs
 * 2. Umlaut transliteration variants (ae→ä, oe→ö, ue→ü etc.)
 * 3. Fuzzy Damerau-Levenshtein with adaptive thresholds
 * 4. First-letter anchoring to reduce false positives
 * 5. Multi-candidate scoring and ranking
 */
export function detectGermanTypo(rawInput: string): TypoCorrection | null {
  const trimmed = rawInput.trim();
  if (!trimmed || trimmed.length < 3) return null;

  // Strip leading article (der/die/das) for matching
  const lower = trimmed.toLowerCase().replace(/^(der|die|das)\s+/i, '').trim();
  if (!lower || lower.length < 3) return null;

  // Helper to build result from a found word
  const buildResult = (targetWord: string, reason: string, confidence: number): TypoCorrection => {
    const targetLower = targetWord.toLowerCase();
    const dictEntry = GERMAN_DICTIONARY[targetLower];
    const art = dictEntry?.grammar?.type === 'nomen' ? `${dictEntry.grammar.data.artikel} ` : '';
    const displayWord = dictEntry ? dictEntry.displayWord || dictEntry.word : targetWord;
    const meaning = dictEntry?.translations ? ` — ${dictEntry.translations.slice(0, 2).join(', ')}` : '';
    return {
      originalInput: trimmed,
      suggestedWord: displayWord,
      displaySuggestedWord: `${art}${displayWord}`,
      explanation: `${reason}${meaning ? ` (${displayWord}${meaning})` : ''}`,
      confidence,
    };
  };

  // ── Layer 1: Direct match in curated typo database ──
  if (COMMON_TYPOS[lower]) {
    const item = COMMON_TYPOS[lower];
    const dictEntry = GERMAN_DICTIONARY[item.target.toLowerCase()];
    const art = dictEntry?.grammar?.type === 'nomen' ? `${dictEntry.grammar.data.artikel} ` : '';
    const displayWord = dictEntry ? dictEntry.displayWord || dictEntry.word : item.target;
    const meaning = dictEntry?.translations ? dictEntry.translations.slice(0, 2).join(', ') : '';
    return {
      originalInput: trimmed,
      suggestedWord: displayWord,
      displaySuggestedWord: `${art}${displayWord}`,
      explanation: `${item.reason}${meaning ? ` (${displayWord} = ${meaning})` : ''}`,
      confidence: 0.97,
    };
  }

  // ── Layer 2: Umlaut variant normalization ──
  // Check if the word without umlauts matches a dictionary entry
  const withUmlauts = normalizeGerman(lower);
  const asLatin = latinizeGerman(lower);

  // Exact match after normalizing umlauts
  const candidates: Array<{ key: string; word: string; score: number; reason: string }> = [];

  // Try normalized variants against all dictionary keys
  for (const [dictKey, dictEntry] of Object.entries(GERMAN_DICTIONARY)) {
    const dictNorm = normalizeGerman(dictKey);
    const dictLat = latinizeGerman(dictKey);

    // If the normalized input exactly matches dictionary after umlaut normalization
    if (lower !== dictKey) {
      if (withUmlauts === dictNorm && lower !== dictNorm) {
        candidates.push({
          key: dictKey,
          word: dictEntry.word,
          score: 0.95,
          reason: `Ejaan "ae/oe/ue" dapat diganti dengan huruf Umlaut (ä/ö/ü) yang benar.`,
        });
        continue;
      }
      if (asLatin === dictLat && lower !== dictLat) {
        candidates.push({
          key: dictKey,
          word: dictEntry.word,
          score: 0.93,
          reason: `Kemungkinan penulisan tanpa Umlaut — huruf baku menggunakan ä/ö/ü/ß.`,
        });
        continue;
      }
    }
  }

  if (candidates.length > 0) {
    const best = candidates.sort((a, b) => b.score - a.score)[0];
    return buildResult(best.word, best.reason, best.score);
  }

  // ── Layer 3: Adaptive fuzzy Levenshtein across dictionary ──
  // Adaptive threshold: shorter words get stricter tolerance
  const getMaxDist = (len: number): number => {
    if (len <= 4) return 1;
    if (len <= 6) return 2;
    if (len <= 9) return 2;
    return 3;
  };

  const maxDist = getMaxDist(lower.length);
  const firstChar = lower[0];

  interface FuzzyCandidate {
    key: string;
    word: string;
    dist: number;
    translations: string[];
  }

  let fuzzyMatches: FuzzyCandidate[] = [];

  for (const [dictKey, dictEntry] of Object.entries(GERMAN_DICTIONARY)) {
    // Skip exact matches (already handled above)
    if (dictKey === lower) continue;

    // First-letter anchoring: strongly prefer same starting letter (allow 1 diff)
    const dictFirstChar = dictKey[0];
    if (firstChar !== dictFirstChar) {
      // Allow "w"↔"v" swap (common German confusion), "z"↔"s", "c"↔"k"
      const confusable: Record<string, string[]> = {
        v: ['w', 'f'], w: ['v'], z: ['s', 'tz'], s: ['z', 'ß'],
        c: ['k', 'z'], k: ['c'], ß: ['ss', 's'], f: ['v'],
        g: ['k'], q: ['k'], x: ['ks'],
      };
      const allowed = confusable[firstChar] || [];
      if (!allowed.includes(dictFirstChar) && dictFirstChar !== firstChar) {
        // Skip unless length ratio is also suspicious
        if (Math.abs(dictKey.length - lower.length) > 1) continue;
        // Still skip if first chars are very different
        if (damerauLevenshteinDistance(firstChar, dictFirstChar) > 1) continue;
      }
    }

    // Length gate: skip candidates too far in length
    const lenDiff = Math.abs(dictKey.length - lower.length);
    if (lenDiff > maxDist + 1) continue;

    const dist = smartDistance(lower, dictKey);
    if (dist > 0 && dist <= maxDist) {
      fuzzyMatches.push({
        key: dictKey,
        word: dictEntry.word,
        dist,
        translations: dictEntry.translations || [],
      });
    }
  }

  // ── Layer 4: Also check GERMAN_THESAURUS keys ──
  for (const thesKey of Object.keys(GERMAN_THESAURUS)) {
    if (GERMAN_DICTIONARY[thesKey]) continue; // already checked
    if (thesKey === lower) continue;

    const firstThes = thesKey[0];
    if (firstChar !== firstThes && damerauLevenshteinDistance(firstChar, firstThes) > 1) continue;

    const lenDiff = Math.abs(thesKey.length - lower.length);
    if (lenDiff > maxDist + 1) continue;

    const dist = smartDistance(lower, thesKey);
    if (dist > 0 && dist <= maxDist) {
      fuzzyMatches.push({
        key: thesKey,
        word: thesKey.charAt(0).toUpperCase() + thesKey.slice(1),
        dist,
        translations: [],
      });
    }
  }

  if (fuzzyMatches.length === 0) return null;

  // ── Layer 5: Score & Rank candidates ──
  // Prefer: lower distance > matches in dictionary > longer matching prefix
  const ranked = fuzzyMatches.sort((a, b) => {
    if (a.dist !== b.dist) return a.dist - b.dist;
    // Prefer dictionary entries over thesaurus-only
    const aInDict = !!GERMAN_DICTIONARY[a.key];
    const bInDict = !!GERMAN_DICTIONARY[b.key];
    if (aInDict !== bInDict) return aInDict ? -1 : 1;
    // Prefer longer common prefix
    const prefA = commonPrefixLength(lower, a.key);
    const prefB = commonPrefixLength(lower, b.key);
    return prefB - prefA;
  });

  const winner = ranked[0];
  const confidence = winner.dist === 1 ? 0.90 : winner.dist === 2 ? 0.80 : 0.70;

  // Only report if reasonably confident
  if (confidence < 0.70) return null;

  const dictEntry = GERMAN_DICTIONARY[winner.key];
  const art = dictEntry?.grammar?.type === 'nomen' ? `${dictEntry.grammar.data.artikel} ` : '';
  const displayWord = dictEntry ? (dictEntry.displayWord || dictEntry.word) : winner.word;
  const meaning = winner.translations.length > 0 ? winner.translations.slice(0, 2).join(', ') : '';

  return {
    originalInput: trimmed,
    suggestedWord: displayWord,
    displaySuggestedWord: `${art}${displayWord}`,
    explanation: `Terdeteksi kemungkinan salah ketik pada "${trimmed}". Kosakata Jerman yang paling mendekati adalah "${art}${displayWord}"${meaning ? ` (${meaning})` : ''}.`,
    confidence,
  };
}

function commonPrefixLength(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}


