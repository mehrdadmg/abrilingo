import { useState, useEffect } from 'react';

import MainPage from './pages/MainPage/MainPage';
import LearningSentences from './pages/LearningSentences/LearningSentences';
import Choselessen from './pages/ChoseLessen/ChoseLessen';
import Setting from './pages/Setting/Setting';

import {
  getLang,
  setLang,
  getlessen,
  setlessen,
  getLearnSentenceNo,
  setLearnSentenceNo,
  getPracticeSentenceNo,
  setPracticeSentenceNo,
} from './api/handelLocalStorage';
import { getData } from './api/handelIndexedDB';

import './App.css';

const startLessen = {
  info: {
    name: 'Start_Lessen',
    learning: 'sentences',
  },

  content: [
    {
      sentence: 'Willkommen bei Abri Lingo!',
      english: 'Welcome to Abri Lingo!',
      russian: 'Добро пожаловать в Абри Линго!',
      farsi: 'به Abri Lingo خوش آمدید!',
    },
  ],
};

function App() {
  let lang = getLang();
  let lessen = getlessen();

  let learnSentenceNo = getLearnSentenceNo();
  let practiceSentenceNo = getPracticeSentenceNo();

  const [displayed, setDisplayed] = useState('main_page');
  const [learnContent, setLearnContent] = useState(startLessen);
  const [languageTranslate, setLanguageTranslate] = useState(lang);

  useEffect(
    () => () => {
      loadLessen(lessen);
    },
    []
  );

  const loadLessen = async (newlessen) => {
    let content = await getData(newlessen);

    console.log('content 1:', content);

    /* if (lessen) {
      setlessen(newlessen);
      content = await getData(lessen);
    } */

    if (!content) {
      console.log('content 2:', content);

      content = startLessen;
      setlessen('startLessen');
    }
    setLearnContent(content);
  };

  const handlerGoToPage = (page) => {
    setDisplayed(page);
  };
  const handelChoselessen = async (newlessen) => {
    setlessen(newlessen);
    let content = await getData(newlessen);
    if (!content) {
      content = startLessen;
    }
    setLearnContent(content);
  };

  const handelLanguageTranslate = (language) => {
    setLang(language);
    setLanguageTranslate(getLang());
  };

  let isTrueContent = !!(learnContent && learnContent.content);

  if (
    learnContent.info.name !== startLessen.info.name &&
    learnContent.content &&
    learnContent.content.length <= learnSentenceNo
  ) {
    console.log('learnContent: ', learnContent);
    setLearnSentenceNo('0');
  }
  if (
    learnContent.info.name !== startLessen.info.name &&
    learnContent.content &&
    learnContent.content.length <= practiceSentenceNo
  ) {
    setPracticeSentenceNo('0');
  }

  return (
    <div className="App">
      {(() => {
        switch (displayed) {
          case 'main_page':
            return (
              <MainPage goToPage={handlerGoToPage} nameUnit={isTrueContent ? learnContent.info.name : startLessen} />
            );

          case 'chose_lessen':
            return (
              <Choselessen
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                fancChoosenlessen={handelChoselessen}
                lessen={lessen}
              />
            );

          case 'learn':
            return (
              <LearningSentences
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                handelSentenceNo={(sentenceNo) => {
                  setLearnSentenceNo(sentenceNo);
                }}
                typePage="Learn"
                translatTo={languageTranslate}
                learnContent={learnContent}
                sentenceNo={learnSentenceNo}
              />
            );

          case 'practice':
            return (
              <LearningSentences
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                handelSentenceNo={(sentenceNo) => {
                  setPracticeSentenceNo(sentenceNo);
                }}
                typePage="Practice"
                translatTo={languageTranslate}
                learnContent={learnContent}
                sentenceNo={practiceSentenceNo}
              />
            );

          case 'setting':
            return (
              <Setting
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                fancLanguageTranslate={handelLanguageTranslate}
                lang={lang}
              />
            );

          default:
            return <MainPage goToPage={handlerGoToPage} nameUnit={learnContent.info.name} />;
        }
      })()}
    </div>
  );
}

export default App;
