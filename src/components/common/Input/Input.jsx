import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Input = ({ label, type, id, placeholder, onChange, onBlur, name, value, hasError }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputText
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
        hasError={hasError} // 에러 발생 여부 prop 전달
      />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.2rem;
  margin: 1.6rem 0;
`;

const InputLabel = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    color: ${theme.colors.textColor};
    margin-bottom: 0.2rem;
  `}
`;

const InputText = styled.input`
  outline: none;
  padding: 0.8rem 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.blackText};
  animation: ${({ hasError }) => (hasError ? shake : 'none')} 0.4s linear; // 에러 발생 시 흔들림 애니메이션 적용
  &:focus {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  }
  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.borderColor};
  }
`;

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
