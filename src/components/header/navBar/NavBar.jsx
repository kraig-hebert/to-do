// import basics
import React, { useEffect, useState } from 'react';
import * as SX from './navBarSettings';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateContext } from '../../../contexts/ContextProvider';

const NavBar = () => {
  const { handleAddClick, listTitles, selectValue, setSelectValue } =
    useStateContext();

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box>
      <AppBar sx={SX.appBarSX} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={SX.iconSX}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={SX.typoSX}>
            To-Do
          </Typography>
          <Box>
            <Select
              sx={SX.selectSX}
              value={selectValue ? selectValue : ''}
              label="List Title"
              onChange={(event) => handleSelectChange(event)}
            >
              {listTitles.map((title) => (
                <MenuItem key={title} value={title}>
                  {title}
                </MenuItem>
              ))}
            </Select>

            <Button sx={SX.buttonSX} onClick={() => handleAddClick()}>
              Add
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
