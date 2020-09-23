import React from "react";
import { Button } from "antd";
import {
  PoweroffOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import DaniLogo from "../../../assets/img/png/logo.png";
import "./MenuTop.scss";
import { logout } from "../../../api/auth";
export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={DaniLogo}
          alt="Daniel Tendero García"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {Greeting(menuCollapsed)}
        </Button>
      </div>

      <div className="menu-top__right">
        <Button type="link" onClick={logoutTestUser}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
function logoutTestUser() {
  console.log("logout");
  logout();
  window.location.reload();
}
function Greeting(menuCollapsed) {
  if (menuCollapsed) {
    return <MenuFoldOutlined />;
  }
  return <MenuUnfoldOutlined />;
}
