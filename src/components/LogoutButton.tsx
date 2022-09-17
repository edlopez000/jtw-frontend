import { Button } from 'antd';
import useAuth from '../utils/useAuth';

function LogoutButton() {
  const { user, logout } = useAuth();

  return (
    <>
      {user ? (
        <Button
          onClick={() => {
            logout ? logout() : console.log('set error');
          }}
        >
          Logout
        </Button>
      ) : null}
    </>
  );
}

export default LogoutButton;