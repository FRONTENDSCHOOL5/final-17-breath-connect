import axios from 'axios';

const URL = 'https://api.mandarin.weniv.co.kr/';

export const instance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
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
