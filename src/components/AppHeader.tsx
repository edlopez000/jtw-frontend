import { Header } from 'antd/lib/layout/layout';
import NavigationMenu from './NavigationMenu';

function AppHeader() {
  return (
    <Header style={{ backgroundColor: '#051527' }}>
      <NavigationMenu />
    </Header>
  );
}

export default AppHeader;
