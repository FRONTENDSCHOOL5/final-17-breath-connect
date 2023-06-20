import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Map, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import DistanceInfo from './DistanceInfo';
import GetLocation from './GetLocation';

const MapDrawingManager = ({ getpath, getdistance }) => {
  const { latitude = 0, longitude = 0 } = GetLocation() || {};
  const [isdrawing, setIsdrawing] = useState(false);
  const [clickLine, setClickLine] = useState();
  const [paths, setPaths] = useState([]);
  const [distances, setDistances] = useState([]);
  const [mousePosition, setMousePosition] = useState({
    lat: latitude,
    lng: longitude,
  });
  const [moveLine, setMoveLine] = useState();

  const handleClick = (_map, mouseEvent) => {
    if (!isdrawing) {
      setDistances([]);
      setPaths([]);
    }
    setPaths((prev) => [
      ...prev,
      {
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      },
    ]);
    setDistances((prev) => [
      ...prev,
      Math.round(clickLine.getLength() + moveLine.getLength()),
    ]);
    console.log(distances);
    setIsdrawing(true);
  };

  const handleMouseMove = (_map, mouseEvent) => {
    setMousePosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };

  const handleRightClick = (_map, _mouseEvent) => {
    setIsdrawing(false);

    // getpath(JSON.stringify(paths) + `\,\[${distances[distances.length - 1]}\]`);
    getpath(JSON.stringify(paths));
    getdistance(distances);
    // console.log(paths[0])
    // console.log(paths[paths.length - 1])
    //  /* 시작점 */
    // const startPoint = paths[0];
    // /* 끝점 */
    // const endPoint  = paths[paths.length - 1]
    // // paths 값의 첫번째가 시작점, 마지막이 끝점

    // // 마지막 거리
    // console.log(distances);
  };

  return (
    <>
      <Map
        id="map"
        center={{
          lat: latitude,
          lng: longitude,
        }}
        style={{
          width: '100%',
          height: '450px',
        }}
        level={3}
        onClick={handleClick}
        onRightClick={handleRightClick}
        onMouseMove={handleMouseMove}
      >
        <Polyline
          path={paths}
          strokeWeight={3}
          strokeColor="#80327e"
          strokeOpacity={1}
          strokeStyle="solid"
          onCreate={setClickLine}
        />
        {paths.map((path) => (
          <CustomOverlayMap
            key={`dot-${path.lat},${path.lng}`}
            position={path}
            zIndex={1}
          >
            <span />
          </CustomOverlayMap>
        ))}
        {paths.length > 1 &&
          distances.slice(1, distances.length).map((distance, index) => (
            <CustomOverlayMap
              key={`distance-${paths[index + 1].lat},${paths[index + 1].lng}`}
              position={paths[index + 1]}
              yAnchor={1}
              zIndex={2}
            >
              {!isdrawing && distances.length === index + 2 ? (
                <DistanceInfo distance={distance} />
              ) : (
                <div>
                  거리 <span>{distance}</span>m
                </div>
              )}
            </CustomOverlayMap>
          ))}
        <Polyline
          path={isdrawing ? [paths[paths.length - 1], mousePosition] : []}
          strokeWeight={3}
          strokeColor="#b064ad"
          strokeOpacity={0.5}
          strokeStyle="solid"
          onCreate={setMoveLine}
        />
        {isdrawing && (
          <CustomOverlayMap position={mousePosition} yAnchor={1} zIndex={2}>
            <div>
              총거리{' '}
              <span>
                {Math.round(clickLine.getLength() + moveLine.getLength())}
              </span>
              m
            </div>
          </CustomOverlayMap>
        )}
      </Map>
    </>
  );
};

export default MapDrawingManager;
