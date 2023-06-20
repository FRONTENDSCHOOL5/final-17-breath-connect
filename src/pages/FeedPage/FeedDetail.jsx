import React from 'react';
import { useLocation } from 'react-router-dom';
import Feed from './Feed';
import styled from 'styled-components';
import FeedComment from './FeedComment';
const FeedDetail = () => {
  const dataComment = {
    comment: [
      {
        id: '1',
        content: '1',
        createdAt: '2021-12-20T06:10:26.803Z',
        author: {
          _id: '작성자 id',
          username: '1',
          accountname: '1',
          intro: '1',
          image: '1',
          following: [],
          follower: [],
          followerCount: 0,
          followingCount: 0,
        },
      },
      {
        id: '2',
        content: '2',
        createdAt: '2021-12-20T06:10:26.803Z',
        author: {
          _id: '작성자 id',
          username: '1',
          accountname: '1',
          intro: '1',
          image: '1',
          following: [],
          follower: [],
          followerCount: 0,
          followingCount: 0,
        },
      },
      {
        id: '3',
        content: '3',
        createdAt: '2021-12-20T06:10:26.803Z',
        author: {
          _id: '작성자 id',
          username: '1',
          accountname: '1',
          intro: '1',
          image: '1',
          following: [],
          follower: [],
          followerCount: 0,
          followingCount: 0,
        },
      },
    ],
  };
  const location = useLocation();
  const data = location.state?.data;

  return (
    <Container>
      <Feed data={data} setDetail={location.state?.setDetail} />
      {dataComment.comment.map((comment, index) => (
        <FeedComment key={index} data={comment} />
      ))}
    </Container>
  );
};

export default FeedDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
