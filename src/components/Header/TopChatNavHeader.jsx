import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import Container from './HeaderContainer';
import BackButton from './BackButton';
import { Section, Text, ModalButton } from './TopChatNavHeaderStyle';

const TopChatNavHeader = ({ text }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <Container>
      <Section>
        <BackButton />
        <Text>{text}</Text>
      </Section>
      <ModalButton aria-label="모달 버튼">
        <GlobalSprite
          id={isDarkMode ? 's-icon-more-vertical-dark' : 's-icon-more-vertical'}
        />
      </ModalButton>
    </Container>
  );
};

export default TopChatNavHeader;
