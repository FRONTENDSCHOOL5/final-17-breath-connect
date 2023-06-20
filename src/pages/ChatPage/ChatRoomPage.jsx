import React from 'react';
import styled from 'styled-components';
import TopChatNavHeader from '../../components/Header/TopChatNavHeader';
import ProfileImg from '../../assets/images/basic-profile-s.svg';
import ChatImg from '../../assets/images/chat-img.png';
import ChatComment from '../../components/common/Comment/ChatComment';

const ChatRoom = () => {
  return (
    
    <>
      <TopChatNavHeader/>
      <ChatSpace className="chat-space">
        <Text>채팅방</Text>
        <ul>
          <ChatPartner className="chat-partner">
            <BasicProfile src={ProfileImg} alt="유저프로필" />
            <PartnerChatBox className="chat-box">안녕하세요~ 서울역 게시글 봤어요!!</PartnerChatBox>
            <ChatTime className="chat-time">12:39</ChatTime>
          </ChatPartner>
          <ChatPartner className="chat-partner">
            <BasicProfile src={ProfileImg} alt="유저프로필" />
            <PartnerChatBox className="chat-box">저도 달리기 참여하고 싶어요😊</PartnerChatBox>
            <ChatTime className="chat-time">12:41</ChatTime>
          </ChatPartner>
          <ChatPartner className="chat-mine">
            <ChatTime className="chat-time">12:50</ChatTime>
            <MineChatBox className="chat-box">네 좋습니다~!</MineChatBox>
          </ChatPartner>
          <ChatPartner className="chat-mine">
            <ChatTime className="chat-time">12:51</ChatTime>
             <ChatDogImage src={ChatImg} alt="강아지 사진" />
          </ChatPartner>
        </ul>
      </ChatSpace>
      <ChatComment/> 
    </>
  );
};
export default ChatRoom;

const ChatSpace = styled.section`
  padding-top: 22.4rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.uploadBoxColor};
   .chat-mine {
      display: flex;
      justify-content: flex-end;
      argin-right: 1.6rem;
      padding-right: 1rem;
  }
   .chat-pratner {
     display: flex;
  }
`;

const Text = styled.h2`
  display: none;
`;

const ChatPartner = styled.li`
  display: flex;
`;

const BasicProfile = styled.img`
  margin-left: 1.6rem;
  width: 4.2rem;
  height: 4.2rem;
`;

const ChatBox = styled.p`
  padding: 1.2rem;
  box-sizing: border-box;
  border: ${({ theme }) => `0.15rem solid ${theme.colors.borderColor}`};
  font-size: 1.4rem;
`;

const PartnerChatBox = styled(ChatBox)`
  background-color: ${({ theme }) => theme.colors.whiteText};
  margin: 0 0.6rem 1rem 1.2rem;
  width: 24rem;
  border-radius: 0 1rem 0 1rem;
`;

const MineChatBox = styled(ChatBox)`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.whiteText};
  margin-bottom: 1rem;
  width: 12rem;
  border-radius: 1rem 0 1rem 0;
`;

const ChatTime = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 0.6rem 1rem 0;
  margin-top: auto;
`;

const ChatDogImage = styled.img`
  border-radius: 1rem;
  margin-bottom: 1rem;
  width: 24rem;
  height: 24rem;
`;