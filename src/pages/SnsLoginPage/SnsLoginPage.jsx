import React from 'react';
import styled from 'styled-components';
import SnsLogo from '../../assets/images/login-logo.svg';
import { Link } from 'react-router-dom';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import WhiteTitle from '../../assets/images/main-title(w).svg';

const SnsLoginPage = () => {
  return (
    <SnsLoginContainer>
      <h1 className='a11y-hidden'>Sns 로그인 페이지</h1>
      <ContentWrapper>
        <ImgContainer>
          <SnsMainLogo src={SnsLogo} alt='들숨날숨 로고' />
          <MainTitle src={WhiteTitle} alt="들숨날숨" />
        </ImgContainer>
        <SnsLoginMain>
          <button className='kakao-login'>
            <GlovalSprite id='message-circle' />
            카카오톡 계정으로 로그인
          </button>
          <button className='google-login'>
            <GlovalSprite id='google-g-logo-1' />
            구글 계정으로 로그인
          </button>
          <button className='facebook-login'>
            <GlovalSprite id='facebook' />
            페이스북 계정으로 로그인
          </button>
          <SnsLoginLink>
            <Link to='/login' className='login-link'>이메일로 로그인</Link>
            <Link to='/signup'>회원가입</Link>
          </SnsLoginLink>
        </SnsLoginMain>
      </ContentWrapper>
    </SnsLoginContainer>
  )
}

const SnsLoginContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: 39rem;
  padding: 10.4rem;
  height: 85rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`

const SnsMainLogo = styled.img`
  width: 20rem;
  height: 21rem;
`

const MainTitle = styled.img`
  width: 20rem;
  height: 8rem;
  margin-top: 1.8rem;
`

const SnsLoginMain = styled.section`
position: fixed;
bottom: 0;
  width: 39rem;
  height: 30rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding: 5rem 3.4rem;
  background: ${({ theme }) => theme.colors.whiteText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 4.4rem;
    width: 32rem;
    height: 4.4rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 1rem;
    justify-content: flex-start;
    svg {
      margin-left: 1rem;
      margin-right: 5rem;
    }
  }

  button:nth-child(2) {
    svg {
      margin-right: 6.3rem;
    }
  }

  .kakao-login {
    border: 0.1rem solid ${({ theme }) => theme.colors.kakaoColor};
  }
  .google-login {
    border: 0.1rem solid ${({ theme }) => theme.colors.googleColor};
  }
  .facebook-login {
    border: 0.1rem solid ${({ theme }) => theme.colors.facebookColor};
    margin-bottom: 2rem;
  }
`

const SnsLoginLink = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  .login-link::after {
    content: '|';
    padding: 1rem;
    color: ${({ theme }) => theme.colors.placeHolderColor};
  }
`

export default SnsLoginPage;
