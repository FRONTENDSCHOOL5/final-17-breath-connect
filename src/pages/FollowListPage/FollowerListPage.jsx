import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { tokenAtom } from '../../atoms/UserAtom';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { getFollowerList } from '../../utils/Apis';
import Follow from '../../components/common/User/Follow/Follow';
import TopListNavHeader from '../../components/Header/TopListNavHeader';
import TabMenu from '../../components/Footer/TabMenu';

const FollowListPage = () => {  
  const token = useRecoilValue(tokenAtom);
  const account = useParams().id;
  console.log(account);
  const [followings, setFollowings] = useState([]);
    useEffect(() => {
    const followList = async () => {
      // 팔로워 리스트 목록
      const data = await getFollowerList(account);
      console.log(data); 
      setFollowings(data);
    };
    followList();
  }, [account, token]);

  return (
    <>
      <TopListNavHeader />
      <ContentsWrapper>
        <FollowList>
          {followings.length > 0 ? (
            followings.map((user) => (
              <Follow
                key={user._id}
                user={{
                  _id: user._id,
                  username: user.username,
                  intro: user.intro,
                  image: user.image,
                  isfollow: user.isfollow,
                }}
              />
            ))
          ) : (
            <NoFollowersText>팔로우한 사용자가 없습니다.</NoFollowersText>
          )}
        </FollowList>
      </ContentsWrapper>
      <TabMenu />
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

const NoFollowersText = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: #767676;
`;