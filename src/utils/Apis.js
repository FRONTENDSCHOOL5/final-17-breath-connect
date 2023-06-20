import axios from 'axios';

const URL = 'https://api.mandarin.weniv.co.kr/';

export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const imgInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

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

export const postEmailDuplicate = async (email) => {
  const emailData = {
    user: {
      email,
    },
  };
  const response = await instance.post('/user/emailvalid', emailData);
  return response.data;
};

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

export const postUploadProfile = async (FormData) => {
  const response = await imgInstance.post('/image/uploadfiles', FormData);
  return response.data;
};

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
