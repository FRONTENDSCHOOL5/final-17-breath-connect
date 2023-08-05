import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import Button from '../../components/common/Button/ButtonContainer';
import { isDarkModeState } from '../../atoms/StylesAtom';
import Icon404 from '../../assets/images/icon-404.svg';
import DarkIcon404 from '../../assets/images/icon-404-dark.svg';
import { Section, Image, ErrorMessage } from './NotFoundPageStyle';

const NotFound = ({theme}) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
      <Section>
        <Image src={isDarkMode ? DarkIcon404 : Icon404} alt="404 로고"/>
        <ErrorMessage>페이지를 찾을 수 없습니다.</ErrorMessage>
        <Button text={'이전 페이지'} type={'ML'} handleClick={handleGoBack} />
      </Section>
  );
};

export default NotFound;
