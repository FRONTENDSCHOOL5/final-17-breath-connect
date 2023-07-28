import {
  putEditPost,
  deletePost,
  reportPost,
  deleteComment,
  reportComment,
} from '../../../utils/Apis';

export const deletePostData = async (userToken, pickedPost, setIsDelete) => {
  try {
    await deletePost(userToken, pickedPost);
    setIsDelete(true);
  } catch (error) {
    console.error('Error delete user posts:', error);
  }
};

export const modifyPost = async (userToken, pickedPost) => {
  try {
    await putEditPost(userToken, pickedPost);
  } catch (error) {
    console.error('Error delete user posts:', error);
  }
};

export const resetProfile = async (accountName, navigate) => {
  navigate(`/profile/${accountName}/editProfile`);
};

export const logOut = async (handleResetState, setLoginState, navigate) => {
  handleResetState();
  setLoginState(false);
  localStorage.removeItem('token');
  navigate('/');
};

export const reportUserPost = async (loginData, pickedPost) => {
  try {
    await reportPost(loginData, pickedPost);
    alert('신고되었습니다');
  } catch (error) {
    console.error('Error report user posts:', error);
  }
};

export const sharePost = () => {
  // navigator.clipboard.writeText('');
  alert('✨ 주소가 복사되었습니다 오예~!!✨');
};

export const deleteUserComment = async (
  token,
  pickedPost,
  commentData,
  setIsDeleteComment
) => {
  try {
    await deleteComment(token, pickedPost, commentData);
    setIsDeleteComment(true);
  } catch (error) {
    console.error('Error delete user comment:', error);
  }
};
export const reportUserComment = async (token, pickedPost, commentData) => {
  try {
    await reportComment(token, pickedPost, commentData);
  } catch (error) {
    console.error('Error report user comment:', error);
  }
};
