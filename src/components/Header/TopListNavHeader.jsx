import React from 'react';
import styled from 'styled-components';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';

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

const BackAndUserText = styled.div`
  display: flex;
  padding: 13px;
`;

const User = styled.span`
  text-align: center;
  font-size: 14px;
  margin: 5px 0 0px 10px;
  font-weight: 500;
`;
