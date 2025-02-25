import { useSelector } from 'react-redux';

import TextToSpeech from '../../components/TextToSpeech/TextToSpeech';
import SelectedSentenceButton from '../../components/SelectedSentenceButton/SelectedSentenceButton';

import './SentenceContainer.css';

const SentenceContainer = (props) => {
  const contentLength = useSelector((state) => state.contentsLength);
  const activeTab = useSelector((state) => state.isSelectedTabActive);
  const typePage = useSelector((state) => state.typePage);

  let Text = {};
  let text = '';
  if (props.content.type === 'sentence') {
    text = `${props.content.sentence}`;
    if ((typePage === 'Learn' && props.isTopSentence) || (typePage === 'Practice' && !props.isTopSentence)) {
      Text = <samp>{props.content.sentence}</samp>;
    } else if ((typePage === 'Practice' && props.isTopSentence) || (typePage === 'Learn' && !props.isTopSentence)) {
      Text = <samp>{props.content[props.translatTo]}</samp>;
    }
  } else if (props.content.type === 'verben') {
    text = `${props.content.Infinitive}... ${props.content.Präsens}... ${props.content.Präteritum}... ${props.content.Perfekt}`;
    if ((typePage === 'Learn' && props.isTopSentence) || (typePage === 'Practice' && !props.isTopSentence)) {
      Text = (
        <>
          <span>
            <b>Infinitive:</b> {props.content.Infinitive}
          </span>
          <br />
          <br />
          <span>
            <b>Präsens:</b> {props.content.Präsens}
          </span>
          <br />
          <br />
          <span>
            <b>Präteritum:</b> {props.content.Präteritum}
          </span>
          <br />
          <br />
          <span>
            <b>Perfekt:</b> {props.content.Perfekt}
          </span>
        </>
      );
    } else if ((typePage === 'Practice' && props.isTopSentence) || (typePage === 'Learn' && !props.isTopSentence)) {
      if (props.translatTo === 'russian') {
        Text = (
          <>
            <span>
              <b>Значение:</b> {props.content.russianMeaning}
            </span>
            <br />
            <br />
            <span>
              <b>Применение:</b> {props.content.russianUsage}
            </span>
          </>
        );
      } else if (props.translatTo === 'farsi') {
        Text = (
          <>
            <span>
              <b>معنی :</b> {props.content.farsiMeaning}
            </span>
            <br />
            <br />
            <span>
              <b>کاربرد :</b> {props.content.farsiUsage}
            </span>
          </>
        );
      } else if (props.translatTo === 'english') {
        Text = (
          <>
            <span>
              <b>Meaning:</b> {props.content.englishMeaning}
            </span>
            <br />
            <br />
            <span>
              <b>Usage:</b> {props.content.englishUsage}
            </span>
          </>
        );
      }
    }
  }

  let baseClassName = props.hasPlayBtn ? 'sentence' : 'sentence no_play_btn';

  return (
    <div className="sentenceContainer">
      {!(activeTab && contentLength === 0) && props.hasPlayBtn && <SelectedSentenceButton content={props.content} />}
      <p
        dir={props.isRTL ? 'rtl' : 'ltr'}
        className={props.isRTL ? `${baseClassName} sentence_rtl` : `${baseClassName}`}
      >
        {Text}
      </p>
      {!(activeTab && contentLength === 0) && props.hasPlayBtn && (
        <TextToSpeech text={text} rate={props.rate} pitch={props.pitch} voice={props.voice} />
      )}
    </div>
  );
};

export default SentenceContainer;
