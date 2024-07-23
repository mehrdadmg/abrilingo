import { useSpeechSynthesis } from 'react-speech-kit';

//import { getVoiceURI } from '../../api/handelLocalStorage';
import { FaCirclePlay } from 'react-icons/fa6';

import './PlayText.css';

const PlayText = (props) => {
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    if (props.voice) {
      speak({
        text: props.text,
        rate: props.rate,
        pitch: props.pitch,
        voice: props.voice,
      });
    } else {
      console.error('Selected voice is not available');
    }
  };
  return (
    <button
      type="button"
      className="play-button"
      onClick={() => {
        handleSpeak();
      }}
    >
      <FaCirclePlay />
    </button>
  );
};
export default PlayText;
