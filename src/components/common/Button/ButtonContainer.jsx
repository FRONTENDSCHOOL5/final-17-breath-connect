import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../../styles/Theme';

const ButtonContainer = ({ text, type }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  let typeDeco = {
    text: text,
    width: '',
    height: '',
    padding: '',
    textSize: '1.4rem',
    radius: '',
  };

  switch (type) {
    case 'L':
      typeDeco.width = '32.2rem';
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
    default:
  }

  const handleClick = () => {
    setIsDisabled(true);
  };

  return (
    <Container typeStyle={typeDeco} disabled={isDisabled} onClick={handleClick}>
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
  background-color: ${(props) =>
    props.disabled ? Theme.colors.disabledColor : Theme.colors.mainColor};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  font-weight: 500;
  color: white;
  &:active {
    background-color: #3f1780;
  }
`;
