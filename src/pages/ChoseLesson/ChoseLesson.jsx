import { allLessonTitle } from '../../content/lessons';

import './ChoseLesson.css';

const ChoseLesson = (props) => {
  return (
    <div className="container">
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            props.BackToMainPage();
          }}
        >
          &larr; Back
        </button>
      </div>
      <div className="wrapper_unit">
        <h2 className="setting_titel">Select a Unit</h2>

        {allLessonTitle.map((lessonName, index) => {
          return (
            <label key={index} className="input_unit">
              <input
                type="radio"
                name="myLesson"
                value={lessonName}
                onChange={(e) => {
                  props.fancChoosenLesson(e.target.value);
                }}
              />
              {lessonName}
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default ChoseLesson;
