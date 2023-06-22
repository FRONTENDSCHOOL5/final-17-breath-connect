import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Input from '../../components/common/Input/Input';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import { postUserLogin } from '../../utils/Apis';
import { tokenAtom } from '../../atoms/UserAtom';
import { accountAtom } from '../../atoms/UserAtom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [userToken, setUserToken] = useRecoilState(tokenAtom);
  const [userAccount, setUserAccount] = useRecoilState(accountAtom);

  const handleInputEmail = (e) => {
    const userEmail = e.target.value;
    setUserEmail(userEmail);
  };

  const handleInputPassword = (e) => {
    const userPassword = e.target.value;
    setUserPassword(userPassword);
  };

  useEffect(() => {
    setErrorMsg('');
  }, [userPassword]);

  /* 로그인 요청을 보내고 결과 반환 */
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = await postUserLogin(userEmail, userPassword);
    console.log(loginData);
    if (loginData.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
      setErrorMsg('*이메일 또는 비밀번호가 일치하지 않습니다 🥲');
      setIsComplete(false);
    } else {
      const token = loginData.user.token;
      const account = loginData.user.accountname;
      localStorage.setItem('token', loginData.user.token);
      setUserToken(token);
      setUserAccount(account);
      setIsComplete(!isComplete);
      navigate('/home');
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return userEmail !== '' && userPassword !== '';
  };

  return (
    <LoginContainer>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onSubmit={handleLogin}>
        <div className="input-wrapper">
          <Input
            label="이메일"
            placeholder="이메일 주소를 입력해주세요"
            id="email"
            type="email"
            name="email"
            onChange={handleInputEmail}
            required
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            id="password"
            type="password"
            name="password"
            onChange={handleInputPassword}
            required
          />
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </div>
        <ButtonContainer
          type={'L'}
          text={'로그인'}
          isDisabled={!handleActivateButton()}
        />
      </LoginForm>
      <SignupLink to="/signup">이메일로 회원가입</SignupLink>
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.section`
  margin: 0 auto;
`;

const LoginTitle = styled.h1`
  padding-top: 2.7rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
  margin-bottom: 4.5rem;
`;

const LoginForm = styled.form`
  .input-wrapper {
    margin-bottom: 3rem;
  }
`;

const SignupLink = styled(Link)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textColor};
  display: block;
  padding-top: 1.9rem;
`;
const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
`;
