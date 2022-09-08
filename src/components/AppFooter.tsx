import { Typography } from 'antd';
import { Footer } from 'antd/lib/layout/layout';

const { Text } = Typography;

function AppFooter() {
  return (
    <Footer style={{ backgroundColor: '#051527' }}>
      <Text
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Footie with link to Github
      </Text>
    </Footer>
  );
}

export default AppFooter;
