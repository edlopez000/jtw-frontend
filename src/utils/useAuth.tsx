import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../api/axiosPrivate';
import { User } from '../interfaces/User.interface';
import { IAuthContext } from '../interfaces/AuthContext.interface';
import { setLocalStorage } from './setLocalStorage';

export const AuthContext = createContext<Partial<IAuthContext>>({});

export const AuthProvider = ({
  children,
  value,
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
        navigate('../user');
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
        navigate('../user');
      })
      .catch((error) => setError(error))
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
      .then(({ accessToken, refreshToken }) => {
        setLocalStorage('session', { accessToken, refreshToken });
        navigate('../user');
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const registerUser = async (values: { email: string; password: string }) => {
    return await axiosPrivate
      .post('/auth/login', {
        email: values.email,
        password: values.password,
      })
      .then((data) => data.data)
      .then(({ accessToken, refreshToken }) => {
        setLocalStorage('session', { accessToken, refreshToken });
        navigate('../user');
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memoizedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      setUserInfo,
      signIn,
      registerUser,
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
