import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Button from './BottomBarButton';
import { accountAtom } from '../../atoms/UserAtom';
import { isDarkModeState } from '../../atoms/StylesAtom';
import { Container } from './TabMenuStyle';

const TabMenu = () => {
  const [selectedButton, setSelectedButton] = useState('icon-home');
  const navigate = useNavigate();
  const location = useLocation();
  const myaccount = useRecoilValue(accountAtom);
  const isDarkMode = useRecoilValue(isDarkModeState);

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
      <Button
        id={
          selectedButton === 'icon-home'
            ? isDarkMode
              ? 'icon-home-fill-dark'
              : 'icon-home-fill'
            : isDarkMode
              ? 'icon-home-dark'
              : 'icon-home'
        }
        text="홈"
        textSize="1rem"
        isSelected={selectedButton === 'icon-home'}
        onClick={() => handleButtonClick('/home')}
      />
      <Button
        id={
          selectedButton === 'icon-message-circle'
            ? isDarkMode
              ? 'icon-message-circle-fill-dark'
              : 'icon-message-circle-fill'
            : isDarkMode
              ? 'icon-message-circle-dark'
              : 'icon-message-circle' 
        }
        text="메시지"
        textSize="1rem"
        isSelected={selectedButton === 'icon-message-circle'}
        onClick={() => handleButtonClick('/chat')}
      />
      <Button
        id={
          selectedButton === 'icon-edit'
            ? isDarkMode
              ? 'icon-edit-fill-dark'
              : 'icon-edit-fill'
            : isDarkMode
              ? 'icon-edit-dark'
              : 'icon-edit'
        }
        text="게시물 추가"
        textSize="1rem"
        isSelected={selectedButton === 'icon-edit'}
        onClick={() => handleButtonClick('/post/upload')}
      />
      <Button
        id={
          selectedButton === 'icon-user'
            ? isDarkMode
              ? 'icon-user-fill-dark'
              : 'icon-user-fill'
            : isDarkMode
              ? 'icon-user-dark'
              : 'icon-user'
        }
        text="프로필"
        textSize="1rem"
        isSelected={selectedButton === 'icon-user'}
        onClick={() => handleButtonClick(`/profile/${myaccount}`)}
      />
    </Container>
  );
};

export default TabMenu;
