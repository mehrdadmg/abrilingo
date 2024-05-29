import { useState } from 'react';

import MainPage from './pages/MainPage/MainPage';
import LearningSentences from './pages/LearningSentences/LearningSentences';
import ChoseLesson from './pages/ChoseLesson/ChoseLesson';
import Setting from './pages/Setting/Setting';

import { fancContentLesson } from '../src/content/lessons';

import './App.css';

function App() {
  const [displayed, setDisplayed] = useState('main_page');
  const [learnContent, setLearnContent] = useState(fancContentLesson('A1U07'));
  const [languageTranslate, setLanguageTranslate] = useState('russian');

  const handlerGoToPage = (page) => {
    setDisplayed(page);
  };
  const handelChoseLesson = (newLesson) => {
    setLearnContent(fancContentLesson(newLesson));
  };

  const handelLanguageTranslate = (language) => {
    setLanguageTranslate(language);
  };

  return (
    <div className="App">
      {(() => {
        switch (displayed) {
          case 'main_page':
            return <MainPage goToPage={handlerGoToPage} />;

          case 'chose_lesson':
            return (
              <ChoseLesson
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                fancChoosenLesson={handelChoseLesson}
              />
            );

          case 'learn':
            return (
              <LearningSentences
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                typePage="Learn"
                translatTo={languageTranslate}
                learnContent={learnContent}
              />
            );

          case 'practice':
            return (
              <LearningSentences
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                typePage="Practice"
                translatTo={languageTranslate}
                learnContent={learnContent}
              />
            );

          case 'setting':
            return (
              <Setting
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                fancLanguageTranslate={handelLanguageTranslate}
              />
            );

          default:
            return <MainPage goToPage={handlerGoToPage} />;
        }
      })()}
    </div>
  );
}

export default App;
