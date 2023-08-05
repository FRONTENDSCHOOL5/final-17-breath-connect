import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import { Button } from './BackButtonStyle'

const BackButton = () => {
  const navigate = useNavigate();
  const isDarkMode = useRecoilValue(isDarkModeState);
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={goBack}>
      <GlobalSprite id={isDarkMode ? 'icon-arrow-left-dark' : 'icon-arrow-left'} color={'transparent'}/>
    </Button>
  );
};

export default BackButton;
