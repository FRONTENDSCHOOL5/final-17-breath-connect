import React from 'react';
import styled from 'styled-components';

const DistanceContainer = styled.div`
  background-color: violet;
  border-radius: 2rem;
  padding: 0.7rem;
  border: 0.2rem solid purple;
  color: white;
`;

export default function DistanceInfo({ distance }) {
  const walkkTime = (distance / 67) | 0;

  return (
    <DistanceContainer>
      <div>
        <span>총거리</span> <span>{distance}</span>m
      </div>
      <div>
        <span>도보</span>{' '}
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
