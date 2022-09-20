import { Content } from 'antd/lib/layout/layout';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../pages/Loading';
import useAuth from '../utils/useAuth';
import LogoutButton from './LogoutButton';

function AppBody() {
  const { user, loading } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    user ? setShowLogout(true) : setShowLogout(false);
  }, [user]);

  return (
    <Content>
      {loading ? <Loading /> : <Outlet />}
      {showLogout ? <LogoutButton /> : null}
    </Content>
  );
}

export default AppBody;
