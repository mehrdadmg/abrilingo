import a1_u07 from './deutschSentences_a1_u07';
import a1_u08 from './deutschSentences_a1_u08';
import a1_u14 from './deutschSentences_a1_u14';

const allLessonsContent = [a1_u07, a1_u08, a1_u14];
const allLanguagesTranslate = ['english', 'russian', 'farsi'];

const allLessonTitle = allLessonsContent.map((lesson) => {
  return lesson.info.name;
});

const fancContentLesson = (lessonName) => allLessonsContent.find(({ info }) => info.name === lessonName);

export { allLessonTitle, fancContentLesson, allLanguagesTranslate };
