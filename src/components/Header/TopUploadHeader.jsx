import React from 'react';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import UploadButton from '../common/Button/ButtonContainer';
import Container from './HeaderContainer';
import BackButton from './BackButton';
import { Section } from './TopUploadHeaderStyle';

const TopUploadHeader = ({ text, handleClick, isDisabled }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <Container>
      <BackButton />
      <Section>
        <UploadButton
          type={'MS'}
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
