import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import { BackAndUserText, User } from './HeaderStyle';

const TopListNavHeader = ({ text }) => {
  return (
    <HeaderContainer>
      <BackAndUserText>
        <BackButton />
        <User>{text}</User>
      </BackAndUserText>
    </HeaderContainer>
  );
};

export default TopListNavHeader;
