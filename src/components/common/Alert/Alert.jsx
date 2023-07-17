import React, {useState} from 'react';
import {Container, AlertContainer, AlertMessage, ButtonContainer, CancelButton, DeleteButton} from '../Alert/AlertStyle'

const Alert = ({ message, onClose, done, text, setIsPostDeleted }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClickCancel = () => {
    setShowAlert(false);
    onClose(false);
  };
  const handleClickDelete = () => {
    alert(done);
    setShowAlert(false);
    onClose(true);
    setIsPostDeleted(true);
  };

  return (
    <Container>
    <AlertContainer>
      <AlertMessage>{message}</AlertMessage>
      <ButtonContainer>
        <CancelButton onClick={handleClickCancel}>취소</CancelButton>
        <DeleteButton onClick={handleClickDelete}>{text}</DeleteButton>
      </ButtonContainer>
    </AlertContainer>
    </Container>
  );
};

export default Alert;
