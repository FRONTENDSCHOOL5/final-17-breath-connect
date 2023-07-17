import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.4rem;
  padding: 1.6rem;
`;

export const ProfileImage = styled.div`
  img {
    width: 11rem;
    height: 11rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Profile = styled.ul`
  text-align: center;
`;

export const UserName = styled.li`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const AccountName = styled.li`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  margin-top: 0.6rem;
`;

export const Introduction = styled.li`
  margin-top: 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Interaction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  gap: 1rem;
  margin-bottom: 2.6rem;
`;

export const SelectionBox = styled.div`
  background-color: #f6f5f6;
  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.textColor};
  height: 3.4rem;
  text-align: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  padding-top: 1.1rem;
  strong {
    color: #6521d3;
  }
`;
