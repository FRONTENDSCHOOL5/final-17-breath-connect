import styled from 'styled-components';

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.backgroundColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 380px;
  flex-direction: column;
  color: ${({theme}) => theme.colors.blackText};
  button {
    text-align: left;
    font-size: 14px;
    padding: 1.3rem 0rem 1.4rem 2.6rem;
  }
`;
