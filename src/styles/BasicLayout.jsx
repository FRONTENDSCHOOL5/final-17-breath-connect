import React from 'react';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from "recoil";
import Theme, {darkColors} from "./Theme";
import { isDarkModeState } from "../atoms/StylesAtom";

const BasicLayout = ({ children, theme }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <BasicContainer>
      <Screen>{children}</Screen>
    </BasicContainer>
    </ThemeProvider>
  );
};

export default BasicLayout;

const BasicContainer = styled.div`
  position: relative;
  max-width: 390px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
