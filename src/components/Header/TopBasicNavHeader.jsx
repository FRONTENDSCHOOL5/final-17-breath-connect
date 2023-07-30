import React from 'react';
import { useRecoilValue } from 'recoil';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import { isDarkModeState } from '../../atoms/StylesAtom';

const TopBasicNavHeader = ({ onButtonClick }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <HeaderContainer>
      <BackButton />
      <button onClick={onButtonClick}>
        <GlobalSprite id={isDarkMode ? 's-icon-more-vertical-dark' : 's-icon-more-vertical'} color={'white'} />
      </button>
    </HeaderContainer>
  );
};

export default TopBasicNavHeader;
