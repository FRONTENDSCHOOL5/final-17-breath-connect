import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Container } from './MapComponentStyle';

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
    <Container>
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
    </Container>
  );
};

export default MapComponent;
