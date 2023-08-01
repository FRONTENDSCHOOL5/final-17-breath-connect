import React from 'react';
import { useRecoilValue } from "recoil";
import { ThemeProvider } from 'styled-components';
import Header from '../../../components/Header/TopChatNavHeader';
import Footer from '../../../components/common/Comment/ChatComment';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import Theme, { darkColors } from '../../../styles/Theme';
import ProfileImg from '../../../assets/images/basic-profile-s.svg';
import ProfileDarkImg from '../../../assets/images/basic-profile-s-dark.svg';
import ChatImg from '../../../assets/images/chat-img.png';
import {
  Container,
  Main,
  Title,
  List,
  Chat,
  Image,
  From,
  To,
  Time,
  Img,
} from './ChatRoomPageStyle';

const ChatRoom = ({theme}) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <Container>
      <Header />
      <Main>
        <Title>채팅방</Title>
        <List>
          <Chat>
            <Image src={isDarkMode ? ProfileDarkImg : ProfileImg} alt="유저프로필" />
            <From>
              안녕하세요~ 서울역 게시글 봤어요!!
            </From>
            <Time>12:39</Time>
          </Chat>
          <Chat>
          <Image src={isDarkMode ? ProfileDarkImg : ProfileImg} alt="유저프로필" />
            <From>
              저도 달리기 참여하고 싶어요😊
            </From>
            <Time>12:41</Time>
          </Chat>
          <Chat className="chat-mine">
            <Time>12:50</Time>
            <To>네 좋습니다~!</To>
          </Chat>
          <Chat className="chat-mine">
            <Time>12:51</Time>
            <Img src={ChatImg} alt="강아지 사진" />
          </Chat>
        </List>
      </Main>
      <Footer />
    </Container>
    </ThemeProvider>
  );
};
export default ChatRoom;
