import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import basicImg from '../../assets/images/basic-profile-m.svg';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import FeedMap from '../../components/Map/FeedMap';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import { postLike, deleteLike } from '../../utils/Apis';

const PostPage = ({ data, onButtonClick, userFeedTextStyle }) => {
  const [startPoint, setStartPoint] = useState(''); // startPoint 상태 추가
  const [endPoint, setEndPoint] = useState(''); // endPoint 상태 추가
  const location = useLocation();
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [postLikeState, setPostLikeState] = useState(data.hearted);
  const [postLikeCount, setPostLikeCount] = useState(data.heartCount);
  const [detail, setDetail] = useState(
    location.pathname === `/post/${data.author.accountname}`
  );

  const numberRegex = /^https:\/\/api\.mandarin\.weniv\.co\.kr\/[/\w.]*$/;

  const handleFeedClick = (e) => {
    e.stopPropagation();
    if (location.pathname !== `/post/${data.author.accountname}`) {
      setDetail(true);
      navigate(`/post/${data.author.accountname}`, {
        state: { data: data },
      });
    }
  };

  /* Post -> Post Detail 참가 */
  const handleProfileClick = (e) => {
    navigate(`/profile/${data.author.accountname}`, {
      state: { data: data },
    });
  };

  useEffect(() => {
    if (data.image) {
      try {
        const parsing = JSON.parse(data.image);
        const startLat = parsing[0].lat;
        const startLng = parsing[0].lng;
        const geocoder = new window.kakao.maps.services.Geocoder();
        const startLatlng = new window.kakao.maps.LatLng(startLat, startLng);

        geocoder.coord2Address(
          startLatlng.getLng(),
          startLatlng.getLat(),
          (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const startPoint = result[0].address.address_name;
              setStartPoint(startPoint);
            }
          }
        );

        const endLat = parsing[parsing.length - 2].lat;
        const endLng = parsing[parsing.length - 2].lng;
        const endLatlng = new window.kakao.maps.LatLng(endLat, endLng);

        geocoder.coord2Address(
          endLatlng.getLng(),
          endLatlng.getLat(),
          (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const endPoint = result[0].address.address_name;
              setEndPoint(endPoint);
            }
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  }, [data.image]);

  const postId = data.id;
  /* 좋아요 기능 */
  const fetchLike = async () => {
    const response = await postLike(postId);
    setPostLikeCount(response.post.heartCount);
    setPostLikeState(true);
  };

  /* 좋아요 취소 */
  const fetchDisLike = async () => {
    const response = await deleteLike(postId);
    setPostLikeCount(response.post.heartCount);
    console.log(response);
    setPostLikeState(false);
  };

  /* 좋아요 토글 */
  const handleToggleLike = async (e) => {
    if (liked) {
      await fetchDisLike();
      setLiked(false);
    } else {
      await fetchLike();
      setLiked(true);
    }
  };

  return (
    <PostContainer>
      <h1 className="a11y-hidden">게시글 페이지</h1>
      <PostContents>
        <UserProfileImg
          src={
            numberRegex.test(data.author.image) ? data.author.image : basicImg
          }
        />
        <div>
          {/* 프로필로 이동 */}
          <button onClick={handleProfileClick} className="go-to-profile">
            <UserName>{data.author.username}</UserName>
            <UserAccountName>@ {data.author.accountname}</UserAccountName>
          </button>
          {/* 신고, 공유 모달 */}
          <button onClick={onButtonClick} className="post-modal">
            <GlovalSprite
              id={'s-icon-more-vertical'}
              color={'white'}
              size={18}
            />
          </button>
          {/* 피드로 이동 */}
          <DetailButton
            onClick={handleFeedClick}
            className="go-to-post-detail"
            detail={detail}
          >
            <ScheduleInfo>
              <GlovalSprite id={'icon-calendal'} size={13} />
              <FeedInfo>
                {data.content[0] +
                  '요일' +
                  data.content.slice(1, 7) +
                  ' , ' +
                  data.content.slice(9, 14)}
              </FeedInfo>
            </ScheduleInfo>
            <LocationInfo>
              <GlovalSprite id={'icon-location'} size={13} />
              <FeedInfo>
                {startPoint}~{endPoint}
              </FeedInfo>
            </LocationInfo>
            <MapContents>
              <FeedMap data={data.image} detail={detail} />
            </MapContents>
            <UserFeedText style={userFeedTextStyle}>
              {data.content.slice(15)}
            </UserFeedText>
            <AppendAndComment>
              <AppendButton>{postLikeCount}명 참여</AppendButton>
              <CommentContainer>
                <GlovalSprite
                  id={'icon-message-circle'}
                  size={12}
                  color={'white'}
                />
                <FeedInfo>{data.commentCount}</FeedInfo>
              </CommentContainer>
            </AppendAndComment>
          </DetailButton>
        </div>
      </PostContents>
      {detail ? (
        <ButtonContainer
          type={'XL'}
          text={postLikeState ? '참가하기 취소' : '참가하기'}
          isClicked={postLikeState}
          handleClick={handleToggleLike}
        />
      ) : (
        <></>
      )}
    </PostContainer>
  );
};
export default PostPage;

const PostContainer = styled.div`
  padding: 1.6rem;
  box-shadow: 0 0.1rem 0 rgba(217, 217, 217, 0.5);
  div button {
    text-align: start;
  }
  .post-modal {
    float: right;
  }
  .go-to-post-detail {
    width: 30rem;
  }
`;

const UserProfileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  margin-right: 1.2rem;
  border-radius: 50%;
`;

const UserAccountName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 1.6rem;
`;

const ScheduleInfo = styled.p`
  margin-bottom: 0.5rem;
`;

const LocationInfo = styled.p`
  margin-bottom: 0.5rem;
`;

const CommentContainer = styled.div`
  padding: 0.3rem;
`;

const FeedInfo = styled.span`
  width: 30rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.2rem;
  margin-bottom: 1.6rem;
`;

const AppendAndComment = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const AppendButton = styled.div`
  background-color: rgba(101, 33, 211, 0.043);
  color: ${({ theme }) => theme.colors.mainColor};
  padding: 0.5rem 1rem 0rem;
  border-radius: 1rem;
  z-index: 1;
`;

const MapContents = styled.div`
  width: 30.4rem;
  /* height: 80px; */
  border-radius: 1rem;
  overflow: hidden;
  margin: 1.2rem 0rem;
`;

const PostContents = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const DetailButton = styled.button`
  pointer-events: ${(props) => (props.detail ? 'none' : 'auto')};
  cursor: ${(props) => (props.detail ? 'not-allowed' : 'pointer')};
`;
