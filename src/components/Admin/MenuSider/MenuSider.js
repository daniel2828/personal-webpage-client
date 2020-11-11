import React from "react";

import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined , UserOutlined, UpOutlined} from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;
  var route = "";
  if (props.location.pathname !== "/admin") {
    
     route = props.location.pathname.substring(6, props.location.pathname.length);
  } else {
    route = "/admin";
  }
  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu  theme="dark" mode="inline" defaultSelectedKeys={route}>
        <Menu.Item  key="/admin">
          <Link to={"/admin"}>
            <span className="admin-sider__nav-text">
              <HomeOutlined />
              Home
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to={"/admin/users"}>
            <span className="admin-sider__nav-text">
              <UserOutlined />
              Usuarios
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/menu">
          <Link to={"/admin/menu"}>
            <span className="admin-sider__nav-text">
              <MenuOutlined />
              Menu
            </span>
          </Link>
        </Menu.Item>
         <Menu.Item key="/navigation">
          <Link to={"/admin/navigation"}>
            <span className="admin-sider__nav-text">
              <UpOutlined />
              Navigation
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
