import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  ModalContainer,
  ModalContent,
  BackgroundOverlay,
} from './PostModalStyle';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import Alert from '../Alert/Alert';

export default function Modal({ setIsModalOpen, children }) {
  const isDarkMode = useRecoilValue(isDarkModeState);
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
        <ModalContent isDarkMode={isDarkMode} showAlert={showAlert}>{childrenWithProps}</ModalContent>
      </ModalContainer>
      {showAlert && (
        <Alert
          message={`${message}하시겠습니까?`}
          Func={tempFunc}
          cancel={setShowAlert}
        />
      )}
    </>
  );
}
