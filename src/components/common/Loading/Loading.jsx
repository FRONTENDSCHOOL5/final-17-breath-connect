import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <ContainerAll>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
      <Load>
        <p>Loading ...</p>
      </Load>
    </ContainerAll>
  );
};

export default Loading;

const rotateAnimation = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const ContainerAll = styled.div`
  width: 15rem;
  height: 15rem;
  position: relative;
`;

const Load = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Circle = styled.div`
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #c1c1c1;
  border-radius: 50%;
  transform-origin: 50% 50%;
  animation: ${rotateAnimation} 2s infinite linear;
`;

const Circle1 = styled(Circle)`
  top: 0;
  left: 0;
  border-top: 0;
  border-bottom: 0;
  border-left: 0;
`;

const Circle2 = styled(Circle)`
  top: 7px;
  left: 7px;
  width: 90%;
  height: 90%;
  border: 2px solid #919191;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  animation-direction: reverse;
`;

const Circle3 = styled(Circle)`
  top: 14px;
  left: 14px;
  width: 80%;
  height: 80%;
  border: 2px solid #ccc;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  animation-duration: 1s;
`;

const Circle4 = styled(Circle)`
  top: 21px;
  left: 21px;
  width: 70%;
  height: 70%;
  border: 2px solid #e1e1e1;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  animation-duration: 3s;
`;
