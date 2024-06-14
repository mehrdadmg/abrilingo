import a1_u06 from './deutschSentences_a1_u06';
import a1_u07 from './deutschSentences_a1_u07';
import a1_u08 from './deutschSentences_a1_u08';
import a1_u09 from './deutschSentences_a1_u09';
import a1_u10 from './deutschSentences_a1_u10';
import a1_u11 from './deutschSentences_a1_u11';
import a1_u12 from './deutschSentences_a1_u12';
import a1_u13 from './deutschSentences_a1_u13';
import a1_u14 from './deutschSentences_a1_u14';

import a2_u01 from './deutschSentences_a2_u01';
import a2_u02 from './deutschSentences_a2_u02';
import a2_u03 from './deutschSentences_a2_u03';
import a2_u04 from './deutschSentences_a2_u04';
import a2_s1 from './deutschSentences_a2_s1';
import a2_u05 from './deutschSentences_a2_u05';
import a2_u06 from './deutschSentences_a2_u06';
import a2_u07 from './deutschSentences_a2_u07';
import a2_u08 from './deutschSentences_a2_u08';
import a2_s2 from './deutschSentences_a2_s2';
import a2_u09 from './deutschSentences_a2_u09';
import a2_u10 from './deutschSentences_a2_u10';
import a2_u11 from './deutschSentences_a2_u11';
import a2_s3 from './deutschSentences_a2_s3';
import a2_u12 from './deutschSentences_a2_u12';
import a2_u13 from './deutschSentences_a2_u13';
import a2_u14 from './deutschSentences_a2_u14';
import a2_s4 from './deutschSentences_a2_s4';
import frontend_1_100 from './deutschSentences_frontend_1_100.js';
import frontend_100_200 from './deutschSentences_frontend_100_200.js';
import alle_konnektoren from './deutschSentences_alle_konnektoren.js';

import verben_01 from './verben_01.js';
import verben_02 from './verben_02.js';

const allLessonsContent = [
  verben_01,
  verben_02,
  a1_u06,
  a1_u07,
  a1_u08,
  a1_u09,
  a1_u10,
  a1_u11,
  a1_u12,
  a1_u13,
  a1_u14,
  a2_u01,
  a2_u02,
  a2_u03,
  a2_u04,
  a2_s1,
  a2_u05,
  a2_u06,
  a2_u07,
  a2_s2,
  a2_u08,
  a2_u09,
  a2_u10,
  a2_u11,
  a2_s3,
  a2_u12,
  a2_u13,
  a2_u14,
  a2_s4,
  alle_konnektoren,
  frontend_1_100,
  frontend_100_200,
];
const defaultLesson = 'Verben_01';
const allLanguagesTranslate = ['english', 'russian', 'farsi'];

const allLessonTitle = allLessonsContent.map((lesson) => {
  return lesson.info.name;
});

const fancContentLesson = (lessonName) => allLessonsContent.find(({ info }) => info.name === lessonName);

export { allLessonTitle, fancContentLesson, allLanguagesTranslate, defaultLesson };
