import React from 'react';
import {
  Section,
  Container,
  Message,
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
    <Section>
      <Container>
        <Message>{message}</Message>
        <ButtonContainer>
          <DeleteButton onClick={handleClickYes}>예</DeleteButton>
          <CancelButton onClick={handleClickCancel}>아니요</CancelButton>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default Alert;
