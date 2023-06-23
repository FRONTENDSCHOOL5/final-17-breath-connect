import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import TopBasicNavHeader from '../../components/Header/TopBasicNavHeader';
import Feed from '../FeedPage/Feed';
import { getUserProfile, getMyPost } from '../../utils/Apis';
import { getUserPosts } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom, accountAtom } from '../../atoms/UserAtom';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const userToken = useRecoilValue(tokenAtom);
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState();
  const [accountName, setAccountName] = useState('');

  useEffect(() => {
    setAccountName(
      location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    );
  }, []);

  useEffect(() => {
    if (accountName) {
      const fetchData = async () => {
        try {
          await getProfile();
          await getPost();
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchData();
    }
  }, [accountName]);

  const getProfile = async () => {
    try {
      const profileData = await getUserProfile(userToken, accountName);
      setProfile(profileData.profile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const getPost = async () => {
    try {
      const postData = await getMyPost(accountName, 10, 0);
      setPosts(postData.post);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  return (
    <>
      <TopBasicNavHeader />
      {profile && (
        <UserInfo
          data={profile}
          myProfile={
            JSON.parse(localStorage.getItem('recoil-persist'))[
              'accountAtom'
            ] === accountName
          }
        />
      )}
      {posts.length > 0 &&
        posts.map((post, index) => <Feed key={index} data={post} />)}
    </>
  );
};

export default ProfilePage;
