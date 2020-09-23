import React from "react";

import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/admin"]}>
        <Menu.Item key="/admin">
          <Link to={"/admin"}>
            <span className="admin-sider__nav-text">
              <HomeOutlined />
              Home
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <span className="admin-sider__nav-text">
              <MenuOutlined />
              Usuarios
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
