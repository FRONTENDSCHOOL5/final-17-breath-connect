import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/common/Input/Input';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import { postEmailDuplicate } from '../../utils/Apis';

const SignupPage = () => {

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  /* 이메일 유효성 검사 */
  const handleInputEmail = (e) => {
    const userEmail = e.target.value;
    const emailRegex = 
    /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(userEmail === '') {
      setEmailErrorMsg('*입력해주세요');
    } else if (!emailRegex.test(userEmail)) {
      setEmailErrorMsg('*이메일의 형식이 올바르지 않습니다 😥');
    } else {
      setEmailValid(true);
      setEmailErrorMsg('');
      setUserEmail(userEmail);
    }
  }

/* 중복된 이메일 확인 */
  const handleEmailDuplicate = async (e) => {
    const checkEmail = await postEmailDuplicate(e.target.value);
    console.log(checkEmail);
    if (checkEmail.message === '이미 가입된 이메일 주소 입니다.') {
      setEmailErrorMsg('*이미 가입된 이메일 주소 입니다 😥');
    } else if (checkEmail.message === '사용 가능한 이메일 입니다.') {
      setEmailValid(true);
      setEmailErrorMsg('사용 가능한 이메일 입니다 🤗')
    }
  }

  /* 비밀번호 유효성 검사 */
  const handleInputPassword = (e) => {
    const userPassword = e.target.value;
    const passwordRegex = 
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    if(!passwordRegex.test(userPassword)) {
    setPasswordErrorMsg('*영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요');
  } else {
    setPasswordValid(true);
    setPasswordErrorMsg('');
    setUserPassword(userPassword);
    }
  }

  
  /* 아이디와 비밀번호 모두 유효 시, 프로필 설정 페이지로 이동 */
  const handleSignup = async (e) => {
  e.preventDefault();
  console.log(userEmail, userPassword);
  if(emailValid && passwordValid) {
    setIsComplete(true);
    navigate('/signup/profile', {
      state: {
      email: userEmail, 
      password: userPassword
      }
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
     <SignupContainer>
      <SignupTitle>회원가입</SignupTitle>
      <SignupForm onSubmit={handleSignup}>
        <Input
          label='이메일'
          placeholder='이메일 주소를 입력해주세요'
          id='email'
          type='email'
          name='email'
          onChange={handleInputEmail}
          onBlur={handleEmailDuplicate}
          required
        />
        {emailErrorMsg && <ErrorMsg>{emailErrorMsg}</ErrorMsg>}
        <div className='input-wrapper'>
        <Input
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          id='password'
          type='password'
          name='password'
          onChange={handleInputPassword}
          required
        />
        </div>
        {passwordErrorMsg && <ErrorMsg className='password-msg'>{passwordErrorMsg}</ErrorMsg>}
        <ButtonContainer type={'L'} text={'회원가입'} isDisabled = {!handleActivateButton()} />
      </SignupForm>
    </SignupContainer>
  )
}

export default SignupPage;

const SignupContainer = styled.main`
  margin: 0 auto;
`

const SignupTitle = styled.h1`
padding-top: 2.7rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
  margin-bottom: 4.5rem;
`

const SignupForm = styled.form`
   .input-wrapper {
    margin-bottom: 3rem; 
  } 
`

const ErrorMsg = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorText};
    font-size: ${theme.fontSize.small};
    margin-top: -0.9rem;
  `}
  &.password-msg {
    margin: -2.4rem 0 3rem;
  }
`;