import React, { forwardRef } from 'react';
import { Container, Label, Text, ErrorMsg, SuccessMsg } from './InputStyle';

const Input = forwardRef(({
  label,
  id,
  type,
  placeHolder,
  onChange,
  onBlur,
  name,
  value,
  isError,
  errorMsg,
  successMsg
}, ref) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Text
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        isError={isError}
        autoComplete="off"
        ref={ref}
      />
      {isError ? <ErrorMsg>{errorMsg}</ErrorMsg> : <SuccessMsg>{successMsg}</SuccessMsg>}
    </Container>
  );
});

export default Input;
