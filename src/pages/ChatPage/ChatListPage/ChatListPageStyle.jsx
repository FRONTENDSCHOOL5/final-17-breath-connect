import styled, {css} from 'styled-components';
export const Container = styled.div`
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: 41.5rem;
  padding: 2.4rem 1.6rem;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;

export const Title = styled.h2`
  display: none;
`;

export const UserList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const List = styled.li`
  display: flex;
`;

export const ImageSection = styled.section`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1rem;

  ${({ unread }) =>
    unread &&
    css`
      ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 1.2rem;
        height: 1.2rem;
        background-color: ${({theme}) => theme.colors.mainColor};
        border-radius: 50%;
      }
    `}
`;

export const Image = styled.img`
  width: 4.8rem;
  height: auto;
  border-radius: 50%;
`;

export const ChatSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
  flex: 1;
`;

export const UserName = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  color: ${({theme}) => theme.colors.blackText};
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 500;
`;

export const Message = styled.strong`
  display: block;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.small};
`;

export const Date = styled.strong`
  display: inline-block;
  margin-top: 2.8rem;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.xsmall};
`;