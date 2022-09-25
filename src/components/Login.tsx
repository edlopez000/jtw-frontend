import { Alert, Button, Form, Input, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { formItemLayout } from '../utils/antd.utils';
import useAuth from '../utils/useAuth';

const { Title, Text } = Typography;

function Login() {
  const { signIn, loading, error } = useAuth();

  const onFinish = async (values: any) => {
    signIn ? signIn(values) : console.log('Sign In Error');
  };

  const onFinishFailed = () => {
    console.log('Failed to Sign In');
  };

  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title style={{ textAlign: 'center' }}>Log in</Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<Text strong>Email:</Text>}
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          {...formItemLayout}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<Text strong>Password</Text>}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          {...formItemLayout}
        >
          <Input.Password />
        </Form.Item>

        {error?.message ? (
          <Form.Item>
            <Alert type="error" message={error.response.data.message} />
          </Form.Item>
        ) : null}

        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Text style={{ textAlign: 'center' }}>
        Need an account?
        <Link to="/signup"> Sign up here.</Link>
      </Text>
    </Space>
  );
}

export default Login;
