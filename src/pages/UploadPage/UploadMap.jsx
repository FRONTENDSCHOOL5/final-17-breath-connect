import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import TopUploadHeader from '../../components/Header/TopUploadHeader';
import MapDrawingManager from '../../components/Map/MapDrawingManager';

const UploadMap = () => {
  // const location = useLocation();
  // console.log(dateString, timeString, textString);
  // const { dateString, timeString, textString } = location.state;
  // const totalDistance = distances;
  return (
    <>
      <TopUploadHeader text={'완료'} />
      <MapDrawingManager />
    </>
  );
};
// styled-component 적용

export default UploadMap;
