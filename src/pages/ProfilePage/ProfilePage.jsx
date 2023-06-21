import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import TopBasicNavHeader from '../../components/Header/TopBasicNavHeader';
import Feed from '../FeedPage/Feed';
import { getUserPosts, fetchProfile } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const [posts, setPosts] = useState({ post: [] });
  const location = useLocation();
  const userToken = useRecoilValue(tokenAtom);
  let data = location.state?.data;

  useEffect(() => {
    if (!data) {
      console.log(11);
      const account = JSON.parse(localStorage.getItem('account'));
      console.log(userToken, account);
      fetchProfile(userToken, account)
        .then((response) => {
          data = response.data;
          fetchUserPosts();
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    } else {
      fetchUserPosts();
    }
  }, [data, userToken]);

  const fetchUserPosts = async () => {
    try {
      const postData = await getUserPosts(userToken, data.accountname, 10, 0);
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  return (
    <>
      <TopBasicNavHeader />
      <UserInfo
        data={data}
        myProfile={
          data.accountname === JSON.parse(localStorage.getItem('account'))
            ? true
            : false
        }
      />
      {posts.post &&
        posts.post.map((post, index) => <Feed key={index} data={post} />)}
    </>
  );
};

export default ProfilePage;
