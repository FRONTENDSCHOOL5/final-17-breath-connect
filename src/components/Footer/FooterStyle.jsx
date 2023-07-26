import styled from 'styled-components';
import Theme from '../../styles/Theme'

// ----- BottomBatButton
export const Button = styled.button`
  width: 85px;
  height: 60px;
  /* background-color: inherit; */
  border: none;
  margin: 0;
  padding: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

export const ButtonText = styled.div`
  color: ${(props) => {
    if (props.isSelected && props.isDarkMode) return '#A16EE4';
    if (!props.isSelected && props.isDarkMode) return '#ffffff';
    if (props.isSelected && !props.isDarkMode) return '#6521D3';
    return '#767676';
  }};
  font-size: ${(props) => props.textSize || '14px'};
  padding-top: 0.4rem;
`;
// ----- BottomBatButton

// ----- TabMenu
export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 39rem;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.footerColor};
`;
// ----- TabMenu
