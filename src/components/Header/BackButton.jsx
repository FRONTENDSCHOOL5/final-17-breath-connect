import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { iconColorSelector, isDarkModeState } from '../../atoms/StylesAtom';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import { Button } from './BackButtonStyle'

const BackButton = () => {
  const navigate = useNavigate();
  const iconColor = useRecoilValue(iconColorSelector);
  const isDarkMode = useRecoilValue(isDarkModeState);
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={goBack}>
      <GlobalSprite id={isDarkMode ? 'icon-arrow-left-dark' : 'icon-arrow-left'} color={iconColor} />
    </Button>
  );
};

export default BackButton;
