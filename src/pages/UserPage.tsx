import { Space, Typography } from 'antd';

const { Text, Title } = Typography;

function UserPage() {
  return (
    <div>
      <Typography>
        <Space direction="vertical">
          <Title>Current User Info</Title>
          <Text>User ID: </Text>
          <Text>Email: </Text>
          <Text>Created At: </Text>
        </Space>
      </Typography>
    </div>
  );
}

export default UserPage;
