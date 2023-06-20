import React, { useState } from 'react';
import Feed from './Feed';
import TopMainNavHeader from '../../components/Header/TopMainNavHeader';
import FeedNoUser from './FeedNoUser';
import TabMenu from '../../components/Footer/TabMenu';

import { fetchPosts } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';

const FeedPage = () => {
  let data = [];
  let loadedCount = 0;
  const loadCount = 10;
  const userToken = useRecoilValue(tokenAtom);

  const fetchData = async () => {
    const newData = await fetchPosts(userToken, loadedCount, loadCount);
    data = [...data, ...newData];
    loadedCount += loadCount;
  };

  fetchData();

  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // 스크롤이 페이지 하단에 도달한 경우
      fetchData(); // 추가 데이터 가져오기
    }
  });

  return (
    <>
      <TopMainNavHeader />
      {data.posts.length === 0 ? (
        <FeedNoUser />
      ) : (
        data.posts.map((post, index) => <Feed key={index} data={post} />)
      )}
      <TabMenu />
    </>
  );
};

export default FeedPage;
