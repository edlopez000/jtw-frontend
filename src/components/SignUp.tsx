import { Button, Form, Input, Space, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPublic } from '../api/axiosPublic';

const { Title, Text } = Typography;

function SignUp() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const res = await axiosPublic.post('/auth/register', {
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

  return (
    <Space direction="vertical" align="center">
      <Typography>
        <Title style={{ textAlign: 'center' }}>Sign up</Title>
      </Typography>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: '35vw' }}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('Passwords entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Already have an account?
        <Link to="../login"> Log in.</Link>
      </Text>
    </Space>
  );
}

export default SignUp;
