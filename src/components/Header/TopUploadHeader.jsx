import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import Button from '../common/Button/Button';
import Container from './HeaderContainer';
import BackButton from './BackButton';
import { Section } from './TopUploadHeaderStyle';

const TopUploadHeader = ({ text, handleClick, isDisabled }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <Container>
      <BackButton />
      <Section>
        <Button
          size={'MS'}
          text={text}
          isClicked={false}
          handleClick={handleClick}
          isDisabled={isDisabled}
          isDarkMode={isDarkMode}
        />
      </Section>
    </Container>
  );
};
export default TopUploadHeader;
