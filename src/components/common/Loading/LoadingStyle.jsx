import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const Body = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 0;
  font-family: 'EF_watermelonSalad', Arial, sans-serif;
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const LoaderCircle = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

export const LoaderCircleBefore = styled.div`
  content: '';
  display: block;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 0.8rem solid #7e3af2;
  border-color: #7e3af2 transparent #7e3af2 transparent;
  animation: ${loaderAnimation} 1.2s linear infinite;
`;

export const LoaderText = styled.span`
  color: #7e3af2;
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'EF_watermelonSalad';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_watermelonSalad.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;
