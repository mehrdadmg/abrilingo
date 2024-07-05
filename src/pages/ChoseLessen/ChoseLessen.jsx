import { useState, useEffect } from 'react';

import { alllessens } from '../../content/lessens';
import { loadlessenToIndexedDB, getAllLoadedLessens, deleteData } from '../../api/handelIndexedDB';

import { IoCloudDownloadOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';

import './ChoseLessen.css';

const Choselessen = (props) => {
  /* console.log('Choselessen props: ', props); */
  let cssClassName = 'input_unit';

  const [loadedLessens, setLoadedLessens] = useState([]);

  const allLoadedLessens = async () => {
    let newLoadedLessensList = await getAllLoadedLessens();
    setLoadedLessens(newLoadedLessensList);
  };

  console.log('loadedLessens: ', loadedLessens);

  useEffect(() => {
    allLoadedLessens();
  }, []);

  return (
    <div className="chose_lessen">
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
        </div>
        <div className="wrapper_unit">
          <h2 className="setting_titel">Select a Unit</h2>

          {alllessens.map((lessen, index) => {
            if (index === 0) {
              cssClassName = 'input_unit first_input';
            } else if (index === alllessens.length - 1) {
              cssClassName = 'input_unit last_input';
            } else {
              cssClassName = 'input_unit';
            }

            return (
              <label key={index} className={cssClassName}>
                <input
                  type="radio"
                  name="mylessen"
                  value={lessen.name}
                  onChange={async (e) => {
                    loadedLessens.includes(lessen.name)
                      ? await props.fancChoosenlessen(e.target.value)
                      : await loadlessenToIndexedDB(lessen);
                    await allLoadedLessens();
                    await props.fancChoosenlessen(e.target.value);
                  }}
                  checked={props.lessen === lessen.name ? true : false}
                />
                {lessen.name}
                <button
                  className="action_to_lessen"
                  onClick={async () => {
                    loadedLessens.includes(lessen.name)
                      ? await deleteData(lessen.name)
                      : await loadlessenToIndexedDB(lessen);
                    await allLoadedLessens();
                  }}
                >
                  {loadedLessens.includes(lessen.name) ? <AiOutlineDelete /> : <IoCloudDownloadOutline />}
                </button>
              </label>
            );
          })}
          <div className="gap"></div>
        </div>
      </div>
    </div>
  );
};
export default Choselessen;
