import a1_u07 from './deutschSentences_a1_u07';
import a1_u08 from './deutschSentences_a1_u08';
import a1_u09 from './deutschSentences_a1_u09';
import a1_u10 from './deutschSentences_a1_u10';
import a1_u11 from './deutschSentences_a1_u11';
import a1_u12 from './deutschSentences_a1_u12';
import a1_u13 from './deutschSentences_a1_u13';

import a1_u14 from './deutschSentences_a1_u14';

const allLessonsContent = [a1_u07, a1_u08, a1_u09, a1_u10, a1_u11, a1_u12, a1_u13, a1_u14];
const allLanguagesTranslate = ['english', 'russian', 'farsi'];

const allLessonTitle = allLessonsContent.map((lesson) => {
  return lesson.info.name;
});

const fancContentLesson = (lessonName) => allLessonsContent.find(({ info }) => info.name === lessonName);

export { allLessonTitle, fancContentLesson, allLanguagesTranslate };
