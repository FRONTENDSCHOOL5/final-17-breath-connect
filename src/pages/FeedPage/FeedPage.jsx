import React, { useEffect, useState } from 'react';
import PostPage from '../PostPage/PostPage';
import TopMainNavHeader from '../../components/Header/TopMainNavHeader';
import FeedNoUser from './FeedNoUser';
import TabMenu from '../../components/Footer/TabMenu';

import { getFollowFeed } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';

const FeedPage = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const fetchData = async () => {
    if (isFetchingData) return;
    setIsFetchingData(true);

    console.log(limit, skip);
    const newData = await getFollowFeed(limit, skip);
    if (newData.length > 0) {
      setData((prevData) => [...prevData, ...newData]);
      setSkip((prevSkip) => prevSkip + limit);
    }

    setIsFetchingData(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skip]);

  return (
    <>
      <TopMainNavHeader />
      {!data ? (
        <FeedNoUser />
      ) : (
        data.map((data, index) => <PostPage key={index} data={data} />)
      )}
      <TabMenu />
    </>
  );
};

export default FeedPage;
