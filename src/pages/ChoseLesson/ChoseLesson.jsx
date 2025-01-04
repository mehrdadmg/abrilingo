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
  const [loadedLessons, setLoadedLessons] = useState([]);
  const [openNodes, setOpenNodes] = useState({});

  let cssClassName = 'input_unit';

  // Get the current lesson from local storage or set it to the start lesson
  let lesson = getlesson();
  if (!lesson) {
    lesson = startLesson.info.name;
    setlesson(lesson);
  }

  // Toggle the visibility of child nodes
  const toggleNode = (id) => {
    setOpenNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Fetch all loaded lessons from IndexedDB
  const allLoadedLessons = async () => {
    let newLoadedLessonsList = await getAllLoadedLessons();
    setLoadedLessons(newLoadedLessonsList);
  };

  // Load all lessons when the component mounts
  useEffect(() => {
    allLoadedLessons();
  }, []);

  // Component to render a lesson node (leaf)
  const LessonNode = (lessonItem, index) => (
    <label key={index} className={cssClassName} style={{ display: openNodes[lessonItem.parentId] ? 'block' : 'none' }}>
      <input
        type="radio"
        name="mylesson"
        value={lessonItem.name}
        onChange={async (e) => {
          if (!loadedLessons.includes(lessonItem.name)) {
            await loadlessonToIndexedDB(lessonItem);
          }
          setlesson(lessonItem.name);
          await allLoadedLessons();
        }}
        checked={loadedLessons.includes(lessonItem.name) && lesson === lessonItem.name}
        style={{ marginLeft: `${lessonItem.level * 20}px` }}
      />
      {lessonItem.name}
      <button
        className="action_to_lesson"
        onClick={async () => {
          if (loadedLessons.includes(lessonItem.name)) {
            await deleteData(lessonItem.name);
            setlesson(startLesson.info.name);
          } else {
            await loadlessonToIndexedDB(lessonItem);
          }
          await allLoadedLessons();
        }}
      >
        {loadedLessons.includes(lessonItem.name) ? <AiOutlineDelete /> : <IoCloudDownloadOutline />}
      </button>
    </label>
  );

  // Component to render a lesson parent (with children)
  const LessonParent = (lessonItem, index) => (
    <div
      key={lessonItem.id}
      className={`${cssClassName} ${lessonItem.level === 0 && 'level_0'}`}
      style={{ marginLeft: `${lessonItem.level * 20}px` }}
    >
      <div
        onClick={() => toggleNode(lessonItem.id)}
        style={{
          cursor: lessonItem.children ? 'pointer' : 'default',
          fontWeight: openNodes[lessonItem.id] ? 'bold' : 'normal',
        }}
      >
        {lessonItem.children && (openNodes[lessonItem.id] ? '▼ ' : '▶ ')}
        {lessonItem.name}
      </div>
      {lessonItem.children &&
        openNodes[lessonItem.id] &&
        lessonItem.children.map((children_L_x, index) => {
          children_L_x.parentId = lessonItem.id; // Ensure parentId is set
          return children_L_x.children ? LessonParent(children_L_x, index) : LessonNode(children_L_x, index);
        })}
    </div>
  );

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

            return lessonItem.children ? LessonParent(lessonItem, index) : LessonNode(lessonItem, index);
          })}

          <div className="gap"></div>
        </div>
      </div>
    </div>
  );
};
export default Choselesson;
