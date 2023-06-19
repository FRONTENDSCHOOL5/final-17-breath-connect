import React, { useEffect, useState } from 'react';
import { Map, CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import DistanceInfo from './DistanceInfo';
import GetLocation from './GetLocation';

const MapDrawingManager = () => {
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
    console.log(paths);
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
