// BottomBarButton.js

import React from 'react';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import { Button, ButtonText } from './FooterStyle';
import { useRecoilValue } from 'recoil';
import { isDarkModeState, iconColorSelector } from '../../atoms/StylesAtom';

const BottomBarButton = ({ id, text, isSelected, onClick, textSize }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  // const iconColor = useRecoilValue(iconColorSelector);

  // Define colors based on the conditions
  const selectedColor = isDarkMode ? '#A16EE4' : '#654E92';
  const defaultColor = isDarkMode ? '#353535' : 'white';

  return (
    <Button onClick={onClick}>
      <GlovalSprite
        id={id}
        color={id === 'icon-user' && isSelected ? selectedColor : defaultColor}
      />
      <ButtonText isSelected={isSelected} textSize={textSize} isDarkMode={isDarkMode}>
        {text}
      </ButtonText>
    </Button>
  );
};

export default BottomBarButton;
