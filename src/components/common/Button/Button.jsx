import React from 'react';
import { ButtonStyle } from './ButtonStyle';

const Button = ({
  type,
  text,
  size,
  isClicked = false,
  isDisabled = false,
  isDarkMode = false,
  handleClick,
}) => {

  let sizeDeco = {
    width: '',
    height: '',
    padding: '',
    textSize: '1.4rem',
    radius: '',
  };

  switch (size) {
    case 'XL':
      sizeDeco.width = '35rem';
      sizeDeco.height = '3.2rem';
      sizeDeco.padding = '0.7rem 0';
      sizeDeco.radius = '3.2rem';
      break;
    case 'L':
      sizeDeco.width = '32.2rem';
      sizeDeco.height = '4.4rem';
      sizeDeco.padding = '1.3rem 0';
      sizeDeco.radius = '4.4rem';
      break;
    case 'ML':
      sizeDeco.width = '12rem';
      sizeDeco.height = '4.4rem';
      sizeDeco.padding = '1.3rem 0';
      sizeDeco.radius = '4.4rem';
      break;
    case 'M':
      sizeDeco.width = '12rem';
      sizeDeco.height = '3.4rem';
      sizeDeco.padding = '0.8rem 0';
      sizeDeco.radius = '3rem';
      break;
    case 'MS':
      sizeDeco.width = '9rem';
      sizeDeco.height = '3.2rem';
      sizeDeco.padding = '0.7rem 0';
      sizeDeco.radius = '3.2rem';
      break;
    case 'S':
      sizeDeco.width = '5.6rem';
      sizeDeco.height = '2.8rem';
      sizeDeco.padding = '0.7rem 0';
      sizeDeco.textSize = '1.2rem';
      sizeDeco.radius = '2.6rem';
      break;
    default:
  }

  return (
    <ButtonStyle
      type={type}
      sizeStyle={sizeDeco}
      isDisabled={isDisabled}
      isClicked={isClicked}
      isDarkMode={isDarkMode}
      onClick={handleClick}
    >
      {text}
    </ButtonStyle>
  );
};
export default Button;
