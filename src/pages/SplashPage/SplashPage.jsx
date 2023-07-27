import React from 'react';
import { useRecoilValue } from 'recoil';
import SplashLogo from '../../assets/images/full-logo.svg';
import SplashDark from '../../assets/images/login-logo-dark.svg'
import SplashTitle from '../../assets/images/main-title.svg';
import SplashTitleDark from '../../assets/images/main-title-dark.svg'
import SnsLoginPage from '../LoginPage/SnsLoginPage/SnsLoginPage';
import { SplashScreen, MainLogo, MainTitle } from './SplashPageStyle';
import { isDarkModeState } from '../../atoms/StylesAtom';
import { ThemeProvider } from 'styled-components';
import Theme, { darkColors } from '../../styles/Theme';

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
        <SplashScreen>
          <MainLogo src={isDarkMode ? SplashDark : SplashLogo} alt="들숨날숨 로고" />
          <MainTitle src={isDarkMode ? SplashTitleDark : SplashTitle} alt="들숨날숨" />
        </SplashScreen>
      ) : (
        <SnsLoginPage />
      )}
    </ThemeProvider>
  );
};

export default SplashPage;
