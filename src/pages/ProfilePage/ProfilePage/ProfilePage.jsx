import React, { useState, useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilCallback, useSetRecoilState } from 'recoil';
import { useQuery, useInfiniteQuery } from 'react-query';
import Header from '../../../components/Header/TopBasicNavHeader';
import Footer from '../../../components/Footer/TabMenu';
import Loading from '../../../components/common/Loading/Loading';
import Modal from '../../../components/common/Modal/PostModal';
import IconPostModal from '../../../components/common/Modal/IconPostModal';
import {
  deletePostData,
  resetProfile,
  logOut,
  reportUserPost,
  sharePost,
} from '../../../components/common/Modal/ModalFunction';
import PostPage from '../../PostPage/PostPage';
import { getUserProfile } from '../../../api/profile';
import { getMyPost } from '../../../api/post';
import { loginAtom } from '../../../atoms/LoginAtom';
import { userInfoAtom } from '../../../atoms/UserAtom';
import ProfileCard from '../../../components/Profile/ProfileCard/ProfileCard';

const ProfilePage = () => {
  const { accountname: accountName } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userToken = localStorage.getItem('token');
  const userInfo = useRecoilValue(userInfoAtom);
  const account = userInfo.account;
  const setLoginState = useSetRecoilState(loginAtom);
  const [isDelete, setIsDelete] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);

  useEffect(() => {
    setIsDelete(false);
    setIsModalOpen(false);
  }, [isDelete]);

  const { data: userProfile, isLoading } = useQuery(['getUserProfile', accountName], () => getUserProfile(accountName));

  // Infinite scroll
  const { data: postData, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['getMyPost', accountName],
    ({ pageParam = 0 }) => getMyPost(accountName, 5, pageParam),
    {
      getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length : undefined,
    }
  );

  const posts = postData ? postData.pages.flatMap(page => page.post) : [];

  const handleResetState = useRecoilCallback(({ reset }) => () => {
    reset(userInfoAtom);
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

  if (isLoading) {
    return (
      <>
        <h1>isLoading</h1>
      </>
    );
  }

  return (
    <Container>
      <Header onButtonClick={onShowHeaderModal} />
      <>
        {userProfile && (
          <Suspense fallback={<Loading />}>
            <ProfileCard
              userProfile={userProfile.profile}
              myProfile={userInfoAtom.account === accountName}
            />
          </Suspense>
        )}
        <Section>
          {posts.length > 0 &&
            posts.map((post, index) => (
              <PostPage key={index} data={post} showModal={onShowModal} />
            ))}
          {hasNextPage && (
            <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </button>
          )}
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
      </>
      <Footer />
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div``;

const Section = styled.section`
  margin-bottom: 6rem;
`;
