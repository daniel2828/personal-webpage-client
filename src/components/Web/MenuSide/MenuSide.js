import React, { useState, useEffect}from 'react'
import "./MenuSide.scss"
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

import { getMenuApi } from "../../../api/menu";
 function MenuSide(props) {
    const { menuCollapsed } = props;
    const { Sider } = Layout;
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        getMenuApi().then(response => { 
            const arrayMenu = [];
            console.log(response);
            response.menus.forEach(item => {
                item.active && arrayMenu.push(item);
                
            });
            setMenuData(arrayMenu);
        })
    }, [])
    return (
    <Sider className="web-sider" collapsed={menuCollapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
           
            {menuData.map((item => { 
                const external = item.url.indexOf("http") > -1 ? true : false;

                if (external) {
                    return (
                        <Menu.Item key={item._id} className="menu-top-web__item">
                            <a href={item.url} target="_blank">{item.title}</a>
                        </Menu.Item>)
                } else { 
                    return (
                    <Menu.Item key={item._id} className="menu-top-web__item">
                            <Link to={item.url}>{item.title}</Link>
                    </Menu.Item>)
                }
            }))}
        </Menu>
    </Sider>
    )
}
export default withRouter(MenuSide);

