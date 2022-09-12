import { Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { axiosPrivate } from '../api/axiosPrivate';

const { Text, Title } = Typography;

interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

function UserPage() {
  const [user, setUser] = useState<User>();

  const setUserInfo = async () => {
    const res: any = await axiosPrivate.get('users/profile');
    setUser(res.data);
  };

  useEffect(() => {
    setUserInfo();
  }, []);

  return (
    <div>
      <Typography>
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
