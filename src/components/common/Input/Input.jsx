import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';

const Input = ({ label, inputType, id }) => {
  // label, inputType, id를 전달받음

  const [userInput, setUserInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRef = useRef();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFocus = () => {
    inputRef.current.style.borderBottom = `1px solid ${Theme.colors.mainColor}`;
    inputRef.current.style.outline = `none`;
  };

  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputText
        ref={inputRef}
        type={inputType}
        id={id}
        value={userInput}
        onChange={handleChange}
        onFocus={handleFocus}
        showSuccess={showSuccess}
        autoComplete='off'
      />
      {!showSuccess ? <ErrorMessage>이미 가입된 이메일 주소입니다.</ErrorMessage> : <></>}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.2rem;
`;

const InputLabel = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.textColor};
    margin-bottom: 2px;
  `}
`;

const InputText = styled.input`
  ${({ theme }) => css`
    border: none;
    padding: 0.8rem 0;
    border-bottom: 0.1rem solid ${theme.colors.borderColor};
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.blackText};
    margin-bottom: 0.6rem;
  `}
`;

const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.errorColor};
    font-size: ${theme.fontSize.small};
    &::before {
    content: "*";
  }
  `}
`;
