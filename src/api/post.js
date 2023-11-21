import { authInstance } from './axiosInstance';

/* content 업로드 */
export const postContentUpload = async (token, post) => {
  const response = await authInstance.post(`/post/`, post);
  console.log(response);
  return response.data;
};

/* 팔로우 게시물 */
export const getFollowFeed = async (limit, skip, token) => {
  try {
    const response = await authInstance.get(`/post/feed`, {
      params: {
        limit,
        skip,
      },
    });
    const { posts } = response.data;
    return posts;
  } catch (error) {
    console.log(error);
  }
};

/* 나의 게시글 목록 */
export const getMyPost = async (accountname, limit, skip) => {
  try {
    const response = await authInstance.get(
      `/post/${accountname}/userpost/?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 상세 게시물 */
export const getPostDetail = async (postId) => {
  try {
    const response = await authInstance.get(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 수정 */
export const putEditPost = async (token, post, postId) => {
  try {
    const response = await authInstance.put(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 삭제 */
export const deletePost = async (token, postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 신고 */
export const reportPost = async (token, postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/report`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 개인 게시물 정보 */
export const getUserPosts = async (accountname, limit, skip) => {
  try {
    const response = await authInstance.get(
      `/post/${accountname}/userpost/?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 좋아요 */
export const postLike = async (token, postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/heart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 좋아요 취소 */
export const deleteLike = async (token, postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}/unheart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
