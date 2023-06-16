import React from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';

const ButtonContainer = ({
  text,
  type,
  isClicked = false,
  isDisabled = false,
  handleClick,
}) => {
  let typeDeco = {
    width: '',
    height: '',
    padding: '',
    textSize: '1.4rem',
    radius: '',
  };

  switch (type) {
    case 'XL':
      typeDeco.width = '35rem';
      typeDeco.height = '3.2rem';
      typeDeco.padding = '0.7rem 0';
      typeDeco.radius = '3.2rem';
      break;
    case 'L':
      typeDeco.width = '32.2rem';
      typeDeco.height = '4.4rem';
      typeDeco.padding = '1.3rem 0';
      typeDeco.radius = '4.4rem';
      break;
    case 'ML':
      typeDeco.width = '12rem';
      typeDeco.height = '4.4rem';
      typeDeco.padding = '1.3rem 0';
      typeDeco.radius = '4.4rem';
      break;
    case 'M':
      typeDeco.width = '12rem';
      typeDeco.height = '3.4rem';
      typeDeco.padding = '0.8rem 0';
      typeDeco.radius = '3rem';
      break;
    case 'MS':
      typeDeco.width = '9rem';
      typeDeco.height = '3.2rem';
      typeDeco.padding = '0.7rem 0';
      typeDeco.radius = '3.2rem';
      break;
    case 'S':
      typeDeco.width = '5.6rem';
      typeDeco.height = '2.8rem';
      typeDeco.padding = '0.7rem 0';
      typeDeco.textSize = '1.2rem';
      typeDeco.radius = '2.6rem';
      break;
    default:
  }

  return (
    <Container
      typeStyle={typeDeco}
      isDisabled={isDisabled}
      isClicked={isClicked}
      onClick={handleClick}
    >
      {text}
    </Container>
  );
};
export default ButtonContainer;

const Container = styled.button`
  width: ${(props) => props.typeStyle.width};
  height: ${(props) => props.typeStyle.height};
  border-radius: ${(props) => props.typeStyle.radius};
  padding: ${(props) => props.typeStyle.padding};
  font-size: ${(props) => props.typeStyle.textSize};
  border: ${(props) =>
    props.isClicked ? `1px solid ${Theme.colors.mainColor}` : 'none'};
  background-color: ${(props) =>
    props.isDisabled
      ? Theme.colors.disabledColor
      : props.isClicked
      ? 'white'
      : Theme.colors.mainColor};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  font-weight: 500;
  color: ${(props) =>
    props.disabled || props.isClicked ? Theme.colors.mainColor : 'white'};
`;
