// src/WordReview.js
import { useState, useEffect, useRef } from 'react';
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
  const rateRef = useRef();
  const pitchRef = useRef();
  const voiceURI = getVoiceURI();

  const { voices } = useSpeechSynthesis();

  const voice = voices.find((v) => v.voiceURI === voiceURI);

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
    console.log('LearningSentences useEffect render');
    rateRef.current = getRate();
    pitchRef.current = getPitch();
    loadeContent();
  }, []);

  //useEffect(() => console.log('LearningSentences voice: ', voices), [voices]);

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
  console.log('LearningSentences render');

  if (learnContent.info.name === lessen) {
    return (
      <div className="learning-sentences">
        <div className="container">
          <div className="flex-container">
            <div className="header">
              <button
                className="back-button"
                onClick={() => {
                  props.BackToMainPage();
                }}
              >
                <GrPrevious /> Main Page
              </button>
            </div>
            <div className="review-status">
              <h2 className="unit_name">{`${props.typePage} : ${learnContent.info.name}`}</h2>{' '}
              {/* ${learnContent.info.learning} */}
              <span>{`${contentIndex + 1}/${learnContent.content.length} Sentences reviewed`}</span>
            </div>
            <div className="card">
              <ContentContainer
                content={learnContent.content[contentIndex]}
                translatTo={getLang()}
                typePage={props.typePage}
                rate={rateRef.current}
                pitch={pitchRef.current}
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
        </div>
      </div>
    );
  } else return <div>Loade.....</div>;
};

export default LearningSentences;
