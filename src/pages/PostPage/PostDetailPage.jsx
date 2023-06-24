import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PostPage from './PostPage';
import styled from 'styled-components';
import { getComment, postComment } from '../../utils/Apis';
import TopListNavHeader from '../../components/Header/TopListNavHeader';
import FeedComment from '../FeedPage/FeedComment';
import BasicProfileImg from '../../assets/images/basic-profile-xs.svg';

const PostPageDetail = () => {
  
  const postId = useParams().id;
  const [commentData, setCommentData] = useState();
  const [inputComment, setInputComment] = useState('');
  const location = useLocation();
  const data = location.state?.data;

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
    

  return (
  <Container>
    <TopListNavHeader />
    <PostPage data={data} />
    {commentData && commentData.length > 0 ? (
      commentData.map((comment) => (
        <FeedComment
          key={comment.id}
          user={comment.author.username}
          time={comment.createdAt}
          content={comment.content}
          image={comment.author.image}
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
