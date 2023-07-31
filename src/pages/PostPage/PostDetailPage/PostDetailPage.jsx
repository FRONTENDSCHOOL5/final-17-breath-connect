import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Modal from '../../../components/common/Modal/PostModal';
import IconPostModal from '../../../components/common/Modal/IconPostModal';
import {
  deletePostData,
  reportUserPost,
  sharePost,
  deleteUserComment,
  reportUserComment,
} from '../../../components/common/Modal/ModalFunction';
import Header from '../../../components/Header/TopListNavHeader';
import Comment from '../../FeedPage/FeedComment';
import Post from '../PostPage';
import { isDarkModeState } from '../../../atoms/StylesAtom';
import { accountAtom, tokenAtom } from '../../../atoms/UserAtom';
import Theme, { darkColors } from '../../../styles/Theme';
import { getComment, postComment } from '../../../utils/Apis';
import BasicProfileImg from '../../../assets/images/basic-profile-xs.svg';
import BasicDarkProfileImg from '../../../assets/images/basic-profile-xs-dark.svg';
import {
  Container,
  Main,
  NoComment,
  Form,
  CommentInput,
  Image,
  Input,
  Button,
} from './PostDetailPageStyle';

const PostPageDetail = ({ theme }) => {
  const isDarkMode = useRecoilValue(isDarkModeState);
  const account = useRecoilValue(accountAtom);
  const token = useRecoilValue(tokenAtom);
  const location = useLocation();
  const data = location.state?.data;
  const postId = location.state?.data.id;
  const navigate = useNavigate();

  const [commentData, setCommentData] = useState();
  const [inputComment, setInputComment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteComment, setIsDeleteComment] = useState(false);

  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const [pickedPost, setPickedPost] = useState('');

  useEffect(() => {
    if (isDelete) {
      navigate(-1);
    }
    setIsDelete(false);
    setIsModalOpen(false);
    console.log(11);
  }, [isDelete]);

  useEffect(() => {
    setIsDeleteComment(false);
    setIsModalOpen(false);
    fetchCommentList();
  }, [isDeleteComment]);

  useEffect(() => {
    if (postId) {
      fetchCommentList();
    }
  }, [postId]);

  /* 댓글 리스트 받아오기 */
  const fetchCommentList = async () => {
    const response = await getComment(postId, token);
    setCommentData(response.comments);
    data.commentCount = response.comments.length;
  };

  const handleInput = (e) => {
    setInputComment(e.target.value);
  };

  /* 댓글 작성 */
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await postComment(token, postId, inputComment);
    setInputComment('');
    fetchCommentList();
  };

  // 모달
  const hiddenText = {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
  };

  const onShowModal = (postId) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (data.author.accountname === account) {
        setModalText(['삭제', '수정']);
        setModalFunc([
          () => deletePostData(token, postId.id, setIsDelete),
          () =>
            navigate(`edit`, {
              state: {
                data: postId,
              },
            }),
        ]);
      } else {
        setModalText(['신고', '공유']);
        setModalFunc([
          () => reportUserPost(token, postId.id),
          () => sharePost(),
        ]);
      }
    }
  };

  const onShowCommentModal = (index, comment) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (commentData[index].author.accountname === account) {
        setModalText(['삭제']);
        setModalFunc([
          () =>
            deleteUserComment(
              token,
              data.id,
              commentData[index],
              setIsDeleteComment
            ),
        ]);
      } else {
        setModalText(['신고']);
        setModalFunc([
          () => reportUserComment(token, pickedPost, commentData[index]),
        ]);
      }
    }
  };

  return (
    <ThemeProvider
      theme={theme || (isDarkMode ? { colors: darkColors } : Theme)}
    >
      <Container>
        <Header />
        <Main>
          <Post
            data={data}
            userFeedTextStyle={hiddenText}
            setPickedPost={setPickedPost}
            showModal={onShowModal}
          />
          {commentData && commentData.length > 0 ? (
            commentData.map((comment, index) => (
              <Comment
                key={comment.id}
                user={comment.author.username}
                time={comment.createdAt}
                content={comment.content}
                image={comment.author.image}
                handleCommentClick={() => onShowCommentModal(index, comment)}
              />
            ))
          ) : (
            <NoComment>댓글이 존재하지 않습니다 🥲</NoComment>
          )}
        </Main>
        <Form onSubmit={handleCommentSubmit}>
          <CommentInput>
            <Image
              src={isDarkMode ? BasicDarkProfileImg : BasicProfileImg}
              alt="프로필 비활성화"
            />
            <Input
              placeholder="댓글을 입력하세요..."
              onChange={handleInput}
              value={inputComment}
            />
          </CommentInput>
          <Button active={inputComment.trim() !== ''} type="submit">
            게시
          </Button>
        </Form>

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
      </Container>
    </ThemeProvider>
  );
};

export default PostPageDetail;
