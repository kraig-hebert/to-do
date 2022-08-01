import React from 'react';
import { containerSX } from './appSettings';
import { Container, Slide } from '@mui/material';
import Header from './components/header/Header';
import Main from './components/main/Main';
import AddFormDialog from './components/formDialogs/AddFormDialog';
import DeleteFormDialog from './components/formDialogs/DeleteFormDialog';
import EditFormDialog from './components/formDialogs/edit/EditFormDialog';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/mainTheme';

function App() {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Container sx={containerSX} fluid="true" disableGutters>
          <Header />
          <Main />
          <AddFormDialog Transition={Transition} />
          <DeleteFormDialog Transition={Transition} />
          <EditFormDialog Transition={Transition} />
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
