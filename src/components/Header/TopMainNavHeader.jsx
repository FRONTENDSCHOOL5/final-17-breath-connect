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
      <SearchButton>
        <Link to="/Search">
          <GlobalSprite id={isDarkMode ? 'icon-search-dark' : 'icon-search'} color={'transparent'}/>
        </Link>
      </SearchButton>
    </Container>
  );
};

export default TopMainNavHeader;
