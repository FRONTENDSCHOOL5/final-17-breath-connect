import React from 'react';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import { Button, ButtonText } from './FooterStyle';

const BottomBarButton = ({ id, text, isSelected, onClick, textSize }) => {
  return (
    <Button onClick={onClick}>
      <GlovalSprite
        id={id}
        color={id === 'icon-user' && isSelected ? '#654E92' : 'white'}
      />
      <ButtonText isSelected={isSelected} textSize={textSize}>
        {text}
      </ButtonText>
    </Button>
  );
};
export default BottomBarButton;
