import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from './EmailJoinPageStyle';
import useValid from '../../../hook/useValid';
import { postEmailDuplicate } from '../../../api/auth';
import { useMutation } from 'react-query';
import SignupForm from '../../../components/Signup/SignupForm';

const SignupPage = () => {
  const [isError, setIsError] = useState(true);
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
