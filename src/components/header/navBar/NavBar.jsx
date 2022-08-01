// import basics
import React from 'react';
import * as SX from './navBarSettings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateContext } from '../../../contexts/ContextProvider';

const NavBar = () => {
  const { handleAddClick } = useStateContext();

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
