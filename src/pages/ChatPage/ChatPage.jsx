import React from 'react';
import styled from 'styled-components';
import PROFILEIMAGE  from '../../../../assets/Img/basic-profile-img.png';

const ChatPage = () => {

    const item1 = {
        username: "달리기왕 용덕",
        message: "오늘 2시 서울역에서 달리기 시작 맞나요?",
        date: "2023.06.13",
        read: false,
        //image: "https://i.imgur.com/Cu85FEk.jpeg",
      };
      const item2 = {
        username: "나 달리기짱 수연",
        message: "서울역 달리기 참여하고 싶어요~!",
        date: "2023.06.13",
        read: false,
        //image: "https://i.imgur.com/OFpTHKK.jpg",
      };
      const item3 = {
        username: "레체와 양래",
        message: "강아지와 같이 뛰어도 될까요?",
        date: "2023.06.14",
        read: true,
        //image: "https://i.imgur.com/Cu85FEk.jpeg",
      };
      const item4 = {
        username: "연주와 달리기",
        message: "저 참여하고 싶습니다!!!",
        date: "2023.06.14",
        read: true,
        //image: "https://i.imgur.com/OFpTHKK.jpg",
      };

      const chatData = [item1, item2, item3, item4];

  return (
    <>
    <HiddenHeading>채팅목록</HiddenHeading>
    <UserItem>
        {chatData.map((item, index) => (
     <ItemChat key={index}>
      <ProfileImage src={PROFILEIMAGE} alt='weniv_Mandarin님의 프로필 사진' width='50' />
      <Wrapper>
        <UserName>{item.username}</UserName>
        <Message>{item.message}</Message>                    
      </Wrapper>  
        <Date>{item.date}</Date>        
      </ItemChat>
      ))}
      </UserItem>
      </>
  );
};

export default ChatPage;

const HiddenHeading = styled.h2`
  position: absolute;
  left: -9999px;
`;


const UserItem = styled.li`
  display: flex;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
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
  ::before {
    content: '@ ';
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
`;
const Date = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: var(--lightgray-color);
`;
const ItemChat = styled.li`
  padding: 24px 16px;
  li:not(:last-child) {
  margin-bottom: 20px;
  }

`;