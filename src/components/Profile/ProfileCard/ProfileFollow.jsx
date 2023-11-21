import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FollowCount = ({ follow, userProfile }) => {
  return (
    <Container>
      {/* 추후 button -> Link로 변경 각각 해당 하는 페이지로 이동*/}
      {follow === 'Follower' ? (
        <Link to={`/profile/${userProfile.accountname}/follower`}>
          <FollowerCount>{userProfile.followerCount}</FollowerCount>
          <Text>follwers</Text>
        </Link>
      ) : (
        // http://localhost:3000/sudo_charlie/follower
        <Link to={`/profile/${userProfile.accountname}/follow`}>
          <FollowingCount>{userProfile.followingCount}</FollowingCount>
          <Text>following</Text>
        </Link>
      )}
    </Container>
  );
};

export default FollowCount;


export const Container = styled.div`
`

export const FollowerCount = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blackText};
  font-size: ${({ theme }) => theme.fontSize.large};
`;
export const FollowingCount = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;
export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 0.6rem;
`