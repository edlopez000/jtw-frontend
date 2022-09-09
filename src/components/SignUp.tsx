import { Button, Input, Space, Typography } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function SignUp() {
  return (
    <Typography>
      <Title style={{ textAlign: 'center', fontSize: 25 }}>Sign up</Title>
      <Space direction="vertical">
        <Input placeholder="email" size="large" required />
        <Input placeholder="email again" size="large" required />
        <Input.Password placeholder="password" size="large" required />
        <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>sign me up</Button>
        </ButtonGroup>
        <Text>
          Already have an account?
          <Link to="../login"> Log in.</Link>
        </Text>
      </Space>
    </Typography>
  );
}

export default SignUp;
