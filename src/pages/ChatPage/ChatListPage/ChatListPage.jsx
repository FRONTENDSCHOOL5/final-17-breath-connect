import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { isDarkModeState } from '../../../atoms/StylesAtom';
import Header from '../../../components/Header/TopBasicNavHeader';
import Footer from '../../../components/Footer/TabMenu';
import profileImage from '../../../assets/images/basic-profile-s.svg';
import profileDarkImage from '../../../assets/images/basic-profile-s-dark.svg';
import {
  Container,
  Title,
  Main,
  UserList,
  List,
  ImageSection,
  ChatSection,
  UserName,
  Message,
  Date,
  Image,
} from './ChatListPageStyle';

const ChatPage = ({theme}) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const UserData = [
    {
      id: 1,
      username: '달리기왕 용덕',
      message: '오늘 2시 서울역에서 달리기 시작 맞나요?',
      date: '2023.06.13',
      read: false,
    },
    {
      id: 2,
      username: '나 달리기짱 수연',
      message: '서울역 달리기 참여하고 싶어요~!',
      date: '2023.06.13',
      read: false,
    },
    {
      id: 3,
      username: '레체와 양래',
      message: '강아지와 같이 뛰어도 될까요?',
      date: '2023.06.12',
      read: false,
    },
    {
      id: 4,
      username: '연주와 달리기',
      message: '저 참여하고 싶습니다!!!',
      date: '2023.06.12',
      read: true,
    },
  ];

  return (
    <Container>
      <Header />
      <Main>
        <Title>채팅리스트</Title>
        <UserList>
          {UserData.map((user) => (
            <List key={user.id}>
              <ImageSection unread={!user.read}>
                <Image src={isDarkMode ? profileDarkImage : profileImage} alt="유저의 프로필 사진" width="50" />
              </ImageSection>
              <ChatSection>
                <Link to={`/chat/${user.id}`}>
                  <UserName>{user.username}</UserName>
                  <Message>{user.message}</Message>
                </Link>
              </ChatSection>
              <Date>{user.date}</Date>
            </List>
          ))}
        </UserList>
      </Main>
      <Footer />
    </Container>
  );
};

export default ChatPage;
