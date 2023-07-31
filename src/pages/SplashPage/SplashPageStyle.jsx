import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
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
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Logo = styled.img`
  display: block;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const Title = styled.img`
  width: 13rem;
  height: 4rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards, ${zoomIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s forwards;
`;