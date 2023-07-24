import React from 'react';
import { DistanceContainer, SText } from './MapStyle';

export default function DistanceInfo({ distance }) {
  const walkkTime = (distance / 67) | 0;

  return (
    <DistanceContainer>
      <div>
        <SText>총거리 = </SText> <span>{distance}</span>m
      </div>
      <div>
        <SText>도보 = </SText>{' '}
        {walkkTime > 60 && (
          <>
            <span>{Math.floor(walkkTime / 60)}</span> 시간{' '}
          </>
        )}
        <span>{walkkTime % 60}</span> 분
      </div>
    </DistanceContainer>
  );
}
