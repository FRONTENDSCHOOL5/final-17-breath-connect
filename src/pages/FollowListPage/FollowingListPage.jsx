import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { tokenAtom } from '../../atoms/UserAtom';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { getFollowingList } from '../../utils/Apis';
import Follow from '../../components/common/User/Follow/Follow';
import TopListNavHeader from '../../components/Header/TopListNavHeader';
import TabMenu from '../../components/Footer/TabMenu';
import Logo from '../../assets/images/home-logo.svg';

const FollowListPage = () => {  
  const token = useRecoilValue(tokenAtom);
  const account = useParams().id;
  console.log(account);
  const [followings, setFollowings] = useState([]);
    useEffect(() => {
    const followList = async () => {
      // 팔로잉 리스트 목록
      const data = await getFollowingList(account);
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
                  isfollow: true,
                }}
              />
            ))
          ) : (
              <>  
                <Icon src={Logo} alt="NotFollow로고" className="icon" />
                <NotFollowersText>팔로우한 사용자가 없습니다.</NotFollowersText>
              </>
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
  margin-bottom: 20rem;
  padding: 2.4rem 1.6rem;
`;

const FollowList = styled.ul`
  li {
    margin-bottom: 0.8rem;
    height: 5rem;
  }
`;

const Icon = styled.img`
  width: 100%;
  width: 14.8rem;
  height: 20rem;
  margin: 5rem 10rem 1rem;
`;

const NotFollowersText = styled.p`
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.fontSize.small};
  text-align: center;
`;