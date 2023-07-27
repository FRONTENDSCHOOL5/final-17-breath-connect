import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import basicImg from '../../assets/images/basic-profile-m.svg';
import basicDarkImg from '../../assets/images/basic-profile-m-dark.svg';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import FeedMap from '../../components/Map/FeedMap';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import { postLike, deleteLike } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';
import {
  PostContainer,
  UserProfileImg,
  UserAccountName,
  ScheduleInfo,
  LocationInfo,
  CommentContainer,
  FeedInfo,
  UserName,
  UserFeedText,
  AppendAndComment,
  AppendButton,
  MapContents,
  PostContents,
  DetailButton,
} from './PostDetailPage/PostDetailPageStyle';
import { iconColorSelector } from '../../atoms/StylesAtom';
import { isDarkModeState } from '../../atoms/StylesAtom';
import Theme, { darkColors } from '../../styles/Theme';

const PostPage = ({ data, onButtonClick, userFeedTextStyle, theme }) => {
  const iconColor = useRecoilValue(iconColorSelector);
  const isDarkMode = useRecoilValue(isDarkModeState);
  const token = useRecoilValue(tokenAtom);
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
    const response = await postLike(token, postId);
    setPostLikeCount(response.post.heartCount);
    setPostLikeState(true);
  };

  /* 좋아요 취소 */
  const fetchDisLike = async () => {
    const response = await deleteLike(token, postId);
    setPostLikeCount(response.post.heartCount);
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
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <PostContainer>
      <h1 className="a11y-hidden">게시글 페이지</h1>
      <PostContents>
        <UserProfileImg
          src={
            numberRegex.test(data.author.image) ? data.author.image : isDarkMode ? basicDarkImg : basicImg
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
              <GlovalSprite id={isDarkMode ? 'icon-calendar-dark' : 'icon-calendar'} size={13} />
              <FeedInfo>
                {data.content[0] +
                  '요일' +
                  data.content.slice(1, 7) +
                  ' , ' +
                  data.content.slice(9, 14)}
              </FeedInfo>
            </ScheduleInfo>
            <LocationInfo>
              <GlovalSprite id={isDarkMode ? 'icon-location-dark' : 'icon-location'} size={13} />
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
                  id={isDarkMode ? 'icon-message-circle-dark' : 'icon-message-circle'}
                  size={12}
                  color={iconColor}
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
    </ThemeProvider>
  );
};
export default PostPage;
