import { useDispatch, useSelector } from 'react-redux';
import { handleSentenceNo } from '../../redux/actionCreator';

import { GrPrevious } from 'react-icons/gr';
//import { BsUiChecksGrid } from "react-icons/bs";
//<BsUiChecksGrid />
const QuizList = (props) => {
  const dispatch = useDispatch();

  //console.log('QuizList: ', props);
  const dataLesson = useSelector((state) => state.lesson);
  //console.log('QuizList: ', dataLesson.quiz);
  return (
    <>
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            props.BackToMainPage();
          }}
        >
          <GrPrevious /> Main Page
        </button>
        <h2 className="page_name">Quiz</h2>
      </div>
      <div className="card">
        <div className="quiz_btn">
          {dataLesson.quiz &&
            dataLesson.quiz.length &&
            dataLesson.quiz.map((item, index) => (
              <button
                key={index}
                className="btn"
                /* allQuizContent={props.quizContent} */
                onClick={() => {
                  dispatch(handleSentenceNo(0));
                  props.selectQuiz(item.quiz_info.type);
                  props.handleQuizIndex(index);
                }}
              >
                {index + 1}. {item.quiz_info.type}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};
export default QuizList;
