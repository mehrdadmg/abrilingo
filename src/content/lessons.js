const startLesson = {
  info: {
    name: 'Start_Lesson',
    learning: 'Sentences',
  },

  content: [
    {
      isSelected: false,
      type: 'sentence',
      sentence: 'Herzlich willkommen bei Abri Lingo! ',
      english: 'Welcome to Abri Lingo!',
      russian: 'Добро пожаловать в Абри Линго!',
      farsi: 'به Abri Lingo خوش آمدید!',
    },
  ],
};

const noSentenceSelected = {
  info: {
    name: 'No_Sentence_Selected',
    learning: 'Sentences',
  },

  content: [
    {
      isSelected: false,
      type: 'sentence',
      sentence: 'Es ist kein Satz ausgewählt.! ',
      english: 'There are no selected sentences.!',
      russian: 'Нет выбранного предложения.!',
      farsi: 'هیچ جمله انتخابی وجود ندارد!',
    },
  ],
};

const alllessons = [
  {
    file_name: 'a1_unregelmäßige_verben.json',
    name: 'A1_Unregelmäßige_Verben',
  },
  {
    file_name: 'a1_regelmäßige_verben.json',
    name: 'A1_Regelmäßige_Verben',
  },
  {
    file_name: 'a2_unregelmäßige_verben.json',
    name: 'A2_Unregelmäßige_Verben',
  },
  {
    file_name: 'a2_regelmäßige_verben.json',
    name: 'A2_Regelmäßige_Verben',
  },
  /* {
    file_name: 'verben_01.json',
    name: 'Verben_01',
  },
  {
    file_name: 'verben_02.json',
    name: 'Verben_02',
  }, */
  {
    file_name: 'modalverben.json',
    name: 'Modalverben',
  },
  {
    file_name: 'nützliche_sätze.json',
    name: 'Nützliche_Sätze',
  },
  {
    file_name: 'alle_konnektoren.json',
    name: 'Alle_Konnektoren',
  },
  {
    file_name: 'lokale_präpositionen.json',
    name: 'Lokale_Präpositionen',
  },
  {
    file_name: 'temporale_präpositionen.json',
    name: 'Temporale_Präpositionen',
  },
  {
    file_name: 'zu_infinitiv.json',
    name: 'Zu_Infinitiv',
  },
  {
    file_name: 'essen.json',
    name: 'Essen',
  },
  {
    file_name: 'adresse.json',
    name: 'Adresse',
  },
  {
    file_name: 'a1_u01.json',
    name: 'A1U01',
  },
  {
    file_name: 'a1_u02.json',
    name: 'A1U02',
  },
  {
    file_name: 'a1_u03.json',
    name: 'A1U03',
  },
  {
    file_name: 'a1_u04.json',
    name: 'A1U04',
  },
  {
    file_name: 'a1_u05.json',
    name: 'A1U05',
  },
  {
    file_name: 'a1_u06.json',
    name: 'A1U06',
  },
  {
    file_name: 'a1_u07.json',
    name: 'A1U07',
  },
  {
    file_name: 'a1_u08.json',
    name: 'A1U08',
  },
  {
    file_name: 'a1_u09.json',
    name: 'A1U09',
  },
  {
    file_name: 'a1_u10.json',
    name: 'A1U10',
  },
  {
    file_name: 'a1_u11.json',
    name: 'A1U11',
  },
  {
    file_name: 'a1_u12.json',
    name: 'A1U12',
  },
  {
    file_name: 'a1_u13.json',
    name: 'A1U13',
  },
  {
    file_name: 'a1_u14.json',
    name: 'A1U14',
  },
  {
    file_name: 'a2_u01.json',
    name: 'A2U01',
  },
  {
    file_name: 'a2_u02.json',
    name: 'A2U02',
  },
  {
    file_name: 'a2_u03.json',
    name: 'A2U03',
  },
  {
    file_name: 'a2_u04.json',
    name: 'A2U04',
  },
  {
    file_name: 'a2_s1.json',
    name: 'A2S1',
  },
  {
    file_name: 'a2_u05.json',
    name: 'A2U05',
  },
  {
    file_name: 'a2_u06.json',
    name: 'A2U06',
  },
  {
    file_name: 'a2_u07.json',
    name: 'A2U07',
  },
  {
    file_name: 'a2_s2.json',
    name: 'A2S2',
  },
  {
    file_name: 'a2_u08.json',
    name: 'A2U08',
  },
  {
    file_name: 'a2_u09.json',
    name: 'A2U09',
  },
  {
    file_name: 'a2_u10.json',
    name: 'A2U10',
  },
  {
    file_name: 'a2_u11.json',
    name: 'A2U11',
  },
  {
    file_name: 'a2_s3.json',
    name: 'A2S3',
  },
  {
    file_name: 'a2_u12.json',
    name: 'A2U12',
  },
  {
    file_name: 'a2_u13.json',
    name: 'A2U13',
  },
  {
    file_name: 'a2_u14.json',
    name: 'A2U14',
  },
  {
    file_name: 'a2_s4.json',
    name: 'A2S4',
  },
  {
    file_name: 'b1_u01.json',
    name: 'B1U01',
  },
  {
    file_name: 'b1_u02.json',
    name: 'B1U02',
  },
  {
    file_name: 'b1_u03.json',
    name: 'B1U03',
  },
  {
    file_name: 'b1_u04.json',
    name: 'B1U04',
  },
  {
    file_name: 'b1_u05.json',
    name: 'B1U05',
  },
  {
    file_name: 'b1_u06.json',
    name: 'B1U06',
  },
  {
    file_name: 'frontend_backend_01.json',
    name: 'Frontend_Backend_01',
  },
  {
    file_name: 'frontend_backend_02.json',
    name: 'Frontend_Backend_02',
  },
  {
    file_name: 'frontend_backend_03.json',
    name: 'Frontend_Backend_03',
  },
  {
    file_name: 'frontend_backend_04.json',
    name: 'Frontend_Backend_04',
  },
  {
    file_name: 'frontend_backend_05.json',
    name: 'Frontend_Backend_05',
  },
  {
    file_name: 'frontend_backend_06.json',
    name: 'Frontend_Backend_06',
  },
  {
    file_name: 'frontend_1_100.json',
    name: 'Frontend_1_100',
  },
  {
    file_name: 'frontend_100_200.json',
    name: 'Frontend_100_200',
  },
];
const allLanguagesTranslate = ['english', 'russian', 'farsi'];

export { alllessons, allLanguagesTranslate, startLesson, noSentenceSelected };
