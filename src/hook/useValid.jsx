import React, { useState, useEffect } from 'react';

export default function useValid(formData) {
  const [messages, setMessages] = useState({
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState({
    email: false,
    password: false
  });

  useEffect(() => {
    if (formData.email) {
      const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zAZ0-9-.]+$/;
      if (!emailRegex.test(formData.email)) {
        setMessages((prevMessages) => ({
          ...prevMessages,
          email: '이메일의 형식이 올바르지 않습니다 😥'
        }));
        setIsValid({ ...isValid, email: false });
      } else {
        setMessages((prevMessages) => ({
          ...prevMessages,
          email: ''
        }));
        setIsValid({ ...isValid, email: true });
      }
    } else {
      setMessages((prevMessages) => ({
        ...prevMessages,
        email: ''
      }));
      setIsValid({ ...isValid, email: false });
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.password) {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
      if (!passwordRegex.test(formData.password)) {
        setMessages((prevMessages) => ({
          ...prevMessages,
          password: '영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요'
        }));
        setIsValid({ ...isValid, password: false });
      } else {
        setMessages((prevMessages) => ({
          ...prevMessages,
          password: ''
        }));
        setIsValid({ ...isValid, password: true });
      }
    } else {
      setMessages((prevMessages) => ({
        ...prevMessages,
        password: ''
      }));
      setIsValid({ ...isValid, password: false });
    }
  }, [formData.password]);

  return { messages, setMessages, isValid, setIsValid };
}
