import styled, { keyframes } from 'styled-components';

export const SplashScreen = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const zoomIn = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const MainLogo = styled.img`
  display: block;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const MainTitle = styled.img`
  width: 13rem;
  height: 4rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards, ${zoomIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s forwards;
`;