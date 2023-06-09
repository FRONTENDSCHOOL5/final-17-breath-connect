import React from 'react';
import HeaderContainer from './HeaderContainer';
import BackButton from './BackButton';
import styled from 'styled-components';



const TopSearchNavHeader = ({ value, setValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  
  return (
    <HeaderContainer>
      <BackButton />
      <SearchContainer>
        <Input type="text" value={value} onChange={handleChange} placeholder="계정 검색" />
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
  background-color: ${({ theme }) => theme.colors.inputColor};
  border-radius: 3.2rem;
  padding-left: 1.6rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.uploadPlaceholderColor};
  }
  &:focus{
    background-color: #fff;
    box-shadow: 0.2rem 0.2rem 0.1rem 0.1rem ${({ theme }) => theme.colors.mainColor};
    outline: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
    transition: 0.3s ;
  }
`;