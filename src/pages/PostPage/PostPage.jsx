import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import JoinButton from '../../components/common/Button/ButtonContainer';
import Map from '../../components/Map/FeedMap';
import { isDarkModeState } from '../../atoms/StylesAtom';
import { tokenAtom } from '../../atoms/UserAtom';
import { postLike, deleteLike } from '../../api/post';
import basicImg from '../../assets/images/basic-profile-m.svg';
import basicDarkImg from '../../assets/images/basic-profile-m-dark.svg';
import GlobalSprite from '../../assets/sprite/GlobalSprite';
import {
  Container,
  Title,
  Post,
  Image,
  Contents,
  ProfileButton,
  ModalButton,
  UserAccountName,
  ScheduleSection,
  LocationSection,
  MapSection,
  ContentsSection,
  ButtonContainer,
  Comment,
  Text,
  UserName,
  Participation,
  DetailButton,
} from './PostPageStyle';

const PostPage = ({ data, showModal, setPickedPost, theme, accountName }) => {
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

  function isJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (error) {
      return false;
    }
  }

  return (
      <Container>
        <Title>게시글 페이지</Title>
        <Post>
          <Image
            src={
              numberRegex.test(data.author.image)
                ? data.author.image
                : isDarkMode
                ? basicDarkImg
                : basicImg
            }
          />
          <Contents>
            {/* 프로필로 이동 */}
            <ProfileButton onClick={handleProfileClick} className="go-to-profile">
              <UserName>{data.author.username}</UserName>
              <UserAccountName>@ {data.author.accountname}</UserAccountName>
            </ProfileButton>
            {/* 신고, 공유 모달 */}
            <ModalButton
              onClick={() => {
                showModal(data);
              }}
              className="post-modal"
            >
              <GlobalSprite
              id={'s-icon-more-vertical'}
              color={'white'}
              size={18}
            />
            </ModalButton>
            {/* 피드로 이동 */}
            <DetailButton
              onClick={handleFeedClick}
              className="go-to-post-detail"
              detail={detail}
            >
              <ScheduleSection>
                <GlobalSprite
                  id={isDarkMode ? 'icon-calendar-dark' : 'icon-calendar'}
                  size={13}
                />
                <Text>
                  {data &&
                    data.content.substring(3, 4) +
                      '요일, ' +
                      data.content.substring(5, 10) +
                      ', ' +
                      (isJSON(data.content) ? JSON.parse(data.content)[1] : '')}
                </Text>
              </ScheduleSection>
              <LocationSection>
                <GlobalSprite
                  id={isDarkMode ? 'icon-location-dark' : 'icon-location'}
                  size={13}
                />
                <Text>
                  {startPoint}~{endPoint}
                </Text>
              </LocationSection>
              <MapSection>
                <Map data={data.image} detail={detail} />
              </MapSection>
              <ContentsSection>
                {data &&
                  (isJSON(data.content)
                    ? JSON.parse(data.content)[2].toString()
                    : '')}
              </ContentsSection>
              <ButtonContainer>
                <Participation>{postLikeCount}명 참여</Participation>
                <Comment>
                  <GlobalSprite
                    id={
                      isDarkMode
                        ? 'icon-message-circle-dark'
                        : 'icon-message-circle'
                    }
                    size={12}
                    color={'transparent'}
                  />
                  <Text>{data.commentCount}</Text>
                </Comment>
              </ButtonContainer>
            </DetailButton>
            </Contents>
        </Post>
        {detail ? (
          <JoinButton
            type={'XL'}
            text={postLikeState ? '참가하기 취소' : '참가하기'}
            isClicked={postLikeState}
            handleClick={handleToggleLike}
          />
        ) : (
          <></>
        )}
      </Container>
  );
};
export default PostPage;
