import React, {useState} from 'react';
import styled from 'styled-components';

const Alert = ({ message, onClose, done, text }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClickCancel = () => {
    setShowAlert(false);
    onClose(false);
  };
  const handleClick = () => {
    alert(done);
    setShowAlert(false);
    onClose(true); // 삭제 완료를 알리기 위해 onClose(true) 호출
  };

  return (
    <DeleteAlert>
    <AlertContainer>
      <ButtonText>{message}</ButtonText>
      <ButtonContainer>
        <button onClick={handleClickCancel}>취소</button>
        <DeleteButton onClick={handleClick}>{text}</DeleteButton>
      </ButtonContainer>
    </AlertContainer>
    </DeleteAlert>
  );
};

export default Alert;

const DeleteAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  opacity: 1;
  pointer-events: auto;
`

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 25.2rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.borderColor};
`;

const ButtonText = styled.p`
  text-align: center;
  padding: 2rem 0rem;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const ButtonContainer = styled.div`
border-top: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
font-size: ${({ theme }) => theme.fontSize.medium};
  button {
    width: 12.5rem;
    padding: 1.3rem 0;
  }
`;

const DeleteButton = styled.button`
  border-left: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.mainColor};
`;
