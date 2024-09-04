import { useSpeechSynthesis } from 'react-speech-kit';

import { FaCirclePlay } from 'react-icons/fa6';

import './PlayText.css';

const PlayText = (props) => {
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    speak({
      text: props.text,
      rate: props.rate,
      pitch: props.pitch,
      voice: props.voice,
    });
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
