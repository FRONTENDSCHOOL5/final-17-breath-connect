import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import Container from './HeaderContainer';
import BackButton from './BackButton';
import { ModalButton } from "./TopBasicNavHeaderStyle";


const TopBasicNavHeader = ({ onButtonClick }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <Container>
      <BackButton />
      <ModalButton onClick={onButtonClick}>
        <GlobalSprite id={isDarkMode ? 's-icon-more-vertical-dark' : 's-icon-more-vertical'} color={'white'} />
      </ModalButton>
    </Container>
  );
};

export default TopBasicNavHeader;
