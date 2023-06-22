import React from 'react';
import styled from 'styled-components';
import Follow from '../../components/common/User/Follow/Follow';
import TopListNavHeader from '../../components/Header/TopListNavHeader';
import TabMenu from '../../components/Footer/TabMenu';

const FollowListPage = () => { 
  // 더미 데이터 확인용 (나중에 삭제)
  const dummyData = [
    {
      id: 1,
      username: '애월읍 위니브 감귤농장',
      userId: 'weniv_Madarin',
      profileImage: 'profileImageURL1',
    },
    {
      id: 2,
      username: '달려달려',
      userId: 'run_run',
      profileImage: 'profileImageURL2',
    },
    {
      id: 3,
      username: '위니드',
      userId: 'weneed_',
      profileImage: 'profileImageURL1',
    },
    {
      id: 4,
      username: '숨Co',
      userId: 'breath_connect',
      profileImage: 'profileImageURL2',
    },

    
  ];

  return (
    <> 
      <TopListNavHeader/>
      <ContentsWrapper>
        <FollowList> 
          {dummyData.map((user) => (
            <Follow key={user.id} user={user} />
          ))}
        </FollowList> 
      </ContentsWrapper>
      <TabMenu/>
    </>
  );
};

export default FollowListPage;

const ContentsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 27.5rem;
  padding: 2.4rem 1.6rem; 
`;

const FollowList = styled.ul`
  li {
    margin-bottom: 0.8rem;
    height: 5rem;
  }
`;