import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import BottomBarButton from './BottomBarButton';
import styled from 'styled-components';

  const TabMenu = () => {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState('icon-home');

    const handleButtonClick = (buttonId, path) => {
      setSelectedButton(buttonId);
      navigate(path);
  };

  return (
    <Container>
      <BottomBarButton
        id={selectedButton === 'icon-home' ? 'icon-home-fill' : 'icon-home'}
        text="홈"
        textSize="1rem"
        isSelected={selectedButton === 'icon-home'}
        onClick={() => handleButtonClick('icon-home', '/home')}
      />
      <BottomBarButton
        id={
          selectedButton === 'icon-message-circle'
            ? 'icon-message-circle-fill'
            : 'icon-message-circle'
        }
        text="메시지"
        textSize= "1rem"
        isSelected={selectedButton === 'icon-message-circle'}
        onClick={() => handleButtonClick('icon-message-circle', '/chat')}
      />
      <BottomBarButton
        id={selectedButton === 'icon-edit' ? 'icon-edit-fill' : 'icon-edit'}
        text="게시물 추가"
        textSize="1rem"
        isSelected={selectedButton === 'icon-edit'}
        onClick={() => handleButtonClick('icon-edit','/post/upload')}
      />
      <BottomBarButton
        id={selectedButton === 'icon-user' ? 'icon-user-fill' : 'icon-user'}
        text="프로필"
        textSize="1rem"
        isSelected={selectedButton === 'icon-user'}
        onClick={() => handleButtonClick('icon-user', '/profile/:account')}
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
  border-top: 1px solid ${({theme}) => theme.colors.borderColor};
  margin-top: 28px;
  background-color: white;
`;

