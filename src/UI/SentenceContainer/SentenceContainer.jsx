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
      {props.hasPlayBtn && <button className="play-button">▶</button>}
    </div>
  );
};

export default SentenceContainer;
