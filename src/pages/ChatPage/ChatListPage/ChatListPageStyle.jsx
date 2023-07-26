import styled, {css} from 'styled-components';

export const Title = styled.h2`
  display: none;
`;

export const UserItem = styled.li`
  display: flex;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
`;

export const UserName = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 500;
  color: ${({theme}) => theme.colors.blackText};
`;

export const Message = styled.strong`
  display: block;
  font-size: ${({theme}) => theme.fontSize.small};
  color: ${({theme}) => theme.colors.textColor};
`;

export const Date = styled.strong`
  display: inline-block;
  margin-top: 2.8rem;
  font-size: ${({theme}) => theme.fontSize.xsmall};
  color: ${({theme}) => theme.colors.textColor};
`;

export const Image = styled.img`
  width: 4.8rem;
  height: auto;
  border-radius: 50%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 41.5rem;
  padding: 2.4rem 1.6rem;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;

export const FollowList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const Div = styled.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1rem;

  ${({ unread }) =>
    unread &&
    css`
      ::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        background-color: ${({theme}) => theme.colors.mainColor};
        border-radius: 50%;
      }
    `}
`;
