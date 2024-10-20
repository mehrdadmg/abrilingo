import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GrPrevious } from 'react-icons/gr';
import BottomActions from '../../UI/BottomActions/BottomActions';
import './MultipleChoice.css';

const MultipleChoice = (props) => {
  const contentLength = useSelector((state) => state.contentsLength);
  const contentIndex = useSelector((state) => state.indexSentence);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };
  useEffect(() => {
    setSelectedAnswer(null);
  }, [contentIndex]);

  return (
    <>
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            props.selectQuiz('quizList');
          }}
        >
          <GrPrevious /> Back to Quiz List
        </button>
        <h2 className="page_name">Quiz</h2>
      </div>
      <div className="card">
        <div className="multiple_choice">
          <p className="description">{props.quiz[props.quizIndex].quiz_info.description}</p>
          <p className="question">
            {contentIndex + 1}/{contentLength}) {props.quiz[props.quizIndex].quiz_content[contentIndex].questionText}
          </p>
          <div className="choices">
            {props.quiz[props.quizIndex].quiz_content[contentIndex].answerOptions.map((item, index) => (
              <button
                key={`answerOptions_${index}`}
                className={`choice-button ${selectedAnswer === index ? 'selected' : ''} ${
                  selectedAnswer !== null && selectedAnswer !== index ? 'no_selected' : ''
                } ${item.isCorrect}`}
                onClick={() => {
                  handleAnswerClick(index);
                }}
              >
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
        <BottomActions />
      </div>
    </>
  );
};
export default MultipleChoice;
