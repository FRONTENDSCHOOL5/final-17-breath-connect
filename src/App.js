import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import BasicLayout from './styles/BasicLayout';
import AppRouter from './routes/AppRouter';
import Theme from './styles/Theme';
import DarkModeToggle from './components/common/Button/DarkModeButton';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BasicLayout>
          <DarkModeToggle />
          <AppRouter />
        </BasicLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
