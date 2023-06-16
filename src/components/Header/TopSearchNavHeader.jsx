import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

const TopSearchNavHeader = () => {
  return (
    <HeaderContainer>
      <BackButton />
      <SearchContainer>
        <Input type="text" placeholder="계정 검색" />
      </SearchContainer>
    </HeaderContainer>
  );
};
export default TopSearchNavHeader;

const SearchContainer = styled.form`
  padding: 0.7rem;
  margin-right: 1.9rem;
`;

const Input = styled.input`
  width: 31rem;
  height: 3.2rem;
  border: none;
  background-color: #f2f2f2;
  border-radius: 3.2rem;
  padding-left: 1.6rem;
  &::placeholder {
    color: #999999;
  }
`;
