// src/WordReview.js
import BottomActions from '../../UI/BottomActions/BottomActions';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

import './LearningSentences.css';
import { useState } from 'react';

const LearningSentences = (props) => {
  const [contentIndex, setContentIndex] = useState(0);

  const handlerNextContent = () => {
    if (contentIndex < props.learnContent.content.length - 1) {
      setContentIndex(contentIndex + 1);
    }
  };

  const handlerPreviousContent = () => {
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            props.BackToMainPage();
          }}
        >
          &larr; Back
        </button>
        <h2 className="unit_name">{`${props.typePage} ${props.learnContent.info.learning}: ${props.learnContent.info.name}`}</h2>
      </div>
      <div className="review-status">
        <span>{`${contentIndex + 1}/${props.learnContent.content.length} Sentences reviewed`}</span>
      </div>
      <div className="card">
        <ContentContainer
          content={props.learnContent.content[contentIndex]}
          translatTo={props.translatTo}
          typePage={props.typePage}
        />
        <BottomActions next={handlerNextContent} previous={handlerPreviousContent} />
      </div>
    </div>
  );
};

export default LearningSentences;
