import React from 'react';
import { CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import MapComponent from './MapComponent';

const FeedMap = ({ data, detail }) => {
  const arr = JSON.parse(data);

  const paths = arr.slice(0, arr.length - 1);
  console.log(paths);

  const latSum = paths.reduce((sum, el) => sum + el.lat, 0);
  const lngSum = paths.reduce((sum, el) => sum + el.lng, 0);
  const midLat = latSum / paths.length;
  const midLng = lngSum / paths.length;

  return (
    <MapComponent
      id="map"
      center={{
        lat: midLat,
        lng: midLng,
      }}
      handleStyle={{
        width: '100%',
        height: detail ? '19.2rem' : '8rem',
      }}
      handleLevel={6}
      handelDraggable={detail}
      handelZoomable={detail}
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
    </MapComponent>
  );
};

export default FeedMap;
