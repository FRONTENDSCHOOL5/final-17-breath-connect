import React from 'react';
import { CustomToolWrapper, ButtonWrapper, Button } from './style/MapStyle';

const ToolBox = ({ onClickUndo, onClickReset }) => {
  return (
    <>
      <CustomToolWrapper />
      <ButtonWrapper>
        <Button onClick={onClickUndo}>😢 마지막 그리기 취소</Button>
        <Button onClick={onClickReset}>❌ 초기화</Button>
      </ButtonWrapper>
    </>
  );
};

export default ToolBox;
