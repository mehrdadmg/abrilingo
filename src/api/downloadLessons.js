const url = '/contents/';

async function fetchlesson(file_name) {
  try {
    const response = await fetch(url + file_name);
    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

export { fetchlesson };
