import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../utils/useAuth';

export const AuthenticatedRoute = () => {
  const user = useAuth();

  if (!user.user) {
    return <Navigate to={'login'} replace />;
  }
  return <Outlet />;
};
