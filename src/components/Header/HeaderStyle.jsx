import styled from 'styled-components';

// ----- HeaderContainer
export const Container = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.borderColor}`};
  font-size: 1.4rem;
  height: 4.8rem;
  background-color: white;
  z-index: 999;

  > button {
    padding: 1.3rem;
  }
`;
// ----- HeaderContainer

//  ----- TopChatNavHeader
export const BackAndUserText = styled.div`
  display: flex;
  padding: 1.3rem;
`;

export const User = styled.span`
  text-align: center;
  font-size: 1.4rem;
  margin: 0.5rem 0 0 0.1rem;
  font-weight: 500;
`;
//  ----- TopChatNavHeader

// ----- TopListNavHeader
// ----- TopListNavHeader

// ----- TopMainNavHeader
export const MainButton = styled.div`
  padding: 1.8rem;
  font-size: 1.8rem;
  font-weight: 500;
`;
// ----- MainButton

//  ----- TopSearchNavHeader
export const SearchContainer = styled.form`
  padding: 0.7rem;
  margin-right: 1.9rem;
`;

export const Input = styled.input`
  width: 31rem;
  height: 3.2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.inputColor};
  border-radius: 3.2rem;
  padding-left: 1.6rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.uploadPlaceholderColor};
  }
  &:focus {
    background-color: #fff;
    box-shadow: 0.2rem 0.2rem 0.1rem 0.1rem
      ${({ theme }) => theme.colors.mainColor};
    outline: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
    transition: 0.3s;
  }
`;
//  ----- TopSearchNavHeader

//  ----- TopUploadHeader
export const Storage = styled.div`
  margin: 8px;
`;
//  ----- TopUploadHeader
