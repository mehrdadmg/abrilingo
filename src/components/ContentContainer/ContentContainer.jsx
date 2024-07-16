import { useState, useEffect } from 'react';
import SentenceContainer from '../../UI/SentenceContainer/SentenceContainer';
import SpeechRecognition from '../../UI/SpeechRecognition/SpeechRecognition';

import { ImEye } from 'react-icons/im';
import { IoMic } from 'react-icons/io5';

import './ContentContainer.css';

const ContentContainer = (props) => {
  const [viewAnswer, setViewAnswer] = useState(true);
  const [viewSpeechRecognition, setViewSpeechRecognition] = useState(true);

  useEffect(() => {
    setViewAnswer(true);
    setViewSpeechRecognition(true);
  }, [props.content.sentence]);

  return (
    <div className="content_container">
      <div className="top_sentenceContainer">
        <SentenceContainer
          text={props.typePage === 'Learn' ? props.content.sentence : props.content[props.translatTo]}
          isRTL={props.translatTo === 'farsi' && props.typePage !== 'Learn'}
          hasPlayBtn={props.typePage === 'Learn' ? true : false}
        />
      </div>
      <div className="bottom_sentenceContainer">
        {viewAnswer && viewSpeechRecognition && (
          <>
            <button className="show_icon" onClick={() => setViewAnswer(false)}>
              <ImEye />
            </button>
            {props.typePage === 'Practice' && (
              <button className="show_icon" onClick={() => setViewSpeechRecognition(false)}>
                <IoMic />
              </button>
            )}
          </>
        )}
        {!viewAnswer && (
          <SentenceContainer
            text={props.typePage === 'Learn' ? props.content[props.translatTo] : props.content.sentence}
            isRTL={props.translatTo === 'farsi' && props.typePage === 'Learn'}
            hasPlayBtn={props.typePage === 'Learn' ? false : true}
          />
        )}
        {!viewSpeechRecognition && <SpeechRecognition text={props.content.sentence} />}
      </div>
    </div>
  );
};

export default ContentContainer;
