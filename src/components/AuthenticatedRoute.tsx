import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../utils/useAuth';

export const AuthenticatedRoute = () => {
  const user = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('login', { replace: true, state: { from: location } });
  }
  return <Outlet />;
};
