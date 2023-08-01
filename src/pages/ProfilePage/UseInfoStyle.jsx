import styled from "styled-components";

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.backgroundColor};
text-align: center;
`;

export const ProfileSection = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
padding: 1.6rem;
margin-top: 1.4rem;
`;

export const Image = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  object-fit: cover;
`

export const UserSection = styled.ul`
  text-align: center;
`;

export const UserName = styled.li`
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;
`;

export const AccountName = styled.li`
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
`;

export const Introduction = styled.li`
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  margin-bottom: 2.6rem;
  gap: 1rem;
`;

export const PostSection = styled.section`
  height: 3.4rem;
  padding-top: 1.1rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({theme}) => theme.colors.uploadBoxColor};
  border: 0.01rem solid rgba(217, 217, 217, 0.5);
  border-bottom: none;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  font-weight: 400;
  text-align: center;
`;

export const Text = styled.strong`
  color: ${({theme}) => theme.colors.mainColor};
`