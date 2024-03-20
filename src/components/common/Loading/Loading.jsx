import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Spinner} from '../../../assets/images/spinner.svg';

const Loading = () => {
  return (
    <>
      <Container>
        <Spinner />
      </Container>
    </>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
