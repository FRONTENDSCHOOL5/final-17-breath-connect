import React from 'react';
import styled from 'styled-components';

const CustomToolWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid red;
  border-radius: 9999px;
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

const ToolBox = ({ onClickUndo, onClickReset }) => {
  return (
    <>
      <CustomToolWrapper />
      <ButtonWrapper>
        <button onClick={onClickUndo}>마지막 그리기 취소!</button>
        <button onClick={onClickReset}>초기화!</button>
      </ButtonWrapper>
    </>
  );
};

export default ToolBox;
