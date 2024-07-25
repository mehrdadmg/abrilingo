import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import {
  getLang,
  setLang,
  getVoiceURI,
  setVoiceURI,
  getRate,
  setRate,
  getPitch,
  setPitch,
} from '../../api/handelLocalStorage';
import { allLanguagesTranslate } from '../../content/lessens';
import PlayText from '../../components/PlayText/PlayText';
import { GrPrevious } from 'react-icons/gr';

import './Setting.css';

const Setting = (props) => {
  let lang = getLang();
  if (!lang) {
    lang = allLanguagesTranslate[1];
    setLang(lang);
  }

  let voiceURI = getVoiceURI();
  const { voices } = useSpeechSynthesis();
  let voice = voices.find((v) => v.voiceURI === voiceURI);

  const [activeVoiceURI, setActiveVoiceURI] = useState(voiceURI);
  const [selectedRate, setSelectedRate] = useState(() => getRate()); // New state for rate
  const [selectepitch, setSelectedPitch] = useState(() => getPitch()); // New state for pitch

  const [activeLang, setActiveLang] = useState(lang);

  return (
    <div className="setting">
      <div className="container">
        <div className="header">
          <button
            className="back-button"
            onClick={() => {
              props.BackToMainPage();
            }}
          >
            <GrPrevious /> Main Page
          </button>
          <h2 className="page_name">Settings</h2>
        </div>

        <div className="wrapper_lang">
          <h2 className="setting_titel">Select translation language</h2>
          {allLanguagesTranslate.map((language, index) => (
            <label key={index} htmlFor={language} className="input_language">
              <input
                type="radio"
                name="myLanguage"
                value={language}
                id={language}
                onChange={(e) => {
                  setLang(e.target.value);
                  setActiveLang(e.target.value);
                }}
                checked={activeLang === language ? true : false}
              />
              {language}
            </label>
          ))}
        </div>
        <div className="wrapper_selected-voices">
          <h2 className="setting_titel">Select Voice</h2>
          <h3 className="voice_test">
            Play test voice
            <PlayText
              text="Wir haben viele neue Freunde gefunden."
              voice={voice}
              rate={selectedRate}
              pitch={selectepitch}
            />
          </h3>

          {voices
            .filter((v) => v.lang === 'de-DE' || v.lang === 'de_DE')
            .map((v, index) => (
              <label htmlFor={v.voiceURI} key={index} className="input_voice">
                <input
                  type="radio"
                  name="myVoice"
                  id={v.voiceURI}
                  value={v.voiceURI}
                  onChange={(e) => {
                    setActiveVoiceURI(e.target.value);
                    setVoiceURI(e.target.value);
                  }}
                  checked={activeVoiceURI === v.voiceURI ? true : false}
                />
                {v.name} ({v.lang})
              </label>
            ))}

          <br />
          <label>
            Rate:
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={selectedRate}
              onChange={(e) => {
                setSelectedRate(parseFloat(e.target.value));
                setRate(parseFloat(e.target.value));
              }}
            />
            {selectedRate}
          </label>
          <br />
          <br />
          <label>
            Pitch:
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={selectepitch}
              onChange={(e) => {
                setSelectedPitch(parseFloat(e.target.value));
                setPitch(parseFloat(e.target.value));
              }}
            />
            {selectepitch}
          </label>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Setting;
