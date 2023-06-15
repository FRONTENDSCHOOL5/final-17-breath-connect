import React, { useState } from 'react';
import styled from 'styled-components';
import basicProfile from '../../assets/images/basic-profile-l.svg';
import ButtonContainer from '../../components/common/Button/ButtonContainer';

const UserInfoCard = () => {
  let data = {
    profile: {
      _id: 'String',
      username: '달려라 하니',
      accountname: 'weniv_Mandarin',
      intro: '오늘도 난 달린다',
      image: '',
      // 본인이면 isfollow가 어떻게 나올까?. false?
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 2950,
      followingCount: 128,
    },
  };

  const [isfollow, setIsfollow] = useState(data.profile.isfollow);

  const handleFollow = () => {
    setIsfollow(!isfollow);
  };
  const handleUpdateProfile = () => {
    // 프로필 수정 페이지로 이동
  };
  const handleUploadRunning = () => {
    // 러닝 등록 페이지로 이동
  };

  // 지금 들어온 data가 본인의 프로필이면 확인을 하는 절차를 추가해야 한다.
  //  아마 _id와 상태관리 툴과 비교를 통해 진행 해야 할 것 같다.

  return (
    <Container>
      <InfoHeader>
        <button>
          <BoldText>{data.profile.followerCount}</BoldText>
          <FollowText>follwers</FollowText>
        </button>
        <div>
          <img
            src={data.profile.image ? data.profile.image : basicProfile}
            alt="유저 이미지"
          />
        </div>
        <button>
          <BoldBlurText>{data.profile.followingCount}</BoldBlurText>
          <FollowText>following</FollowText>
        </button>
      </InfoHeader>
      <UserProfile>
        <BoldText>{data.profile.username}</BoldText>
        <UsetNcikName>@ {data.profile.accountname}</UsetNcikName>
        <UserIntoroduce>{data.profile.intro}</UserIntoroduce>
      </UserProfile>
      {/* 나중에 확인 된 값을 넣어줘야한다. */}
      {true ? (
        <UserInteraction>
          {/* 팔로우 정보 바뀌면 api로 데이터 바꿔야함 */}
          <ButtonContainer
            text={isfollow ? '언팔로우' : '팔로우'}
            type={'M'}
            isClicked={isfollow}
            handleClick={handleFollow}
          />
        </UserInteraction>
      ) : (
        <UserInteraction>
          <ButtonContainer
            text={'프로필 수정'}
            type={'M'}
            isClicked={true}
            handleClick={handleUpdateProfile}
          />
          <ButtonContainer
            text={'러닝등록'}
            type={'M'}
            isClicked={true}
            handleClick={handleUploadRunning}
          />
        </UserInteraction>
      )}
    </Container>
  );
};
export default UserInfoCard;

const Container = styled.div`
  text-align: center;
  border-bottom: 6px solid #c4c4c4;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 14px;
  padding: 16px;
`;
const UserProfile = styled.div`
  text-align: center;
`;
const BoldText = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const BoldBlurText = styled.div`
  font-weight: bold;
  color: #767676;
  font-size: 18px;
`;

const UsetNcikName = styled.div`
  color: #767676;
  font-size: 12px;
`;
const UserIntoroduce = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #767676;
`;
const UserInteraction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 10px;
  margin-bottom: 26px;
`;

const FollowText = styled.div`
  font-size: 10px;
  color: #767676;
  margin-top: 6px;
`;
