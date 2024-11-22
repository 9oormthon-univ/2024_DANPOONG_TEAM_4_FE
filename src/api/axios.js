import axios from 'axios';

//토큰이 불필요한 경우
export const publicApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_IP}/api`,
});

//토큰을 함께 보내는 instance
export const privateApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_IP}/api`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});
