import React, { useEffect, useState, useCallback } from 'react';
import { CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import DistanceInfo from './DistanceInfo';
import GetLocation from './GetLocation';
import MapComponent from './MapComponent';
import ToolBox from './ToolBox';
import Loading from '../../components/common/Loading/Loading';
import { Distance } from './style/MapStyle';

const MapDrawingManager = ({ getpath }) => {
  const location = GetLocation();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [paths, setPaths] = useState([]);
  const [isdrawing, setIsdrawing] = useState(false);
  const [distances, setDistances] = useState([]);
  const [map, setMap] = useState(null);
  const [clickLine, setClickLine] = useState(null);
  const [moveLine, setMoveLine] = useState(null);

  const handleClick = useCallback(() => {
    if (!isdrawing) {
      setDistances([]);
      setPaths([]);
    }
    setPaths((prev) => [
      ...prev,
      {
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng(),
      },
    ]);
    setDistances((prev) => [
      ...prev,
      Math.round(clickLine.getLength() + moveLine.getLength()),
    ]);
    setIsdrawing(true);
  }, [isdrawing, map, clickLine, moveLine]);

  const handleRightClick = useCallback(() => {
    setIsdrawing(false);
    const newObj = { dis: distances };
    if (paths.length > 0) {
      paths.push(newObj);
      getpath(JSON.stringify(paths));
    }
  }, [distances, paths]);

  const handleDragEnd = useCallback(
    (map) => {
      const center = map.getCenter();
      setCenter({
        lat: center.getLat(),
        lng: center.getLng(),
      });
    },
    [setCenter]
  );

  const handleClickUndo = useCallback(() => {
    if (paths.length > 1) {
      if (!isdrawing) {
        setPaths((paths) => paths.slice(0, paths.length - 1));
      }
      setPaths((paths) => paths.slice(0, paths.length - 1));
      setDistances((distances) => distances.slice(0, distances.length - 1));
      setIsdrawing(true);
    } else if (paths.length === 1) {
      setPaths([]);
      setDistances([]);
      setIsdrawing(false);
    }
  });

  const handleClickReset = useCallback(() => {
    setPaths([]);
    setDistances([]);
    setIsdrawing(false);
  });

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      setCenter({
        lat: location.latitude,
        lng: location.longitude,
      });
    }
  }, [location.latitude, location.longitude]);

  useEffect(() => {
    if (paths.length > 0) {
      setCenter(paths[paths.length - 1]);
    }
  }, [paths]);

  return (
    <>
      {center.lat !== undefined ? (
        <>
          <MapComponent
            center={center}
            handleClick={handleClick}
            handleRightClick={handleRightClick}
            handleDragEnd={handleDragEnd}
            handleOnCreate={setMap}
            handleStyle={{
              width: '100%',
              height: '820px',
            }}
          >
            <Polyline
              path={paths}
              strokeWeight={3}
              strokeColor="#80327e"
              strokeOpacity={1}
              strokeStyle="solid"
              onCreate={setClickLine}
            />
            {paths.length > 1 &&
              distances.slice(1, distances.length).map((distance, index) => (
                <CustomOverlayMap
                  key={`distance-${paths[index + 1].lat},${
                    paths[index + 1].lng
                  }`}
                  position={paths[index + 1]}
                  yAnchor={1}
                  zIndex={2}
                >
                  {!isdrawing && distances.length === index + 2 ? (
                    <DistanceInfo distance={distance} />
                  ) : (
                    <Distance>
                      거리 <span>{distance}</span>m
                    </Distance>
                  )}
                </CustomOverlayMap>
              ))}
            <Polyline
              path={isdrawing ? [paths[paths.length - 1], center] : []}
              strokeWeight={3}
              strokeColor="#b064ad"
              strokeOpacity={0.5}
              strokeStyle="solid"
              onCreate={setMoveLine}
            />
            {paths.length > 1 &&
              distances.slice(1, distances.length).map((distance, index) => (
                <CustomOverlayMap
                  key={`distance-${paths[index + 1].lat},${
                    paths[index + 1].lng
                  }`}
                  position={paths[index + 1]}
                  yAnchor={1}
                  zIndex={2}
                >
                  {!isdrawing && distances.length === index + 2 ? (
                    <DistanceInfo distance={distance} />
                  ) : (
                    <Distance>
                      거리 <span>{distance}</span>m
                    </Distance>
                  )}
                </CustomOverlayMap>
              ))}
            <ToolBox
              onClickUndo={handleClickUndo}
              onClickReset={handleClickReset}
            />
          </MapComponent>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MapDrawingManager;
