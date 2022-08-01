import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useStateContext } from '../../../contexts/ContextProvider';

const TableButtonGroup = (props) => {
  const { handleDeleteClick, handleEditClick } = useStateContext();
  const { row } = props;
  return (
    <ButtonGroup variant="contained" size="small">
      <Button onClick={() => handleDeleteClick(row.id)}>Delete</Button>
      <Button onClick={() => handleEditClick(row.id)}>Edit</Button>
    </ButtonGroup>
  );
};

export default TableButtonGroup;
