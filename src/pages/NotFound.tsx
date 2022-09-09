import { Button, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Space direction="vertical" align="center">
        <Title>Not Found</Title>
        <Button onClick={() => navigate(-1)}>GO BACK</Button>
      </Space>
    </div>
  );
}

export default NotFound;
