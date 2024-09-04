import { useSelector } from 'react-redux';

import PlayText from '../../components/PlayText/PlayText';
import SelectedSentenceButton from '../../components/SelectedSentenceButton/SelectedSentenceButton';

import './SentenceContainer.css';

const SentenceContainer = (props) => {
  const contentLength = useSelector((state) => state.contentsLength);
  const activeTab = useSelector((state) => state.isSelectedTabActive);

  let baseClassName = props.hasPlayBtn ? 'sentence' : 'sentence no_play_btn';

  return (
    <div className="sentenceContainer">
      {!(activeTab && contentLength === 0) && props.hasPlayBtn && <SelectedSentenceButton content={props.content} />}
      <p
        dir={props.isRTL ? 'rtl' : 'ltr'}
        className={props.isRTL ? `${baseClassName} sentence_rtl` : `${baseClassName}`}
      >
        {props.text}
      </p>
      {!(activeTab && contentLength === 0) && props.hasPlayBtn && (
        <PlayText text={props.text} rate={props.rate} pitch={props.pitch} voice={props.voice} />
      )}
    </div>
  );
};

export default SentenceContainer;
