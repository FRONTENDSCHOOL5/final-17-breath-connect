import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.snsColor};
  width: 39rem;
  padding: 10.4rem;
  height: 85rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`

export const SnsMainLogo = styled.img`
  width: 20rem;
  height: 21rem;
  margin-bottom: 1rem;
`

export const MainTitle = styled.img`
  width: 13rem;
  height: 4rem;
  margin-top: 1.8rem;
`

export const LoginSection = styled.section`
position: fixed;
bottom: 0;
  width: 39rem;
  height: 30rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding: 5rem 3.4rem;
  background-color: ${({ theme }) => theme.colors.footerColor};
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

export const SnsLoginLink = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  .login-link::after {
    content: '|';
    padding: 1rem;
    color: ${({ theme }) => theme.colors.placeHolderColor};
  }
`