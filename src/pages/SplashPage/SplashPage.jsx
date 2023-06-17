import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import SplashLogo from '../../assets/images/full-logo.svg'
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
    <>
    <SplashScreen>
    <MainLogo src={SplashLogo} alt="들숨날숨 로고"/>
    <MainTitle src={SplashTitle} alt="들숨날숨"/>
    </SplashScreen>
    </>
  ) : (
    <SnsLoginPage />
  )
}

export default SplashPage;

const SplashScreen = styled.main`
display: flex;
flex-direction: column;
align-items: center;
top: 50%;
left: 50%;
position: absolute;
transform: translate(-50%, -50%);
`

const MainLogo = styled.img`
display: block;
width: 20rem;
height: 20rem;
margin-bottom: 3rem;
`

const MainTitle = styled.img`
width: 17rem;
height: 6rem;
`