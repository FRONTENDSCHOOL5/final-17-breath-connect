import styled from 'styled-components';
import Theme from '../../../styles/Theme'

export const Button = styled.button`
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
      ? Theme.colors.whiteText
      : (props.isDarkMode ? '#A16EE4' : '#6541D3')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  font-weight: 500;
  color: ${(props) =>
    props.disabled || props.isClicked
      ? (props.isDarkMode ? '#A16EE4' : '#6541D3')
      : 'white'};
`;
