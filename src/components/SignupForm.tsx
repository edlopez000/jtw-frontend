import { Alert, Button, Form, Input, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { formItemLayout } from '../utils/antd.utils';
import useAuth from '../utils/useAuth';

const { Title, Text } = Typography;

function SignupForm() {
  const [form] = Form.useForm();
  const { registerUser, error, loading } = useAuth();

  const onFinish = (values: any) => {
    registerUser
      ? registerUser(values)
      : console.log('Error while Registering User');
  };

  const onFinishFailed = () => {
    console.log('Failed to Register User');
  };

  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography>
        <Title style={{ textAlign: 'center' }}>Sign up</Title>
      </Typography>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label={<Text strong>Email:</Text>}
          {...formItemLayout}
          rules={[
            {
              type: 'email',
              message: 'Input is not valid Email!',
            },
            {
              required: true,
              message: 'Input your Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label={<Text strong>Password:</Text>}
          {...formItemLayout}
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
          label={<Text strong>Confirm Password:</Text>}
          dependencies={['password']}
          hasFeedback
          {...formItemLayout}
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
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {error?.message ? (
          <Form.Item {...formItemLayout}>
            <Alert type="error" message={error.message} />
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
            Register
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Already have an account?
        <Link to="/login"> Log in.</Link>
      </Text>
    </Space>
  );
}

export default SignupForm;
