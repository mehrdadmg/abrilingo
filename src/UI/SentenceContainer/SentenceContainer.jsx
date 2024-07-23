import PlayText from '../../components/PlayText/PlayText';

import './SentenceContainer.css';

const SentenceContainer = (props) => {
  let baseClassName = props.hasPlayBtn ? 'sentence' : 'sentence no_play_btn';

  return (
    <div className="sentenceContainer">
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
