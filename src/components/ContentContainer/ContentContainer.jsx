import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import SentenceContainer from '../../UI/SentenceContainer/SentenceContainer';
import SpeechRecognition from '../../UI/SpeechRecognition/SpeechRecognition';
import SelectedSentenceTabs from '../../UI/SelectedSentenceTabs/SelectedSentenceTabs';

import { ImEye } from 'react-icons/im';
import { IoMic } from 'react-icons/io5';

import './ContentContainer.css';

const ContentContainer = (props) => {
  const typePage = useSelector((state) => state.typePage);
  const indexState = useSelector((state) => state.indexSentence);

  const [viewAnswer, setViewAnswer] = useState(true);
  const [viewSpeechRecognition, setViewSpeechRecognition] = useState(true);

  useEffect(() => {
    setViewAnswer(true);
    setViewSpeechRecognition(true);
  }, [indexState]);
  return (
    <div className="content_container">
      <SelectedSentenceTabs />

      <div className="top_sentenceContainer">
        <SentenceContainer
          text={typePage === 'Learn' ? props.content.sentence : props.content[props.translatTo]}
          content={props.content}
          isRTL={props.translatTo === 'farsi' && typePage !== 'Learn'}
          hasPlayBtn={typePage === 'Learn' ? true : false}
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
            text={typePage === 'Learn' ? props.content[props.translatTo] : props.content.sentence}
            content={props.content}
            isRTL={props.translatTo === 'farsi' && typePage === 'Learn'}
            hasPlayBtn={typePage === 'Learn' ? false : true}
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
};

export default ContentContainer;
