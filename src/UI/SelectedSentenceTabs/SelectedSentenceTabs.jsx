import { useDispatch, useSelector } from 'react-redux';
import { handleContentsLength, handleSelectedTabActive, handleSentenceNo } from '../../redux/actionCreator';
import { getLearnSentenceNo, getPracticeSentenceNo } from '../../api/handleLocalStorage';
import './SelectedSentenceTabs.css';

const SelectedSentenceTabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.isSelectedTabActive);
  const dataLesson = useSelector((state) => state.lesson);
  const typePage = useSelector((state) => state.typePage);

  return (
    <div className="selected_sentence_tabs">
      <div className="tabs">
        <button
          className={`tab ${!activeTab ? 'active' : ''}`}
          onClick={() => {
            dispatch(handleContentsLength(dataLesson.content.length));
            dispatch(handleSelectedTabActive(false));
            if (typePage === 'Learn') {
              dispatch(handleSentenceNo(parseInt(getLearnSentenceNo())));
            } else if (typePage === 'Practice') {
              dispatch(handleSentenceNo(parseInt(getPracticeSentenceNo())));
            }
          }}
        >
          All Sentences
        </button>

        <button
          className={`tab ${activeTab ? 'active' : ''}`}
          onClick={() => {
            dispatch(handleContentsLength(dataLesson.content.filter((item) => item.isSelected === true).length));
            dispatch(handleSelectedTabActive(true));
            dispatch(handleSentenceNo(0));
          }}
        >
          Selected Sntences
        </button>
      </div>
    </div>
  );
};

export default SelectedSentenceTabs;
