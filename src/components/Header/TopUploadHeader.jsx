import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import ButtonContainer from '../common/Button/ButtonContainer';
import styled from 'styled-components';

const TopUploadHeader = ({text, handleClick}) => {
  return (
    <HeaderContainer>
      <BackButton />
      <Storage>
        <ButtonContainer type={'MS'} text={text} handleClick={handleClick} />
      </Storage>
    </HeaderContainer>
  );
};
export default TopUploadHeader;

const Storage = styled.div`
  margin: 8px;
`;
