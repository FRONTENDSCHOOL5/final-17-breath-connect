import React from 'react';
import { Container, ButtonContainer, Button } from './ToolBoxStyle';

const ToolBox = ({ onClickUndo, onClickReset }) => {
  return (
    <>
      <Container />
      <ButtonContainer>
        <Button onClick={onClickUndo}>😢 마지막 그리기 취소</Button>
        <Button onClick={onClickReset}>❌ 초기화</Button>
      </ButtonContainer>
    </>
  );
};

export default ToolBox;
