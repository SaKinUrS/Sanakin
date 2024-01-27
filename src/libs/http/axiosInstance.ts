import { LocalStorage, LocalStorageKeyEnum } from '@libs/localStorage';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    if (typeof window !== 'undefined') {
      const token = LocalStorage.getItem(LocalStorageKeyEnum.AccessToken);
      let parsedToken = '';

      if (token) {
        parsedToken = JSON.parse(token);
      }
      if (token) {
        return {
          ...config,
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
        };
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export { axiosInstance };
