import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { isDarkModeState } from '../../../atoms/StylesAtom';
import SnsLogo from '../../../assets/images/login-logo.svg';
import SnsLogoDark from '../../../assets/images/login-logo-dark.svg'
import GlobalSprite from '../../../assets/sprite/GlobalSprite';
import WhiteTitle from '../../../assets/images/main-title(w).svg';
import {
  Container,
  Title,
  Main,
  LogoSection,
  LogoImage,
  LogoTitle,
  LoginSection,
  Button,
  LoginLink,
} from './SnsLoginPageStyle';

const SnsLoginPage = () => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <Container>
      <Title>SNS 로그인 페이지</Title>
      <Main>
        <LogoSection>
          <LogoImage src={isDarkMode ? SnsLogoDark : SnsLogo} alt="들숨날숨 로고" />
          <LogoTitle src={WhiteTitle} alt="들숨날숨" />
        </LogoSection>
        <LoginSection>
          <Button className="kakao-login">
            <GlobalSprite id="message-circle" />
            카카오톡 계정으로 로그인
          </Button>
          <Button className="google-login">
            <GlobalSprite id="google-g-logo-1" />
            구글 계정으로 로그인
          </Button>
          <Button className="facebook-login">
            <GlobalSprite id="facebook" />
            페이스북 계정으로 로그인
          </Button>
          <LoginLink>
            <Link to="/login" className="login-link">
              이메일로 로그인
            </Link>
            <Link to="/signup">회원가입</Link>
          </LoginLink>
        </LoginSection>
      </Main>
    </Container>
  );
};

export default SnsLoginPage;
