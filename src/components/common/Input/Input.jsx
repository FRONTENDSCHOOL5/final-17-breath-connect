import React, { forwardRef } from 'react';
import { Container, Label, Text, Message } from './InputStyle';

const Input = forwardRef(({
  label,
  type,
  id,
  placeHolder,
  onChange,
  onBlur,
  name,
  value,
  isValid,
  errorMsg,
  successMsg
}, ref) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Text
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        isValid={isValid}
        autoComplete="off"
        ref={ref}
      />
      {errorMsg && <Message>{errorMsg}</Message>}
      {isValid && <Message>{successMsg}</Message>}
    </Container>
  );
});

export default Input;
