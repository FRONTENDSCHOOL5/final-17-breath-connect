import styled from 'styled-components';

export const Container = styled.div`
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.6rem 6rem;
`;

export const Title = styled.h2`
  display: none;
`;

export const List = styled.ul`
  li {
    margin-bottom: 0.8rem;
    height: 5rem;
    color: ${({theme}) => theme.colors.blackText};
  }
`;

export const NotFollower = styled.span`
`

export const Image = styled.img`
  width: 15rem;
  height: 20rem;
  margin: 5rem 10rem 1rem;
`;

export const Text = styled.p`
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.small};
  text-align: center;
  `;
