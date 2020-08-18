import React from 'react';

import MainHeader from './components/navigation/MainHeader';
import MainPage from './pages/Main';
import { ThemeProvider } from '@material-ui/core';

import {theme} from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <MainHeader />
        <MainPage />
    </ThemeProvider>
  );
}

export default App;
