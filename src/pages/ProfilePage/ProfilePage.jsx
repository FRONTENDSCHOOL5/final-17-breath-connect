import React from 'react';
import UserInfo from './UserInfo';
import TopBasicNavHeader from '../../components/Header/TopBasicNavHeader';
import Feed from '../FeedPage/Feed';

const ProfilePage = () => {
  const data = {
    profile: {
      _id: 'q',
      username: '애월읍 위니브 감귤농장',
      accountname: 'weniv_Mandarin',
      intro: '애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장',
      image: '',
      isfollow: false,
      following: [],
      follower: [],
      followerCount: 2950,
      followingCount: 128,
    },
  };
  const postData = {
    post: [
      {
        id: String,
        content: '안녕하세요. 2 입니다.',
        image: '',
        createdAt: String,
        updatedAt: String,
        hearted: false,
        heartCount: 0,
        commentCount: 0,
        author: {
          _id: '작성자 id',
          username: '2',
          accountname: '2',
          following: [],
          follower: ['follower id'],
          followerCount: 1,
          followingCount: 0,
        },
      },
    ],
  };

  return (
    <>
      <TopBasicNavHeader />
      <UserInfo data={data} />
      {postData.post.map((post, index) => (
        <Feed key={index} data={post} />
      ))}
    </>
  );
};
export default ProfilePage;
