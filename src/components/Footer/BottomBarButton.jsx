import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import Theme from '../../styles/Theme'
import { Button, Text } from './BottomBarButtonStyle';

const BottomBarButton = ({ id, text, isSelected, onClick, textSize }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const selectedColor = isDarkMode ? `${Theme.darkColors.mainColor}` : `${Theme.colors.mainColor}`;
  const defaultColor = isDarkMode ? `${Theme.darkColors.footerColor}` : `${Theme.colors.whiteText}`;

  return (
    <Button onClick={onClick}>
      <GlobalSprite
        id={id}
        color={id === 'icon-user' && isSelected ? selectedColor : defaultColor}
      />
      <Text isSelected={isSelected} textSize={textSize} isDarkMode={isDarkMode}>
        {text}
      </Text>
    </Button>
  );
};

export default BottomBarButton;
