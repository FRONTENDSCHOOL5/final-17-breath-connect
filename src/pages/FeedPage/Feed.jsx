import React, { useState } from 'react';
import styled from 'styled-components';
import basicImg from '../../assets/images/basic-profile-m.svg';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import FeedMap from '../../components/Map/FeedMap';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonContainer from '../../components/common/Button/ButtonContainer';


const Feed = ({ data }) => {
  const location = useLocation();
  const [detail, setDetail] = useState(
    location.pathname === '/post/postdetail' ? true : false
  );
  const navigate = useNavigate();

  const handleFeedClick = (e) => {
    if (location.pathname !== '/post/postdetail') {
      setDetail(true);
      navigate('/post/postdetail', {
        state: { data: data },
      });
    }
  };

  return (
    <Container>
      <FeedContents>
        <UserProfileImg src={data.image ? data.image : basicImg} />
        <div>
          <UserName>{data.author.username}</UserName>
          <FeedNickName>@ {data.author.accountname}</FeedNickName>
          <button onClick={handleFeedClick}>
            <div>
              <GlovalSprite id={'icon-calendal'} size={13} />
              <FeedInfo>화요일, 6/9 • 10:30 AM</FeedInfo>
            </div>
            <div>
              <GlovalSprite id={'icon-location'} size={13} />
              <FeedInfo>여의나루역~선유도역 (3.5 km)</FeedInfo>
            </div>
            <MapContents>
              <FeedMap data={data.updatedAt} detail={detail} />
            </MapContents>
            <UserFeedText>{data.content}</UserFeedText>
          </button>
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
      </FeedContents>
      <ButtonContainer type={'XL'} text={'참가하기'} />
    </Container>
  );
};
export default Feed;

const Container = styled.div`
  padding: 1.6rem;
  box-shadow: 0 0.1rem 0 rgba(217, 217, 217, 0.5);
  div button {
    text-align: start;
  }
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
  /* height: 80px; */
  border-radius: 10px;
  overflow: hidden;
  margin: 12px 0;
`;

const DetailMap = styled.button`
  display: ${(props) => (props.detail ? 'block' : 'none')};
  width: 9rem;
  height: 1.9rem;
  border-radius: 1rem;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.mainColor}`};
  color: ${({ theme }) => theme.colors.mainColor};
  margin-top: -0.5rem;
  margin-left: auto;
  font-weight: bold;
`;

const FeedContents = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
