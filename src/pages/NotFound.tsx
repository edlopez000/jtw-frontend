import { Button, Result, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

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
          extra={<Button onClick={() => navigate('/user')}>GO HOME</Button>}
        />
      </Space>
    </div>
  );
}

export default NotFound;
