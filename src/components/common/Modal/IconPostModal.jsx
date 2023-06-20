import React from 'react';
import styled from 'styled-components';

const Modal = ({ topText, btmText }) => {

  return (
    <ModalWrapper
    >
      <ModalContent>
        <Separator />
        <ModalButtons>
          <button>{topText}</button>
          <button>{btmText}</button>
        </ModalButtons>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalContent = styled.div`
  width: 39rem;
  height: 13.8rem;
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
    font-size: 14px;
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
`;