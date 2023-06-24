import React, { useState } from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

const TopBasicNavHeader = ({ onButtonClick }) => {

  return (
    <HeaderContainer>
      <BackButton />
      <button onClick={onButtonClick}>
        <GlovalSprite id={'s-icon-more-vertical'} color={'white'} />
      </button>
    </HeaderContainer>
  );
};

export default TopBasicNavHeader;
