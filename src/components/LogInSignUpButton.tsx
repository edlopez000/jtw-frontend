import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

function LogInSignUpButton() {
  return (
    <div>
      <Space>
        <Link to="/login">
          <Button size="large">Log In</Button>
        </Link>
        <Link to="/signup">
          <Button size="large">Sign Up</Button>
        </Link>
      </Space>
    </div>
  );
}

export default LogInSignUpButton;
