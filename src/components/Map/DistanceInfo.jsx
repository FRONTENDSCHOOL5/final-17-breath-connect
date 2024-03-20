import React from 'react';
import { Container, Distance, Text, Time, Hour, Amount } from './DistanceInfoStyle';

export default function DistanceInfo({ distance }) {
  const walkkTime = (distance / 67) | 0;

  return (
    <Container>
      <Distance>
        <Text>총거리 = </Text> <Amount>{distance}</Amount>m
      </Distance>
      <Time>
        <Text>도보 = </Text>{' '}
        {walkkTime > 60 && (
          <Hour>
            <Amount>{Math.floor(walkkTime / 60)}</Amount> 시간{' '}
          </Hour>
        )}
        <Amount>{walkkTime % 60}</Amount> 분
      </Time>
    </Container>
  );
}
