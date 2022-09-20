import { Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import useAuth from '../utils/useAuth';

const { Title } = Typography;

function AppHeader() {
  const { user } = useAuth();

  return (
    <div>
      <Header>
        <Title style={{ color: 'white', textAlign: 'center', fontSize: 35 }}>
          JTW Auth Practice
        </Title>
      </Header>
    </div>
  );
}

export default AppHeader;
