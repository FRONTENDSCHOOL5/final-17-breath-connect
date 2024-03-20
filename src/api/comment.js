import { authInstance } from './axiosInstance';

/* 댓글 작성 */
export const postComment = async (token, postId, comment) => {
  const commentData = {
    comment: {
      content: comment,
    },
  };
  const response = await authInstance.post(
    `/post/${postId}/comments`,
    commentData
  );
  return response.data;
};

/* 댓글 리스트 */
export const getComment = async (postId, token) => {
  try {
    const response = await authInstance.get(`/post/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 댓글 삭제 */
export const deleteComment = async (token, postId, comment) => {
  try {
    const response = await authInstance.delete(
      `/post/${postId}/comments/${comment.id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 댓글 신고 */
export const reportComment = async (token, postId, comment) => {
  try {
    const response = await authInstance.post(
      `/post/${postId}/comments/${comment.id}/report`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
