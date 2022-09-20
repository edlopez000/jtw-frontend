import { Space, Spin, Typography } from 'antd';

const { Title } = Typography;

function Loading() {
  return (
    <Space
      direction="horizontal"
      style={{ width: '100%', justifyContent: 'center' }}
    >
      <Spin size="large" />
      <Typography>
        <Title>Loading</Title>
      </Typography>
    </Space>
  );
}

export default Loading;
