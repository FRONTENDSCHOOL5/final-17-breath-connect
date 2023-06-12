import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

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