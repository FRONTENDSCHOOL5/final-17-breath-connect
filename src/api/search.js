import { authInstance } from './axiosInstance';

/* 검색 정보 가져오기 */
export const getSearchResult = async (url, search, token) => {
  const response = await authInstance.get(
    `${url}/user/searchuser/?keyword=${search}`
  );
  return response.data.slice(0, 9);
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
