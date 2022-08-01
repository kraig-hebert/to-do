import React, { useEffect } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import * as SX from './formDialogSettings';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  Stack,
  TextField,
} from '@mui/material';

import { DatePicker } from '@mui/x-date-pickers';

const DeleteFormDialog = (props) => {
  const { Transition } = props;

  const { deleteItem, handleDeleteClose, openDelete, dataForDelete } =
    useStateContext();

  return (
    <Dialog
      sx={SX.formDialogSX}
      TransitionComponent={Transition}
      open={openDelete}
      onClose={handleDeleteClose}
    >
      <DialogTitle>Delete To-Dos</DialogTitle>
      <Divider variant="middle" />
      <DialogContent>
        <Stack spacing={2} className="edit-stack">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="To-Do"
            type="text"
            fullWidth
            value={dataForDelete.title}
            disabled
          />
          <DatePicker
            label="Start Date"
            value={dataForDelete.startDate}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} disabled />}
          />
          <DatePicker
            label="End Date"
            value={dataForDelete.endDate}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} disabled />}
          />
          <Divider />
        </Stack>
      </DialogContent>
      <Divider variant="middle" />
      <DialogActions>
        <Button onClick={handleDeleteClose}>Cancel</Button>
        <Button onClick={() => deleteItem()}>Confirm Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteFormDialog;
