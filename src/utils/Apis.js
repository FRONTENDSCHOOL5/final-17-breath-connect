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
  const response = await imgInstance.post('/image/uploadfiles', FormData);
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

/* content 업로드 */
export const postContentUpload = async (post) => {
  const response = await authInstance.post('/post/', post);
  console.log(response);
  return response.data;
};
