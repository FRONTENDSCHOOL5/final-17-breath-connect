import styled from "styled-components";
import Theme from '../../styles/Theme'

export const Button = styled.button`
  width: 8.5rem;
  height: 6rem;
  padding: 1rem;
  margin: 0;
  border: none;
  box-sizing: border-box;
`;

export const Text = styled.div`
  padding-top: 0.4rem;
  color: ${(props) => {
    if (props.isSelected && props.isDarkMode) return `${Theme.darkColors.mainColor}`;
    if (!props.isSelected && props.isDarkMode) return `${Theme.colors.whiteText}`;
    if (props.isSelected && !props.isDarkMode) return `${Theme.colors.mainColor}`;
    return `${Theme.colors.textColor}`;
  }};
  font-size: ${(props) => props.textSize || `${Theme.fontSize.medium}`};
`;