import { DownOutlined } from '@ant-design/icons';
import Icon, { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { Menu, MenuProps, theme, Typography } from 'antd';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuth';

const { Text } = Typography;

function NavigationMenu() {
  const { user, logout } = useAuth();

  const authedItems = [
    { label: <Link to="/">Home</Link>, key: 'home' },
    {
      label: <Link to="#">Account</Link>,
      key: 'account',
      expandicon: <DownOutlined style={{ color: 'white' }} />,
      children: [
        { label: <Link to="/user">Profile</Link>, key: 'profile' },
        {
          label: <Link to="/changepassword">Change Password</Link>,
          key: 'change-password',
        },
        {
          label: <Link to="#">Logout</Link>,
          key: 'logout',
        },
      ],
    },
  ];

  const unAuthedItems = [{ label: <Link to="/">Home</Link>, key: 'home' }];

  const click: MenuProps['onClick'] = (e) => {
    e.key === 'logout' ? logout!() : null;
  };

  return (
    <Menu
      items={user ? authedItems : unAuthedItems}
      mode="horizontal"
      onClick={click}
      theme="dark"
    />
  );
}

export default NavigationMenu;
