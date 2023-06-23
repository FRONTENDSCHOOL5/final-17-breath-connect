import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PostPage from './PostPage';
import styled from 'styled-components';
import { getPostDetail, getComment, postComment } from '../../utils/Apis';
import TopListNavHeader from '../../components/Header/TopListNavHeader';
import FeedComment from '../FeedPage/FeedComment';
import Comment from '../../components/common/Comment/Comment.jsx';

const PostPageDetail = () => {
  
  const postId = useParams().id;
  const [commentData, setCommentData] = useState();

  const location = useLocation();
  const data = location.state?.data;


  const fetchCommentList = async () => {
      const response = await getComment(postId);
      setCommentData(response.comments); 
      // 배열 안에, id, content, createdAt, author
    }
  
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
    <Comment 
    data={data}
    />
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

 // onclick여기서 만들어서 매개변수로 넘겨줘야 될 것 같아여 그럼 그 버튼컨테이너 참가버튼에 onhandleclick에 넘겨 줘야 할 것 같습니다.


   {/* <PostPage data={data} setDetail={location.state?.setDetail} />
      {commentData.map((comment, index) => (
        <FeedComment key={index} postId={comment} />
      ))} */}