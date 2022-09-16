import { Space, Typography } from 'antd';
import useAuth from '../utils/useAuth';

const { Title, Text } = Typography;

function UserPage() {
  const { user } = useAuth();

  return (
    <div>
      <Typography
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Space direction="vertical">
          <Title>Current User Info</Title>
          <Text>User ID: {user && user.id}</Text>
          <Text>Email: {user && user.email}</Text>
          <Text>Created At: {user && user.createdAt}</Text>
        </Space>
      </Typography>
    </div>
  );
}

export default UserPage;
