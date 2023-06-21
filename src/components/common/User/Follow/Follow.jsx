import React, {useState} from 'react';
import styled from 'styled-components';
import ButtonContainer from '../../Button/ButtonContainer';

const Follow = ({ user }) => {
  const { username, userId, profileImage } = user;
  const [isFollowing, setIsFollowing] = useState(true);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <UserItem>
      <ProfileImage src={profileImage} alt='유저님의 프로필 사진' width='50' />
      <Wrapper>
        <UserName>{username}</UserName>
        <UserId>{userId}</UserId>
      </Wrapper>
      <ButtonWrapper>
        <ButtonContainer
          type={'S'}
          text={isFollowing ? '팔로우' : '취소'}
          isClicked={!isFollowing}
          handleClick={handleClick}
        ></ButtonContainer>
      </ButtonWrapper>
    </UserItem>
  );
};

export default Follow;

const UserItem = styled.li`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
`;

const UserName = styled.strong`
  display: block;
  margin-bottom: 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 500;
`;

const UserId = styled.strong`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textColor};
  ::before {
    content: '@ ';
  }
`;

const ProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 1px solid #767676;
`;

const ButtonWrapper = styled.button`
  margin-top: 0rem;
`;