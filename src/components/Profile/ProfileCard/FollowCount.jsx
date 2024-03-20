import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FollowCount = ({ followType, userProfile }) => {
  return (
    <>
      {followType === 'Followers' ? (
        <Link to={`/profile/${userProfile.accountname}/follower`}>
          <Container>
            <Count>{userProfile.followerCount}</Count>
            <span>followers</span>
          </Container>
        </Link>
      ) : (
        <Link to={`/profile/${userProfile.accountname}/following`}>
          <Container>
            <Count>{userProfile.followingCount}</Count>
            <span>followings</span>
          </Container>
        </Link>
      )}
    </>
  );
};

export default FollowCount;

const Container = styled.div`
  span {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

const Count = styled.strong`
  font-weight: 600;
  display: block;
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;