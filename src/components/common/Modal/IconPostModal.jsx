import React from 'react';
import { Container, ButtonContainer } from './IconPostModalStyle';

const IconPostModal = ({
  text,
  onButtonClick,
  setShowAlert,
  setTempFunc,
  setMessage,
}) => {
  const handleClick = () => {
    setShowAlert(true);
    console.log(onButtonClick);
    setTempFunc(() => onButtonClick);
    setMessage(text);
  };

  return (
    <>
      <Container>
        <ButtonContainer>
          <button onClick={handleClick}>{text}</button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default IconPostModal;
