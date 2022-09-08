import { Button, Input, Space, Typography } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { Content } from 'antd/lib/layout/layout';

const { Text, Title } = Typography;

function AppBody() {
  return (
    <Content
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>
        <Title style={{ textAlign: 'center', fontSize: 25 }}>Sign in</Title>
        <Space direction="vertical">
          {/* <Text>Button with the option to either login or signup here</Text> */}
          <Input placeholder="email" size="large" />
          <Input.Password placeholder="password" size="large" />
          <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
            <Button>log me in</Button>
          </ButtonGroup>
        </Space>
      </Typography>
    </Content>
  );
}

export default AppBody;
