import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilCallback } from 'recoil';
import { loginAtom } from '../../../atoms/LoginAtom';
import { tokenAtom, accountAtom, profileImgAtom, usernameAtom, introAtom } from '../../../atoms/UserAtom';
import { Container, LogOutContainer, LogOutMessage, ButtonContainer, CancelButton, LogOutButton } from '../Alert/LogOutStyle'

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
    <Container>
      <LogOutContainer>
        <LogOutMessage>{message}</LogOutMessage>
        <ButtonContainer>
          <CancelButton onClick={handleClickCancel}>취소</CancelButton>
          <LogOutButton onClick={() => {
            handleClick();
            handleLogout();
          }}>로그아웃</LogOutButton>
        </ButtonContainer>
      </LogOutContainer>
    </Container>
  );
};

export default LogOut;
