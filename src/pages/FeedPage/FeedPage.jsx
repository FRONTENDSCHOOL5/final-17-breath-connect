import React from 'react';
import Feed from './Feed';
import TopMainNavHeader from '../../components/Header/TopMainNavHeader';
import FeedNoUser from './FeedNoUser';

const FeedPage = () => {
  const data = {
    posts: [
      {
        id: '',
        content: '안녕하세요. 1 입니다.',
        image: ``,
        createdAt: ``,
        updatedAt: `[
          { "lat": 37.35448853420498, "lng": 126.94226650699949 },
          { "lat": 37.35520060393074, "lng": 126.9427964600851 },
          { "lat": 37.35402101626464, "lng": 126.94438882564852 },
          { "lat": 37.353696640866815, "lng": 126.94437777796357 },
          { "lat": 37.353688512116875, "lng": 126.94628528269583 },
          { "lat": 37.354859828001864, "lng": 126.94623929946408 },
          { "lat": 37.355417497837074, "lng": 126.94415076351804 },
          { "lat": 37.35577752245515, "lng": 126.94333781207574 },
          { "lat": 37.35561465876302, "lng": 126.94193831388347 },
          { "lat": 37.354380022609334, "lng": 126.94147649463669 },
          { "lat": 37.35365948362037, "lng": 126.94205268949663 },
          { "lat": 37.35347978754935, "lng": 126.94310251335861 },
          { "lat": 37.35403843578141, "lng": 126.9431246657659 },
          { "lat": 37.35418236590925, "lng": 126.94263921408516 },
          { "lat": 37.354380509837604, "lng": 126.94246975713983 },
          { "lat": 37.35442547326675, "lng": 126.94228912946578 }
        ]`,
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
    // posts: [],
  };
  // follow 한 사용자가 없을 때

  return (
    <>
      <TopMainNavHeader />
      {data.posts.length === 0 ? (
        <FeedNoUser />
      ) : (
        data.posts.map((post, index) => <Feed key={index} data={post} />)
      )}
    </>
  );
};

export default FeedPage;
