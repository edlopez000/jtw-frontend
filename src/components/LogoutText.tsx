import { Typography } from 'antd';
import useAuth from '../utils/useAuth';

const { Text } = Typography;

function LogoutText() {
  const { logout } = useAuth();

  return (
    <Text
      onClick={() => {
        logout ? logout() : console.debug('Error Logging out');
      }}
    >
      Logout
    </Text>
  );
}

export default LogoutText;
