import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.2rem;
  margin: 1.6rem 0;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    margin-bottom: 0.2rem;
    color: ${theme.colors.textColor};
    font-size: ${theme.fontSize.small};
  `}
`;

export const Text = styled.input`
  padding: 0.8rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.blackText};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
  animation: ${({ hasError }) => (hasError ? shake : 'none')} 0.4s linear; // 에러 발생 시 흔들림 애니메이션 적용
  outline: none;
  
  &:focus {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.borderColor};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
