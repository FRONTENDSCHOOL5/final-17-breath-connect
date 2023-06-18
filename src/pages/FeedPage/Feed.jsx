import React from 'react';
import styled from 'styled-components';
import basicImg from '../../assets/images/basic-profile-m.svg';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import FeedMap from '../../components/Map/FeedMap';

const Feed = ({ data }) => {
  return (
    <Container>
      <UserProfileImg src={data.image ? data.image : basicImg} />
      <div>
        <UserName>{data.author.username}</UserName>
        <FeedNickName>@ {data.author.accountname}</FeedNickName>
        <div>
          <GlovalSprite id={'icon-calendal'} size={13} />
          <FeedInfo>화요일, 6/9 • 10:30 AM</FeedInfo>
        </div>
        <div>
          <GlovalSprite id={'icon-location'} size={13} />
          <FeedInfo>여의나루역~선유도역 (3.5 km)</FeedInfo>
        </div>
        <MapContents>
          <FeedMap data={data.updatedAt} />
        </MapContents>
        <UserFeedText>{data.content}</UserFeedText>
        <AppendAndComment>
          <AppendButton>{data.heartCount}명 참여</AppendButton>
          <div>
            <GlovalSprite
              id={'icon-message-circle'}
              size={12}
              color={'white'}
            ></GlovalSprite>
            <FeedInfo>{data.commentCount}</FeedInfo>
          </div>
        </AppendAndComment>
      </div>
    </Container>
  );
};
export default Feed;

const Container = styled.div`
  display: flex;
  padding: 1.6rem;
  box-shadow: 0 0.1rem 0 rgba(217, 217, 217, 0.5);
`;

const UserProfileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  margin-right: 1.2rem;
`;

const FeedNickName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 1.6rem;
`;

const FeedInfo = styled.span`
  margin-left: 0.4rem;
  vertical-align: 0.2rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

const UserName = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const UserFeedText = styled.div`
  font-size: 1.2rem;
  margin: 1.6rem 0;
`;

const AppendAndComment = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const AppendButton = styled.button`
  background-color: rgba(101, 33, 211, 0.043);
  color: ${({ theme }) => theme.colors.mainColor};
  padding: 0.3rem 1rem;
  border-radius: 1rem;
`;

const MapContents = styled.div`
  width: 304px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  margin: 12px 0;
`;
