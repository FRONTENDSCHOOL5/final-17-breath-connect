import React from 'react';
import { useRecoilState } from 'recoil';
import { isDarkModeState } from '../atoms/StylesAtom';
import styled, { ThemeProvider } from 'styled-components';
import darkColors from './Theme'; // dark 모드 테마를 정의한 파일을 불러옵니다.

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const selectedTheme = isDarkMode ? { colors: darkColors } : {};

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <Sbutton onClick={toggleDarkMode}>
          {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
        </Sbutton>
      </Container>
    </ThemeProvider>
  );
};

export default DarkModeToggle;

const Container = styled.div`
`;

const Sbutton = styled.button`
`;
