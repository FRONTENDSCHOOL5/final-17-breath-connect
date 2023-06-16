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
  padding: 1.3rem;
`;

const User = styled.span`
  text-align: center;
  font-size: 1.4rem;
  margin: 0.5rem 0 0 1rem;
  font-weight: 500;
`;
