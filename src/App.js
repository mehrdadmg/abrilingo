import { useState } from 'react';

import MainPage from './pages/MainPage/MainPage';
import LearningSentences from './pages/LearningSentences/LearningSentences';
import Choselesson from './pages/ChoseLesson/ChoseLesson';
import Setting from './pages/Setting/Setting';
import { startLesson } from './content/lessons';

import { getlesson, setlesson } from './api/handleLocalStorage';

import './App.css';

function App() {
  let lesson = getlesson();
  if (!lesson) {
    lesson = startLesson.info.name;
    setlesson(lesson);
  }

  const [displayed, setDisplayed] = useState('main_page');

  const handlerGoToPage = (page) => {
    setDisplayed(page);
  };
  //console.log('App render');
  return (
    <div className="App">
      {(() => {
        switch (displayed) {
          case 'main_page':
            return <MainPage goToPage={handlerGoToPage} />;

          case 'chose_lesson':
            return (
              <Choselesson
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
              />
            );

          case 'learn':
            return (
              <LearningSentences
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                typePage="Learn"
              />
            );

          case 'practice':
            return (
              <LearningSentences
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
                typePage="Practice"
              />
            );

          case 'setting':
            return (
              <Setting
                BackToMainPage={() => {
                  setDisplayed('main_page');
                }}
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
