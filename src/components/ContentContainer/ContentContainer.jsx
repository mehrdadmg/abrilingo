import { useState, useEffect } from 'react';
import SentenceContainer from '../../UI/SentenceContainer/SentenceContainer';

import { ImEye } from 'react-icons/im';

import './ContentContainer.css';

const ContentContainer = (props) => {
  const [secondPart, setSecondPart] = useState(true);

  useEffect(() => {
    setSecondPart(true);
  }, [props.content.sentence]);

  return (
    <div className="content_container">
      <div className="top_sentenceContainer">
        <SentenceContainer
          text={props.typePage === 'Learn' ? props.content.sentence : props.content[props.translatTo]}
          isRTL={props.translatTo === 'farsi' && props.typePage !== 'Learn'}
          hasPlayBtn={props.typePage === 'Learn' ? true : false}
        />
      </div>
      <div className="bottom_sentenceContainer">
        {secondPart ? (
          <button className="show_icon" onClick={() => setSecondPart(false)}>
            <ImEye />
          </button>
        ) : (
          <SentenceContainer
            text={props.typePage === 'Learn' ? props.content[props.translatTo] : props.content.sentence}
            isRTL={props.translatTo === 'farsi' && props.typePage === 'Learn'}
            hasPlayBtn={props.typePage === 'Learn' ? false : true}
          />
        )}
      </div>
    </div>
  );
};

export default ContentContainer;
