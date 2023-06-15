import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import styled from 'styled-components';

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
  padding: 7px;
  margin-right: 19px;
`;

const Input = styled.input`
  width: 310px;
  height: 32px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 32px;
  padding-left: 16px;
  &::placeholder {
    color: #999999;
  }
`;
