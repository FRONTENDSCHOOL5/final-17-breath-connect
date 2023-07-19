import { React, useState, useEffect } from 'react';
import SplashLogo from '../../assets/images/full-logo.svg';
import SplashTitle from '../../assets/images/main-title.svg';

import SnsLoginPage from '../../pages/SnsLoginPage/SnsLoginPage';
import { SplashScreen, MainLogo, MainTitle } from './style/SplashPageStyle';

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
