import styled from 'styled-components';

export const Container = styled.div`
`

export const Main = styled.main`
  height: 100%;
  margin-top: 2rem;
  margin-left: 1.6rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({theme}) => theme.colors.backgroundColor};
`

export const Text = styled.p`
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
  margin-right: 1.2rem;
  border-radius: 50%;
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
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const NickName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;