import React from 'react';
import styled from 'styled-components';

const Alert = ({ message }) => {
  const handleClick = () => {
    alert(`게시글이 삭제되었습니다.`);
  };
  return (
    <AlertWrap>
      <ButtonText>게시글을 삭제할까요?</ButtonText>
      <ButtonWrap>
        <CancelButton>취소</CancelButton>
        <DeleteButton onClick={handleClick}>삭제</DeleteButton>
      </ButtonWrap>
    </AlertWrap>
  );
};

export default Alert;

const AlertWrap = styled.div`

  /* 중앙 정렬 */
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

const ButtonWrap = styled.div`
border-top: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
font-size: ${({ theme }) => theme.fontSize.medium};

  button {
    padding: 1.3rem 5rem;
  }
`;
const CancelButton = styled.button`
   
`;
const DeleteButton = styled.button`
  border-left: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.mainColor};
`;
