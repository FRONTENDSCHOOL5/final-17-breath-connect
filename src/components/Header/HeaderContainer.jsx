import React from 'react';
import styled from 'styled-components';

const HeaderContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HeaderContainer;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  border: 0.5px solid #dbdbdb;
  height: 48px;
  background-color: white;

  > button {
    padding: 13px;
  }
`;
