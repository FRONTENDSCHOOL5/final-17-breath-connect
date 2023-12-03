import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Button from '../../common/Button/Button';
import FollowCount from './FollowCount';
import { userInfoAtom } from '../../../atoms/UserAtom';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import { postFollow, deleteFollow } from '../../../api/follow';
import basicProfile from '../../../assets/images/basic-profile-l.svg';
import basicDarkProfile from '../../../assets/images/basic-profile-l-dark.svg';
import { PATTERN } from '../../../constants/validation';

const ProfileCard = ({ userProfile, myProfile }) => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);
  const account = userInfo.account;
  const isDarkMode = useRecoilValue(isDarkModeState);
  const [profile, setProfile] = useState(userProfile);

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
        <FollowCount followType="Followers" userProfile={profile} />
        <Image
          src={
            PATTERN.PROFILEIMG.test(userProfile.image)
              ? userProfile.image
              : isDarkMode
                ? basicDarkProfile
                : basicProfile
          }
          alt="유저 이미지"
        />
      <FollowCount followType="Followings" userProfile={profile} />
      </ProfileSection>
      <UserSection>
        <UserName>{userProfile.username}</UserName>
        <AccountName>@ {userProfile.accountname}</AccountName>
        <Introduction>{userProfile.intro}</Introduction>
      </UserSection>
      <ButtonSection>
        {!myProfile ? (
          <Button
            size="M"
            text={profile.isfollow ? '언팔로우' : '팔로우'}
            handleClick={profile.isfollow ? handleUnFollow : handleFollow}
            isClicked={profile.isfollow}
            isDarkMode={isDarkMode}
          />
        ) : (
          <>
            <Button
              size="M"
              text="러닝 등록"
              isClicked={true}
              isDarkMode={isDarkMode}
              handleClick={handleBtnClick}
            />
            <Button
              size="M"
              text="프로필 수정"
              isClicked={true}
              isDarkMode={isDarkMode}
              handleClick={goToProfileEdit}
            />
          </>
        )}
      </ButtonSection>
      <PostSection>
        <UserPost>{userProfile.username}</UserPost>가 올린 글
      </PostSection>
    </Container>
  )
};

export default ProfileCard;

const Container = styled.div`
background-color: ${({ theme }) => theme.colors.backgroundColor};
text-align: center;
`;

const ProfileSection = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
padding: 1.6rem;
margin-top: 1.4rem;
`;

const Image = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  object-fit: cover;
`

const UserSection = styled.ul`
  text-align: center;
`;

const UserName = styled.li`
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: bold;
`;

const AccountName = styled.li`
  margin-top: 0.6rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
`;

const Introduction = styled.li`
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  margin-bottom: 2.6rem;
  gap: 1rem;
`;

const PostSection = styled.section`
  height: 3.4rem;
  padding-top: 1.1rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({theme}) => theme.colors.uploadBoxColor};
  border: 0.01rem solid rgba(217, 217, 217, 0.5);
  border-bottom: none;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  font-weight: 400;
  text-align: center;
`;

const UserPost = styled.strong`
  color: ${({ theme }) => theme.colors.mainColor};
`