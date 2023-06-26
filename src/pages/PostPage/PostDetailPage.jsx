import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PostPage from './PostPage';
import styled, { keyframes, css } from 'styled-components';
import { getComment, postComment } from '../../utils/Apis';
import TopListNavHeader from '../../components/Header/TopListNavHeader';
import FeedComment from '../FeedPage/FeedComment';
import BasicProfileImg from '../../assets/images/basic-profile-xs.svg';

import IconPostModal from '../../components/common/Modal/IconPostModal';

const PostPageDetail = () => {

  const postId = useParams().id;
  const [commentData, setCommentData] = useState();
  const [inputComment, setInputComment] = useState('');
  const location = useLocation();
  const data = location.state?.data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopText, setModalTopText] = useState();
  const [modalBtmText, setModalBtmText] = useState();
  const modalRef = useRef(null);


  /* 댓글 리스트 받아오기 */
  const fetchCommentList = async () => {
      const response = await getComment(postId);
      setCommentData(response.comments); 
  }

  const handleInput = (e) => {
    setInputComment(e.target.value);
  };

  /* 댓글 작성 */
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await postComment(postId, inputComment);
    setInputComment('');
    fetchCommentList();
  };

  useEffect(() => {
    if(postId) {
      fetchCommentList();
    }
  }, [postId])
    

  // 모달

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

  const hiddenText = {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
  }

  return (
  <Container>
    <TopListNavHeader />
    <PostPage
    data={data}
    onButtonClick={() => toggleModal('신고하기', '공유하기')}
    userFeedTextStyle={hiddenText}/>
    {commentData && commentData.length > 0 ? (
      commentData.map((comment) => (
        <FeedComment
          key={comment.id}
          user={comment.author.username}
          time={comment.createdAt}
          content={comment.content}
          image={comment.author.image}
          handleCommentClick={() => toggleModal('신고하기', '')}
        />
      ))
    ) : (
      <p>댓글이 존재하지 않습니다 🥲</p>
    )}
    <CommentContainer onSubmit={handleCommentSubmit}>
        <StyledComment>
          <img src={BasicProfileImg} alt="프로필 비활성화" />
          <CommentInput
            placeholder="댓글을 입력하세요..."
            onChange={handleInput}
            value={inputComment}
          />
        </StyledComment>
        <PostBtn active={inputComment.trim() !== ''} type="submit">
          게시
        </PostBtn>
      </CommentContainer>
{isModalOpen && (
        <>
          <BackgroundOverlay />
          <ModalContainer isOpen={isModalOpen} onAnimationEnd={handleAnimationEnd}>
            <ModalContent ref={modalRef}>
            <IconPostModal topText={modalTopText} btmText={modalBtmText} onClose={toggleModal} />
            </ModalContent>
          </ModalContainer>
        </>
      )}
  </Container>
  
);
    }

export default PostPageDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
   p {
    margin-top: 2rem;
    text-align: center;
   }
`;

const CommentContainer = styled.form`
  width: 39rem;
  padding: 0 1.6rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 6.1rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  font-size: ${({ theme }) => theme.fontSize.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const StyledComment = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: 1.2rem;
  }
`;

const CommentInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding-right: 11.7rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeHolderColor};
  }
`;

const PostBtn = styled.button`
  color: ${({ theme }) => theme.colors.placeHolderColor};
  ${({ theme }) =>
    theme.colors.mainColor &&
    `
    &:not([disabled]) {
      color: ${theme.colors.mainColor};
      font-weight: 500;
    }
  `}

  ${({ active }) =>
    !active &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}
`;

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const ModalContainer= styled.div`
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