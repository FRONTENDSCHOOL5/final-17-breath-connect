import styled from 'styled-components';
export const Main = styled.main`
  height: 100%;
  margin-top: 2rem;
  margin-left: 1.6rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({theme}) => theme.colors.backgroundColor};
`

export const NoResultsText = styled.p`
  font-size: 1.4rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1.2rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: start;
`

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
`;

export const UserName = styled.p`
font-size: ${({ theme }) => theme.fontSize.medium};
margin-bottom: 0.6rem;
color: ${({ theme }) => theme.colors.blackText};
`;

export const NickName = styled.p`
font-size: ${({ theme }) => theme.fontSize.small};
`;