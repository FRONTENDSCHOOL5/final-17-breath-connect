import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({theme}) => theme.colors.whiteText};
  position: relative;
  margin: 20rem auto;
  width: 14.8rem;
  height: 20rem;
  text-align: center;
`;
export const Image = styled.img`
  width: 100%;
`;
export const ErrorMessage = styled.p`
  color: ${({theme}) => theme.colors.textColor};
  margin-top : 2.6rem;
  margin-bottom: 2rem;
  font-size: ${({theme}) => theme.fontSize.small};
`;