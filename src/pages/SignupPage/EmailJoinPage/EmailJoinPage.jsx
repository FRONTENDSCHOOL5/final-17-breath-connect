import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { ThemeProvider } from 'styled-components';
import Input from '../../../components/common/Input/Input';
import Button from '../../../components/common/Button/ButtonContainer';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import Theme, { darkColors } from '../../../styles/Theme';
import { postEmailDuplicate } from '../../../api/auth';
import { Container, Title, Form, Section, ErrorMessage } from './EmailJoinPageStyle';

const SignupPage = ({theme}) => {
  const navigate = useNavigate();
  const isDarkMode = useRecoilValue(isDarkModeState);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [emailSuccessMsg, setEmailSuccessMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  /* 이메일 유효성 검사 */
  const handleInputEmail = async (e) => {
    const userEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (userEmail === '') {
      setEmailErrorMsg('*입력해주세요');
    } else if (!emailRegex.test(userEmail)) {
      setEmailErrorMsg('*이메일의 형식이 올바르지 않습니다 😥');
    } else {
      setEmailValid(true);
      setEmailErrorMsg('');
      setUserEmail(userEmail);
    }
  };

  /* 중복된 이메일 확인 */
  const handleEmailDuplicate = async (e) => {
    const checkEmail = await postEmailDuplicate(e.target.value);
    if (checkEmail.message === '이미 가입된 이메일 주소 입니다.') {
      setEmailErrorMsg('*이미 가입된 이메일 주소 입니다 😥');
    } else if (checkEmail.message === '사용 가능한 이메일 입니다.') {
      setEmailValid(true);
      setEmailErrorMsg('');
      setEmailSuccessMsg('사용 가능한 이메일 입니다 🤗');
    }
  };

  /* 비밀번호 유효성 검사 */
  const handleInputPassword = (e) => {
    const userPassword = e.target.value;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    if (!passwordRegex.test(userPassword)) {
      setPasswordErrorMsg(
        '*영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요'
      );
    } else {
      setPasswordValid(true);
      setPasswordErrorMsg('');
      setUserPassword(userPassword);
    }
  };

  /* 에러 메시지 초기화 */
  useEffect(() => {
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
  }, [userEmail]);

  useEffect(() => {
    setPasswordErrorMsg('');
  }, [userPassword]);

  /* 아이디와 비밀번호 모두 유효 시, 프로필 설정 페이지로 이동 */
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(userEmail, userPassword);
    if (emailValid && passwordValid) {
      setIsComplete(true);
      navigate('/signup/profile', {
        state: {
          email: userEmail,
          password: userPassword,
        },
      });
    } else {
      setIsComplete(false);
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return emailValid && passwordValid;
  };

  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={handleSignup}>
        <Input
          label="이메일"
          placeholder="이메일 주소를 입력해주세요"
          id="email"
          type="email"
          name="email"
          onChange={handleInputEmail}
          onBlur={handleEmailDuplicate}
          hasError={emailErrorMsg !== ''}
          required
        />
        {emailErrorMsg && <ErrorMessage hasError>{emailErrorMsg}</ErrorMessage>}
        {emailSuccessMsg && (
          <ErrorMessage className="success-msg">{emailSuccessMsg}</ErrorMessage>
        )}
        <Section>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            id="password"
            type="password"
            name="password"
            onChange={handleInputPassword}
            hasError={passwordErrorMsg !== ''}
            required
          />
        </Section>
        {passwordErrorMsg && (
          <ErrorMessage className="password-msg">{passwordErrorMsg}</ErrorMessage>
        )}
        <Button
          type={'L'}
          text={'회원가입'}
          isDisabled={!handleActivateButton()}
        />
      </Form>
    </Container>
    </ThemeProvider>
  );
};

export default SignupPage;
