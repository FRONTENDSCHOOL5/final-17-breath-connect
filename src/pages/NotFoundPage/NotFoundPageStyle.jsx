import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  margin: 20rem auto;
  width: 14.8rem;
  height: 20rem;
  background-color: ${({theme}) => theme.colors.whiteText};
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ErrorMessage = styled.p`
  margin-top : 2.6rem;
  margin-bottom: 2rem;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.small};
`;