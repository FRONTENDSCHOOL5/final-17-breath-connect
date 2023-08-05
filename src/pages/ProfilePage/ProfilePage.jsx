import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilCallback, useSetRecoilState } from 'recoil';
import { isEqual } from 'lodash';
import Loading from '../../components/common/Loading/Loading';
import Modal from '../../components/common/Modal/PostModal';
import IconPostModal from '../../components/common/Modal/IconPostModal';
import {
  deletePostData,
  resetProfile,
  logOut,
  reportUserPost,
  sharePost,
} from '../../components/common/Modal/ModalFunction';
import Header from '../../components/Header/TopBasicNavHeader';
import Footer from '../../components/Footer/TabMenu';
import PostPage from '../PostPage/PostPage';
import { getUserProfile } from '../../api/profile';
import { getMyPost } from '../../api/post';
import { loginAtom } from '../../atoms/LoginAtom';
import { isDarkModeState } from '../../atoms/StylesAtom';
import {
  tokenAtom,
  accountAtom,
  profileImgAtom,
  usernameAtom,
  introAtom,
} from '../../atoms/UserAtom';
import UserInfo from './UserInfo';
import { Container, Section } from './ProfilePageStyle'

const ProfilePage = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState();
  const [accountName, setAccountName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userToken = useRecoilValue(tokenAtom);
  const account = useRecoilValue(accountAtom);
  const setLoginState = useSetRecoilState(loginAtom);
  const [isDelete, setIsDelete] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);

  useEffect(() => {
    setAccountName(
      location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    );
  }, [location.pathname]);

  useEffect(() => {
    if (accountName) {
      fetchData();
    }
  }, [accountName, isDelete]);

  useEffect(() => {
    setIsDelete(false);
    setIsModalOpen(false);
  }, [isDelete]);

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
      console.log(postData);
      setPosts(postData.post);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  const handleResetState = useRecoilCallback(({ reset }) => () => {
    reset(tokenAtom);
    reset(accountAtom);
    reset(profileImgAtom);
    reset(usernameAtom);
    reset(introAtom);
  });

  const onShowModal = (postId) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (accountName === account) {
        setModalText(['삭제', '수정']);
        setModalFunc([
          () => deletePostData(userToken, postId.id, setIsDelete),
          () =>
            navigate(`/post/${account}/edit`, {
              state: {
                data: postId,
              },
            }),
        ]);
      } else {
        setModalText(['신고', '공유']);
        setModalFunc([
          () => reportUserPost(userToken, postId.id),
          () => sharePost(),
        ]);
      }
    }
  };

  const onShowHeaderModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (accountName === account) {
        setModalText(['설정 및 개인정보', '로그아웃']);
        setModalFunc([
          () => resetProfile(accountName, navigate),
          () => logOut(handleResetState, setLoginState, navigate),
        ]);
      } else {
        setModalText(['신고', '공유']);
        setModalFunc([
          () => resetProfile(accountName, navigate),
          () => logOut(handleResetState, setLoginState, navigate),
        ]);
      }
    }
  };

  if (!posts) {
    return <Loading />;
  } else {
    return (
        <Container>
          <Header onButtonClick={onShowHeaderModal} />
          {profile && (
            <UserInfo
              data={profile}
              myProfile={
                JSON.parse(localStorage.getItem('recoil-persist'))[
                  'accountAtom'
                ] === accountName
              }
            />
          )}
          <Section>
          {posts.length > 0 &&
            posts.map((post, index) => (
              <PostPage key={index} data={post} showModal={onShowModal} />
            ))}
          </Section>
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
          <Footer />
        </Container>
    );
  }
};

export default ProfilePage;