import React from 'react';
import { useRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import darkColors from '../../../styles/Theme';
import { Container, Button } from './DarkModeButtonStyle';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const selectedTheme = isDarkMode ? { colors: darkColors } : {};

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <Button aria-label="다크 모드 버튼">
          <label className="switch" aria-label="다크 모드 전환">
            {!isDarkMode ? (
              <input type="checkbox" onClick={toggleDarkMode} />
            ) : (
              <input type="checkbox" onClick={toggleDarkMode} checked />
            )}
            <span className="slider"></span>
          </label>
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default DarkModeToggle;
