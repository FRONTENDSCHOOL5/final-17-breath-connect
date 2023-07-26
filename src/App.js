import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import BasicLayout from './styles/BasicLayout';
import AppRouter from './routes/AppRouter';
import Theme from './styles/Theme';
import DarkModeToggle from './styles/DarkMode';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <DarkModeToggle />
          <BasicLayout>
            <AppRouter />
          </BasicLayout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
