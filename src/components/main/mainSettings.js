import { Switch, TextField, Typography } from '@mui/material';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import { DatePicker } from '@mui/x-date-pickers';
import TableButtonGroup from './tableButtonGroup/TableButtonGroup';

// returns columns for main table
export const getColumns = (handleStatusUpdate) => {
  return [
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
              sx={switchSX}
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
};

export const boxSX = {
  height: '100%',
};

export const dataGridSX = {
  '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: 'primary.main',
  },
  '& .MuiTablePagination-root': {
    color: '#fff',
  },
  '& .MuiIconBase-root, & .Mui-disabled': {
    color: '#fff',
  },
};

export const switchSX = {
  '& .MuiSwitch-track': {
    backgroundColor: 'primary.main',
  },
};
