import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 6.1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  border-top: ${({ theme }) => `0.1rem solid ${theme.colors.borderColor}`};
`;

export const Upload = styled.input.attrs({ type: 'file', className: 'txt-hide' })`
  display: none;
  margin-left: 1.6rem;
  width: 4.2rem;
  height: 4.2rem;
`;

export const Label = styled.label`
  padding: 0.5rem;
  width: 4.2rem;
  height: 4.2rem;
`;

export const Form = styled.form.attrs({ className: 'form-comment' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
`;

export const Input = styled.input.attrs({ type: 'text', placeholder: '메시지 입력하기', cols: '40', rows: '5', className: 'input-comment' })`
  width: 100%;
  margin-left: 1.8rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  color: ${({ theme }) => theme.colors.blackText};
  box-sizing: border-box;
  font-size: ${({theme}) => theme.fontSize.medium};
  outline: none;
  `;

export const Button = styled.button.attrs({ className: 'btn-send' })`
  width: 4rem;
  color: ${({ isActive, isDarkMode }) => (isActive ? isDarkMode ? '#A16FF4' : '#6521d3' : '#C4C4C4')};
  font-size: 1.4rem;
`;