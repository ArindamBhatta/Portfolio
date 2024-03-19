import "./Navbar.css"
import {Affix, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function Navbar() {

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile">
        <a href="https://heyzine.com/flip-book/a745d067a4.html" target="_blank"><span className="cv-layout"> Curriculum Vitae</span></a>
        </Menu.Item>
    </Menu>

  );
  return (
    <header className="header">
       <Affix offsetTop={0}>
      <nav className="navbar">
        <div className="Portfolio">
          <h3>Arindam Bhattacharyya</h3> 
        </div> 
        <div className="link-container">
        <Dropdown overlay={profileMenu}>
        <Avatar size={29} icon={<UserOutlined />} />
        </Dropdown>
        </div>
      </nav>
      </Affix>
    </header>
  )
}
