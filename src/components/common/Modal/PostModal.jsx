import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  BackgroundOverlay,
} from './PostModalStyle';
import Alert from '../Alert/Alert';

export default function Modal({ setIsModalOpen, children }) {
  const [tempFunc, setTempFunc] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setIsModalOpen(false);
  };
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { setShowAlert, setTempFunc, setMessage })
  );

  return (
    <>
      <BackgroundOverlay onClick={handleClick} />
      <ModalContainer>
        <ModalContent showAlert={showAlert}>{childrenWithProps}</ModalContent>
      </ModalContainer>
      {showAlert && (
        <Alert
        message={
          message === '설정 및 개인정보'
            ? `프로필을 변경할까요?`
            : message === '삭제' || message === '수정'
            ? `게시글을 ${message}할까요?`
            : `${message}하시겠어요?`
        }
          Func={tempFunc}
          cancel={setShowAlert}
        />
      )}
    </>
  );
}
