import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import { iconColorSelector } from '../../atoms/StylesAtom';
import { isDarkModeState } from '../../atoms/StylesAtom';

const BackButton = () => {
  const navigate = useNavigate();
  const iconColor = useRecoilValue(iconColorSelector);
  const isDarkMode = useRecoilValue(isDarkModeState);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack}>
      <GlovalSprite id={isDarkMode ? 'icon-arrow-left-dark' : 'icon-arrow-left'} color={iconColor} />
    </button>
  );
};

export default BackButton;
