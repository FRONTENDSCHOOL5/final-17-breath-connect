import React from 'react';
import Follow from '../../components/common/User/Follow/Follow';
import styled from 'styled-components';

const FollowListPage = () => {
  return (
   <> 
    <ContentsWrapper>
     <FollowList> 
      <Follow />
      <Follow />
      <Follow />
      <Follow />
      <Follow />
      <Follow />
     </FollowList> 
    </ContentsWrapper>
    </>
  );
}
export default FollowListPage;


const ContentsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 4.8rem;
  margin-bottom: 6rem;
  padding: 2.4rem 1.6rem; 
`;
const FollowList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 16px;
  }
`;