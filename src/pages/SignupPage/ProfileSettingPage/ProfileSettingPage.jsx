import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postAccountnameDuplicate, postUserSignup } from '../../../api/auth';
import ProfileForm from '../../../components/Profile/ProfileForm';

const ProfileSettingPage = () => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state.email;
  const userPassword = location.state.password;

  const { mutate: accountname } = useMutation('accountnameValid', postAccountnameDuplicate, {
    onSuccess: (res) => {
      if (res.message === "이미 가입된 계정ID 입니다.") {
        setIsError(true);
        setMessage(res.message);
      } else {
        setIsError(false);
        setMessage(res.message)
      }
    },
    onError: (error) => {
      console.log(error);
    }
  }) 

  const { mutate: signup } = useMutation('signup', postUserSignup, {
    onSuccess: (res) => {
      if (res.message === "회원가입 성공") {
        navigate('/login');
      } else {
        setIsError(true);
      }
    }
  })


  return (
    <Container>
    <Title>프로필 설정</Title>
      <SubTitle>나중에 언제든지 변경할 수 있습니다.</SubTitle>
      <ProfileForm accountname={accountname} isError={isError} message={message} userEmail={userEmail} userPassword={userPassword} signup={signup} />
        </Container>
    )
  }

export default ProfileSettingPage;

const Container = styled.main`
  margin: 0 auto;
`
const Title = styled.h1`
  padding-top: 2.7rem;
  color: ${({theme}) => theme.colors.blackText};
  font-size: ${({theme}) => theme.fontSize.xxlarge};
  text-align: center;
`
const SubTitle = styled.p`
  margin-top: 1.4rem;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.medium};
  text-align: center;
`