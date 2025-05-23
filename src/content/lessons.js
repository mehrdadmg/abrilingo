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
        file_name: 'verben_mit_präposition_akkusativ.json',
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
      {
        id: '215',
        level: 1,
        file_name: '200_wichtigsten_verben.json',
        name: '200_Wichtigsten_Verben',
      },
      {
        id: '216',
        level: 1,
        file_name: 'grundlegende_unregelmäßige_verben.json',
        name: 'Grundlegende_Unregelmäßige_Verben',
      },
    ],
  },
  {
    id: '300',
    name: 'B1_Fokus',
    level: 0,
    children: [
      {
        id: '332',
        level: 1,
        file_name: 'b1_fokus_wörter_u01.json',
        name: 'B1_Fokus_Wörter_u01',
      },
      {
        id: '301',
        level: 1,
        file_name: 'b1_fokus_u01.json',
        name: 'B1_Fokus_u01',
      },
      {
        id: '333',
        level: 1,
        file_name: 'b1_fokus_wörter_u02.json',
        name: 'B1_Fokus_Wörter_u02',
      },
      {
        id: '302',
        level: 1,
        file_name: 'b1_fokus_u02.json',
        name: 'B1_Fokus_u02',
      },
      {
        id: '334',
        level: 1,
        file_name: 'b1_fokus_wörter_u03.json',
        name: 'B1_Fokus_Wörter_u03',
      },
      {
        id: '303',
        level: 1,
        file_name: 'b1_fokus_u03.json',
        name: 'B1_Fokus_u03',
      },
      {
        id: '335',
        level: 1,
        file_name: 'b1_fokus_wörter_u04.json',
        name: 'B1_Fokus_Wörter_u04',
      },
      {
        id: '304',
        level: 1,
        file_name: 'b1_fokus_u04.json',
        name: 'B1_Fokus_u04',
      },
      {
        id: '336',
        level: 1,
        file_name: 'b1_fokus_wörter_u05.json',
        name: 'B1_Fokus_Wörter_u05',
      },
      {
        id: '305',
        level: 1,
        file_name: 'b1_fokus_u05.json',
        name: 'B1_Fokus_u05',
      },
      {
        id: '337',
        level: 1,
        file_name: 'b1_fokus_wörter_u06.json',
        name: 'B1_Fokus_Wörter_u06',
      },
      {
        id: '306',
        level: 1,
        file_name: 'b1_fokus_u06.json',
        name: 'B1_Fokus_u06',
      },
      {
        id: '338',
        level: 1,
        file_name: 'b1_fokus_wörter_u07.json',
        name: 'B1_Fokus_Wörter_u07',
      },
      {
        id: '307',
        level: 1,
        file_name: 'b1_fokus_u07.json',
        name: 'B1_Fokus_u07',
      },
      {
        id: '339',
        level: 1,
        file_name: 'b1_fokus_wörter_u08.json',
        name: 'B1_Fokus_Wörter_u08',
      },
      {
        id: '308',
        level: 1,
        file_name: 'b1_fokus_u08.json',
        name: 'B1_Fokus_u08',
      },
      {
        id: '340',
        level: 1,
        file_name: 'b1_fokus_wörter_u09.json',
        name: 'B1_Fokus_Wörter_u09',
      },
      {
        id: '310',
        level: 1,
        file_name: 'b1_fokus_u09.json',
        name: 'B1_Fokus_u09',
      },
      {
        id: '341',
        level: 1,
        file_name: 'b1_fokus_wörter_u10.json',
        name: 'B1_Fokus_Wörter_u10',
      },
      {
        id: '311',
        level: 1,
        file_name: 'b1_fokus_u10.json',
        name: 'B1_Fokus_u10',
      },
      {
        id: '342',
        level: 1,
        file_name: 'b1_fokus_wörter_u11.json',
        name: 'B1_Fokus_Wörter_u11',
      },
      {
        id: '332',
        level: 1,
        file_name: 'b1_fokus_u11.json',
        name: 'B1_Fokus_u11',
      },
      {
        id: '343',
        level: 1,
        file_name: 'b1_fokus_wörter_u12.json',
        name: 'B1_Fokus_Wörter_u12',
      },
      {
        id: '344',
        level: 1,
        file_name: 'b1_fokus_u12.json',
        name: 'B1_Fokus_u12',
      },
      {
        id: '345',
        level: 1,
        file_name: 'b1_fokus_wörter_u13.json',
        name: 'B1_Fokus_Wörter_u13',
      },
      {
        id: '346',
        level: 1,
        file_name: 'b1_fokus_u13.json',
        name: 'B1_Fokus_u13',
      },
      {
        id: '347',
        level: 1,
        file_name: 'b1_fokus_wörter_u14.json',
        name: 'B1_Fokus_Wörter_u14',
      },
      {
        id: '348',
        level: 1,
        file_name: 'b1_fokus_u14.json',
        name: 'B1_Fokus_u14',
      },
      {
        id: '309',
        level: 1,
        file_name: 'verben_mit_präposition_fokus_b1.json',
        name: 'Verben_Mit_Präposition_Fokus_B1',
      },
      {
        id: '209',
        level: 1,
        file_name: 'fokus_b1_verben.json',
        name: 'Fokus_B1_Verben',
      },
    ],
  },
  {
    id: '900',
    name: 'B1+_Fokus',
    level: 0,
    children: [
      {
        id: '901',
        level: 1,
        file_name: 'b1_plus_fokus_wörter_01.json',
        name: 'B1_Plus_Fokus_Wörter_01',
      },
      {
        id: '902',
        level: 1,
        file_name: 'b1_plus_fokus_01.json',
        name: 'B1_Plus_Fokus_01',
      },
      {
        id: '903',
        level: 1,
        file_name: 'b1_plus_fokus_wörter_02.json',
        name: 'B1_Plus_Fokus_Wörter_02',
      },
      {
        id: '904',
        level: 1,
        file_name: 'b1_plus_fokus_02.json',
        name: 'B1_Plus_Fokus_02',
      },
    ],
  },
  {
    id: '900',
    name: 'Wortliste',
    level: 0,
    children: [
      {
        id: '910',
        name: 'A1_Wortliste',
        level: 1,
        children: [
          {
            id: '901',
            level: 1,
            file_name: 'a1_wortliste_01.json',
            name: 'A1_Wortliste_01',
          },
          {
            id: '902',
            level: 1,
            file_name: 'a1_wortliste_02.json',
            name: 'A1_Wortliste_02',
          },
          {
            id: '903',
            level: 1,
            file_name: 'a1_wortliste_03.json',
            name: 'A1_Wortliste_03',
          },
          {
            id: '904',
            level: 1,
            file_name: 'a1_wortliste_04.json',
            name: 'A1_Wortliste_04',
          },
          {
            id: '905',
            level: 1,
            file_name: 'a1_wortliste_05.json',
            name: 'A1_Wortliste_05',
          },
          {
            id: '906',
            level: 1,
            file_name: 'a1_wortliste_06.json',
            name: 'A1_Wortliste_06',
          },
        ],
      },
      {
        id: '930',
        name: 'B1_Wortliste',
        level: 1,
        children: [
          {
            id: '931',
            level: 1,
            file_name: 'b1_wortliste_01.json',
            name: 'B1_Wortliste_01',
          },
          {
            id: '932',
            level: 1,
            file_name: 'b1_wortliste_02.json',
            name: 'B1_Wortliste_02',
          },
          {
            id: '933',
            level: 1,
            file_name: 'b1_wortliste_03.json',
            name: 'B1_Wortliste_03',
          },
          {
            id: '934',
            level: 1,
            file_name: 'b1_wortliste_04.json',
            name: 'B1_Wortliste_04',
          },
          {
            id: '935',
            level: 1,
            file_name: 'b1_wortliste_05.json',
            name: 'B1_Wortliste_05',
          },
          {
            id: '936',
            level: 1,
            file_name: 'b1_wortliste_06.json',
            name: 'B1_Wortliste_06',
          },
        ],
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
        file_name: 'lokale_präpositionen_mit_akk.json',
        name: 'Lokale_Präpositionen_Mit_Akk.',
      },
      {
        id: '505',
        level: 1,
        file_name: 'lokale_präpositionen_mit_dat.json',
        name: 'Lokale_Präpositionen_Mit_Dat.',
      },
      {
        id: '506',
        level: 1,
        file_name: 'lokale_präpositionen_mit_dat_akk.json',
        name: 'Lokale_Präpositionen_Mit_Dat._Akk.',
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
    id: '1000',
    name: 'Mein Mündliche Prüfung Teil 1(Beruf B1)',
    level: 0,
    children: [
      {
        id: '1001',
        level: 1,
        file_name: '1_beschreiben_sie_einen_arbeitgeber.json',
        name: '1_Beschreiben_Sie_einen_Arbeitgeber',
      },
      {
        id: '1002',
        level: 1,
        file_name: '2_beschreiben_sie_einen_bestimmten_Beruf.json',
        name: '2_Beschreiben_Sie_einen_bestimmten_Beruf',
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
