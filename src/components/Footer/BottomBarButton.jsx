import React from 'react';
import styled from 'styled-components';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import Theme from '../../styles/Theme';

const BottomBarButton = ({ id, text, isSelected, onClick, textSize }) => {
  return (
      <Button onClick={onClick}>
        <GlovalSprite
          id={id}
          color={id === 'icon-user' && isSelected ? '#654E92' : 'white'}
        />
        <ButtonText isSelected={isSelected} textSize={textSize}>{text}</ButtonText>
      </Button>
  );
};
export default BottomBarButton;

const Button = styled.button`
  width: 85px;
  height: 60px;
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const ButtonText = styled.div`
  color: ${(props) =>
    props.isSelected ? Theme.colors.mainColor : Theme.colors.textColor};
  font-size: ${(props) => props.textSize || '14px'};
  padding-top: 0.4rem;
`;
