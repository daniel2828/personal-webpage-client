import React from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import DaniLogo from "../../../assets/img/png/logo.png";
import "./MenuCollapse.scss";
export default function MenuCollapse(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-collapse">
      <div className="menu-collapse__left">
        <img
          className="menu-collapse__left-logo"
          src={DaniLogo}
          alt="Daniel Tendero García"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {Greeting(menuCollapsed)}
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
