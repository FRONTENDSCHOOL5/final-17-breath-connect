import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/common/Input/Input';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import { postUserLogin } from '../../utils/Apis';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userAtom } from '../../recoil/LoginData';

const LoginPage = () => {

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('')
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [hasSuccess, setHasSuccess] = useState(false);

  const setUser = useSetRecoilState(userAtom);
  const user = useRecoilValue(userAtom);

  const handleInputEmail = (e) => {
    setUserEmail(e.target.value);
  }

  const handleInputPassword = (e) => {
    setUserPassword(e.target.value);
  }


 const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await postUserLogin(userEmail, userPassword);
  console.log(res);
  if (res.status === 422) {
    console.log(res.status);
    setHasSuccess(false)
  } else {
    console.log(res.status);
    setHasSuccess(!hasSuccess);
    navigate("/home");
    setUser(res.data);
  }
 }


  return (
    <LoginSection>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
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
          name='password'
          onChange={handleInputPassword}
          required
        />
        </div>
        <ButtonContainer type={'L'} text={'로그인'} />
      </LoginForm>
      <SignupLink to ='/signup'>이메일로 회원가입</SignupLink>
    </LoginSection>
  )
}

export default LoginPage;


const LoginSection = styled.section`
  margin: 0 auto;
`;

const LoginTitle = styled.h1`
  padding-top: 2.7rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
  margin-bottom: 4rem;
`;

const LoginForm = styled.form`
  .input-wrapper {
    margin-bottom: 3rem;
  } 
  `

const SignupLink = styled(Link)`
  text-align: center;
  font-size: ${({theme}) => theme.fontSize.small};
  color: ${({theme}) => theme.colors.textColor};
  display: block;
  padding-top: 1.9rem;
`