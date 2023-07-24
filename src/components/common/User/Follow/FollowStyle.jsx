import styled from 'styled-components';

export const UserItem = styled.li`
  display: flex;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
`;

export const UserName = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 500;
`;

export const Intro = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const ButtonWrapper = styled.button`
  margin-top: 0rem;
  -webkit-tap-highlight-color : rgba(0,0,0,0);
`;