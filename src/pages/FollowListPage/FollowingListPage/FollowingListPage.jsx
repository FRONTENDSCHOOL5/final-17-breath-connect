import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {ThemeProvider} from 'styled-components'
import Following from '../../../components/common/User/Follow/Follow';
import Header from '../../../components/Header/TopListNavHeader';
import Footer from '../../../components/Footer/TabMenu';
import { tokenAtom } from '../../../atoms/UserAtom';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import { getFollowingList } from '../../../api/follow';
import Theme, { darkColors } from '../../../styles/Theme';
import Logo from '../../../assets/images/home-logo.svg';
import DarkLogo from '../../../assets/images/home-logo-dark.svg';
import {
  Container,
  Title,
  Main,
  List,
  NotFollowing,
  Image,
  Text,
} from '../FollowingListPage/FollowingListPageStyle';


const FollowingListPage = ({theme}) => {
  const account = useParams().id;
  const isDarkMode = useRecoilValue(isDarkModeState);
  const token = useRecoilValue(tokenAtom);
  const [followings, setFollowings] = useState([]);
  useEffect(() => {
    const followList = async () => {
      const data = await getFollowingList(account);
      setFollowings(data);
    };
    followList();
  }, [account, token]);

  return (
    <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <Container>
      <Header />
      <Main>
        <Title>팔로워목록</Title>
        <List>
          {followings.length > 0 ? (
            followings.map((user) => (
              <Following
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
            <NotFollowing>
              <Image src={isDarkMode ? DarkLogo : Logo} alt="NotFollowing로고" className="icon" />
              <Text>팔로잉한 사용자가 없습니다.</Text>
            </NotFollowing>
          )}
        </List>
      </Main>
      <Footer />
    </Container>
    </ThemeProvider>
  );
};

export default FollowingListPage;
