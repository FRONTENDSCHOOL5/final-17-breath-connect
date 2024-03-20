import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginAtom } from '../../../atoms/LoginAtom';
import { userInfoAtom } from '../../../atoms/UserAtom';
import LoginForm from '../../../components/Login/LoginForm';
import { postUserLogin } from '../../../api/auth';
import { useMutation } from 'react-query';

const LoginPage = () => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setLogin = useSetRecoilState(loginAtom);
  const navigate = useNavigate();

    const { mutate } = useMutation('login', postUserLogin, {
    onSuccess: (res) => {
      if (res.status === 422) {
        setIsError(true);
        setMessage(res.message);
      } else {
        setIsError(false);
        onLogin(res);
      }
    },
    onError: (error) => {
      console.error(error);
    }
  })

  const onLogin = (res) => {
    if (res.status !== 422) {
      setUserInfo({
        ...userInfo,
        account: res.user.accountname,
        profileImg: res.user.image,
        username: res.user.username,
        intro: res.user.intro,
      });
      setLogin(true);
      localStorage.setItem('token', res.user.token);
      navigate('/home');
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm mutate={mutate} isError={isError} message={message} />
      <Signup to="/signup">이메일로 회원가입</Signup>
    </Container>
  );
};

export default LoginPage;

const Container = styled.main`
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 2.7rem 0 4.5rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
`;

const Signup = styled(Link)`
  display: block;
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
`;
