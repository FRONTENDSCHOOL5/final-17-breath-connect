import React from 'react';
import styled from 'styled-components';

const DistanceContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteText};
  border-radius: 2rem;
  padding: 0.7rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.mainColor};;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: ${({ theme }) => theme.fontSize.small};
  div:first-child{
    margin-bottom: 0.5rem;
  }
`;
const SText = styled.span`
  font-weight: bold;
`

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
