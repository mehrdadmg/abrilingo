import { useDispatch } from 'react-redux';
import { handleTypePage, handleSelectedTabActive, handleSentenceNo } from '../../redux/actionCreator';

import { getlesson, setlesson, getLearnSentenceNo, getPracticeSentenceNo } from '../../api/handleLocalStorage';
import { startLesson } from '../../content/lessons';

import { IoSettingsOutline, IoPersonOutline } from 'react-icons/io5';
import './MainPage.css';

function MainPage(props) {
  const dispatch = useDispatch();

  let lesson = getlesson();
  if (!lesson) {
    lesson = startLesson.info.name;
    setlesson(lesson);
  }

  return (
    <div className="main_page">
      <div className="container">
        <div className="app_header">
          <div>
            <button className="show_icon" onClick={() => {}}>
              <IoPersonOutline />
            </button>
          </div>
          <div className="app_name">
            <h2>Abri Lingo</h2>
          </div>
          <div>
            <button
              className="show_icon"
              onClick={() => {
                props.goToPage('setting');
              }}
            >
              <IoSettingsOutline />
            </button>
          </div>
        </div>

        <div className="">
          <button
            className="top_btn btn"
            onClick={() => {
              props.goToPage('chose_lesson');
            }}
          >
            Chose lesson <br /> <br />
            <span> Active lesson: " {lesson} "</span>
          </button>
          <button
            className="middle_btn btn"
            onClick={() => {
              props.goToPage('learn');
              dispatch(handleTypePage('Learn'));
              dispatch(handleSelectedTabActive(false));
              dispatch(handleSentenceNo(parseInt(getLearnSentenceNo())));
            }}
          >
            Learn
          </button>
          <button
            className="bottom_btn btn"
            onClick={() => {
              props.goToPage('practice');
              dispatch(handleTypePage('Practice'));
              dispatch(handleSelectedTabActive(false));
              dispatch(handleSentenceNo(parseInt(getPracticeSentenceNo())));
            }}
          >
            Practice
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
