import { useSelector, useDispatch } from 'react-redux';
import { handleSentenceNo } from '../../redux/actionCreator';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { setLearnSentenceNo, setPracticeSentenceNo } from '../../api/handleLocalStorage';

import './BottomActions.css';

const BottomActions = (props) => {
  const dispatch = useDispatch();
  const indexState = useSelector((state) => state.indexSentence);
  const dataLesson = useSelector((state) => state.lesson);
  const typePage = useSelector((state) => state.typePage);
  const contentLength = useSelector((state) => state.contentsLength);
  const activeTab = useSelector((state) => state.isSelectedTabActive);

  const handlerNextContent = () => {
    if (parseInt(indexState) < contentLength - 1) {
      let tempIndex = parseInt(indexState) + 1;
      dispatch(handleSentenceNo(tempIndex));
      if (!activeTab) {
        if (typePage === 'Learn') {
          setLearnSentenceNo(tempIndex);
        } else if (typePage === 'Practice') {
          setPracticeSentenceNo(tempIndex);
        }
      }
    }
  };

  const handlerPreviousContent = () => {
    if (parseInt(indexState) > 0) {
      let tempIndex = parseInt(indexState) - 1;
      dispatch(handleSentenceNo(tempIndex));
      if (!activeTab) {
        if (typePage === 'Learn') {
          setLearnSentenceNo(tempIndex);
        } else if (typePage === 'Practice') {
          setPracticeSentenceNo(tempIndex);
        }
      }
    }
  };

  return (
    <div className="bottom_actions">
      <button
        className="action-btn btn_left"
        onClick={handlerPreviousContent}
        disabled={(activeTab && contentLength === 0) || indexState === 0 ? true : false}
      >
        <GrPrevious /> Previous
      </button>

      <button
        className="action-btn btn_right"
        onClick={handlerNextContent}
        disabled={(activeTab && contentLength === 0) || contentLength - indexState === 1 ? true : false}
      >
        Next <GrNext />
      </button>
    </div>
  );
};

export default BottomActions;
