import React from 'react';
import TopChatNavHeader from '../../../components/Header/TopChatNavHeader';
import ProfileImg from '../../../assets/images/basic-profile-s.svg';
import ProfileDarkImg from '../../../assets/images/basic-profile-s-dark.svg';
import ChatImg from '../../../assets/images/chat-img.png';
import ChatComment from '../../../components/common/Comment/ChatComment';
import {
  Main,
  Title,
  Chatli,
  Image,
  PartnerChatBox,
  MineChatBox,
  ChatTime,
  Img,
} from './ChatRoomPageStyle';
import { useRecoilValue } from "recoil";
import { isDarkModeState } from '../../../atoms/StylesAtom';
import { ThemeProvider } from 'styled-components';
import Theme, { darkColors } from '../../../styles/Theme';

const ChatRoom = ({theme}) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <>
      <TopChatNavHeader />
      <Main className="chat-space">
        <Title>채팅방</Title>
        <ul>
          <Chatli className="chat-partner">
            <Image src={isDarkMode ? ProfileDarkImg : ProfileImg} alt="유저프로필" />
            <PartnerChatBox className="chat-box">
              안녕하세요~ 서울역 게시글 봤어요!!
            </PartnerChatBox>
            <ChatTime className="chat-time">12:39</ChatTime>
          </Chatli>
          <Chatli className="chat-partner">
            <Image src={ProfileImg} alt="유저프로필" />
            <PartnerChatBox className="chat-box">
              저도 달리기 참여하고 싶어요😊
            </PartnerChatBox>
            <ChatTime className="chat-time">12:41</ChatTime>
          </Chatli>
          <Chatli className="chat-mine">
            <ChatTime className="chat-time">12:50</ChatTime>
            <MineChatBox className="chat-box">네 좋습니다~!</MineChatBox>
          </Chatli>
          <Chatli className="chat-mine">
            <ChatTime className="chat-time">12:51</ChatTime>
            <Img src={ChatImg} alt="강아지 사진" />
          </Chatli>
        </ul>
      </Main>
      <ChatComment />
    </>
    </ThemeProvider>
  );
};
export default ChatRoom;
