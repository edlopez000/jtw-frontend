import SignInUpButton from '../components/LogInSignUpButton';
import { Space, Typography } from 'antd';

const { Title, Text } = Typography;

function Welcome() {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Title style={{ textAlign: 'center' }}>Howdy!</Title>
      <Text>
        Welcome to a small practice app where I explore JSON Web Token for
        protecting API routes and user authentication.
      </Text>
      <SignInUpButton />
    </Space>
  );
}

export default Welcome;
