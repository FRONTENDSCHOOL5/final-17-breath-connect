import React from 'react';

import {
  Body,
  LoaderContainer,
  LoaderCircle,
  LoaderCircleBefore,
  LoaderText,
  GlobalStyle,
} from './LoadingStyle';

const Loading = () => {
  return (
    <>
      <GlobalStyle />
      <Body>
        <LoaderContainer>
          <LoaderCircle>
            <LoaderCircleBefore />
          </LoaderCircle>
          <LoaderText>Loading...</LoaderText>
        </LoaderContainer>
      </Body>
    </>
  );
};

export default Loading;
