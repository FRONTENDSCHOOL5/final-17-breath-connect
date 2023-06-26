import React, { useState, useEffect, useRef } from 'react';
import UserInfo from './UserInfo';
import TopBasicNavHeader from '../../components/Header/TopBasicNavHeader';
import PostPage from '../PostPage/PostPage';
import { getUserProfile, getMyPost } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';
import { useLocation } from 'react-router-dom';
import TabMenu from '../../components/Footer/TabMenu';
import IconPostModal from '../../components/common/Modal/IconPostModal';
import styled, { keyframes, css } from 'styled-components';
import { isEqual } from 'lodash';

const ProfilePage = () => {
  const location = useLocation();
  const userToken = useRecoilValue(tokenAtom);
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState();
  const [accountName, setAccountName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopText, setModalTopText] = useState();
  const [modalBtmText, setModalBtmText] = useState();
  const [profileKey, setProfileKey] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    setAccountName(
      location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    );
  }, [location.pathname]);

  useEffect(() => {
    if (accountName) {
      fetchData();
    }
  }, [accountName]);

  useEffect(() => {
    if (profile) {
      // profile이 변경될 때마다 profileKey 값을 변경하여 UserInfo 컴포넌트를 다시 렌더링
      setProfileKey((prevKey) => prevKey + 1);
    }
  }, [profile]);

  const fetchData = async () => {
    try {
      await getProfile();
      await getPost();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getProfile = async () => {
    try {
      const profileData = await getUserProfile(userToken, accountName);
      setProfile((prevProfile) => {
        if (isEqual(prevProfile, profileData.profile)) {
          return prevProfile;
        }
        return profileData.profile;
      });
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

  return (
    <>
      {console.log(profile)}
      <TopBasicNavHeader
        onButtonClick={() => toggleModal('설정 및 개인정보', '로그아웃')}
      />

      {profile && (
        <UserInfo
          key={profileKey}
          data={profile}
          myProfile={
            JSON.parse(localStorage.getItem('recoil-persist'))[
              'accountAtom'
            ] === accountName
          }
        />
      )}

      {posts.length > 0 &&
        posts.map((post, index) => (
          <PostPage
            key={index}
            data={post}
            onButtonClick={() => toggleModal('삭제', '수정')}
          />
        ))}

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
  );
};

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

export default ProfilePage;
