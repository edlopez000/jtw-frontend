import { Content } from 'antd/lib/layout/layout';
import SignIn from './SignIn';

function AppBody() {
  return (
    <Content
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SignIn />
    </Content>
  );
}

export default AppBody;
