import styled from 'styled-components';

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.backgroundColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  color: ${({theme}) => theme.colors.blackText};
`;

export const Button = styled.button`
  padding: 1.3rem 0rem 1.4rem 2.6rem;
  text-align: left;
  font-size: 14px;
`
