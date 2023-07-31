import React from 'react';
import Header from '../../components/Header/TopUploadHeader';
import MapDrawingManager from '../../components/Map/MapDrawingManager';

const UploadMap = () => {
  return (
    <>
      <Header text={'완료'} />
      <MapDrawingManager />
    </>
  );
};

export default UploadMap;
