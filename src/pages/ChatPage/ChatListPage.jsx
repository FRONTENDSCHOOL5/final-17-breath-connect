import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import profileImage  from '../../assets/images/basic-profile-s.svg';
import TopBasicNavHeader from '../../components/Header/TopBasicNavHeader';
import TabMenu from '../../components/Footer/TabMenu';

const ChatPage = () => {
    const UserData = [
      {
        id:1,
        username: "달리기왕 용덕",
        message: "오늘 2시 서울역에서 달리기 시작 맞나요?",
        date: "2023.06.13",
        read: false,
      },
      {
        id:2,
        username: "나 달리기짱 수연",
        message: "서울역 달리기 참여하고 싶어요~!",
        date: "2023.06.13",
        read: false,
      },
      {
        id:3,
        username: "레체와 양래",
        message: "강아지와 같이 뛰어도 될까요?",
        date: "2023.06.12",
        read: false,
      },
      {
        id:4,
        username: "연주와 달리기",
        message: "저 참여하고 싶습니다!!!",
        date: "2023.06.12",
        read: true,
      },
    ];
  
  return (
    <>
     <TopBasicNavHeader/>
    <ContentsWrapper>
     <FollowList>
    {UserData.map((user)=> (
    <UserItem key={user.id}>
       <LeftDiv unread={!user.read}>
      <ProfileImage src={profileImage} alt='유저의 프로필 사진' width='50' />
      </LeftDiv>
      <Wrapper>
      <Link to={`/chat/${user.id}`}> 
        <UserName>{user.username}</UserName>
        <Message>{user.message}</Message>
      </Link>  
      </Wrapper>
      <Date>{user.date}</Date>
     </UserItem>
     
    ))}
     </FollowList> 
    </ContentsWrapper>
    <TabMenu/>
    </>
  );
};

export default ChatPage;

const UserItem = styled.li`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
`;

const UserName = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 500;
`;

const Message = styled.strong`
  display: block;
  font-size: ${({theme}) => theme.fontSize.small};
  color: ${({theme}) => theme.colors.textColor};
 
`;

const Date = styled.strong`
  display: inline-block;
  margin-top: 2.8rem;
  font-size: ${({theme}) => theme.fontSize.xsmall};
  color: ${({theme}) => theme.colors.textColor};
`;

const ProfileImage = styled.img`
  width: 4.8rem;
  height: auto;
  border-radius: 50%;
 
`;

const ContentsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  //margin-top: 4.8rem;
  margin-bottom: 41.5rem;
  padding: 2.4rem 1.6rem; 
`;

const FollowList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const LeftDiv = styled.div`
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


