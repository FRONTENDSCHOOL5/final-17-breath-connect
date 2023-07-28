import React from 'react';
import {
  Container,
  AlertContainer,
  AlertMessage,
  ButtonContainer,
  CancelButton,
  DeleteButton,
} from './AlertStyle';

const Alert = ({ message, Func, cancel }) => {
  const handleClickCancel = () => {
    console.log('no');
    cancel(false);
  };

  const handleClickYes = () => {
    console.log('yes');
    if (Func) Func();
    cancel(false);
  };

  return (
    <Container>
      <AlertContainer>
        <AlertMessage>{message}</AlertMessage>
        <ButtonContainer>
          <DeleteButton onClick={handleClickYes}>예</DeleteButton>
          <CancelButton onClick={handleClickCancel}>아니요</CancelButton>
        </ButtonContainer>
      </AlertContainer>
    </Container>
  );
};

export default Alert;
