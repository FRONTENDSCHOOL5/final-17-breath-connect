import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/images/basic-profile-s.svg';
import TopBasicNavHeader from '../../components/Header/TopBasicNavHeader';
import TabMenu from '../../components/Footer/TabMenu';
import {
  Title,
  Main,
  FollowList,
  UserItem,
  Section,
  UserName,
  Message,
  Date,
  Image,
  Div,
} from './style/ChatListPageStyle';

const ChatPage = () => {
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
    <>
      <TopBasicNavHeader />
      <Main>
        <Title>채팅리스트</Title>
        <FollowList>
          {UserData.map((user) => (
            <UserItem key={user.id}>
              <Div unread={!user.read}>
                <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
              </Div>
              <Section>
                <Link to={`/chat/${user.id}`}>
                  <UserName>{user.username}</UserName>
                  <Message>{user.message}</Message>
                </Link>
              </Section>
              <Date>{user.date}</Date>
            </UserItem>
          ))}
        </FollowList>
      </Main>
      <TabMenu />
    </>
  );
};

export default ChatPage;
