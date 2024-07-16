import { useState } from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';
import { FaCirclePlay } from 'react-icons/fa6';
import { IoMicCircleSharp } from 'react-icons/io5';
import { IoStopCircleSharp } from 'react-icons/io5';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import './SpeechRecognition.css';

const SpeechRecognition = (props) => {
  const { speak, voices } = useSpeechSynthesis();

  const [value, setValue] = useState('');
  const [viewAnswer, setViewAnswer] = useState(false);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const toggle = listening
    ? stop
    : () => {
        listen({ lang: 'de-DE' });
      };

  const handleanswer = () => setViewAnswer(!viewAnswer);

  const handleSpeak = (text) => {
    let tempVoice;
    const selectVoice = () => {
      tempVoice = voices.find((v) => v.voiceURI === 'Google Deutsch' && v.lang === 'de-DE');
      if (tempVoice) {
        return tempVoice;
      }

      tempVoice = voices.find((v) => v.voiceURI === 'com.apple.voice.compact.de-DE.Anna' && v.lang === 'de-DE');
      if (tempVoice) {
        return tempVoice;
      }

      tempVoice = voices.find((v) => v.lang === 'de-DE');
      if (tempVoice) {
        return tempVoice;
      }
      return tempVoice;
    };
    speak({
      text,
      //voice: voices.find((v) => v.voiceURI === 'Google Deutsch' && v.lang === 'de-DE'),
      voice: selectVoice(),
      rate: 0.9,
    });
  };

  return (
    <div className="speechRecognitionContainer">
      <div className="textarea">
        <textarea value={value} onChange={(event) => setValue(event.target.value)} autofocus />
        <button
          className="answer-btn"
          onClick={() => {
            handleanswer();
          }}
        >
          <IoCheckmarkCircleOutline />
        </button>
        <button className="record-btn" onClick={toggle}>
          {listening ? <IoStopCircleSharp /> : <IoMicCircleSharp />}
        </button>
        {/* {listening && <div>Go ahead I'm listening</div>} */}
      </div>

      {viewAnswer && (
        <div className="answerContainer">
          <p className="answer">{props.text}</p>
          <button
            className="play-button"
            onClick={() => {
              handleSpeak(props.text);
            }}
          >
            <FaCirclePlay />
          </button>
        </div>
      )}
    </div>
  );
};

export default SpeechRecognition;
