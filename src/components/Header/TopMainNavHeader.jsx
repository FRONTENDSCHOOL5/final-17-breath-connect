import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDarkModeState } from '../../atoms/StylesAtom';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import Container from './HeaderContainer';
import { Title, SearchButton } from './TopMainNavHeaderStyle';

const TopMainNavHeader = () => {
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <Container>
      <Title>들숨날숨 피드</Title>
      <SearchButton aria-label="유저 찾기">
        <Link to="/Search" aria-label="유저 찾기 페이지로 이동">
          <GlobalSprite
            id={isDarkMode ? 'icon-search-dark' : 'icon-search'}
            color={'transparent'}
          />
        </Link>
      </SearchButton>
    </Container>
  );
};

export default TopMainNavHeader;
