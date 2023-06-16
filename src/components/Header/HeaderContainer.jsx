import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

const HeaderContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HeaderContainer;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  border: ${() => `0.5 solid ${Theme.colors.borderColor}`};
  font-size: 1.4rem;
  height: 4.8rem;
  background-color: white;

  > button {
    padding: 1.3rem;
  }
`;
