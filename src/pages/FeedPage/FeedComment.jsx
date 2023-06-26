import React from 'react';
import styled from 'styled-components';
import BasicProfile from '../../assets/images/basic-profile-xs.svg';
import GlovalSprite from '../../assets/sprite/GlovalSprite';

const FeedComment = ({ user, content, image, time, handleCommentClick }) => {

  const createdTime = () => {
    const year = time.slice(0, 4) + '년 ';
    const month = time.slice(5, 7) + '월 ';
    const date = time.slice(8, 10) + '일';
    return year + month + date;
  }
  
  return (
    <Container>
      <ContentsContainer>
      <div>
        <img src={image} alt="유저 프로필 이미지" />
      </div>
      <UserContents>
        <UserInfo>
          <UserName>{user}</UserName>
          <TimeAgo>{createdTime()}</TimeAgo>
        </UserInfo>
        <Contents>{content}</Contents>
      </UserContents>
      </ContentsContainer>
      <Sbtn onClick={handleCommentClick}>
      <GlovalSprite id={'s-icon-more-vertical'} color={'white'} size={16}/>
      </Sbtn>
    </Container>
  );
};

export default FeedComment;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
box-shadow: rgba(217, 217, 217, 0.5) 0px 0.1rem 0px;
img {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  object-fit: cover;
}
`;

const UserContents = styled.div`
  padding: 10px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
`;

const UserName = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 15px;
`;

const TimeAgo = styled.span`
  color: #767676;
  padding-left: 6px;
`;

const Contents = styled.div`
  font-weight: 400;
  font-size: 14px;
  width: 28rem;
  word-break: break-all;
`;

const ContentsContainer = styled.div`
  display: flex;
`

const Sbtn = styled.button`
  float:right;
  padding-bottom: 3rem;
`