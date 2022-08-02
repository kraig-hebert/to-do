// import basics
import React, { useState } from 'react';
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
  const { handleAddClick } = useStateContext();
  const [age, setAge] = useState('one');

  const handleSelectChange = (event) => {
    setAge(event.target.value);
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
              value={age}
              label="List Title"
              onChange={(event) => handleSelectChange(event)}
            >
              <MenuItem value="one">List 1</MenuItem>
              <MenuItem value="two">List 2</MenuItem>
              <MenuItem value="three">List 3</MenuItem>
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
