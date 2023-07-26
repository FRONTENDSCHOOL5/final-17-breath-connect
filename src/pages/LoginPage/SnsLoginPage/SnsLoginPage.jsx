import React from 'react';
import SnsLogo from '../../../assets/images/login-logo.svg';
import SnsLogoDark from '../../../assets/images/login-logo-dark.svg'
import { Link } from 'react-router-dom';
import GlovalSprite from '../../../assets/sprite/GlovalSprite';
import WhiteTitle from '../../../assets/images/main-title(w).svg';

import {
  Container,
  Main,
  Logo,
  SnsMainLogo,
  MainTitle,
  LoginSection,
  SnsLoginLink,
} from './SnsLoginPageStyle';

import { useRecoilValue } from "recoil";
import { isDarkModeState } from '../../../atoms/StylesAtom';

const SnsLoginPage = () => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <Container>
      <h1 className="a11y-hidden">Sns 로그인 페이지</h1>
      <Main>
        <Logo>
          <SnsMainLogo src={isDarkMode ? SnsLogoDark : SnsLogo} alt="들숨날숨 로고" />
          <MainTitle src={WhiteTitle} alt="들숨날숨" />
        </Logo>
        <LoginSection>
          <button className="kakao-login">
            <GlovalSprite id="message-circle" />
            카카오톡 계정으로 로그인
          </button>
          <button className="google-login">
            <GlovalSprite id="google-g-logo-1" />
            구글 계정으로 로그인
          </button>
          <button className="facebook-login">
            <GlovalSprite id="facebook" />
            페이스북 계정으로 로그인
          </button>
          <SnsLoginLink>
            <Link to="/login" className="login-link">
              이메일로 로그인
            </Link>
            <Link to="/signup">회원가입</Link>
          </SnsLoginLink>
        </LoginSection>
      </Main>
    </Container>
  );
};

export default SnsLoginPage;
