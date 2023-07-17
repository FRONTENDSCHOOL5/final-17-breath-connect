import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { MapContainer } from './style/MapStyle';

const MapComponent = ({
  center,
  handleClick,
  handleRightClick,
  handleOnCreate,
  handleDragEnd,
  handelDraggable,
  handelZoomable,
  handleStyle,
  handleLevel,
  children,
}) => {
  return (
    <MapContainer>
      <Map
        center={center}
        style={handleStyle}
        onClick={handleClick}
        onRightClick={handleRightClick}
        onCreate={handleOnCreate}
        onDragEnd={handleDragEnd}
        draggable={handelDraggable}
        zoomable={handelZoomable}
        level={handleLevel}
      >
        {children}
      </Map>
    </MapContainer>
  );
};

export default MapComponent;
