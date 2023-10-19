import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import SplashLogo from '../../assets/images/full-logo.svg';
import SplashDark from '../../assets/images/login-logo-dark.svg'
import SplashTitle from '../../assets/images/main-title.svg';
import SplashTitleDark from '../../assets/images/main-title-dark.svg'
import SnsLoginPage from '../LoginPage/SnsLoginPage/SnsLoginPage';
import { fadeIn, zoomIn } from '../../styles/Animation';

const SplashPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const isDarkMode = useRecoilValue(isDarkModeState);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Main>
          <Logo src={isDarkMode ? SplashDark : SplashLogo} alt="들숨날숨 로고" />
          <Title src={isDarkMode ? SplashTitleDark : SplashTitle} alt="들숨날숨" />
        </Main>
      ) : (
        <SnsLoginPage />
      )}
    </Container>
  );
};

export default SplashPage;

export const Container = styled.div`
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.img`
  display: block;
  width: 20rem;
  height: 20rem;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const Title = styled.img`
  width: 13rem;
  height: 4rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards, ${zoomIn} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s forwards;
`;
