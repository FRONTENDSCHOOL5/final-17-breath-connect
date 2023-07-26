import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import { MainButton } from './HeaderStyle';
import { useRecoilValue } from 'recoil';
import { iconColorSelector } from '../../atoms/StylesAtom';
import { isDarkModeState } from '../../atoms/StylesAtom';

const TopMainNavHeader = () => {
  const iconColor = useRecoilValue(iconColorSelector);
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <HeaderContainer>
      <MainButton>들숨날숨 피드</MainButton>
      <button>
        <Link to="/Search">
          <GlovalSprite id={isDarkMode ? 'icon-search-dark' : 'icon-search'} color={iconColor} />
        </Link>
      </button>
    </HeaderContainer>
  );
};

export default TopMainNavHeader;
