import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Input from '../../../components/common/Input/Input';
import ButtonContainer from '../../../components/common/Button/ButtonContainer';
import { loginAtom } from '../../../atoms/LoginAtom';
import { userInfoAtom } from '../../../atoms/UserAtom';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import { postUserLogin } from '../../../api/auth';
import {
  Container,
  Title,
  Form,
  Section,
  SignupLink,
  ErrorMessage,
} from './LoginPageStyle';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const isDarkMode = useRecoilValue(isDarkModeState);
  const setLogin = useSetRecoilState(loginAtom);

  const handleInputEmail = (e) => {
    const userEmail = e.target.value;
    setUserEmail(userEmail);
    setErrorMsg('');
    setHasError(false);
  };

  const handleInputPassword = (e) => {
    const userPassword = e.target.value;
    setUserPassword(userPassword);
    setErrorMsg('');
    setHasError(false);
  };

  /* 로그인 요청을 보내고 결과 반환 */
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = await postUserLogin(userEmail, userPassword);
    console.log(loginData);
    if (loginData.status === 422) {
      setErrorMsg('*이메일 또는 비밀번호가 일치하지 않습니다 🥲');
      setHasError(true);
      setIsComplete(false);
    } else {
      localStorage.setItem('token', loginData.user.token);
      setUserInfo({
        ...userInfo,
        account: loginData.user.accountname,
        profileImg: loginData.user.image,
        username: loginData.user.username,
        intro: loginData.user.intro,
      })
      setIsComplete(!isComplete);
      setLogin(true);
      navigate('/home', {
        state: {
          token: loginData.user.token,
        },
      });
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return userEmail !== '' && userPassword !== '';
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={handleLogin}>
        <Section>
          <Input
            label="이메일"
            placeholder="이메일 주소를 입력해주세요"
            id="email"
            type="email"
            name="email"
            value={userEmail}
            onChange={handleInputEmail}
            required
            hasError={hasError}
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            id="password"
            type="password"
            name="password"
            value={userPassword}
            onChange={handleInputPassword}
            required
            hasError={hasError}
          />
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Section>
        <ButtonContainer
          type={'L'}
          text={'로그인'}
          isDisabled={!handleActivateButton()}
        />
      </Form>
      <SignupLink to="/signup">이메일로 회원가입</SignupLink>
    </Container>
  );
};

export default LoginPage;
