import React, { useEffect, useState } from 'react';
import PostPage from '../PostPage/PostPage';
import TopMainNavHeader from '../../components/Header/TopMainNavHeader';
import FeedNoUser from './FeedNoUser';
import Loading from '../../components/common/Loading/Loading';
import TabMenu from '../../components/Footer/TabMenu';
import { getFollowFeed } from '../../utils/Apis';
import Modal from '../../components/common/Modal/PostModal';
import IconPostModal from '../../components/common/Modal/IconPostModal';
import { useLocation } from 'react-router-dom';
import {
  reportUserPost,
  sharePost,
} from '../../components/common/Modal/ModalFunction';
import { isDarkModeState } from '../../atoms/StylesAtom';
import styled, { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import Theme, { darkColors } from '../../styles/Theme';

const FeedPage = ({ theme }) => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const isDarkMode = useRecoilValue(isDarkModeState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const [pickedPost, setPickedPost] = useState('');

  const location = useLocation();
  const loginData = location.state?.token || localStorage.getItem('token');

  const fetchData = async () => {
    if (isFetchingData) return;
    setIsFetchingData(true);

    const newData = await getFollowFeed(limit, skip, loginData);
    if (newData.length > 0) {
      setData((prevData) => [...prevData, ...newData]);
      setSkip((prevSkip) => prevSkip + limit);
    }
    setIsFetchingData(false);
  };

  useEffect(() => {
    fetchData();
  }, [loginData]);

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

  const onShowModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      setModalText(['신고', '공유']);
      setModalFunc([
        () => reportUserPost(loginData, pickedPost),
        () => sharePost(),
      ]);
    }
  };

  if (!data) {
    return <Loading />;
  } else {
    return (
      <ThemeProvider
        theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}
      >
        <>
          <TopMainNavHeader />
          {data.length === 0 ? (
            <FeedNoUser />
          ) : (
            data.map((data, index) => (
              <PostPage
                key={index}
                data={data}
                showModal={onShowModal}
                setPickedPost={setPickedPost}
              />
            ))
          )}
          {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen}>
              {modalText.map((text, index) => (
                <IconPostModal
                  key={index}
                  text={text}
                  onButtonClick={modalFunc[index]}
                />
              ))}
            </Modal>
          )}
          <TabMenu />
        </>
      </ThemeProvider>
    );
  }
};

export default FeedPage;
