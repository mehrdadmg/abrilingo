import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseLesson, handleSentenceNo, handleContentsLength } from '../../redux/actionCreator';

//import { GrPrevious } from 'react-icons/gr';

import { getlesson, setlesson } from '../../api/handleLocalStorage';
import { getData } from '../../api/handleIndexedDB';
import QuizList from '../QuizList/QuizList';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import { startLesson } from '../../content/lessons';

import './Quiz.css';

const Quiz = (props) => {
  const dispatch = useDispatch();

  //const dataLesson = useSelector((state) => state.lesson);
  //const contentIndex = useSelector((state) => state.indexSentence);
  //const typePage = useSelector((state) => state.typePage);
  //const activeTab = useSelector((state) => state.isSelectedTabActive);
  //const contentLength = useSelector((state) => state.contentsLength);

  const [quizContent, setQuizContent] = useState([]);
  const [quizIndex, setQuizIndex] = useState(null);

  const [displayed, setDisplayed] = useState('quizList');

  let lesson = getlesson();
  if (!lesson) {
    lesson = startLesson.info.name;
    setlesson(lesson);
  }

  const loadeContent = async () => {
    let lessonContent = await getData(lesson);
    if (lessonContent) {
      dispatch(chooseLesson(lessonContent));
      if (lessonContent.quiz) {
        setQuizContent(lessonContent.quiz);
      } else {
        setQuizContent(null);
      }
    }
  };

  const selectQuiz = (page) => {
    setDisplayed(page);
  };

  const handleQuizIndex = (index) => {
    setQuizIndex(index);
    dispatch(handleContentsLength(quizContent[index].quiz_content.length));
  };

  useEffect(() => {
    (async () => {
      try {
        await loadeContent();
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="quiz">
      <div className="container">
        <div className="flex-container">
          {(() => {
            switch (displayed) {
              case 'quizList':
                return (
                  <QuizList
                    quizContent={quizContent}
                    BackToMainPage={props.BackToMainPage}
                    selectQuiz={selectQuiz}
                    handleQuizIndex={handleQuizIndex}
                  />
                );
              case 'Multiple Choice':
                return <MultipleChoice quiz={quizContent} selectQuiz={selectQuiz} quizIndex={quizIndex} />;

              default:
                return (
                  <QuizList
                    quizContent={quizContent}
                    BackToMainPage={props.BackToMainPage}
                    selectQuiz={selectQuiz}
                    handleQuizIndex={handleQuizIndex}
                  />
                );
            }
          })()}
        </div>
      </div>
    </div>
  );
};
export default Quiz;
