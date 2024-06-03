import { IoSettingsOutline, IoPersonOutline } from 'react-icons/io5';
import './MainPage.css';

function MainPage(props) {
  return (
    <div className="main_page">
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

      <div className="container">
        <button
          className="top_btn btn"
          onClick={() => {
            props.goToPage('chose_lesson');
          }}
        >
          Chose Lesson <br /> <br />
          <span> Active Lesson: " {props.nameUnit} "</span>
        </button>
        <button
          className="middle_btn btn"
          onClick={() => {
            props.goToPage('learn');
          }}
        >
          Learn
        </button>
        <button
          className="bottom_btn btn"
          onClick={() => {
            props.goToPage('practice');
          }}
        >
          Practice
        </button>
      </div>
    </div>
  );
}

export default MainPage;
