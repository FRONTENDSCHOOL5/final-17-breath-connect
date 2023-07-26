import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import Input from '../../../components/common/Input/Input';
import ButtonContainer from '../../../components/common/Button/ButtonContainer';
import { postUserLogin } from '../../../utils/Apis';
import {
  tokenAtom,
  accountAtom,
  profileImgAtom,
  usernameAtom,
  introAtom,
} from '../../../atoms/UserAtom';
import { loginAtom } from '../../../atoms/LoginAtom';

import {
  Container,
  LoginTitle,
  Form,
  SignupLink,
  ErrorMsg,
} from './LoginPageStyle';

import {ThemeProvider} from 'styled-components'
import Theme, { darkColors } from '../../../styles/Theme';
import { isDarkModeState } from '../../../atoms/StylesAtom';

const LoginPage = ({theme}) => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [userToken, setUserToken] = useRecoilState(tokenAtom);
  const [userAccount, setUserAccount] = useRecoilState(accountAtom);
  const [userProfileImg, setUserProfileImg] = useRecoilState(profileImgAtom);
  const [userName, setUserName] = useRecoilState(usernameAtom);
  const [userLogin, setUserLogin] = useRecoilState(loginAtom);
  const [userIntro, setUserIntro] = useRecoilState(introAtom);

  const isDarkMode = useRecoilValue(isDarkModeState);

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
    if (loginData.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
      setErrorMsg('*이메일 또는 비밀번호가 일치하지 않습니다 🥲');
      setHasError(true);
      setIsComplete(false);
    } else {
      const token = loginData.user.token;
      const account = loginData.user.accountname;
      const profileImg = loginData.user.image;
      const username = loginData.user.username;
      const intro = loginData.user.intro;
      localStorage.setItem('token', loginData.user.token);
      setUserToken(token);
      setUserAccount(account);
      setUserProfileImg(profileImg);
      setUserName(username);
      setUserIntro(intro);
      setUserLogin(true);
      setIsComplete(!isComplete);
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

  useEffect(() => {
    if (userLogin) {
      navigate('/home');
    }
  }, [userLogin]);

  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <Container>
      <LoginTitle>로그인</LoginTitle>
      <Form onSubmit={handleLogin}>
        <div className="input-wrapper">
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
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </div>
        <ButtonContainer
          type={'L'}
          text={'로그인'}
          isDisabled={!handleActivateButton()}
        />
      </Form>
      <SignupLink to="/signup">이메일로 회원가입</SignupLink>
    </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
