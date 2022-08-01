import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useStateContext } from '../../../../contexts/ContextProvider';

const EditTextField = (props) => {
  const { row } = props;
  const { handleEditTextFieldChange } = useStateContext();
  const [tempText, setTempText] = useState(row.title);
  return (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="To-Do"
      type="text"
      fullWidth
      onChange={(e) => {
        setTempText(e.target.value);
        handleEditTextFieldChange(e);
      }}
      value={tempText}
    />
  );
};

export default EditTextField;
