import { allLanguagesTranslate } from '../../content/lessons';

import './Setting.css';

const Setting = (props) => {
  return (
    <div className="container">
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            props.BackToMainPage();
          }}
        >
          &larr; Continue
        </button>
        <h2 className="page_name">Settings</h2>
      </div>
      <div className="wrapper_lang">
        <h2 className="setting_titel">Select translation language</h2>
        {allLanguagesTranslate.map((language, index) => {
          return (
            <label key={index} className="input_language">
              <input
                type="radio"
                name="myLanguage"
                value={language}
                onChange={(e) => {
                  props.fancLanguageTranslate(e.target.value);
                }}
                checked={props.lang === language ? true : false}
              />
              {language}
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default Setting;
