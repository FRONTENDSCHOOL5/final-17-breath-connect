import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../../atoms/UserAtom';
import BasicProfileImg from '../../../assets/images/basic-profile-xs.svg';
import { postComment } from '../../../utils/Apis';

const Comment = ({ data }) => {
  const postId = useParams().id;
  const userToken = useRecoilValue(tokenAtom);
  const [inputComment, setInputComment] = useState('');

  const handleInput = (e) => {
    const comment = e.target.value;
    setInputComment(comment);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await postComment(postId, inputComment);
    console.log(response);
  };

  return (
    <>
      <CommentContainer onSubmit={handleCommentSubmit}>
        <StyledComment>
          <img src={BasicProfileImg} alt="프로필 비활성화" />
          <CommentInput
            placeholder="댓글을 입력하세요..."
            onChange={handleInput}
          />
        </StyledComment>
        <PostBtn active={inputComment.trim() !== ''} type="submit">
          게시
        </PostBtn>
      </CommentContainer>
    </>
  );
};

export default Comment;

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
