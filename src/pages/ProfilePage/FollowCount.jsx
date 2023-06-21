import React from 'react';
import styled from 'styled-components';

const FollowCount = ({ follow, data }) => {
  return (
    <>
      {/* 추후 button -> Link로 변경 각각 해당 하는 페이지로 이동*/}
      {follow === 'Follower' ? (
        <button>
          <BoldText>{data.followerCount}</BoldText>
          <FollowText>follwers</FollowText>
        </button>
      ) : (
        <button>
          <BoldBlurText>{data.followingCount}</BoldBlurText>
          <FollowText>following</FollowText>
        </button>
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
