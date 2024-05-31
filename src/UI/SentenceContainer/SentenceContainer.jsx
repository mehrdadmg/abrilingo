import './SentenceContainer.css';

const SentenceContainer = (props) => {
  return (
    <div className="sentenceContainer">
      <p dir={props.isRTL ? 'rtl' : 'ltr'} className={props.isRTL ? 'sentence sentence_rtl' : 'sentence'}>
        {props.text}
      </p>
      <button className="play-button">▶</button>
    </div>
  );
};

export default SentenceContainer;
