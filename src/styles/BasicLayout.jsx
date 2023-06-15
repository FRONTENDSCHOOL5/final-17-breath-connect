import React from 'react';
import styled from 'styled-components';

const BasicLayout = ({ children }) => {
  return (
    <BasicContainer>
      <Screen>{children}</Screen>
    </BasicContainer>
  );
};

export default BasicLayout;

const BasicContainer = styled.div`
  position: relative;
  max-width: 390px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
