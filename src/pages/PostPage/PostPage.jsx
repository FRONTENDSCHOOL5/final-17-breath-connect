import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';
import basicImg from '../../assets/images/basic-profile-m.svg';
import GlovalSprite from '../../assets/sprite/GlovalSprite';
import FeedMap from '../../components/Map/FeedMap';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonContainer from '../../components/common/Button/ButtonContainer';

const PostPage = ({ data }) => {
  const [startPoint, setStartPoint] = useState(''); // startPoint 상태 추가
  const [endPoint, setEndPoint] = useState(''); // endPoint 상태 추가
  const location = useLocation();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(false);
  const numberRegex = /^https:\/\/api\.mandarin\.weniv\.co\.kr\/[\w.]*$/;

  /* Post 디테일 */
  const handleFeedClick = (e) => {
    if (location.pathname !== `/post/${data.id}`) {
      setDetail(true);
      navigate(`/post/${data.id}`, {
        state: { data: data },
      });
    }
  };
  console.log(data.image);

  const handleProfileClick = (e) => {
    navigate(`/profile/${data.author.username}`, {
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


  return (
    <Container>
      <FeedContents>
        <UserProfileImg
          src={
            numberRegex.test(data.author.image) ? data.author.image : basicImg
          }
        />
        <div>
          <button onClick={handleProfileClick}>
            <UserName>{data.author.username}</UserName>
            <FeedNickName>@ {data.author.accountname}</FeedNickName>
          </button>
          <button onClick={handleFeedClick}>
            <div>
              <GlovalSprite id={'icon-calendal'} size={13} />
              <FeedInfo>{data.content[0] + '요일'+ data.content.slice(1,7)+' , '+data.content.slice(9, 14)}</FeedInfo>
            </div>
            <div>
              <GlovalSprite id={'icon-location'} size={13} />
              <FeedInfo>{startPoint}~{endPoint}</FeedInfo>
            </div>
            <MapContents>
              {/* <FeedMap data={data.updatedAt} detail={detail} /> */}
            </MapContents>
            <UserFeedText>{data.content.slice(15)}</UserFeedText>
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
      {detail ? <ButtonContainer type={'XL'} text={'참가하기'} /> : <></>}
    </Container>
  );
};
export default PostPage;

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
  border-radius: 50%;
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
