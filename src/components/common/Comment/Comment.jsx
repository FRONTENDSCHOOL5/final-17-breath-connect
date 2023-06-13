import React from 'react';
import styled from 'styled-components';
import profile from '../../../assets/images/profile.png';

const Comment = () => {
  return (
    <>
      <CommentWrap>
        <StyledComment>
          <img src={profile} alt="프로필 비활성화" />
          <CommentInput placeholder="댓글을 입력하세요..."></CommentInput>
        </StyledComment>
        <PostBtn>게시</PostBtn>
      </CommentWrap>
    </>
  );
};

export default Comment;

const CommentWrap = styled.div`
/* 하단 메뉴처럼 (footer) */
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  height: 6.1rem;
  background-color: ${({ theme }) => theme.colors.whiteText};
  font-size: ${({ theme }) => theme.fontSize.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const StyledComment = styled.div`

  img {
    width: 3.6rem;
    height: 3.6rem;
    margin: 1.3rem 0 1.2rem 1.6rem;
  }
`;

const CommentInput = styled.input`
  border: none;
  padding: 2.2rem 2rem 1.8rem;
  width: 60rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeHolderColor};
  }
`;

const PostBtn = styled.button`
  color: ${({ theme }) => theme.colors.placeHolderColor};
  margin-right: 2rem;
`;
