import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import styled from 'styled-components';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

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

const MainButton = styled.div`
  padding: 1.8rem;
  font-size: 1.8rem;
  font-weight: 500;
`;
