import React, { createContext, useContext, useEffect, useState } from 'react';

import { forceDateString } from '../helpers/dateHelpers';
import {
  addToDo,
  deleteStoredItem,
  editToDo,
  getDataList,
  updateStatus,
} from '../api/apiCalls';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [listTitles, setListTitles] = useState([]);
  const [listDict, setListDict] = useState({});
  const [mainTextList, setMainTextList] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState({
    id: 0,
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    done: false,
  });
  const [dataForDelete, setDataForDelete] = useState({
    id: 0,
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    done: false,
  });
  const [openAddDialog, setopenAddDialog] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  // opend add dialog
  const handleAddClick = () => {
    setopenAddDialog(true);
  };

  //closes add dialog
  const handleAddClose = () => {
    setopenAddDialog(false);
  };

  // opend delete dialog and updates data to be deleted
  const handleDeleteClick = (id) => {
    const selectedRows = mainTextList.filter((row) => {
      if (row.id === id) {
        return { ...row };
      }
    });
    setDataForDelete(selectedRows[0]);
    setOpenDelete(true);
  };

  // closes delete dialog
  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  // opens edit dialog and updates data to be edited
  const handleEditClick = (id) => {
    const selectedRows = mainTextList.filter((row) => {
      if (row.id === id) {
        return { ...row };
      }
    });
    setSelectedRowData(selectedRows[0]);
    setOpenEdit(true);
  };

  // closes edit dialog
  const handleEditClose = () => {
    setOpenEdit(false);
  };

  // updates textfield value and updates data to be edited in state
  const handleEditTextFieldChange = (e) => {
    setSelectedRowData({ ...selectedRowData, title: e.target.value });
  };

  // updates datefield value and updates data to be edited in state
  const handleEditDateFieldChange = (e, dateType) => {
    if (dateType === 'start')
      setSelectedRowData({ ...selectedRowData, startDate: e });
    else setSelectedRowData({ ...selectedRowData, endDate: e });
  };

  // updates status of to-do
  const handleStatusUpdate = async (id) => {
    const rows = mainTextList.filter((row) => {
      if (row.id === id) return { ...row, done: true };
    });
    await updateStatus(rows[0]);
    getData();
  };

  // gets data to update mainTextList
  const getData = async () => {
    const newListItems = await getDataList();
    console.log(newListItems);
    setMainTextList(newListItems);
  };

  // adds new to-do to the db
  const addItem = async (title, startDate, endDate) => {
    handleAddClose();
    const id = mainTextList.length
      ? mainTextList[mainTextList.length - 1].id + 1
      : 1;
    const myNewItem = {
      id,
      title,
      startDate: forceDateString(startDate),
      endDate: forceDateString(endDate),
      done: false,
    };
    await addToDo(myNewItem);
    getData();
  };

  // deletes item from db.json
  const deleteItem = async () => {
    handleDeleteClose();
    await deleteStoredItem(dataForDelete.id);
    getData();
  };

  // take selected to-do and updates with new values in db.json
  const editItem = async () => {
    handleEditClose();
    await editToDo(selectedRowData);
    getData();
  };

  // fetches data on load
  useEffect(() => {
    getData();
  }, []);

  return (
    <stateContext.Provider
      value={{
        addItem,
        dataForDelete,
        deleteItem,
        editItem,
        handleAddClick,
        handleAddClose,
        handleStatusUpdate,
        handleDeleteClick,
        handleDeleteClose,
        handleEditClose,
        handleEditDateFieldChange,
        handleEditTextFieldChange,
        handleEditClick,
        mainTextList,
        openAddDialog,
        openDelete,
        openEdit,
        setDataForDelete,
        selectedRowData,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
