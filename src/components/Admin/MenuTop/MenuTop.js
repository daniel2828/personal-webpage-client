import React from "react";
import { Button } from "antd";
import {
  PoweroffOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import DaniLogo from "../../../assets/img/png/logo.png";
import "./MenuTop.scss";
export default function MenuTop(props) {
  console.log("Menu top " + props);
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
        <Button type="link" onClick={() => console.log("desconexion")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
function Greeting(menuCollapsed) {
  if (menuCollapsed) {
    return <MenuFoldOutlined />;
  }
  return <MenuUnfoldOutlined />;
}
