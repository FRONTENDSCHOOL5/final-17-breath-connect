import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import BottomBarButton from './BottomBarButton';
import styled from 'styled-components';
import { accountAtom } from '../../atoms/UserAtom';

const TabMenu = () => {
  const myaccount = useRecoilValue(accountAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState('icon-home');

  useEffect(() => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case '/home':
        setSelectedButton('icon-home');
        break;
      case '/chat':
        setSelectedButton('icon-message-circle');
        break;
      case '/post/upload':
        setSelectedButton('icon-edit');
        break;
      case `/profile/${myaccount}`:
        setSelectedButton('icon-user');
        break;
      default:
        setSelectedButton(null);
    }
  }, [location.pathname]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <BottomBarButton
        id={selectedButton === 'icon-home' ? 'icon-home-fill' : 'icon-home'}
        text="홈"
        textSize="1rem"
        isSelected={selectedButton === 'icon-home'}
        onClick={() => handleButtonClick('/home')}
      />
      <BottomBarButton
        id={
          selectedButton === 'icon-message-circle'
            ? 'icon-message-circle-fill'
            : 'icon-message-circle'
        }
        text="메시지"
        textSize="1rem"
        isSelected={selectedButton === 'icon-message-circle'}
        onClick={() => handleButtonClick('/chat')}
      />
      <BottomBarButton
        id={selectedButton === 'icon-edit' ? 'icon-edit-fill' : 'icon-edit'}
        text="게시물 추가"
        textSize="1rem"
        isSelected={selectedButton === 'icon-edit'}
        onClick={() => handleButtonClick('/post/upload')}
      />
      <BottomBarButton
        id={selectedButton === 'icon-user' ? 'icon-user-fill' : 'icon-user'}
        text="프로필"
        textSize="1rem"
        isSelected={selectedButton === 'icon-user'}
        onClick={() => handleButtonClick(`/profile/${myaccount}`)}
      />
    </Container>
  );
};

export default TabMenu;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 39rem;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-top: 28px;
  background-color: white;
  z-index: 99;
`;
