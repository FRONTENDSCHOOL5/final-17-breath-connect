import React from 'react';
import {
  GlobalStyle,
  Container,
  Body,
  Circle,
  Before,
  Text,
} from './LoadingStyle';

const Loading = () => {
  return (
    <Container>
      <GlobalStyle />
      <Body>
          <Circle>
            <Before />
          </Circle>
          <Text>Loading...</Text>
      </Body>
    </Container>
  );
};

export default Loading;
