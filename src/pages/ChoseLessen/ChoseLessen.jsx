import { useState, useEffect } from 'react';

import { alllessens } from '../../content/lessens';
import { loadlessenToIndexedDB, getAllLoadedLessens, deleteData } from '../../api/handelIndexedDB';
import { getlessen, setlessen } from '../../api/handelLocalStorage';
import { startLessen } from '../../content/lessens';

import { IoCloudDownloadOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrLinkPrevious } from 'react-icons/gr';

import './ChoseLessen.css';

const Choselessen = (props) => {
  let cssClassName = 'input_unit';

  let lessen = getlessen();
  if (!lessen) {
    lessen = startLessen.info.name;
    setlessen(lessen);
  }

  const [loadedLessens, setLoadedLessens] = useState([]);

  const allLoadedLessens = async () => {
    let newLoadedLessensList = await getAllLoadedLessens();
    setLoadedLessens(newLoadedLessensList);
  };

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
            <GrLinkPrevious /> Continue
          </button>
        </div>
        <div className="wrapper_unit">
          <h2 className="setting_titel">Select a Unit</h2>

          {alllessens.map((lessenItem, index) => {
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
                  value={lessenItem.name}
                  onChange={async (e) => {
                    !loadedLessens.includes(lessenItem.name) && (await loadlessenToIndexedDB(lessenItem));
                    setlessen(lessenItem.name);
                    await allLoadedLessens();
                  }}
                  checked={loadedLessens.includes(lessenItem.name) && lessen === lessenItem.name ? true : false}
                />
                {lessenItem.name}
                <button
                  className="action_to_lessen"
                  onClick={async () => {
                    loadedLessens.includes(lessenItem.name)
                      ? // ***** When we Delelte the Active Lessen
                        await deleteData(lessenItem.name).then(() => {
                          setlessen(startLessen.info.name);
                        })
                      : await loadlessenToIndexedDB(lessenItem);
                    await allLoadedLessens();
                  }}
                >
                  {loadedLessens.includes(lessenItem.name) ? <AiOutlineDelete /> : <IoCloudDownloadOutline />}
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
