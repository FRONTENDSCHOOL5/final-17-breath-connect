import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.6rem 6rem;
`;

export const Title = styled.h2`
  display: none;
`;

export const FollowList = styled.ul`
  li {
    margin-bottom: 0.8rem;
    height: 5rem;
    color: ${({theme}) => theme.colors.blackText};
  }
`;

export const Icon = styled.img`
  width: 100%;
  width: 14.8rem;
  height: 20rem;
  margin: 5rem 10rem 1rem;
`;
export const Text = styled.p`
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.small};
  text-align: center;
  `;