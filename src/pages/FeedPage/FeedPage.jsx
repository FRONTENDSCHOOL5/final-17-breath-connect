import React, { useEffect, useState, useRef } from 'react';
import PostPage from '../PostPage/PostPage';
import TopMainNavHeader from '../../components/Header/TopMainNavHeader';
import FeedNoUser from './FeedNoUser';
import Loading from '../../components/common/Loading/Loading';
import TabMenu from '../../components/Footer/TabMenu';
import { getFollowFeed } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';
import { useLocation } from 'react-router-dom';

import IconPostModal from '../../components/common/Modal/IconPostModal';
import styled, { keyframes, css, ThemeProvider } from 'styled-components';

import { isDarkModeState } from '../../atoms/StylesAtom';
import Theme, { darkColors } from '../../styles/Theme';


const FeedPage = ({theme}) => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopText, setModalTopText] = useState();
  const [modalBtmText, setModalBtmText] = useState();
  const modalRef = useRef(null);

  const token = useRecoilValue(tokenAtom);
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

  // modal
  const toggleModal = (topText, btmText) => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    setModalTopText(topText);
    setModalBtmText(btmText);
  };

  const handleAnimationEnd = () => {
    if (!isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, []);

  const isDarkMode = useRecoilValue(isDarkModeState);


  if (!data) {
  <Loading /> }
  else {
return (
  <ThemeProvider theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}>
    <>
      <TopMainNavHeader />
      {data.length === 0 ? (
        <FeedNoUser />
      ) : (
        data.map((data, index) => (
          <PostPage
            key={index}
            data={data}
            onButtonClick={() => toggleModal('신고하기', '공유하기')}
          />
        ))
      )}
      {isModalOpen && (
        <>
          <BackgroundOverlay />
          <ModalContainer
            isOpen={isModalOpen}
            onAnimationEnd={handleAnimationEnd}
          >
            <ModalContent ref={modalRef}>
              <IconPostModal
                topText={modalTopText}
                btmText={modalBtmText}
                onClose={toggleModal}
              />
            </ModalContent>
          </ModalContainer>
        </>
      )}
      <TabMenu />
    </>
    </ThemeProvider>
  );
  }
};

export default FeedPage;

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  height: 85rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 99999;
  animation: ${({ isOpen }) =>
    isOpen &&
    css`
      ${slideUpAnimation} 0.5s ease-in-out forwards;
    `};
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  height: 13.8rem;
  background-color: white;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;
