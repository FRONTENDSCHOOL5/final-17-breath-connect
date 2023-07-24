import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import ButtonContainer from '../common/Button/ButtonContainer';
import { Storage } from './HeaderStyle';

const TopUploadHeader = ({ text, handleClick, isDisabled }) => {
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
        />
      </Storage>
    </HeaderContainer>
  );
};
export default TopUploadHeader;
