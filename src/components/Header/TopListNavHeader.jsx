import React from 'react';
import Container from './HeaderContainer';
import BackButton from './BackButton';
import { Section, Text } from './TopListNavHeaderStyle';

const TopListNavHeader = ({ text }) => {
  return (
    <Container>
      <Section>
        <BackButton />
        <Text>{text}</Text>
      </Section>
    </Container>
  );
};

export default TopListNavHeader;
