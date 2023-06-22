import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FollowCount = ({ follow, data }) => {
  return (
    <>
      {/* 추후 button -> Link로 변경 각각 해당 하는 페이지로 이동*/}
      {follow === 'Follower' ? (
        <Link to={`/profile/${data.accountname}/follower`}>
          <BoldText>{data.followerCount}</BoldText>
          <FollowText>follwers</FollowText>
        </Link>
      ) : (
        // http://localhost:3000/sudo_charlie/follower
        <Link to={`/profile/${data.accountname}/follow`}>
          <BoldBlurText>{data.followingCount}</BoldBlurText>
          <FollowText>following</FollowText>
        </Link>
      )}
    </>
  );
};

export default FollowCount;

const BoldText = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.large};
`;
const BoldBlurText = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;
const FollowText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 0.6rem;
`;
