import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import SentenceContainer from '../../UI/SentenceContainer/SentenceContainer';
import SpeechRecognition from '../../UI/SpeechRecognition/SpeechRecognition';
import SelectedSentenceTabs from '../../UI/SelectedSentenceTabs/SelectedSentenceTabs';

import { ImEye } from 'react-icons/im';
import { IoMic } from 'react-icons/io5';

import './ContentContainer.css';

const ContentContainer = forwardRef((props, ref) => {
  const typePage = useSelector((state) => state.typePage);
  const indexState = useSelector((state) => state.indexSentence);
  const [viewAnswer, setViewAnswer] = useState(true);
  const [viewSpeechRecognition, setViewSpeechRecognition] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('forward');

  useImperativeHandle(ref, () => ({
    prepareTransition: (newDirection) => {
      setDirection(newDirection);
      setIsTransitioning(true);
      // Reset transition state after animation completes
      setTimeout(() => setIsTransitioning(false), 300);
    },
  }));

  useEffect(() => {
    setViewAnswer(true);
    setViewSpeechRecognition(true);
  }, [indexState]);

  const renderContent = (content) => (
    <div className="content-wrapper">
      <div className="top_sentenceContainer">
        <SentenceContainer
          isTopSentence={true}
          translatTo={props.translatTo}
          content={content}
          isRTL={props.translatTo === 'farsi' && typePage !== 'Learn'}
          hasPlayBtn={typePage === 'Learn'}
          rate={props.rate}
          pitch={props.pitch}
          voice={props.voice}
        />
      </div>
      <div className="bottom_sentenceContainer">
        {viewAnswer && viewSpeechRecognition && (
          <>
            <button className="show_icon" onClick={() => setViewAnswer(false)}>
              <ImEye />
            </button>
            {typePage === 'Practice' && (
              <button className="show_icon" onClick={() => setViewSpeechRecognition(false)}>
                <IoMic />
              </button>
            )}
          </>
        )}
        {!viewAnswer && (
          <SentenceContainer
            isTopSentence={false}
            translatTo={props.translatTo}
            content={props.content}
            isRTL={props.translatTo === 'farsi' && typePage === 'Learn'}
            hasPlayBtn={typePage !== 'Learn'}
            rate={props.rate}
            pitch={props.pitch}
            voice={props.voice}
          />
        )}
        {!viewSpeechRecognition && (
          <SpeechRecognition text={props.content.sentence} rate={props.rate} pitch={props.pitch} voice={props.voice} />
        )}
      </div>
    </div>
  );

  return (
    <div className="content_container">
      <SelectedSentenceTabs />
      <div className="animation-container">
        <CSSTransition
          in={!isTransitioning}
          timeout={300}
          classNames={direction === 'forward' ? 'slide-forward' : 'slide-backward'}
          unmountOnExit
        >
          {renderContent(props.content)}
        </CSSTransition>
      </div>
    </div>
  );
});

export default ContentContainer;
