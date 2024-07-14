import { fetchlessen } from './downloadLessens.js';

const dbName = 'deutschLessens';
const storeNames = 'lessens';

function openDatabase(lessen) {
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
      db.createObjectStore(storeNames, { keyPath: 'lessenName' });
    };
  });
}

function addData(db, data, lessen) {
  return new Promise((resolve) => {
    const request = indexedDB.open(dbName);

    request.onsuccess = () => {
      data.lessenName = lessen.name;
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

async function getData(lessen) {
  let db = await openDatabase(dbName);

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeNames], 'readonly');
    const objectStore = transaction.objectStore(storeNames);
    const request = objectStore.get(lessen); // Adjust the ID as necessary
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject('Error getting data: ' + event.target.errorCode);
    };
  });
}

async function getAllLoadedLessens(lessen) {
  let db = await openDatabase(dbName);

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeNames], 'readonly');
    const objectStore = transaction.objectStore(storeNames);
    const request = objectStore.getAllKeys();
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject('Error getting All Loaded Lessens: ' + event.target.errorCode);
    };
  });
}

async function deleteData(lessen) {
  let db = await openDatabase(dbName);

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeNames], 'readwrite');
    const objectStore = transaction.objectStore(storeNames);
    const request = objectStore.delete(lessen); // Adjust the ID as necessary
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject('Error getting data: ' + event.target.errorCode);
    };
  });
}

async function loadlessenToIndexedDB(lessen) {
  const data = await fetchlessen(lessen.file_name);
  let db = await openDatabase(lessen);
  await addData(db, data, lessen);
}

export { loadlessenToIndexedDB, getData, getAllLoadedLessens, deleteData };
