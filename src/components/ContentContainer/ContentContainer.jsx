import { useState, useEffect } from 'react';
import SentenceContainer from '../../UI/SentenceContainer/SentenceContainer';
import SpeechRecognition from '../../UI/SpeechRecognition/SpeechRecognition';
import SelectedSentenceTabs from '../../UI/SelectedSentenceTabs/SelectedSentenceTabs';

import { ImEye } from 'react-icons/im';
import { IoMic } from 'react-icons/io5';

import './ContentContainer.css';

const ContentContainer = (props) => {
  const [viewAnswer, setViewAnswer] = useState(true);
  const [viewSpeechRecognition, setViewSpeechRecognition] = useState(true);

  useEffect(() => {
    setViewAnswer(true);
    setViewSpeechRecognition(true);
  }, [props.content.sentence]); //  [props.content.sentence]

  return (
    <div className="content_container">
      <SelectedSentenceTabs
        handelSelectedTab={() => props.handelSelectedTab()}
        hasSelectedSentence={props.hasSelectedSentence}
      />

      <div className="top_sentenceContainer">
        <SentenceContainer
          text={props.typePage === 'Learn' ? props.content.sentence : props.content[props.translatTo]}
          handelSelectSentence={() => {
            props.handelSelectSentence();
          }}
          isSentenceSelected={props.isSentenceSelected}
          isRTL={props.translatTo === 'farsi' && props.typePage !== 'Learn'}
          hasPlayBtn={props.typePage === 'Learn' ? true : false}
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
            handelSelectSentence={() => {
              props.handelSelectSentence();
            }}
            isSentenceSelected={props.isSentenceSelected}
            isRTL={props.translatTo === 'farsi' && props.typePage === 'Learn'}
            hasPlayBtn={props.typePage === 'Learn' ? false : true}
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
