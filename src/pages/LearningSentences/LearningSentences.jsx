// src/WordReview.js
import { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

import { GrPrevious } from 'react-icons/gr';

import BottomActions from '../../UI/BottomActions/BottomActions';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import {
  getlessen,
  setlessen,
  getLang,
  getLearnSentenceNo,
  setLearnSentenceNo,
  getPracticeSentenceNo,
  setPracticeSentenceNo,
  getVoiceURI,
  getRate,
  getPitch,
} from '../../api/handelLocalStorage';
import { getData } from '../../api/handelIndexedDB';

import { startLessen } from '../../content/lessens';

import './LearningSentences.css';

const LearningSentences = (props) => {
  const rate = getRate();
  const pitch = getPitch();
  let voiceURI = getVoiceURI();

  const { voices } = useSpeechSynthesis();
  let voice = voices.find((v) => v.voiceURI === voiceURI);

  let lessen = getlessen();
  if (!lessen) {
    lessen = startLessen.info.name;
    setlessen(lessen);
  }
  let sentenceNo;
  if (props.typePage === 'Learn') {
    sentenceNo = getLearnSentenceNo();
  } else if (props.typePage === 'Practice') {
    sentenceNo = getPracticeSentenceNo();
  }

  const [contentIndex, setContentIndex] = useState(parseInt(sentenceNo));
  const [learnContent, setLearnContent] = useState(startLessen);

  const loadeContent = async () => {
    let content = await getData(lessen);
    if (content && content.content) {
      setLearnContent(content);
    } else {
      setLearnContent(startLessen);
    }
  };

  useEffect(() => {
    loadeContent();
  }, []);

  const handlerNextContent = () => {
    if (contentIndex < learnContent.content.length - 1) {
      setContentIndex(contentIndex + 1);

      if (props.typePage === 'Learn') {
        setLearnSentenceNo(contentIndex + 1);
      } else if (props.typePage === 'Practice') {
        setPracticeSentenceNo(contentIndex + 1);
      }
    }
  };

  const handlerPreviousContent = () => {
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1);

      if (props.typePage === 'Learn') {
        setLearnSentenceNo(contentIndex - 1);
      } else if (props.typePage === 'Practice') {
        setPracticeSentenceNo(contentIndex - 1);
      }
    }
  };
  if (learnContent.info.name === lessen) {
    return (
      <div className="container">
        <div className="header">
          <button
            className="back-button"
            onClick={() => {
              props.BackToMainPage();
            }}
          >
            <GrPrevious /> Main Page
          </button>
          <h2 className="unit_name">{`${props.typePage} ${learnContent.info.learning}: ${learnContent.info.name}`}</h2>
        </div>
        <div className="review-status">
          <span>{`${contentIndex + 1}/${learnContent.content.length} Sentences reviewed`}</span>
        </div>
        <div className="card">
          <ContentContainer
            content={learnContent.content[contentIndex]}
            translatTo={getLang()}
            typePage={props.typePage}
            rate={rate}
            pitch={pitch}
            voice={voice}
          />
          <BottomActions
            next={handlerNextContent}
            previous={handlerPreviousContent}
            contentIndex={contentIndex}
            contentLength={learnContent.content.length}
          />
        </div>
      </div>
    );
  } else return <div>Loade.....</div>;
};

export default LearningSentences;
