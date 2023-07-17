import React, { useState, useEffect, useRef } from 'react';
import UserInfo from './UserInfo';
import TopBasicNavHeader from '../../components/Header/TopBasicNavHeader';
import PostPage from '../PostPage/PostPage';
import Loading from '../../components/common/Loading/Loading';
import { getUserProfile, getMyPost } from '../../utils/Apis';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/UserAtom';
import { useLocation } from 'react-router-dom';
import TabMenu from '../../components/Footer/TabMenu';
import IconPostModal from '../../components/common/Modal/IconPostModal';
import { isEqual } from 'lodash';
import {
  ModalContainer,
  ModalContent,
  BackgroundOverlay,
} from './style/ProfilePageStyle';

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
  const [isPostDeleted, setIsPostDeleted] = useState(false);
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
    setIsModalOpen(false);
  }, [isPostDeleted]);

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
      const postData = await getMyPost(userToken, accountName, 10, 0);
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

  useEffect(() => {
    if (isPostDeleted) {
      fetchData();
      setIsPostDeleted(false);
    }
  }, [isPostDeleted]);

  useEffect(() => {
    if (profile) {
      // profile이 변경될 때마다 profileKey 값을 변경하여 UserInfo 컴포넌트를 다시 렌더링
      setProfileKey((prevKey) => prevKey + 1);
    }
  }, [profile]);

  if (!posts) {
    return <Loading />;
  } else {
    return (
      <>
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
                {posts.map((post, index) => (
                  <IconPostModal
                    topText={modalTopText}
                    btmText={modalBtmText}
                    onClose={toggleModal}
                    accountName={accountName}
                    key={index}
                    data={post}
                    setIsPostDeleted={setIsPostDeleted}
                  />
                ))}
              </ModalContent>
            </ModalContainer>
          </>
        )}
        <TabMenu />
      </>
    );
  }
};

export default ProfilePage;
