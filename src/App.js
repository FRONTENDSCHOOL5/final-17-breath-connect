import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import BasicLayout from './styles/BasicLayout';
import DarkModeToggle from './components/common/Button/DarkModeButton';
import AppRouter from './routes/AppRouter';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <BasicLayout>
          <DarkModeToggle />
          <AppRouter />
        </BasicLayout>
          </ThemeProvider>
          </QueryClientProvider>
        </RecoilRoot>
    </>
  );
};

export default App;
