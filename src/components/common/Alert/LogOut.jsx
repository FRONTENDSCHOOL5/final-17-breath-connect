import React from 'react';
import styled from 'styled-components';

const LogOut = ({ message }) => {
  const handleClick = () => {
    alert(`로그아웃 하셨습니다.`);
  };
  return (
      <AlertWrap>
        <ButtonText>로그아웃 하시겠습니까?</ButtonText>
        <ButtonWrap>
          <CancelButton>취소</CancelButton>
          <LogOutButton onClick={handleClick}>로그아웃</LogOutButton>
        </ButtonWrap>
      </AlertWrap>
  );
};

export default LogOut;

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
`;

const CancelButton = styled.button`
  padding: 1.3rem 5rem;
`;

const LogOutButton = styled.button`
  padding: 1.3rem 3.7rem;
  border-left: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.mainColor};
`;
