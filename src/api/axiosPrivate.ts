import axios from 'axios';
import { memoRefreshToken } from './refreshToken';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem('session')!);

    if (session?.accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${session?.accessToken}`,
      };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const config = err?.config;

    if (err?.response?.status === 401 && !config.sent) {
      config.sent = true;

      const result = await memoRefreshToken();

      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }
      return axios(config);
    }
    return Promise.reject(err);
  }
);

export const axiosPrivate = axios;
