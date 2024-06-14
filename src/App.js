import { useState } from 'react';

import MainPage from './pages/MainPage/MainPage';
import LearningSentences from './pages/LearningSentences/LearningSentences';
import ChoseLesson from './pages/ChoseLesson/ChoseLesson';
import Setting from './pages/Setting/Setting';

import { fancContentLesson, defaultLesson } from '../src/content/lessons';
import {
  getLang,
  setLang,
  getLesson,
  setLesson,
  getLearnSentenceNo,
  setLearnSentenceNo,
  getPracticeSentenceNo,
  setPracticeSentenceNo,
} from './api/handelLocalStorage';

import './App.css';

function App() {
  let lang = getLang();
  let lesson = getLesson();
  let learnSentenceNo = getLearnSentenceNo();
  let practiceSentenceNo = getPracticeSentenceNo();

  const [displayed, setDisplayed] = useState('main_page');
  const [learnContent, setLearnContent] = useState(fancContentLesson(lesson));
  const [languageTranslate, setLanguageTranslate] = useState(lang);

  const handlerGoToPage = (page) => {
    setDisplayed(page);
  };
  const handelChoseLesson = (newLesson) => {
    setLesson(newLesson);
    setLearnContent(fancContentLesson(getLesson()));
  };

  const handelLanguageTranslate = (language) => {
    setLang(language);
    setLanguageTranslate(getLang());
  };

  let isTrueContent = !!(learnContent && learnContent.content);

  if (learnContent.content.length <= learnSentenceNo) {
    setLearnSentenceNo('0');
  }
  if (learnContent.content.length <= practiceSentenceNo) {
    setPracticeSentenceNo('0');
  }

  return (
    <div className="App">
      {(() => {
        switch (displayed) {
          case 'main_page':
            return (
              <MainPage goToPage={handlerGoToPage} nameUnit={isTrueContent ? learnContent.info.name : defaultLesson} />
            );

          case 'chose_lesson':
            return (
              <ChoseLesson
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                fancChoosenLesson={handelChoseLesson}
                lesson={lesson}
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
