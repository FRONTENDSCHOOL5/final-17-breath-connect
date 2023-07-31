import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 39rem;
  height: 85rem;
  padding: 10.4rem;
  background-color: ${({ theme }) => theme.colors.snsColor};
`

export const Title = styled.h1`
  display: none;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`

export const LogoImage = styled.img`
  width: 20rem;
  height: 21rem;
  margin-bottom: 1rem;
`

export const LogoTitle = styled.img`
  width: 13rem;
  height: 4rem;
  margin-top: 1.8rem;
`

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 39rem;
  height: 30rem;
  padding: 5rem 3.4rem;
  background-color: ${({ theme }) => theme.colors.footerColor};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  .kakao-login {
      border: 0.1rem solid ${({ theme }) => theme.colors.kakaoColor};
    }

  .google-login {
      border: 0.1rem solid ${({ theme }) => theme.colors.googleColor};
    }

  .facebook-login {
      margin-bottom: 2rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.facebookColor};
    }
`

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 32rem;
  height: 4.4rem;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 4.4rem;
  font-size: ${({ theme }) => theme.fontSize.medium};

  svg {
    margin-left: 1rem;
    margin-right: 5rem;
  }

  &:nth-child(2) {
    svg {
    margin-right: 6.3rem;
    }
  }
`

export const LoginLink = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;

  .login-link::after {
    content: '|';
    padding: 1rem;
    color: ${({ theme }) => theme.colors.placeHolderColor};
  }
`