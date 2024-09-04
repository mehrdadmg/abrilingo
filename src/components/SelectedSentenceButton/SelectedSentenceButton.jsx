import { useDispatch, useSelector } from 'react-redux';

import { toggleSelecteSentence, handleContentsLength, handleSentenceNo } from '../../redux/actionCreator';
import { putlessonToIndexedDB } from '../../api/handleIndexedDB';

import { GoBookmarkFill, GoBookmark } from 'react-icons/go';

import './SelectedSentenceButton.css';

const SelecteSentenceButton = (props) => {
  const dispatch = useDispatch();
  const dataLesson = useSelector((state) => state.lesson);
  const activeTab = useSelector((state) => state.isSelectedTabActive);
  const contentIndex = useSelector((state) => state.indexSentence);

  const handleSelecteSentence = async (id) => {
    dispatch(toggleSelecteSentence(id));

    let tempContent = dataLesson.content.map((sentence) =>
      sentence.id === id ? { ...sentence, isSelected: !sentence.isSelected } : sentence
    );
    await putlessonToIndexedDB(dataLesson.info.name, { ...dataLesson, content: tempContent });

    if (activeTab) {
      let selectedContentLength = tempContent.filter((item) => item.isSelected === true).length;
      dispatch(handleContentsLength(selectedContentLength));
      if (selectedContentLength <= contentIndex) {
        dispatch(handleSentenceNo(contentIndex - 1));
      }
    }
  };

  return (
    <div className="selecte_sentence_button">
      <button
        className=""
        onClick={() => {
          handleSelecteSentence(props.content.id);
        }}
      >
        {props.content.isSelected ? <GoBookmarkFill /> : <GoBookmark />}
      </button>
    </div>
  );
};

export default SelecteSentenceButton;
