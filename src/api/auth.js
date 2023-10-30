import { instance, imgInstance } from './axiosInstance';

/* 로그인 */
export const postUserLogin = async (formData) => {
  const res = {
    user: { 
      email: formData.email,
      password: formData.password,
     }
  };
  const response = await instance.post('/user/login', res);
  return response.data;
};

/* 이메일 중복 검사 */
export const postEmailDuplicate = async (email) => {
  const emailData = {
    user: {
      email: email,
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
      username: username,
      email: email,
      password: password,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };
  const response = await instance.post('/user/', userData);
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

/* 이미지 업로드 */
export const postUploadProfile = async (FormData) => {
  const response = await imgInstance.post('/image/uploadfile', FormData);
  return response.data;
};
