import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
// import PlayText from '../../components/PlayText/PlayText';
import TextToSpeech from '../../components/TextToSpeech/TextToSpeech';

import { IoMicCircleSharp } from 'react-icons/io5';
import { IoStopCircleSharp } from 'react-icons/io5';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

import './SpeechRecognition.css';

const SpeechRecognition = (props) => {
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

  return (
    <div className="speechRecognitionContainer">
      <div className="textarea">
        <textarea value={value} onChange={(event) => setValue(event.target.value)} />
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
      </div>

      {viewAnswer && (
        <div className="answerContainer">
          <p className="answer">{props.text}</p>
          {/* <PlayText text={props.text} rate={props.rate} pitch={props.pitch} voice={props.voice} /> */}
          <TextToSpeech text={props.text} rate={props.rate} pitch={props.pitch} voice={props.voice} />
        </div>
      )}
    </div>
  );
};

export default SpeechRecognition;
