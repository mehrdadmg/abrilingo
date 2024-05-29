import './SentenceContainer.css';

const SentenceContainer = (props) => {
  return (
    <div className="sentenceContainer">
      <p
        dir={props.translatTo === 'farsi' ? 'rtl' : 'ltr'}
        className={props.translatTo === 'farsi' ? 'sentence sentence_rtl' : 'sentence'}
      >
        {props.text}
      </p>
      <button className="play-button">▶</button>
    </div>
  );
};

export default SentenceContainer;
