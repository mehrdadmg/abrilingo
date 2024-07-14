import { useState } from 'react';
import { getLang, setLang } from '../../api/handelLocalStorage';
import { allLanguagesTranslate } from '../../content/lessens';
import { GrLinkPrevious } from 'react-icons/gr';
import './Setting.css';

const Setting = (props) => {
  let lang = getLang();
  if (!lang) {
    lang = allLanguagesTranslate[1];
    setLang(lang);
  }
  const [activeLang, setActiveLang] = useState(lang);
  return (
    <div className="container">
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            props.BackToMainPage();
          }}
        >
          <GrLinkPrevious /> Continue
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
                  setLang(e.target.value);
                  setActiveLang(e.target.value);
                }}
                checked={activeLang === language ? true : false}
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
