import React from 'react';
import styled from 'styled-components';
import BasicProfile from '../../assets/images/basic-profile-xs.svg';

const FeedComment = ({ data }) => {
  return (
    <Container>
      <div>
        <img src={BasicProfile} alt="" />
      </div>
      <UserContents>
        <UserInfo>
          <UserName>김용덕</UserName>
          <TimeAgo>qwe</TimeAgo>
        </UserInfo>
        <Contents>qwe</Contents>
      </UserContents>
    </Container>
  );
};

export default FeedComment;

const Container = styled.div`
  display: flex;
  padding: 15px;
  box-shadow: inset 0 0 10px red;
`;

const UserContents = styled.div`
  padding: 10px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
`;

const UserName = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 15px;
`;

const TimeAgo = styled.span`
  color: #767676;
  padding-left: 6px;
`;

const Contents = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
