// import basics
import React from 'react';
import { Box, Switch, TextField, Typography } from '@mui/material';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers';
import TableButtonGroup from './tableButtonGroup/TableButtonGroup';
import * as SX from './mainSettings';

import { useStateContext } from '../../contexts/ContextProvider';

const Main = () => {
  const { mainTextList, handleStatusUpdate } = useStateContext();

  const columns = [
    { field: 'id', hide: true },
    {
      field: 'title',
      headerName: 'Title',
      renderCell: (cellValues) => {
        return (
          <Typography value={cellValues.value} variant="h6">
            {cellValues.value}
          </Typography>
        );
      },

      flex: 1,
    },
    {
      field: 'startDate',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <DatePicker
            label="Start Date"
            value={cellValues.value}
            onChange={() => {}}
            renderInput={(params) => <TextField size="small" {...params} />}
            disabled
          />
        );
      },
      headerName: 'Start Date',
      flex: 1,
    },
    {
      field: 'endDate',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <DatePicker
            label="End Date"
            value={cellValues.value}
            onChange={() => {}}
            renderInput={(params) => <TextField size="small" {...params} />}
            disabled
          />
        );
      },
      headerName: 'End Date',
      flex: 1,
    },
    {
      field: 'done',
      align: 'center',
      renderCell: (cellValues) => {
        return (
          <div>
            <TableButtonGroup row={cellValues.row} />
            <Switch
              sx={SX.switchSX}
              color="primary"
              onChange={() => handleStatusUpdate(cellValues.row.id)}
              checkedIcon={<VerifiedSharpIcon style={{ fill: 'steelblue' }} />}
              checked={cellValues.row.done}
            />
          </div>
        );
      },
      headerName: 'Changes',
      flex: 1,
    },
  ];

  return (
    <Box sx={SX.boxSX}>
      <DataGrid
        sx={SX.dataGridSX}
        rows={mainTextList}
        rowHeight={75}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default Main;
