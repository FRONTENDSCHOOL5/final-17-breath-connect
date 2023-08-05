import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Modal from '../../components/common/Modal/PostModal';
import IconPostModal from '../../components/common/Modal/IconPostModal';
import {
  reportUserPost,
  sharePost,
} from '../../components/common/Modal/ModalFunction';
import Loading from '../../components/common/Loading/Loading';
import Header from '../../components/Header/TopMainNavHeader';
import Footer from '../../components/Footer/TabMenu';
import PostPage from '../PostPage/PostPage';
import FeedNoUser from './FeedNoUser';
import { isDarkModeState } from '../../atoms/StylesAtom';
import { getFollowFeed } from '../../api/post';
import {Container, Section} from './FeedPageStyle'

const FeedPage = ({ theme }) => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const [pickedPost, setPickedPost] = useState('');
  const location = useLocation();
  const isDarkMode = useRecoilValue(isDarkModeState);
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
        <Container>
          <Header />
          <Section>
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
          </Section>
          <Footer />
        </Container>
    );
  }
};

export default FeedPage;
