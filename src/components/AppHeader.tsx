import { Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';

const { Title, Text } = Typography;

function AppHeader() {
  return (
    <Header>
      <Title style={{ color: 'white', textAlign: 'center', fontSize: 35 }}>
        JTW Auth Practice
      </Title>
    </Header>
  );
}

export default AppHeader;
