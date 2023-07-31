import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FollowerCount, FollowingCount, Text } from './FollowCountStyle'

const FollowCount = ({ follow, data }) => {
  return (
    <Container>
      {/* 추후 button -> Link로 변경 각각 해당 하는 페이지로 이동*/}
      {follow === 'Follower' ? (
        <Link to={`/profile/${data.accountname}/follower`}>
          <FollowerCount>{data.followerCount}</FollowerCount>
          <Text>follwers</Text>
        </Link>
      ) : (
        // http://localhost:3000/sudo_charlie/follower
        <Link to={`/profile/${data.accountname}/follow`}>
          <FollowingCount>{data.followingCount}</FollowingCount>
          <Text>following</Text>
        </Link>
      )}
    </Container>
  );
};

export default FollowCount;