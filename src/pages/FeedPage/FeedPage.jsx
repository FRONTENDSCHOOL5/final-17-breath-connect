import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Modal from '../../components/common/Modal/PostModal';
import IconPostModal from '../../components/common/Modal/IconPostModal';
import { reportUserPost, sharePost } from '../../components/common/Modal/ModalFunction';
import Loading from '../../components/common/Loading/Loading';
import Header from '../../components/Header/TopMainNavHeader';
import Footer from '../../components/Footer/TabMenu';
import PostPage from '../PostPage/PostPage';
import FeedNoUser from './FeedNoUser';
import { isDarkModeState } from '../../atoms/StylesAtom';
import { getFollowFeed } from '../../api/post';
import { Container, Section } from './FeedPageStyle'

const FeedPage = ({ theme }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 5
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const [pickedPost, setPickedPost] = useState('');
  const isDarkMode = useRecoilValue(isDarkModeState);
  const userToken = localStorage.getItem('token');
  
  const fetchData = async () => {
    try {
      const newData = await getFollowFeed(limit, skip, userToken);
      setIsLoading(false);
    if (newData.length > 0) {
      setData((prevData) => [...prevData, ...newData]);
      setSkip((prevSkip) => prevSkip + limit);
    }
   } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [userToken]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        fetchData();
      }
    };

  useEffect(() => {
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
        () => reportUserPost(userToken, pickedPost),
        () => sharePost(),
      ]);
    }
  };

  return (
    <Container>
      <Header />
      <Section>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data.length === 0? (
              <FeedNoUser />
            ) : (
              data.map((postData, index) => (
                <PostPage
                  key={index}
                  data={postData}
                  showModal={() => onShowModal(postData)}
                  setPickedPost={setPickedPost}
                />
              ))
            )}
          </>
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
};

export default FeedPage;