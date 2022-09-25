import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../api/axiosPrivate';
import { IAuthContext } from '../interfaces/AuthContext.interface';
import { User } from '../interfaces/User.interface';
import { removeLocalStorage, setLocalStorage } from './localStorage.utils';

export const AuthContext = createContext<Partial<IAuthContext>>({});

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
  value: IAuthContext;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [location.pathname]);

  useEffect(() => {
    axiosPrivate
      .get('users/profile')
      .then((data) => data.data)
      .then((user: User) => {
        setUser(user);
        navigate('/');
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoadingInitial(false));
  }, []);

  const setUserInfo = async () => {
    setLoading(true);

    await axiosPrivate
      .get('users/profile')
      .then((data) => data.data)
      .then((data: User) => {
        setUser(data);
        navigate('/');
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const signIn = async (values: { email: string; password: string }) => {
    setLoading(true);

    await axiosPrivate
      .post('/auth/login', {
        email: values.email,
        password: values.password,
      })
      .then((data) => data.data)
      .then(async ({ accessToken, refreshToken }) => {
        setLocalStorage('session', { accessToken, refreshToken });
        await setUserInfo();
        navigate('/');
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const registerUser = async (values: { email: string; password: string }) => {
    setLoading(true);

    await axiosPrivate
      .post('/auth/register', {
        email: values.email,
        password: values.password,
      })
      .then((data) => data.data)
      .then(async ({ accessToken, refreshToken }) => {
        setLocalStorage('session', { accessToken, refreshToken });
        await setUserInfo();
        navigate('/');
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const changePassword = async (values: {
    currentPassword: string;
    newPassword: string;
  }) => {
    setLoading(true);

    await axiosPrivate
      .post('/users/changepassword', {
        password: values.currentPassword,
        newPassword: values.newPassword,
      })
      .then((data) => data.data)
      .then(() => {
        logout();
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const logout = () => {
    removeLocalStorage('session');
    setUser(null);
    navigate('/');
  };

  const memoizedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      setUserInfo,
      signIn,
      registerUser,
      changePassword,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
