import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  timeout: 10000,
});

export const createCancelableRequest = () => {
  const controller = new AbortController();

  return {
    controller,
    signal: controller.signal,
  };
};

export default axiosInstance;
