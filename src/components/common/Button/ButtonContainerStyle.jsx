import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Button = styled.button`
  width: ${(props) => props.typeStyle.width};
  height: ${(props) => props.typeStyle.height};
  border-radius: ${(props) => props.typeStyle.radius};
  padding: ${(props) => props.typeStyle.padding};
  font-size: ${(props) => props.typeStyle.textSize};
  border: ${(props) =>
    props.isClicked ? `1px solid ${props.isDarkMode ? Theme.darkColors.mainColor : Theme.colors.mainColor}` : 'none'};
  background-color: ${(props) =>
    props.isDisabled
      ? props.isDarkMode ? Theme.darkColors.disabledColor : Theme.colors.disabledColor
      : props.isClicked ? props.isDarkMode ? Theme.darkColors.backgroundColor : Theme.colors.backgroundColor
      : props.isDarkMode ? Theme.darkColors.mainColor : Theme.colors.mainColor};
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'auto')};
  font-weight: 500;
  color: ${(props) =>
    props.disabled || props.isClicked
      ? props.isDarkMode
        ? Theme.darkColors.mainColor
        : Theme.colors.mainColor
      : Theme.colors.whiteText};
`;
