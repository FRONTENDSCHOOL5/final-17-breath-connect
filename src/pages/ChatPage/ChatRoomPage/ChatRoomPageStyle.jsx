import styled from 'styled-components';

export const Container = styled.div`
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 100vh;
  padding: 1rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};

  .chat-mine {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Title = styled.h2`
  display: none;
`;

export const List = styled.ul`
`

export const Chat = styled.li`
  display: flex;
  color: ${({ theme }) => theme.colors.blackText};
`;

export const Image = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;

export const ChatBox = styled.p`
  padding: 1.2rem;
  border: ${({ theme }) => `0.15rem solid ${theme.colors.borderColor}`};
  box-sizing: border-box;
  font-size: 1.4rem;
`;

export const From = styled(ChatBox)`
  width: 24rem;
  margin: 0 0.6rem 1rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  border-radius: 0 1rem 0 1rem;
`;

export const To = styled.p`
  padding: 1.2rem;
  margin-bottom: 1rem;
  width: 12rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.chatColor};
  border-radius: 1rem 0 1rem 0;
  font-size: 1.4rem;
`;

export const Time = styled.p`
  margin: 0 0.6rem 1rem 0;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1rem;
`;

export const Img = styled.img`
  width: 24rem;
  height: 24rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;