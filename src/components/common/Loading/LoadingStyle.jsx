import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const Container = styled.div`
`

export const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_watermelonSalad.woff2') format('woff2');
    font-family: 'EF_watermelonSalad';
    font-weight: normal;
    font-style: normal;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 0;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  font-family: 'EF_watermelonSalad', Arial, sans-serif;
`;

export const pulseAnimation = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
`;

export const Circle = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.footerColor};
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;

export const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Before = styled.div`
  content: '';
  display: block;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 0.8rem solid ${({theme}) => theme.colors.mainColor};
  border-color: ${({theme}) => theme.colors.mainColor} transparent ${({theme}) => theme.colors.mainColor} transparent;
  animation: ${loaderAnimation} 1.2s linear infinite;
`;

export const Text = styled.span`
  color: ${({theme}) => theme.colors.mainColor};
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 2rem;
`;
