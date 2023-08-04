import { authInstance } from './axiosInstance';

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
