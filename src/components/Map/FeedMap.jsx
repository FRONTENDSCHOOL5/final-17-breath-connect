import React from 'react';
import { Map, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';

const FeedMap = ({ data, distances, detail }) => {
  const arr = JSON.parse(data);

  arr.pop();

  const latSum = arr.reduce((sum, el) => sum + el.lat, 0);
  const lngSum = arr.reduce((sum, el) => sum + el.lng, 0);
  const midLat = latSum / arr.length;
  const midLng = lngSum / arr.length;

  const paths = arr;

  return (
    <Map
      id="map"
      center={{
        lat: midLat,
        lng: midLng,
      }}
      style={{
        width: '100%',
        height: detail ? '192px' : '80px',
      }}
      level={6}
      draggable={detail}
      zoomable={detail}
    >
      <Polyline
        path={paths}
        strokeWeight={3}
        strokeColor="#80327e"
        strokeOpacity={1}
        strokeStyle="solid"
      />
      {paths.map((path, index) => (
        <CustomOverlayMap key={`dot-${index}`} position={path} zIndex={1}>
          <span />
        </CustomOverlayMap>
      ))}
    </Map>
  );
};

export default FeedMap;
