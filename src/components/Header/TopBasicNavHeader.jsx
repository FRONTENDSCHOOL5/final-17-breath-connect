import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

const TopBasicNavHeader = () => {
  return (
    <HeaderContainer>
      <BackButton />
      <button>
        <GlovalSprite id={'s-icon-more-vertical'} color={'white'} />
      </button>
    </HeaderContainer>
  );
};

export default TopBasicNavHeader;
