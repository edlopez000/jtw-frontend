import { Space, Typography } from 'antd';
import { useState } from 'react';
import TextEditor from '../components/TextEditor';

const { Title } = Typography;

function CreatePosts() {
  const [title, setTitle] = useState('Edit your title');

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Title
        level={4}
        editable={{
          maxLength: 60,
          onChange: onTitleChange,
          triggerType: ['icon', 'text'],
        }}
        style={{ maxWidth: '70vw', textOverflow: 'ellipsis' }}
      >
        {title}
      </Title>
      <TextEditor />
    </Space>
  );
}

export default CreatePosts;
