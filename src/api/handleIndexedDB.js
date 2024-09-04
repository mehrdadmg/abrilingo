import { v4 as uuidv4 } from 'uuid';

import { fetchlesson } from './downloadLessons.js';

const dbName = 'deutschLessons';
const storeNames = 'lessons';

function openDatabase(/* lesson */) {
  let db;
  let version = 1;
  let request;
  return new Promise((resolve, reject) => {
    request = indexedDB.open(dbName, version);

    request.onerror = () => {
      console.log('Database Failed to Open');
      reject('Database error: ' + request.errorCode);
    };

    request.onsuccess = () => {
      db = request.result;
      /* version = db.version; */
      resolve(db);
    };

    request.onupgradeneeded = () => {
      db = request.result;
      db.createObjectStore(storeNames, { keyPath: 'lessonName' });
    };
  });
}

function addData(db, data, lessonName) {
  return new Promise((resolve) => {
    const request = indexedDB.open(dbName);

    request.onsuccess = () => {
      data.lessonName = lessonName;
      const transaction = request.result.transaction([storeNames], 'readwrite');
      const objectStore = transaction.objectStore(storeNames);
      objectStore.add(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve('Unknown error');
      }
    };
  });
}

async function getData(lesson) {
  let db = await openDatabase(/* dbName */);

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeNames], 'readonly');
    const objectStore = transaction.objectStore(storeNames);
    const request = objectStore.get(lesson); // Adjust the ID as necessary
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject('Error getting data: ' + event.target.errorCode);
    };
  });
}

async function getAllLoadedLessons(lesson) {
  let db = await openDatabase(/* dbName */);

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeNames], 'readonly');
    const objectStore = transaction.objectStore(storeNames);
    const request = objectStore.getAllKeys();
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject('Error getting All Loaded Lessons: ' + event.target.errorCode);
    };
  });
}

async function deleteData(lesson) {
  let db = await openDatabase(/* dbName */);

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeNames], 'readwrite');
    const objectStore = transaction.objectStore(storeNames);
    const request = objectStore.delete(lesson); // Adjust the ID as necessary
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject('Error getting data: ' + event.target.errorCode);
    };
  });
}

async function loadlessonToIndexedDB(lesson) {
  const data = await fetchlesson(lesson.file_name);
  let db = await openDatabase();
  const content = data.content.map((item) => ({ ...item, id: uuidv4() }));
  const dataWithId = { ...data, content };
  await addData(db, dataWithId, lesson.name);
}

function putData(db, data, lessonName) {
  return new Promise((resolve) => {
    const request = indexedDB.open(dbName);

    request.onsuccess = () => {
      data.lessonName = lessonName;
      const transaction = request.result.transaction([storeNames], 'readwrite');
      const objectStore = transaction.objectStore(storeNames);
      objectStore.put(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve('Unknown error');
      }
    };
  });
}

async function putlessonToIndexedDB(lessonName, data) {
  /* const data = await fetchlesson(lesson.file_name); */
  let db = await openDatabase(/* lesson */);
  await putData(db, data, lessonName);
}

export { loadlessonToIndexedDB, getData, getAllLoadedLessons, deleteData, putlessonToIndexedDB };
