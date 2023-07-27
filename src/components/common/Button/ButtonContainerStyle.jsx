import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.button`
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
      : Theme.colors.mainColor};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  font-weight: 500;
  color: ${(props) =>
    props.disabled || props.isClicked ? Theme.colors.mainColor : 'white'};
`;
