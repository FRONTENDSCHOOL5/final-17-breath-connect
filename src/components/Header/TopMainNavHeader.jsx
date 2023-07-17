import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import { MainButton } from './style/HeaderStyle';

const TopMainNavHeader = () => {
  return (
    <HeaderContainer>
      <MainButton>들숨날숨 피드</MainButton>
      <button>
        <Link to="/Search">
          <GlovalSprite id={'icon-search'} color={'white'} />
        </Link>
      </button>
    </HeaderContainer>
  );
};

export default TopMainNavHeader;
