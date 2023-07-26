import React, { useState, useEffect } from 'react';
import { tokenAtom } from '../../../atoms/UserAtom';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { getFollowerList } from '../../../utils/Apis';
import Follow from '../../../components/common/User/Follow/Follow';
import TopListNavHeader from '../../../components/Header/TopListNavHeader';
import TabMenu from '../../../components/Footer/TabMenu';
import Logo from '../../../assets/images/home-logo.svg';
import DarkLogo from '../../../assets/images/home-logo-dark.svg';

import {
  Title,
  Main,
  FollowList,
  Icon,
  Text,
} from './FollowerListPageStyle';

import {ThemeProvider} from 'styled-components'
import Theme, { darkColors } from '../../../styles/Theme';
import { isDarkModeState } from '../../../atoms/StylesAtom';

const FollowerListPage = ({theme}) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
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
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <>
      <TopListNavHeader />
      <Main>
        <Title>팔로워목록</Title>
        <FollowList>
          {followings.length > 0 ? (
            followings.map((user) => (
              <Follow
                key={user._id}
                user={{
                  _id: user._id,
                  username: user.username,
                  accountname: user.accountname,
                  intro: user.intro,
                  image: user.image,
                  isfollow: user.isfollow,
                }}
              />
            ))
          ) : (
            <>
              <Icon src={isDarkMode ? DarkLogo : Logo} alt="NotFollow로고" className="icon" />
              <Text>팔로워한 사용자가 없습니다.</Text>
            </>
          )}
        </FollowList>
      </Main>
      <TabMenu />
    </>
    </ThemeProvider>
  );
};

export default FollowerListPage;
