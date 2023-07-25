import React from 'react';
import { InputWrapper, InputLabel, InputText, shake } from './InputStyle';

const Input = ({
  label,
  type,
  id,
  placeholder,
  onChange,
  onBlur,
  name,
  value,
  hasError,
}) => {
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
