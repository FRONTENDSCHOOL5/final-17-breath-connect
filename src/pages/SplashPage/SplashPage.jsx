import { React, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SplashLogo from '../../assets/images/full-logo.svg';
import SplashTitle from '../../assets/images/main-title.svg';

import SnsLoginPage from '../../pages/SnsLoginPage/SnsLoginPage';

const SplashPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <SplashScreen>
      <MainLogo src={SplashLogo} alt="들숨날숨 로고" />
      <MainTitle src={SplashTitle} alt="들숨날숨" />
    </SplashScreen>
  ) : (
    <SnsLoginPage />
  );
};

export default SplashPage;

const SplashScreen = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
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

const MainLogo = styled.img`
  display: block;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const MainTitle = styled.img`
  width: 13rem;
  height: 4rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards, ${zoomIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s forwards;
`;
