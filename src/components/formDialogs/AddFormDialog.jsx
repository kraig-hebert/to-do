import React, { useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import * as SX from './formDialogSX';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Divider,
  Stack,
} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers';

const AddFormDialog = (props) => {
  const { Transition } = props;
  const { addItem, handleAddClose, openAddDialog } = useStateContext();
  const [newToDo, setNewToDo] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleTitleChange = (event) => {
    setNewToDo(event.target.value);
  };
  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
  };
  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
  };
  return (
    <Dialog
      sx={SX.formDialogSX}
      TransitionComponent={Transition}
      open={openAddDialog}
      onClose={handleAddClose}
    >
      <DialogTitle>Add To-Do</DialogTitle>
      <Divider variant="middle" />

      <DialogContent>
        <Stack spacing={5}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="To-Do"
            type="text"
            fullWidth
            onChange={(e) => handleTitleChange(e)}
            value={newToDo}
          />
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newDate) => handleStartDateChange(newDate)}
            renderInput={(params) => <TextField {...params} />}
            disablePast
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newDate) => handleEndDateChange(newDate)}
            renderInput={(params) => <TextField {...params} />}
            disablePast
          />
        </Stack>
      </DialogContent>
      <Divider variant="middle" />
      <DialogActions>
        <Button onClick={handleAddClose}>Cancel</Button>
        <Button
          onClick={() => {
            setNewToDo('');
            setStartDate(new Date());
            setEndDate(new Date());
            addItem(newToDo, startDate, endDate);
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddFormDialog;
