import { forceDateString } from '../helpers/dateHelpers';

const API_URL = 'http://localhost:3001/items/';

// retrieves data for mainTextList
// transforms JSON date string to new Date()
export const getDataList = async () => {
  const response = await fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const listItems = await response.json();
  const newListItems = listItems.map((item) => {
    return {
      ...item,
      startDate: new Date(item.startDate),
      endDate: new Date(item.endDate),
    };
  });
  return newListItems;
};

// adds new to-do to db.json
// data is a {row}
export const addToDo = async (data) => {
  fetch(API_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',

    body: JSON.stringify(data),
  });
};

// deletes selected to-do
export const deleteStoredItem = async (id) => {
  fetch(API_URL + id, {
    method: 'DELETE',
  });
};

// updates changed data for a single to-do
// data is a {row}
export const editToDo = async (data) => {
  await fetch(API_URL + data.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      startDate: forceDateString(data.startDate),
      endDate: forceDateString(data.endDate),
      title: data.title,
    }),
  });
};

// toggles status of each to-do on button click
export const updateStatus = async (row) => {
  await fetch(API_URL + row.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      done: !row.done,
    }),
  });
};
