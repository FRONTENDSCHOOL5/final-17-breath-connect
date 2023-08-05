import React from 'react';
import { useRecoilValue } from 'recoil';
import SnsLoginPage from '../LoginPage/SnsLoginPage/SnsLoginPage';
import { isDarkModeState } from '../../atoms/StylesAtom';
import SplashLogo from '../../assets/images/full-logo.svg';
import SplashDark from '../../assets/images/login-logo-dark.svg'
import SplashTitle from '../../assets/images/main-title.svg';
import SplashTitleDark from '../../assets/images/main-title-dark.svg'
import { Container, Main, Logo, Title } from './SplashPageStyle';

const SplashPage = ({ theme }) => {
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
