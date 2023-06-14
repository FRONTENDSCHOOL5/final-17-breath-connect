import React from 'react';
import HeaderContainer from './HeaderContainer';
import styled from 'styled-components';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

const TopMainNavHeader = () => {
  return (
    <HeaderContainer>
      <MainButton>들숨날숨 피드</MainButton>
      <button>
        <GlovalSprite id={'icon-search'} color={'white'} />
      </button>
    </HeaderContainer>
  );
};

export default TopMainNavHeader;

const MainButton = styled.button`
  font-size: 18px;
  font-weight: 500;
`;
