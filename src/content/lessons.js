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
    id: '100',
    name: 'Prüfung B 1',
    level: 0,
    children: [
      {
        id: '101',
        level: 1,
        file_name: 'b1_sprechen_teil_1.json',
        name: 'B1_Sprechen_Teil_1',
      },
      {
        id: '102',
        level: 1,
        file_name: 'b1_sprechen_teil_2.json',
        name: 'B1_Sprechen_Teil_2',
      },
    ],
  },
  {
    id: '200',
    name: 'Verben',
    level: 0,
    children: [
      {
        id: '201',
        level: 1,
        file_name: 'a1_unregelmäßige_verben.json',
        name: 'A1_Unregelmäßige_Verben',
      },
      {
        id: '202',
        level: 1,
        file_name: 'a1_unregelmäßige_verben_sentence.json',
        name: 'A1_Unregelmäßige_Verben_Sentence',
      },
      {
        id: '203',
        level: 1,
        file_name: 'a1_regelmäßige_verben.json',
        name: 'A1_Regelmäßige_Verben',
      },
      {
        id: '204',
        level: 1,
        file_name: 'a1_regelmäßige_verben_sentence.json',
        name: 'A1_Regelmäßige_Verben_Sentence',
      },
      {
        id: '205',
        level: 1,
        file_name: 'a2_unregelmäßige_verben.json',
        name: 'A2_Unregelmäßige_Verben',
      },
      {
        id: '206',
        level: 1,
        file_name: 'a2_unregelmäßige_verben_sentence.json',
        name: 'A2_Unregelmäßige_Verben_Sentence',
      },
      {
        id: '207',
        level: 1,
        file_name: 'a2_regelmäßige_verben.json',
        name: 'A2_Regelmäßige_Verben',
      },
      {
        id: '208',
        level: 1,
        file_name: 'a2_regelmäßige_verben_sentence.json',
        name: 'A2_Regelmäßige_Verben_Sentence',
      },
      {
        id: '209',
        level: 1,
        file_name: 'fokus_b1_verben.json',
        name: 'Fokus_B1_Verben',
      },
      {
        id: '210',
        level: 1,
        file_name: 'modalverben.json',
        name: 'Modalverben',
      },
      {
        id: '211',
        level: 1,
        file_name: 'verben_mit_räposition_akkusativ.json',
        name: 'Verben_mit_Präposition_Akkusativ',
      },
      {
        id: '212',
        level: 1,
        file_name: 'verben_mit_präposition_dativ.json',
        name: 'Verben_mit_Präposition_Dativ',
      },
      {
        id: '213',
        level: 1,
        file_name: 'verben_mit_dativ_und_akkusativ.json',
        name: 'Verben_Mit_Dativ_Und_Akkusativ',
      },
      {
        id: '214',
        level: 1,
        file_name: 'verben_mit_dativ.json',
        name: 'Verben_Mit_Dativ',
      },
    ],
  },
  {
    id: '300',
    name: 'B1_Fokus',
    level: 0,
    children: [
      {
        id: '301',
        level: 1,
        file_name: 'b1_fokus_u01.json',
        name: 'B1_Fokus_u01',
      },
      {
        id: '302',
        level: 1,
        file_name: 'b1_fokus_u02.json',
        name: 'B1_Fokus_u02',
      },
      {
        id: '303',
        level: 1,
        file_name: 'b1_fokus_u03.json',
        name: 'B1_Fokus_u03',
      },
      {
        id: '304',
        level: 1,
        file_name: 'b1_fokus_u04.json',
        name: 'B1_Fokus_u04',
      },
      {
        id: '305',
        level: 1,
        file_name: 'b1_fokus_u05.json',
        name: 'B1_Fokus_u05',
      },
    ],
  },
  {
    id: '400',
    name: 'Gespräch',
    level: 0,
    children: [
      {
        id: '401',
        level: 1,
        file_name: 'nützliche_sätze.json',
        name: 'Nützliche_Sätze',
      },
      {
        id: '402',
        level: 1,
        file_name: 'im_supermarkt.json',
        name: 'Im_Supermarkt',
      },
      {
        id: '403',
        level: 1,
        file_name: 'essen.json',
        name: 'Essen',
      },
      {
        id: '404',
        level: 1,
        file_name: 'adresse.json',
        name: 'Adresse',
      },
    ],
  },
  {
    id: '500',
    name: 'Grammatik',
    level: 0,
    children: [
      {
        id: '501',
        level: 1,
        file_name: 'alle_konjunktionen.json',
        name: 'Alle_Konjunktionen',
      },
      {
        id: '502',
        level: 1,
        file_name: 'lokale_präpositionen.json',
        name: 'Lokale_Präpositionen',
      },
      {
        id: '503',
        level: 1,
        file_name: 'temporale_präpositionen.json',
        name: 'Temporale_Präpositionen',
      },
      {
        id: '504',
        level: 1,
        file_name: 'zu_infinitiv.json',
        name: 'Zu_Infinitiv',
      },
    ],
  },
  {
    id: '600',
    name: 'Pluspunkt',
    level: 0,
    children: [
      {
        id: '601',
        name: 'Pluspunkt_A1',
        level: 1,
        children: [
          {
            id: '601_01',
            level: 2,
            file_name: 'a1_u01.json',
            name: 'A1U01',
          },
          {
            id: '601_02',
            level: 2,
            file_name: 'a1_u02.json',
            name: 'A1U02',
          },
          {
            id: '601_03',
            level: 2,
            file_name: 'a1_u03.json',
            name: 'A1U03',
          },
          {
            id: '601_04',
            level: 2,
            file_name: 'a1_u04.json',
            name: 'A1U04',
          },
          {
            id: '601_05',
            level: 2,
            file_name: 'a1_u05.json',
            name: 'A1U06',
          },
          {
            id: '601_06',
            level: 2,
            file_name: 'a1_u06.json',
            name: 'A1U06',
          },
          {
            id: '601_07',
            level: 2,
            file_name: 'a1_u07.json',
            name: 'A1U07',
          },
          {
            id: '601_08',
            level: 2,
            file_name: 'a1_u08.json',
            name: 'A1U08',
          },
          {
            id: '601_09',
            level: 2,
            file_name: 'a1_u09.json',
            name: 'A1U09',
          },
          {
            id: '601_10',
            level: 2,
            file_name: 'a1_u10.json',
            name: 'A1U10',
          },
          {
            id: '601_11',
            level: 2,
            file_name: 'a1_u11.json',
            name: 'A1U11',
          },
          {
            id: '601_12',
            level: 2,
            file_name: 'a1_u12.json',
            name: 'A1U12',
          },
          {
            id: '601_13',
            level: 2,
            file_name: 'a1_u13.json',
            name: 'A1U13',
          },
          {
            id: '601_14',
            level: 2,
            file_name: 'a1_u14.json',
            name: 'A1U14',
          },
        ],
      },
      {
        id: '602',
        name: 'Pluspunkt_A2',
        level: 1,
        children: [
          {
            id: '602_01',
            level: 2,
            file_name: 'a2_u01.json',
            name: 'A2U01',
          },
          {
            id: '602_02',
            level: 2,
            file_name: 'a2_u02.json',
            name: 'A2U02',
          },
          {
            id: '602_03',
            level: 2,
            file_name: 'a2_u03.json',
            name: 'A2U03',
          },
          {
            id: '602_04',
            level: 2,
            file_name: 'a2_u04.json',
            name: 'A2U04',
          },
          {
            id: '602_s1',
            level: 2,
            file_name: 'a2_s1.json',
            name: 'A2S1',
          },
          {
            id: '602_05',
            level: 2,
            file_name: 'a2_u05.json',
            name: 'A2U05',
          },
          {
            id: '602_06',
            level: 2,
            file_name: 'a2_u06.json',
            name: 'A2U06',
          },
          {
            id: '602_07',
            level: 2,
            file_name: 'a2_u07.json',
            name: 'A2U07',
          },
          {
            id: '602_s2',
            level: 2,
            file_name: 'a2_s2.json',
            name: 'A2S2',
          },
          {
            id: '602_08',
            level: 2,
            file_name: 'a2_u08.json',
            name: 'A2U08',
          },
          {
            id: '602_09',
            level: 2,
            file_name: 'a2_u09.json',
            name: 'A2U09',
          },
          {
            id: '602_10',
            level: 2,
            file_name: 'a2_u10.json',
            name: 'A2U10',
          },
          {
            id: '602_11',
            level: 2,
            file_name: 'a2_u11.json',
            name: 'A2U11',
          },
          {
            id: '602_s3',
            level: 2,
            file_name: 'a2_s3.json',
            name: 'A2S3',
          },
          {
            id: '602_12',
            level: 2,
            file_name: 'a2_u12.json',
            name: 'A2U12',
          },
          {
            id: '602_13',
            level: 2,
            file_name: 'a2_u13.json',
            name: 'A2U13',
          },
          { id: '602_14', level: 2, file_name: 'a2_u14.json', name: 'A2U14' },
          {
            id: '602_s4',
            level: 2,
            file_name: 'a2_s4.json',
            name: 'A2S4',
          },
        ],
      },
      {
        id: '603',
        name: 'Pluspunkt_B1',
        level: 1,
        children: [
          {
            id: '603_01',
            level: 2,
            file_name: 'b1_u01.json',
            name: 'B1U01',
          },
          {
            id: '603_02',
            level: 2,
            file_name: 'b1_u02.json',
            name: 'B1U02',
          },
          {
            id: '603_03',
            level: 2,
            file_name: 'b1_u03.json',
            name: 'B1U03',
          },
          {
            id: '603_04',
            level: 2,
            file_name: 'b1_u04.json',
            name: 'B1U04',
          },
          {
            id: '603_05',
            level: 2,
            file_name: 'b1_u05.json',
            name: 'B1U05',
          },
          {
            id: '603_06',
            level: 2,
            file_name: 'b1_u06.json',
            name: 'B1U06',
          },
        ],
      },
    ],
  },
  {
    id: '700',
    name: 'Frontend & Backend',
    level: 0,
    children: [
      {
        id: '701',
        level: 1,
        file_name: 'frontend_backend_01.json',
        name: 'Frontend_Backend_01',
      },
      {
        id: '702',
        level: 1,
        file_name: 'frontend_backend_02.json',
        name: 'Frontend_Backend_02',
      },
      {
        id: '703',
        level: 1,
        file_name: 'frontend_backend_03.json',
        name: 'Frontend_Backend_03',
      },
      {
        id: '704',
        level: 1,
        file_name: 'frontend_backend_04.json',
        name: 'Frontend_Backend_04',
      },
      {
        id: '705',
        level: 1,
        file_name: 'frontend_backend_05.json',
        name: 'Frontend_Backend_05',
      },
      {
        id: '706',
        level: 1,
        file_name: 'frontend_backend_06.json',
        name: 'Frontend_Backend_06',
      },
      {
        id: '707',
        level: 1,
        file_name: 'frontend_1_100.json',
        name: 'Frontend_1_100',
      },
      {
        id: '708',
        level: 1,
        file_name: 'frontend_100_200.json',
        name: 'Frontend_100_200',
      },
    ],
  },
  {
    id: '800',
    name: 'test',
    level: 0,
    children: [
      {
        id: '801',
        level: 0,
        file_name: 'quiz_1.json',
        name: 'Quiz_1',
      },
    ],
  },
];
const allLanguagesTranslate = ['english', 'russian', 'farsi'];

export { alllessons, allLanguagesTranslate, startLesson, noSentenceSelected };
