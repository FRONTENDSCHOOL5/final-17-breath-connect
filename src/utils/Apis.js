import axios from 'axios';

const URL = 'https://api.mandarin.weniv.co.kr/';

/* 기본 인스턴스 */
export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* 이미지 인스턴스 */
export const imgInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

/* auth 인스턴스 */
export const authInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

/* 로그인 */
export const postUserLogin = async (email, password) => {
  const loginData = {
    user: {
      email,
      password,
    },
  };
  const response = await instance.post('/user/login', loginData);
  return response.data;
};

/* 이메일 중복 검사 */
export const postEmailDuplicate = async (email) => {
  const emailData = {
    user: {
      email,
    },
  };
  const response = await instance.post('/user/emailvalid', emailData);
  return response.data;
};

/* 회원가입 */
export const postUserSignup = async (
  username,
  email,
  password,
  accountname,
  intro,
  image
) => {
  const userData = {
    user: {
      username,
      email,
      password,
      accountname,
      intro,
      image,
    },
  };
  const response = await instance.post('/user/', userData);
  return response.data;
};

/* 이미지 업로드 */
export const postUploadProfile = async (FormData) => {
  const response = await imgInstance.post('/image/uploadfile', FormData);
  return response.data;
};

/* 사용자 이름 중복 검사 */
export const postAccountnameDuplicate = async (userId) => {
  const userAccountname = {
    user: {
      accountname: userId,
    },
  };
  const response = await instance.post(
    '/user/accountnamevalid',
    userAccountname
  );
  return response.data;
};

/* 검색 정보 가져오기 */
export const getSearchResult = async (url, search, userToken) => {
  const req = await fetch(`${url}/user/searchuser/?keyword=${search}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-type': 'application/json',
    },
  });
  const res = await req.json();
  return res.slice(0, 9);
};

/* content 업로드 */
export const postContentUpload = async (post) => {
  const response = await authInstance.post(`/post/`, post);
  console.log(response);
  return response.data;
};

/* 팔로우 게시물 */
export const getFollowFeed = async (limit, skip) => {
  const response = await authInstance.get(`/post/feed`, {
    params: {
      limit,
      skip,
    },
  });
  const { posts } = response.data;
  // 응답에서 포스트들을 추출합니다.
  return posts;
};

/* 나의 게시글 목록 */
export const getMyPost = async (accountname) => {
  try {
    const response = await authInstance.get(
      `/post/${accountname}/userpost/?limit=Number&skip=Number`
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

/* 개인 프로필 정보 */
export const getUserProfile = async (token, account) => {
  try {
    const response = await authInstance.get(`/profile/${account}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 개인 게시물 정보 */
export const getUserPosts = async (token, accountname, limit, skip) => {
  try {
    const response = await authInstance.get(
      `/post/${accountname}/userpost/?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 수정 */
export const putEditPost = async (postId) => {
  try {
    const response = await authInstance.put(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 삭제 */
export const deletePost = async (postId) => {
  try {
    const response = await authInstance.delete(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 게시글 신고 */
export const reportPost = async (postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/report`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 팔로우 프로필 */
export const followProfile = async (accountname) => {
  try {
    const response = await authInstance.post(`/profile/${accountname}/follow`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 나의 프로필 정보 정보 불러오기 */
export const getMyInfo = async () => {
  try {
    const response = await authInstance.get(`/user/myinfo`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 프로필 수정 */
export const editProfile = async (userData) => {
  try {
    const response = await authInstance.put(`/user`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 팔로우 */
export const postFollow = async (accountname) => {
  try {
    const response = await authInstance.post(`/profile/${accountname}/follow`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 언팔로우 */
export const deleteFollow = async (accountname) => {
  try {
    const response = await authInstance.delete(
      `/profile/${accountname}/unfollow`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 팔로잉 리스트 */
export const getFollowingList = async (accountname) => {
  try {
    const response = await authInstance.get(
      `/profile/${accountname}/following/?limit=Number&skip=Number`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 팔로워 리스트 */
export const getFollowerList = async (accountname) => {
  try {
    const response = await authInstance.get(
      `/profile/${accountname}/follower/?limit=Number&skip=Number`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 유저 검색 */
export const getUserSearch = async (keyword) => {
  try {
    const response = await authInstance.get(
      `user/searchuser/?keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 좋아요 */
export const postLike = async (postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/heart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 좋아요 취소 */
export const deleteLike = async (postId) => {
  try {
    const response = await authInstance.post(`/post/${postId}/unheart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 댓글 작성 */
export const postComment = async (postId, comment) => {
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
export const getComment = async (postId) => {
  try {
    const response = await authInstance.get(`/post/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 댓글 삭제 */
export const deleteComment = async (postId, comment) => {
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
export const reportComment = async (postId, comment) => {
  try {
    const response = await authInstance.post(
      `/post/${postId}/comments/${comment.id}/report`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
