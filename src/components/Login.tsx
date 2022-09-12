import { Button, Form, Input, Space, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../api/axiosPrivate';

const { Title, Text } = Typography;

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const res = await axiosPrivate.post('/auth/login', {
      email: values.email,
      password: values.password,
    });

    // Good opportunity to make this into a hook that takes in the response data from an endpoint
    localStorage.setItem(
      'session',
      JSON.stringify({
        accessToken: res.data?.accessToken,
        refreshToken: res.data?.refreshToken,
      })
    );

    navigate('../user');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space direction="vertical" align="center">
      <Typography>
        <Title style={{ textAlign: 'center' }}>Log in</Title>
      </Typography>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input style={{ width: 304 }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password style={{ width: 304 }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Text style={{ textAlign: 'center' }}>
        Need an account?
        <Link to="../signup"> Sign up here.</Link>
      </Text>
    </Space>
  );
}

export default Login;
