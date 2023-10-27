import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'All',
    key: '1',
  },
  {
    label: 'Active',
    key: '2',
  },
  {
    label: 'Completed',
    key: '3',
  },  
];
const Header = (props) => {
  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    if(e.key ==="1"){
        props.method.all(true);
        props.method.active(false);
        props.method.complete(false);
    }
    else if(e.key === "2"){
        props.method.all(false);
        props.method.active(true);
        props.method.complete(false);
    }
    else{
        props.method.all(false);
        props.method.active(false);
        props.method.complete(true);
    }

    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;