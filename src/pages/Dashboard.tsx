import { Space, Typography } from 'antd';

const { Title, Paragraph } = Typography;

function Dashboard() {
  return (
    <Space direction="vertical">
      <Title style={{ textAlign: 'center' }}>Dashboard</Title>
      <Paragraph style={{ marginLeft: '15vw', marginRight: '15vw' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        deleniti quae! Quod tempore illo recusandae omnis. Minima, dolore?
        Expedita dolore repudiandae perspiciatis? Distinctio fuga porro esse
        tenetur autem? Sint, pariatur!
      </Paragraph>
    </Space>
  );
}

export default Dashboard;
