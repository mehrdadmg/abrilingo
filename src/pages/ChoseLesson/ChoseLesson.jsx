import { useState, useEffect } from 'react';

import { alllessons } from '../../content/lessons';
import { loadlessonToIndexedDB, getAllLoadedLessons, deleteData } from '../../api/handleIndexedDB';
import { getlesson, setlesson } from '../../api/handleLocalStorage';
import { startLesson } from '../../content/lessons';

import { IoCloudDownloadOutline } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrPrevious } from 'react-icons/gr';

import './ChoseLesson.css';

const Choselesson = (props) => {
  let cssClassName = 'input_unit';

  let lesson = getlesson();
  if (!lesson) {
    lesson = startLesson.info.name;
    setlesson(lesson);
  }

  const [loadedLessons, setLoadedLessons] = useState([]);

  const allLoadedLessons = async () => {
    let newLoadedLessonsList = await getAllLoadedLessons();
    setLoadedLessons(newLoadedLessonsList);
  };

  useEffect(() => {
    allLoadedLessons();
  }, []);

  return (
    <div className="chose_lesson">
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
        </div>
        <div className="wrapper_unit">
          <h2 className="setting_titel">Select a Unit</h2>

          {alllessons.map((lessonItem, index) => {
            if (index === 0) {
              cssClassName = 'input_unit first_input';
            } else if (index === alllessons.length - 1) {
              cssClassName = 'input_unit last_input';
            } else {
              cssClassName = 'input_unit';
            }

            return (
              <label key={index} className={cssClassName}>
                <input
                  type="radio"
                  name="mylesson"
                  value={lessonItem.name}
                  onChange={async (e) => {
                    !loadedLessons.includes(lessonItem.name) && (await loadlessonToIndexedDB(lessonItem));
                    setlesson(lessonItem.name);
                    await allLoadedLessons();
                  }}
                  checked={loadedLessons.includes(lessonItem.name) && lesson === lessonItem.name ? true : false}
                />
                {lessonItem.name}
                <button
                  className="action_to_lesson"
                  onClick={async () => {
                    loadedLessons.includes(lessonItem.name)
                      ? // ***** When we Delelte the Active Lesson
                        await deleteData(lessonItem.name).then(() => {
                          setlesson(startLesson.info.name);
                        })
                      : await loadlessonToIndexedDB(lessonItem);
                    await allLoadedLessons();
                  }}
                >
                  {loadedLessons.includes(lessonItem.name) ? <AiOutlineDelete /> : <IoCloudDownloadOutline />}
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
export default Choselesson;
