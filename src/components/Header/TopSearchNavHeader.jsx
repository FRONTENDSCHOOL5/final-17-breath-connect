import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import { SearchContainer, Input } from './HeaderStyle';

const TopSearchNavHeader = ({ value, setValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <HeaderContainer>
      <BackButton />
      <SearchContainer>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="계정 검색"
        />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default TopSearchNavHeader;
