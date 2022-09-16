import { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';

function AppBody() {
  return (
    <Content>
      <Outlet />
    </Content>
  );
}

export default AppBody;
