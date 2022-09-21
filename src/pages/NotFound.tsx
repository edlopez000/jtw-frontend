import { Button, Result, Space, Typography } from 'antd';
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
        <Result
          status="404"
          title="404"
          subTitle="How'd you get here? This page doesn't exist."
          extra={<Button onClick={() => navigate(-1)}>GO BACK</Button>}
        />
      </Space>
    </div>
  );
}

export default NotFound;
