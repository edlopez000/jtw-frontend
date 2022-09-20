import { Button, Space } from 'antd';
import useAuth from '../utils/useAuth';

function LogoutButton() {
  const { user, logout, loading } = useAuth();

  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {user ? (
        <Button
          onClick={() => {
            logout ? logout() : console.log('set error');
          }}
          onSubmit={(event) => event.preventDefault()}
          loading={loading}
        >
          Logout
        </Button>
      ) : null}
    </Space>
  );
}

export default LogoutButton;
