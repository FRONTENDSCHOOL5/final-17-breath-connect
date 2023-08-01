import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 4.8rem;
  color: ${({theme}) => theme.colors.blackText};
  background-color: ${({theme}) => theme.colors.headerColor};
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.borderColor}`};
  font-size: 1.4rem;
  z-index: 999;

  > button {
    padding: 1.3rem;
  }
`;