import { Content } from 'antd/lib/layout/layout';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../utils/useAuth';
import LogoutButton from './LogoutButton';

function AppBody() {
  const { user } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    user ? setShowLogout(true) : setShowLogout(false);
  }, [user]);

  return (
    <Content>
      <Outlet />
      {showLogout ? <LogoutButton /> : null}
    </Content>
  );
}

export default AppBody;
