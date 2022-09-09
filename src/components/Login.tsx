import { Button, Input, Space, Typography } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function Login() {
  return (
    <Typography>
      <Title style={{ textAlign: 'center', fontSize: 25 }}>Log in</Title>
      <Space direction="vertical">
        <Input placeholder="email" size="large" required />
        <Input.Password placeholder="password" size="large" required />
        <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>log me in</Button>
        </ButtonGroup>
        <Text>
          Need an account?
          <Link to="../signup"> Sign up here.</Link>
        </Text>
      </Space>
    </Typography>
  );
}

export default Login;
