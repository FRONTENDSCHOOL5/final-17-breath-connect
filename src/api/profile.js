import { authInstance } from './axiosInstance';

/* 개인 프로필 정보 */
export const getUserProfile = async (account) => {
  try {
    const response = await authInstance.get(`/profile/${account}`);
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
export const editProfile = async (user) => {
  try {
    const response = await authInstance.put(`/user`, { user });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
