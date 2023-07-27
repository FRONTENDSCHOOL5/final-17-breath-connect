import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import ButtonContainer from '../common/Button/ButtonContainer';
import { Storage } from './HeaderStyle';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';

const TopUploadHeader = ({ text, handleClick, isDisabled }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <HeaderContainer>
      <BackButton />
      <Storage>
        <ButtonContainer
          type={'MS'}
          text={text}
          isClicked={false}
          handleClick={handleClick}
          isDisabled={isDisabled}
          isDarkMode={isDarkMode}
        />
      </Storage>
    </HeaderContainer>
  );
};
export default TopUploadHeader;
