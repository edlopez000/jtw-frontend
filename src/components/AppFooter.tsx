import { Typography } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { LogoutOutlined } from '@ant-design/icons';

const { Link } = Typography;

function AppFooter() {
  return (
    <Footer style={{ backgroundColor: '#051527' }}>
      <Link
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
        href="https://github.com/edlopez000/"
      >
        check out my github
        <LogoutOutlined rotate={-45} style={{ fontSize: '7px' }} />
      </Link>
    </Footer>
  );
}

export default AppFooter;
