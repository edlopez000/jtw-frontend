import { Alert, Button, Form, Input, Space, Typography } from 'antd';
import { formItemLayout } from '../utils/antd.utils';
import useAuth from '../utils/useAuth';

const { Title } = Typography;

export const PasswordReset = () => {
  const [form] = Form.useForm();
  const { error, loading, changePassword } = useAuth();

  const onFinish = async (values: any) => {
    changePassword
      ? changePassword(values)
      : console.log('changePassword function error');
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
      <Title>Password Change</Title>
      <Form
        form={form}
        name="password reset"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          {...formItemLayout}
          name="currentPassword"
          label="Current Password"
          rules={[
            {
              required: true,
              message: 'Please input your current password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="newPassword"
          label="New Password"
          rules={[
            {
              required: true,
              message: 'Please input your new password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="confirmNewPassword"
          label="Confirm New Password"
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Confirm your new password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('Both passwords do not match!')
                );
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
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default PasswordReset;
