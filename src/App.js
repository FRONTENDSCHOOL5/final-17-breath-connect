import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import BasicLayout from './styles/BasicLayout';
import AppRouter from './routes/AppRouter';
import Theme from './styles/Theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
