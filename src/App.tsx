import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { renderRouter } from './Routes/renderRouter';
import { theme } from './Style/theme';
import { GlobalContextProvider } from './Context/GlobalContextProvider';
function App() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        {renderRouter()}
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
