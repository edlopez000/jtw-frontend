import { Space, Typography } from 'antd';
import SignInUpButton from '../components/LogInSignUpButton';

const { Title, Paragraph } = Typography;

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
      <Paragraph style={{ marginLeft: '15vw', marginRight: '15vw' }}>
        Welcome to a small practice app where I explore JSON Web Token for
        protecting API routes and user authentication.
      </Paragraph>
      <SignInUpButton />
    </Space>
  );
}

export default Welcome;
