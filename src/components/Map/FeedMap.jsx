import React from 'react';
import { Map, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import DistanceInfo from './DistanceInfo';

// const arr = [
//   { lat: 37.35448853420498, lng: 126.94226650699949 },
//   { lat: 37.35520060393074, lng: 126.9427964600851 },
//   { lat: 37.35402101626464, lng: 126.94438882564852 },
//   { lat: 37.353696640866815, lng: 126.94437777796357 },
//   { lat: 37.353688512116875, lng: 126.94628528269583 },
//   { lat: 37.354859828001864, lng: 126.94623929946408 },
//   { lat: 37.355417497837074, lng: 126.94415076351804 },
//   { lat: 37.35577752245515, lng: 126.94333781207574 },
//   { lat: 37.35561465876302, lng: 126.94193831388347 },
//   { lat: 37.354380022609334, lng: 126.94147649463669 },
//   { lat: 37.35365948362037, lng: 126.94205268949663 },
//   { lat: 37.35347978754935, lng: 126.94310251335861 },
//   { lat: 37.35403843578141, lng: 126.9431246657659 },
//   { lat: 37.35418236590925, lng: 126.94263921408516 },
//   { lat: 37.354380509837604, lng: 126.94246975713983 },
//   { lat: 37.35442547326675, lng: 126.94228912946578 },
// ];

// const testData2 = [0, 189, 360, 644, 803];

const FeedMap = ({ data, distances, detail }) => {
  const arr = JSON.parse(data);
  console.log(arr);
  console.log(distances);

  // console.log(coordinates);
  const latSum = arr.reduce((sum, el) => sum + el.lat, 0);
  const lngSum = arr.reduce((sum, el) => sum + el.lng, 0);
  const midLat = latSum / arr.length;
  const midLng = lngSum / arr.length;

  const paths = arr;
  // const distances = testData2;

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
      {/* {paths.length > 1 &&
        distances.slice(1).map((distance, index) => (
          <CustomOverlayMap
            key={`distance-${index}`}
            position={paths[index + 1]}
            yAnchor={1}
            zIndex={2}
          >
            {distances.length === index + 2 ? (
              <DistanceInfo distance={distance} />
            ) : (
              <div>
                거리 <span>{distance}</span>m
              </div>
            )}
          </CustomOverlayMap>
        ))} */}
    </Map>
  );
};

export default FeedMap;
