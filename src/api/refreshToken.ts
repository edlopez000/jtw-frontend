import mem from 'mem';
import { axiosPublic } from './axiosPublic';

const getRefreshToken = async () => {
  const currentSession = JSON.parse(localStorage.getItem('session')!);

  try {
    const res = await axiosPublic.post('/auth/refreshToken', {
      refreshToken: currentSession?.refreshToken,
    });

    const session = res.data;

    if (!session?.accessToken) {
      localStorage.removeItem('session');
    }

    localStorage.setItem('session', JSON.stringify(session));
    return session;
  } catch (err) {
    localStorage.removeItem('session');
  }
};

const maxAge = 10000;

export const memoRefreshToken = mem(getRefreshToken, { maxAge });
