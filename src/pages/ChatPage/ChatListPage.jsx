import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profileimg from "../../assets/Img/basic-profile-img.png"
const ChatListPage = () => {

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
      <WrapperContents>
        <ListChat>
          {chatData.map((item, index) => (
            <ItemChat key={index}>
              {/* <Left className={item.read ? "" : "unread"}> */}
              <ImageBox src={profileimg}  alt="프로필 이미지" />
              {/* </Left>
              <Right> */}
                <Link to={"/chat/strongnewbi"}>
                <InfoMessage>
                    <UserName>{item.username}</UserName>
                    <Message>{item.message}</Message>                   
                  </InfoMessage>
                  <Date>{item.date}</Date>
                </Link>
              {/* </Right> */}
            </ItemChat>
          ))}
        </ListChat>
      </WrapperContents>
      
    </>
  );
};


export default ChatListPage;
const HiddenHeading = styled.h2`
  position: absolute;
  left: -9999px;
`;

const WrapperContents = styled.div`
    display: flex;
    //justify-content: flex-start;
    //align-items: center;
    //max-width: 358px;
    //margin: 0px auto;
`;

const ImageBox = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
`;

const ListChat = styled.ul`
 //padding: 24px 16px;
 
`;

const ItemChat = styled.li`
  padding: 24px 16px;
  li:not(:last-child) {
  margin-bottom: 20px;
  }

`;

// const Left = styled.div`
//   position: relative;
//   flex-grow: 0;
//   flex-shrink: 0;
//   margin-right: 10px;
//   &.unread::after {
//     position: absolute;
//     top: 0;
//     left: 0;
//     content: "";
//     width: 12px;
//     height: 12px;
//     background-color: var(--main-color);
//     border-radius: 50%;
//   }
// `;

// const Right = styled.div`
//   padding: 2px;
//   flex-grow: 1;
//   flex-shrink: 1;
// `;

const UserName = styled.strong`
   display: block;
  margin-bottom: 4px;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
`;

const InfoMessage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;

`;

const Message = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--darkgray-color);
`;

const Date = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: var(--lightgray-color);
`;







