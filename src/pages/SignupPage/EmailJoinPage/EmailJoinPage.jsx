import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { postEmailDuplicate } from '../../../api/auth';
import { useMutation } from 'react-query';
import SignupForm from '../../../components/Signup/SignupForm';

const SignupPage = () => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();

  const { mutate } = useMutation('emailValid', postEmailDuplicate, {
    onSuccess: (res) => {
        if (res.message === "이미 가입된 이메일 주소 입니다.") {
          setIsError(true);
          setMessage(res.message);
        } else {
          setIsError(false);
          setMessage(res.message);
      }
    },
    onError: (error) => {
      console.error(error);
    }
  })

  const onSuccess = (formData) => {
    navigate('/signup/profile', {
      state: {
      formData
    }
    })
  }

  return (
    <Container>
      <Title>회원가입</Title>
      <SignupForm onSuccess={onSuccess} mutate={mutate} isError={isError} message={message} />
    </Container>
  );
};

export default SignupPage;

const Container = styled.main`
  margin: 0 auto;
`

const Title = styled.h1`
  padding-top: 2.7rem;
  margin-bottom: 4.5rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-align: center;
`