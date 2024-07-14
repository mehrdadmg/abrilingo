import { useState } from 'react';

import MainPage from './pages/MainPage/MainPage';
import LearningSentences from './pages/LearningSentences/LearningSentences';
import Choselessen from './pages/ChoseLessen/ChoseLessen';
import Setting from './pages/Setting/Setting';
import { startLessen } from './content/lessens';

import { getlessen, setlessen } from './api/handelLocalStorage';

import './App.css';

function App() {
  console.log('****App****');

  let lessen = getlessen();
  if (!lessen) {
    lessen = startLessen.info.name;
    setlessen(lessen);
  }

  const [displayed, setDisplayed] = useState('main_page');

  const handlerGoToPage = (page) => {
    setDisplayed(page);
  };

  return (
    <div className="App">
      {(() => {
        switch (displayed) {
          case 'main_page':
            return <MainPage goToPage={handlerGoToPage} />;

          case 'chose_lessen':
            return (
              <Choselessen
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
