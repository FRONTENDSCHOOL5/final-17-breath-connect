import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilCallback } from 'recoil';
import { loginAtom } from '../../../atoms/LoginAtom';
import { tokenAtom, accountAtom, profileImgAtom, usernameAtom, introAtom } from '../../../atoms/UserAtom';

const LogOut = ({ message, onClose, done }) => {
  const navigate = useNavigate();
  const [showLogOut, setShowLogOut] = useState(true);
  const setLoginState = useSetRecoilState(loginAtom);

  /* reset 메서드를 사용하여 atom 값 초기화 */
   const handleResetState = useRecoilCallback(({ reset }) => () => {
    reset(tokenAtom);
    reset(accountAtom);
    reset(profileImgAtom);
    reset(usernameAtom);
    reset(introAtom);
  });

  const handleClickCancel = () => {
    setShowLogOut(false);
    onClose(false);
  };
  const handleClick = () => {
    alert(done);
    setShowLogOut(false);
    onClose(true); // 삭제 완료를 알리기 위해 onClose(true) 호출
  };
  const handleLogout = () => {
    setLoginState(false);
    handleResetState();
    localStorage.removeItem('token');
    navigate('/');
  };


  return (
    <LogOutAlert>
      <AlertContainer>
        <ButtonText>{message}</ButtonText>
        <ButtonContainer>
          <CancelButton onClick={handleClickCancel}>취소</CancelButton>
          <LogOutButton onClick={() => {
            handleClick();
            handleLogout();
          }}>로그아웃</LogOutButton>
        </ButtonContainer>
      </AlertContainer>
    </LogOutAlert>
  );
};

export default LogOut;

const LogOutAlert = styled.div`
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
`;

const CancelButton = styled.button`
  padding: 1.3rem 5rem;
`;

const LogOutButton = styled.button`
  padding: 1.3rem 3.7rem;
  border-left: 0.05rem solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.mainColor};
`;
