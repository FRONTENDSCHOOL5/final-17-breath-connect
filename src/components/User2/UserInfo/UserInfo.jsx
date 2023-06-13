import React from 'react';
import styled from 'styled-components';

const UserNameIntroduce = ({ userName, userIntroduce }) => {
  return (
    <WrapperUser>
      <UserName>{userName}</UserName>
      <UserIntroduce>{userIntroduce}</UserIntroduce>
    </WrapperUser>
  );
};

export default UserNameIntroduce;

const WrapperUser = styled.div`
   padding: 5px 6px 6px 12px;
   max-width: 240px;
    margin: 5px 0 6px 12px;
`;

const UserName = styled.strong`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
`;

const UserIntroduce = styled.p`
  margin-top: 6px;
  font-size: 1.2rem;
  line-height: 15px;
  color: #767676;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

