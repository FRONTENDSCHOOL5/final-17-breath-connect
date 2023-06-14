import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import ButtonContainer from '../common/Button/ButtonContainer';
import styled from 'styled-components';

const TopUploadHeader = () => {
  return (
    <HeaderContainer>
      <BackButton />
      <Storage>
        <ButtonContainer type={'MS'} text={'저장'} />
      </Storage>
    </HeaderContainer>
  );
};
export default TopUploadHeader;

const Storage = styled.div`
  margin: 8px;
`;
