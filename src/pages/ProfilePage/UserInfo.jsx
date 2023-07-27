import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountAtom } from '../../atoms/UserAtom';
import FollowCount from './FollowCount';
import basicProfile from '../../assets/images/basic-profile-l.svg';
import basicDarkProfile from '../../assets/images/basic-profile-l-dark.svg';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import { postFollow, deleteFollow } from '../../utils/Apis';
import { isDarkModeState } from '../../atoms/StylesAtom';


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
      <Header>
        <FollowCount follow="Follower" data={profile} />
        <ProfileImage>
          <img
            src={numberRegex.test(profile.image) ? profile.image : isDarkMode ? basicDarkProfile : basicProfile}
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

 const Container = styled.section`
  text-align: center;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.4rem;
  padding: 1.6rem;
`;

 const ProfileImage = styled.div`
  img {
    width: 11rem;
    height: 11rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

 const Profile = styled.ul`
  text-align: center;
`;

const UserName = styled.li`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.blackText};
`;

const AccountName = styled.li`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  margin-top: 0.6rem;
`;

const Introduction = styled.li`
  margin-top: 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.textColor};
`;

const Interaction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  gap: 1rem;
  margin-bottom: 2.6rem;
`;

const SelectionBox = styled.div`
  background-color: #f6f5f6;
  border: 0.01rem solid rgba(217, 217, 217, 0.5);
  border-bottom: none;
  color: ${({ theme }) => theme.colors.textColor};
  height: 3.4rem;
  text-align: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  padding-top: 1.1rem;
  strong {
    color: ${({theme}) => theme.colors.mainColor};
  }
  background-color: ${({theme}) => theme.colors.uploadBoxColor};
  
`;