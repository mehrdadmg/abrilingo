import PlayText from '../../components/PlayText/PlayText';
import SelectedSentenceButton from '../../components/SelectedSentenceButton/SelectedSentenceButton';

import './SentenceContainer.css';

const SentenceContainer = (props) => {
  let baseClassName = props.hasPlayBtn ? 'sentence' : 'sentence no_play_btn';

  return (
    <div className="sentenceContainer">
      {props.hasPlayBtn && (
        <SelectedSentenceButton
          isSentenceSelected={props.isSentenceSelected}
          handelSelectSentence={() => {
            props.handelSelectSentence();
          }}
        />
      )}
      <p
        dir={props.isRTL ? 'rtl' : 'ltr'}
        className={props.isRTL ? `${baseClassName} sentence_rtl` : `${baseClassName}`}
      >
        {props.text}
      </p>
      {props.hasPlayBtn && <PlayText text={props.text} rate={props.rate} pitch={props.pitch} voice={props.voice} />}
    </div>
  );
};

export default SentenceContainer;
