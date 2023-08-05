import React from 'react';
import { Button } from './ButtonContainerStyle';

const ButtonContainer = ({
  text,
  type,
  isClicked = false,
  isDisabled = false,
  isDarkMode = false,
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
    <Button
      typeStyle={typeDeco}
      isDisabled={isDisabled}
      isClicked={isClicked}
      isDarkMode={isDarkMode}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
export default ButtonContainer;
