import React from 'react';
import styled from 'styled-components';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import Theme from '../../styles/Theme';

const BottomBarButton = ({ id, text, isSelected, onClick }) => {
  return (
    <Container>
      <Button onClick={onClick}>
        <GlovalSprite
          id={id}
          color={id === 'icon-user' && isSelected ? '#654E92' : 'white'}
        />
        <ButtonText isSelected={isSelected}>{text}</ButtonText>
      </Button>
    </Container>
  );
};
export default BottomBarButton;

const Container = styled.div`
  width: 85px;
  height: 60px;
  text-align: center;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  margin: 0;
  padding: 0;
  padding: 10px;
  box-sizing: border-box;
`;

const ButtonText = styled.div`
  color: ${(props) =>
    props.isSelected ? Theme.colors.mainColor : Theme.colors.textColor};
  font-size: 14px;
`;
