import React from 'react';
import { useRecoilValue } from 'recoil';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import { isDarkModeState } from '../../atoms/StylesAtom';

const TopBasicNavHeader = ({ onButtonClick }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <HeaderContainer>
      <BackButton />
      <button onClick={onButtonClick}>
        <GlovalSprite id={isDarkMode ? 's-icon-more-vertical-dark' : 's-icon-more-vertical'} color={'white'} />
      </button>
    </HeaderContainer>
  );
};

export default TopBasicNavHeader;
