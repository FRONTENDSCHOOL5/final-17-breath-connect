import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Icon404 from '../../assets/images/icon-404.svg';
import DarkIcon404 from '../../assets/images/icon-404-dark.svg';
import Button from '../../components/common/Button/ButtonContainer';
import { Section, Image, ErrorMessage } from './NotFoundPageStyle';

import { useRecoilValue } from "recoil";
import {ThemeProvider} from 'styled-components'
import Theme, { darkColors } from '../../styles/Theme';
import { isDarkModeState } from '../../atoms/StylesAtom';

const NotFound = ({theme}) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <Section className="page-404">
      <Image src={isDarkMode ? DarkIcon404 : Icon404} alt="404 로고" className="icon-404" />
      <ErrorMessage>페이지를 찾을 수 없습니다.</ErrorMessage>
      <Button text={'이전 페이지'} type={'ML'} handleClick={handleGoBack} />
    </Section>
    </ThemeProvider>
  );
};
export default NotFound;
