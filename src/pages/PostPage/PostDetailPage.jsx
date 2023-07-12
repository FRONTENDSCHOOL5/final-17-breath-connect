import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PostPage from './PostPage';
import { getComment, postComment } from '../../utils/Apis';
import TopListNavHeader from '../../components/Header/TopListNavHeader';
import FeedComment from '../FeedPage/FeedComment';
import BasicProfileImg from '../../assets/images/basic-profile-xs.svg';
import { accountAtom, tokenAtom } from '../../atoms/UserAtom';
import PostModal from '../../components/common/Modal/PostModal';
import {
  Container,
  NoComment,
  Comment,
  StyledComment,
  CommentInput,
  ModalContainer,
  ModalContent,
  BackgroundOverlay,
  PostBtn,
  ContainerContent,
} from './PostStyle';

const PostPageDetail = () => {
  const account = useRecoilValue(accountAtom);
  const token = useRecoilValue(tokenAtom);
  const location = useLocation();
  const data = location.state?.data;
  const postId = location.state?.data.id;

  const [commentData, setCommentData] = useState();
  const [inputComment, setInputComment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopText, setModalTopText] = useState();
  const [modalBtmText, setModalBtmText] = useState();
  const modalRef = useRef(null);

  /* 댓글 리스트 받아오기 */
  const fetchCommentList = async () => {
    const response = await getComment(postId, token);
    setCommentData(response.comments);
    console.log(response);
  };

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
    if (postId) {
      fetchCommentList();
    }
  }, [postId]);

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
  };

  return (
    <Container>
      <TopListNavHeader />
      <ContainerContent>
        <PostPage
          data={data}
          onButtonClick={() => toggleModal('신고하기', '공유하기')}
          userFeedTextStyle={hiddenText}
        />
        {commentData && commentData.length > 0 ? (
          commentData.map((comment) => (
            <FeedComment
              key={comment.id}
              user={comment.author.username}
              time={comment.createdAt}
              content={comment.content}
              image={comment.author.image}
              handleCommentClick={() => {
                if (comment.author.username === account) {
                  toggleModal('삭제', '');
                } else {
                  toggleModal('신고하기', '');
                }
              }}
            />
          ))
        ) : (
          <NoComment>댓글이 존재하지 않습니다 🥲</NoComment>
        )}
      </ContainerContent>
      <Comment onSubmit={handleCommentSubmit}>
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
      </Comment>
      {isModalOpen && (
        <>
          <BackgroundOverlay />
          <ModalContainer
            isOpen={isModalOpen}
            onAnimationEnd={handleAnimationEnd}
          >
            <ModalContent ref={modalRef}>
              {commentData.map((comment) => (
                <PostModal
                  topText={modalTopText}
                  btmText={modalBtmText}
                  onClose={toggleModal}
                  onClick={() => handleCommentSubmit(comment.id)}
                />
              ))}
            </ModalContent>
          </ModalContainer>
        </>
      )}
    </Container>
  );
};

export default PostPageDetail;
