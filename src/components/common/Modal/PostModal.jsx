import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from '../Alert/Alert';

const PostModal = ({ text }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertDone, setAlertDone] = useState('');

  const handleClick = () => {
    if (text === '삭제') {
      setAlertMessage('게시물을 삭제하시겠습니까?');
      setShowAlert(true); // 알림(Alert) 띄우기
      setAlertDone("게시물이 삭제되었습니다.")
    } else if (text === '신고하기') {
      setAlertMessage('게시물을 신고하시겠습니까?');
      setShowAlert(true);
      setAlertDone("게시물이 신고되었습니다.")
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false); // 알림(Alert) 닫기
  };

  return (
    <>
        <ModalWrapper>
          <ModalContent>
            <Separator />
            <ModalButtons>
              <button onClick={handleClick}>{text}</button>
            </ModalButtons>
          </ModalContent>
        </ModalWrapper>
      {showAlert && <Alert message={alertMessage} onClose={handleAlertClose} done={alertDone}/>}
    </>
  );
};

export default PostModal;

const ModalContent = styled.div`
  width: 39rem;
  height: 9.2rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

const Separator = styled.div`
  width: 5rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.colors.borderColor};
  margin: 1.6rem 17rem;
  border-radius: 0.5rem;
`;

const ModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  button{
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 1.3rem 0rem 1.4rem 2.6rem;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 1;
  pointer-events: auto;
`;
