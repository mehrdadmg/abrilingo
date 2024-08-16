import { useEffect, useState } from 'react';

import { GoBookmarkFill, GoBookmark } from 'react-icons/go';

import './SelectedSentenceButton.css';

const SelecteSentenceButton = (props) => {
  const [selecteSentence, setSelecteSentence] = useState(props.isSentenceSelected);

  useEffect(() => {
    setSelecteSentence(props.isSentenceSelected);
    //setSelecteSentence((prev) => !prev);
  }, [props.isSentenceSelected]);

  /* const handleSelecteSentence = () => {
    console.log('props: ', props.isSentenceSelected);
    setSelecteSentence(props.isSentenceSelected);
  }; */
  console.log('SelecteSentenceButton: ', props.isSentenceSelected);

  return (
    <div className="selecte_sentence_button">
      <button
        className=""
        onClick={() => {
          props.handelSelectSentence();
          setSelecteSentence((prev) => !prev);
        }}
      >
        {/* props.isSentenceSelected */ selecteSentence ? <GoBookmarkFill /> : <GoBookmark />}
      </button>
    </div>
  );
};

export default SelecteSentenceButton;
