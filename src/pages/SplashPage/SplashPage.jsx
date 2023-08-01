import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import SnsLoginPage from '../LoginPage/SnsLoginPage/SnsLoginPage';
import { isDarkModeState } from '../../atoms/StylesAtom';
import Theme, { darkColors } from '../../styles/Theme';
import SplashLogo from '../../assets/images/full-logo.svg';
import SplashDark from '../../assets/images/login-logo-dark.svg'
import SplashTitle from '../../assets/images/main-title.svg';
import SplashTitleDark from '../../assets/images/main-title-dark.svg'
import { Main, Logo, Title } from './SplashPageStyle';

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
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
      {isLoading ? (
        <Main>
          <Logo src={isDarkMode ? SplashDark : SplashLogo} alt="들숨날숨 로고" />
          <Title src={isDarkMode ? SplashTitleDark : SplashTitle} alt="들숨날숨" />
        </Main>
      ) : (
        <SnsLoginPage />
      )}
    </ThemeProvider>
  );
};

export default SplashPage;
