import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Button from '../../components/common/Button/ButtonContainer';
import FollowCount from './FollowCount';
import { accountAtom } from '../../atoms/UserAtom';
import { isDarkModeState } from '../../atoms/StylesAtom';
import { postFollow, deleteFollow } from '../../utils/Apis';
import basicProfile from '../../assets/images/basic-profile-l.svg';
import basicDarkProfile from '../../assets/images/basic-profile-l-dark.svg';
import { Container, UserSection, Image, ProfileSection, UserName, AccountName, Introduction, ButtonSection, PostSection, Text } from './UseInfoStyle'

const UserInfo = ({ data, myProfile }) => {
  const navigate = useNavigate();
  const account = useRecoilValue(accountAtom);
  const isDarkMode = useRecoilValue(isDarkModeState);
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
      <ProfileSection>
        <FollowCount follow="Follower" data={data} />
        <Image
          src={numberRegex.test(data.image) ? data.image : isDarkMode ? basicDarkProfile : basicProfile}
          alt="유저 이미지"
        />
        <FollowCount follow="Following" data={data} />
      </ProfileSection>
      <UserSection>

        <UserName>{data.username}</UserName>
        <AccountName>@ {data.accountname}</AccountName>
        <Introduction>{data.intro}</Introduction>
      </UserSection>
      <ButtonSection>
        {!myProfile ? (
          <Button
            type="M"
            text={profile.isfollow ? '언팔로우' : '팔로우'}
            handleClick={profile.isfollow ? handleUnFollow : handleFollow}
            isClicked={profile.isfollow}
          />
        ) : (
          <>
            <Button
              type="M"
              text="러닝 등록"
              isClicked={true}
              handleClick={handleBtnClick}
            />
            <Button
              type="M"
              text="프로필 수정"
              isClicked={true}
              handleClick={goToProfileEdit}
            />
          </>
        )}
      </ButtonSection>
      <PostSection>
        <Text>{data.username}</Text>가 올린 글
      </PostSection>
    </Container>
  );
};

export default UserInfo;