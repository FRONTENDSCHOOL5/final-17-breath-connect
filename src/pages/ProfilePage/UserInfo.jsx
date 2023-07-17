import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountAtom } from '../../atoms/UserAtom';
import FollowCount from './FollowCount';
import basicProfile from '../../assets/images/basic-profile-l.svg';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import { postFollow, deleteFollow } from '../../utils/Apis';
import {
  Container,
  Header,
  ProfileImage,
  Profile,
  UserName,
  AccountName,
  Introduction,
  Interaction,
  SelectionBox,
} from './style/UserInfoStyle';

const UserInfo = ({ data, myProfile }) => {
  const navigate = useNavigate();
  const account = useRecoilValue(accountAtom);
  const [profile, setProfile] = useState(data);
  const numberRegex = /^https:\/\/api\.mandarin\.weniv\.co\.kr\/[/\w.]*$/;

  const handleFollow = async (e) => {
    const followResult = await postFollow(profile.accountname);
    setProfile(followResult.profile);
  };

  const handleUnFollow = async (e) => {
    const followResult = await deleteFollow(profile.accountname);
    setProfile(followResult.profile);
  };

  const handleBtnClick = () => {
    navigate(`/post/upload`);
  };

  /* 프로필 수정 페이지로 이동 */
  const goToProfileEdit = () => {
    if (profile.accountname === account) {
      navigate(`/profile/${profile.accountname}/editProfile`);
    }
  };

  return (
    <Container>
      <Header>
        <FollowCount follow="Follower" data={profile} />
        <ProfileImage>
          <img
            src={numberRegex.test(profile.image) ? profile.image : basicProfile}
            alt="유저 이미지"
          />
        </ProfileImage>
        <FollowCount follow="Following" data={profile} />
      </Header>
      <Profile>
        <UserName>{profile.username}</UserName>
        <AccountName>@ {profile.accountname}</AccountName>
        <Introduction>{profile.intro}</Introduction>
      </Profile>
      <Interaction>
        {!myProfile ? (
          <ButtonContainer
            type="M"
            text={profile.isfollow ? '언팔로우' : '팔로우'}
            handleClick={profile.isfollow ? handleUnFollow : handleFollow}
            isClicked={profile.isfollow}
          />
        ) : (
          <>
            <ButtonContainer
              type="M"
              text="러닝 등록"
              isClicked={true}
              handleClick={handleBtnClick}
            />
            <ButtonContainer
              type="M"
              text="프로필 수정"
              isClicked={true}
              handleClick={goToProfileEdit}
            />
          </>
        )}
      </Interaction>
      <SelectionBox>
        <strong>{profile.username}</strong>가 올린 글
      </SelectionBox>
    </Container>
  );
};

export default UserInfo;
