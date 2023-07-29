import React from 'react';
import { useRecoilState } from 'recoil';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import { ThemeProvider } from 'styled-components';
import darkColors from '../../../styles/Theme';
import { Container, Button } from './DarkModeButtonStyle'


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const selectedTheme = isDarkMode ? { colors: darkColors } : {};

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <Button>
        <label class="switch">
          {!isDarkMode ?
          <input type="checkbox" onClick={toggleDarkMode}/> :
          <input type="checkbox" onClick={toggleDarkMode} checked/>}
          <span class="slider"></span>
        </label>
        </Button>
        </Container>
    </ThemeProvider>
  );
};

export default DarkModeToggle;