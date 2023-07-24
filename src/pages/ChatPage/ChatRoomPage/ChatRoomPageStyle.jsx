import styled from 'styled-components';

export const Main = styled.main`
  padding: 1rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
   .chat-mine {
      display: flex;
      justify-content: flex-end;  
  }
   .chat-pratner {
      display: flex;
  }
`;

export const Title = styled.h2`
  display: none;
`;

export const Chatli = styled.li`
  display: flex;
`;

export const Image = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;

export const ChatBox = styled.p`
  padding: 1.2rem;
  box-sizing: border-box;
  border: ${({ theme }) => `0.15rem solid ${theme.colors.borderColor}`};
  font-size: 1.4rem;
`;

export const PartnerChatBox = styled(ChatBox)`
  background-color: ${({ theme }) => theme.colors.whiteText};
  margin: 0 0.6rem 1rem 1.2rem;
  width: 24rem;
  border-radius: 0 1rem 0 1rem;
`;

export const MineChatBox = styled(ChatBox)`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.whiteText};
  margin-bottom: 1rem;
  width: 12rem;
  border-radius: 1rem 0 1rem 0;
`;

export const ChatTime = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 0.6rem 1rem 0;
  margin-top: auto;
`;

export const Img = styled.img`
  border-radius: 1rem;
  margin-bottom: 1rem;
  width: 24rem;
  height: 24rem;
`;