import { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';

function AppBody() {
  return (
    <Content style={{ marginTop: '3vh' }}>
      <Outlet />
    </Content>
  );
}

export default AppBody;
