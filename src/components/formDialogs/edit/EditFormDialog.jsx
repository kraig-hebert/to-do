import React from 'react';
import { useStateContext } from '../../../contexts/ContextProvider';
import EditDateField from './editDateField/EditDateField';
import EditTextField from './editTextField/EditTextField';
import * as SX from '../formDialogSX';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  Stack,
} from '@mui/material';

const EditFormDialog = (props) => {
  const { Transition } = props;

  const { editItem, handleEditClose, openEdit, selectedRowData } =
    useStateContext();

  return (
    <Dialog
      sx={SX.formDialogSX}
      TransitionComponent={Transition}
      open={openEdit}
      onClose={handleEditClose}
    >
      <DialogTitle>Edit To-Dos</DialogTitle>
      <Divider variant="middle" />

      <DialogContent>
        <Stack spacing={2}>
          <EditTextField row={selectedRowData} />
          <EditDateField row={selectedRowData} dateType={'start'} />
          <EditDateField row={selectedRowData} dateType={'end'} />
          <Divider />
        </Stack>
      </DialogContent>
      <Divider variant="middle" />
      <DialogActions>
        <Button onClick={handleEditClose}>Cancel</Button>
        <Button onClick={() => editItem()}>Confirm Edits</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditFormDialog;
