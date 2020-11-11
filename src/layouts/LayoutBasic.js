import React, { useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import "./LayoutBasic.scss";
import MenuTop from "../components/Web/MenuTop";
import MenuSide from "../components/Web/MenuSide";
import MenuCollapse from "../components/Web/MenuCollapse";
import Footer from "../components/Web/Footer"
export default function LayoutBasic(props) {
  const { Header, Content} = Layout;
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const renderComponent = () => { 
    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
      return (
        <>
        <Row>
            <Col md={4} />
            <Col md={16} >
         
              <MenuTop />
         
            </Col>
            <Col md={4} />
          </Row>
          <LoadRoutes routes={routes} />
          <Footer/>
          </>
      )
    }
    else { 
      return (<>
        <Layout>
           <MenuSide menuCollapsed={menuCollapsed} />
        
        <Layout
          className="layout-basic"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
        <Header className="layout-basic__header">
            <MenuCollapse menuCollapsed={menuCollapsed} setMenuCollapsed={ setMenuCollapsed} />
            </Header>
            <Content className="layout-basic__content">
            <LoadRoutes routes={routes} />
        
            </Content>
          <Footer className="layout-basic__footer"></Footer>
        </Layout>
        </Layout>
     </>)
    }
  }


  return (
      <>
          {renderComponent()}
         </>
      
 
  );
}
function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
