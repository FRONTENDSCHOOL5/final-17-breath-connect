import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledIndicator = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #636366;
  animation: ${spinAnimation} 1s ease-in-out infinite;
`;

export default function Indicator() {
  return <StyledIndicator />;
}
