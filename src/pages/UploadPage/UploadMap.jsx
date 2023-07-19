import React, { useState } from 'react';
import TopUploadHeader from '../../components/Header/TopUploadHeader';
import MapDrawingManager from '../../components/Map/MapDrawingManager';

const UploadMap = () => {
  return (
    <>
      <TopUploadHeader text={'완료'} />
      <MapDrawingManager />
    </>
  );
};

export default UploadMap;
