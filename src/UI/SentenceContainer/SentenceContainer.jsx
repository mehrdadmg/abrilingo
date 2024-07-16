import { useSpeechSynthesis } from 'react-speech-kit';
import { FaCirclePlay } from 'react-icons/fa6';
import './SentenceContainer.css';

const SentenceContainer = (props) => {
  const { speak, voices } = useSpeechSynthesis();
  let baseClassName = props.hasPlayBtn ? 'sentence' : 'sentence no_play_btn';

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
    <div className="sentenceContainer">
      <p
        dir={props.isRTL ? 'rtl' : 'ltr'}
        className={props.isRTL ? `${baseClassName} sentence_rtl` : `${baseClassName}`}
      >
        {props.text}
      </p>
      {props.hasPlayBtn && (
        <button
          className="play-button"
          onClick={() => {
            handleSpeak(props.text);
          }}
        >
          <FaCirclePlay />
        </button>
      )}
    </div>
  );
};

export default SentenceContainer;
