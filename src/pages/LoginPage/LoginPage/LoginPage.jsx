import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { postUserLogin } from '../../../api/auth';
import { loginAtom } from '../../../atoms/LoginAtom';
import { userInfoAtom } from '../../../atoms/UserAtom';
import LoginForm from '../../../components/Login/LoginForm';

const LoginPage = () => {
  const [initData, setInitData] = useState({
    email: 'breath_connect@test.com',
    password: 'bc12345',
  });
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setLogin = useSetRecoilState(loginAtom);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await postUserLogin(initData);
      if (res.status === 422) {
        setMessage(res.message);
      } else {
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
    } catch (error)
    {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm handleLogin={handleLogin} initData={initData} setInitData={setInitData} message={message} />
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
