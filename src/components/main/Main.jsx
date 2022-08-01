// import basics
import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as SX from './mainSettings';

import { useStateContext } from '../../contexts/ContextProvider';

const Main = () => {
  const { mainTextList, handleStatusUpdate } = useStateContext();

  return (
    <Box sx={SX.boxSX}>
      <DataGrid
        sx={SX.dataGridSX}
        rows={mainTextList}
        rowHeight={75}
        columns={SX.getColumns(handleStatusUpdate)}
        pageSize={15}
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default Main;
