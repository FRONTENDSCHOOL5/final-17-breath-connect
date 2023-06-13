import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import AppRouter from './routes/AppRouter';

function App() {
  return (
  <>
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <AppRouter />
    </ThemeProvider>
  </>
);
}
export default App;