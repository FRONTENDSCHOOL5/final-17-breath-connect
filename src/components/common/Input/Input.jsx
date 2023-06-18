import React from 'react';
import styled, { css } from 'styled-components';

const Input = ({ label, type, id, placeholder, onChange, onBlur, name }) => { 

  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputText
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete='off'
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
  &:focus {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  }
  &::placeholder {
    font-size: ${({theme}) => theme.fontSize.medium};
    color: ${({theme}) => theme.colors.borderColor};
  }
`;

// const ErrorMessage = styled.p`
//   ${({ theme }) => css`
//     color: ${theme.colors.errorText};
//     font-size: ${theme.fontSize.small};
//     margin-top: 0.4rem;
//     &::before {
//     content: "*";
//   }
//   `}
// `;

