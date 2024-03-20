import React from 'react';
import Header from '../../components/Header/TopUploadHeader';
import MapDrawingManager from '../../components/Map/MapDrawingManager';
import { Container } from './UploadEditMapPageStyle'

const UploadMap = () => {
  return (
    <Container>
      <Header text={'완료'} />
      <MapDrawingManager />
    </Container>
  );
};

export default UploadMap;
